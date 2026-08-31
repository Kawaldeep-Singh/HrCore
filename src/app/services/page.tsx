"use client";

import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesIntro } from "@/components/services/ServicesIntro";
import { ServicesWhatWeOffer } from "@/components/services/ServicesWhatWeOffer";
import { ServicesHowWeWork } from "@/components/services/ServicesHowWeWork";
import { ServicesTechnology } from "@/components/services/ServicesTechnology";
import { ServicesWhyHrCore } from "@/components/services/ServicesWhyHrCore";
import { ServicesTrust } from "@/components/services/ServicesTrust";
import { ServicesFinalCta } from "@/components/services/ServicesFinalCta";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <ServicesIntro />
      <ServicesWhatWeOffer />
      <ServicesHowWeWork />
      <ServicesTechnology />
      <ServicesWhyHrCore />
      <ServicesTrust />
      <ServicesFinalCta />
    </main>
  );
}
