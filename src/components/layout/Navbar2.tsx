"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (headerRef.current) {
            const isScrolled = window.scrollY > 60;
            if (isScrolled) {
              headerRef.current.classList.add("bg-[#07120e]", "shadow-2xl", "border-white/5");
              headerRef.current.classList.remove("bg-[#060d10]", "border-white/10");
            } else {
              headerRef.current.classList.add("bg-[#060d10]", "border-white/10");
              headerRef.current.classList.remove("bg-[#07120e]", "shadow-2xl", "border-white/5");
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

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
            const isActive = item.href === "/" 
              ? pathname === "/" 
              : pathname === item.href || (pathname?.startsWith(item.href) && pathname[item.href.length] === "/");
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm md:text-base transition-all duration-300 flex items-center gap-1.5 px-4 py-2 rounded-full ${
                  isActive 
                    ? "bg-[#16a34a] text-white font-semibold shadow-[0_2px_12px_rgba(22,163,74,0.35)]" 
                    : "text-white/70 hover:text-white hover:bg-white/10 font-medium"
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
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            aria-label="Open Navigation Menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (50% screen width, sliding from right to left) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/65 backdrop-blur-sm z-50"
            />

            {/* Right-to-Left Slide-in Drawer (50% of screen) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              className="md:hidden fixed top-0 right-0 bottom-0 w-[50%] min-w-[210px] h-[100dvh] bg-[#07120e] border-l border-white/10 shadow-2xl z-50 flex flex-col justify-between p-4 sm:p-5 overflow-y-auto"
            >
              <div>
                {/* Header with Title and Close button */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <span className="text-xs uppercase tracking-wider font-bold text-gray-400">Menu</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                    aria-label="Close Navigation Menu"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col space-y-1">
                  {navItems.map((item) => {
                    const isActive = item.href === "/" 
                      ? pathname === "/" 
                      : pathname === item.href || (pathname?.startsWith(item.href) && pathname[item.href.length] === "/");
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-sm font-medium py-2 px-3 rounded-lg transition-all ${
                          isActive
                            ? "bg-[#16a34a] text-white font-semibold shadow-md shadow-[#16a34a]/30"
                            : "text-white/80 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2 mt-4">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-white/90 bg-white/5 py-2.5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <User size={16} />
                  Login
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openModal();
                  }}
                  className="w-full bg-[#16a34a] text-white font-semibold text-xs sm:text-sm py-2.5 rounded-lg hover:bg-[#15803d] transition-colors shadow-sm"
                >
                  Book a demo
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
