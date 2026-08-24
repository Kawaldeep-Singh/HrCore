"use client";

import { motion } from "framer-motion";
import { LineChart } from "lucide-react";

export function HeroSection2() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-[#0d2a14]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#508d29] via-[#1a4f27] to-[#0a1e10] pointer-events-none" />

      {/* Optional: Vignette/Darken edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

      {/* ═══ 10 Floating Feature Glass Cards (behind content) ═══ */}

      {/* 01 — Hire to Retire */}
      <motion.div initial={{ opacity: 0, y: 20, x: 20 }} animate={{ opacity: 1, y: 0, x: 0, rotate: -4 }} transition={{ delay: 0.9, duration: 0.8, type: "spring" }} className="absolute top-[12%] left-[7%] md:left-[9%] z-[5] hidden md:block">
        <div className="bg-[#13301c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2.5 md:p-3 flex items-center gap-2.5 shadow-2xl">
          <div className="w-8 h-8 bg-[#0a1a0f] rounded-lg flex items-center justify-center border border-white/5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a3e635]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" x2="19" y1="8" y2="14" /><line x1="22" x2="16" y1="11" y2="11" /></svg>
          </div>
          <span className="text-white/90 text-[11px] md:text-xs font-semibold whitespace-nowrap">Hire to Retire</span>
        </div>
      </motion.div>

      {/* 02 — Time to Leave */}
      <motion.div initial={{ opacity: 0, y: 20, x: -20 }} animate={{ opacity: 1, y: 0, x: 0, rotate: 5 }} transition={{ delay: 1.0, duration: 0.8, type: "spring" }} className="absolute top-[10%] right-[7%] md:right-[9%] z-[5] hidden md:block">
        <div className="bg-[#13301c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2.5 md:p-3 flex items-center gap-2.5 shadow-2xl">
          <div className="w-8 h-8 bg-[#0a1a0f] rounded-lg flex items-center justify-center border border-white/5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a3e635]"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
          </div>
          <span className="text-white/90 text-[11px] md:text-xs font-semibold whitespace-nowrap">Time & Leave</span>
        </div>
      </motion.div>

      {/* 03 — Recruit to Onboard */}
      <motion.div initial={{ opacity: 0, y: -20, x: 20 }} animate={{ opacity: 1, y: 0, x: 0, rotate: 3 }} transition={{ delay: 1.1, duration: 0.8, type: "spring" }} className="absolute bottom-[18%] left-[8%] md:left-[12%] z-[5] hidden md:block">
        <div className="bg-[#13301c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2.5 md:p-3 flex items-center gap-2.5 shadow-2xl">
          <div className="w-8 h-8 bg-[#0a1a0f] rounded-lg flex items-center justify-center border border-white/5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a3e635]"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
          </div>
          <span className="text-white/90 text-[11px] md:text-xs font-semibold whitespace-nowrap">Recruitment</span>
        </div>
      </motion.div>

      {/* 04 — Payroll */}
      <motion.div initial={{ opacity: 0, y: -20, x: -20 }} animate={{ opacity: 1, y: 0, x: 0, rotate: -5 }} transition={{ delay: 1.2, duration: 0.8, type: "spring" }} className="absolute bottom-[15%] right-[8%] md:right-[11%] z-[5] hidden md:block">
        <div className="bg-[#13301c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2.5 md:p-3 flex items-center gap-2.5 shadow-2xl">
          <div className="w-8 h-8 bg-[#0a1a0f] rounded-lg flex items-center justify-center border border-white/5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a3e635]"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
          </div>
          <span className="text-white/90 text-[11px] md:text-xs font-semibold whitespace-nowrap">Payroll</span>
        </div>
      </motion.div>

      {/* 05 — Learn & Grow */}
      <motion.div initial={{ opacity: 0, y: 15, x: 15 }} animate={{ opacity: 1, y: 0, x: 0, rotate: -7 }} transition={{ delay: 1.3, duration: 0.8, type: "spring" }} className="absolute top-[28%] left-[4%] md:left-[5%] z-[5] hidden lg:block">
        <div className="bg-[#13301c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2.5 md:p-3 flex items-center gap-2.5 shadow-2xl">
          <div className="w-8 h-8 bg-[#0a1a0f] rounded-lg flex items-center justify-center border border-white/5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a3e635]"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
          </div>
          <span className="text-white/90 text-[11px] md:text-xs font-semibold whitespace-nowrap">Training</span>
        </div>
      </motion.div>

      {/* 06 — Self-Service HR */}
      <motion.div initial={{ opacity: 0, y: 15, x: -15 }} animate={{ opacity: 1, y: 0, x: 0, rotate: 4 }} transition={{ delay: 1.4, duration: 0.8, type: "spring" }} className="absolute top-[26%] right-[4%] md:right-[6%] z-[5] hidden lg:block">
        <div className="bg-[#13301c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2.5 md:p-3 flex items-center gap-2.5 shadow-2xl">
          <div className="w-8 h-8 bg-[#0a1a0f] rounded-lg flex items-center justify-center border border-white/5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a3e635]"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
          </div>
          <span className="text-white/90 text-[11px] md:text-xs font-semibold whitespace-nowrap">Self-Service</span>
        </div>
      </motion.div>

      {/* 07 — Goals to Growth */}
      <motion.div initial={{ opacity: 0, y: -15, x: 15 }} animate={{ opacity: 1, y: 0, x: 0, rotate: 6 }} transition={{ delay: 1.5, duration: 0.8, type: "spring" }} className="absolute bottom-[32%] left-[5%] md:left-[7%] z-[5] hidden lg:block">
        <div className="bg-[#13301c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2.5 md:p-3 flex items-center gap-2.5 shadow-2xl">
          <div className="w-8 h-8 bg-[#0a1a0f] rounded-lg flex items-center justify-center border border-white/5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a3e635]"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
          </div>
          <span className="text-white/90 text-[11px] md:text-xs font-semibold whitespace-nowrap">Performance</span>
        </div>
      </motion.div>

      {/* 08 — Spend to Reimburse */}
      <motion.div initial={{ opacity: 0, y: -15, x: -15 }} animate={{ opacity: 1, y: 0, x: 0, rotate: -3 }} transition={{ delay: 1.6, duration: 0.8, type: "spring" }} className="absolute bottom-[30%] right-[5%] md:right-[8%] z-[5] hidden lg:block">
        <div className="bg-[#13301c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2.5 md:p-3 flex items-center gap-2.5 shadow-2xl">
          <div className="w-8 h-8 bg-[#0a1a0f] rounded-lg flex items-center justify-center border border-white/5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a3e635]"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 17.5v-11" /></svg>
          </div>
          <span className="text-white/90 text-[11px] md:text-xs font-semibold whitespace-nowrap">Expenses</span>
        </div>
      </motion.div>

      {/* 09 — Data to Decisions */}
      <motion.div initial={{ opacity: 0, y: 0, x: -20 }} animate={{ opacity: 1, y: 0, x: 0, rotate: -6 }} transition={{ delay: 1.7, duration: 0.8, type: "spring" }} className="absolute top-[45%] left-[3%] md:left-[5%] z-[5] hidden lg:block">
        <div className="bg-[#13301c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2.5 md:p-3 flex items-center gap-2.5 shadow-2xl">
          <div className="w-8 h-8 bg-[#0a1a0f] rounded-lg flex items-center justify-center border border-white/5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a3e635]">
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" />
            </svg>
          </div>
          <span className="text-white/90 text-[11px] md:text-xs font-semibold whitespace-nowrap">Reports & Insights</span>
        </div>
      </motion.div>

      {/* 10 — Connect & Support */}
      <motion.div initial={{ opacity: 0, y: 0, x: 20 }} animate={{ opacity: 1, y: 0, x: 0, rotate: 6 }} transition={{ delay: 1.8, duration: 0.8, type: "spring" }} className="absolute top-[49%] right-[3%] md:right-[5%] z-[5] hidden lg:block">
        <div className="bg-[#13301c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2.5 md:p-3 flex items-center gap-2.5 shadow-2xl">
          <div className="w-8 h-8 bg-[#0a1a0f] rounded-lg flex items-center justify-center border border-white/5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a3e635]">
              <path d="M17 6.1H3" /><path d="M21 12.1H3" /><path d="M15.1 18H3" />
            </svg>
          </div>
          <span className="text-white/90 text-[11px] md:text-xs font-semibold whitespace-nowrap">Connect & Support</span>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center font-extrabold text-white text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.1] tracking-tight w-full"
        >
          <span>HRMS. Payroll. HR Services.</span>

          <div className="relative mt-2 md:mt-4 flex items-center justify-center">
            {/* The white pill */}
            <motion.div
              initial={{ rotate: 0, scale: 0.9 }}
              animate={{ rotate: -2, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 200 }}
              className="bg-white text-black px-6 md:px-10 py-1 md:py-2 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-10 whitespace-nowrap"
            >
              All Under One Roof.
            </motion.div>
          </div>
        </motion.div>


        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-xl text-white/90 max-w-3xl mt-12 mb-10 leading-relaxed font-medium"
        >
          Manage your people with smart HRMS technology, simplify payroll, and get expert HR services for all your HR needs.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="bg-white text-black font-bold text-base md:text-lg px-8 py-3.5 md:py-4 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Book a demo
          </button>
          <button className="bg-[#0b2212] border border-[#1a4223] text-white font-bold text-base md:text-lg px-8 py-3.5 md:py-4 rounded-xl hover:bg-[#11311b] hover:scale-105 active:scale-95 transition-all shadow-xl">
            Talk to Expert
          </button>
        </motion.div>
      </div>
    </section>
  );
}
