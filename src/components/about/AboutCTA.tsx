"use client";

import React from "react";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";

export function AboutCTA() {
  const { openModal } = useModal();

  return (
    <section className="py-32 relative overflow-hidden bg-white text-center border-t border-gray-100">
      {/* Sleek Modern Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Subtle Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#16a34a]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-[82%] mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
        >
          Better HR Starts Here.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 text-xl max-w-2xl mx-auto mb-12"
        >
          Whether you’re looking for smarter HR technology, reliable payroll support, or expert HR services, HR Core is ready to help.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button onClick={openModal} className="bg-[#006e1c] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-[#005a17] hover:scale-105 transition-all duration-300">
            Book a Demo
          </button>
          <button onClick={openModal} className="bg-white border border-gray-200 text-gray-900 font-bold text-lg px-8 py-4 rounded-xl hover:bg-gray-50 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300">
            Talk to an Expert
          </button>
        </motion.div>
      </div>
    </section>
  );
}
