import { Metadata } from "next";
import { PayrollHero } from "@/components/payroll/PayrollHero";
import { PayrollIntro } from "@/components/payroll/PayrollIntro";
import { PayrollServices } from "@/components/payroll/PayrollServices";
import { PayrollProcess } from "@/components/payroll/PayrollProcess";
import { PayrollWhyOutsource } from "@/components/payroll/PayrollWhyOutsource";
import { PayrollConnection } from "@/components/payroll/PayrollConnection";
import { PayrollAudience } from "@/components/payroll/PayrollAudience";
import { PayrollStats } from "@/components/payroll/PayrollStats";
import { PayrollCTA } from "@/components/payroll/PayrollCTA";

export const metadata: Metadata = {
  title: "Payroll Services | HR Core",
  description: "Complete HR Management. Simplified. From salary processing and payslips to compliance and employee support, we take care of your payroll so you can focus on your business.",
};

export default function PayrollPage() {
  return (
    <main className="min-h-screen bg-white">
      <PayrollHero />
      <PayrollIntro />
      <PayrollServices />
      <PayrollProcess />
      <PayrollWhyOutsource />
      <PayrollConnection />
      <PayrollAudience />
      <PayrollStats />
      <PayrollCTA />
    </main>
  );
}
