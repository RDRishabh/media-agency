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
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 min-h-screen flex items-center">
        <div className="max-w-2xl">

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-white/70">
            Bringing brands to life with{" "}
            <span className="block text-white font-medium">
              impactful video content
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-white/60 max-w-lg">
            Lorem ipsum dolor sit amet consectetur purus curabitur diam
            ultricies placerat diam id donec augue amet ac.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="px-6 sm:px-8 py-3 rounded-full bg-white text-black text-sm font-medium cursor-pointer text-center w-full sm:w-auto"
            >
              Contact us
            </a>

            <a
              href="#portfolio"
              onClick={(e) => handleSmoothScroll(e, "#portfolio")}
              className="px-6 sm:px-8 py-3 rounded-full border border-white/40 text-sm text-white hover:border-white transition cursor-pointer text-center w-full sm:w-auto"
            >
              View portfolio
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
