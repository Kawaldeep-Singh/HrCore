"use client";

import { useState } from "react";
import { Navbar2 } from "@/components/Navbar2";
import { HeroSwitcher } from "@/components/HeroSwitcher";
import { WhatWeOffer } from "@/components/WhatWeOffer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { HRMSPortalFeatures } from "@/components/HRMSPortalFeatures";
import { EmployeeApp } from "@/components/EmployeeApp";
import { WhyHRCore } from "@/components/WhyHRCore";
import { MoreThanHRMS } from "@/components/MoreThanHRMS";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [activeVariant, setActiveVariant] = useState<1 | 2 | 3>(3);

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-x-clip">
      <Navbar2 activeVariant={activeVariant} />
      <HeroSwitcher activeVariant={activeVariant} setActiveVariant={setActiveVariant} />
      <WhatWeOffer />
      <HRMSPortalFeatures />
      <EmployeeApp />
      <WhyHRCore />
      <MoreThanHRMS />
      <CTASection />
      <Footer />
      <FloatingButtons />
    </main>
  );
}

