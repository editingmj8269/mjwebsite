"use client";

import { motion } from "framer-motion";
import { Film, Scissors, Youtube, Mic, BookOpen, ShoppingBag, Camera, Image, Clapperboard, Sparkles, Heart, Video } from "lucide-react";

const servicesList = [
  { icon: Scissors, title: "Short-form Reels" },
  { icon: Youtube, title: "YouTube Editing" },
  { icon: Sparkles, title: "Brand & Commercial Ads" },
  { icon: Mic, title: "Podcast Editing" },
  { icon: Video, title: "Talking Head Videos" },
  { icon: Clapperboard, title: "Cinematic Shoots" },
  { icon: Camera, title: "Product Shoots" },
  { icon: Heart, title: "Event & Wedding Shoots" },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full py-32">
      <div className="text-center mb-20">
        <p className="section-label">Services</p>
        <h2 className="section-title">
          What I <span className="text-gradient-gold">Do</span>
        </h2>
        <p className="section-subtitle mt-6 max-w-2xl mx-auto">
          End-to-end creative services — from shooting to final delivery.
        </p>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {servicesList.map((svc, i) => {
          const Icon = svc.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group glass-panel p-6 md:p-8 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent/40 group-hover:scale-110 transition-all duration-500">
                <Icon className="w-6 h-6 text-accent group-hover:text-black transition-colors duration-300" />
              </div>
              <h4 className="text-sm md:text-base font-medium text-white tracking-tight group-hover:text-accent transition-colors duration-300 leading-snug">
                {svc.title}
              </h4>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
