"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function EmployeeApp() {
  const leftFeatures = [
    "Check In to Check Out",
    "Apply for Leave",
    "Track Your Attendance",
    "Regularize Attendance",
    "View Payslips",
  ];

  const rightFeatures = [
    "Check Holiday Calendar",
    "View Your Team",
    "Manage Your Tasks",
    "Get HR Support",
    "Stay Updated with Notifications",
  ];

  return (
    <section className="py-24 bg-[#0f2e17] overflow-hidden text-white border-t border-white/5 relative">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#a3e635]/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="w-[82%] mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Meet Our Employee HR App
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            <strong className="text-white">Everything HR, Just a Tap Away.</strong> Give employees easy access to attendance, leave, payslips, requests, and other essential HR services - anytime, anywhere.
          </p>
        </motion.div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Features */}
          <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8 order-2 lg:order-1 text-center lg:text-right items-center lg:items-end">
            {leftFeatures.map((title, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center justify-end gap-4 group bg-white/5 lg:bg-transparent px-6 py-4 lg:p-0 rounded-2xl lg:rounded-none w-full max-w-md lg:max-w-none hover:bg-white/10 lg:hover:bg-transparent transition-colors"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[#a3e635] transition-colors">{title}</h3>
                <div className="w-8 h-8 rounded-full bg-[#11301c] flex items-center justify-center shrink-0 group-hover:bg-[#a3e635] group-hover:text-[#041208] transition-all duration-300">
                  <CheckCircle2 size={16} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center CSS Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 order-1 lg:order-2 w-full flex justify-center relative group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#a3e635]/20 blur-[100px] rounded-full transform scale-75 group-hover:bg-[#a3e635]/40 transition-all duration-700 pointer-events-none" />
            
            {/* Phone Frame */}
            <div className="relative z-10 w-[280px] md:w-[320px] h-[580px] md:h-[650px] rounded-[3rem] border-[8px] border-[#222] bg-[#111] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-20">
                <div className="w-32 h-6 bg-[#222] rounded-b-3xl"></div>
              </div>
              
              {/* Screen Content Placeholder (Can be replaced with an img later) */}
              <div className="flex-1 bg-gradient-to-b from-[#1a4a25] to-[#041208] flex flex-col p-6 pt-12 relative overflow-hidden">
                <div className="w-full flex items-center justify-between mb-8">
                  <div className="flex flex-col text-left">
                    <span className="text-sm text-gray-300">Good Morning,</span>
                    <span className="text-xl font-bold text-white">Employee</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20"></div>
                </div>

                <div className="w-full h-32 bg-white/10 rounded-2xl mb-4 backdrop-blur-sm border border-white/5 flex flex-col justify-center items-center">
                  <span className="text-4xl font-bold text-[#a3e635]">09:00</span>
                  <span className="text-sm text-gray-300">AM</span>
                  <div className="mt-3 px-6 py-1.5 bg-[#a3e635] text-[#041208] font-bold rounded-full text-sm">Check In</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-24 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/10"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Features */}
          <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8 order-3 text-center lg:text-left items-center lg:items-start">
            {rightFeatures.map((title, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center justify-start gap-4 group bg-white/5 lg:bg-transparent px-6 py-4 lg:p-0 rounded-2xl lg:rounded-none w-full max-w-md lg:max-w-none hover:bg-white/10 lg:hover:bg-transparent transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#11301c] flex items-center justify-center shrink-0 group-hover:bg-[#a3e635] group-hover:text-[#041208] transition-all duration-300">
                  <CheckCircle2 size={16} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[#a3e635] transition-colors">{title}</h3>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
