"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "Feb 2025 – Present",
    role: "Freelance Video Editor",
    company: "",
    description: "Working with creators, agencies, and brands remotely on editing projects.",
  },
  {
    period: "Oct 2024 – Aug 2025",
    role: "Video Editor",
    company: "Creator Navigator",
    description: "Edited brand campaigns, reels, ads, and creator content for a Bhilai-based agency.",
  },
  {
    period: "Nov 2020 – Apr 2024",
    role: "Videographer / Photographer / Editor",
    company: "Yogi Photo Studio",
    description: "Handled shoots, editing, client delivery, and creative execution for weddings, events, and commercial projects.",
  },
  {
    period: "Jan 2020 – Mar 2023",
    role: "Music Composer",
    company: "",
    description: "Worked on music production which helped build stronger audio understanding in edits.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-32">
      <div className="max-w-3xl mx-auto w-full">
        <div className="text-center mb-16">
          <p className="section-label">Experience</p>
          <h2 className="section-title">The <span className="text-gradient-gold">Journey</span></h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative pl-10 md:pl-16 pb-12 last:pb-0"
            >
              {/* Node */}
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-accent rounded-full ring-4 ring-[#0a0a0a]" />

              <div className="glass-panel p-6 md:p-8">
                <p className="text-xs font-semibold tracking-[0.15em] text-accent uppercase mb-2">{exp.period}</p>
                <h4 className="text-xl font-semibold tracking-tight text-white mb-1">{exp.role}</h4>
                {exp.company && (
                  <p className="text-sm font-medium text-text-secondary mb-3">{exp.company}</p>
                )}
                <p className="text-sm text-text-secondary font-light leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
