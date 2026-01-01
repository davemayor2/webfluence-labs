"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMagneticHover } from "@/hooks/useMagneticHover";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const magneticProps = useMagneticHover();

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-8 sm:px-10 lg:px-16 xl:px-24 py-4">
        <div
          className="flex items-center justify-between rounded-full px-8 py-5 backdrop-blur-xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(3, 29, 114, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%)",
            border: "1px solid #003556",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Webfluence Labs"
              width={320}
              height={120}
              className="h-10 md:h-12 lg:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <Link
              href="/"
              onClick={scrollToTop}
              className="text-white hover:text-primary-blue transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/#portfolio"
              className="text-white hover:text-primary-blue transition-colors duration-200 font-medium"
            >
              Portfolio
            </Link>
            <Link
              href="/#services"
              className="text-white hover:text-primary-blue transition-colors duration-200 font-medium"
            >
              Services
            </Link>
            <Link
              href="/#faq"
              className="text-white hover:text-primary-blue transition-colors duration-200 font-medium"
            >
              FAQS
            </Link>
          </div>

              {/* Desktop CTA Button */}
              <div className="hidden md:block flex-shrink-0">
                <Link
                  href="/contact"
                  ref={magneticProps.ref as any}
                  onMouseMove={magneticProps.onMouseMove}
                  onMouseLeave={magneticProps.onMouseLeave}
                  style={{ ...magneticProps.style, color: "#0C2331" }}
                  className="bg-primary-blue hover:bg-primary-blue-light px-8 py-3 rounded-full transition-shadow duration-200 hover:shadow-lg hover:shadow-primary-blue/50 font-medium inline-block"
                >
                  Book A Call
                </Link>
              </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

          {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Menu Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="md:hidden fixed top-20 left-4 right-4 p-8 rounded-2xl backdrop-blur-xl z-50"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(3, 29, 114, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%)",
                  border: "1px solid #003556",
                }}
              >
                <div className="flex flex-col space-y-6">
                  {/* Navigation Links */}
                  <Link
                    href="/"
                    onClick={scrollToTop}
                    className="text-white hover:text-primary-blue transition-colors font-medium text-lg"
                  >
                    Home
                  </Link>
                  <Link
                    href="/#portfolio"
                    className="text-white hover:text-primary-blue transition-colors font-medium text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/#services"
                    className="text-white hover:text-primary-blue transition-colors font-medium text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/#faq"
                    className="text-white hover:text-primary-blue transition-colors font-medium text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    FAQS
                  </Link>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Link
                      href="/contact"
                      ref={magneticProps.ref as any}
                      onMouseMove={magneticProps.onMouseMove}
                      onMouseLeave={magneticProps.onMouseLeave}
                      style={{ ...magneticProps.style, color: "#0C2331" }}
                      className="bg-primary-blue hover:bg-primary-blue-light px-8 py-3 rounded-full transition-shadow duration-200 text-center font-medium block w-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Connect with Us
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

