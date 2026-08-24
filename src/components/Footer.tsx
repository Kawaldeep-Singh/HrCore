"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

const FacebookIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const TwitterIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const LinkedinIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const InstagramIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

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
    <footer className="bg-[#041208] text-gray-400 pt-24 pb-8 relative overflow-hidden border-t border-white/10">
      {/* Giant Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <h1 className="text-[20vw] font-black text-white whitespace-nowrap">HR CORE</h1>
      </div>

      {/* Top Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-[#a3e635]/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-[1400px] mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">

          {/* Brand Column (Takes 2 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-2 pr-0 lg:pr-8">
            <Link href="/" className="inline-block mb-6 hover:opacity-80 transition-opacity">
              <Logo width={200} height={50} />
            </Link>

            <p className="text-gray-400 text-base mb-8 leading-relaxed font-medium">
              Powering smarter HR with technology, payroll expertise, and professional HR services.
            </p>

            <div className="flex gap-4">
              {[FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#a3e635]/20 hover:border-[#a3e635]/50 hover:text-[#a3e635] transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* HRMS Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              HRMS
            </h4>
            <ul className="space-y-3">
              {["HRMS Overview", "Features", "HRMS Portal", "Employee App", "Why HRMS", "Book a Demo"].map((item) => (
                <li key={item}>
                  <Link href="#" className="group flex items-center text-gray-400 hover:text-[#a3e635] transition-colors">
                    <span className="text-sm font-medium">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Payroll & HR Services Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              Payroll & HR Services
            </h4>
            <ul className="space-y-3">
              {["Payroll Services", "HR Services", "Recruitment", "HR Operations", "HR Compliance", "HR Consulting"].map((item) => (
                <li key={item}>
                  <Link href="#" className="group flex items-center text-gray-400 hover:text-[#a3e635] transition-colors">
                    <span className="text-sm font-medium">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Contact Us", "Careers"].map((item) => (
                <li key={item}>
                  <Link href="#" className="group flex items-center text-gray-400 hover:text-[#a3e635] transition-colors">
                    <span className="text-sm font-medium">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Get in Touch Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              {["Talk to an Expert", "Book a Demo"].map((item) => (
                <li key={item}>
                  <Link href="#" className="group flex items-center text-gray-400 hover:text-[#a3e635] transition-colors">
                    <span className="text-sm font-medium">{item}</span>
                    <ArrowRight size={14} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-[#a3e635] transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-sm text-gray-500 font-medium">© 2026 HR Core. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-gray-500 font-medium">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="w-1 h-1 rounded-full bg-gray-700"></span>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="w-1 h-1 rounded-full bg-gray-700"></span>
            <Link href="#" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
