"use client";

import { motion } from "framer-motion";
import { TimerReset, ShieldCheck, HeartHandshake, Zap, Target } from "lucide-react";

export function PayrollWhyOutsource() {
  const reasons = [
    { title: "Reduce Manual Work", description: "Spend less time preparing and checking payroll.", icon: TimerReset },
    { title: "Improve Accuracy", description: "Reduce calculation errors and payroll issues.", icon: Target },
    { title: "Stay Compliant", description: "Keep payroll processes aligned with applicable requirements.", icon: ShieldCheck },
    { title: "Save HR Time", description: "Let your HR team focus on people instead of repetitive payroll work.", icon: Zap },
    { title: "Protect Employee Trust", description: "Accurate and timely payroll creates confidence.", icon: HeartHandshake }
  ];

  return (
    <section className="py-24 bg-[#fbfdfa] relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#006e1c]/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="w-[82%] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#006e1c] font-bold text-sm tracking-widest uppercase mb-4"
            >
              Why Outsource Payroll?
            </motion.h3>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.1 }}
              className="text-4xl md:text-5xl md:leading-[1.1] font-bold text-[#041208] mb-6"
            >
              Why Let Payroll Take Up Your Time?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.2 }}
              className="text-gray-600 text-lg leading-relaxed mb-8"
            >
              You're offering Payroll Services, not just payroll software. By outsourcing to experts, you eliminate the stress of processing, compliance, and employee queries.
            </motion.p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white border border-gray-100 shadow-sm p-6 rounded-2xl hover:-translate-y-2 hover:bg-gray-50 hover:border-[#006e1c]/30 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center ${index === reasons.length - 1 ? 'sm:col-span-2 sm:w-1/2 sm:mx-auto' : ''}`}
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#e6f0e8] text-[#006e1c] flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <reason.icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{reason.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
