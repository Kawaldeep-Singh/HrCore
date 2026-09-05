"use client";

import { usePathname } from "next/navigation";
import { Navbar2 } from "@/components/layout/Navbar2";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { ContactModal } from "@/components/ui/ContactModal";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { MotionConfig } from "framer-motion";
import { useState, useEffect } from "react";

export function GlobalLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login" || pathname?.startsWith("/login/");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "user"}>
      <SmoothScroll>
        {!isLoginPage && <Navbar2 />}
        {children}
        {!isLoginPage && <Footer />}
        {!isLoginPage && <ContactModal />}
        {!isLoginPage && <FloatingButtons />}
      </SmoothScroll>
    </MotionConfig>
  );
}
