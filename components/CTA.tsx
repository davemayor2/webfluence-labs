"use client";

import Image from "next/image";
import Link from "next/link";
import { useMagneticHover } from "@/hooks/useMagneticHover";

export default function CTA() {
  const magneticProps = useMagneticHover();

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width card with background image */}
        <div className="relative rounded-[25px] overflow-hidden w-full">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/CTA img.png"
              alt="CTA Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Dimmed Overlay for contrast */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-10 py-20 px-8 md:px-16 lg:px-24 text-center">
            {/* Heading */}
            <h2 className="font-satoshi text-[44px] md:text-5xl font-medium text-white mb-6 leading-tight">
              Your website shouldn't be a missed opportunity
            </h2>

            {/* Subheading */}
            <p className="font-geist text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's see how we can help you build a strong online presence that
              actually drives revenue.
            </p>

            {/* CTA Button */}
            <Link
              href="/contact"
              ref={magneticProps.ref as any}
              onMouseMove={magneticProps.onMouseMove}
              onMouseLeave={magneticProps.onMouseLeave}
              style={{ ...magneticProps.style, color: "#0C2331" }}
              className="inline-block bg-primary-blue hover:bg-primary-blue-light px-10 py-4 rounded-full font-semibold text-lg transition-shadow duration-200 hover:shadow-lg hover:shadow-primary-blue/50"
            >
              Book a free strategy call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
