"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-32 flex justify-center bg-black relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl text-center relative z-10 px-6"
      >
         <h2 className="text-sm font-semibold tracking-widest text-[#86868b] uppercase mb-4">
           Background
         </h2>
         <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-8">
           Formally educating the eye, <br/>but breaking rules in practice.
         </h3>
         
         <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-medium text-[#f5f5f7] tracking-wide">
           <span className="px-6 py-2 bg-[#1c1c1e] rounded-full border border-white/10">Degree in Visual Arts</span>
           <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-[#86868b]"></span>
           <span className="px-6 py-2 bg-[#1c1c1e] rounded-full border border-white/10">Graduated 2021</span>
         </div>
      </motion.div>

      {/* Abstract background elements to replace the comic 'CERTI' text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-video rounded-full bg-apple-blue/5 blur-[120px] pointer-events-none" />
    </section>
  );
}
