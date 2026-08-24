"use client";

import { motion } from "framer-motion";
import { Laptop, IndianRupee, BriefcaseBusiness } from "lucide-react";

export function WhatWeOffer() {
  const offerings = [
    {
      num: "01",
      title: "HRMS",
      desc: "Smart technology App to manage your complete employee lifecycle.",
      icon: <Laptop className="w-6 h-6 text-[#16a34a]" />,
    },
    {
      num: "02",
      title: "Payroll",
      desc: "Reliable payroll processing and compliance support.",
      icon: <IndianRupee className="w-6 h-6 text-[#16a34a]" />,
    },
    {
      num: "03",
      title: "HR Services",
      desc: "Expert support for recruitment, HR operations, compliance and more.",
      icon: <BriefcaseBusiness className="w-6 h-6 text-[#16a34a]" />,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#f7f9f8] text-[#1a1a1a]">
      <div className="w-[82%] mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:w-1/3 flex flex-col gap-6 sticky top-32"
        >
          <span className="text-[#16a34a] font-semibold tracking-wider uppercase text-sm">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#0f172a]">
            Your Complete <br />
            HR Partner
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed mt-2">
            From HR technology and payroll to expert HR services, we bring everything you need to manage your people and HR operations under one roof.
          </p>
        </motion.div>

        {/* Right Side Cards */}
        <div className="md:w-2/3 flex flex-col gap-4 w-full">
          {offerings.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group bg-white hover:bg-[#f0fdf4] border border-gray-200 hover:border-[#16a34a]/20 p-6 md:p-8 rounded-2xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(22,163,74,0.08)] relative overflow-hidden"
            >
              {/* Subtle gradient effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#16a34a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] border border-[#16a34a]/10 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-300 font-bold text-lg md:text-xl">{item.num} —</span>
                    <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] group-hover:text-[#16a34a] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-base leading-relaxed">
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

