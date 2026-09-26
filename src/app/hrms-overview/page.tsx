"use client";

import { HRMSHero } from "@/components/hrms/HRMSHero";
import { EmployeeJourney } from "@/components/hrms/EmployeeJourney";
import { PowerfulHRMS } from "@/components/hrms/PowerfulHRMS";
import { EmployeeApp } from "@/components/home/EmployeeApp";
import { TrustedHR } from "@/components/hrms/TrustedHR";
import { WhyHRCore } from "@/components/home/WhyHRCore";
import { HRMSCTA } from "@/components/hrms/HRMSCTA";

export default function HRMSPage() {
  return (
    <main className="min-h-screen overflow-x-clip pt-10">
      <HRMSHero />
      <EmployeeJourney />
      <PowerfulHRMS />
      <EmployeeApp />
      <TrustedHR />
      <WhyHRCore />
      <HRMSCTA />
    </main>
  );
}
