"use client"

import { motion } from "framer-motion"
import {
  DollarSign,
  Calendar,
  Briefcase,
  Target,
  UserCircle,
  FileCheck,
  Plug,
  GraduationCap,
  ShieldCheck,
  Star,
  Sparkles,
  Zap,
  ArrowUpRight,
} from "lucide-react"

export function KeyFeatures() {
  const featuresList = [
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Payroll Management",
      description: "Automated salary calculations, tax deductions, benefits administration, and payslip generation.",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Attendance Tracking",
      description: "Automated clock-in/out, leave management, shift scheduling, and biometric integration.",
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Recruitment & Onboarding",
      description: "Job posting, applicant tracking, resume management, and smooth onboarding workflows.",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Performance Management",
      description: "Goal setting, continuous feedback, appraisals, and performance analytics.",
    },
    {
      icon: <UserCircle className="w-5 h-5" />,
      title: "Employee Self-Service",
      description: "Allows employees to update personal info, apply for leave, view payslips, and more.",
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      title: "Compliance Management",
      description: "Ensures adherence to labor laws, tax regulations, and company policies.",
    },
    {
      icon: <Plug className="w-5 h-5" />,
      title: "Integration Capabilities",
      description: "Connect with third-party software such as accounting, CRM, and ERP systems.",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Training & Development",
      description: "Manage employee training programs, certifications, and skill development tracking.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Security & Privacy",
      description: "Robust data protection measures including role-based access and encryption.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as any },
    },
  }

  return (
    <section className="w-full py-32 px-4 bg-white text-black relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-5xl mx-auto mb-20 relative">
          
          {/* Floating animated icons behind the text */}
          <motion.div 
            className="absolute -top-10 left-0 md:left-10 text-gray-200 hidden md:block"
            animate={{ y: [0, -20, 0], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Star className="w-12 h-12" />
          </motion.div>
          
          <motion.div 
            className="absolute top-10 right-0 md:right-10 text-gray-200 hidden md:block"
            animate={{ y: [0, 25, 0], rotate: [0, -20, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <Sparkles className="w-16 h-16" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-8"
          >
            <Zap className="w-4 h-4 text-black" />
            <span className="text-sm font-bold text-black uppercase tracking-widest">Next-Gen Platform</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight relative z-10"
          >
            The foundation for <br /> complete HR management
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto relative z-10"
          >
            HR Core is evolving to be more than just basic tools. It supports an entire ecosystem helping businesses automate, innovate, and grow.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="border border-gray-200 overflow-hidden rounded-2xl shadow-xl shadow-gray-200/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-200 gap-[1px]">
            {featuresList.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, zIndex: 20, transition: { duration: 0.3, ease: "easeOut" as any } }}
                className="bg-white p-8 md:p-10 relative group cursor-pointer flex flex-col h-full shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-2xl hover:shadow-black/10 transition-shadow duration-500"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                      {feature.icon}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center opacity-0 -translate-y-4 translate-x-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500 ease-out">
                      <ArrowUpRight className="w-5 h-5 text-black" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-black mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-base flex-grow">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
