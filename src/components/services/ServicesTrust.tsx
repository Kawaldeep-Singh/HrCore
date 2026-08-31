"use client";

import { motion } from "framer-motion";

export function ServicesTrust() {
  const stats = [
    { label: "Businesses Served", value: "200+" },
    { label: "Employees Supported", value: "10,000+" },
    { label: "Years of HR Expertise", value: "15+" },
    { label: "HR Processes Managed", value: "50,000+" }
  ];

  const logos = [1, 2, 3, 4, 5, 6];

  return (
    <section className="py-24 bg-[#f8fcf9]">
      <div className="w-[82%] mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-4"
          >
            HR You Can Count On.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg"
          >
            Trusted by growing businesses to handle their most important asset — their people.
          </motion.p>
        </div>

        {/* Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white p-8 rounded-3xl border border-gray-100 text-center hover:border-[#16a34a]/30 hover:shadow-[0_8px_30px_rgba(22,163,74,0.12)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-[#16a34a] mb-2 transition-transform duration-500 group-hover:scale-110">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium text-sm md:text-base group-hover:text-gray-900 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos Marquee (Placeholder for actual logos) */}
        <div className="border-t border-gray-200 pt-16">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">
            Trusted by innovative teams
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((logo) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: logo * 0.1 }}
                className="w-24 md:w-32 h-12 bg-gray-200 rounded-lg animate-pulse"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
