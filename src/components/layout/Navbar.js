"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#services", label: "Services" },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="mx-auto max-w-7xl pr-2 py-6 flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-xl font-bold">
            <img src="/images/logo.png" alt="Logo" className="w-64 h-24 object-contain" />
          </div>

          {/* Nav */}
          <div className="flex items-center gap-3 text-white">
            {/* Desktop nav - slides in/out */}
            <div className={`hidden md:block overflow-hidden transition-all duration-500 ease-in-out ${
              isMenuOpen ? "max-w-0 opacity-0" : "max-w-md opacity-100"
            }`}>
              <nav className="flex items-center gap-6 bg-white/10 backdrop-blur px-6 py-3 rounded-full text-sm whitespace-nowrap">
                {navLinks.map((link) => (
                  <a 
                    key={link.href}
                    href={link.href} 
                    onClick={(e) => handleSmoothScroll(e, link.href)} 
                    className="hover:text-white/80 cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center relative z-50"
            >
              <span className={`text-xl transition-transform duration-300 ${isMenuOpen ? "rotate-45" : ""}`}>
                {isMenuOpen ? "+" : "≡"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Nav links */}
        <nav className="relative z-10 flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className={`text-3xl font-light text-white hover:text-white/70 transition-all duration-500 ${
                isMenuOpen 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
