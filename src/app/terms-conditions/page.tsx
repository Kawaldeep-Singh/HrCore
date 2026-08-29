"use client";

import { motion } from "framer-motion";

export default function TermsConditionsPage() {
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
            Terms & Conditions
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
              Welcome to HR Core. By accessing our website, using our HRMS platform, or engaging our payroll and HR services, you agree to be bound by the following terms and conditions. Please read them carefully.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">1. Acceptance of Terms</h2>
            <p className="mb-10">
              By accessing or using the services provided by HR Core ("we," "us," or "our"), you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these terms, you may not access our services.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">2. Description of Services</h2>
            <p className="mb-10">
              HR Core provides Human Resource Management System (HRMS) software, payroll processing services, and comprehensive HR consulting. The specific scope, fees, and deliverables of any service will be governed by a separate Service Level Agreement (SLA) or contract signed between HR Core and your organization.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">3. User Accounts and Security</h2>
            <p className="mb-6">
              When you create an account on our HRMS platform, you are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. 
            </p>
            <p className="mb-10">
              You agree to notify us immediately of any unauthorized access or use of your account. We reserve the right to suspend or terminate accounts that violate these terms or pose a security risk to our systems.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">4. Data Privacy and Ownership</h2>
            <p className="mb-6">
              Your data is yours. Any employee data, payroll information, or company records uploaded to our platform remain the exclusive property of your organization.
            </p>
            <p className="mb-10">
              We process this data solely for the purpose of providing our services to you, strictly in accordance with our <a href="/privacy-policy" className="text-[#006e1c] underline hover:text-[#004e14]">Privacy Policy</a> and applicable data protection laws.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">5. Intellectual Property</h2>
            <p className="mb-10">
              The HR Core website, HRMS software, source code, logos, designs, and all related intellectual property are owned by or licensed to HR Core. You may not copy, modify, distribute, or reverse-engineer any part of our technology without our explicit written consent.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">6. Limitation of Liability</h2>
            <p className="mb-10">
              To the maximum extent permitted by law, HR Core shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of your use or inability to use our services. Our total liability for any claim arising under these terms is limited to the amount you paid us for the services in the three (3) months preceding the claim.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">7. Service Modifications</h2>
            <p className="mb-10">
              We continually strive to improve our platform. We reserve the right to modify, update, or discontinue features of our services at any time. We will provide reasonable notice for any material changes that significantly affect your use of the services.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">8. Governing Law</h2>
            <p className="mb-10">
              These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which HR Core operates, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">9. Contact Information</h2>
            <p className="mb-10">
              If you have any questions or concerns about these Terms & Conditions, please contact us via the contact form on our website or by speaking to your dedicated account manager.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
