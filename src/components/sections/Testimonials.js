"use client";

import { useState } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    title: "Amazing craft, professional and delivered on time!",
    text: "Lorem ipsum dolor sit amet consectetur ultrices tempus scelerisque et nulla vestibulum lacus ultrices proin nunc.",
    author: "John Carter",
    role: "Founder at Converra",
    image: "/images/testimonials/1.jpg",
  },
  {
    id: 2,
    title: "Captured our vision perfectly. Truly outstanding.",
    text: "Lorem ipsum dolor sit amet consectetur ultrices tempus scelerisque et nulla vestibulum lacus ultrices proin nunc.",
    author: "Sophie Moore",
    role: "VP of Design at Venture",
    image: "/images/testimonials/2.jpg",
  },
  {
    id: 3,
    title: "A seamless experience from start to finish.",
    text: "Lorem ipsum dolor sit amet consectetur ultrices tempus scelerisque et nulla vestibulum lacus ultrices proin nunc.",
    author: "Alex Johnson",
    role: "Creative Director",
    image: "/images/testimonials/3.jpg",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((p) => (p === 0 ? TESTIMONIALS.length - 1 : p - 1));
  const next = () =>
    setActive((p) => (p === TESTIMONIALS.length - 1 ? 0 : p + 1));

  return (
    <section
      id="testimonials"
      className="w-full border-t border-white/10 py-16 sm:py-20 md:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-12 md:mb-20">
          <span className="text-xs sm:text-sm text-white/60 tracking-widest">
            06 / TESTIMONIALS
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-white/70 leading-snug">
            Look at what{" "}
            <span className="text-white font-medium">our clients</span>
            <br className="hidden sm:block" />
            have to say about us
          </h2>
        </div>

        {/* Slider */}
        <div className="relative">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="min-w-full px-2 sm:px-4">
                <div className="relative rounded-3xl overflow-hidden flex items-end min-h-90 md:h-105">
                  <img
                    src={item.image}
                    alt={item.author}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50" />

                  {/* Content */}
                  <div className="relative z-10 p-6 sm:p-8 md:p-10 max-w-xl">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-medium">
                      {item.title}
                    </h3>

                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70">
                      {item.text}
                    </p>

                    <div className="mt-6 sm:mt-10">
                      <p className="font-medium">{item.author}</p>
                      <p className="text-sm text-white/60">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls (desktop/tablet) */}
          <button
            onClick={prev}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/30 items-center justify-center hover:border-white transition"
          >
            ←
          </button>

          <button
            onClick={next}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/30 items-center justify-center hover:border-white transition"
          >
            →
          </button>
        </div>

        {/* Mobile controls */}
        <div className="sm:hidden mt-6 flex justify-center gap-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full transition ${
                idx === active ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
