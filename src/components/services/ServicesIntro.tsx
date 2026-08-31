"use client";

import { motion } from "framer-motion";

export function ServicesIntro() {
  return (
    <section className="py-24 bg-[#0a0f12] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-[#16a34a] opacity-[0.03] blur-[100px] pointer-events-none" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="w-[82%] max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="text-[#16a34a] font-bold tracking-widest uppercase text-sm">
            Your HR, Our Expertise
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-10 leading-tight"
        >
          HR Support That Works <br className="hidden md:block" />
          <span className="text-gray-400">Around Your Business.</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 text-left md:text-center max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-gray-400 text-lg md:text-xl leading-relaxed"
          >
            Every business has different people needs. Whether you need help with recruitment, day-to-day HR operations, compliance, or employee management, our HR experts provide practical support designed around the way your business works.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 text-gray-300 text-lg md:text-xl leading-relaxed border-l-2 border-[#16a34a]/30 pl-6 md:border-l-0 md:pl-0 md:border-t-2 md:pt-6 md:mt-0"
          >
            <span className="font-semibold text-white">Use the support you need, when you need it</span> — or let us take care of your HR operations end to end.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
