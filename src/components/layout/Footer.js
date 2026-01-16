export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">

        {/* Newsletter */}
        <div className="lg:col-span-1 rounded-3xl overflow-hidden relative min-h-105">
          <img
            src="/images/footer/newsletter.jpg"
            alt="Newsletter"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium">
                Join our <span className="text-white/70">newsletter!</span>
              </h3>

              <p className="mt-4 text-sm sm:text-base text-white/70 max-w-sm">
                Lorem ipsum dolor sit amet consectetur diam nunc ut placerat
                vitae urna orci quam lorem facilisis accumsan aliquet lacus.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex flex-col sm:flex-row items-stretch gap-3 border-b border-white/30 pb-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-transparent flex-1 outline-none text-sm px-1"
                />
                <button className="px-6 py-2 rounded-full bg-white text-black text-sm font-medium w-full sm:w-auto">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-2 grid grid-cols-1 gap-8 md:gap-10">

          {/* Brand card */}
          <div className="rounded-3xl bg-[#0b0b0b] p-6 sm:p-8 md:p-10 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3 text-lg sm:text-xl font-medium">
                <span className="text-white">▲</span>
                Cinemaflow
              </div>

              <div className="flex items-center gap-5 text-white/70 text-sm">
                <span>f</span>
                <span>X</span>
                <span>▶</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-white/70 max-w-lg">
              Lorem ipsum dolor sit amet consectetur diam nunc ut placerat
              vitae urna orci quam lorem facilisis accumsan aliquet lacus.
            </p>
          </div>

          {/* Links */}
          <div className="rounded-3xl bg-[#0b0b0b] p-6 sm:p-8 md:p-10">
            <h4 className="text-base sm:text-lg font-medium mb-6">
              Template pages
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-6 text-sm text-white/70">
              <FooterLink label="Preview" />
              <FooterLink label="Service single" />
              <FooterLink label="Blog V2" />
              <FooterLink label="Start here" />

              <FooterLink label="Home V1" />
              <FooterLink label="Portfolio V1" />
              <FooterLink label="Blog V3" />
              <FooterLink label="Style guide" />

              <FooterLink label="Home V2" />
              <FooterLink label="Portfolio V2" />
              <FooterLink label="Blog post" />
              <FooterLink label="404 not found" />

              <FooterLink label="Home V3" />
              <FooterLink label="Portfolio V3" />
              <FooterLink label="Careers" />
              <FooterLink label="Password protected" />

              <FooterLink label="About" />
              <FooterLink label="Portfolio single" />
              <FooterLink label="Career single" />
              <FooterLink label="Licenses" />

              <FooterLink label="Services" />
              <FooterLink label="Blog V1" />
              <FooterLink label="Contact" />
              <FooterLink label="Changelog" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Link item */
function FooterLink({ label }) {
  return (
    <a href="#" className="hover:text-white transition">
      {label}
    </a>
  );
}
