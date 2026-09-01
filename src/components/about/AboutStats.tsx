"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) {
      return;
    }
    
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease-out curve for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [end, duration, start]);

  return count;
}

function StatCounter({ title, label, delay }: { title: string; label: string; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  let numericValue = 0;
  let suffix = "";
  
  if (title === "24/7") {
    numericValue = 24;
    suffix = "/7";
  } else {
    // Parse the number and suffix from title (e.g., "50,000+" -> 50000, "+")
    const numericStr = title.replace(/[^0-9.]/g, "");
    numericValue = parseFloat(numericStr);
    suffix = title.replace(/[0-9.,]/g, ""); // gets "+", "%+", etc.
  }

  const hasComma = title.includes(",");
  const count = useCountUp(numericValue, 2000 + delay * 500, isVisible);

  // Format with commas if original had commas
  const formattedCount = hasComma
    ? count.toLocaleString("en-IN")
    : count.toString();

  return (
    <div ref={ref} className="text-center px-4 py-4">
      <div className="text-4xl lg:text-5xl font-extrabold text-white mb-3 leading-none tabular-nums">
        {formattedCount}{suffix}
      </div>
      <div className="text-[#c8c6c5] text-base font-medium">
        {label}
      </div>
    </div>
  );
}

export function AboutStats() {
  const stats = [
    { title: "5+", label: "Years HR Expertise" },
    { title: "250+", label: "Businesses Served" },
    { title: "50,000+", label: "Employees Managed" },
    { title: "99+", label: "Payroll Accuracy %" },
    { title: "24/7", label: "Employee Access" },
  ];

  return (
    <section className="py-24 border-t border-white/5 relative overflow-hidden bg-gradient-to-b from-[#060d10] to-[#0a1612]">
      {/* Premium Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none z-0" />
      
      {/* Animated Subtle Glows */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#16a34a]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 z-0" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 z-0" 
      />

      <div className="w-[82%] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4 inline-block"
          >
            Why HR Core?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="text-[#c8c6c5] text-lg max-w-2xl mx-auto"
          >
            Numbers that reflect our commitment to making HR better for every business.
          </motion.p>
        </div>

        {/* Stats - 1 Row Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-y-12 bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-sm py-12 px-6 shadow-2xl"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={idx !== stats.length - 1 ? "md:border-r md:border-white/10 relative" : "relative"}
            >
              <StatCounter title={stat.title} label={stat.label} delay={idx} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
