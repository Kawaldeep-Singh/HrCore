"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Briefcase, FileCheck, PhoneCall } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#f8fcf9]">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#16a34a]/10 to-transparent blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#16a34a]/5 to-transparent blur-3xl"
        />
      </div>

      <div className="relative z-10 w-[82%] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16a34a]/10 border border-[#16a34a]/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
            <span className="text-sm font-semibold tracking-wide text-[#16a34a] uppercase">HR Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f172a] leading-[1.1] mb-6"
          >
            Expert HR Support, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] to-[#22c55e]">
              When You Need It.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed"
          >
            From hiring and onboarding to HR operations, compliance, and employee support, HR Core helps you manage the people side of your business with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#16a34a] hover:bg-[#15803d] text-white rounded-full font-medium transition-all duration-300 shadow-[0_4px_14px_0_rgba(22,163,74,0.39)] hover:shadow-[0_6px_20px_rgba(22,163,74,0.23)] hover:-translate-y-1"
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-200 hover:border-[#16a34a]/30 hover:bg-[#f8fcf9] text-[#0f172a] rounded-full font-medium transition-all duration-300"
            >
              <PhoneCall className="mr-2 w-5 h-5 text-[#16a34a]" /> Talk to an Expert
            </Link>
          </motion.div>
        </div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 relative"
        >
          {/* Abstract HR Professional Visual */}
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            {/* Base shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#16a34a]/20 to-[#22c55e]/5 rounded-3xl rotate-6 scale-105 transition-transform duration-700 hover:rotate-12" />
            <div className="absolute inset-0 bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col justify-between p-8 relative z-10 hover:shadow-2xl transition-shadow duration-500">

              <div className="flex justify-between items-start w-full">
                <div className="w-16 h-16 rounded-2xl bg-[#f0fdf4] flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#16a34a]" />
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
              </div>

              <div className="space-y-4 my-8">
                <div className="h-4 w-3/4 bg-gray-100 rounded-full" />
                <div className="h-4 w-1/2 bg-gray-100 rounded-full" />
                <div className="h-4 w-5/6 bg-gray-100 rounded-full" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f8fcf9] p-4 rounded-xl border border-[#16a34a]/10 flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-[#16a34a]" />
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Hiring</div>
                    <div className="font-bold text-[#0f172a]">Active</div>
                  </div>
                </div>
                <div className="bg-[#f8fcf9] p-4 rounded-xl border border-[#16a34a]/10 flex items-center gap-3">
                  <FileCheck className="w-6 h-6 text-[#16a34a]" />
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Compliance</div>
                    <div className="font-bold text-[#0f172a]">100%</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 z-20 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#16a34a]/10 flex items-center justify-center">
                <span className="text-[#16a34a] font-bold">✓</span>
              </div>
              <div>
                <div className="text-sm font-bold text-[#0f172a]">Expert Team</div>
                <div className="text-xs text-gray-500">Dedicated Support</div>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
