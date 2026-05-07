"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "Story Structure", "Visual Pacing", "Color Grading", 
    "Sound Design", "Motion GFX", "Compositing", 
    "Typography", "Rhythm & Timing"
  ];

  return (
    <section id="skills" className="relative w-full py-24 px-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full text-center mb-16">
         <h2 className="text-sm font-semibold tracking-widest text-[#86868b] uppercase mb-4">
           Expertise
         </h2>
         <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Core Competencies.</h3>
      </div>

      <div className="max-w-5xl w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex items-center justify-center p-6 bg-[#1c1c1e] rounded-2xl shadow-apple transition-transform duration-300 hover:scale-[1.03] text-center"
          >
            <span className="text-lg font-medium text-white tracking-wide">{skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
