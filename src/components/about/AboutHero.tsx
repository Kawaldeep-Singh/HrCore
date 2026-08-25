"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden flex items-center min-h-[55vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/indian_about_hero_bg.jpg"
          alt="HR Core Team Support"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        {/* Dark Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040d08] via-[#040d08]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040d08] via-transparent to-transparent" />
      </div>
      
      {/* Animated Subtle Glows */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#006e1c]/10 rounded-full blur-[120px] pointer-events-none z-0" 
      />
      
      <div className="w-[82%] mx-auto relative z-10">
        <div className="max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#94f990] font-bold tracking-widest uppercase mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-[2px] bg-[#94f990]" />
            About Us
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight text-white"
          >
            Technology. Expertise. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#94f990] to-[#94f990]/70">Better HR.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#c8c6c5] leading-relaxed"
          >
            We combine smart HR technology with HR and payroll expertise to help businesses simplify their people processes and build better workplaces.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
