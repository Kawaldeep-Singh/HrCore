"use client";

import { motion } from "framer-motion";
import { Users, Laptop, FileDigit, ArrowDown, Sparkles } from "lucide-react";

export function ServicesTechnology() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="w-[82%] mx-auto relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-6"
          >
            People Expertise. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] to-[#22c55e]">
              Powered by Technology.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            HR doesn't have to choose between people and technology. <br className="hidden md:block" />
            With HR Core, your HR services are supported by modern HR technology, helping teams keep employee information, processes, communication, and HR operations more connected.
          </motion.p>
        </div>

        {/* Visual Diagram */}
        <div className="relative mt-20 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            
            {/* Box 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group w-full md:w-1/3 bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center relative z-10 hover:-translate-y-2 hover:border-[#16a34a]/30 hover:shadow-[0_15px_40px_rgba(22,163,74,0.12)] transition-all duration-500"
            >
              <div className="w-14 h-14 mx-auto bg-[#f0fdf4] rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                <Users className="w-7 h-7 text-[#16a34a]" />
              </div>
              <h3 className="font-bold text-[#0f172a] text-lg">HR Expertise</h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-[#16a34a] font-bold text-2xl hidden md:block"
            >
              +
            </motion.div>

            {/* Box 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group w-full md:w-1/3 bg-[#f8fcf9] p-6 rounded-2xl border border-[#16a34a]/20 shadow-lg text-center relative z-20 scale-105 hover:scale-110 hover:shadow-[0_20px_50px_rgba(22,163,74,0.15)] transition-all duration-500"
            >
              <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                <Sparkles className="w-3 h-3" /> Core
              </div>
              <div className="w-16 h-16 mx-auto bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm transition-transform duration-500 group-hover:scale-110">
                <Laptop className="w-8 h-8 text-[#16a34a]" />
              </div>
              <h3 className="font-bold text-[#0f172a] text-lg">HRMS Platform</h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-[#16a34a] font-bold text-2xl hidden md:block"
            >
              +
            </motion.div>

            {/* Box 3 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group w-full md:w-1/3 bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center relative z-10 hover:-translate-y-2 hover:border-[#16a34a]/30 hover:shadow-[0_15px_40px_rgba(22,163,74,0.12)] transition-all duration-500"
            >
              <div className="w-14 h-14 mx-auto bg-[#f0fdf4] rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <FileDigit className="w-7 h-7 text-[#16a34a]" />
              </div>
              <h3 className="font-bold text-[#0f172a] text-lg">Payroll Expertise</h3>
            </motion.div>
          </div>

          {/* Connection lines for mobile */}
          <div className="flex flex-col items-center gap-2 md:hidden my-4">
             <div className="w-1 h-8 bg-gradient-to-b from-gray-200 to-[#16a34a]" />
          </div>

          <div className="mt-8 md:mt-12 flex flex-col items-center">
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: 40, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="w-[2px] bg-gradient-to-b from-[#16a34a]/30 to-[#16a34a] hidden md:block mb-2"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="text-[#16a34a] mb-4 hidden md:block"
            >
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="bg-[#16a34a] text-white px-8 py-5 rounded-2xl shadow-xl shadow-[#16a34a]/20 w-full md:w-auto text-center"
            >
              <h3 className="text-xl md:text-2xl font-bold">Better HR Operations</h3>
              <p className="text-green-100 text-sm mt-1">Seamless, Efficient & Connected</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
