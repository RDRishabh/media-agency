"use client";

export default function ImageGrid({ images = [] }) {
  if (!images.length) return null;

  return (
    <div className="w-full space-y-4">
      {chunk(images, 3).map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex w-full gap-4 flex-col sm:flex-row ${
            row.length < 3 ? "sm:justify-center" : ""
          }`}
        >
          {row.map((img, i) => (
            <div
              key={i}
              className={`
                relative overflow-hidden aspect-square
                w-full
                sm:flex-1
                ${row.length < 3 ? "sm:max-w-[33%]" : ""}
              `}
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
      ))}
    </div>
  );
}

/* helper */
function chunk(arr, size) {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}
