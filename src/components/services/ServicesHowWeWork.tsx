"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Workflow, Clock, Building } from "lucide-react";

export function ServicesHowWeWork() {
  const options = [
    {
      title: "HR Support",
      desc: "Get expert help for specific HR requirements whenever you need it.",
      icon: <Clock className="w-8 h-8 text-[#16a34a]" />,
      features: ["On-demand assistance", "Specific project help", "Expert guidance"],
    },
    {
      title: "HR Operations Support",
      desc: "Let our team manage selected day-to-day HR processes for you.",
      icon: <Workflow className="w-8 h-8 text-[#16a34a]" />,
      features: ["Process management", "Daily HR tasks", "Partial outsourcing"],
      highlight: true
    },
    {
      title: "End-to-End HR Support",
      desc: "Outsource your HR operations and let our experts manage the complete employee journey.",
      icon: <Building className="w-8 h-8 text-[#16a34a]" />,
      features: ["Full HR outsourcing", "Complete lifecycle management", "Strategic partnership"],
    }
  ];

  return (
    <section className="py-24 bg-[#0a0f12] text-white">
      <div className="w-[82%] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#16a34a] font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            How We Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            HR Support That Fits <br/> The Way You Work.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Choose the level of support that matches your business needs. From on-demand help to complete outsourcing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {options.map((opt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative group p-8 rounded-3xl flex flex-col h-full border ${
                opt.highlight 
                  ? 'bg-gradient-to-b from-[#16a34a]/10 to-transparent border-[#16a34a]/30 scale-100 md:scale-105 z-10 shadow-[0_0_40px_rgba(22,163,74,0.1)] hover:shadow-[0_0_50px_rgba(22,163,74,0.2)] hover:-translate-y-2' 
                  : 'bg-[#11181c] border-gray-800 hover:border-[#16a34a]/30 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(22,163,74,0.05)]'
              } transition-all duration-500`}
            >
              {opt.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#16a34a] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                opt.highlight ? 'bg-[#16a34a]/20' : 'bg-gray-800 group-hover:bg-[#16a34a]/10'
              }`}>
                {opt.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{opt.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow">{opt.desc}</p>
              
              <ul className="space-y-4">
                {opt.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#16a34a]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
