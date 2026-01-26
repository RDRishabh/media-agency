import HeroAbout from "@/components/new_version/HeroAbout";
import AboutUs from "@/components/new_version/AboutUs";
import Strip from "@/components/new_version/strip";
import ProcessSection from "@/components/new_version/ProcessSection";
import Stats from "@/components/new_version/Stats";
import Navbar from "@/components/framer/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "About Us | Let'em Know",
  description: "A creative agency that gets it. We build content that stops the scroll.",
};

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      <HeroAbout />
      {/* <AboutUs/> */}
      <Strip />
      <SectionDivider />
      <ProcessSection />
      <SectionDivider />
      <Stats />
      
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Soft glow line */}
      <div className="mx-auto h-px w-[70%] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Ambient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
    </div>
  );
}