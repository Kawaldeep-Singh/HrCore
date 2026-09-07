"use client";

import { motion } from "framer-motion";
import { Database, Clock, CalendarRange, Calculator, FileText, Code2 } from "lucide-react";

export function PayrollConnection() {
  const inputs = [
    { icon: Database, label: "HRMS Data" },
    { icon: Clock, label: "Attendance" },
    { icon: CalendarRange, label: "Leave Records" }
  ];

  return (
    <section className="py-24 bg-[#0a1a0f] relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#006e1c]/20 rounded-full blur-[150px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/60 rounded-full blur-[120px] pointer-events-none -translate-x-1/4 translate-y-1/4" />

      <div className="w-[82%] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side: The Data Core Pipeline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative w-full min-h-[400px] md:h-[450px] bg-[#001505] rounded-[2.5rem] border border-white/10 p-4 md:p-6 flex items-center justify-center overflow-hidden shadow-2xl"
          >
            {/* Tech Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,110,28,0.2)_0%,transparent_70%)]" />
            
            {/* Radar / Rotation effect */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[800px] h-[800px] bg-gradient-to-tr from-[#006e1c]/10 via-transparent to-transparent rounded-full pointer-events-none"
            />

            <div className="relative z-10 w-full h-full flex flex-col md:flex-row justify-between items-center py-4 md:py-0 gap-6 md:gap-0">
              
              {/* Inputs */}
              <div className="flex flex-row md:flex-col gap-2 md:gap-6 w-full md:w-[35%] relative justify-center z-20">
                {inputs.map((input, i) => (
                  <div key={i} className="relative flex-1 md:flex-none">
                    {/* Connecting line to center */}
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-[1px] bg-white/10 -z-10" />
                    {/* Mobile connecting line */}
                    <div className="md:hidden absolute top-full left-1/2 w-[1px] h-12 bg-white/10 -z-10" />
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.2 }}
                      className="bg-black/60 border border-white/10 p-2 md:p-3 rounded-xl flex flex-col md:flex-row items-center gap-1 md:gap-3 relative z-10 backdrop-blur-md h-full justify-center"
                    >
                      <input.icon size={16} className="text-[#4cd964] shrink-0" />
                      <span className="text-[9px] sm:text-xs font-bold text-gray-300 text-center md:text-left leading-tight">{input.label}</span>
                    </motion.div>

                    {/* Animated Data Particle */}
                    <motion.div 
                      animate={{ x: [0, 50], opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                      className="hidden md:block absolute top-1/2 left-[80%] w-1.5 h-1.5 bg-[#4cd964] rounded-full shadow-[0_0_8px_#4cd964] -translate-y-1/2 z-0"
                    />
                  </div>
                ))}
              </div>

              {/* Center Core: Payroll Engine */}
              <div className="relative w-full md:w-[30%] flex justify-center z-20 py-4 md:py-0">
                <div className="w-16 h-16 sm:w-28 sm:h-28 bg-[#003b0f] border-2 border-[#4cd964]/50 rounded-2xl flex flex-col items-center justify-center relative shadow-[0_0_40px_rgba(76,217,100,0.3)] backdrop-blur-xl z-10">
                  <Calculator size={24} className="text-[#4cd964] mb-1 sm:w-8 sm:h-8" />
                  <span className="text-[8px] sm:text-[10px] font-black tracking-widest text-white">CORE</span>
                  
                  {/* Pulsing rings */}
                  <motion.div 
                    animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-2xl border border-[#4cd964]"
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.2], opacity: [0.8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="absolute inset-0 rounded-2xl border border-[#4cd964]"
                  />
                </div>
              </div>

              {/* Output Node */}
              <div className="w-full md:w-[35%] flex justify-center md:justify-end relative z-20">
                {/* Connecting line from center */}
                <div className="hidden md:block absolute top-1/2 right-full w-full h-[1px] bg-white/10 -z-10" />
                {/* Mobile connecting line */}
                <div className="md:hidden absolute bottom-full left-1/2 w-[1px] h-12 bg-white/10 -z-10" />
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="bg-[#006e1c]/20 border border-[#4cd964]/40 p-3 md:p-4 rounded-xl flex md:flex-col items-center gap-2 relative z-10 backdrop-blur-md shadow-[0_0_20px_rgba(0,110,28,0.2)]"
                >
                  <FileText size={20} className="text-[#4cd964] sm:w-6 sm:h-6" />
                  <span className="text-xs sm:text-sm font-bold text-white">Payslip Generated</span>
                </motion.div>

                {/* Animated Data Particle to Output */}
                <motion.div 
                  animate={{ x: [-50, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="hidden md:block absolute top-1/2 right-[80%] w-2 h-2 bg-[#4cd964] rounded-full shadow-[0_0_10px_#4cd964] -translate-y-1/2 z-0"
                />
              </div>

            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/40 border border-white/10 rounded-full text-[#4cd964] text-xs font-mono font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4cd964] animate-pulse" />
              INTEGRATED_SYNC
            </div>
            
            <h3 className="text-[#4cd964] font-bold text-sm tracking-widest uppercase mb-4">
              HR CORE PAYROLL + HRMS
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Payroll That Connects With HR.
            </h2>
            <p className="text-xl font-medium text-gray-300 mb-6 font-mono">
              {"// Because payroll doesn't work alone."}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Employee information, attendance, leave, and payroll work together seamlessly. This unified flow drastically reduces duplicate data entry, ensuring zero errors and saving countless hours.
            </p>

            <div className="bg-white/5 border border-[#4cd964]/20 p-6 rounded-2xl flex gap-4 items-start backdrop-blur-sm shadow-xl hover:bg-white/10 hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#006e1c]/30 border border-[#006e1c] text-[#4cd964] flex items-center justify-center shrink-0">
                <Code2 size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1 tracking-wide">A Single Source of Truth</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Unlike standalone payroll outsourcing companies, HR Core&apos;s architecture creates a connected experience that eliminates manual data transfers and ensures perfect accuracy.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
