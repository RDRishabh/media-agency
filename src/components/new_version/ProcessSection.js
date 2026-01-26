"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ProcessSection() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      {/* Subtle grid / noise overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:6px_6px] opacity-20" />

      <div className="relative mx-auto px-6 py-32 max-w-7xl">
        {/* Heading */}
        <div className="text-center mx-auto perspective-1000">
          <div className="text-center mx-auto perspective-1000">
            <motion.h1
                initial="hidden"
                animate="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="text-[clamp(3rem,8vw,9rem)] leading-[1.05] font-light uppercase tracking-tight"
            >
                <AnimatedLine delay={0}>I’m <span className="italic font-serif text-white">Utkarsh</span></AnimatedLine>
                <AnimatedLine delay={0.15}>I Build <span className="italic font-serif text-white">Digital</span></AnimatedLine>
                <AnimatedLine delay={0.3}><span className="italic font-serif text-white">Experiences</span></AnimatedLine>
            </motion.h1>
          </div>


          <p className="mt-6 text-xl text-white/60 max-w-md mx-auto">
            Thoughtfully crafted visuals and strategy that move people to act.
          </p>
        </div>

        {/* Process wrapper */}
        <div className="relative mt-32">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-white/15" />

          {/* Steps */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-20">
            {/* Step 01 */}
            <div className="text-center">
              <div className="flex justify-center mb-10 relative z-10">
                <span className="flex items-center justify-center w-9 h-9 rounded-full border border-white/30 text-xs bg-black">
                  01
                </span>
              </div>

              <div className="flex justify-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
              </div>

              <h3 className="text-lg font-semibold uppercase">
                Stops the Scroll
              </h3>
              <p className="mt-3 text-sm text-white/60 max-w-xs mx-auto">
                Instantly capture attention with bold visuals and clear messaging
                that make people pause and look twice.
              </p>
            </div>

            {/* Step 02 */}
            <div className="text-center">
              <div className="flex justify-center mb-10 relative z-10">
                <span className="flex items-center justify-center w-9 h-9 rounded-full border border-white/30 text-xs bg-black">
                  02
                </span>
              </div>

              <div className="flex justify-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
              </div>

              <h3 className="text-lg font-semibold uppercase">
                Design That Feels
              </h3>
              <p className="mt-3 text-sm text-white/60 max-w-xs mx-auto">
                Create experiences that feel intuitive, human, and emotionally
                aligned with your brand’s voice.
              </p>
            </div>

            {/* Step 03 */}
            <div className="text-center">
              <div className="flex justify-center mb-10 relative z-10">
                <span className="flex items-center justify-center w-9 h-9 rounded-full border border-white/30 text-xs bg-black">
                  03
                </span>
              </div>

              <div className="flex justify-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
              </div>

              <h3 className="text-lg font-semibold uppercase">
                Strategy That Sells
              </h3>
              <p className="mt-3 text-sm text-white/60 max-w-xs mx-auto">
                Every decision is intentional—built to guide users, drive trust,
                and convert attention into action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const letterVariants = {
  animate: {
    rotateY: [0, 15, 0],
    transition: {
      duration: 2.8,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

function RotatingText({ text }) {
  return (
    <span className="inline-block">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block will-change-transform"
          variants={letterVariants}
          animate="animate"
          style={{
            display: "inline-block",
            transformOrigin: "center",
          }}
          transition={{
            delay: i * 0.04,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

const lineVariants = {
  hidden: {
    rotateX: 90,
    opacity: 0,
    y: 80,
  },
  visible: {
    rotateX: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function AnimatedLine({ children, delay = 0 }) {
  return (
    <motion.span
      className="block overflow-hidden"
      variants={lineVariants}
      transition={{ delay }}
      style={{ transformOrigin: "bottom" }}
    >
      {children}
    </motion.span>
  );
}
