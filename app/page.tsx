import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PortfolioSlider from "@/components/PortfolioSlider";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Calendar from "@/components/Calendar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <PortfolioSlider />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <CTA />
      <Calendar />
      <FAQ />
      <Footer />
    </main>
  );
}

