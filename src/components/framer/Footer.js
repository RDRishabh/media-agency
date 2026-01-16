"use client";

export default function Footer() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="w-full bg-black border-t border-white/10">
      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT — BRAND */}
          <div className="flex flex-col gap-6">
            <img
              src="/images/logo.png"
              alt="Let'em Know"
              className="w-44 h-auto object-contain"
            />

            <p className="text-sm sm:text-base text-white/70 max-w-md leading-relaxed">
              We transform ideas into visual stories that inspire and connect.
              From commercials to documentaries, we bring your brand’s narrative
              to life.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-6 text-white/70">
              <a
                href="https://www.instagram.com/letemknow.media/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/let-em-know/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT — LINKS + CONTACT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

            {/* QUICK LINKS */}
            <div>
              <h4 className="text-sm uppercase tracking-widest text-white/50 mb-6">
                Quick Links
              </h4>
              <div className="flex flex-col gap-4 text-sm text-white/70">
                <a href="#home" onClick={(e) => handleSmoothScroll(e, "#home")} className="hover:text-white transition">Home</a>
                <a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")} className="hover:text-white transition">About</a>
                <a href="/portfolio" className="hover:text-white transition">Portfolio</a>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, "#services")} className="hover:text-white transition">Services</a>
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="hover:text-white transition">Contact</a>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-sm uppercase tracking-widest text-white/50 mb-6">
                Get in Touch
              </h4>
              <div className="flex flex-col gap-4 text-sm text-white/70">
                <a href="mailto:hello@letemknow.media" className="hover:text-white transition">
                  hello@letemknow.media
                </a>
                <a href="tel:+918588812345" className="hover:text-white transition">
                  +91 85888 12345
                </a>
                <a href="tel:+919560823299" className="hover:text-white transition">
                  +91 95608 23299
                </a>
                <span>Mumbai, India</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6">
        <p className="text-xs text-white/50 text-center">
          © {new Date().getFullYear()} Let&apos;em Know. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
