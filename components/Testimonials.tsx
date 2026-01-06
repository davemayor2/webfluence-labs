"use client";

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Ramesh",
    role: "Founder, XRM ROI",
    content: "The Webfluence labs team understood our goals quickly and translated them into a website that’s clean, strategic, and conversion-focused. The difference is noticeable.",
    rating: 5,
    avatar: "/testimonials/Ellipse 7.png",
  },
  {
    id: 2,
    name: "Mayuri",
    role: "Director, Beyond Skin",
    content: "The logo nailed our brand direction perfectly. It looks professional, stands out in our market, and finally reflects who we are as a business. The process was thoughtful, revisions were handled smoothly, and the final result feels timeless.",
    rating: 5,
    avatar: "/testimonials/Ellipse 7-1.png",
  },
  {
    id: 3,
    name: "Dontay",
    role: "Owner, C&D Gourmet",
    content: "Nitish and his team completely changed how our website performs. Before, we had traffic but very few inquiries. The new site is clear, fast, and more user friendly.",
    rating: 5,
    avatar: "/testimonials/Ellipse 7-2.png",
  },

];

// Split testimonials into two rows
const row1Items = testimonials;

export default function Testimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-8 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-site-container">
          {/* Section Title */}
        <h2 className="font-geist text-4xl md:text-5xl font-medium text-white mb-8">
          Testimonials
        </h2>

        {/* Infinite Scrolling */}
        <div>
          {/* Row - Scrolls Left */}
          <div className="relative overflow-hidden group w-full">
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black via-black/60 to-transparent z-10 pointer-events-none" />
            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black via-black/60 to-transparent z-10 pointer-events-none" />
            <div className="animate-scroll-left">
              {[0, 1].map((setIndex) => (
                <div
                  key={`row1-set-${setIndex}`}
                  className="flex flex-shrink-0 items-stretch gap-6 pr-6"
                >
                  {row1Items.map((testimonial) => (
                    <div
                      key={`row1-${setIndex}-${testimonial.id}`}
                      className="relative bg-[#0B0B0B] border border-white/10 rounded-xl px-6 pt-5 pb-12 flex-shrink-0 w-[300px] sm:w-[340px] md:w-[380px]"
                    >
                    {/* Star Ratings */}
                    <div className="absolute top-5 right-6 flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                            className="w-3.5 h-3.5 text-white/80"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Profile Image, Name */}
                    <div className="order-first flex items-center gap-3 mb-4 pr-16">
                      <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="font-geist text-sm font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <p className="font-geist text-xs text-white/50 absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        {testimonial.role}
                      </p>
                    </div>

                    {/* Review Text */}
                    <p className="font-geist text-sm text-white/60 leading-relaxed">
                      {testimonial.content}
                    </p>
                  </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
