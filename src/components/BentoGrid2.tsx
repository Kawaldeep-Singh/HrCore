"use client";

import { motion } from "framer-motion";
import { Users, Lightbulb, CheckCircle, Shield } from "lucide-react";

export function BentoGrid2() {
  const pillars = [
    {
      letter: "C",
      title: "Coordination",
      description: "Helps prevent conflicts, minimize inefficiencies, and enhance overall productivity.",
      icon: Users,
    },
    {
      letter: "O",
      title: "Overcoming",
      description: "Being flexible in approach and adjusting as needed to succeed.",
      icon: Lightbulb,
    },
    {
      letter: "R",
      title: "Receptive",
      description: "Open and willing to accept new ideas or suggestions from our partners.",
      icon: CheckCircle,
    },
    {
      letter: "E",
      title: "Eminent",
      description: "Respected and recognized for moral integrity and ethical behaviour.",
      icon: Shield,
    }
  ];

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/10">
      {/* Background Overlay */}
      <div className="absolute inset-0 pointer-events-none" />

      {/* Abstract Orbs */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 mb-6 shadow-xl"
          >
             <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
             <span className="text-xs font-bold text-white uppercase tracking-wider">Values</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 drop-shadow-lg"
          >
            Our <span className="text-white drop-shadow-2xl">CORE</span> Pillars
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 font-medium max-w-3xl mx-auto drop-shadow-md"
          >
            Fostering Development, Enabling Connection. Encourage Growth, Bestow Sharing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
             <motion.div
               key={pillar.title}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" as any }}
               className="group relative h-[420px] rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 overflow-hidden flex flex-col justify-end p-8 hover:border-primary/50 hover:bg-white/10 transition-all duration-500 shadow-2xl"
             >
               {/* Giant Background Letter - Darkened to blend with glass */}
               <div className="absolute top-0 right-4 pointer-events-none select-none transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-4 group-hover:translate-x-2">
                 <span className="text-[240px] font-black text-white/5 leading-none drop-shadow-sm">{pillar.letter}</span>
               </div>
               
               {/* Hover Gradient Glow */}
               <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

               <div className="relative z-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                 <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:border-white/50 group-hover:bg-white/20 transition-all duration-300 relative overflow-hidden shadow-inner">
                   <pillar.icon className="text-white relative z-10 transition-colors" size={28} strokeWidth={2} />
                 </div>
                 <h3 className="text-4xl font-extrabold text-white mb-3 flex items-baseline gap-2 tracking-tight">
                   <span className="text-white drop-shadow-md">{pillar.letter}</span>
                   {pillar.title.slice(1)}
                 </h3>
                 <p className="text-white/70 text-lg leading-relaxed font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-[110px]">
                   {pillar.description}
                 </p>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
