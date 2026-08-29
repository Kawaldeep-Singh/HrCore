"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Users, Building2, Award, CalendarSync } from "lucide-react";
import { useEffect, useRef } from "react";

function Counter({ from = 0, to, duration = 2, suffix = "" }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: duration, ease: "easeOut" });
    }
  }, [inView, count, to, duration]);

  return (
    <span ref={ref} className="inline-flex">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function PayrollStats() {
  const stats = [
    { value: 10000, suffix: "+", label: "Employees Processed", icon: Users },
    { value: 500, suffix: "+", label: "Businesses Served", icon: Building2 },
    { value: 10, suffix: "+", label: "Years of Expertise", icon: Award },
    { value: 1200, suffix: "+", label: "Payroll Cycles Managed", icon: CalendarSync }
  ];

  return (
    <section className="py-24 bg-[#0a1a0f] relative overflow-hidden">
       {/* Background Ornaments */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-[#006e1c]/20 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="w-[82%] mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#4cd964] font-bold text-sm tracking-widest uppercase mb-4"
          >
            Trust & Numbers
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Payroll You Can Count On.
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-[#4cd964] mb-6 group-hover:bg-[#006e1c] group-hover:text-white transition-all duration-300 backdrop-blur-sm border border-white/5 group-hover:shadow-[0_10px_30px_rgba(76,217,100,0.3)] group-hover:border-[#4cd964]/50">
                <stat.icon size={28} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight drop-shadow-sm flex items-center justify-center">
                <Counter to={stat.value} suffix={stat.suffix} duration={2 + index * 0.5} />
              </div>
              <div className="text-gray-400 font-medium group-hover:text-[#4cd964] transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
