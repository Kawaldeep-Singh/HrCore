"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

const ArrowRight = ({ className = "", size = 16 }: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export function HeroSection2() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start px-6 pt-32 pb-20 md:pt-40 bg-brand-gradient overflow-hidden text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      
      {/* Abstract Glowing Orbs (HR Core Theme) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/50 rounded-full blur-[120px] pointer-events-none" />

      <motion.aside 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-8 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm max-w-full"
      >
        <span className="text-xs text-center whitespace-nowrap text-gray-400">
          Introducing HR Core V2
        </span>
        <a
          href="#new-version"
          className="flex items-center gap-1 text-xs hover:text-white transition-all active:scale-95 whitespace-nowrap text-gray-400"
          aria-label="Read more about the new version"
        >
          Read more
          <ArrowRight size={12} />
        </a>
      </motion.aside>

      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" as any }}
        className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-medium text-center max-w-3xl px-6 leading-tight mb-6"
        style={{
          background: "linear-gradient(to bottom, #ffffff, #ffffff, rgba(255, 255, 255, 0.6))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-0.05em"
        }}
      >
        Transform your HR with <br />Absolute Clarity
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 text-sm md:text-base text-center max-w-2xl px-6 mb-10 text-gray-400"
      >
        A powerfully simple, beautifully designed platform that unites recruitment, payroll, and performance into one seamless experience.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex items-center gap-4 relative z-10 mb-16"
      >
        <Button
          type="button"
          size="lg"
          className="rounded-lg flex items-center justify-center bg-gradient-to-b from-white via-white/95 to-white/60 text-black hover:scale-105 active:scale-95 transition-all h-12 px-8 text-base font-medium border-0"
        >
          Start your free trial
        </Button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full max-w-5xl relative pb-20"
      >
        <div
          className="absolute left-1/2 w-[90%] pointer-events-none z-0"
          style={{
            top: "-23%",
            transform: "translateX(-50%)"
          }}
          aria-hidden="true"
        >
          <img
            src="https://i.postimg.cc/Ss6yShGy/glows.png"
            alt=""
            className="w-full h-auto"
            loading="eager"
          />
        </div>
        
        <div className="relative z-10">
          <img
            src="https://i.postimg.cc/SKcdVTr1/Dashboard2.png"
            alt="Dashboard preview showing analytics and metrics interface"
            className="w-full h-auto rounded-lg shadow-2xl"
            loading="eager"
          />
        </div>
      </motion.div>
    </section>
  );
}

