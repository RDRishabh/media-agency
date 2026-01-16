import { portfolioItems } from "@/data/portfolio";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Page header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white/70">
            Our <span className="text-white font-medium">Portfolio</span>
          </h1>
          <p className="mt-6 text-white/60 leading-relaxed">
            Explore our work with leading brands across industries. Each project
            represents our commitment to creating impactful video content.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.id}
              image={item.image}
              name={item.name}
              tag={item.tag}
              link={item.link}
            />
          ))}
        </div>

        {/* Back to home */}
        <div className="mt-20 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/30 text-sm hover:border-white transition"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}

/* Card */
function PortfolioCard({ image, name, tag, link }) {
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
          className="w-full h-105 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Meta */}
      <div className="mt-5 flex items-center justify-between text-sm">
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
