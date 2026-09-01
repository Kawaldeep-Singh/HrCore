"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export function PayrollCTA() {
  const { openModal } = useModal();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="w-[82%] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#003b0f] to-[#006e1c] rounded-[2.5rem] p-10 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Abstract Background Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-[60px] pointer-events-none -translate-x-1/4 translate-y-1/4" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Take Payroll Off Your Plate?
            </h2>
            <p className="text-xl text-green-100 font-medium mb-4">
              Let Us Handle the Payroll. You Focus on Your Business.
            </p>
            <p className="text-green-50/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Talk to our payroll experts and see how HR Core can make your payroll simpler, more accurate, and easier to manage.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={openModal}
                className="w-full sm:w-auto bg-white text-[#006e1c] font-bold px-8 py-4 rounded-xl hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} /> Talk to an Expert
              </button>
              <button 
                onClick={openModal}
                className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
