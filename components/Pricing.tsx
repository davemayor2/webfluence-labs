"use client";

import { motion } from "framer-motion";

const plans = [
  {
    title: "Branding",
    description:
      "For businesses that want to look credible, memorable, and positioned as the obvious choice in their market.",
    price: "299",
    features: [
      "Logo design (4 concepts)",
      "Brand colors and fonts",
      "Basic brand guidelines",
      "3 rounds revisions",
      "Source files",
      "Social media brand kit",
    ],
  },
  {
    title: "High Converting Landing Pages",
    description:
      "For businesses running ads or campaigns, launching products that need focused pages designed to turn traffic into leads and booked calls.",
    price: "299",
    features: [
      "High conversion copywriting",
      "Custom UI/UX",
      "Mobile responsive layout",
      "Unlimited revisions",
      "Analytics & tracking setup",
      "48 hours response time",
    ],
  },
  {
    title: "Websites & E-Commerce",
    description:
      "For businesses that need a professional, conversion-driven website or online store built to sell, and scale revenue.",
    price: "299",
    features: [
      "Custom web design",
      "Up to 5-10 pages",
      "Speed optimization",
      "High conversion copywriting",
      "Development (WordPress, Framer, HTML etc)",
      "Mobile Responsive Layout",
      "48 hours response time",
    ],
  },
];

export default function Pricing() {
  return (
    <motion.section
      id="pricing"
      className="py-20 bg-black"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title - Top Left */}
        <motion.h2
          className="font-geist text-4xl md:text-5xl font-medium text-white mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Plans
        </motion.h2>

        {/* Pricing Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-[#0B0B0B] border border-white/10 rounded-2xl p-8 flex flex-col transition-all duration-300 hover:translate-y-[-4px] hover:border-primary-blue-light/30 hover:shadow-lg hover:shadow-primary-blue-light/10"
              variants={{
                hidden: { opacity: 0, y: 14, scale: 0.98 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {/* Badge Header */}
              <div className="mb-6">
                <div className="inline-block bg-[#1A1A1A] rounded-full px-4 py-2">
                  <h3 className="font-geist font-medium text-white text-lg">
                    {plan.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="font-geist text-gray-400 text-sm mb-6 leading-relaxed">
                {plan.description}
              </p>

              {/* Price Section */}
              <div className="mb-8">
                <p className="font-geist text-white text-base">
                  Starts at{" "}
                  <span className="text-primary-blue-light font-semibold">
                    ${plan.price}
                  </span>
                </p>
              </div>

              {/* Feature List */}
              <ul className="space-y-4 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    {/* Check Icon - Teal/Cyan */}
                    <svg
                      className="w-5 h-5 text-primary-blue-light mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-geist text-white text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
