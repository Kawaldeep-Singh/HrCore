"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Briefcase, Code, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as any } },
  };

  return (
    <footer className="bg-background text-gray-400 pt-24 pb-12 relative overflow-hidden border-t border-primary/20">
      {/* Giant Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
        <h1 className="text-[20vw] font-black text-white whitespace-nowrap">HR CORE</h1>
      </div>
      
      {/* Top Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-primary/10 rounded-[100%] blur-[120px] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 md:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand & Contact (Left Side - Wider) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 pr-0 lg:pr-12">
            <Link href="/" className="inline-block mb-8 hover:opacity-80 transition-opacity">
              <Logo width={280} height={70} />
            </Link>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed font-medium">
              100% Trusted Partner for HR Excellence. Enhancing Human Resources Capabilities and Achieving Business Success worldwide.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-primary/10 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <p className="text-sm font-medium pt-1">First Floor, Khasra No. 474,<br/>Major Asharam Tyagi Marg,<br/>Saddiq Nagar, Sihani, Ghaziabad, UP – 201001</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-primary/10 hover:border-primary/30 transition-colors">
                  <Phone size={18} className="text-primary shrink-0" />
                  <p className="text-sm font-medium text-white">+91-9211042767</p>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-primary/10 hover:border-primary/30 transition-colors">
                  <Mail size={18} className="text-primary shrink-0" />
                  <p className="text-sm font-medium text-white">sales@hrcore.in</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Links (Right Side) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-4">
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Product
              </h4>
              <ul className="space-y-4">
                {["Features", "Payroll", "Attendance", "Recruitment"].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase()}`} className="group flex items-center text-gray-400 hover:text-white transition-colors">
                      <span className="text-sm font-medium">{item}</span>
                      <ArrowRight size={14} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-primary transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Company
              </h4>
              <ul className="space-y-4">
                {["About Us", "Our Vision", "Careers", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="group flex items-center text-gray-400 hover:text-white transition-colors">
                      <span className="text-sm font-medium">{item}</span>
                      <ArrowRight size={14} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-primary transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Legal
              </h4>
              <ul className="space-y-4">
                {["Privacy Policy", "Terms of Service", "Security"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="group flex items-center text-gray-400 hover:text-white transition-colors">
                      <span className="text-sm font-medium">{item}</span>
                      <ArrowRight size={14} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-primary transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="pt-8 border-t border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-sm text-gray-500 font-medium">© {new Date().getFullYear()} HR Core. All rights reserved.</p>
          <div className="flex gap-4">
            {[MessageCircle, Briefcase, Code].map((Icon, i) => (
              <a 
                key={i}
                href="#" 
                className="w-10 h-10 rounded-full bg-card border border-primary/10 flex items-center justify-center text-gray-400 hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
