"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useMagneticHover } from "@/hooks/useMagneticHover";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const magneticProps = useMagneticHover();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 bg-black">
        <div className="container mx-auto px-8 sm:px-10 lg:px-16 xl:px-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-satoshi text-4xl md:text-5xl font-bold mb-4">
                Get In Touch
              </h1>
              <p className="font-geist text-gray-400 text-lg">
                Have a project in mind? Let's discuss how we can help bring
                your vision to life.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-geist font-semibold text-white mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-geist font-semibold text-white mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-geist font-semibold text-white mb-2"
                  >
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-colors"
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-geist font-semibold text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  ref={magneticProps.ref}
                  onMouseMove={magneticProps.onMouseMove}
                  onMouseLeave={magneticProps.onMouseLeave}
                  style={{ ...magneticProps.style, color: "#0C2331" }}
                  className="w-full bg-primary-blue hover:bg-primary-blue-light px-8 py-4 rounded-full font-semibold text-lg transition-shadow duration-200 hover:shadow-lg hover:shadow-primary-blue/50"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-12 pt-8 border-t border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-satoshi font-bold text-white mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:info@webfluencelabs.com"
                      className="font-geist text-gray-400 hover:text-primary-blue transition-colors"
                    >
                      info@webfluencelabs.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-satoshi font-bold text-white mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:+1234567890"
                      className="font-geist text-gray-400 hover:text-primary-blue transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

