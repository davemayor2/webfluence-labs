/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: false,
  },
  async headers() {
    return [
      {
        // Ensure background video is served inline (some environments may default to attachment/octet-stream)
        source: "/HeroVid2.webm",
        headers: [
          { key: "Content-Type", value: "video/webm" },
          { key: "Content-Disposition", value: "inline" },
          { key: "Accept-Ranges", value: "bytes" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;

