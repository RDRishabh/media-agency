"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* 🔒 SCROLL LOCK (SAFE & SIMPLE) */
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleSmoothScroll = async (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const isHome = window.location.pathname === "/";

    if (!isHome) {
      // Navigate to home first
      window.location.href = `/${targetId}`;
      return;
    }

    // Already on home → smooth scroll
    document.querySelector(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  const navLinks = [
    { href: "#herosection", label: "Home" },
    { href: "#aboutus", label: "About" },
    // add more when needed
    // { href: "#portfolio", label: "Portfolio" },
    // { href: "#services", label: "Services" },
    // { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* ================= HEADER BAR ================= */}
      <header className="fixed top-2 md:top-6 left-0 right-0 z-[100] px-4 md:px-6">

        <div className="flex items-center justify-between">
          {/* LOGO */}
          <img
            src="/images/logo.png"
            alt="Let'em Know"
            className="w-40 md:w-52 object-contain cursor-pointer"
            onClick={() => router.push("/")}
          />


          {/* MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen((p) => !p)}
            className="flex items-center gap-4 text-white tracking-widest select-none cursor-pointer"
          >

            <span className="text-sm">
              {isMenuOpen ? "CLOSE" : "MENU"}
            </span>

            {!isMenuOpen ? (
              <span className="flex flex-col gap-1">
                <span className="w-6 h-[1px] bg-white"></span>
                <span className="w-6 h-[1px] bg-white"></span>
              </span>
            ) : (
              <span className="relative w-6 h-6">
                <span className="absolute top-1/2 left-0 w-6 h-[1px] bg-white rotate-45"></span>
                <span className="absolute top-1/2 left-0 w-6 h-[1px] bg-white -rotate-45"></span>
              </span>
            )}
          </button>
        </div>
      </header>

      {/* ================= FULLSCREEN MENU ================= */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-500 ${isMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* MENU CONTENT */}
        <nav className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-12">
          {navLinks.map((link, index) => (
            <a
               key={`${link.href}-${index}`}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-4xl md:text-5xl font-light text-white transition-all duration-500 cursor-pointer"
            >

              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
