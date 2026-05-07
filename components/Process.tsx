"use client";

import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Scissors, Truck } from "lucide-react";

const steps = [
  { icon: MessageSquare, number: "01", title: "Discovery", description: "We discuss your vision, goals, target audience, and creative direction to build a solid foundation." },
  { icon: Lightbulb, number: "02", title: "Pre-Production", description: "Storyboarding, shot planning, mood boards, and creative strategy — everything mapped before we start." },
  { icon: Scissors, number: "03", title: "Editing & Post", description: "The magic happens — cutting, color grading, sound design, motion graphics, and visual effects." },
  { icon: Truck, number: "04", title: "Delivery", description: "Final review, revisions, and delivery in all required formats — optimized for every platform." },
];

export default function Process() {
  return (
    <section id="process" className="relative w-full py-32">
      <div className="text-center mb-20">
        <p className="section-label">Process</p>
        <h2 className="section-title">How I <span className="text-gradient-gold">Work</span></h2>
        <p className="section-subtitle mt-6 max-w-2xl mx-auto">A streamlined workflow designed for efficiency and creative excellence.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
        {/* Connecting line (desktop) */}
        <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15, duration: 0.6 }} viewport={{ once: true }}
              className="relative flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-surface border border-white/5 group-hover:border-accent/30 flex items-center justify-center mb-6 transition-all duration-500 relative z-10 group-hover:shadow-glow-amber">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <span className="text-xs font-bold tracking-[0.3em] text-accent/60 mb-2">{step.number}</span>
              <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-text-secondary font-light leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
