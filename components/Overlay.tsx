"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const opacity1 = useTransform(scrollYProgress, [0, 0.45, 0.65], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.65], [0, -100]);
  const scale1 = useTransform(scrollYProgress, [0, 0.65], [1, 0.9]);
  const globalOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  return (
    <motion.div style={{ opacity: globalOpacity }} className="absolute inset-0 z-50 pointer-events-none" >
      <div className="relative w-full h-full px-6 md:px-12">
        <motion.div
          style={{ opacity: opacity1, y: y1, scale: scale1 }}
          className="absolute inset-x-6 md:inset-x-12 bottom-16 md:bottom-20 flex flex-col items-center text-center pointer-events-auto"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 2.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white mb-2 leading-[1.1] text-balance"
          >
            Manav Jaiswal<span className="text-accent">.</span>
          </motion.h1>

          {/* Role Tag — below name */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 2.6 }}
            className="text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-accent mb-5"
            style={{ textShadow: "0 0 20px rgba(232,168,73,0.9), 0 0 40px rgba(232,168,73,0.5)" }}
          >
            Video Editor &bull; Videographer &bull; Visual Storyteller
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 2.8 }}
            className="text-sm md:text-base font-semibold text-white tracking-wide mb-8 max-w-2xl leading-relaxed text-balance"
            style={{ textShadow: "0 0 30px rgba(255,255,255,0.6), 0 2px 8px rgba(0,0,0,0.8)" }}
          >
            I create{" "}
            <span style={{ color: "#e8a849", textShadow: "0 0 18px rgba(232,168,73,0.8)" }}>high-retention videos</span>{" "}
            that don&apos;t just look good — they{" "}
            <span style={{ color: "#e8a849", textShadow: "0 0 18px rgba(232,168,73,0.8)" }}>perform</span>. From reels, brand ads, podcasts to cinematic shoots —{" "}
            <span style={{ color: "#ffffff", textShadow: "0 0 20px rgba(255,255,255,0.9)" }}>turning ideas into scroll-stopping visuals</span>.
          </motion.p>

          {/* Stats + Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 3.0 }}
            className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 pointer-events-auto"
          >
            {/* Stats */}
            <div className="flex gap-8 items-center border-b sm:border-b-0 sm:border-r border-white/10 pb-6 sm:pb-0 sm:pr-10">
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-bold text-gradient-gold drop-shadow-md">1500+</span>
                <span className="text-[10px] md:text-[11px] text-white/60 font-bold tracking-wider uppercase mt-0.5 drop-shadow-md">Videos</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-bold text-gradient-gold drop-shadow-md">5+</span>
                <span className="text-[10px] md:text-[11px] text-white/60 font-bold tracking-wider uppercase mt-0.5 drop-shadow-md">Years</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col xs:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#portfolio"
                className="relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-black bg-[#e8a849] rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(232,168,73,0.5)] hover:shadow-[0_0_50px_rgba(232,168,73,0.8)] active:scale-95 cursor-pointer"
              >
                Explore Portfolio
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white bg-white/10 backdrop-blur-md border border-white/30 rounded-full hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </motion.div>
  );
}
