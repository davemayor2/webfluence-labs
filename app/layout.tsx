import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Satoshi font for big headings - using Inter as fallback until Satoshi is available
// If you have Satoshi font files, place them in /public/fonts/ and update paths
const satoshi = Inter({
  subsets: ["latin"],
  variable: "--font-satoshi",
  display: "swap",
  // TODO: Replace with actual Satoshi font when available
  // Uncomment below when Satoshi fonts are added to /public/fonts/
  // const satoshi = localFont({
  //   src: [
  //     { path: "../fonts/Satoshi-Regular.woff2", weight: "400" },
  //     { path: "../fonts/Satoshi-Medium.woff2", weight: "500" },
  //     { path: "../fonts/Satoshi-Bold.woff2", weight: "700" },
  //   ],
  //   variable: "--font-satoshi",
  // });
});

// Geist font for body and smaller headings
const geist = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Webfluence Labs",
  description: "Webfluence Labs - Digital Solutions & Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${satoshi.variable} ${geist.variable} font-geist antialiased bg-background-dark text-white`}
      >
        {children}
      </body>
    </html>
  );
}

