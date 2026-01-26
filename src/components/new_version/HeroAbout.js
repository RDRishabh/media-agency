"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import  {portfolioItems} from "@/data/portfolio";

export default function HeroAbout() {
  const trackRef = useRef(null);
  const sectionRef = useRef(null);
  const xRef = useRef(0);
  const targetOffsetRef = useRef(0); // Target offset for smooth arrow transitions
  const widthRef = useRef(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [leftArrowPos, setLeftArrowPos] = useState({ y: 0 });
  const [rightArrowPos, setRightArrowPos] = useState({ y: 0 });

  // Handle section mouse move for arrow visibility
  const handleSectionMouseMove = (e) => {
    const section = sectionRef.current;
    if (!section) return;
    
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    
    const edgeThreshold = 120; // pixels from edge to trigger arrow
    
    if (x < edgeThreshold) {
      setShowLeftArrow(true);
      setLeftArrowPos({ y });
    } else {
      setShowLeftArrow(false);
    }
    
    if (x > width - edgeThreshold) {
      setShowRightArrow(true);
      setRightArrowPos({ y });
    } else {
      setShowRightArrow(false);
    }
  };

  const handleSectionMouseLeave = () => {
    setShowLeftArrow(false);
    setShowRightArrow(false);
  };

  // Shift carousel left (show previous items)
  const shiftLeft = () => {
    const shiftAmount = 450; // roughly one card width + gap
    targetOffsetRef.current += shiftAmount;
  };

  // Shift carousel right (show next items)
  const shiftRight = () => {
    const shiftAmount = 450; // roughly one card width + gap
    targetOffsetRef.current -= shiftAmount;
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf;
    const speed = 0.6;
    const easingSpeed = 0.08; // Easing factor for smooth arrow transitions

    const measure = () => {
      widthRef.current = track.scrollWidth / 3;
    };

    requestAnimationFrame(measure);

    const animate = () => {
      if (!widthRef.current) {
        raf = requestAnimationFrame(animate);
        return;
      }

      // Smoothly interpolate targetOffset towards 0
      if (Math.abs(targetOffsetRef.current) > 0.5) {
        const delta = targetOffsetRef.current * easingSpeed;
        xRef.current += delta;
        targetOffsetRef.current -= delta;
      } else {
        targetOffsetRef.current = 0;
      }

      // Continuous auto-scroll
      xRef.current -= speed;

      // Loop the carousel
      if (Math.abs(xRef.current) >= widthRef.current) {
        xRef.current += widthRef.current;
      }
      if (xRef.current > 0) {
        xRef.current -= widthRef.current;
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
    <section 
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
      className="relative w-full bg-[#0a0a0a] overflow-hidden"
    >
      {/* LEFT ARROW */}
      <div
        onClick={shiftLeft}
        className={`fixed left-8 z-50 cursor-pointer transition-all duration-300 ease-out ${
          showLeftArrow ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
        style={{
          top: `${leftArrowPos.y}px`,
          transform: `translateY(-50%) ${showLeftArrow ? "translateX(0)" : "translateX(-32px)"}`,
          pointerEvents: showLeftArrow ? "auto" : "none",
        }}
      >
        <div className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-6 h-6 text-white group-hover:-translate-x-0.5 transition-transform duration-200"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
      </div>

      {/* RIGHT ARROW */}
      <div
        onClick={shiftRight}
        className={`fixed right-8 z-50 cursor-pointer transition-all duration-300 ease-out ${
          showRightArrow ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
        style={{
          top: `${rightArrowPos.y}px`,
          transform: `translateY(-50%) ${showRightArrow ? "translateX(0)" : "translateX(32px)"}`,
          pointerEvents: showRightArrow ? "auto" : "none",
        }}
      >
        <div className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-6 h-6 text-white group-hover:translate-x-0.5 transition-transform duration-200"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>

      {/* TITLE */}
      <div className="relative z-30 flex items-center justify-center h-screen">
        <h1 className="text-[clamp(3rem,8vw,9rem)] font-light leading-[0.9] text-center">
          <span className="text-white">A <span className="italic font-serif text-white">CREATIVE AGENCY</span> THAT </span>
          <span className="italic font-serif text-white">GET'S IT</span> 
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