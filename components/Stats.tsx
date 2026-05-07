"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { target: 1500, suffix: "+", label: "Videos Edited" },
  { target: 5, suffix: "+", label: "Years of Experience" },
  { target: 20, suffix: "+", label: "Brands Served" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] via-transparent to-accent/[0.03] pointer-events-none" />
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 md:gap-12 relative z-10">
        {stats.map((stat, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.6 }} viewport={{ once: true }}
            className="flex flex-col items-center text-center">
            <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-gradient-gold tracking-tight">
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />
            </span>
            <div className="w-8 h-[2px] bg-accent/30 my-4 rounded-full" />
            <span className="text-xs md:text-sm text-text-secondary font-light tracking-wide">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
