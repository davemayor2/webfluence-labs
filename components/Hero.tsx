"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMagneticHover } from "@/hooks/useMagneticHover";

const businesses = [
  "Beyond Skin",
  "Nitroblaze",
  "XRM ROI",
  "Digebee",
  "C&D Hotdogs",
];

export default function Hero() {
  const magneticProps = useMagneticHover();

  return (
    <motion.section
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,177,213,0.1),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl">
          {/* Main Heading */}
          <motion.h1
            className="font-satoshi text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight pr-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            We help businesses with websites built with strategy, designed for{" "}
            <span className="bg-gradient-to-r from-primary-blue-light to-primary-blue bg-clip-text text-transparent">
              growth.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="font-geist text-xl md:text-2xl text-white mb-10 max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Get a fast, modern, conversion-focused website that attracts more
            customers, builds trust, and drives consistent business growth.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <Link
              href="/contact"
              ref={magneticProps.ref as any}
              onMouseMove={magneticProps.onMouseMove}
              onMouseLeave={magneticProps.onMouseLeave}
              style={{ ...magneticProps.style, color: "#0C2331" }}
              className="inline-block bg-primary-blue hover:bg-primary-blue-light px-8 py-4 rounded-full font-medium text-lg transition-shadow duration-200 hover:shadow-lg hover:shadow-primary-blue/50"
            >
              Get a Free Website Strategy Call
            </Link>
          </motion.div>

          {/* Trusted By Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          >
            <p className="font-geist text-white/80 mb-6 text-base md:text-lg">
              Trusted by startups, businesses, and growing brands across
              industries
            </p>

            {/* Scrolling Businesses */}
            <div className="relative overflow-hidden group">
              {/* Left fade gradient */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
              
              {/* Right fade gradient */}
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
              
              {/* Scrolling content */}
              <div className="flex animate-scroll-infinite">
                {/* Multiple sets for seamless infinite loop - using 2 sets for 50% translation */}
                {[...Array(2)].map((_, setIndex) =>
                  businesses.map((business, index) => (
                    <div
                      key={`set-${setIndex}-${index}`}
                      className="flex-shrink-0 mx-8 text-white text-xl md:text-2xl font-geist whitespace-nowrap"
                    >
                      {business}
                    </div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

