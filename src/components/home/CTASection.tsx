"use client";

import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";

export function CTASection() {
  const { openModal } = useModal();
  return (
    <section className="py-20 md:py-24 bg-[#020904] relative overflow-hidden text-center flex flex-col items-center border-t border-white/5">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#a3e635]/5 to-[#1a4a25]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-[82%] mx-auto flex flex-col items-center"
      >
        <span className="text-[#a3e635] font-bold tracking-widest uppercase text-xs mb-4">
          READY TO SIMPLIFY HR?
        </span>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
          Let’s Make HR <br className="hidden md:block" /> Work Better.
        </h2>
        
        <p className="text-gray-400 text-base md:text-xl mb-10 max-w-2xl font-medium">
          See how HR Core can help you simplify HR and build a better employee experience.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button onClick={openModal} className="w-full sm:w-auto bg-[#a3e635] text-[#041208] font-bold text-sm md:text-base px-6 py-3 rounded-xl hover:bg-[#86c429] hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(163,230,53,0.2)]">
            Book a Demo
          </button>
          <button onClick={openModal} className="w-full sm:w-auto bg-white/5 border border-white/10 text-white font-bold text-sm md:text-base px-6 py-3 rounded-xl hover:bg-white/10 hover:scale-105 active:scale-95 transition-all">
            Talk to an Expert
          </button>
        </div>
      </motion.div>
    </section>
  );
}
