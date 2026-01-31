"use client";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { portfolioItems } from "@/data/portfolio";
import ImageGrid from "@/components/framer/ImageGrid";


const Nav = () => (
  <nav className="fixed top-0 w-full z-40 px-6 py-6 md:px-12 flex justify-between items-start mix-blend-difference text-[#F2F2F2]">
    <div className="text-xl font-black tracking-tighter uppercase leading-none">
      Let'em<br/>Know®
    </div>
    {/* <div className="flex flex-col items-end gap-2">
      <div className="flex gap-8 text-xs font-bold tracking-widest uppercase bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        {['About', 'Work', 'Principles'].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-[#C13838] transition-colors">
            {link}
          </a>
        ))}
      </div>
    </div> */}
  </nav>
);

export default function WorkDetail() {
  const { id } = useParams();
  const router = useRouter();
  const item = portfolioItems.find(p => p.id === Number(id));

  if (!item) {
    return <div className="text-white p-20">Not found</div>;
  }

  return (
    <section className="bg-black text-white pt-20 sm:pt-28  overflow-x-hidden">
      <Nav/>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* BACK BUTTON */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-10 group"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="text-sm tracking-wide">Back to Home</span>
        </button>

        {/* HEADER */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-12">
          {item.name}
        </h1>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT */}
          <div>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-8">
            {item.link && item.link !== "#" && (
              <div>
                <h3 className="text-sm uppercase tracking-widest text-white/50 mb-4">
                  View Project
                </h3>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-300 group">
                  {/* Instagram */}
                  {item.link.includes("instagram.com") && (
                    <>
                      <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span className="text-white/80 group-hover:text-white transition-colors">Instagram</span>
                    </>
                  )}

                  {/* YouTube Icon */}
                  {(item.link.includes("youtube.com") || item.link.includes("youtu.be")) && (
                    <>
                      <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <span className="text-white/80 group-hover:text-white transition-colors">YouTube</span>
                    </>
                  )}

                  {/* Google Drive Icon */}
                  {item.link.includes("drive.google.com") && (
                    <>
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M12 0L1.5 17.5l3.5 6h14l3.5-6L12 0z"/>
                        <path fill="#FBBC05" d="M12 0L1.5 17.5h7L12 10l3.5 7.5h7L12 0z"/>
                        <path fill="#34A853" d="M5 23.5l3.5-6h11l3.5 6H5z"/>
                        <path fill="#EA4335" d="M1.5 17.5L5 23.5l3.5-6-3.5-6-3.5 6z"/>
                      </svg>
                      <span className="text-white/80 group-hover:text-white transition-colors">Google Drive</span>
                    </>
                  )}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* IMAGE GRID */}
        {item.images?.length > 0 && (
          <div className="sm:mt-16">
            <ImageGrid images={item.images} />
          </div>
        )}

      </div>
      <section id="about" className=" px-6 md:px-12  text-[#FFFFFF] relative">          

          <footer className="mt-24 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-end">
            <div>
               <div className="text-[10vw] leading-none font-black tracking-tighter opacity-10">
                  LET'EM KNOW
               </div>
               <p className="text-xs font-mono mt-4">© {new Date().getFullYear()} / HELLO@LETEMKNOW.MEDIA</p>
            </div>
            
            {/* <div className="flex gap-6 mt-8 md:mt-0">
                {['Instagram', 'Behance', 'Email'].map(link => (
                    <a key={link} href="#" className="text-lg font-bold uppercase tracking-tight hover:text-[#C13838] transition-colors relative group">
                        {link}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C13838] transition-all group-hover:w-full"></span>
                    </a>
                ))}
            </div> */}
          </footer>
        </section>
    </section>
  );
}
