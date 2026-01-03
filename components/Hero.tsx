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
  const CAL_LINK = "https://cal.com/heykumarnitish/30min";

  return (
    <motion.section
      className="relative min-h-screen flex items-center pt-40 pb-20 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/HeroVid2.webm" type="video/webm" />
        </video>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/35" />
      </div>
      
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/70 z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,177,213,0.12),transparent_70%)] z-[1]" />

      <div className="container mx-auto px-8 sm:px-10 lg:px-16 xl:px-24 relative z-10">
        <div className="max-w-site-container">
          <div className="space-y-10">
            <div className="space-y-6">
              {/* Main Heading */}
              <motion.h1
                className="font-satoshi text-4xl md:text-4xl lg:text-6xl font-semibold text-white leading-tight pr-4 pt-18 max-w-6xl"
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
                className="font-geist text-base md:text-lg text-white/80 max-w-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                Get a fast, modern, conversion-focused website that attracts more
                customers, builds trust, and drives consistent business growth.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              >
                <Link
                  href={CAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={magneticProps.ref as any}
                  onMouseMove={magneticProps.onMouseMove}
                  onMouseLeave={magneticProps.onMouseLeave}
                  style={{ ...magneticProps.style, color: "#0C2331" }}
                  className="inline-block bg-primary-blue hover:bg-primary-blue-light px-7 py-2.5 rounded-full font-medium text-base transition-shadow duration-200 hover:shadow-lg hover:shadow-primary-blue/50"
                >
                  Get a Free Strategy Call
                </Link>
              </motion.div>
            </div>

            {/* Trusted By Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            >
              <div className="space-y-4">
                <p className="font-geist text-white/80 text-base md:text-lg">
                  Trusted by startups, businesses, and growing brands across
                  industries
                </p>

                {/* Scrolling Businesses */}
                <div className="relative overflow-hidden group max-w-2xl">
                  {/* Left fade gradient */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
                  {/* Right fade gradient */}
                  <div className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

                  {/* Scrolling content */}
                  <div className="animate-scroll-infinite">
                    {/* Two identical sets; parent translates -50% for a seamless loop */}
                    {[0, 1].map((setIndex) => (
                      <div
                        key={`set-${setIndex}`}
                        className="flex flex-shrink-0 items-center gap-10 pr-10"
                      >
                        {businesses.map((business, index) => (
                          <div
                            key={`set-${setIndex}-${index}`}
                            className="flex-shrink-0 text-white text-base md:text-lg font-geist whitespace-nowrap"
                          >
                            {business}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

