import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Channels from "../components/landing/Channels";
import Features from "../components/landing/Features";
import AISection from "../components/landing/AISection";
import Testimonials from "../components/landing/Testimonials";
import Pricing from "../components/landing/Pricing";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Channels />
      <Features />
      <AISection />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}