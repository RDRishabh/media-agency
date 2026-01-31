"use client";
import { useRef, useEffect, useState } from "react";

export default function Stats() {
  const stats = [
    { value: "10+", label: "GLOBAL CLIENTS" },
    { value: "2+", label: "YEARS OF EXPERIENCE" },
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
        const eased = 1 - Math.pow(1 - progress, 3);
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
      className="w-full bg-black bg-[url('/images/hero/strip-bg.png')] bg-repeat-x py-16"
    >
      <div className="
        max-w-6xl mx-auto
        grid grid-cols-1 gap-12
        md:grid-cols-3 md:gap-0
        text-center
      ">
        {stats.map((stat, idx) => {
          const suffix = stat.value.replace(/[0-9]/g, "");

          return (
            <div
              key={idx}
              className="
                flex flex-col items-center
                md:border-r md:border-white/10
                last:border-none
              "
            >
              <div className="
                text-white font-bold
                text-5xl
                sm:text-6xl
                md:text-7xl
                mb-3
              ">
                {counts[idx]}
                {suffix}
              </div>

              <div className="
                text-gray-400
                text-sm
                sm:text-base
                md:text-lg
                tracking-wide
              ">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
