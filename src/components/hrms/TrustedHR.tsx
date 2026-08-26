"use client";

import { motion, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Command, Cloud, Globe, Hexagon, Cpu, Triangle, Users, CheckCircle, Clock, Star } from "lucide-react";

function AnimatedCounter({ from = 0, to, duration = 2, decimals = 0, suffix = "" }: { from?: number, to: number, duration?: number, decimals?: number, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = value.toFixed(decimals) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, decimals, suffix, isInView]);

  return <span ref={nodeRef}>{from.toFixed(decimals)}{suffix}</span>;
}

export function TrustedHR() {
  const brands = [
    { name: "Nexus", icon: Command },
    { name: "Skyline", icon: Cloud },
    { name: "Global", icon: Globe },
    { name: "Vertex", icon: Hexagon },
    { name: "TechCore", icon: Cpu },
    { name: "Prism", icon: Triangle },
  ];

  const stats = [
    { targetValue: 10, suffix: "k+", decimals: 0, label: "Employees Managed", icon: Users },
    { targetValue: 99, suffix: "%", decimals: 0, label: "Payroll Accuracy", icon: CheckCircle },
    { targetValue: 24, suffix: "/7", decimals: 0, label: "Support Available", icon: Clock },
    { targetValue: 5, suffix: "", decimals: 1, label: "Customer Rating", icon: Star },
  ];

  return (
    <section className="py-24 bg-[#fbfdfa] border-t border-gray-100 relative overflow-hidden">
      
      {/* Background Subtle Effects */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#006e1c]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#003b0f]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-[82%] mx-auto relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#041208]">
            Trusted to Power Better HR
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Join hundreds of forward-thinking companies that rely on HR Core to simplify their daily HR operations and payroll.
          </p>
        </motion.div>
        
        {/* Brand Logos */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center transition-opacity duration-500">
          {brands.map((brand, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center gap-2 text-gray-400 hover:text-[#006e1c] transition-all duration-300 cursor-default grayscale hover:grayscale-0 hover:scale-110"
            >
              <brand.icon size={28} />
              <span className="font-bold text-xl tracking-tight">{brand.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
              className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-[0_20px_40px_rgba(0,110,28,0.1)] hover:border-[#006e1c]/20 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#006e1c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#f8faf9] text-[#006e1c] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#006e1c] group-hover:text-white transition-all duration-500 shadow-sm">
                  <stat.icon size={26} />
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#041208] mb-2 tracking-tight group-hover:text-[#006e1c] transition-colors duration-500">
                  <AnimatedCounter to={stat.targetValue} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                <div className="text-gray-500 font-medium text-sm md:text-base group-hover:text-gray-700 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
