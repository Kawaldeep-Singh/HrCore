"use client";

import { motion } from "framer-motion";
import { UserPlus, Briefcase, UserCheck, Users, TrendingUp, DollarSign, Award } from "lucide-react";

export function EmployeeJourney() {
  const steps = [
    { icon: UserPlus, label: "Recruit" },
    { icon: Briefcase, label: "Hire" },
    { icon: UserCheck, label: "Onboard" },
    { icon: Users, label: "Manage" },
    { icon: TrendingUp, label: "Grow" },
    { icon: DollarSign, label: "Pay" },
    { icon: Award, label: "Retire" },
  ];

  return (
    <section className="py-24 bg-[#0a1a0f] border-t border-white/5">
      <div className="w-[82%] mx-auto">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Employee Journey
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block px-6 py-2 rounded-full bg-[#11301c] border border-[#a3e635]/20 text-[#a3e635] text-lg font-medium mb-4"
          >
            From Hire to Retire
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            One connected HRMS for every stage of the employee journey.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-[5%] right-[5%] h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center group w-full md:w-auto"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#020904] border border-white/10 flex items-center justify-center mb-4 group-hover:border-[#a3e635]/50 group-hover:bg-[#11301c] transition-all duration-300 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#a3e635]/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <step.icon className="text-white group-hover:text-[#a3e635] relative z-10 transition-colors duration-300" size={28} />
                </div>
                <span className="text-white font-semibold text-lg tracking-wide group-hover:text-[#a3e635] transition-colors duration-300">
                  {step.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
