"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UserPlus, CalendarOff, Briefcase, FileSignature, GraduationCap, Settings, Target, Receipt, LineChart, MessageCircle, CheckCircle2, ChevronRight, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { num: "01", title: "Hire to Retire", desc: "Complete employee journey", icon: <UserPlus className="w-6 h-6" /> },
  { num: "02", title: "Time to Leave", desc: "Attendance & leave management", icon: <CalendarOff className="w-6 h-6" /> },
  { num: "03", title: "Recruit to Onboard", desc: "Hiring made simple", icon: <Briefcase className="w-6 h-6" /> },
  { num: "04", title: "Payroll to Compliance", desc: "Payroll & statutory needs", icon: <FileSignature className="w-6 h-6" /> },
  { num: "05", title: "Learn & Grow", desc: "Training & development", icon: <GraduationCap className="w-6 h-6" /> },
  { num: "06", title: "Self-Service HR", desc: "Employee access & requests", icon: <Settings className="w-6 h-6" /> },
  { num: "07", title: "Goals to Growth", desc: "Performance management", icon: <Target className="w-6 h-6" /> },
  { num: "08", title: "Spend to Reimburse", desc: "Expenses & claims", icon: <Receipt className="w-6 h-6" /> },
  { num: "09", title: "Data to Decisions", desc: "Reports & insights", icon: <LineChart className="w-6 h-6" /> },
  { num: "10", title: "Connect & Support", desc: "HR communication & support", icon: <MessageCircle className="w-6 h-6" /> },
];

