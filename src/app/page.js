import Hero from "@/components/sections/Hero";
import TrustedBrands from "@/components/sections/TrustedBrands";
import About from "@/components/sections/About";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <TrustedBrands />
      <About />
      <PortfolioPreview />
      <Services />
      <Testimonials />
    </div>
  );
}
