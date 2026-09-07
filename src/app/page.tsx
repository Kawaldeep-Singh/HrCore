import { HeroVariant3 } from "@/components/home/HeroVariant3";
import { WhatWeOffer } from "@/components/home/WhatWeOffer";
import { HRMSPortalFeatures } from "@/components/home/HRMSPortalFeatures";
import { EmployeeApp } from "@/components/home/EmployeeApp";
import { WhyHRCore } from "@/components/home/WhyHRCore";
import { MoreThanHRMS } from "@/components/home/MoreThanHRMS";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <HeroVariant3 />
      <WhatWeOffer />
      <HRMSPortalFeatures />
      <EmployeeApp />
      <WhyHRCore />
      <MoreThanHRMS />
      <CTASection />
    </main>
  );
}

