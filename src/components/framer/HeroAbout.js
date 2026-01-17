"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import  {portfolioItems} from "@/data/portfolio";

export default function HeroAbout() {
  const trackRef = useRef(null);
  const xRef = useRef(0);
  const widthRef = useRef(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf;
    const speed = 0.6;

    const measure = () => {
      widthRef.current = track.scrollWidth / 3;
    };

    requestAnimationFrame(measure);

    const animate = () => {
      if (!widthRef.current) {
        raf = requestAnimationFrame(animate);
        return;
      }

      xRef.current -= speed;

      if (Math.abs(xRef.current) >= widthRef.current) {
        xRef.current = 0;
      }

      track.style.transform = `translateX(${xRef.current}px)`;
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const slides = [
    ...portfolioItems,
    ...portfolioItems,
    ...portfolioItems,
  ];

  const router = useRouter();

  const handleMouseMove = (e, itemId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPos(prev => ({ ...prev, [itemId]: { x, y } }));
  };

  const handleClick = (id) => {
    router.push(`/work/${id}`);
  };

  return (
    <section className="relative w-full bg-[#0a0a0a] overflow-hidden">
      {/* TITLE */}
      <div className="relative z-30 flex items-center justify-center h-screen">
        <h1 className="text-[clamp(3rem,8vw,9rem)] font-light leading-[0.9] text-center">
          <span className="text-white">LET&apos;EM </span>
          <span className="italic font-serif text-white">KNOW</span>
        </h1>
      </div>

      {/* STAGE */}
      <div
        id="herosection"
        className="relative flex items-center justify-center overflow-visible"
        style={{ 
          transform: "perspective(1200px) rotateX(20deg) rotateY(20deg)",
          width: "120%",
          height: "min-content",
          padding: 0,
          position: "relative"
        }}
      >
        <div className="relative w-full overflow-visible">
          {/* PLANE */}
          <div
            className="relative"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* FADES */}
            {/* <div className="absolute left-0 inset-y-0 w-72 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none" style={{ mixBlendMode: "normal" }} />
            <div className="absolute right-0 inset-y-0 w-72 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none" style={{ mixBlendMode: "normal" }} /> */}

            {/* TRACK */}
            <div
              ref={trackRef}
              className="flex items-end gap-5 will-change-transform"
              style={{ 
                transformStyle: "preserve-3d",
                flexDirection: "row",
                position: "relative"
              }}
            >
              {slides.map((item, i) => {
                const itemKey = `${item.id}-${i}`;
                const pos = cursorPos[itemKey] || { x: 0, y: 0 };
                
                return (
                  <div
                    key={itemKey}
                    onClick={() => handleClick(item.id)}
                    onMouseMove={(e) => handleMouseMove(e, itemKey)}
                    className="group relative flex-shrink-0 cursor-pointer"
                  >
                    {/* IMAGE */}
                    <div
                      className="relative w-[420px] h-[580px] overflow-hidden"
                      style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.9)" }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        draggable={false}
                      />

                      {/* DARK OVERLAY */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* CENTERED NAME */}
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-2xl font-medium text-center px-6">
                          {item.name}
                        </p>
                      </div>

                      {/* CURSOR FOLLOW VIEW */}
                      <div
                        className="pointer-events-none absolute z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{
                          left: `${pos.x}px`,
                          top: `${pos.y}px`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <span className="px-4 py-1.5 text-xs font-medium tracking-wide text-white rounded-full bg-black/70 backdrop-blur-md shadow-lg">
                          VIEW
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* FADES */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0a0a0a] to-transparent z-30 pointer-events-none" />
    </section>
  );
}