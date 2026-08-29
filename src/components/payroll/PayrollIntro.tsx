"use client";

import { motion } from "framer-motion";
import { Clock, Calculator, ShieldCheck, FileText, ArrowRight } from "lucide-react";

export function PayrollIntro() {
  const flowSteps = [
    { icon: Clock, label: "Attendance", color: "bg-blue-500/20 text-blue-400", borderColor: "border-blue-500/30" },
    { icon: Calculator, label: "Payroll", color: "bg-purple-500/20 text-purple-400", borderColor: "border-purple-500/30" },
    { icon: ShieldCheck, label: "Compliance", color: "bg-orange-500/20 text-orange-400", borderColor: "border-orange-500/30" },
    { icon: FileText, label: "Payslip", color: "bg-[#006e1c]/30 text-[#4cd964]", borderColor: "border-[#006e1c]/50" },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0a1a0f] relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#006e1c]/10 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      
      <div className="w-[82%] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-[#4cd964] font-bold text-sm tracking-widest uppercase mb-4">
              Your Payroll, Our Expertise
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Payroll That Works <br className="hidden md:block" /> for You.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Managing payroll is more than calculating salaries. It requires accuracy, timely processing, compliance, and attention to every detail.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our payroll experts handle the process with the right technology and expertise, helping you keep payroll smooth and stress-free.
            </p>
          </motion.div>

          {/* Flow Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 relative shadow-inner backdrop-blur-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            <h4 className="text-center text-gray-400 font-semibold mb-10 text-sm tracking-wide">
              THE MODERN PAYROLL CONNECTION
            </h4>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-white/10 -translate-y-1/2 z-0" />
              
              {/* Animated Glowing Line */}
              <motion.div 
                className="hidden md:block absolute top-1/2 left-[10%] h-0.5 bg-[#4cd964] -translate-y-1/2 z-0 shadow-[0_0_10px_rgba(76,217,100,0.5)]"
                initial={{ width: "0%" }}
                whileInView={{ width: "80%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              />

              {flowSteps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto relative z-10">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.2) }}
                    className="flex flex-col items-center gap-3 bg-[#00280a] p-4 rounded-2xl shadow-sm border border-[#006e1c]/40 w-full md:w-auto min-w-[120px] hover:-translate-y-2 hover:bg-[#003b0f] hover:border-[#4cd964]/50 hover:shadow-[0_10px_30px_rgba(76,217,100,0.2)] transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${step.color} ${step.borderColor} border group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon size={24} />
                    </div>
                    <span className="font-bold text-white text-sm group-hover:text-[#4cd964] transition-colors duration-300">{step.label}</span>
                  </motion.div>
                  
                  {/* Vertical Arrow for Mobile */}
                  {index < flowSteps.length - 1 && (
                    <div className="md:hidden text-gray-500 my-2">
                      <ArrowRight size={20} className="rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 bg-black/20 p-4 rounded-xl border border-white/5 text-sm text-gray-300 text-center leading-relaxed max-w-md mx-auto">
              Modern payroll products emphasize the connection between attendance, payroll calculations and statutory compliance rather than treating payroll as an isolated calculation.
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
