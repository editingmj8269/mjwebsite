"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative w-full py-32 flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-16 lg:gap-24">

        {/* Right Side (formerly Left): Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="lg:flex-shrink-0 w-full lg:w-auto relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-3xl bg-surface isolate group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            <div className="absolute inset-0 rounded-3xl border border-white/5 group-hover:border-accent/20 transition-colors duration-700 z-20" />
            <img
              src="/about2.jpg"
              alt="Manav Jaiswal"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute -inset-4 bg-accent/5 rounded-full blur-[80px] -z-10 pointer-events-none" />
        </motion.div>

        {/* Right Side: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex-1 space-y-6"
        >
          <div>
            <p className="section-label">About Me</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              From theatre stages to
              <br />
              <span className="text-gradient-gold">editing timelines.</span>
            </h2>
          </div>

          <p className="text-base md:text-lg font-light text-text-secondary leading-relaxed max-w-xl">
            I&apos;m <span className="text-white font-medium">Manav Jaiswal (MJ)</span>, a video editor and videographer from Kawardha, Chhattisgarh.
          </p>

          <p className="text-base md:text-lg font-light text-text-secondary leading-relaxed max-w-xl">
            My creative journey started in <span className="text-white font-medium">theatre</span>. I completed my Bachelor&apos;s degree in Theatre Arts from Indira Kala Sangeet Vishwavidyalaya, Khairagarh — where I learned storytelling, emotions, pacing, stage composition, and audience psychology. That storytelling mindset became my biggest strength in video editing.
          </p>

          <p className="text-base md:text-lg font-light text-text-secondary leading-relaxed max-w-xl">
            I started professionally at a <span className="text-white font-medium">photography studio</span>, working on weddings, events, portraits, and commercial shoots. Later, I joined a <span className="text-white font-medium">creative digital agency</span>, where I edited performance-driven content for brands and creators.
          </p>

          <p className="text-base md:text-lg font-light text-text-secondary leading-relaxed max-w-xl">
            Today, I focus on creating videos that <span className="text-accent font-medium">grab attention fast</span>, keep viewers engaged, and help brands grow.
          </p>

        </motion.div>
      </div>
    </section>
  );
}
