"use client";

export default function ImageGrid({ images }) {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-full">
        {images.slice(0, 3).map((img, i) => (
          <div
            key={i}
            className="relative w-full max-w-full overflow-hidden aspect-[3/4]"
          >
            <img
              src={`/images/${img}`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
