"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export function ServicesFinalCta() {
  return (
    <section className="py-24 bg-[#05160c] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#16a34a] opacity-[0.08] blur-[120px] pointer-events-none rounded-full" />
      
      <div className="w-[82%] max-w-4xl mx-auto text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#082212] border border-[#16a34a]/20 p-10 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
        >
          {/* Decorative lines inside box */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:10px_10px]" />
          
          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#16a34a] font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Ready To Make HR Easier?
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold mb-6 text-white"
            >
              Let Our HR Experts <br className="hidden md:block" />
              Take It From Here.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            >
              Whether you need support with hiring, HR operations, compliance, or the complete employee journey, HR Core is here to help.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link 
                href="/contact-us"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#16a34a] hover:bg-[#15803d] text-white rounded-full font-bold transition-all duration-300 shadow-[0_4px_14px_0_rgba(22,163,74,0.39)] hover:shadow-[0_6px_20px_rgba(22,163,74,0.23)] hover:-translate-y-1"
              >
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/contact-us"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border border-gray-600 hover:border-gray-400 text-white rounded-full font-bold transition-all duration-300 hover:bg-white/5"
              >
                <PhoneCall className="mr-2 w-5 h-5 text-[#16a34a]" /> Talk to an Expert
              </Link>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
