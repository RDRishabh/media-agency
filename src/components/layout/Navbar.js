"use client";

export default function Navbar() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold">
          <span className="text-white">▲</span>
        </div>

        {/* Nav */}
        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-6 bg-white/10 backdrop-blur px-6 py-3 rounded-full text-sm">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, "#home")} className="hover:text-white/80 cursor-pointer">Home</a>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")} className="hover:text-white/80 cursor-pointer">About</a>
            <a href="#portfolio" onClick={(e) => handleSmoothScroll(e, "#portfolio")} className="hover:text-white/80 cursor-pointer">Portfolio</a>
            <a href="#services" onClick={(e) => handleSmoothScroll(e, "#services")} className="hover:text-white/80 cursor-pointer">Services</a>
          </nav>

          {/* Menu button */}
          <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
            <span className="text-xl">≡</span>
          </button>
        </div>
      </div>
    </header>
  );
}
