"use client";
import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowDown, ArrowUpRight, Minus, Plus, Circle, Square } from 'lucide-react';
import Link from "next/link";
import { portfolioItems } from "@/data/portfolio";

/**
 * LET'EM KNOW - Digital Agency Portfolio (v2 - High Voltage)
 * * Vibe: Brutalist Editorial, Kinetic, Textural
 * * Interactions: Custom Cursor, Marquees, Parallax feel
 */

const DATA = {
  principles: [
    { title: "Taste-led", desc: "Aesthetics aren't an afterthought. They are the language." },
    { title: "Cut the noise", desc: "We remove the fluff to reveal the signal." },
    { title: "Systems > Chaos", desc: "Creativity needs structure to scale effectively." },
  ]
};

// --- VISUAL UTILITIES ---

const NoiseOverlay = () => (
  <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.04] mix-blend-overlay">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

const GridBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.07]" 
       style={{ 
         backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
         backgroundSize: '80px 80px' 
       }}>
  </div>
);

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference hidden md:block"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <div className={`relative -ml-3 -mt-3 w-6 h-6 rounded-full bg-white transition-all duration-300 ${isPointer ? 'scale-[2.5]' : 'scale-100'}`} />
    </div>
  );
};

const Marquee = ({ text, reverse = false }) => {
  return (
    <div className="w-full overflow-hidden bg-[#F2F2F2] text-[#0A0A0A] py-3 border-y border-black">
      <div
        className={`flex w-[200%] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {/* TRACK 1 */}
        <MarqueeTrack text={text} />
        {/* TRACK 2 (duplicate) */}
        <MarqueeTrack text={text} />
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

const MarqueeTrack = ({ text }) => (
  <div className="flex whitespace-nowrap">
    {Array.from({ length: 6 }).map((_, i) => (
      <span
        key={i}
        className="mx-6 text-4xl font-bold uppercase tracking-tighter italic"
      >
        {text} <span className="mx-4">—</span>
      </span>
    ))}
  </div>
);



const Nav = () => (
  <nav className="fixed top-0 w-full z-40 px-6 py-6 md:px-12 flex justify-between items-start mix-blend-difference text-[#F2F2F2]">
    <div className="text-xl font-black tracking-tighter uppercase leading-none">
      Let'em<br/>Know®
    </div>
    <div className="flex flex-col items-end gap-2">
      <div className="flex gap-8 text-xs font-bold tracking-widest uppercase bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        {['About', 'Work', 'Principles'].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-[#C13838] transition-colors">
            {link}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-4">
      <div className="absolute inset-0 bg-[#0A0A0A]/95 backdrop-blur-xl" onClick={onClose}></div>
      <div className="relative w-full h-full md:h-auto md:max-w-6xl bg-[#0A0A0A] border border-[#222] text-[#F2F2F2] flex flex-col md:flex-row overflow-hidden shadow-2xl">
        <button onClick={onClose} className="absolute top-6 right-6 z-10 bg-white/10 p-2 rounded-full hover:bg-[#C13838] transition-colors">
          <X size={20} strokeWidth={2} />
        </button>

        {/* Left: Visual */}
        <div className="w-full md:w-2/3 bg-[#111] relative overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-[80%] h-[80%] border border-[#333] rotate-3 group-hover:rotate-0 transition-all duration-700"></div>
                 <div className="absolute w-[80%] h-[80%] border border-[#333] -rotate-3 group-hover:rotate-0 transition-all duration-700 delay-75"></div>
                 <span className="relative z-10 text-4xl font-bold uppercase tracking-tighter opacity-20">Visual Placeholder</span>
            </div>
            {/* Grain overlay on image */}
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
        </div>

        {/* Right: Info */}
        <div className="w-full md:w-1/3 p-8 md:p-12 overflow-y-auto border-l border-[#222] flex flex-col justify-between">
            <div>
              <span className="text-[#C13838] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Selected Case Study</span>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 leading-[0.85]">{project.title}</h2>
              <span className="inline-block px-3 py-1 border border-[#333] rounded-full text-xs font-mono uppercase tracking-widest mb-12">{project.category}</span>
              
              <div className="space-y-8 font-mono text-sm">
                <div>
                  <h3 className="text-gray-500 uppercase tracking-widest mb-1 text-[10px]">Role</h3>
                  <p>Art Direction, Strategy</p>
                </div>
                <div>
                  <h3 className="text-gray-500 uppercase tracking-widest mb-1 text-[10px]">Deliverables</h3>
                  <p>Campaign, Identity, Social</p>
                </div>
                <div>
                  <h3 className="text-gray-500 uppercase tracking-widest mb-1 text-[10px]">Context</h3>
                  <p className="text-gray-400 normal-case font-sans text-base leading-relaxed">
                    Designed to disrupt the vertical feed. High contrast, low latency impact. A study in absolute minimalism.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-12">
                <button className="w-full py-4 border border-[#F2F2F2] hover:bg-[#F2F2F2] hover:text-black transition-all uppercase font-bold tracking-widest text-xs">
                    View Live Project
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <div className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      {children}
    </div>
  );
};

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F2F2F2] selection:bg-[#C13838] selection:text-white font-sans antialiased overflow-x-hidden">
      <CustomCursor />
      <NoiseOverlay />
      <GridBackground />
      <Nav />

      {/* ABSTRACT DECORATIVE SHAPES */}
      <div className="fixed top-20 right-10 w-64 h-64 border border-[#222] rounded-full pointer-events-none opacity-50 z-0 animate-pulse-slow hidden md:block"></div>
      <div className="fixed bottom-20 left-10 w-4 h-4 bg-[#C13838] pointer-events-none z-0 rotate-45"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none z-0"></div>


      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 relative overflow-hidden">
            {/* Background Massive Text */}
            <div className="absolute right-[-10%] top-[10%] text-[20vw] font-black leading-none opacity-[0.03] select-none pointer-events-none whitespace-nowrap writing-vertical-rl md:writing-horizontal-tb">
                LET'EM KNOW
            </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-6 items-end h-full">
            
            {/* Left: Manifesto */}
            <div className="md:col-span-5 relative z-10">
              <FadeIn delay={200}>
                <div className="border-l border-[#C13838] pl-6 mb-12">
                    <p className="font-serif italic text-2xl text-gray-400 mb-4">
                        "Make it work, then make it beautiful."
                    </p>
                    <p className="text-sm font-mono text-[#F2F2F2] uppercase tracking-widest leading-relaxed opacity-80 max-w-xs">
                        Whether it’s a reel, a pitch, or a brand, we don't just dress it up. We give it teeth.
                    </p>
                </div>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[#C13838]">
                    <div className="w-12 h-[1px] bg-[#C13838]"></div>
                    Scroll to explore
                </div>
              </FadeIn>
            </div>

            {/* Right: Headline */}
            <div className="md:col-span-7 relative z-10 mb-12 md:mb-0">
              <FadeIn delay={100}>
                <h1 className="text-[14vw] md:text-[8vw] leading-[0.85] font-black tracking-tighter uppercase mix-blend-exclusion">
                  <span className="block text-transparent" style={{ WebkitTextStroke: '1px #F2F2F2' }}>A Creative</span>
                  <span className="block pl-[10vw] md:pl-24">Agency</span>
                  <span className="block text-[#C13838]">That Gets It.</span>
                </h1>
                <div className="mt-8 md:pl-24 flex flex-wrap gap-4 text-xl md:text-2xl font-bold tracking-tight">
                    <span className="bg-[#F2F2F2] text-black px-3 py-1 rounded-sm rotate-2 inline-block">Stops the scroll.</span>
                    <span className="border border-[#F2F2F2] px-3 py-1 rounded-sm -rotate-1 inline-block">Design that feels.</span>
                    <span className="opacity-50 px-3 py-1">Strategy that sells.</span>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* MARQUEE SEPARATOR */}
        <Marquee text="CULTURE / CONVERSION / CHAOS / CONTROL" />

        {/* PRINCIPLES SECTION */}
        <section id="principles" className="py-32 px-6 md:px-12 border-b border-[#222] relative">
            <div className="absolute top-10 right-10 opacity-20"><Plus size={40} /></div>
            
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <h2 className="text-xs font-black uppercase tracking-widest text-[#C13838] sticky top-32 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#C13838] rounded-full"></span>
                Our Code
              </h2>
            </div>
            <div className="md:col-span-9">
              {DATA.principles.map((p, i) => (
                <div key={i} className="group border-t border-[#222] py-12 hover:bg-[#111] transition-colors relative overflow-hidden">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 relative z-10">
                        <span className="text-xs font-mono text-gray-600">0{i+1}</span>
                        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter group-hover:text-transparent group-hover:stroke-white transition-all duration-300" style={{ WebkitTextStroke: '1px #F2F2F2' }}>
                            {p.title}
                        </h3>
                    </div>
                    <p className="mt-4 md:ml-20 text-gray-400 font-mono text-sm max-w-md group-hover:text-[#F2F2F2] transition-colors">
                        {p.desc}
                    </p>
                    {/* Hover Decoration */}
                    <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block text-[#C13838]">
                        <ArrowUpRight size={64} strokeWidth={1} />
                    </div>
                </div>
              ))}
              <div className="border-t border-[#222]"></div>
            </div>
          </div>
        </section>

        {/* WORK SECTION */}
        <section id="work" className="py-20 px-2 md:px-12">
          <div className="mb-20 px-4 md:px-0 flex items-end justify-between">
             <h2 className="text-[10vw] leading-none font-black tracking-tighter opacity-10 uppercase">Selected Work</h2>
             <div className="hidden md:block text-xs font-mono text-gray-500 text-right">
                SCROLL TO NAVIGATE<br/>CLICK TO EXPAND
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full">
            {portfolioItems.map((project, index) => {
                const isWide = project.size === "wide";

                return (
                <Link
                    key={project.id}
                    href={`/work/${project.id}`}
                    className={`group relative cursor-pointer ${
                    isWide ? "md:col-span-2" : "md:col-span-1"
                    }`}
                >
                    <div
                    className={`relative w-full overflow-hidden bg-[#111] ${
                        isWide ? "aspect-[16/9]" : "aspect-square"
                    } border border-[#222] group-hover:border-white/50 transition-colors`}
                    >
                    {/* IMAGE */}
                    <img
                        src={project.image}
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* HOVER CTA */}
                    <div className="absolute inset-0 bg-[#000000]/50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center">
                        <span className="text-4xl font-black uppercase tracking-tighter text-white">
                        View Case
                        </span>
                    </div>
                    </div>

                    {/* INDEX */}
                    <div className="absolute top-4 left-4 z-20 mix-blend-difference">
                    <span className="text-xs font-bold uppercase tracking-widest bg-white text-black px-2 py-1">
                        {index < 9 ? `0${index + 1}` : index + 1}
                    </span>
                    </div>

                    {/* META */}
                    <div className="mt-3 flex justify-between items-end px-2">
                    <h3 className="text-2xl font-bold uppercase group-hover:text-[#C13838] transition-colors">
                        {project.name}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-widest border border-[#333] px-2 py-1 rounded-full">
                        {project.category}
                    </span>
                    </div>
                </Link>
                );
            })}
            </div>

          
          {/* <div className="mt-20 flex justify-center">
             <button className="text-sm font-mono uppercase tracking-widest border-b border-[#C13838] pb-1 hover:text-[#C13838] transition-colors">
                View All Projects
             </button>
          </div> */}
        </section>

        <Marquee text="LET'EM KNOW / LET'EM KNOW / LET'EM KNOW" reverse={true} />

        {/* ABOUT / FOOTER SECTION (Combined for impact) */}
        <section id="about" className="py-32 px-6 md:px-12 bg-[#F2F2F2] text-[#0A0A0A] relative">
           <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0A0A0A] to-transparent pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
             <div>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
                  NO FLUFF.<br/>NO FILLER.<br/><span className="text-[#C13838]">JUST HEAT.</span>
                </h2>
             </div>
             <div className="flex flex-col justify-between">
                <p className="text-2xl font-medium leading-tight mb-12">
                  We are a compact team of digital natives obsessed with the intersection of culture and conversion.
                </p>
                
                <div className="grid grid-cols-2 gap-8 text-sm font-bold uppercase tracking-widest">
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#C13838]"></div>Reels</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#C13838]"></div>Campaigns</li>
                    </ul>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#C13838]"></div>Brand Systems</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#C13838]"></div>Strategy</li>
                    </ul>
                </div>
             </div>
          </div>

          <footer className="mt-32 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-end">
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

      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default App;