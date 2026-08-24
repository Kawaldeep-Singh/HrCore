"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, User, Bell, Users, CalendarX2, 
  Banknote, Wallet, Database, Headset 
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

export function HeroVariant3() {
  const { openModal } = useModal();
  return (
    <section className="bg-[#f9f9f9] text-[#1a1c1c] antialiased min-h-screen flex flex-col relative">
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
        }
        
        .float-medium {
            animation: float 4s ease-in-out infinite alternate;
        }
        
        .float-fast {
            animation: float 3s ease-in-out infinite alternate-reverse;
        }

        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
        }

        .glow-effect {
            box-shadow: 0 0 40px rgba(76, 175, 80, 0.2);
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
                HRMS. Payroll. HR Services.<br/>
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
              initial={{ opacity: 0, opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex items-center gap-4 text-[#5f5e5e]"
            >
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full border-2 border-[#f9f9f9] bg-[#e8e8e8] flex items-center justify-center text-xs font-bold text-[#1a1c1c]">A</div>
                <div className="w-8 h-8 rounded-full border-2 border-[#f9f9f9] bg-[#d9e6da] flex items-center justify-center text-xs font-bold text-[#1a1c1c]">B</div>
                <div className="w-8 h-8 rounded-full border-2 border-[#f9f9f9] bg-[#e2dfde] flex items-center justify-center text-xs font-bold text-[#1a1c1c]">C</div>
              </div>
              <span className="text-sm font-medium">Trusted by 10,000+ HR Professionals</span>
            </motion.div>
          </div>
          
          {/* Visual Graphic: Floating Smartphone & Orbital Icons */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] flex items-center justify-center"
          >
            {/* Central Smartphone Frame (Glassmorphism) */}
            <div className="relative z-20 w-[280px] h-[580px] bg-white/80 backdrop-blur-xl border border-white rounded-[40px] shadow-[0_24px_48px_rgba(0,0,0,0.1)] p-4 float-slow glow-effect overflow-hidden">
              
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#e2e2e2] rounded-b-xl z-30"></div>
              
              {/* App UI Mockup inside phone */}
              <div className="w-full h-full bg-[#f9f9f9] rounded-[24px] border border-[#e8e8e8] overflow-hidden flex flex-col">
                {/* Header */}
                <div className="p-4 bg-[#006e1c] text-white flex justify-between items-center mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <User size={16} />
                    </div>
                    <span className="text-sm font-semibold">Dashboard</span>
                  </div>
                  <Bell size={20} />
                </div>
                
                {/* Content Area */}
                <div className="p-4 flex-grow flex flex-col gap-4 bg-[#f9f9f9]">
                  {/* Stats Card */}
                  <div className="bg-white p-3 rounded-lg border border-[#e2e2e2] flex justify-between items-center shadow-sm">
                    <div>
                      <p className="text-xs text-[#5f5e5e] mb-1 font-medium">Total Employees</p>
                      <p className="text-xl font-bold text-[#1a1c1c]">1,248</p>
                    </div>
                    <div className="w-10 h-10 bg-[#d9e6da] rounded-full flex items-center justify-center text-[#4caf50]">
                      <Users size={20} />
                    </div>
                  </div>
                  
                  {/* List Items */}
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold text-[#3f4a3c] mb-1">Recent Activity</p>
                    <div className="bg-white p-2 rounded-lg border border-[#e2e2e2] flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#ffdad6] rounded flex items-center justify-center text-[#93000a]">
                        <CalendarX2 size={16} />
                      </div>
                      <div className="flex-grow">
                        <p className="text-sm font-medium text-[#1a1c1c]">Leave Request</p>
                        <p className="text-xs text-[#5f5e5e]">Sarah J.</p>
                      </div>
                      <span className="px-2 py-1 bg-[#e8e8e8] text-[#1a1c1c] rounded text-[10px] font-medium">Pending</span>
                    </div>
                    
                    <div className="bg-white p-2 rounded-lg border border-[#e2e2e2] flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#d9e6da] rounded flex items-center justify-center text-[#006e1c]">
                        <Banknote size={16} />
                      </div>
                      <div className="flex-grow">
                        <p className="text-sm font-medium text-[#1a1c1c]">Payroll Processed</p>
                        <p className="text-xs text-[#5f5e5e]">Q3 2024</p>
                      </div>
                      <span className="px-2 py-1 bg-[#78dc77]/20 text-[#4caf50] rounded text-[10px] font-bold">Done</span>
                    </div>
                  </div>
                  
                  {/* Chart Mockup */}
                  <div className="mt-auto h-24 bg-white border border-[#e2e2e2] rounded-lg p-2 flex items-end gap-1 px-4 relative overflow-hidden">
                    <div className="absolute top-2 left-2 text-xs font-semibold text-[#5f5e5e]">Growth</div>
                    <div className="w-1/5 bg-[#4caf50]/30 h-1/3 rounded-t"></div>
                    <div className="w-1/5 bg-[#4caf50]/50 h-1/2 rounded-t"></div>
                    <div className="w-1/5 bg-[#4caf50]/70 h-[60%] rounded-t"></div>
                    <div className="w-1/5 bg-[#4caf50]/90 h-[80%] rounded-t"></div>
                    <div className="w-1/5 bg-[#4caf50] h-full rounded-t"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Orbital Icons (Bento/Glassmorphism style) */}
            
            {/* Payroll Node */}
            <div className="absolute top-[10%] left-[5%] md:left-[-10%] z-30 float-medium">
              <div className="bg-white/90 backdrop-blur-md border border-[#e2e2e2] p-4 rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.08)] flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#d9e6da] flex items-center justify-center text-[#4caf50]">
                  <Wallet size={24} />
                </div>
                <div>
                  <p className="text-sm text-[#1a1c1c] font-medium">Automated</p>
                  <p className="text-xl font-bold text-[#006e1c]">Payroll</p>
                </div>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-16 w-16 h-0.5 bg-gradient-to-r from-[#006e1c]/40 to-transparent"></div>
            </div>
            
            {/* HRMS Node */}
            <div className="absolute bottom-[20%] left-[-5%] md:left-[-15%] z-30 float-fast">
              <div className="bg-white/90 backdrop-blur-md border border-[#e2e2e2] p-4 rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.08)] flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#e8e8e8] flex items-center justify-center text-[#3f4a3c]">
                  <Database size={24} />
                </div>
                <div>
                  <p className="text-sm text-[#1a1c1c] font-medium">Core Data</p>
                  <p className="text-xl font-bold text-[#3f4a3c]">HRMS</p>
                </div>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-12 w-12 h-0.5 bg-gradient-to-r from-[#e2e2e2] to-transparent"></div>
            </div>
            
            {/* Services Node */}
            <div className="absolute top-[40%] right-[-5%] md:right-[-15%] z-30 float-medium" style={{ animationDelay: "1s" }}>
              <div className="bg-white/90 backdrop-blur-md border border-[#e2e2e2] p-4 rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.08)] flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 rounded-full bg-[#78dc77]/20 flex items-center justify-center text-[#006e1c]">
                  <Headset size={24} />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#1a1c1c] leading-tight">HR<br/>Services</p>
                </div>
              </div>
              <div className="hidden md:block absolute top-1/2 -left-12 w-12 h-0.5 bg-gradient-to-l from-[#006e1c]/20 to-transparent"></div>
            </div>
            
            {/* Decorative Background Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#006e1c]/10 z-0 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-[#006e1c]/5 z-0 border-dashed pointer-events-none"></div>
            
          </motion.div>
        </div>
      </main>
    </section>
  );
}
