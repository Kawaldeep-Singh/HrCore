"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { useModal } from "@/context/ModalContext";

gsap.registerPlugin(ScrollTrigger);

export function Navbar2({ activeVariant }: { activeVariant?: number }) {
  const headerRef = React.useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { openModal } = useModal();
  const pathname = usePathname();
  const initialBg = "bg-[#060d10]";
  const initialBorder = "border-white/10";

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
              headerRef.current.classList.add("bg-[#060d10]", "border-white/10");
              headerRef.current.classList.remove("bg-transparent", "border-transparent", "bg-[#07120e]", "shadow-2xl", "border-white/5");
            }
          }
        },
      });
    }, headerRef);

    return () => ctx.revert();
  }, [activeVariant]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "HRMS", href: "/hrms" },
    { label: "Payroll", href: "/payroll" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contact-us" },
  ];

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

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm md:text-base font-medium transition-all duration-300 flex items-center gap-1 px-3 lg:px-4 py-2 rounded-full ${
                  isActive 
                    ? "bg-white/10 text-white" 
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Login & CTA & Mobile Toggle */}
        <div className="flex items-center gap-3 lg:gap-6">
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
            className="bg-[#ffffff] text-black font-semibold text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 sm:py-2.5 rounded hover:bg-[#16a34a] hover:text-white transition-colors shadow-sm"
          >
            Book a demo
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07120e]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-3 animate-[fadeIn_0.2s_ease-out_forwards]">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2.5 px-4 rounded-xl transition-all ${
                    isActive
                      ? "bg-[#16a34a] text-white font-semibold shadow-lg shadow-[#16a34a]/20"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 text-base font-medium text-white/90 bg-white/5 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                <User size={18} />
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
