"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Users, FileText, Calendar, ShieldCheck, Briefcase, DollarSign, Target, Heart } from "lucide-react";

const features = [
  {
    title: "Core HR",
    description: "Flexibility to customize your HRMS to meet the specific requirements of your organization.",
    icon: Users,
    size: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
  },
  {
    title: "Recruitment",
    description: "Make faster and better hiring possible and enhance candidate experience.",
    icon: Briefcase,
    size: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    title: "Workforce",
    description: "Take control of your employee journey at each stage from entry to exit.",
    icon: Target,
    size: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    title: "Attendance",
    description: "Simplify attendance and leave management with integrated HRMS.",
    icon: Calendar,
    size: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    title: "Payroll & Expense",
    description: "Ensure compliant, error-free payroll and leave no room for double entry.",
    icon: DollarSign,
    size: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    title: "Performance",
    description: "Create high-performing teams by smart goal mapping and transparent reviews.",
    icon: FileText,
    size: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    title: "Engagement & Helpdesk",
    description: "Amplify human interactions and enhance employee experience.",
    icon: Heart,
    size: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    title: "Safety & Privacy",
    description: "Safeguarding employee information, aligning technology with privacy.",
    icon: ShieldCheck,
    size: "col-span-1 md:col-span-2 lg:col-span-2",
  },
];

export function FeaturesGrid2() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section id="features" className="py-32 bg-white relative overflow-hidden min-h-screen flex items-center border-t border-gray-100">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white pointer-events-none" />

      {/* Abstract Orbs */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gray-100 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 pointer-events-none">
        <div className="text-center max-w-4xl mx-auto mb-20 pointer-events-auto">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-6 shadow-sm"
          >
             <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
             <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Features</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight text-black mb-6"
          >
            127 Automated HR Processes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto"
          >
            HR software that streamlines the Hire-to-Retire process, automating recruitment, payroll, and performance management to boost HR efficiency.
          </motion.p>
        </div>

        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 pointer-events-auto relative"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" as any }}
              className={`group relative overflow-hidden rounded-[2rem] bg-black border border-gray-800 p-8 transition-all hover:border-gray-700 shadow-2xl ${feature.size}`}
            >
              {/* Premium Mouse Glow Effect (White/Light on dark glass) */}
              <div 
                className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`
                }}
              />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-inner">
                  <feature.icon className="text-white group-hover:text-primary transition-colors" size={28} strokeWidth={2} />
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-3xl font-extrabold text-white mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-white/70 text-lg leading-relaxed font-medium">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
