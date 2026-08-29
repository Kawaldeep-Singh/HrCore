"use client";

import { motion } from "framer-motion";
import { TrendingUp, Building2, Building } from "lucide-react";

export function PayrollAudience() {
  const audiences = [
    {
      title: "Growing Businesses",
      description: "Reliable payroll without building a large payroll team.",
      icon: TrendingUp,
      color: "from-blue-500/20 to-transparent",
      iconColor: "text-blue-600"
    },
    {
      title: "Mid-Sized Businesses",
      description: "Streamlined payroll and compliance support as your workforce grows.",
      icon: Building,
      color: "from-[#006e1c]/20 to-transparent",
      iconColor: "text-[#006e1c]",
      featured: true
    },
    {
      title: "Larger Organizations",
      description: "Structured payroll processes with dedicated expertise and support.",
      icon: Building2,
      color: "from-purple-500/20 to-transparent",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="w-[82%] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#006e1c] font-bold text-sm tracking-widest uppercase mb-4"
          >
            Who We Serve
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#041208]"
          >
            Payroll Support That Fits Your Business
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative rounded-3xl overflow-hidden border transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${audience.featured ? 'border-[#006e1c] shadow-2xl scale-105 z-10 bg-white' : 'border-gray-200 shadow-sm bg-gray-50'}`}
            >
              <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${audience.color} pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity`} />
              
              <div className="p-8 md:p-10 flex flex-col items-center text-center relative z-10 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 ${audience.iconColor}`}>
                  <audience.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">{audience.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
