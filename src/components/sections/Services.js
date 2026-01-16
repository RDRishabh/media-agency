"use client";

import { useState, useEffect } from "react";

const SERVICES = [
  {
    id: "01",
    title: "Commercials",
    description:
      "High-impact commercial productions crafted to capture attention, elevate brands, and drive engagement across platforms.",
    image: "/images/services/commercial.jpg",
  },
  {
    id: "02",
    title: "Corporate",
    description:
      "Professional corporate videos that communicate your brand's vision, culture, and values with clarity and polish.",
    image: "/images/services/corporate.jpg",
  },
  {
    id: "03",
    title: "Documentary",
    description:
      "Authentic storytelling through documentary filmmaking that informs, inspires, and builds emotional connection.",
    image: "/images/services/documentary.jpg",
  },
];

export default function Services() {
  const [active, setActive] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = (id) => {
    if (isMobile) {
      setActive(active === id ? null : id);
    }
  };

  const handleMouseEnter = (id) => {
    if (!isMobile) {
      setActive(id);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActive(null);
    }
  };

  return (
    <section
      id="services"
      className="w-full border-t border-white/10 py-16 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Section header */}
        <div className="flex items-start gap-4 sm:gap-6 mb-12 md:mb-20">
          <span className="text-xs sm:text-sm text-white/60 tracking-widest whitespace-nowrap">
            04 / SERVICES
          </span>
          <div className="h-px flex-1 bg-white/10 mt-3" />
        </div>

        {/* Heading */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-white/70 leading-tight">
            Services that bring{" "}
            <span className="block text-white font-medium">
              stories to life
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/60 max-w-md leading-relaxed">
            We don't just create content - we build experiences. From concept to execution, every frame is designed to connect and convert.
          </p>
        </div>

        {/* Services list */}
        <div className="border-t border-white/10">
          {SERVICES.map((service) => {
            const isActive = active === service.id;

            return (
              <div 
                key={service.id} 
                className="border-b border-white/10"
                onMouseEnter={() => handleMouseEnter(service.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Row */}
                <button
                  onClick={() => handleClick(service.id)}
                  className="w-full py-6 sm:py-8 md:py-10 flex items-center justify-between text-left group gap-4"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-xs sm:text-sm text-white/50">
                      {service.id}
                    </span>
                    <span className="text-lg sm:text-2xl md:text-3xl font-medium">
                      {service.title}
                    </span>
                  </div>

                  <span className="text-lg sm:text-xl text-white/70 group-hover:translate-x-1 transition">
                    →
                  </span>
                </button>

                {/* Expanded content */}
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${
                    isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 pb-10 md:pb-14">
                      <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-xl">
                        {service.description}
                      </p>

                      <div className="rounded-2xl overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-55 sm:h-70 md:h-80 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
