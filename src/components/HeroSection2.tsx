"use client";

import { motion } from "framer-motion";
import {
  Users, Clock, Briefcase, DollarSign, GraduationCap,
  Settings, Target, Receipt, PieChart, Headphones,
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

/* ─── Floating icon data ─── */
const floatingIcons = [
  // Scattered on the left
  { Icon: Users,          top: "15%", left: "12%",  right: undefined, size: 24, delay: 0.1, dx: [0, 15, -10, 0],  dy: [0, -15, 10, 0],  dur: 8,  opacity: 0.9 },
  { Icon: GraduationCap,  top: "35%", left: "4%",   right: undefined, size: 18, delay: 0.8, dx: [0, 8, -12, 0],   dy: [0, 12, -8, 0],   dur: 9,  opacity: 0.5 },
  { Icon: Briefcase,      top: "65%", left: "18%",  right: undefined, size: 28, delay: 1.4, dx: [0, -15, 12, 0],  dy: [0, -10, 15, 0],  dur: 11, opacity: 0.8 },
  { Icon: PieChart,       top: "80%", left: "7%",   right: undefined, size: 20, delay: 0.5, dx: [0, 12, -8, 0],   dy: [0, 15, -12, 0],  dur: 7,  opacity: 0.6 },
  { Icon: Target,         top: "48%", left: "22%",  right: undefined, size: 22, delay: 1.1, dx: [0, -10, 8, 0],   dy: [0, -12, 10, 0],  dur: 9.5, opacity: 0.7 },

  // Scattered on the right
  { Icon: DollarSign,     top: "20%", left: undefined, right: "18%", size: 30, delay: 0.3, dx: [0, -18, 14, 0],  dy: [0, 12, -15, 0],  dur: 10, opacity: 0.9 },
  { Icon: Settings,       top: "40%", left: undefined, right: "8%",  size: 18, delay: 1.7, dx: [0, 10, -12, 0],  dy: [0, -10, 8, 0],   dur: 8.5, opacity: 0.5 },
  { Icon: Clock,          top: "60%", left: undefined, right: "25%", size: 24, delay: 0.6, dx: [0, 15, -10, 0],  dy: [0, 15, -12, 0],  dur: 12, opacity: 0.7 },
  { Icon: Receipt,        top: "75%", left: undefined, right: "12%", size: 20, delay: 1.2, dx: [0, -12, 10, 0],  dy: [0, -14, 8, 0],   dur: 7.5, opacity: 0.8 },
  { Icon: Headphones,     top: "12%", left: undefined, right: "6%",  size: 16, delay: 0.9, dx: [0, 8, -6, 0],    dy: [0, -8, 10, 0],   dur: 6,   opacity: 0.4 },
];

export function HeroSection2() {
  const { openModal } = useModal();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#060d10]">
      {/* ═══ ANIMATED BACKGROUND LAYERS ═══ */}

      {/* Layer 1: Animated floating gradient orb — Top Left (Emerald) */}
      <div
        className="hero-orb-1 absolute top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(76,175,104,0.25) 0%, rgba(76,175,104,0.08) 50%, transparent 70%)", filter: "blur(50px)" }}
      />

      {/* Layer 2: Animated floating gradient orb — Bottom Right (Teal) */}
      <div
        className="hero-orb-2 absolute bottom-[-20%] right-[-15%] w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(45,212,191,0.20) 0%, rgba(45,212,191,0.05) 50%, transparent 70%)", filter: "blur(60px)" }}
      />

      {/* Layer 3: Animated floating gradient orb — Center (Lime accent) */}
      <div
        className="hero-orb-3 absolute top-[25%] left-[30%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(163,230,53,0.15) 0%, transparent 60%)", filter: "blur(60px)" }}
      />

      {/* Layer 4: Animated subtle grid pattern */}
      <div
        className="hero-grid-pulse absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(76,175,104,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(76,175,104,0.25) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Layer 5: Flowing diagonal lines */}
      <div
        className="hero-line-flow absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: "repeating-linear-gradient(135deg, rgba(76,175,104,0.6) 0px, rgba(76,175,104,0.6) 1px, transparent 1px, transparent 40px)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Layer 6: Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Layer 7: Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,13,16,0.7)_100%)] pointer-events-none" />

      {/* ═══ Floating Icon Orbs ═══ */}
      {floatingIcons.map(({ Icon, top, left, right, size, delay, dx, dy, dur, opacity }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: opacity || 1, scale: 1 }}
          transition={{ delay: 0.8 + delay, duration: 0.6, type: "spring" }}
          className="absolute z-[5] hidden md:flex"
          style={{ top, left, right }}
        >
          <motion.div
            animate={{ x: dx, y: dy }}
            transition={{ duration: dur, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-[#0c1a14]/60 backdrop-blur-xl border border-white/[0.08] flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <Icon size={size} className="text-[#4CAF68]" strokeWidth={1.8} />
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center w-[82%]">

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
          className="text-lg md:text-xl text-white/80 max-w-3xl mt-12 mb-10 leading-relaxed font-medium"
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
          <button 
            onClick={openModal}
            className="bg-[#4CAF68] hover:bg-[#3B9B5A] text-white font-bold text-base md:text-lg px-8 py-3.5 md:py-4 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-[0_8px_30px_rgba(76,175,104,0.3)] hover:shadow-[0_8px_40px_rgba(76,175,104,0.5)] border border-[#4CAF68]/50"
          >
            Book a demo
          </button>
          <button 
            onClick={openModal}
            className="bg-white/[0.06] border border-white/[0.1] text-white font-bold text-base md:text-lg px-8 py-3.5 md:py-4 rounded-xl hover:bg-white/[0.1] hover:scale-105 active:scale-95 transition-all shadow-xl backdrop-blur-md"
          >
            Talk to Expert
          </button>
        </motion.div>
      </div>
    </section>
  );
}
