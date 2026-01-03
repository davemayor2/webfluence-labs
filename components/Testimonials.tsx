"use client";

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Daniel",
    role: "Consultant",
    content: "Our website looks modern, loads fast, and just works. Couldn't be happier.",
    rating: 5,
    avatar: "/testimonials/Ellipse 7.png",
  },
  {
    id: 2,
    name: "Priya",
    role: "Consultant",
    content: "The design is clean, easy to use, and works perfectly on mobile.",
    rating: 5,
    avatar: "/testimonials/Ellipse 7-1.png",
  },
  {
    id: 3,
    name: "Neha",
    role: "Marketing Lead",
    content: "Our website looks modern, loads fast, and just works. Couldn't be happier.",
    rating: 5,
    avatar: "/testimonials/Ellipse 7-2.png",
  },
  {
    id: 4,
    name: "Arjun",
    role: "Business Owner",
    content: "The design is clean, easy to use, and works perfectly on mobile.",
    rating: 5,
    avatar: "/testimonials/Ellipse 7-3.png",
  },
  {
    id: 5,
    name: "Sarah",
    role: "Product Manager",
    content: "They built us a store that's easy to manage and easy for customers to buy from.",
    rating: 5,
    avatar: "/testimonials/Ellipse 7-4.png",
  },
  {
    id: 6,
    name: "Alex",
    role: "Founder",
    content: "Webfluence Labs gave our brand a fresh, professional look. Everything now feels polished and premium.",
    rating: 5,
    avatar: "/testimonials/Ellipse 7.png",
  },
  {
    id: 7,
    name: "Michael",
    role: "Director",
    content: "Webfluence Labs is professional and more than capable of delivering quality work.",
    rating: 5,
    avatar: "/testimonials/Ellipse 7-1.png",
  },
  {
    id: 8,
    name: "Emma",
    role: "CEO",
    content: "The team delivered exactly what we needed. Highly professional and responsive.",
    rating: 5,
    avatar: "/testimonials/Ellipse 7-2.png",
  },
];

// Split testimonials into two rows
const row1Items = testimonials.slice(0, Math.ceil(testimonials.length / 2));

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
                      className="bg-[#0B0B0B] border border-white/10 rounded-xl p-5 flex-shrink-0 w-72"
                    >
                    {/* Star Ratings */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                            className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="font-geist text-sm text-white mb-5 leading-relaxed">
                      {testimonial.content}
                    </p>

                    {/* Profile Image, Name, and Role */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
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
                      </div>
                      <p className="font-geist text-gray-400 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
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
