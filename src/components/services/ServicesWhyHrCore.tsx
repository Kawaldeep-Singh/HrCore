"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function ServicesWhyHrCore() {
  const reasons = [
    {
      title: "Practical Expertise",
      desc: "Real HR support for everyday business needs.",
    },
    {
      title: "Technology-Enabled",
      desc: "Better processes supported by HR technology.",
    },
    {
      title: "Compliance Focused",
      desc: "Stay prepared and reduce HR-related compliance risks.",
    },
    {
      title: "Flexible Support",
      desc: "Get support where you need it or outsource more.",
    },
    {
      title: "One HR Partner",
      desc: "HRMS, payroll, and HR expertise under one roof.",
    }
  ];

  return (
    <section className="py-24 bg-[#05160c] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="relative z-10 w-[82%] mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left: Heading & Intro */}
        <div className="w-full md:w-5/12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#16a34a] font-bold tracking-widest uppercase text-sm mb-4 block">
              Why HR Core
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              A Better Way to <br/>
              <span className="text-gray-400">Manage HR.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We go beyond standard HR services. By combining deep people expertise with modern technology, we deliver an HR experience that truly moves your business forward.
            </p>
          </motion.div>
        </div>

        {/* Right: List of Reasons */}
        <div className="w-full md:w-7/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-[#082212] p-6 rounded-2xl border border-[#16a34a]/20 hover:border-[#16a34a]/40 hover:-translate-y-1 hover:bg-[#0a2b16] hover:shadow-[0_8px_30px_rgba(22,163,74,0.06)] transition-all duration-300 group ${
                  index === reasons.length - 1 ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle className="w-6 h-6 text-[#16a34a] group-hover:scale-110 group-hover:text-[#22c55e] transition-all duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-50 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
