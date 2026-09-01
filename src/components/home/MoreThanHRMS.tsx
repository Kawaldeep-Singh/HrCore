"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calculator, Users } from "lucide-react";

export function MoreThanHRMS() {
  const services = [
    {
      title: "Payroll Services",
      desc: "Payroll, handled with expertise.",
      icon: <Calculator size={32} className="text-[#16a34a]" />,
      href: "/payroll",
    },
    {
      title: "HR Services",
      desc: "People, processes, and HR expertise.",
      icon: <Users size={32} className="text-[#16a34a]" />,
      href: "/services",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#f8fafc] text-gray-900 border-t border-gray-200 relative">
      <div className="w-[82%] mx-auto flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[#16a34a] font-bold tracking-wider uppercase text-sm mb-4 block">
            MORE THAN HRMS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            We Bring Technology & <br className="hidden md:block"/>Expertise Together.
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Powerful HR technology at your fingertips, backed by the people and expertise to support the rest of your HR needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {services.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative bg-white hover:bg-gray-50 border border-gray-200 p-8 md:p-10 rounded-3xl transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden flex flex-col text-left"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 group-hover:rotate-12 duration-500">
                {item.icon}
              </div>
              
              <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 text-lg font-medium mb-8 flex-1">{item.desc}</p>
              
              <Link href={item.href} className="inline-flex items-center gap-2 text-[#16a34a] font-semibold text-lg hover:gap-4 transition-all w-fit">
                Explore <ArrowRight size={20} />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
