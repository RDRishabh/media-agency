"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import  {portfolioItems} from "@/data/portfolio";


const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <div className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      {children}
    </div>
  );
};

export default function Hero() {
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

      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 relative overflow-hidden">
            {/* Background Massive Text */}
            <div className="absolute right-[-10%] top-[10%] text-[20vw] font-black leading-none opacity-[0.03] select-none pointer-events-none whitespace-nowrap writing-vertical-rl md:writing-horizontal-tb">
                LET'EM KNOW
            </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-6 items-end h-full">
            
            {/* Left: Manifesto */}
            <div className="md:col-span-5 relative z-10">
              <FadeIn delay={200}>
                <div className="border-l border-[#C13838] pl-6 mb-12">
                    <p className="font-serif italic text-2xl text-gray-400 mb-4">
                        "Make it work, then make it beautiful."
                    </p>
                    <p className="text-sm font-mono text-[#F2F2F2] uppercase tracking-widest leading-relaxed opacity-80 max-w-xs">
                        Whether it’s a reel, a pitch, or a brand, we don't just dress it up. We give it teeth.
                    </p>
                </div>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[#C13838]">
                    <div className="w-12 h-[1px] bg-[#C13838]"></div>
                    Scroll to explore
                </div>
              </FadeIn>
            </div>

            {/* Right: Headline */}
            <div className="md:col-span-7 relative z-10 mb-12 md:mb-0">
              <FadeIn delay={100}>
                <h1 className="text-[14vw] md:text-[8vw] leading-[0.85] font-black tracking-tighter uppercase mix-blend-exclusion">
                  <span className="block text-transparent" style={{ WebkitTextStroke: '1px #F2F2F2' }}>A Creative</span>
                  <span className="block pl-[10vw] md:pl-24">Agency</span>
                  <span className="block text-[#C13838]">That Gets It.</span>
                </h1>
                <div className="mt-8 md:pl-24 flex flex-wrap gap-4 text-xl md:text-2xl font-bold tracking-tight">
                    <span className="bg-[#F2F2F2] text-black px-3 py-1 rounded-sm rotate-2 inline-block">Stops the scroll.</span>
                    <span className="border border-[#F2F2F2] px-3 py-1 rounded-sm -rotate-1 inline-block">Design that feels.</span>
                    <span className="opacity-50 px-3 py-1">Strategy that sells.</span>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

      {/* STAGE */}
      <div
        id="herosection"
        className="relative flex items-center justify-center overflow-visible mt-24"
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