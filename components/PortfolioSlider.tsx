"use client";

import Image from "next/image";

const portfolioItems = [
  { id: 1, image: "/portfolio/Frame 25.png", title: "Project 1" },
  { id: 2, image: "/portfolio/Frame 74.png", title: "Project 2" },
  { id: 3, image: "/portfolio/Frame 76.png", title: "Project 3" },
  { id: 4, image: "/portfolio/Frame 77.png", title: "Project 4" },
  { id: 5, image: "/portfolio/Frame 78.png", title: "Project 5" },
  { id: 6, image: "/portfolio/Frame 79.png", title: "Project 6" },
  { id: 7, image: "/portfolio/Frame 80.png", title: "Project 7" },
  { id: 8, image: "/portfolio/Frame 81.png", title: "Project 8" },
  { id: 9, image: "/portfolio/Frame 82.png", title: "Project 9" },
  { id: 10, image: "/portfolio/Frame 83.png", title: "Project 10" },
  { id: 11, image: "/portfolio/Frame 84.png", title: "Project 11" },
  { id: 12, image: "/portfolio/Frame 85.png", title: "Project 12" },
  { id: 13, image: "/portfolio/Frame 86.png", title: "Project 13" },
  { id: 14, image: "/portfolio/Frame 87.png", title: "Project 14" },
  { id: 15, image: "/portfolio/Frame 88.png", title: "Project 15" },
  { id: 16, image: "/portfolio/Frame 89.png", title: "Project 16" },
];

// Split items into two rows
const row1Items = portfolioItems.slice(0, Math.ceil(portfolioItems.length / 2));
const row2Items = portfolioItems.slice(Math.ceil(portfolioItems.length / 2)).reverse();

export default function PortfolioSlider() {
  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="w-full">
        {/* Two Rows with Opposite Scrolling */}
        <div className="space-y-8">
          {/* Row 1 - Scrolls Left */}
          <div className="relative overflow-hidden group w-full">
            <div className="flex animate-scroll-left">
              {/* Multiple sets for seamless infinite loop - using 2 sets for 50% translation */}
              {[...Array(2)].map((_, setIndex) =>
                row1Items.map((item) => (
                  <div key={`row1-set-${setIndex}-${item.id}`} className="flex-shrink-0 mx-4">
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
            <div className="flex animate-scroll-right">
              {/* Multiple sets for seamless infinite loop - using 2 sets for 50% translation */}
              {[...Array(2)].map((_, setIndex) =>
                row2Items.map((item) => (
                  <div key={`row2-set-${setIndex}-${item.id}`} className="flex-shrink-0 mx-4">
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
    </section>
  );
}

