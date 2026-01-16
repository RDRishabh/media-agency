"use client";

import { useEffect, useRef } from "react";
import { portfolioItems } from "@/data/portfolio";

export default function HeroAbout() {
  const sliderRef = useRef(null);

  // Auto-scroll animation
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId;
    let scrollPos = 0;
    const speed = 0.8;

    const animate = () => {
      scrollPos += speed;
      if (scrollPos >= slider.scrollWidth / 2) {
        scrollPos = 0;
      }
      slider.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Duplicate items for infinite scroll effect
  const slideImages = [...portfolioItems, ...portfolioItems, ...portfolioItems];

  return (
    <section className="relative min-h-screen w-full bg-[#1a1a1a] overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] pt-32 pb-8">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-center">
          <span className="text-white">LET'EM </span>
          <span className="text-white italic font-serif">KNOW</span>
        </h1>
      </div>

      {/* 3D Perspective Slideshow Container */}
      <div 
        className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh]"
        style={{ perspective: "1200px" }}
      >
        {/* 3D Tilted wrapper - rotated on Y axis for depth */}
        <div 
          className="absolute inset-0 flex items-center"
          style={{
            transform: "rotateX(5deg) rotateY(-15deg) rotateZ(2deg)",
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
          }}
        >
          {/* Gradient overlays for fade effect */}
          <div className="absolute inset-y-0 left-0 w-48 sm:w-64 md:w-96 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 sm:w-48 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling container */}
          <div 
            ref={sliderRef}
            className="flex gap-5 sm:gap-6 md:gap-8 overflow-hidden pl-[20%]"
            style={{ scrollBehavior: "auto" }}
          >
            {slideImages.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 relative group"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div 
                  className="w-[280px] h-[380px] sm:w-[320px] sm:h-[440px] md:w-[380px] md:h-[520px] lg:w-[420px] lg:h-[580px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                  style={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent z-20 pointer-events-none" />
      
      {/* Top gradient for depth */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1a1a1a] to-transparent z-5 pointer-events-none" />
    </section>
  );
}