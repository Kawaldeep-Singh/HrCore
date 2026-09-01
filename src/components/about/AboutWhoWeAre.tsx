"use client";

import React from "react";
import { motion } from "framer-motion";

export function AboutWhoWeAre() {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Background Decor & Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#16a34a]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-[82%] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f0fdf4] border border-[#16a34a]/20 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
              <span className="text-[#16a34a] font-bold tracking-widest text-xs">WHO WE ARE</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 leading-[1.2]">
              More Than Just <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] to-[#22c55e]">HR Technology.</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
              <p>
                HR Core is built to help businesses manage their people, processes, and everyday HR needs with greater simplicity and confidence. We bring together smart HR technology, payroll expertise, and professional HR services to provide practical solutions for modern workplaces.
              </p>
              
              <p>
                Our HRMS helps businesses manage the complete employee journey, while our payroll and HR services provide the expertise and support needed beyond technology. From managing employees and attendance to payroll, recruitment, compliance, and everyday HR operations, we help businesses reduce complexity and work more efficiently.
              </p>

              <p>
                With technology and human expertise working together, HR Core aims to make HR simpler, more connected, and more effective for businesses and their people.
              </p>
            </div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10" />
              <img 
                src="/indian_hr_team.jpg" 
                alt="Professional Indian HR team collaborating" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Image Decor */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-12 -left-12 w-64 h-64 rounded-3xl overflow-hidden border-8 border-white shadow-xl hidden md:block"
            >
              <img 
                src="/indian_professional.jpg" 
                alt="Indian professional in office" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Experience Badge */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.6, delay: 0.5 }}
              className="absolute top-12 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:flex items-center gap-4 border border-gray-100 z-20"
            >
              <div className="w-14 h-14 bg-[#16a34a]/10 text-[#16a34a] rounded-full flex items-center justify-center font-bold text-2xl">
                5+
              </div>
              <div>
                <p className="text-gray-900 font-bold text-lg leading-tight">Years of</p>
                <p className="text-gray-500 text-sm">Excellence</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
