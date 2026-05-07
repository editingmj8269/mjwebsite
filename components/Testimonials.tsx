"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { text: "Bro, the way you synced the music with the b-roll is insane! The retention graph on the last reel you edited is literally a straight line. Unbelievable pacing.", author: "Karan V.", role: "YouTube Creator", initials: "KV" },
  { text: "Honestly wasn't expecting this level of detail. MJ took our messy raw footage and turned it into an absolute movie. Definitely my go-to editor now.", author: "Aman D.", role: "Startup Founder", initials: "AD" },
  { text: "The turnaround time is crazy fast, but the quality never drops. He really understands how to hook an audience in the first 3 seconds.", author: "Neha S.", role: "Content Strategist", initials: "NS" },
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-32 overflow-hidden">
      <div className="absolute w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px] -top-40 left-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="text-center mb-20 relative z-10">
        <p className="section-label">Testimonials</p>
        <h2 className="section-title">Kind <span className="text-gradient-gold">Words</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
        {testimonials.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.6 }} viewport={{ once: true }}
            className="flex flex-col justify-between glass-panel p-8 md:p-10">
            <div className="mb-8">
              <Quote className="w-8 h-8 text-accent/40 mb-6" />
              <p className="text-base md:text-lg font-light text-white/90 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
            </div>
            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-sm font-semibold text-accent">{t.initials}</div>
              <div>
                <p className="text-sm font-semibold text-white">{t.author}</p>
                <p className="text-xs text-text-muted">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
