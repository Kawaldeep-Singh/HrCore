"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, ShieldCheck, Send, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message Sent!", {
          description: "Thank you! Our HR specialist will contact you shortly."
        });
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Failed to send message", {
          description: "Please try again later."
        });
        console.error("Failed to submit form");
      }
    } catch (error) {
      toast.error("An error occurred", {
        description: "Please check your connection and try again."
      });
      console.error("Error submitting form", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gray-50 text-black">
      {/* Decorative Orbs - Very subtle in light theme */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-center space-y-10">
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-bold text-gray-800 uppercase tracking-widest">Connect With Us</span>
              </motion.div>

              <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-black leading-tight tracking-tight text-black drop-shadow-sm">
                Get in Touch
              </motion.h2>

              <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-lg">
                Our team is prepared to assist you, whether you have inquiries, require additional details about our services, or would like to explore a potential partnership.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="space-y-8 pt-4">
              <a href="tel:+919211042767" className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center group-hover:bg-[#16a34a] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Phone className="w-7 h-7 text-gray-700 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Phone number</p>
                  <p className="text-xl font-bold text-black tracking-wide">+91-9211042767</p>
                </div>
              </a>

              <a href="mailto:sales@hrcore.in" className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center group-hover:bg-[#16a34a] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Mail className="w-7 h-7 text-gray-700 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Email</p>
                  <p className="text-xl font-bold text-black tracking-wide hover:text-[#16a34a] transition-colors">sales@hrcore.in</p>
                </div>
              </a>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gray-900 border border-black flex items-center justify-center shadow-lg">
                  <ShieldCheck className="w-7 h-7 text-[#16a34a]" />
                </div>
                <div>
                  <p className="text-xl font-bold text-black tracking-wide">100% Trusted</p>
                  <p className="text-sm text-gray-500 font-medium">HR Outsourcing Partner</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            {/* Form Glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-2xl transform scale-105 pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative bg-white p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-2xl shadow-gray-200/50 flex flex-col gap-6">
                <h3 className="text-2xl font-bold text-black mb-2">Send us a message</h3>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 px-1">Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="HR CORE"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 px-1">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="hrcore@example.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 px-1">Phone</label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 px-1">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="How can we help you?"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full mt-4 bg-black hover:bg-gray-900 text-white font-bold text-lg py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 transform hover:-translate-y-1"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
