"use client";

import { motion } from "framer-motion";
import { LineChart } from "lucide-react";

export function HeroSection2() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-[#0d2a14]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#508d29] via-[#1a4f27] to-[#0a1e10] pointer-events-none" />
      
      {/* Optional: Vignette/Darken edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl">
        
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center font-extrabold text-white text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.1] tracking-tight w-full"
        >
          <span>HRMS. Payroll. HR Services.</span>
          
          <div className="relative mt-2 md:mt-4 flex items-center justify-center">
            {/* The white pill */}
            <motion.div 
              initial={{ rotate: 0, scale: 0.9 }}
              animate={{ rotate: -2, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 200 }}
              className="bg-white text-black px-6 md:px-10 py-1 md:py-2 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-10 whitespace-nowrap"
            >
              All Under One Roof.
            </motion.div>

            {/* Floating Glass Chart Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20, rotate: 0 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[20%] md:translate-x-[40%] z-0"
            >
              <div className="bg-[#13301c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3 md:p-4 flex items-center gap-3 shadow-2xl w-[120px] md:w-[160px]">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#0a1a0f] rounded-lg flex items-center justify-center border border-white/5">
                  <LineChart className="text-[#a3e635] w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <div className="w-full h-1.5 md:h-2 bg-white/30 rounded-full" />
                  <div className="w-3/4 h-1.5 md:h-2 bg-white/15 rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-xl text-white/90 max-w-3xl mt-12 mb-10 leading-relaxed font-medium"
        >
          Manage your people with smart HRMS technology, simplify payroll, and get expert HR services for all your HR needs.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="bg-white text-black font-bold text-base md:text-lg px-8 py-3.5 md:py-4 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Book a demo
          </button>
          <button className="bg-[#0b2212] border border-[#1a4223] text-white font-bold text-base md:text-lg px-8 py-3.5 md:py-4 rounded-xl hover:bg-[#11311b] hover:scale-105 active:scale-95 transition-all shadow-xl">
            Talk to Expert
          </button>
        </motion.div>
      </div>
    </section>
  );
}
