"use client";

import { motion } from "framer-motion";
import { Laptop, IndianRupee, BriefcaseBusiness } from "lucide-react";

export function WhatWeOffer() {
  const offerings = [
    {
      num: "01",
      title: "HRMS",
      desc: "Smart technology App to manage your complete employee lifecycle.",
      icon: <Laptop className="w-8 h-8 text-[#a3e635]" />,
    },
    {
      num: "02",
      title: "Payroll",
      desc: "Reliable payroll processing and compliance support.",
      icon: <IndianRupee className="w-8 h-8 text-[#a3e635]" />,
    },
    {
      num: "03",
      title: "HR Services",
      desc: "Expert support for recruitment, HR operations, compliance and more.",
      icon: <BriefcaseBusiness className="w-8 h-8 text-[#a3e635]" />,
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:w-1/3 flex flex-col gap-6 sticky top-32"
        >
          <span className="text-[#a3e635] font-semibold tracking-wider uppercase text-sm">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Your Complete <br />
            HR Partner
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mt-2">
            From HR technology and payroll to expert HR services, we bring everything you need to manage your people and HR operations under one roof.
          </p>
        </motion.div>

        {/* Right Side Cards */}
        <div className="md:w-2/3 flex flex-col gap-8 w-full">
          {offerings.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group bg-[#111111] hover:bg-[#1a1a1a] border border-white/5 hover:border-white/10 p-8 md:p-12 rounded-3xl transition-all duration-300 shadow-xl relative overflow-hidden"
            >
              {/* Subtle gradient effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col md:flex-row gap-8 md:items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500 font-bold text-xl md:text-2xl">{item.num} —</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#a3e635] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
