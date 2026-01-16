"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { portfolioItems } from "@/data/portfolio";

export default function HeroAbout() {
  const trackRef = useRef(null);
  const xRef = useRef(0);
  const widthRef = useRef(0);
  const router = useRouter();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf;
    const speed = 0.6;

    // ✅ wait for images to load, then measure width
    const measure = () => {
      widthRef.current = track.scrollWidth / 3;
    };

    // ensure measurement after layout
    requestAnimationFrame(measure);

    const animate = () => {
      if (!widthRef.current) {
        raf = requestAnimationFrame(animate);
        return;
      }

      // RIGHT → LEFT
      xRef.current -= speed;

      // seamless loop
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
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  return (
    <section  className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden">
      {/* TITLE */}
      <div className="relative z-30 flex justify-center pt-28 pb-12">
        <h1 className="text-[clamp(3rem,8vw,9rem)] font-light leading-[0.9]">
          <span className="text-white">LET&apos;EM </span>
          <span className="italic font-serif text-white">KNOW</span>
        </h1>
      </div>

      {/* STAGE */}
      <div
      id="herosection"
        className="relative w-full h-[90vh] mt-32"
        style={{ perspective: "2600px" }}
      >
        {/* MASK */}
        <div className="relative w-full h-full overflow-hidden">
          {/* PLANE */}
          <div
            className="absolute -left-1/2 top-0"
            style={{
              width: "160vw",
              transform: `
                rotateX(8deg)
                rotateY(6deg)
                rotateZ(5deg)
              `,
              transformOrigin: "left bottom",
              transformStyle: "preserve-3d",
            }}
          >
            {/* FADES */}
            <div className="absolute left-0 inset-y-0 w-72 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 inset-y-0 w-72 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

            {/* TRACK */}
            <div
              ref={trackRef}
              className="flex items-end gap-6 pl-[20%] will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              {slides.map((item, i) => (
                <div
                  key={`${item.id}-${i}`}
                  onClick={() => router.push(`/work/${item.id}`)}
                  onMouseMove={handleMouseMove}
                  className="group relative flex-shrink-0 cursor-pointer"
                  style={{ "--x": "50%", "--y": "50%" }}
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
                        left: "var(--x)",
                        top: "var(--y)",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <span
                        className="
                          px-4 py-1.5
                          text-xs font-medium tracking-wide
                          text-white
                          rounded-full
                          bg-black/70
                          backdrop-blur-md
                          shadow-lg
                        "
                      >
                        VIEW
                      </span>

                    </div>
                  </div>
                </div>
              ))}

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
