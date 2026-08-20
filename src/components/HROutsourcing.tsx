"use client"

import { motion } from "framer-motion"
import { ArrowRight, Target, Users, CheckCircle } from "lucide-react"

export function HROutsourcing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as any },
    },
  }

  return (
    <section className="w-full py-32 px-4 bg-gray-50 text-black overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-200/50 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse" />
              <span className="text-sm font-bold text-gray-800 uppercase tracking-widest">Strategic Partnership</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Enhancing Human Resources Capabilities, <br className="hidden xl:block" />
              <span className="text-gray-400">Achieving Business Success.</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-xl">
              HR outsourcing entails transferring HR functions and business partnership responsibilities to an external provider, enabling organizations to leverage specialized expertise without the need for in-house resources…
            </motion.p>
            
            <motion.div variants={itemVariants} className="pt-4">
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-xl shadow-black/20 hover:shadow-black/30">
                Read more
                <div className="bg-white/20 p-1 rounded-full group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </motion.div>
          </div>

          {/* Right Content - Cards */}
          <div className="flex flex-col gap-6 relative">
            {/* Connecting line behind cards */}
            <div className="absolute left-10 top-20 bottom-20 w-px bg-gray-200 hidden md:block" />

            {/* Card 1 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 group transition-all duration-300 relative z-10"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-black transition-colors duration-500 shadow-sm">
                  <Target className="w-8 h-8 text-black group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-700 transition-colors">Outsourcing: A Strategic Choice.</h3>
                  <div className="flex items-center gap-2 text-gray-600 font-medium">
                    <CheckCircle className="w-5 h-5 text-black" />
                    Our Key Advantages
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-black text-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-gray-900/20 border border-gray-800 group transition-all duration-300 relative z-10"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-white transition-colors duration-500">
                    <Users className="w-8 h-8 text-white group-hover:text-black transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-gray-300 transition-colors">Who are we - HR CORE?</h3>
                </div>
                <p className="text-gray-400 font-medium leading-relaxed pl-0 sm:pl-[5.5rem]">
                  HR Core, driven by its mission and values, serves as a partner in HR outsourcing services committed to maintaining elevated professional ethical standards.…
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
