"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, IndianRupee, Headset } from "lucide-react";

export function AboutTechnologyExpertise() {
  const cards = [
    {
      title: "HRMS",
      desc: "Smart HR technology to simplify and automate everyday HR processes.",
      icon: Database,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      delay: 0.1
    },
    {
      title: "Payroll",
      desc: "Reliable payroll support with accuracy, compliance, and expertise.",
      icon: IndianRupee,
      color: "text-green-400",
      bg: "bg-green-400/10",
      delay: 0.2
    },
    {
      title: "HR Services",
      desc: "Professional HR support for recruitment, operations, compliance, and more.",
      icon: Headset,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      delay: 0.3
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0a1612] to-[#060d10] border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-[82%] mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6 pb-2"
          >
            Technology & Expertise, Working Together.
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#c8c6c5] max-w-3xl mx-auto text-xl leading-relaxed"
          >
            HR is more than software. It needs the right technology, the right processes, and the right expertise. HR Core brings these together to give businesses a complete approach.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: card.delay }}
              className="group relative bg-[#060d10]/60 border border-white/10 p-10 rounded-3xl hover:bg-[#0a1612]/80 transition-all duration-500 overflow-hidden flex flex-col backdrop-blur-md hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Premium Hover Glows */}
              <div className={`absolute -right-10 -top-10 w-40 h-40 ${card.bg} rounded-full blur-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-${card.color.split('-')[1]}-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-16 h-16 ${card.bg} ${card.color} border border-white/5 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <card.icon size={32} />
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {card.title}
                </h4>
                
                <p className="text-[#c8c6c5] leading-relaxed text-lg group-hover:text-white/90 transition-colors duration-300">
                  {card.desc}
                </p>
              </div>

              {/* Animated Bottom Line */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-${card.color.split('-')[1]}-500 to-transparent group-hover:w-full transition-all duration-700 ease-out`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
