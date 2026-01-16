export default function About() {
  return (
    <section
      id="about"
      className="w-full border-t border-white/10 py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Section header */}
        <div className="flex items-center gap-4 sm:gap-6 mb-12 md:mb-20">
          <span className="text-xs sm:text-sm text-white/60 tracking-widest whitespace-nowrap">
            02 / ABOUT US
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Video thumbnail */}
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <img
              src="/images/about-video.jpg"
              alt="About video"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Play button */}
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center">
                <span className="ml-1 text-black text-lg sm:text-xl">▶</span>
              </div>
            </button>
          </div>

          {/* Text content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-light leading-tight text-white/70">
              We transform <span className="text-white font-semibold">ideas</span> into <span className="text-white font-semibold">visual stories</span> that{" "}
              <span className="block text-white font-medium">
                inspire and connect
              </span>
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-white/60 max-w-xl leading-relaxed">
              We're a <span className="text-white font-medium">creative agency</span> that gets it. From <span className="text-white font-medium">scroll-stopping reels</span> to <span className="text-white font-medium">brand-defining campaigns</span>, we craft content that <span className="text-white font-medium">connects</span>, <span className="text-white font-medium">converts</span>, and leaves a <span className="text-white font-medium">lasting impression</span>.
            </p>

            {/* CTA */}
            {/* <button className="mt-8 sm:mt-10 px-6 sm:px-8 py-3 text-white rounded-full border border-white/30 text-sm hover:border-white transition">
              Learn more
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
