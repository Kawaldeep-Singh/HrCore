"use client";

import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { ArrowRight } from "lucide-react";

export function HRMSCTA() {
  const { openModal } = useModal();
  return (
    <section className="py-20 md:py-24 bg-[#fbfdfa] relative overflow-hidden text-center flex flex-col items-center border-t border-gray-100">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#006e1c]/20 to-[#003b0f]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-[82%] mx-auto flex flex-col items-center"
      >
        <span className="text-[#006e1c] font-bold tracking-widest uppercase text-xs mb-4">
          Upgrade Your HR
        </span>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#041208] mb-6 leading-[1.1] tracking-tight">
          Ready to Experience <br className="hidden md:block" /> 
          <span className="text-[#006e1c]">Smarter HR?</span>
        </h2>
        
        <p className="text-gray-600 text-base md:text-xl mb-10 max-w-2xl font-medium">
          See how HR Core can simplify your HR operations and give your people a better experience.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button 
            onClick={openModal} 
            className="w-full sm:w-auto bg-[#006e1c] text-white font-bold text-sm md:text-base px-8 py-4 rounded-xl hover:bg-[#005a17] hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(163,230,53,0.3)] flex items-center justify-center gap-2"
          >
            Book a Demo <ArrowRight size={18} />
          </button>
          <button className="w-full sm:w-auto bg-white border border-gray-300 text-gray-800 font-bold text-sm md:text-base px-8 py-4 rounded-xl hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all shadow-sm">
            Talk to an Expert
          </button>
        </div>
      </motion.div>
    </section>
  );
}
