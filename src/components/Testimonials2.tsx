"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Testimonials2() {
  const reasons = [
    {
      title: "Comprehensive Solutions",
      description: "Our HRMS software is an all-in-one platform that caters to every aspect of human resource management, from recruitment and onboarding to payroll and performance management.",
    },
    {
      title: "Tailored Services",
      description: "We understand that every business is unique, which is why we offer customized solutions to meet your specific needs.",
    },
    {
      title: "Advanced Technology",
      description: "Our HRMS software leverages the latest technology to provide a seamless and intuitive user experience, ensuring efficiency and accuracy.",
    },
    {
      title: "Expert Team",
      description: "With a team of seasoned HR and payroll professionals, we bring expertise and insights that help you navigate complex HR challenges.",
    },
    {
      title: "Cost-Effective",
      description: "Our services are designed to provide maximum value, helping you save time, reduce costs, and optimize resources.",
    },
    {
      title: "Compliance Assurance",
      description: "We stay updated with the latest regulations to ensure your HR and payroll processes are always compliant.",
    },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/10">
      {/* Background Overlay */}
      <div className="absolute inset-0 pointer-events-none" />

      {/* Abstract Orbs */}
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 mb-6 shadow-xl"
          >
             <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
             <span className="text-xs font-bold text-white uppercase tracking-wider">Why Us</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6 drop-shadow-lg"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 font-medium max-w-3xl mx-auto drop-shadow-md"
          >
            Partner with us to leverage specialized expertise without the need for in-house resources.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-2xl rounded-[2rem] p-8 shadow-2xl border border-white/20 flex flex-col justify-start hover:border-white/50 hover:bg-black/50 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-inner">
                   <CheckCircle2 className="text-white" size={24} strokeWidth={2.5} />
                </div>
                <h4 className="font-extrabold text-white text-2xl tracking-tight">{reason.title}</h4>
              </div>
              <p className="text-white/70 text-lg font-medium leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
