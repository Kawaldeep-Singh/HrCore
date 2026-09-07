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

  return (
    <MotionConfig reducedMotion="user">
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
