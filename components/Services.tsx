"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Branding",
    headline: "Make Your Brand Impossible to Ignore.",
    description:
      "If your brand looks forgettable, customers will treat it that way. We create bold, clear brand identities that build trust and position your business as the obvious choice.",
    image: "/brandservice.png",
  },
  {
    title: "Website Design",
    headline: "Build a Website That Actually Makes You Money.",
    description:
      "If your website isn't making you money, it's costing you money. We build conversion-first websites that turn cold traffic into booked calls consistently without you doing the heavy lifting.",
    image: "/webimg.png",
  },
  {
    title: "E Commerce",
    headline: "Build an online store designed for revenue.",
    description:
      "Traffic is useless if customers drop off before checkout. We design Scalable online stores with seamless checkout, secure payments, and a smooth shopping experience that sells.",
    image: "/ecommimg.png",
  },
];

export default function Services() {
  return (
    <motion.section
      id="services"
      className="py-20 bg-black"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Heading */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="font-geist text-4xl md:text-5xl font-medium text-white mb-4">
            Services
          </h2>
          {/* Divider Line */}
          <div className="h-px bg-[#454545] w-full" />
        </motion.div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.1 }}
            >
              {/* Service Item - 2 Column Grid */}
              <div className="py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Column - Text Content (~55% width) */}
                <div className="flex flex-col justify-center">
                  {/* Small Uppercase Label */}
                  <div className="font-geist text-xs md:text-sm font-medium text-white/60 uppercase tracking-wider mb-3">
                    {service.title}
                  </div>
                  {/* Large Bold Heading */}
                  <h3 className="font-geist text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-4">
                    {service.headline}
                  </h3>
                  {/* Paragraph Text */}
                  <p className="font-geist text-sm md:text-base text-white/80 leading-relaxed max-w-[480px]">
                    {service.description}
                  </p>
                </div>

                {/* Right Column - Image Preview (~45% width) */}
                <div className="flex items-center justify-center lg:justify-end">
                  <div className="relative w-full max-w-md lg:max-w-lg aspect-video">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Divider Line between services (except last) */}
              {index < services.length - 1 && (
                <div className="h-px bg-[#454545] w-full" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

