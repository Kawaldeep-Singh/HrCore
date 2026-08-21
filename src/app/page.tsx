import { Navbar2 } from "@/components/Navbar2";
import { HeroSection2 } from "@/components/HeroSection2";
import { WhatWeOffer } from "@/components/WhatWeOffer";
import { HRMSPortalFeatures } from "@/components/HRMSPortalFeatures";
import { EmployeeApp } from "@/components/EmployeeApp";
import { WhyHRCore } from "@/components/WhyHRCore";
import { MoreThanHRMS } from "@/components/MoreThanHRMS";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar2 />
      <HeroSection2 />
      <WhatWeOffer />
      <HRMSPortalFeatures />
      <EmployeeApp />
      <WhyHRCore />
      <MoreThanHRMS />
      <CTASection />
      <Footer />
    </main>
  );
}

