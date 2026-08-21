"use client";

import * as React from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User } from "lucide-react";
import { Logo } from "./Logo";

gsap.registerPlugin(ScrollTrigger);

export function Navbar2() {
  const headerRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        // Turn black as soon as scrolling starts (50px)
        start: 50,
        end: 99999,
        onToggle: (self) => {
          if (headerRef.current) {
            if (self.isActive) {
              headerRef.current.classList.add("bg-black", "shadow-lg");
            } else {
              headerRef.current.classList.remove("bg-black", "shadow-lg");
            }
          }
        },
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-transparent"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo className="w-[120px] md:w-[150px] h-[30px] md:h-[38px]" />
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "HRMS", "Payroll", "Services", "About", "Contact Us"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm md:text-base font-medium text-white/90 hover:text-white transition-colors flex items-center gap-1"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right: Login & CTA */}
        <div className="flex items-center gap-6">
          <Link
            href="/login"
            className="hidden sm:flex items-center gap-2 text-sm md:text-base font-medium text-white/90 hover:text-white transition-colors"
          >
            <User size={18} />
            Login
          </Link>
          <button className="bg-[#ffffff] text-black font-semibold text-sm md:text-base px-6 py-2.5 rounded hover:bg-[#6d28d9] transition-colors">
            Book a demo
          </button>
        </div>
      </div>
    </header>
  );
}
