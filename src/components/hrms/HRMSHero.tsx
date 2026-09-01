"use client";

import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { ArrowRight, Users, Briefcase, Calendar, CheckCircle, Activity } from "lucide-react";

export function HRMSHero() {
  const { openModal } = useModal();

  return (
    <section className="relative pt-12 pb-16 md:pt-14 md:pb-24 lg:min-h-[85vh] flex flex-col justify-center bg-[#fbfdfa]">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#006e1c]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#003b0f]/10 rounded-full blur-[100px]" />
      </div>

      <div className="w-[82%] mx-auto relative z-10">
        <div className="flex flex-col lg:block relative items-center gap-12 lg:gap-0">
          
          {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[55%] xl:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left relative z-20 lg:py-20"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#e6f0e8] border border-[#006e1c]/40 text-[#003b0f] text-sm font-semibold mb-6">
                HRMS Portal
              </div>
              <div className="mb-6 font-bold tracking-tight text-[#041208] flex flex-col w-full">
                <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] flex flex-col w-full mt-2">
                  <div className="w-full">Complete HR Management.</div>
                  <div className="w-full mt-2 text-[#006e1c]">Simplified.</div>
                </h1>
              </div>
            <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Manage your people, processes, and everyday HR operations with one powerful platform built for the complete employee journey.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={openModal} 
                className="w-full sm:w-auto bg-[#006e1c] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#005a17] hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(0,110,28,0.3)] flex items-center justify-center gap-2"
              >
                Book a Demo <ArrowRight size={18} />
              </button>
              <button 
                onClick={openModal}
                className="w-full sm:w-auto bg-white border border-gray-300 text-gray-800 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all shadow-sm"
              >
                Talk to an Expert
              </button>
            </div>
          </motion.div>

          {/* Product Visual as Background */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[600px] lg:max-w-[700px] lg:absolute lg:right-0 xl:right-[2%] lg:top-1/2 lg:-translate-y-1/2 lg:w-[50%] xl:w-[45%] z-0 pointer-events-none lg:pointer-events-auto mt-8 lg:mt-0"
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-[4/3]">
              {/* Fade Mask for seamless blending with background */}
              <div className="hidden lg:block absolute inset-y-0 left-[-10%] w-[30%] bg-gradient-to-r from-[#fbfdfa] via-[#fbfdfa]/80 to-transparent z-20 pointer-events-none" />
              
              <div className="absolute inset-0 bg-gradient-to-tr from-[#006e1c]/20 to-transparent blur-[80px] rounded-full" />
              
              {/* Abstract Dashboard Mockup */}
              <div className="relative z-10 w-full h-full bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col transform lg:rotate-[-2deg] lg:hover:rotate-0 transition-transform duration-700">
                
                {/* Animated Floating Notification */}
                <motion.div 
                  initial={{ opacity: 0, y: 20, x: -30 }}
                  animate={{ opacity: 1, y: [0, -10, 0], x: -30 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-6 top-1/4 bg-white p-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-3 z-30 pointer-events-none hidden lg:flex"
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle size={14} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-800">Payroll Processed</div>
                    <div className="text-[10px] text-gray-500">Just now</div>
                  </div>
                </motion.div>

                {/* Mockup Header */}
                <div className="h-10 border-b border-gray-100 flex items-center justify-between px-4 bg-gray-50/80 shrink-0">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Live System</div>
                  </div>
                </div>
                
                {/* Mockup Body */}
                <div className="flex-1 p-4 grid grid-cols-3 gap-4 overflow-hidden bg-gray-50/30">
                  
                  {/* Left Sidebar equivalent */}
                  <div className="col-span-1 flex flex-col gap-4">
                    {/* User Profile */}
                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 shrink-0">
                      <div className="w-8 h-8 rounded-full bg-[#e6f0e8] flex items-center justify-center text-[#006e1c]">
                        <Users size={14} />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-full bg-gray-200 rounded-full mb-2" />
                        <div className="h-1.5 w-2/3 bg-gray-100 rounded-full" />
                      </div>
                    </div>
                    
                    {/* Menu Items */}
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex-1 flex flex-col gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-md flex items-center justify-center ${i === 1 ? 'bg-[#006e1c]/10 text-[#006e1c]' : 'bg-gray-50 text-gray-400'}`}>
                            {i === 1 ? <Activity size={12} /> : i === 2 ? <Users size={12} /> : i === 3 ? <Briefcase size={12} /> : <Calendar size={12} />}
                          </div>
                          <motion.div 
                            animate={i === 1 ? { opacity: [1, 0.5, 1] } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                            className={`h-2 rounded-full ${i === 1 ? 'bg-[#006e1c] w-full' : 'bg-gray-200 w-4/5'}`} 
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Main Content Area */}
                  <div className="col-span-2 flex flex-col gap-4">
                    
                    {/* Top Stats */}
                    <div className="flex gap-2 xl:gap-4 shrink-0">
                      {/* Stat 1: Donut Chart */}
                      <div className="flex-1 bg-white p-3 xl:p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 xl:gap-3">
                        <div className="relative w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center shrink-0">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 48 48">
                            <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-gray-100" />
                            <motion.circle 
                              cx="24" cy="24" r="20" 
                              stroke="currentColor" 
                              strokeWidth="6" 
                              fill="transparent" 
                              strokeDasharray="125"
                              initial={{ strokeDashoffset: 125 }}
                              animate={{ strokeDashoffset: [125, 30, 45, 30] }}
                              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                              className="text-[#006e1c]" 
                            />
                          </svg>
                          <span className="absolute text-[9px] xl:text-[10px] font-bold text-gray-800">76%</span>
                        </div>
                        <div className="flex-1">
                          <div className="h-1.5 w-1/2 bg-gray-300 rounded-full mb-2" />
                          <div className="h-2.5 xl:h-3 w-3/4 bg-gray-800 rounded-full" />
                        </div>
                      </div>
                      
                      {/* Stat 2: Number */}
                      <div className="flex-1 bg-white p-3 xl:p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-center relative overflow-hidden">
                         <div className="h-1.5 w-1/2 bg-gray-300 rounded-full mb-2 xl:mb-3" />
                         <div className="text-xl xl:text-2xl font-black text-[#006e1c] leading-none">1,248</div>
                         <motion.div 
                           animate={{ x: [-100, 200] }}
                           transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                           className="absolute top-0 bottom-0 w-8 bg-white/50 skew-x-[30deg] z-10 blur-sm" 
                         />
                      </div>
                    </div>
                    
                    {/* Main Chart Area */}
                    <div className="flex-1 bg-white p-4 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden flex flex-col">
                       <div className="flex justify-between items-center mb-4 relative z-10">
                         <div className="h-2 w-1/3 bg-gray-800 rounded-full" />
                         <div className="h-2 w-1/6 bg-gray-200 rounded-full" />
                       </div>
                       
                       {/* CSS Bar Chart */}
                       <div className="flex-1 flex items-end gap-2 px-2 mt-2 relative z-10">
                         {[40, 70, 45, 90, 65, 80, 55, 100].map((height, i) => (
                           <div key={i} className="flex-1 flex flex-col justify-end items-center gap-2 h-full">
                             <motion.div 
                               initial={{ height: `${height}%` }}
                               animate={{ height: [`${height}%`, `${Math.max(20, height - (i%2==0?20:-15))}%`, `${height}%`] }}
                               transition={{ duration: 3 + (i * 0.4), repeat: Infinity, ease: "easeInOut" }}
                               className={`w-full rounded-t-sm transition-colors duration-1000 ${i === 7 ? 'bg-[#006e1c]' : 'bg-gray-200 hover:bg-gray-300'}`}
                             />
                           </div>
                         ))}
                       </div>
                       
                       <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-[#006e1c]/5 to-transparent pointer-events-none z-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
