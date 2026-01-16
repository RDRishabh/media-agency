export default function TrustedBrands() {
  return (
    <section className="w-full border-white/10 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col md:flex-row items-center gap-6 md:gap-8">
        
        {/* Left text */}
        <p className="text-xs sm:text-sm text-white/60 text-center md:text-left md:whitespace-nowrap">
          Trusted by world’s<br className="hidden md:block" />
          most exciting brands
        </p>

        {/* Brand list */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 sm:gap-8 md:gap-14 text-white/90">
          <BrandItem label="Company" />
          <BrandItem label="Agency" />
          <BrandItem label="Venture" />
          <BrandItem label="Startup" />
          <BrandItem label="Institute" />
          <BrandItem label="Enterprise" />
        </div>
      </div>
    </section>
  );
}

function BrandItem({ label }) {
  return (
    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
      <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white/80 rounded-sm" />
      {label}
    </div>
  );
}
