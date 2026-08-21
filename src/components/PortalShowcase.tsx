"use client";

import { motion } from "framer-motion";

export function PortalShowcase() {
  return (
    <section className="py-24 px-6 bg-[#082111] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Presenting Our Portal
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            A unified interface that gives you absolute clarity and control over all your HR and payroll operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full relative group"
        >
          {/* Glow effect behind the image */}
          <div className="absolute inset-0 bg-[#a3e635]/20 blur-[100px] rounded-full transform scale-90 group-hover:bg-[#a3e635]/30 transition-all duration-700 pointer-events-none" />
          
          <div className="relative z-10 rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#06180b]">
            {/* Mac OS style window header */}
            <div className="bg-[#0a1a0f] border-b border-white/5 h-10 w-full flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            
            {/* The Dashboard Image */}
            <img
              src="/hero-dashboard.png"
              alt="HR Core Portal Dashboard"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
