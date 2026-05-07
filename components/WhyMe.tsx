"use client";

import { motion } from "framer-motion";
import { BookOpen, Heart, Eye, Users, Lightbulb, Music, TrendingUp } from "lucide-react";

const strengths = [
  { icon: BookOpen, label: "Storytelling" },
  { icon: Heart, label: "Emotional Timing" },
  { icon: Eye, label: "Visual Composition" },
  { icon: Users, label: "Audience Retention" },
  { icon: Lightbulb, label: "Creative Direction" },
  { icon: Music, label: "Sound Rhythm" },
  { icon: TrendingUp, label: "Performance-based Editing" },
];

export default function WhyMe() {
  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-[600px] h-[400px] rounded-full bg-accent/5 blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <p className="section-label">Why Work With Me</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-8">
            I don&apos;t just cut
            <br />
            <span className="text-gradient-gold">clips together.</span>
          </h2>
          <p className="text-base md:text-lg font-light text-text-secondary leading-relaxed max-w-lg mb-6">
            My background in theatre helps me understand how stories work — emotionally, visually, and rhythmically.
          </p>
          <p className="text-base md:text-lg font-light text-text-secondary leading-relaxed max-w-lg">
            Every project is built with one goal:
          </p>
          <p className="text-xl md:text-2xl font-semibold text-white mt-4 tracking-tight">
            Make people stop scrolling and <span className="text-accent">start watching.</span>
          </p>
        </motion.div>

        {/* Right: Strengths Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <div className="grid grid-cols-2 gap-4">
            {strengths.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-3 glass-panel p-4 md:p-5"
                >
                  <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-all duration-300">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                    {s.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
