"use client";

import { motion } from "framer-motion";
import { MessageSquare, Mail, Calendar, Video, PenTool, Cloud, Code } from "lucide-react";

export function Integrations2() {
  const tools = [
    { name: "Slack", icon: MessageSquare, color: "text-[#E01E5A]" },
    { name: "Outlook", icon: Mail, color: "text-[#0078D4]" },
    { name: "Google Calendar", icon: Calendar, color: "text-[#4285F4]" },
    { name: "Zoom", icon: Video, color: "text-[#2D8CFF]" },
    { name: "Figma", icon: PenTool, color: "text-[#F24E1E]" },
    { name: "Salesforce", icon: Cloud, color: "text-[#00A1E0]" },
    { name: "GitHub", icon: Code, color: "text-white" },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden border-t border-gray-200">
      {/* Background Overlay */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 overflow-hidden lg:overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          
          {/* Left Side: Text Content */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0 pt-12 lg:pt-0">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-6 shadow-sm"
            >
               <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
               <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Integrations</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-black mb-6 drop-shadow-sm leading-[1.1]"
            >
              Integrate with your <span className="text-black drop-shadow-md relative inline-block">existing tools</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              HR Core connects seamlessly with the software your team already uses every day, unifying your entire workflow into a single command center.
            </motion.p>
          </div>

          {/* Right Side: 3D Isometric Orbit */}
          <div className="relative w-full h-[500px] lg:h-[700px] flex items-center justify-center" style={{ perspective: 2000 }}>
            <motion.div
              animate={{ rotateX: [60, 64, 60], rotateY: [-15, -10, -15], rotateZ: [0, 2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-[350px] h-[350px] md:w-[700px] md:h-[700px] flex items-center justify-center lg:translate-x-32"
            >
              {/* Central Hub - Elevated in 3D space */}
              <div
                style={{ transform: "translateZ(80px)" }}
                className="absolute z-30 w-28 h-28 md:w-36 md:h-36 rounded-[2rem] bg-black shadow-[0_40px_80px_rgba(0,0,0,0.4)] flex items-center justify-center border border-gray-800"
              >
                 <span className="text-white font-black text-5xl md:text-7xl drop-shadow-xl">H</span>
              </div>

              {/* Inner Decorative Rings */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[70%] h-[70%] rounded-full border-[2px] border-dashed border-gray-300/60"
              />
              <div className="absolute w-[45%] h-[45%] rounded-full border border-gray-300/40" />

              {/* Marquee Orbit Ring (Outer) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                style={{ transformStyle: "preserve-3d" }}
                className="absolute w-full h-full rounded-full border-[3px] border-gray-200/80"
              >
                 {tools.map((tool, index) => {
                   const angle = (index / tools.length) * 360;
                   return (
                     <div
                       key={tool.name}
                       className="absolute w-full h-full"
                       style={{ transform: `rotate(${angle}deg)`, transformStyle: "preserve-3d" }}
                     >
                       <motion.div
                         className="absolute top-0 left-1/2 -ml-8 -mt-8 md:-ml-12 md:-mt-12 w-16 h-16 md:w-24 md:h-24 bg-white rounded-2xl md:rounded-[1.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-gray-100 flex items-center justify-center"
                         initial={{ rotate: -angle }}
                         animate={{ rotate: -angle - 360 }}
                         transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                         style={{ transform: "translateZ(20px)" }}
                       >
                         <tool.icon className={tool.color === "text-white" ? "text-gray-900" : tool.color} size={36} strokeWidth={2.5} />
                       </motion.div>
                     </div>
                   );
                 })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
