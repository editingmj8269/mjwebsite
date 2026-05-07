"use client";

import { motion } from "framer-motion";

const tools = [
  { name: "Pr", label: "Premiere Pro", desc: "Primary NLE", gradient: "from-[#00005B] via-[#1F003D] to-[#2B0054]", text: "text-[#9999FF]", proficiency: 95 },
  { name: "Ae", label: "After Effects", desc: "Motion & VFX", gradient: "from-[#00005B] via-[#1A0040] to-[#000043]", text: "text-[#D299FF]", proficiency: 85 },
  { name: "Ps", label: "Photoshop", desc: "Thumbnails", gradient: "from-[#001D40] via-[#001030] to-[#000D20]", text: "text-[#3AA1FF]", proficiency: 80 },
  { name: "Lr", label: "Lightroom", desc: "Photo Editing", gradient: "from-[#001D40] via-[#001530] to-[#001020]", text: "text-[#4DC3FF]", proficiency: 80 },
  { name: "Fl", label: "FL Studio", desc: "Music & Audio", gradient: "from-[#1a1000] via-[#111] to-[#0a0a0a]", text: "text-[#F7941D]", proficiency: 85 },
];

export default function Software() {
  return (
    <section className="py-32">
      <div className="text-center mb-20">
        <p className="section-label">Toolkit</p>
        <h2 className="section-title">Software I <span className="text-gradient-gold">Master</span></h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {tools.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}
            className={`group relative rounded-3xl bg-gradient-to-br ${t.gradient} p-6 md:p-8 border border-white/5 hover:border-white/10 transition-all duration-500`}>
            <span className={`font-semibold text-4xl md:text-5xl ${t.text}`}>{t.name}</span>
            <p className="text-white font-medium text-sm mt-4">{t.label}</p>
            <p className="text-white/40 text-xs mt-0.5">{t.desc}</p>
            <div className="mt-4 h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: `${t.proficiency}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.3 + i * 0.1 }}
                className="h-full bg-gradient-to-r from-accent/60 to-accent rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
