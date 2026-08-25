"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Rocket } from "lucide-react";

export function AboutVisionMission() {
  return (
    <section className="py-32 relative bg-[#f8fafc] border-t border-gray-100 overflow-hidden">
      {/* Abstract Backgrounds & Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#16a34a]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-[82%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
        
        {/* Vision */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-100 p-10 lg:p-14 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-start shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group md:mt-16"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#16a34a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex flex-col gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 shrink-0 bg-gradient-to-br from-[#16a34a]/20 to-transparent border border-[#16a34a]/20 text-[#16a34a] rounded-xl flex items-center justify-center shadow-md shadow-[#16a34a]/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                   <Eye size={28} strokeWidth={2.5} />
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] to-[#22c55e] uppercase tracking-wider">
                  Our Vision
                </h2>
              </div>
            </div>

            <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-5 leading-tight group-hover:text-[#16a34a] transition-colors duration-300">
              Making HR Better for Every Business.
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              We envision a future where managing HR is simple, connected, and accessible — giving businesses the technology and expertise they need to build better workplaces and help their people grow.
            </p>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-gray-100 p-10 lg:p-14 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-start shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group md:mb-16"
        >
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
           
           <div className="relative z-10">
            <div className="flex flex-col gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 shrink-0 bg-gradient-to-br from-blue-600/20 to-transparent border border-blue-600/20 text-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-600/10 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                   <Rocket size={28} strokeWidth={2.5} />
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 uppercase tracking-wider">
                  Our Mission
                </h2>
              </div>
            </div>

            <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-5 leading-tight group-hover:text-blue-600 transition-colors duration-300">
              Simplify HR. Empower People. Drive Growth.
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to combine smart technology with real HR expertise to reduce complexity, improve everyday HR operations, and help businesses focus on what matters most — their people.
            </p>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
