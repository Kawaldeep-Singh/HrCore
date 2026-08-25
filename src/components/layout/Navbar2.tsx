"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { useModal } from "@/context/ModalContext";

gsap.registerPlugin(ScrollTrigger);

export function Navbar2({ activeVariant }: { activeVariant?: number }) {
  const headerRef = React.useRef<HTMLElement>(null);
  const { openModal } = useModal();
  const pathname = usePathname();
  const initialBg = activeVariant === 3 ? "bg-[#060d10]" : "bg-transparent";
  const initialBorder = activeVariant !== 3 ? "border-white/10" : "border-transparent";

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: document.body,
        start: "top -100vh", // Triggers exactly when you scroll 100vh down
        end: 99999,
        onToggle: (self) => {
          if (headerRef.current) {
            if (self.isActive) {
              headerRef.current.classList.remove("bg-transparent", "bg-[#060d10]", "border-transparent", "border-white/10");
              headerRef.current.classList.add("bg-[#07120e]", "shadow-2xl", "border-white/5");
            } else {
              if (activeVariant === 3) {
                headerRef.current.classList.add("bg-[#060d10]", "border-transparent");
                headerRef.current.classList.remove("border-white/10");
              } else {
                headerRef.current.classList.add("bg-transparent", "border-white/10");
                headerRef.current.classList.remove("border-transparent");
              }
              headerRef.current.classList.remove("bg-[#07120e]", "shadow-2xl", "border-white/5");
            }
          }
        },
      });
    }, headerRef);

    return () => ctx.revert();
  }, [activeVariant]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${initialBg} ${initialBorder}`}
    >
      <div className="w-[82%] mx-auto h-[68px] md:h-[84px] flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo className="w-[150px] md:w-[190px] h-[38px] md:h-[48px]" />
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          {["Home", "HRMS", "Payroll", "Services", "About", "Contact Us"].map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`;
            const isActive = pathname === path;
            return (
              <Link
                key={item}
                href={path}
                className={`text-sm md:text-base font-medium transition-all duration-300 flex items-center gap-1 px-3 lg:px-4 py-2 rounded-full ${
                  isActive 
                    ? "bg-white/10 text-white" 
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </nav>

        {/* Right: Login & CTA */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Vertical Divider */}
          <div className="hidden md:block w-[2px] h-6 bg-white/60 rounded-full"></div>
          
          <Link
            href="/login"
            className="hidden sm:flex items-center gap-2 text-sm md:text-base font-medium text-white/90 hover:text-white transition-colors"
          >
            <User size={18} />
            Login
          </Link>
          <button
            onClick={openModal}
            className="bg-[#ffffff] text-black font-semibold text-sm md:text-base px-6 py-2.5 rounded hover:bg-[#16a34a] hover:text-white transition-colors"
          >
            Book a demo
          </button>
        </div>
      </div>
    </header>
  );
}
