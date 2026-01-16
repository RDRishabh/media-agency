export default function TrustedBrands() {
  return (
    <section className="w-full border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center gap-8">
        
        {/* Left text */}
        <p className="text-sm text-white/60 whitespace-nowrap">
          Trusted by world’s<br />most exciting brands
        </p>

        {/* Brand list */}
        <div className="flex flex-wrap items-center gap-10 md:gap-14 text-white/90">
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
    <div className="flex items-center gap-2 text-sm font-medium">
      <span className="w-4 h-4 bg-white/80 rounded-sm" />
      {label}
    </div>
  );
}
