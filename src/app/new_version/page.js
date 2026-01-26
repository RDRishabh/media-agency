import HeroAbout from "@/components/new_version/HeroAbout";
import AboutUs from "@/components/new_version/AboutUs";
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
      <AboutUs/>

      {/* What We Believe
      <section className="w-full border-t border-white/10 py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          
          <div className="flex items-center gap-4 sm:gap-6 mb-12 md:mb-20">
            <span className="text-xs sm:text-sm text-white/60 tracking-widest whitespace-nowrap">
              WHAT WE BELIEVE
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white/70 leading-snug">
              Great content isn't just about{" "}
              <span className="text-white font-medium">looking good</span> — it's about{" "}
              <span className="text-white font-medium">making people feel something</span>, and then{" "}
              <span className="text-white font-medium">making them act.</span>
            </h2>
          </div>
        </div>
      </section> */}
    </div>
  );
}
