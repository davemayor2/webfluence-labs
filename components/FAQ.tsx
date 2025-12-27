"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary based on complexity. A typical branding project takes 2-4 weeks, while a full website or e-commerce build can take 4-8 weeks. We'll provide you with a detailed timeline after understanding your specific requirements during our initial consultation.",
  },
  {
    question:
      "Do you support projects from branding through full website or e-commerce launch?",
    answer:
      "Yes, absolutely! We offer end-to-end services that can take you from initial branding through complete website or e-commerce development. We can work with you on individual services or comprehensive packages that cover the entire journey.",
  },
  {
    question: "What are the steps involved in your process?",
    answer:
      "Our process typically begins with a discovery call to understand your goals and requirements. Then we move through design, development (if applicable), review and revisions, testing, and finally launch. We'll provide regular updates and checkpoints throughout the process to ensure everything aligns with your vision.",
  },
  {
    question: "Do you offer post launch support?",
    answer:
      "Yes, we offer post-launch support packages to help you maintain, update, and scale your website or brand. This can include content updates, technical maintenance, security updates, and ongoing optimization to ensure your digital presence continues to perform well.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely! We specialize in redesigning existing websites to improve their performance, user experience, and conversion rates. We'll work with your current content and structure while implementing modern design principles and best practices.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "We work with businesses of all sizes - from startups to established enterprises. Our clients span various industries including e-commerce, professional services, SaaS companies, and service-based businesses. If you have a project that needs a strong digital presence, we'd love to chat.",
  },
  {
    question: "What platforms do you use for websites?",
    answer:
      "We're platform-agnostic and work with the best tools for each project. This includes WordPress, Framer, custom HTML/CSS/JavaScript, Next.js, and other modern web technologies. We'll recommend the best platform based on your specific needs, goals, and budget.",
  },
  {
    question:
      "What happens if I need changes after the project is completed?",
    answer:
      "After project completion, you can request changes through our revision process if you're within the agreed revision period. For ongoing changes, we offer flexible hourly rates or maintenance packages that suit your needs. We're committed to ensuring you're satisfied with your project.",
  },
  {
    question: 'What does "unlimited revisions" actually mean?',
    answer:
      "Unlimited revisions means we'll work with you through the revision period to refine and perfect your project until you're completely satisfied. There are reasonable boundaries to keep projects on track (for example, major scope changes would need to be discussed separately), but we're committed to getting the details right within the project scope.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFAQ(index);
    }
  };

  return (
    <motion.section
      id="faq"
      className="py-20 bg-black"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Left Aligned */}
        <motion.h2
          className="font-satoshi text-4xl md:text-5xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Questions? We've got answers.
        </motion.h2>

        {/* FAQ List */}
        <div className="w-full">
          <motion.div
            className="space-y-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.06 }}
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  layout
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    layout: { duration: 0.3, ease: "easeInOut" },
                    opacity: { duration: 0.4, ease: "easeOut" },
                    y: { duration: 0.4, ease: "easeOut" },
                  }}
                >
                  {/* FAQ Item */}
                  <div
                    className={`py-6 ${
                      index < faqs.length - 1 ? "border-b border-white/10" : ""
                    }`}
                  >
                    {/* Question Row */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-full flex justify-between items-center text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black gap-8"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                    >
                      {/* Question Text */}
                      <motion.span
                        className="font-geist text-lg md:text-xl text-white/90 group-hover:text-white flex-1 transition-colors duration-200"
                        whileHover={{ opacity: 1 }}
                      >
                        {faq.question}
                      </motion.span>

                      {/* Plus/X Icon */}
                      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                        <motion.svg
                          initial={false}
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                          className="w-6 h-6 text-white group-hover:text-white/90 transition-colors duration-200"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 4v16M4 12h16" />
                        </motion.svg>
                      </div>
                    </button>

                    {/* Answer - Animated */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: {
                              duration: 0.3,
                              ease: [0.4, 0, 0.2, 1],
                            },
                            opacity: {
                              duration: 0.2,
                              ease: "easeInOut",
                            },
                          }}
                          className="overflow-hidden"
                          role="region"
                          aria-labelledby={`faq-question-${index}`}
                        >
                          <motion.p
                            className="font-geist text-base md:text-lg text-gray-400 pt-4 pr-8 leading-relaxed"
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.4, 0, 0.2, 1],
                            }}
                          >
                            {faq.answer}
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
