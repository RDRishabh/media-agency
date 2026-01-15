"use client";

export default function Hero() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background image */}
      <img
        src="/images/hero/background.png"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 min-h-screen flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-white/70">
            Bringing brands to <br />
            life with{" "}
            <span className="text-white font-medium">
              impactful <br /> video content
            </span>
          </h1>

          <p className="mt-6 text-white/60 max-w-lg">
            Lorem ipsum dolor sit amet consectetur purus curabitur diam
            ultricies placerat diam id donec augue amet ac.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="px-8 py-3 rounded-full bg-white text-black text-sm font-medium cursor-pointer"
            >
              Contact us
            </a>

            <a
              href="#portfolio"
              onClick={(e) => handleSmoothScroll(e, "#portfolio")}
              className="px-8 py-3 rounded-full border border-white/40 text-sm hover:border-white transition cursor-pointer"
            >
              View portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
