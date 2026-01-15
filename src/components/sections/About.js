export default function About() {
  return (
    <section
      id="about"
      className="w-full border-t border-white/10 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section header */}
        <div className="flex items-center gap-6 mb-20">
          <span className="text-sm text-white/60 tracking-widest">
            02 / ABOUT US
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Video thumbnail */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/images/about-video.jpg"
              alt="About video"
              className="w-full h-full object-cover"
            />

            {/* Play button */}
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="ml-1 text-black text-xl">▶</span>
              </div>
            </button>
          </div>

          {/* Text content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight text-white/70">
              We transform ideas into visual stories that{" "}
              <span className="text-white font-medium">
                inspire and connect
              </span>
            </h2>

            <p className="mt-6 text-white/60 max-w-xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur ultrices tempus scelerisque
              et nulla vestibulum lacus ultrices proin nunc semper urna urna
              nunc aliquam eleifend sagittis elementum molestie laoreet nulla
              auctor eu mi at vitae tortor tortor at sollicitudin quam mattis leo.
            </p>

            {/* CTA */}
            <button className="mt-10 px-8 py-3 rounded-full border border-white/30 text-sm hover:border-white transition">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
