"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 5]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background cinematic dark frame over paper */}
      <div className="absolute inset-4 rounded-xl overflow-hidden bg-[#111] shadow-2xl">
        <motion.div 
          style={{ y: y1 }} 
          className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111]/80 z-10" 
        />
        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1594244243685-6490333d7b88)' }} />
      </div>

      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ rotate }}
          className="paper-texture p-4 pb-12 torn-edge mb-8 group"
        >
          <div className="tape"></div>
          <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-300 overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1536780880183-500babe3956f" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Manav Jaiswal" />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          style={{ opacity }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-[#EFEBE1] leading-tight"
        >
          Not Just an Editor — <br/>
          A Storyteller Backed by <span className="text-[#DD9F15]">Experience</span> and <span className="text-[#3E6382]">Trust</span>.
        </motion.h1>
      </div>
    </section>
  );
}
