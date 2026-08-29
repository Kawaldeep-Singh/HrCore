"use client";

import { motion } from "framer-motion";
import { 
  Calculator, 
  CalendarCheck, 
  Receipt, 
  ShieldCheck, 
  FileText, 
  RefreshCcw, 
  LogOut, 
  HeadphonesIcon 
} from "lucide-react";

export function PayrollServices() {
  const services = [
    {
      title: "Salary Processing",
      description: "Accurate and timely salary processing based on your payroll structure and employee data.",
      icon: Calculator,
      delay: 0.1
    },
    {
      title: "Attendance & Leave Inputs",
      description: "Bring attendance, leave, working days, and other payroll inputs together for accurate calculations.",
      icon: CalendarCheck,
      delay: 0.2
    },
    {
      title: "Deductions & Taxes",
      description: "Manage applicable deductions, taxes, and salary components with accuracy.",
      icon: Receipt,
      delay: 0.3
    },
    {
      title: "Statutory Compliance",
      description: "Stay on top of payroll-related statutory requirements and compliance processes.",
      icon: ShieldCheck,
      delay: 0.4
    },
    {
      title: "Payslips & Reports",
      description: "Generate clear payslips and payroll reports for employees, HR, and management.",
      icon: FileText,
      delay: 0.5
    },
    {
      title: "Reimbursements & Adjustments",
      description: "Handle reimbursements, deductions, incentives, and other payroll adjustments with ease.",
      icon: RefreshCcw,
      delay: 0.6
    },
    {
      title: "Full & Final Settlement",
      description: "Manage employee exit settlements with the right calculations and documentation.",
      icon: LogOut,
      delay: 0.7
    },
    {
      title: "Employee Support",
      description: "Help employees with payroll queries, payslips, salary details, and other payroll-related needs.",
      icon: HeadphonesIcon,
      delay: 0.8
    }
  ];

  return (
    <section className="py-24 bg-[#fbfdfa] relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#006e1c]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="w-[82%] mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#041208] mb-6"
          >
            Everything Your Payroll Needs
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-[#006e1c] mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#006e1c]/30 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center h-full"
            >
              <div className="flex flex-col items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#e6f0e8] text-[#006e1c] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#006e1c] group-hover:text-white transition-all duration-300 shadow-sm">
                  <service.icon size={28} />
                </div>
                <div className="text-xs font-black text-gray-300 uppercase tracking-widest mt-1">STEP 0{index + 1}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#006e1c] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm flex-1">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
