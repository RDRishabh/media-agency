"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
  { src: "/images/portfolio/citadel.jpg", label: "Citadel", x: -420, y: -260 },
  { src: "/images/portfolio/duke.jpg", label: "Duke", x: 420, y: -240 },
  { src: "/images/portfolio/masters_union.jpeg", label: "Masters", x: -460, y: 280 },
  { src: "/images/portfolio/salescode.jpg", label: "Salescode", x: 460, y: 300 },
  { src: "/images/portfolio/citadel.jpg", label: "Branding", x: 0, y: -420 },
  { src: "/images/portfolio/duke.jpg", label: "Campaigns", x: 0, y: 420 },
];

export default function AboutUs() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  /* ---------- TIMELINE ---------- */

  // Image appears
  const baseOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  const baseScale = useTransform(scrollYProgress, [0.05, 0.15], [0.9, 1]);

  // Split outward (ENDS COMPLETELY)
  const split = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  // Text AFTER images settle
  const textOpacity = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.6, 0.75], [30, 0]);

  return (
    <>
      {/* SCROLL SPACE */}
      <section ref={ref} className="relative h-[400vh] bg-white" />

      {/* FIXED VISUAL LAYER */}
      <div className="fixed inset-0 pointer-events-none z-30 flex items-center justify-center">

        {/* IMAGE CANVAS */}
        <div className="relative w-screen h-screen flex items-center justify-center">

          {/* BASE IMAGE */}
          <motion.div
            style={{ opacity: baseOpacity, scale: baseScale }}
            className="absolute"
          >
            <img
              src={images[0].src}
              alt=""
              className="w-80 h-80 rounded-[36px] object-cover"
            />
          </motion.div>

          {/* SPLIT IMAGES */}
          {images.map((img, i) => {
            const x = useTransform(split, [0, 1], [0, img.x]);
            const y = useTransform(split, [0, 1], [0, img.y]);
            const opacity = useTransform(split, [0, 0.15], [0, 1]);

            return (
              <motion.div
                key={i}
                style={{ x, y, opacity }}
                className="absolute"
              >
                <div className="relative">
                  <img
                    src={img.src}
                    alt=""
                    className="w-56 h-56 rounded-[28px] object-cover"
                  />
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs shadow">
                    {img.label}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* CENTER TEXT — ONLY AFTER IMAGES */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="absolute text-center max-w-xl px-6"
          >
            <h2 className="text-5xl sm:text-6xl font-serif leading-tight">
              25 flexible
              <br />
              spending
              <br />
              categories
            </h2>

            <p className="mt-6 text-gray-600">
              Tedy allows your business culture to shine by giving you full control
              over category selection and allowances.
            </p>

            <button className="mt-8 rounded-full bg-pink-500 px-6 py-3 text-white pointer-events-auto">
              Explore all categories
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
}
    