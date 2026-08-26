"use client";

import { motion } from "framer-motion";
import { TrendingUp, IndianRupee, CheckCircle } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export function HeroVariant() {
  const { openModal } = useModal();
  return (
    <section className="bg-[#1a1c1c] text-white min-h-screen flex flex-col relative overflow-hidden">
      {/* Main Content */}
      <main className="flex-grow relative flex items-center justify-center py-20 lg:py-32">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 z-0 opacity-15"
          style={{
            backgroundColor: "#1a1c1c",
            backgroundImage: `
              radial-gradient(circle at 100% 150%, #1a1c1c 24%, #006e1c 25%, #006e1c 28%, #1a1c1c 29%, #1a1c1c 36%, #006e1c 36%, #006e1c 40%, transparent 40%, transparent),
              radial-gradient(circle at 0 150%, #1a1c1c 24%, #006e1c 25%, #006e1c 28%, #1a1c1c 29%, #1a1c1c 36%, #006e1c 36%, #006e1c 40%, transparent 40%, transparent),
              radial-gradient(circle at 50% 100%, #006e1c 10%, #1a1c1c 11%, #1a1c1c 23%, #006e1c 24%, #006e1c 30%, #1a1c1c 31%, #1a1c1c 43%, #006e1c 44%, #006e1c 50%, #1a1c1c 51%, #1a1c1c 63%, #006e1c 64%, #006e1c 71%, transparent 71%, transparent),
              radial-gradient(circle at 100% 50%, #006e1c 5%, #1a1c1c 6%, #1a1c1c 15%, #006e1c 16%, #006e1c 20%, #1a1c1c 21%, #1a1c1c 30%, #006e1c 31%, #006e1c 35%, #1a1c1c 36%, #1a1c1c 45%, #006e1c 46%, #006e1c 49%, transparent 50%, transparent),
              radial-gradient(circle at 0 50%, #006e1c 5%, #1a1c1c 6%, #1a1c1c 15%, #006e1c 16%, #006e1c 20%, #1a1c1c 21%, #1a1c1c 30%, #006e1c 31%, #006e1c 35%, #1a1c1c 36%, #1a1c1c 45%, #006e1c 46%, #006e1c 49%, transparent 50%, transparent)
            `,
            backgroundSize: "100px 50px"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1c1c] z-0" />

        <div className="w-[82%] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8 text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-[#f9f9f9] drop-shadow-lg tracking-tight leading-tight">
              HRMS. Payroll. HR Services. <br/>
              <span className="text-[#94f990] drop-shadow-[0_0_15px_rgba(148,249,144,0.5)]">All Under One Roof.</span>
            </h1>
            <p className="text-lg text-[#c8c6c5] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Manage your people with smart HRMS technology, simplify payroll, and get expert HR services for all your HR needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button onClick={openModal} className="text-sm font-bold bg-[#4caf50] text-white px-8 py-3 rounded-lg shadow-[0_4px_12px_rgba(76,175,80,0.3)] transition hover:bg-[#006e1c] hover:shadow-[0_6px_16px_rgba(76,175,80,0.5)] transform hover:-translate-y-1">
                Book a demo
              </button>
              <button onClick={openModal} className="text-sm font-bold bg-transparent border-2 border-[#e2e2e2] text-[#f9f9f9] px-8 py-3 rounded-lg transition hover:bg-[#e2e2e2]/20 hover:border-[#becab9]">
                Talk to Expert
              </button>
            </div>
          </motion.div>

          {/* Visual Content (Bento/Glassmorphism) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full h-[500px] flex items-center justify-center perspective-[1000px]"
          >
            {/* Main Dashboard Card */}
            <div
              className="rounded-2xl p-8 w-full max-w-[500px] shadow-[0_12px_32px_rgba(0,0,0,0.5)] transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-500 ease-out z-20"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}
            >
              <div className="flex justify-between items-center mb-6 border-b border-[#e2e2e2]/20 pb-4">
                <span className="text-2xl font-semibold text-[#f9f9f9]">Payroll Summary</span>
                <IndianRupee className="text-[#94f990] w-6 h-6" />
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm text-[#c8c6c5] mb-1">Total Processed</p>
                    <p className="text-5xl font-bold text-[#f9f9f9] tracking-tight">₹1.2M</p>
                  </div>
                  <div className="bg-[#4caf50]/20 px-3 py-1.5 rounded-lg text-[#94f990] text-sm font-semibold flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" /> +5.2%
                  </div>
                </div>

                {/* Bar Chart Mockup */}
                <div className="flex items-end gap-3 h-32 mt-8 border-b border-[#e2e2e2]/20 pb-2">
                  <div className="w-1/6 bg-[#e2e2e2]/30 rounded-t-md h-[40%] transition-all hover:bg-[#e2e2e2]/50"></div>
                  <div className="w-1/6 bg-[#e2e2e2]/30 rounded-t-md h-[60%] transition-all hover:bg-[#e2e2e2]/50"></div>
                  <div className="w-1/6 bg-[#e2e2e2]/30 rounded-t-md h-[30%] transition-all hover:bg-[#e2e2e2]/50"></div>
                  <div className="w-1/6 bg-[#4caf50] rounded-t-md h-[80%] relative shadow-[0_0_15px_rgba(76,175,80,0.6)]"></div>
                  <div className="w-1/6 bg-[#e2e2e2]/30 rounded-t-md h-[50%] transition-all hover:bg-[#e2e2e2]/50"></div>
                  <div className="w-1/6 bg-[#e2e2e2]/30 rounded-t-md h-[70%] transition-all hover:bg-[#e2e2e2]/50"></div>
                </div>
              </div>
            </div>

            {/* Floating Employee Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 -left-6 md:-left-10 rounded-xl p-4 shadow-[0_12px_32px_rgba(0,0,0,0.5)] z-30"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#e2e2e2]/30 flex items-center justify-center text-[#f9f9f9] font-bold">
                  JS
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#f9f9f9]">Jane Smith</p>
                  <p className="text-xs text-[#c8c6c5]">Senior Dev</p>
                </div>
                <div className="ml-4 bg-[#4caf50]/20 text-[#94f990] px-2 py-1 rounded-md text-[10px] font-bold tracking-wider">
                  ACTIVE
                </div>
              </div>
            </motion.div>

            {/* Floating Alert Card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 -right-2 md:-right-5 rounded-xl p-4 shadow-[0_12px_32px_rgba(0,0,0,0.5)] z-30"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#4caf50]/20 flex items-center justify-center">
                  <CheckCircle className="text-[#94f990] w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#f9f9f9]">Compliance Checked</p>
                  <p className="text-xs text-[#c8c6c5]">All clear for Q3</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </section>
  );
}
