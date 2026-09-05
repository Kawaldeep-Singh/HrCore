"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, CheckCircle, IndianRupee, Clock } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export function PayrollHero() {
  const { openModal } = useModal();

  return (
    <section className="relative pt-12 pb-16 md:pt-14 md:pb-24 lg:min-h-[85vh] flex flex-col justify-center bg-[#fbfdfa] overflow-hidden mt-[45px] md:mt-0">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#006e1c]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#003b0f]/10 rounded-full blur-[100px]" />
      </div>

      <div className="w-[82%] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row relative items-center gap-16 lg:gap-8">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left relative z-20 lg:py-20"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#e6f0e8] border border-[#006e1c]/40 text-[#003b0f] text-sm font-semibold mb-6">
              PAYROLL SERVICES
            </div>
            <div className="mb-6 font-bold tracking-tight text-[#041208] flex flex-col w-full">
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] w-full">
                <span className="block">Payroll Made Simple.</span>
                <span className="block mt-2">Accurate. Reliable.</span>
              </h1>
            </div>
            <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              From salary processing and payslips to compliance and employee support, we take care of your payroll so you can focus on your business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <button 
                onClick={openModal}
                className="w-full sm:w-auto bg-[#006e1c] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#005a17] hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(0,110,28,0.3)] flex items-center justify-center gap-2"
              >
                Book a Consultation <ArrowRight size={18} />
              </button>
              <button 
                onClick={openModal}
                className="w-full sm:w-auto bg-white border border-gray-300 text-gray-800 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all shadow-sm"
              >
                Talk to an Expert
              </button>
            </div>
          </motion.div>

          {/* Product Visual as Background / Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[50%] z-0 relative mt-8 lg:mt-0 perspective-1000"
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[600px] flex items-center justify-center transform lg:rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
              
              <div className="absolute inset-0 bg-gradient-to-tr from-[#006e1c]/10 to-transparent blur-[80px] rounded-full" />
              
              {/* Abstract Payslip / Salary Mockup */}
              <div className="relative z-10 w-[90%] max-w-[500px] bg-white border border-gray-200 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col">
                
                {/* Header */}
                <div className="h-16 border-b border-gray-100 flex items-center justify-between px-6 bg-gray-50/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#006e1c]/10 flex items-center justify-center text-[#006e1c]">
                      <FileText size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-800">Salary Slip</div>
                      <div className="text-xs text-gray-500">October 2026</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full border border-green-100 text-green-700 text-xs font-semibold">
                    <CheckCircle size={12} />
                    Processed
                  </div>
                </div>
                
                {/* Body */}
                <div className="p-6 bg-white flex flex-col gap-6">
                  {/* Employee Info */}
                  <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                    <div className="flex flex-col gap-1.5">
                      <div className="h-2 w-24 bg-gray-200 rounded-full" />
                      <div className="h-4 w-40 bg-gray-800 rounded-full" />
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <div className="h-2 w-16 bg-gray-200 rounded-full" />
                      <div className="h-3 w-20 bg-gray-400 rounded-full" />
                    </div>
                  </div>

                  {/* Earnings & Deductions */}
                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col gap-4">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Earnings</div>
                      {[1, 2, 3].map((i) => (
                        <div key={`earning-${i}`} className="flex justify-between items-center">
                          <div className={`h-2 rounded-full bg-gray-200 ${i === 1 ? 'w-20' : i === 2 ? 'w-16' : 'w-24'}`} />
                          <div className={`h-2.5 rounded-full bg-gray-800 ${i === 1 ? 'w-16' : i === 2 ? 'w-12' : 'w-14'}`} />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Deductions</div>
                      {[1, 2].map((i) => (
                        <div key={`deduction-${i}`} className="flex justify-between items-center">
                          <div className={`h-2 rounded-full bg-gray-200 ${i === 1 ? 'w-16' : 'w-12'}`} />
                          <div className={`h-2.5 rounded-full bg-red-400 ${i === 1 ? 'w-10' : 'w-8'}`} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Total Net Pay */}
                  <div className="mt-2 pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="text-sm font-bold text-gray-500">Net Pay</div>
                    <div className="flex items-center gap-2">
                      <IndianRupee size={24} className="text-[#006e1c]" />
                      <motion.div 
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                        className="text-3xl font-black text-[#006e1c] tracking-tight"
                      >
                        1,45,000
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Compliance Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20, x: 20 }}
                animate={{ opacity: 1, y: [0, -10, 0], x: 20 }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 lg:-right-8 bottom-12 bg-white p-4 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col gap-2 z-30 w-48"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Compliance Active
                </div>
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span>PF Remittance</span>
                  <CheckCircle size={14} className="text-green-500" />
                </div>
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span>TDS Filed</span>
                  <CheckCircle size={14} className="text-green-500" />
                </div>
              </motion.div>
              
              {/* Floating Process Card */}
               <motion.div 
                initial={{ opacity: 0, y: -20, x: -20 }}
                animate={{ opacity: 1, y: [0, 10, 0], x: -20 }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-4 lg:-left-8 top-12 bg-[#003b0f] p-4 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.2)] border border-[#006e1c]/30 flex items-center gap-3 z-30"
              >
                <div className="w-10 h-10 rounded-full bg-[#006e1c]/30 flex items-center justify-center text-white">
                  <Clock size={18} />
                </div>
                <div>
                   <div className="text-xs text-green-100/70 font-medium">On-time Processing</div>
                   <div className="text-sm font-bold text-white">100% Accuracy</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
