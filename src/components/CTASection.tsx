"use client";

import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-32 px-6 bg-[#041208] relative overflow-hidden text-center flex flex-col items-center border-t border-white/5">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#a3e635]/10 to-[#1a4a25]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
      >
        <span className="text-[#a3e635] font-bold tracking-widest uppercase text-sm mb-6">
          READY TO SIMPLIFY HR?
        </span>
        
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
          Let’s Make HR <br className="hidden md:block" /> Work Better.
        </h2>
        
        <p className="text-gray-400 text-lg md:text-2xl mb-12 max-w-2xl font-medium">
          See how HR Core can help you simplify HR and build a better employee experience.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-[#a3e635] text-[#041208] font-bold text-base md:text-lg px-8 py-4 rounded-xl hover:bg-[#86c429] hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(163,230,53,0.3)]">
            Book a Demo
          </button>
          <button className="w-full sm:w-auto bg-white/5 border border-white/10 text-white font-bold text-base md:text-lg px-8 py-4 rounded-xl hover:bg-white/10 hover:scale-105 active:scale-95 transition-all">
            Talk to an Expert
          </button>
        </div>
      </motion.div>
    </section>
  );
}
