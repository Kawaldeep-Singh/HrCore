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
              Welcome to HR Core. These Terms & Conditions govern your access to and use of the HR Core website, HRMS platform, mobile application, and related HR, payroll, and professional services. By accessing or using our website or services, you agree to these Terms & Conditions.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">Use of Our Services</h2>
            <p className="mb-10">
              HR Core provides HRMS technology, payroll services, and professional HR services to businesses. You agree to use our website, platform, application, and services only for lawful purposes and in accordance with these Terms.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">HRMS Access</h2>
            <p className="mb-10">
              Access to the HR Core HRMS is provided to authorized users of customer organizations. Users are responsible for keeping their login credentials confidential and for all activities carried out through their account. HR Core may restrict or suspend access where necessary for security, misuse, or violation of these Terms.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">Customer Responsibilities</h2>
            <p className="mb-10">
              Customers are responsible for providing accurate information and ensuring that information submitted through our HRMS or services is lawful and appropriate. Customers are also responsible for managing their authorized users and maintaining the confidentiality of their account information.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">Payroll & HR Services</h2>
            <p className="mb-10">
              HR Core provides payroll and HR services based on the information and requirements provided by the customer. Customers are responsible for providing accurate and timely information required to deliver these services. While we take reasonable care to maintain accuracy and compliance, customers remain responsible for reviewing and approving information applicable to their organization.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">Intellectual Property</h2>
            <p className="mb-10">
              All content, designs, logos, software, features, graphics, text, and other materials available through HR Core are owned by or licensed to HR Core and are protected by applicable intellectual property laws. You may not copy, reproduce, modify, distribute, or use our content or technology without prior written permission.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">Prohibited Use</h2>
            <p className="mb-10">
              You must not misuse our website, HRMS, or services, attempt to gain unauthorized access, interfere with our systems, introduce harmful code, or use our services for any unlawful or unauthorized purpose.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">Third-Party Services</h2>
            <p className="mb-10">
              Our website or services may include links or integrations with third-party websites or services. HR Core is not responsible for the content, availability, security, or practices of third-party services.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">Service Availability</h2>
            <p className="mb-10">
              We make reasonable efforts to keep our website and services available and reliable. However, we do not guarantee that the website, HRMS, or related services will always be available without interruption or errors. Services may occasionally be unavailable due to maintenance, updates, technical issues, or circumstances beyond our control.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">Limitation of Liability</h2>
            <p className="mb-10">
              HR Core will make reasonable efforts to provide reliable services but will not be responsible for losses arising from unauthorized use, inaccurate information provided by users or customers, third-party services, technical interruptions, or circumstances beyond our reasonable control, to the extent permitted by applicable law.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">Changes to These Terms</h2>
            <p className="mb-10">
              HR Core may update these Terms & Conditions from time to time to reflect changes in our services, technology, or legal requirements. Updated terms will be published on this page.
            </p>

            <h2 className="text-3xl font-bold text-[#041208] mt-12 mb-6">Governing Law</h2>
            <p className="mb-10">
              These Terms & Conditions shall be governed by and interpreted in accordance with the applicable laws of India. Any disputes shall be subject to the jurisdiction of the appropriate courts in India.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
