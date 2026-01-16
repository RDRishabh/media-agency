"use client";

import { useParams } from "next/navigation";
import { portfolioItems } from "@/data/portfolio";
import ImageGrid from "@/components/framer/ImageGrid";

export default function WorkDetail() {
  const { id } = useParams();
  const item = portfolioItems.find(p => p.id === Number(id));

  if (!item) return <div className="text-white p-20">Not found</div>;

  return (
    <section className="min-h-screen bg-black text-white py-24 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER */}
        <h1 className="text-5xl font-light mb-16">{item.name}</h1>

        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* LEFT */}
          <div>
            <p className="text-lg text-white/80 leading-relaxed">
              {item.description}
            </p>
            <p className="mt-8 text-white/60 italic">
              {item.tagline}
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-10">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-white/50 mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                {item.services.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest text-white/50 mb-4">
                Credits
              </h3>
              <ul className="space-y-2 text-white/70">
                {item.credits.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* IMAGE GRID */}
        <div className="mt-24 overflow-hidden">
          <ImageGrid images={item.images} />
        </div>
      </div>
    </section>
  );
}
