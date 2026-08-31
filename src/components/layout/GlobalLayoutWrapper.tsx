"use client";

import { usePathname } from "next/navigation";
import { Navbar2 } from "@/components/layout/Navbar2";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { ContactModal } from "@/components/ui/ContactModal";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

export function GlobalLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login" || pathname?.startsWith("/login/");

  if (isLoginPage) {
    return (
      <SmoothScroll>
        {children}
      </SmoothScroll>
    );
  }

  return (
    <SmoothScroll>
      <Navbar2 />
      {children}
      <Footer />
      <ContactModal />
      <FloatingButtons />
    </SmoothScroll>
  );
}
