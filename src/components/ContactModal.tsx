"use client";

import { X, CheckCircle2, Quote, User, Mail, Phone, Send } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { useEffect } from "react";

export function ContactModal() {
  const { isOpen, closeModal } = useModal();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-[#1a1c1c]/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 md:p-6 animate-[fadeIn_0.3s_ease-out_forwards]"
      role="dialog"
      aria-modal="true"
      onClick={closeModal}
    >
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>

      {/* Modal Container */}
      <div
        className="relative w-full max-w-[1000px] bg-white rounded-2xl shadow-[0px_12px_32px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col md:flex-row h-auto max-h-[90vh] animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards]"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-[100] w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 text-gray-700 transition-colors focus:outline-none"
        >
          <X size={24} />
        </button>

        {/* Left Panel */}
        <div className="w-full md:w-5/12 bg-[#060d10] text-white flex flex-col justify-between p-8 relative overflow-hidden shrink-0">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#16a34a] via-transparent to-transparent"></div>

          <div className="relative z-10">
            {/* Logo */}
            <div className="mb-8 h-10 w-auto">
              {/* You can replace this with your actual Logo component or keep the white version */}
              <img alt="HR Core Logo" className="h-full w-auto filter brightness-0 invert" src="/BG-Logo.png" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              {!document.querySelector('img[src="/BG-Logo.png"]') && <span className="text-2xl font-bold tracking-tight text-white"></span>}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-white">
              Empower your workforce.
            </h2>
            <p className="text-gray-300 text-base mb-6 max-w-sm leading-relaxed">
              Connect with our HR specialists to discover how HR Core can streamline your operations, enhance employee engagement, and drive growth.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#93d937] shrink-0" size={24} />
                <span className="font-medium text-white">Tailored HR solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#93d937] shrink-0" size={24} />
                <span className="font-medium text-white">Expert compliance guidance</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#93d937] shrink-0" size={24} />
                <span className="font-medium text-white">Seamless payroll integration</span>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
            <Quote className="text-gray-500 mb-2" size={20} />
            <p className="text-gray-400 italic text-sm">
              "HR Core transformed our HR department from a cost center to a strategic driver of company culture."
            </p>
          </div>
        </div>

        {/* Right Panel (Form) */}
        <div className="w-full md:w-7/12 p-6 md:p-8 bg-white overflow-y-auto">
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Talk to an Expert</h1>
              <p className="text-gray-500 text-xs md:text-sm">Fill out the form below and we'll be in touch shortly.</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); closeModal(); }}>
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5" htmlFor="fullName">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <User className="text-gray-400" size={18} />
                  </div>
                  <input className="block w-full pl-10 pr-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:ring-1 focus:ring-[#16a34a] focus:border-[#16a34a] transition-colors outline-none" id="fullName" placeholder="Aarav Sharma" required type="text" />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5" htmlFor="email">Work Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Mail className="text-gray-400" size={18} />
                    </div>
                    <input className="block w-full pl-10 pr-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:ring-1 focus:ring-[#16a34a] focus:border-[#16a34a] transition-colors outline-none" id="email" placeholder="aarav@company.in" required type="email" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5" htmlFor="phone">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Phone className="text-gray-400" size={18} />
                    </div>
                    <input className="block w-full pl-10 pr-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:ring-1 focus:ring-[#16a34a] focus:border-[#16a34a] transition-colors outline-none" id="phone" placeholder="+91 90536 08395" type="tel" />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5" htmlFor="message">How can we help?</label>
                <textarea className="block w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:ring-1 focus:ring-[#16a34a] focus:border-[#16a34a] transition-colors outline-none resize-y min-h-[80px]" id="message" placeholder="Tell us a little about your HR needs..." required rows={3}></textarea>
              </div>

              {/* Consent */}
              <div className="flex items-start gap-2.5">
                <div className="flex items-center h-5 mt-0">
                  <input className="w-3.5 h-3.5 text-[#16a34a] bg-gray-50 border-gray-300 rounded focus:ring-[#16a34a] focus:ring-2 cursor-pointer" id="consent" required type="checkbox" />
                </div>
                <label className="text-xs text-gray-500 cursor-pointer leading-relaxed" htmlFor="consent">
                  I agree to receive communications from HR Core. You can unsubscribe at any time. View our <a className="text-[#16a34a] hover:underline font-medium" href="#">Privacy Policy</a>.
                </label>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5 items-center justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full sm:w-auto px-5 py-2.5 bg-transparent border-2 border-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#16a34a] text-white rounded-lg text-sm font-semibold hover:bg-[#15803d] transition-colors shadow-lg shadow-[#16a34a]/30 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
