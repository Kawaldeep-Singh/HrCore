import { Navbar2 } from "@/components/Navbar2";
import { HeroSection2 } from "@/components/HeroSection2";
import { AboutUsSection2 } from "@/components/AboutUsSection2";
import { KeyFeatures } from "@/components/KeyFeatures";
import { BentoGrid2 } from "@/components/BentoGrid2";
import { HROutsourcing } from "@/components/HROutsourcing";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar2 />
      <HeroSection2 />
      <AboutUsSection2 />
      <KeyFeatures />
      <BentoGrid2 />
      <HROutsourcing />
      <ContactSection />
      <Footer />
    </main>
  );
}
