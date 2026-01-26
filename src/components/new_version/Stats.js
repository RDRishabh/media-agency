"use client";
import { useRef, useEffect, useState } from "react";

export default function Stats() {
  const stats = [
    { value: "60+", label: "GLOBAL CLIENTS" },
    { value: "14+", label: "YEARS OF EXPERIENCE" },
    { value: "16+", label: "AWARDS WON" },
    { value: "99%", label: "SUCCESS RATE" },
  ];

  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Count-up animation
  useEffect(() => {
    if (!inView) return;

    stats.forEach((stat, idx) => {
      const target = parseInt(stat.value);
      const duration = 1200;
      const startTime = performance.now();

      const animate = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        const current = Math.floor(eased * target);

        setCounts((prev) => {
          const next = [...prev];
          next[idx] = current;
          return next;
        });

        if (progress < 1) requestAnimationFrame(animate);
      };

      setTimeout(() => {
        requestAnimationFrame(animate);
      }, idx * 200);
    });
  }, [inView]);

  return (
    <div
      ref={ref}
      className="w-full bg-black bg-[url('/images/hero/strip-bg.png')] bg-repeat-x py-12"
    >
      <div className="flex flex-row justify-between items-center text-center">
        {stats.map((stat, idx) => {
          const suffix = stat.value.replace(/[0-9]/g, "");

          return (
            <div
              key={idx}
              className="flex-1 flex flex-col items-center transition-opacity duration-700"
            >
              <div className="text-white font-bold text-6xl md:text-7xl mb-4">
                {counts[idx]}
                {suffix}
              </div>

              <div className="text-gray-400 text-base md:text-lg tracking-wide">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
