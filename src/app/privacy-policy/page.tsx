"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#0a1a0f] text-center">
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#006e1c]/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="w-[82%] mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-[#94f990] max-w-2xl mx-auto"
          >
            Last Updated: August 29, 2026
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-28 bg-[#fbfdfa]">
        <div className="w-[82%] max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="prose prose-lg prose-green max-w-none text-gray-700"
          >
            <p className="lead text-xl text-gray-800 font-medium mb-10">
              At HR Core, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect information when you visit our website, contact us, or use our HRMS, payroll, and HR services.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">Information We Collect</h2>
            <p className="mb-6">
              We may collect information such as your name, email address, phone number, company name, job title, and other information you provide through contact forms, demo requests, career applications, or while communicating with us.
            </p>
            <p className="mb-10">
              When our HRMS, payroll, or HR services are used by an organization, we may also process employee-related information such as employee details, attendance, leave, payroll, salary, documents, performance, and other HR-related information required to provide our services.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">How We Use Your Information</h2>
            <p className="mb-10">
              We use the information we collect to provide and improve our HRMS, payroll, and HR services, respond to enquiries, arrange demonstrations, provide customer support, manage accounts, maintain security, and comply with applicable legal requirements.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">Sharing of Information</h2>
            <p className="mb-10">
              HR Core does not sell or rent your personal information. We may share information with authorized customer users, service providers, technology partners, or government authorities when necessary to provide our services or comply with legal requirements.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">Data Security</h2>
            <p className="mb-10">
              We take reasonable technical and organizational measures to protect personal information from unauthorized access, misuse, loss, or disclosure. However, no online system can be guaranteed to be completely secure.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">Cookies</h2>
            <p className="mb-10">
              Our website may use cookies and similar technologies to improve website functionality, understand website usage, and improve your experience. You can manage cookies through your browser settings.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">Third-Party Links</h2>
            <p className="mb-10">
              Our website may contain links to third-party websites. HR Core is not responsible for their privacy practices or content, and we recommend reviewing their privacy policies before sharing information with them.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">Data Retention</h2>
            <p className="mb-10">
              We retain personal information only for as long as necessary to provide our services, meet business and legal requirements, and maintain appropriate records. Information that is no longer required may be securely deleted or anonymized.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">Changes to This Policy</h2>
            <p className="mb-10">
              HR Core may update this Privacy Policy from time to time. Any changes will be published on this page. We encourage you to review this Privacy Policy periodically.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
