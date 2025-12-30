"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// UI images for top slider
const uiItems = [
  { id: 1, image: "/portfolio/UI1.png", title: "UI 1" },
  { id: 2, image: "/portfolio/UI2.png", title: "UI 2" },
  { id: 3, image: "/portfolio/UI3.png", title: "UI 3" },
  { id: 4, image: "/portfolio/UI4.png", title: "UI 4" },
  { id: 5, image: "/portfolio/UI5.png", title: "UI 5" },
  { id: 6, image: "/portfolio/UI6.png", title: "UI 6" },
  { id: 7, image: "/portfolio/UI7.png", title: "UI 7" },
  { id: 8, image: "/portfolio/UI8.png", title: "UI 8" },
  { id: 9, image: "/portfolio/UI9.png", title: "UI 9" },
  { id: 10, image: "/portfolio/UI10.png", title: "UI 10" },
  { id: 11, image: "/portfolio/UI11.png", title: "UI 11" },
];

// Logo images for bottom slider
const logoItems = [
  { id: 1, image: "/portfolio/logo1.png", title: "Logo 1" },
  { id: 2, image: "/portfolio/logo2.png", title: "Logo 2" },
  { id: 3, image: "/portfolio/logo3.png", title: "Logo 3" },
  { id: 4, image: "/portfolio/logo4.png", title: "Logo 4" },
  { id: 5, image: "/portfolio/logo5.png", title: "Logo 5" },
  { id: 6, image: "/portfolio/logo6.png", title: "Logo 6" },
  { id: 7, image: "/portfolio/LOGO7.png", title: "Logo 7" },
];

// Top row uses UI images, bottom row uses logo images
const row1Items = uiItems;
const row2Items = logoItems;

export default function PortfolioSlider() {
  return (
    <motion.section
      id="portfolio"
      className="py-20 bg-black"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-8 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-site-container">
          {/* Two Rows with Opposite Scrolling */}
          <div className="space-y-8">
          {/* Row 1 - Scrolls Left */}
          <div className="relative overflow-hidden group w-full">
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black via-black/60 to-transparent z-10 pointer-events-none" />
            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black via-black/60 to-transparent z-10 pointer-events-none" />
            <div className="flex animate-scroll-left">
              {/* Multiple sets for seamless infinite loop - using 2 sets for 50% translation */}
              {[...Array(2)].map((_, setIndex) =>
                row1Items.map((item) => (
                  <div
                    key={`row1-set-${setIndex}-${item.id}`}
                    className="flex-shrink-0 mx-4"
                  >
                    <div className="relative w-64 h-40 md:w-80 md:h-48 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Row 2 - Scrolls Right */}
          <div className="relative overflow-hidden group w-full">
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black via-black/60 to-transparent z-10 pointer-events-none" />
            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black via-black/60 to-transparent z-10 pointer-events-none" />
            <div className="flex animate-scroll-right">
              {/* Multiple sets for seamless infinite loop - using 2 sets for 50% translation */}
              {[...Array(2)].map((_, setIndex) =>
                row2Items.map((item) => (
                  <div
                    key={`row2-set-${setIndex}-${item.id}`}
                    className="flex-shrink-0 mx-4"
                  >
                    <div className="relative w-64 h-40 md:w-80 md:h-48 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        </div>
      </div>
    </motion.section>
  );
}

