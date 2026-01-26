$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$publicDir = Join-Path $root "public"
$src = Join-Path $publicDir "favicon.png"

if (!(Test-Path $src)) {
  throw "Source favicon not found: $src"
}

$img = [System.Drawing.Image]::FromFile($src)
Write-Host ("Source favicon.png: {0}x{1}" -f $img.Width, $img.Height)

function Save-Png([int]$size, [string]$outName) {
  $bmp = New-Object System.Drawing.Bitmap $size, $size
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $g.Clear([System.Drawing.Color]::Transparent)
  
  # Center-crop to a square to avoid distortion if source isn't perfectly square
  $side = [Math]::Min($img.Width, $img.Height)
  $srcX = [int](($img.Width - $side) / 2)
  $srcY = [int](($img.Height - $side) / 2)
  $srcRect = New-Object System.Drawing.Rectangle $srcX, $srcY, $side, $side
  $dstRect = New-Object System.Drawing.Rectangle 0, 0, $size, $size
  $g.DrawImage($img, $dstRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

  $outPath = Join-Path $publicDir $outName
  $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)

  $g.Dispose()
  $bmp.Dispose()

  Write-Host ("Wrote {0}" -f $outName)
}

Save-Png 16  "favicon-16x16.png"
Save-Png 32  "favicon-32x32.png"
Save-Png 48  "favicon-48x48.png"
Save-Png 180 "apple-touch-icon.png"
Save-Png 192 "android-chrome-192x192.png"
Save-Png 512 "android-chrome-512x512.png"

# Build favicon.ico (PNG-compressed frames) with 16/32/48
$icoPath = Join-Path $publicDir "favicon.ico"
$sizes = @(16, 32, 48)
$frames = @()

foreach ($s in $sizes) {
  $ms = New-Object System.IO.MemoryStream
  $bmp = New-Object System.Drawing.Bitmap $s, $s
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $g.Clear([System.Drawing.Color]::Transparent)
  
  $side = [Math]::Min($img.Width, $img.Height)
  $srcX = [int](($img.Width - $side) / 2)
  $srcY = [int](($img.Height - $side) / 2)
  $srcRect = New-Object System.Drawing.Rectangle $srcX, $srcY, $side, $side
  $dstRect = New-Object System.Drawing.Rectangle 0, 0, $s, $s
  $g.DrawImage($img, $dstRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
  $bmp.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose()
  $bmp.Dispose()

  $frames += ,@($s, $ms.ToArray())
  $ms.Dispose()
}

$bw = New-Object System.IO.BinaryWriter([System.IO.File]::Open($icoPath, [System.IO.FileMode]::Create))

# ICONDIR
$bw.Write([UInt16]0) # reserved
$bw.Write([UInt16]1) # type: icon
$bw.Write([UInt16]$frames.Count) # count

# ICONDIRENTRY + image data
$offset = 6 + (16 * $frames.Count)
$entries = New-Object System.Collections.Generic.List[byte[]]

foreach ($f in $frames) {
  $s = [int]$f[0]
  $png = [byte[]]$f[1]

  $w = if ($s -ge 256) { 0 } else { [byte]$s }
  $h = if ($s -ge 256) { 0 } else { [byte]$s }

  $entryStream = New-Object System.IO.MemoryStream
  $ew = New-Object System.IO.BinaryWriter($entryStream)
  $ew.Write($w)              # width
  $ew.Write($h)              # height
  $ew.Write([byte]0)         # colors
  $ew.Write([byte]0)         # reserved
  $ew.Write([UInt16]1)       # planes
  $ew.Write([UInt16]32)      # bit count
  $ew.Write([UInt32]$png.Length) # bytes in res
  $ew.Write([UInt32]$offset) # image offset
  $ew.Flush()
  $entries.Add($entryStream.ToArray())
  $ew.Dispose()
  $entryStream.Dispose()

  $offset += $png.Length
}

foreach ($e in $entries) { $bw.Write($e) }
foreach ($f in $frames) { $bw.Write([byte[]]$f[1]) }

$bw.Flush()
$bw.Dispose()

$img.Dispose()

Write-Host "Wrote favicon.ico"

