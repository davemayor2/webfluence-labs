"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
      className="bg-black"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 items-start">
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
                src="/footer big logo.png"
                alt="Webfluence Labs"
                width={280}
                height={120}
                className="h-auto w-auto mx-auto"
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
    </motion.footer>
  );
}
