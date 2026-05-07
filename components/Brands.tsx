"use client";

import { motion } from "framer-motion";

const brands = ["Angel One", "Oziva", "Seekho", "SleepyCat", "Money View", "SAMCO", "SnapTV", "Justdial"];

export default function Brands() {
  return (
    <section className="w-full py-20 overflow-hidden relative">
      <div className="text-center mb-12">
        <p className="section-label">Trusted By</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Brands I&apos;ve worked with
        </h2>
      </div>

      {/* Gradient masks */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      {/* Scrolling marquee */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        className="flex whitespace-nowrap items-center"
      >
        {[...brands, ...brands, ...brands].map((b, i) => (
          <span
            key={i}
            className="text-2xl md:text-4xl font-bold tracking-tight text-white/20 hover:text-accent/60 transition-colors duration-500 px-8 md:px-14 uppercase cursor-default"
          >
            {b}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
