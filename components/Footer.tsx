"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SeamlessLoopVideo from "@/components/SeamlessLoopVideo";

const menuLinks = [
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Services", href: "/#services" },
  { name: "FAQs", href: "/#faq" },
];

const socialLinks = [
  { name: "Facebook", icon: "/facebook icon.svg", href: "#" },
  { name: "Twitter", icon: "/twitter icon.svg", href: "#" },
  { name: "LinkedIn", icon: "/linkedin icon.svg", href: "#" },
  { name: "Instagram", icon: "/ig icon.svg", href: "#" },
];

export default function Footer() {
  return (
    <motion.footer
      className="bg-black relative overflow-hidden"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <SeamlessLoopVideo
          sources={[{ src: "/HeroVid2.webm", type: "video/webm" }]}
          crossfadeMs={650}
          activeOpacity={0.6}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/55" />
      </div>
      <div className="container mx-auto px-8 sm:px-10 lg:px-16 xl:px-24 py-12 md:py-16 relative z-10">
        <div className="max-w-site-container">
          {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr_1fr] gap-12 md:gap-8 lg:gap-12 items-start">
          {/* Left Column - Menu */}
          <div className="text-center md:text-left">
            <h3 className="font-geist text-sm text-gray-400 mb-4 uppercase tracking-wide">
              Menu
            </h3>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-geist text-white hover:opacity-70 transition-opacity duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Column - Branding */}
          <div className="text-center">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/footer-big-logo2.png"
                alt="Webfluence Labs"
                width={1000}
                height={250}
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 420px, 560px"
                className="mx-auto h-auto w-[320px] sm:w-[380px] md:w-[460px] lg:w-[560px] max-w-none"
                priority
              />
            </Link>
            {/* Copyright */}
            <p className="font-geist text-sm text-gray-400 mt-8">
              ©2025 – All Rights Reserved.
            </p>
          </div>

          {/* Right Column - Socials */}
          <div className="text-center md:text-right">
            <h3 className="font-geist text-sm text-gray-400 mb-4 uppercase tracking-wide">
              Socials
            </h3>
            <ul className="flex flex-col items-center md:items-end space-y-4">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 bg-black hover:border-white/60 hover:opacity-90 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </div>
    </motion.footer>
  );
}
