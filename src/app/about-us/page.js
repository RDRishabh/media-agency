import HeroAbout from "@/components/sections/HeroAbout";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "About Us | Let'em Know",
  description: "A creative agency that gets it. We build content that stops the scroll.",
};

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      <HeroAbout />
      
      {/* About Content Section */}
      <section className="w-full py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          
          {/* Section header */}
          <div className="flex items-center gap-4 sm:gap-6 mb-12 md:mb-20">
            <span className="text-xs sm:text-sm text-white/60 tracking-widest whitespace-nowrap">
              WHO WE ARE
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-white/70 leading-tight">
                A creative agency{" "}
                <span className="block text-white font-medium">
                  that gets it.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-white/60 text-sm sm:text-base leading-relaxed">
              <p>
                We build content that stops the scroll. Design that feels. Strategy that sells.
              </p>
              <p>
                Whether it's a reel, a pitch, a campaign, or a brand — we don't just make it look good, we make it work.
              </p>
              <p>
                From scroll-stopping reels to brand-defining campaigns, we craft content that connects, converts, and leaves a lasting impression.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <p className="text-4xl sm:text-5xl md:text-6xl font-light text-white">50+</p>
              <p className="mt-2 text-sm text-white/50">Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-4xl sm:text-5xl md:text-6xl font-light text-white">30+</p>
              <p className="mt-2 text-sm text-white/50">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl sm:text-5xl md:text-6xl font-light text-white">3+</p>
              <p className="mt-2 text-sm text-white/50">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl sm:text-5xl md:text-6xl font-light text-white">∞</p>
              <p className="mt-2 text-sm text-white/50">Creative Ideas</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
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
      </section>
    </div>
  );
}
