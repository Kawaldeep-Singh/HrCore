"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, Headset, MapPin, Plane, IndianRupee, PartyPopper, ListTodo
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

export function HeroVariant3() {
  const { openModal } = useModal();
  return (
    <section className="bg-[#f9f9f9] text-[#1a1c1c] antialiased min-h-screen flex flex-col relative z-10 overflow-hidden md:overflow-visible mt-[10px]">
      <style>{`
        .data-flow-bg {
            background-color: #f9f9f9;
            background-image:
                linear-gradient(90deg, rgba(76, 175, 80, 0.05) 1px, transparent 1px),
                linear-gradient(rgba(76, 175, 80, 0.05) 1px, transparent 1px);
            background-size: 40px 40px;
            position: relative;
            overflow: hidden;
        }

        .neon-line {
            position: absolute;
            background: linear-gradient(90deg, transparent, rgba(76, 175, 80, 0.8), transparent);
            height: 2px;
            width: 200px;
            opacity: 0;
            animation: flowRight 4s infinite linear;
        }

        .neon-line-vertical {
            position: absolute;
            background: linear-gradient(180deg, transparent, rgba(76, 175, 80, 0.8), transparent);
            width: 2px;
            height: 200px;
            opacity: 0;
            animation: flowDown 5s infinite linear;
        }

        @keyframes flowRight {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(100vw); opacity: 0; }
        }

        @keyframes flowDown {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }

        .float-slow {
            animation: float 6s ease-in-out infinite;
            will-change: transform;
        }

        .float-medium {
            animation: float 4s ease-in-out infinite alternate;
            will-change: transform;
        }

        .float-fast {
            animation: float 3s ease-in-out infinite alternate-reverse;
            will-change: transform;
        }

        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
        }

        .glow-effect {
            box-shadow: 0 0 40px rgba(76, 175, 80, 0.2);
        }

        /* ── Mobile Performance Optimization ── */
        @media (max-width: 768px) {
          .neon-line,
          .neon-line-vertical {
            display: none !important;
          }
          .float-slow,
          .float-medium,
          .float-fast {
            animation: none !important;
            will-change: auto !important;
          }
          .glow-effect {
            box-shadow: none !important;
          }
        }
      `}</style>

      {/* Main Content: Neon Data-Flow Hero */}
      <main className="flex-grow flex items-center justify-center data-flow-bg relative py-20 lg:py-32 min-h-[calc(100vh-80px)]">

        {/* Animated Background Elements */}
        <div className="neon-line" style={{ top: "20%", left: 0, animationDelay: "0s" }}></div>
        <div className="neon-line" style={{ top: "60%", left: 0, animationDelay: "2s" }}></div>
        <div className="neon-line" style={{ top: "80%", left: 0, animationDelay: "1s", width: "300px" }}></div>
        <div className="neon-line-vertical" style={{ left: "15%", top: 0, animationDelay: "0.5s" }}></div>
        <div className="neon-line-vertical" style={{ left: "85%", top: 0, animationDelay: "2.5s" }}></div>

        <div className="w-[82%] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Text Content */}
          <div className="flex flex-col gap-12 z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-3"
            >
              <span className="inline-block px-3 py-1 bg-[#d9e6da] text-[#3e4a41] rounded-full text-sm font-semibold w-max border border-[#bdcabe]">
                NEXT-GEN HR PLATFORM
              </span>
              <h1 className="text-5xl md:text-[56px] md:leading-[64px] font-bold text-[#1a1c1c] tracking-tight">
                HRMS. Payroll. HR Services.<br />
                <span className="text-[#006e1c]">All Under One Roof.</span>
              </h1>
              <p className="text-lg text-[#3f4a3c] max-w-xl mt-4 leading-relaxed">
                Transform your complex operational data into actionable insights with our expertly designed, modern HR tool set. Streamlined, efficient, and built for growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <button onClick={openModal} className="bg-[#4caf50] text-[#ffffff] font-bold py-3 px-8 rounded-lg hover:bg-[#006e1c] transition-all shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(76,175,80,0.25)] flex items-center justify-center gap-2">
                Book a demo
                <ArrowRight size={20} />
              </button>
              <button onClick={openModal} className="border-2 border-[#1a1c1c] text-[#1a1c1c] font-bold py-3 px-8 rounded-lg hover:bg-[#e2e2e2] transition-all flex items-center justify-center">
                Talk to Expert
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex items-center gap-4 text-[#5f5e5e]"
            >
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full border-2 border-[#f9f9f9] bg-[#e8e8e8] flex items-center justify-center text-xs font-bold text-[#1a1c1c]">A</div>
                <div className="w-8 h-8 rounded-full border-2 border-[#f9f9f9] bg-[#d9e6da] flex items-center justify-center text-xs font-bold text-[#1a1c1c]">B</div>
                <div className="w-8 h-8 rounded-full border-2 border-[#f9f9f9] bg-[#e2dfde] flex items-center justify-center text-xs font-bold text-[#1a1c1c]">C</div>
              </div>
              <span className="text-sm font-medium">Trusted by 1000+ HR Professionals</span>
            </motion.div>
          </div>

          {/* Visual Graphic: Floating Smartphone & Orbital Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[520px] md:h-[600px] flex items-center justify-center"
          >
            {/* Central Smartphone Frame */}
            <div className="relative z-20 w-[210px] h-[435px] md:w-[280px] md:h-[580px] rounded-[2.2rem] md:rounded-[3rem] border-[6px] md:border-[8px] border-[#222] bg-[#111] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10 float-slow glow-effect">

              {/* Phone Notch */}
              <div className="absolute top-0 inset-x-0 h-5 md:h-7 flex justify-center z-20">
                <div className="w-24 h-4 md:w-32 md:h-6 bg-[#222] rounded-b-2xl md:rounded-b-3xl"></div>
              </div>

              {/* Screen Content */}
              <div className="w-full h-full p-1 pt-5 md:pt-7">
                <img src="/Mobile.png" alt="HRMS Mobile App" className="w-full h-auto object-cover object-top rounded-[1.2rem] md:rounded-[1.5rem]" />
              </div>
            </div>

            {/* Orbital Icons (Bento/Glassmorphism style) */}

            {/* 1. Top Left: Check-In */}
            <div className="absolute top-[8%] left-[-2%] md:top-[10%] md:left-[-15%] z-30 float-slow">
              <div className="bg-white/90 backdrop-blur-md border border-[#e2e2e2] p-2 md:p-3 rounded-xl shadow-lg flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#e8f5e9] flex items-center justify-center text-[#4caf50]">
                  <MapPin size={18} className="md:w-5 md:h-5" />
                </div>
                <p className="text-xs md:text-sm font-bold text-[#1a1c1c] whitespace-nowrap pr-1 md:pr-2">Check-In</p>
              </div>
            </div>

            {/* 2. Mid Left: Leave */}
            <div className="absolute top-[44%] left-[-6%] md:top-[45%] md:left-[-25%] z-30 float-medium" style={{ animationDelay: '0.5s' }}>
              <div className="bg-white/90 backdrop-blur-md border border-[#e2e2e2] p-2 md:p-3 rounded-xl shadow-lg flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#ffebee] flex items-center justify-center text-[#f44336]">
                  <Plane size={18} className="md:w-5 md:h-5" />
                </div>
                <p className="text-xs md:text-sm font-bold text-[#1a1c1c] whitespace-nowrap pr-1 md:pr-2">Leave</p>
              </div>
            </div>

            {/* 3. Bottom Left: Payslips */}
            <div className="absolute bottom-[10%] left-[-2%] md:bottom-[15%] md:left-[-15%] z-30 float-fast" style={{ animationDelay: '1s' }}>
              <div className="bg-white/90 backdrop-blur-md border border-[#e2e2e2] p-2 md:p-3 rounded-xl shadow-lg flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#e3f2fd] flex items-center justify-center text-[#2196f3]">
                  <IndianRupee size={18} className="md:w-5 md:h-5" />
                </div>
                <p className="text-xs md:text-sm font-bold text-[#1a1c1c] whitespace-nowrap pr-1 md:pr-2">Payslips</p>
              </div>
            </div>

            {/* 4. Top Right: Holidays */}
            <div className="absolute top-[12%] right-[-2%] md:top-[15%] md:right-[-5%] z-30 float-medium" style={{ animationDelay: '1.5s' }}>
              <div className="bg-white/90 backdrop-blur-md border border-[#e2e2e2] p-2 md:p-3 rounded-xl shadow-lg flex flex-row-reverse items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#fce4ec] flex items-center justify-center text-[#e91e63]">
                  <PartyPopper size={18} className="md:w-5 md:h-5" />
                </div>
                <p className="text-xs md:text-sm font-bold text-[#1a1c1c] whitespace-nowrap pl-1 md:pl-2">Holidays</p>
              </div>
            </div>

            {/* 5. Mid Right: Tasks */}
            <div className="absolute top-[48%] right-[-6%] md:top-[50%] md:right-[-15%] z-30 float-fast" style={{ animationDelay: '2s' }}>
              <div className="bg-white/90 backdrop-blur-md border border-[#e2e2e2] p-2 md:p-3 rounded-xl shadow-lg flex flex-row-reverse items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#fff3e0] flex items-center justify-center text-[#ff9800]">
                  <ListTodo size={18} className="md:w-5 md:h-5" />
                </div>
                <p className="text-xs md:text-sm font-bold text-[#1a1c1c] whitespace-nowrap pl-1 md:pl-2">Tasks</p>
              </div>
            </div>

            {/* 6. Bottom Right: HR Support */}
            <div className="absolute bottom-[8%] right-[-2%] md:bottom-[10%] md:right-[-5%] z-30 float-slow" style={{ animationDelay: '2.5s' }}>
              <div className="bg-white/90 backdrop-blur-md border border-[#e2e2e2] p-2 md:p-3 rounded-xl shadow-lg flex flex-row-reverse items-center gap-2 md:gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f3e5f5] flex items-center justify-center text-[#9c27b0]">
                  <Headset size={18} className="md:w-5 md:h-5" />
                </div>
                <p className="text-xs md:text-sm font-bold text-[#1a1c1c] whitespace-nowrap pl-1 md:pl-2">HR Support</p>
              </div>
            </div>

            {/* Decorative Background Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-full border border-[#006e1c]/10 z-0 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] md:w-[550px] md:h-[550px] rounded-full border border-[#006e1c]/5 z-0 border-dashed pointer-events-none"></div>

          </motion.div>
        </div>
      </main>
    </section>
  );
}
