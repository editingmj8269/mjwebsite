"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Portfolio", href: "#portfolio" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Active Section Tracking
    const observerOptions = {
      root: null,
      rootMargin: "-15% 0px -45% 0px", // Triggers as soon as the section hits the upper half
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        } else {
          // Only clear if the current section is actually leaving the focus
          setActiveSection((prev) => (prev === entry.target.id ? "" : prev));
        }
      });
    }, observerOptions);

    const sections = ["about", "services", "experience", "portfolio", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 2.2 }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className={`max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "glass-panel mx-4 md:mx-auto h-16 !border-none shadow-2xl" : ""
        }`}>
          {/* Logo */}
          <a
            href="#"
            className="flex-shrink-0 text-xl md:text-2xl font-bold tracking-tight text-white hover:text-accent transition-colors duration-300"
          >
            Manav<span className="text-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-[10px] md:text-xs font-bold transition-all duration-500 tracking-[0.2em] uppercase relative group ${
                    isActive 
                      ? "text-accent drop-shadow-[0_0_10px_rgba(232,168,73,0.6)] scale-110" 
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {item.name}
                  {/* Underline for active state */}
                  {isActive && (
                    <motion.div 
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className={`hidden md:inline-flex items-center justify-center px-8 py-2.5 text-xs font-bold tracking-widest uppercase rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95 ${
              activeSection === "contact"
                ? "bg-accent text-black shadow-[0_0_30px_rgba(232,168,73,0.3)]"
                : "bg-white text-black"
            }`}
          >
            Let&apos;s Talk
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-[#0a0a0a]/98 backdrop-blur-xl pt-24 px-8 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-semibold text-white hover:text-accent transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center w-full px-8 py-4 mt-4 text-lg font-bold tracking-widest uppercase text-black bg-white rounded-full hover:bg-white/90 transition-all active:scale-95"
              >
                Let&apos;s Talk
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
