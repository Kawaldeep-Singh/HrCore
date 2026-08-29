"use client";

import { useState } from "react";
import { HeroSwitcher } from "@/components/home/HeroSwitcher";
import { WhatWeOffer } from "@/components/home/WhatWeOffer";
import { HRMSPortalFeatures } from "@/components/home/HRMSPortalFeatures";
import { EmployeeApp } from "@/components/home/EmployeeApp";
import { WhyHRCore } from "@/components/home/WhyHRCore";
import { MoreThanHRMS } from "@/components/home/MoreThanHRMS";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  const [activeVariant, setActiveVariant] = useState<1 | 3>(3);

  return (
    <main className="min-h-screen overflow-x-clip">
      <HeroSwitcher activeVariant={activeVariant} setActiveVariant={setActiveVariant} />
      <WhatWeOffer />
      <HRMSPortalFeatures />
      <EmployeeApp />
      <WhyHRCore />
      <MoreThanHRMS />
      <CTASection />
    </main>
  );
}

