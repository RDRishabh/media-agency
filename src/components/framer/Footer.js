"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="w-full bg-black border-t border-white/10">
      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT — BRAND */}
          <div className="flex flex-col gap-6">
            <img
              src="/images/logo.png"
              alt="Let'em Know"
              className="w-44 h-auto object-contain"
            />

            <p className="text-sm sm:text-base text-white/70 max-w-md leading-relaxed">
              We transform ideas into visual stories that inspire and connect.
              From commercials to documentaries, we bring your brand’s narrative
              to life.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-6 text-white/70">
              <a
                href="https://www.instagram.com/letemknow.media/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M7.75 2h8.5C19.44 2 22 4.56 22 7.75v8.5C22 19.44 19.44 22 16.25 22h-8.5C4.56 22 2 19.44 2 16.25v-8.5C2 4.56 4.56 2 7.75 2Zm0 1.5A4.26 4.26 0 0 0 3.5 7.75v8.5A4.26 4.26 0 0 0 7.75 20.5h8.5a4.26 4.26 0 0 0 4.25-4.25v-8.5A4.26 4.26 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.88a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26Z" />
                </svg>
              </a>


              <a
                href="https://www.linkedin.com/company/let-em-know/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.065 0-1.14.925-2.065 2.069-2.065 1.14 0 2.065.925 2.065 2.065 0 1.139-.925 2.065-2.065 2.065zM6.999 20.452H3.675V9h3.324v11.452z" />
                </svg>
              </a>

            </div>
          </div>

          {/* RIGHT — LINKS + CONTACT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

            {/* QUICK LINKS */}
            <div>
              <h4 className="text-sm uppercase tracking-widest text-white/50 mb-6">
                Quick Links
              </h4>
              <div className="flex flex-col gap-4 text-sm text-white/70">
                <a href="#home" onClick={(e) => handleSmoothScroll(e, "#herosection")} className="hover:text-white transition">Home</a>
                <a href="#about" onClick={(e) => handleSmoothScroll(e, "#aboutus")} className="hover:text-white transition">About</a>
                {/* <a href="/portfolio" className="hover:text-white transition">Portfolio</a> */}
                {/* <a href="#services" onClick={(e) => handleSmoothScroll(e, "#services")} className="hover:text-white transition">Services</a> */}
               <Link
  href="/contact"
  className="hover:text-white transition"
>
  Contact
</Link>

              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-sm uppercase tracking-widest text-white/50 mb-6">
                Get in Touch
              </h4>
              <div className="flex flex-col gap-4 text-sm text-white/70">
                <a href="mailto:hello@letemknow.media" className="hover:text-white transition">
                  hello@letemknow.media
                </a>
                <p>
                   Utkarsh Raj Giri 
                </p>
                <a href="tel:+918588812345" className="hover:text-white transition">
                  +91 85888 12345
                </a>
                <a href="tel:+919560823299" className="hover:text-white transition">
                  +91 95608 23299
                </a>
                <span>Mumbai, India</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6">
        <p className="text-xs text-white/50 text-center">
          © {new Date().getFullYear()} Let&apos;em Know. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
