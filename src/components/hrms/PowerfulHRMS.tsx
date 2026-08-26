"use client";

import { motion } from "framer-motion";
import { 
  Users, Clock, UserPlus, FileText, 
  BookOpen, Smartphone, Target, CreditCard, 
  PieChart, MessageCircle 
} from "lucide-react";

export function PowerfulHRMS() {
  const features = [
    {
      id: "01",
      title: "Hire to Retire",
      subtitle: "Complete employee journey",
      description: "Manage your people from onboarding to exit, with employee records, documents, roles, and everyday HR needs all in one place.",
      icon: Users
    },
    {
      id: "02",
      title: "Time to Leave",
      subtitle: "Attendance & leave management",
      description: "Track attendance, working hours, shifts, holidays, and leave with simple processes and easy approvals.",
      icon: Clock
    },
    {
      id: "03",
      title: "Recruit to Onboard",
      subtitle: "Hiring made simple",
      description: "Manage the hiring journey from candidates and selection to onboarding, making it easier to bring the right people on board.",
      icon: UserPlus
    },
    {
      id: "04",
      title: "Payroll to Compliance",
      subtitle: "Payroll made easier",
      description: "Manage salary processing, deductions, payslips, and compliance while keeping your payroll accurate and organized.",
      icon: FileText
    },
    {
      id: "05",
      title: "Learn & Grow",
      subtitle: "Training & development",
      description: "Create learning opportunities, manage training, and help your people build skills and grow with the business.",
      icon: BookOpen
    },
    {
      id: "06",
      title: "Self-Service HR",
      subtitle: "HR at their fingertips",
      description: "Give employees easy access to their profile, attendance, leave, payslips, requests, and other everyday HR needs.",
      icon: Smartphone
    },
    {
      id: "07",
      title: "Goals to Growth",
      subtitle: "Performance made simple",
      description: "Set goals, track progress, review performance, and help your people stay focused on their growth.",
      icon: Target
    },
    {
      id: "08",
      title: "Spend to Reimburse",
      subtitle: "Simple expense management",
      description: "Make it easy to submit, review, approve, and manage employee expenses and reimbursements.",
      icon: CreditCard
    },
    {
      id: "09",
      title: "Data to Decisions",
      subtitle: "Clear HR insights",
      description: "Bring your HR data together to create useful reports, understand your workforce, and make better decisions.",
      icon: PieChart
    },
    {
      id: "10",
      title: "Connect & Support",
      subtitle: "Keep everyone connected",
      description: "Keep employees and HR connected through notifications, updates, communication, and easy access to support.",
      icon: MessageCircle
    },
  ];

  return (
    <section className="py-24 bg-[#fbfdfa] border-t border-gray-100 relative overflow-hidden">
      
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#006e1c]/20 rounded-full blur-[150px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#003b0f]/10 rounded-full blur-[150px] translate-x-1/2 pointer-events-none" />

      <div className="w-[82%] mx-auto relative z-10">
        <div className="text-center mb-16 xl:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#e6f0e8] border border-[#006e1c]/20 text-[#006e1c] text-sm font-semibold mb-6"
          >
            Core Modules
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[#041208]"
          >
            Meet Our Powerful HRMS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Manage your complete employee journey with simple, smart tools that make everyday HR easier.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 xl:gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white border border-gray-100 p-5 xl:p-6 rounded-3xl hover:border-transparent transition-all duration-500 shadow-sm hover:shadow-xl group relative overflow-hidden flex flex-col items-center text-center hover:-translate-y-2"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#006e1c] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Background Light Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#006e1c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Subtle Number in Top Right */}
              <span className="absolute top-4 right-5 text-3xl xl:text-4xl font-black text-gray-100 select-none group-hover:text-[#006e1c]/10 transition-colors duration-500">
                {feature.id}
              </span>

              <div className="relative z-10 flex flex-col items-center mt-2">
                {/* Glowing Icon Container */}
                <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-2xl bg-[#f8faf9] border border-gray-100 flex items-center justify-center group-hover:bg-[#006e1c] group-hover:border-[#006e1c] transition-all duration-500 mb-5 relative">
                  <div className="absolute inset-0 rounded-2xl bg-[#006e1c] blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                  <feature.icon className="text-[#006e1c] group-hover:text-white transition-colors duration-500 relative z-10" size={24} />
                </div>
                
                <h3 className="text-base xl:text-lg font-bold text-gray-900 mb-3 leading-tight">{feature.title}</h3>
                
                {/* Subtitle Badge */}
                <div className="bg-[#f8faf9] group-hover:bg-[#e6f0e8] text-[#006e1c] px-3 py-1.5 rounded-full text-[9px] xl:text-[10px] font-bold uppercase tracking-wider mb-4 transition-colors duration-300">
                  {feature.subtitle}
                </div>
                
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
