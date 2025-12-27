"use client";

import { motion } from "framer-motion";

// Animated Icon Components
const AnimatedGrowthIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <motion.path
      d="M3 18L9 12L13 16L21 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
    <motion.circle
      cx="21"
      cy="8"
      r="2"
      fill="currentColor"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        delay: 1.5,
        ease: "easeInOut",
      }}
    />
  </svg>
);

const AnimatedRevisionsIcon = () => (
  <motion.svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
    animate={{ rotate: 360 }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <path
      d="M3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8V12L15 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

const AnimatedCommunicationIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <motion.rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.circle
      cx="8"
      cy="12"
      r="1"
      fill="currentColor"
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0,
      }}
    />
    <motion.circle
      cx="12"
      cy="12"
      r="1"
      fill="currentColor"
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.2,
      }}
    />
    <motion.circle
      cx="16"
      cy="12"
      r="1"
      fill="currentColor"
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.4,
      }}
    />
  </svg>
);

const AnimatedLightningIcon = () => (
  <motion.svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
    animate={{ scale: [1, 1.1, 1] }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <motion.path
      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ opacity: 0.7 }}
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </motion.svg>
);

const AnimatedPackageIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <motion.rect
      x="3"
      y="8"
      width="18"
      height="13"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ y: 8 }}
      animate={{ y: [8, 6, 8] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.path
      d="M3 8L12 3L21 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.line
      x1="12"
      y1="21"
      x2="12"
      y2="8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5,
      }}
    />
  </svg>
);

const AnimatedHeadphonesIcon = () => (
  <motion.svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
    animate={{ y: [0, -2, 0] }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <motion.path
      d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.path
      d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V15C16 14.4696 16.2107 13.9609 16.5858 13.5858C16.9609 13.2107 17.4696 13 18 13H19C19.5304 13 20.0391 13.2107 20.4142 13.5858C20.7893 13.9609 21 14.4696 21 15V19Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ opacity: 0.7 }}
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5,
      }}
    />
    <motion.path
      d="M3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V15C8 14.4696 7.78929 13.9609 7.41421 13.5858C7.03914 13.2107 6.53043 13 6 13H5C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15V19Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ opacity: 0.7 }}
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5,
      }}
    />
  </motion.svg>
);

const features = [
  {
    icon: AnimatedGrowthIcon,
    title: "Built for Growth",
    description:
      "Our websites are designed to convert, helping you turn traffic into leads, sales, and revenue.",
  },
  {
    icon: AnimatedRevisionsIcon,
    title: "Unlimited Revisions",
    description:
      "We refine and improve your website as needed during the agreed revision period — no rushed decisions.",
  },
  {
    icon: AnimatedCommunicationIcon,
    title: "Clear Communication",
    description:
      "You get regular updates and a clear understanding of what's happening at every stage.",
  },
  {
    icon: AnimatedLightningIcon,
    title: "Rapid Turnaround",
    description:
      "Clear timelines and an efficient process that gets your website live faster.",
  },
  {
    icon: AnimatedPackageIcon,
    title: "One Stop Solution",
    description:
      "Design, development, branding and ongoing support all handled under one roof.",
  },
  {
    icon: AnimatedHeadphonesIcon,
    title: "Post Launch Support",
    description:
      "We're here beyond launch — for updates, improvements, and scaling as your business grows.",
  },
];

export default function WhyChooseUs() {
  return (
    <motion.section
      id="why-choose-us"
      className="py-20 bg-black"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          className="font-geist text-4xl md:text-5xl font-medium text-white mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Why Choose Us
        </motion.h2>

        {/* Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <motion.div
                key={index}
                className="bg-[#0B0B0B] border border-white/10 rounded-xl p-8"
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                {/* Icon Container with Animation */}
                <div className="w-14 h-14 bg-[#0E1A2B] rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-primary-blue/10 rounded-lg blur-sm" />
                  <div className="relative z-10 flex items-center justify-center">
                    <IconComponent />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-geist font-semibold text-white mt-6 mb-4 text-lg">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-geist text-base text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
