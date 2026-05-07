"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Cinematic Reel '24",
    role: "Video Editing & Color Grading",
    desc: "A stylized highlight reel of the best commercial works.",
  },
  {
    id: 2,
    title: "Brand Anthem",
    role: "Post-Production",
    desc: "A rhythmic brand manifesto built with dynamic typography and fast cuts.",
  },
  {
    id: 3,
    title: "Interactive Studio",
    role: "Web Development",
    desc: "A custom WebGL and Framer Motion experience for an agency.",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#121212] py-24 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Selected Works
          </motion.h2>
          <div className="w-16 h-1 bg-white/20 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl group flex flex-col justify-between aspect-square cursor-pointer transition-all duration-300"
            >
              <div>
                <p className="text-sm font-medium text-gray-400 mb-2">{proj.role}</p>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors">{proj.title}</h3>
                <p className="text-gray-300 font-light leading-relaxed">{proj.desc}</p>
              </div>
              <div className="mt-8 flex justify-end">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
