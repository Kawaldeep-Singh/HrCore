"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function WhyHRCore() {
  const benefits = [
    "Reduce manual HR work",
    "Automate repetitive processes",
    "Improve payroll accuracy",
    "Empower employees",
    "Strengthen compliance",
    "Get real-time HR insights",
    "Scale with your business",
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] text-white border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left: Text & List */}
        <div className="w-full md:w-1/2 flex flex-col relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Why HR Core HRMS?
            </h2>
            <p className="text-xl text-[#a3e635] font-medium">
              Benefits rather than just features:
            </p>
          </motion.div>

          <div className="flex flex-col gap-5">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-6 h-6 rounded-full bg-[#11301c] flex items-center justify-center shrink-0 group-hover:bg-[#a3e635] group-hover:text-[#041208] transition-colors">
                  <CheckCircle size={14} className="text-[#a3e635] group-hover:text-[#041208]" />
                </div>
                <span className="text-lg md:text-xl text-gray-300 group-hover:text-white transition-colors">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 relative flex items-center justify-center min-h-[400px]"
        >
          {/* Abstract glowing sphere */}
          <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-[#a3e635]/20 to-[#1a4a25]/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10 grid grid-cols-2 gap-6 w-full max-w-[400px]">
            {/* Stat Cards */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md transform translate-y-8">
              <div className="text-4xl font-bold text-[#a3e635] mb-2">99%</div>
              <div className="text-sm text-gray-400">Payroll Accuracy Improved</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
              <div className="text-4xl font-bold text-white mb-2">3x</div>
              <div className="text-sm text-gray-400">Faster Onboarding</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md transform translate-y-8">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-gray-400">Employee Self-Service</div>
            </div>
            <div className="bg-[#11301c]/80 border border-[#a3e635]/30 p-6 rounded-3xl backdrop-blur-md">
              <div className="text-4xl font-bold text-[#a3e635] mb-2">100%</div>
              <div className="text-sm text-white font-medium">Compliance</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
