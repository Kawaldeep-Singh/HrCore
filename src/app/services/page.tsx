"use client";

import React from "react";

export default function ServicesPage() {
  return (
    <section className="pt-40 pb-20 md:pt-48 md:pb-32 text-center min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#006e1c]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative z-10 w-[82%] mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">HR Services</h1>
        <p className="text-xl text-[#c8c6c5] max-w-2xl mx-auto">
          Professional HR support for recruitment, operations, compliance, and more. This page is currently under construction.
        </p>
      </div>
    </section>
  );
}
