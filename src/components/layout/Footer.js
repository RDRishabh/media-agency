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
    <footer className="w-full border-t border-white/10 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">

        {/* Newsletter */}
        <div className="lg:col-span-1 rounded-3xl overflow-hidden relative min-h-105">
          <img
            src="/images/footer/newsletter.jpg"
            alt="Newsletter"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium">
                Join our <span className="text-white/70">newsletter!</span>
              </h3>

              <p className="mt-4 text-sm sm:text-base text-white/70 max-w-sm">
                Stay updated with our latest projects, creative insights, and behind-the-scenes content delivered straight to your inbox.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex flex-col sm:flex-row items-stretch gap-3 border-b border-white/30 pb-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-transparent flex-1 outline-none text-sm px-1"
                />
                <button className="px-6 py-2 rounded-full bg-white text-black text-sm font-medium w-full sm:w-auto">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-2 grid grid-cols-1 gap-8 md:gap-10">

          {/* Brand card */}
          <div className="rounded-3xl bg-[#0b0b0b] p-6 sm:p-8 md:p-10 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3 text-lg sm:text-xl font-medium">
                <img src="/images/logo.png" alt="Logo" className="w-40 h-12 object-contain" />
              </div>

              <div className="flex items-center gap-5 text-white/70">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>

            <p className="text-sm sm:text-base text-white/70 max-w-lg">
              We transform ideas into visual stories that inspire and connect. From commercials to documentaries, we bring your brand's narrative to life.
            </p>
          </div>

          {/* Links */}
          <div className="rounded-3xl bg-[#0b0b0b] p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Quick Links */}
              <div>
                <h4 className="text-base sm:text-lg font-medium mb-4">Quick Links</h4>
                <div className="flex flex-col gap-3 text-sm text-white/70">
                  <a href="#home" onClick={(e) => handleSmoothScroll(e, "#home")} className="hover:text-white transition">Home</a>
                  <a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")} className="hover:text-white transition">About</a>
                  <a href="/portfolio" className="hover:text-white transition">Portfolio</a>
                  <a href="#services" onClick={(e) => handleSmoothScroll(e, "#services")} className="hover:text-white transition">Services</a>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-base sm:text-lg font-medium mb-4">Get in Touch</h4>
                <div className="flex flex-col gap-3 text-sm text-white/70">
                  <a href="mailto:hello@example.com" className="hover:text-white transition">hello@example.com</a>
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-12 pt-8 border-t border-white/10">
        <p className="text-sm text-white/50 text-center">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
