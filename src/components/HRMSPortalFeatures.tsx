"use client";

import { motion } from "framer-motion";

export function HRMSPortalFeatures() {
  const leftFeatures = [
    { num: "01", title: "Hire to Retire", desc: "Complete employee journey" },
    { num: "02", title: "Time to Leave", desc: "Attendance & leave management" },
    { num: "03", title: "Recruit to Onboard", desc: "Hiring made simple" },
    { num: "04", title: "Payroll to Compliance", desc: "Payroll & statutory needs" },
    { num: "05", title: "Learn & Grow", desc: "Training & development" },
  ];

  const rightFeatures = [
    { num: "06", title: "Self-Service HR", desc: "Employee access & requests" },
    { num: "07", title: "Goals to Growth", desc: "Performance management" },
    { num: "08", title: "Spend to Reimburse", desc: "Expenses & claims" },
    { num: "09", title: "Data to Decisions", desc: "Reports & insights" },
    { num: "10", title: "Connect & Support", desc: "HR communication & support" },
  ];

  return (
    <section className="py-24 px-6 bg-[#f8fafc] overflow-hidden text-gray-900 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Meet Our Powerful HRMS Portal
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From <strong className="text-gray-900">Hire to Retire.</strong> Manage your complete employee journey with simple, smart tools that make everyday HR easier.
          </p>
        </motion.div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

          {/* Left Features */}
          <div className="lg:col-span-3 flex flex-col gap-8 md:gap-10 order-2 lg:order-1 text-center lg:text-right">
            {leftFeatures.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col gap-1 group"
              >
                <div className="flex items-center justify-center lg:justify-end gap-3 text-[#16a34a] font-bold text-lg mb-1">
                  <span>{item.num}</span>
                  <span className="w-8 h-[2px] bg-[#16a34a]/50 group-hover:w-12 transition-all duration-300"></span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#16a34a] transition-colors">{item.title}</h3>
                <p className="text-gray-600 font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 order-1 lg:order-2 w-full relative group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#16a34a]/10 blur-[120px] rounded-full transform scale-75 group-hover:bg-[#16a34a]/20 transition-all duration-700 pointer-events-none" />

            <div className="relative z-10 rounded-2xl md:rounded-[2rem] overflow-hidden border border-gray-200 shadow-2xl bg-white hover:shadow-xl transition-shadow duration-500">
              <div className="bg-gray-100 border-b border-gray-200 h-10 w-full flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <img
                src="/hero-dashboard.png"
                alt="HR Core Portal Dashboard"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Right Features */}
          <div className="lg:col-span-3 flex flex-col gap-8 md:gap-10 order-3 text-center lg:text-left">
            {rightFeatures.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col gap-1 group"
              >
                <div className="flex items-center justify-center lg:justify-start gap-3 text-[#16a34a] font-bold text-lg mb-1">
                  <span className="w-8 h-[2px] bg-[#16a34a]/50 group-hover:w-12 transition-all duration-300"></span>
                  <span>{item.num}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#16a34a] transition-colors">{item.title}</h3>
                <p className="text-gray-600 font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
