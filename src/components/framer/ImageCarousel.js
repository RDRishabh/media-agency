"use client";

import { useEffect, useRef, useState } from "react";

export default function ImageCarousel({ images }) {
  const trackRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive count
  useEffect(() => {
    const update = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Drag handlers
  const onDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX || e.touches[0].pageX;
    scrollLeft.current = trackRef.current.scrollLeft;
  };

  const onMove = (e) => {
    if (!isDown.current) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = (startX.current - x) * 1.2;
    trackRef.current.scrollLeft = scrollLeft.current + walk;
  };

  const onUp = () => {
    isDown.current = false;
  };

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-scroll cursor-grab active:cursor-grabbing no-scrollbar"
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseLeave={onUp}
        onMouseUp={onUp}
        onTouchStart={onDown}
        onTouchMove={onMove}
        onTouchEnd={onUp}
        style={{ scrollSnapType: "x mandatory" }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 scroll-snap-align-start"
            style={{ width: `${100 / visibleCount}%` }}
          >
            <div className="h-[500px] overflow-hidden">
              <img
                src={`/images/${img}`}
                alt=""
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
