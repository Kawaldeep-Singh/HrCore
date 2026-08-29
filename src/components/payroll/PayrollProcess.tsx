"use client";

import { motion } from "framer-motion";
import { Users, Calculator, Search, ShieldAlert, CreditCard, BarChart4 } from "lucide-react";

export function PayrollProcess() {
  const steps = [
    { title: "Collect", description: "Bring together attendance, leave and payroll inputs.", icon: Users },
    { title: "Process", description: "Calculate salaries, deductions and adjustments.", icon: Calculator },
    { title: "Review", description: "Check payroll details before processing.", icon: Search },
    { title: "Comply", description: "Handle applicable statutory requirements.", icon: ShieldAlert },
    { title: "Pay", description: "Process salaries and generate payslips.", icon: CreditCard },
    { title: "Report", description: "Get payroll reports and records when you need them.", icon: BarChart4 }
  ];

  return (
    <section className="py-24 bg-[#0a1a0f] relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/40 rounded-full blur-[120px] pointer-events-none -translate-x-1/4 translate-y-1/4" />

      <div className="w-[82%] mx-auto relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#4cd964] font-bold text-sm tracking-widest uppercase mb-4"
          >
            The Payroll Process
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            From Attendance to Payslip, Seamlessly Connected.
          </motion.h2>
        </div>

        <div className="relative">
          {/* Main Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-1 bg-white/10 rounded-full z-0" />
          
          {/* Animated Green Line */}
          <motion.div 
            className="hidden lg:block absolute top-[52px] left-[5%] h-1 bg-gradient-to-r from-[#006e1c] to-[#4cd964] rounded-full z-0"
            initial={{ width: "0%" }}
            whileInView={{ width: "90%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Number Badge */}
                <div className="w-8 h-8 rounded-full bg-[#00280a] border-2 border-white/20 text-gray-400 font-bold text-sm flex items-center justify-center mb-4 group-hover:border-[#4cd964] group-hover:text-[#4cd964] transition-colors relative z-10">
                  0{index + 1}
                </div>
                
                {/* Icon Container */}
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 mb-6 group-hover:bg-[#006e1c] group-hover:text-white group-hover:scale-110 group-hover:border-[#4cd964]/50 group-hover:shadow-[0_10px_30px_rgba(76,217,100,0.3)] transition-all duration-300 relative backdrop-blur-sm">
                  <step.icon size={32} />
                  
                  {/* Pulse Effect on hover */}
                  <div className="absolute inset-0 bg-[#006e1c] rounded-2xl opacity-0 group-hover:animate-ping -z-10" />
                </div>
                
                {/* Text Content */}
                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">
                  {step.description}
                </p>

                {/* Mobile/Tablet Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-1 h-12 bg-gradient-to-b from-white/20 to-transparent mt-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