export function HRMSPortalFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const featureSections = gsap.utils.toArray<HTMLElement>(".feature-scroll-step");
      
      featureSections.forEach((sec, i) => {
        ScrollTrigger.create({
          trigger: sec,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveIndex(i);
            }
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#050f14] text-white overflow-hidden border-t border-white/5 relative" ref={containerRef}>
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#16a34a]/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="max-w-[1400px] mx-auto px-6 py-24 md:py-32 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-24 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight text-white"
          >
            Meet Our Powerful <br className="hidden md:block"/> HRMS Portal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-2xl leading-relaxed"
          >
            From <span className="text-white font-semibold">Hire to Retire.</span> Manage your complete employee journey with simple, smart tools that make everyday HR easier.
          </motion.p>
        </div>

        {/* Scrollable Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative items-start">
          
          {/* Left Column (Scrollable Text) */}
          <div className="w-full lg:w-1/2 flex flex-col" ref={leftColRef}>
            {features.map((feature, i) => {
              const isActive = activeIndex === i;
              return (
                <div 
                  key={feature.num} 
                  className={`feature-scroll-step flex flex-col justify-center min-h-[50vh] lg:min-h-[80vh] transition-all duration-700 ${isActive ? "opacity-100" : "opacity-20"}`}
                >
                  <div className="flex items-center gap-6 mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 ${isActive ? "bg-[#16a34a]/20 border-[#16a34a]/50 text-[#a3e635] shadow-[0_0_30px_rgba(22,163,74,0.3)]" : "bg-white/5 border-white/10 text-gray-500"}`}>
                      {feature.icon}
                    </div>
                    <span className="text-2xl font-bold font-mono tracking-widest text-[#a3e635]/80">{feature.num}</span>
                  </div>
                  <h3 className="text-4xl lg:text-6xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-xl lg:text-2xl text-gray-400 font-medium">{feature.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Right Column (Sticky Dashboard) */}
          <div className="w-full lg:w-1/2 lg:h-[100vh] lg:sticky lg:top-0 flex items-center justify-center pt-10 lg:pt-0" ref={rightColRef}>
            <div className="relative w-full aspect-[4/3] max-w-[600px] xl:max-w-[700px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#0b171e] group">
              
              {/* Browser Header */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-[#070e13] border-b border-white/10 flex items-center px-4 gap-2 z-20">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>

              {/* Base Image */}
              <img
                src="/hero-dashboard.png"
                alt="Dashboard Base"
                className="absolute inset-0 w-full h-full object-cover object-top opacity-30 mt-10 filter blur-[2px]"
              />

              {/* Dynamic Overlays */}
              <div className="absolute inset-0 mt-10 z-10 flex items-center justify-center p-8">
                <AnimatePresence mode="wait">
                  <DashboardOverlay key={activeIndex} index={activeIndex} />
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* 
  Dynamic Overlay Component 
  Simulates evolving UI without needing 10 real images 
*/
function DashboardOverlay({ index }: { index: number }) {
  const variants = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1], staggerChildren: 0.1 } },
    exit: { opacity: 0, scale: 1.05, filter: "blur(4px)", transition: { duration: 0.4 } }
  };

  const childVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // 01: Hire to Retire (Main Dashboard)
  if (index === 0) return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit" className="w-full h-full flex flex-col gap-4">
      <motion.div variants={childVariants} className="w-full h-1/2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 flex items-end">
        <h3 className="text-2xl font-bold text-white">Welcome back, Sarah</h3>
      </motion.div>
      <div className="flex gap-4 h-1/2">
        <motion.div variants={childVariants} className="w-1/2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6" />
        <motion.div variants={childVariants} className="w-1/2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6" />
      </div>
    </motion.div>
  );

  // 02: Time to Leave (Attendance)
  if (index === 1) return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit" className="w-full h-full flex items-center justify-center">
      <motion.div className="bg-[#11231a]/90 backdrop-blur-xl border border-[#16a34a]/30 p-8 rounded-3xl shadow-2xl flex flex-col items-center gap-6 w-80 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#16a34a]/20 blur-3xl rounded-full" />
        <div className="w-24 h-24 rounded-full border-4 border-[#16a34a] border-t-transparent animate-spin flex items-center justify-center">
           <div className="w-20 h-20 rounded-full bg-[#16a34a]/10 flex items-center justify-center font-bold text-xl text-white">09:00</div>
        </div>
        <button className="w-full py-4 bg-[#16a34a] text-white rounded-xl font-bold text-lg hover:bg-[#15803d] transition-colors shadow-[0_0_20px_rgba(22,163,74,0.4)]">Check In Now</button>
      </motion.div>
    </motion.div>
  );

  // 03: Recruit to Onboard (Kanban)
  if (index === 2) return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit" className="w-full h-full flex gap-4 p-2">
      {[1, 2, 3].map((col) => (
        <motion.div key={col} variants={childVariants} className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-3 backdrop-blur-md">
          <div className="h-6 w-24 bg-white/20 rounded mb-2" />
          <div className="h-20 w-full bg-white/10 rounded-lg" />
          <div className="h-20 w-full bg-white/10 rounded-lg" />
        </motion.div>
      ))}
    </motion.div>
  );

  // 04: Payroll
  if (index === 3) return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit" className="w-full h-full flex flex-col justify-center gap-6">
      <motion.div variants={childVariants} className="w-full bg-gradient-to-r from-emerald-900/50 to-emerald-800/20 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-8 flex justify-between items-center shadow-2xl">
        <div>
          <p className="text-emerald-400 font-medium mb-2">Total Payroll Processed</p>
          <h2 className="text-5xl font-bold text-white">$245,890</h2>
        </div>
        <CheckCircle2 className="w-16 h-16 text-emerald-400" />
      </motion.div>
      <motion.div variants={childVariants} className="w-3/4 h-20 bg-white/5 border border-white/10 rounded-xl" />
    </motion.div>
  );

  // 05: Learn & Grow
  if (index === 4) return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit" className="w-full h-full grid grid-cols-2 gap-4">
      <motion.div variants={childVariants} className="col-span-2 h-40 bg-[#1e293b]/80 backdrop-blur-md rounded-2xl border border-white/10 p-6 flex flex-col justify-end">
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div initial={{ width: 0 }} animate={{ width: "70%" }} transition={{ delay: 0.5, duration: 1 }} className="h-full bg-blue-500" />
        </div>
        <p className="mt-2 text-sm text-blue-300 font-medium">Leadership Training: 70% Complete</p>
      </motion.div>
      <motion.div variants={childVariants} className="bg-white/5 border border-white/10 rounded-xl" />
      <motion.div variants={childVariants} className="bg-white/5 border border-white/10 rounded-xl" />
    </motion.div>
  );

  // Generic fallback for the rest (06-10) using elegant abstract layouts
  return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit" className="w-full h-full flex flex-col items-center justify-center gap-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.1)_0%,transparent_70%)]" />
      
      <motion.div variants={childVariants} className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="w-32 h-4 bg-white/40 rounded-full" />
          <div className="w-48 h-3 bg-white/20 rounded-full" />
        </div>
        <ChevronRight className="text-white/50" />
      </motion.div>
      
      <motion.div variants={childVariants} className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl flex items-center justify-between ml-12">
        <div className="flex flex-col gap-2">
          <div className="w-24 h-4 bg-white/30 rounded-full" />
          <div className="w-40 h-3 bg-white/10 rounded-full" />
        </div>
        <ArrowUpRight className="text-white/40" />
      </motion.div>
    </motion.div>
  );
}
