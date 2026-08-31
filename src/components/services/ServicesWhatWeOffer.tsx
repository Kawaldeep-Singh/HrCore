"use client";

import { motion } from "framer-motion";
import { 
  UserPlus, 
  Settings, 
  ShieldCheck, 
  RefreshCcw, 
  FileText, 
  TrendingUp, 
  HeartHandshake, 
  Lightbulb 
} from "lucide-react";

export function ServicesWhatWeOffer() {
  const services = [
    {
      num: "01",
      title: "Recruitment & Hiring",
      subtitle: "Find the right people. Build the right team.",
      desc: "From sourcing and screening to selection and onboarding, we help you find the right talent for your business.",
      icon: <UserPlus className="w-6 h-6 text-[#16a34a]" />
    },
    {
      num: "02",
      title: "HR Operations",
      subtitle: "Keep everyday HR running smoothly.",
      desc: "Support for employee records, documentation, onboarding, lifecycle processes, HR coordination, and day-to-day HR needs.",
      icon: <Settings className="w-6 h-6 text-[#16a34a]" />
    },
    {
      num: "03",
      title: "HR Compliance",
      subtitle: "Stay compliant. Stay confident.",
      desc: "Get expert support with HR policies, labour-law requirements, statutory processes, documentation, and compliance needs.",
      icon: <ShieldCheck className="w-6 h-6 text-[#16a34a]" />
    },
    {
      num: "04",
      title: "Employee Lifecycle",
      subtitle: "From joining to exit, handled better.",
      desc: "Support employees throughout their journey — onboarding, confirmations, transfers, promotions, employee records, and exit processes.",
      icon: <RefreshCcw className="w-6 h-6 text-[#16a34a]" />
    },
    {
      num: "05",
      title: "HR Policies & Documentation",
      subtitle: "Clear policies. Better HR processes.",
      desc: "Create practical HR policies, employee handbooks, SOPs, letters, and documentation that fit your organisation.",
      icon: <FileText className="w-6 h-6 text-[#16a34a]" />
    },
    {
      num: "06",
      title: "Performance & Development",
      subtitle: "Help your people perform and grow.",
      desc: "Build goal-setting, performance review, training, and development processes that support employee growth.",
      icon: <TrendingUp className="w-6 h-6 text-[#16a34a]" />
    },
    {
      num: "07",
      title: "Employee Support",
      subtitle: "Give employees the support they need.",
      desc: "Help employees with everyday HR queries, requests, documentation, and HR-related concerns.",
      icon: <HeartHandshake className="w-6 h-6 text-[#16a34a]" />
    },
    {
      num: "08",
      title: "HR Advisory",
      subtitle: "Better HR decisions, backed by experience.",
      desc: "Get practical HR guidance for people-related challenges, processes, policies, and organisational needs.",
      icon: <Lightbulb className="w-6 h-6 text-[#16a34a]" />
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#f8fcf9]">
      <div className="w-[82%] mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-6"
          >
            Everything You Need to <br/>
            <span className="text-[#16a34a]">Manage People Better.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#16a34a]/30 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#16a34a]/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150" />
              
              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <span className="absolute top-0 right-0 text-2xl font-bold text-gray-200 group-hover:text-[#16a34a]/20 transition-colors">
                  {service.num}
                </span>
                
                <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] flex items-center justify-center shadow-inner text-[#16a34a] group-hover:scale-110 transition-transform duration-300 mb-6 mt-2">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#16a34a] transition-colors">
                  {service.title}
                </h3>
                <h4 className="text-sm font-semibold text-gray-500 mb-4">
                  {service.subtitle}
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
