"use client";

import * as React from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";
import { Logo } from "./Logo";

gsap.registerPlugin(ScrollTrigger);

export function Navbar2() {
  const navRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: "top -50",
        end: 99999,
        toggleClass: {
          className: "nav-scrolled",
          targets: navRef.current,
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 pointer-events-none flex justify-center">
      <div
        ref={navRef}
        className="group pointer-events-auto w-full max-w-7xl flex items-center justify-between transition-[max-width,padding,background-color,border-color,box-shadow] duration-500 ease-in-out border border-transparent rounded-full px-6 md:px-10 py-4 [&.nav-scrolled]:max-w-[930px] [&.nav-scrolled]:bg-black/50 [&.nav-scrolled]:backdrop-blur-2xl [&.nav-scrolled]:border-white/20 [&.nav-scrolled]:shadow-2xl [&.nav-scrolled]:py-3 transform-gpu"
      >
        <Link href="/" className="flex items-center gap-2 transform-gpu origin-left transition-transform duration-500 ease-in-out group-[.nav-scrolled]:scale-75">
          <Logo className="w-[160px] h-[40px]" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-lg group-[.nav-scrolled]:text-base transition-all duration-500 font-medium text-white hover:opacity-80 bg-white/10 px-5 py-2 rounded-full"
          >
             Home
          </Link>
          {["About",  "Solutions", "Careers"].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="text-lg group-[.nav-scrolled]:text-base transition-all duration-300 font-medium text-white drop-shadow-md px-5 py-2 rounded-full hover:bg-white/10"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/login" className="hidden sm:block text-lg group-[.nav-scrolled]:text-base transition-all duration-300 font-medium text-white drop-shadow-md px-5 py-2 rounded-full hover:bg-white/10">
            Sign In
          </Link>
          <Button className="font-medium text-lg px-6 h-12 bg-white text-black hover:bg-gray-200 group-[.nav-scrolled]:h-10 group-[.nav-scrolled]:px-5 group-[.nav-scrolled]:text-base transition-all duration-500">Request</Button>
        </div>
      </div>
    </header>
  );
}
