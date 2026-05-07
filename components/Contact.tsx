"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, Instagram, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const contactOptions = [
  {
    icon: Phone,
    label: "Call Me",
    desc: "8269212080",
    href: "tel:+918269212080",
    color: "from-green-500/20 to-green-600/5",
    borderHover: "hover:border-green-500/40",
    iconColor: "text-green-400 group-hover:text-green-300",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    desc: "Chat on WhatsApp",
    href: "https://wa.me/918269212080?text=Hi%20MJ!%20I%20want%20to%20discuss%20a%20project.",
    color: "from-emerald-500/20 to-emerald-600/5",
    borderHover: "hover:border-emerald-500/40",
    iconColor: "text-emerald-400 group-hover:text-emerald-300",
  },
  {
    icon: Mail,
    label: "Email",
    desc: "editing.mj8269@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=editing.mj8269@gmail.com&su=Project%20Inquiry&body=Hi%20MJ!%20I%20want%20to%20discuss%20a%20project.",
    color: "from-blue-500/20 to-blue-600/5",
    borderHover: "hover:border-blue-500/40",
    iconColor: "text-blue-400 group-hover:text-blue-300",
  },
  {
    icon: Instagram,
    label: "Instagram",
    desc: "@dits_mj",
    href: "https://www.instagram.com/dits_mj",
    color: "from-pink-500/20 to-purple-600/5",
    borderHover: "hover:border-pink-500/40",
    iconColor: "text-pink-400 group-hover:text-pink-300",
  },
];

export default function Contact() {
  const [glowIndex, setGlowIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      setGlowIndex(-1); // Hide automated glow when user is hovering
      return;
    }
    const interval = setInterval(() => {
      setGlowIndex((prev) => {
        let next;
        do {
          next = Math.floor(Math.random() * contactOptions.length);
        } while (next === prev);
        return next;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="contact" className="relative w-full py-32">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] top-0 left-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label">Contact</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
            Let&apos;s create<br /><span className="text-gradient-gold">something great.</span>
          </h2>
          <p className="text-text-secondary font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Have a project in mind? Reach out through any of these channels and let&apos;s bring your vision to life.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {contactOptions.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl bg-surface border p-6 md:p-8 flex items-center gap-5 transition-all duration-700 hover:scale-[1.02] ${
                  glowIndex === i
                    ? "border-accent/40 shadow-[0_0_30px_rgba(232,168,73,0.15)]"
                    : "border-white/5"
                } ${item.borderHover}`}
              >
                {/* Gradient background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-opacity duration-700 pointer-events-none ${
                  glowIndex === i ? "opacity-60" : "opacity-0 group-hover:opacity-100"
                }`} />

                {/* Icon */}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-white/20 transition-all duration-300">
                  <Icon className={`w-6 h-6 transition-colors duration-300 ${item.iconColor}`} />
                </div>

                {/* Text */}
                <div className="relative z-10 flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-lg tracking-tight mb-1">{item.label}</h3>
                  <p className="text-text-secondary text-sm truncate">{item.desc}</p>
                </div>

                {/* Arrow */}
                <ArrowUpRight className="relative z-10 w-5 h-5 text-white/20 group-hover:text-white/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
              </motion.a>
            );
          })}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-white/5 text-center"
        >
          <p className="text-lg md:text-xl font-light text-white/60 italic max-w-xl mx-auto leading-relaxed">
            &ldquo;Every frame should feel intentional. Every cut should move the story forward.&rdquo;
          </p>
          <p className="text-sm font-semibold text-accent mt-4">— MJ</p>
        </motion.div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted tracking-wide">
          <p>Kawardha, Chhattisgarh, India</p>
          <p className="font-medium text-white/40">© 2026 Manav Jaiswal. All rights reserved.</p>
          <a href="#" className="hover:text-accent transition-colors">Back to top ↑</a>
        </div>
      </div>
    </section>
  );
}
