import { portfolioItems } from "@/data/portfolio";

export default function PortfolioPreview() {
  // Show first 6 items in the preview
  const previewItems = portfolioItems.slice(0, 12);

  return (
    <section
      id="portfolio"
      className="w-full border-t border-white/10 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section header */}
        <div className="flex items-center gap-6 mb-20">
          <span className="text-sm text-white/60 tracking-widest">
            03 / PORTFOLIO
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-white/70">
            See what <span className="text-white font-medium">creativity</span> looks like
          </h2>

          <p className="mt-6 text-white/60 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur ultrices tempus scelerisque
            et nulla vestibulum lacus ultrices proin nunc semper urna urna
            nunc aliquam eleifend sagittis elementum.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {previewItems.map((item) => (
            <PortfolioCard
              key={item.id}
              image={item.image}
              name={item.name}
              tag={item.tag}
              tagline={item.tagline}
              link={item.link}
            />
          ))}
        </div>

        {/* View all */}
        <div className="mt-20 text-center">
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/30 text-sm hover:border-white transition"
          >
            View all work
          </a>
        </div>
      </div>
    </section>
  );
}

/* Card */
function PortfolioCard({ image, name, tag, tagline, link }) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block cursor-pointer"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-2xl relative">
        <img
          src={image}
          alt={name}
          className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Tagline */}
      {tagline && (
        <p className="mt-4 text-white/50 text-sm italic">{tagline}</p>
      )}

      {/* Meta */}
      <div className="mt-3 flex items-center justify-between text-sm">
        <span className="text-white/70 font-medium">{name}</span>
        <span className="px-4 py-1 rounded-full bg-white/10 text-white/80 flex items-center gap-2">
          {tag}
          {/* Redirect arrow icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </span>
      </div>
    </a>
  );
}
