"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users, Clock, Briefcase, IndianRupee, GraduationCap,
  Settings, Target, Receipt, BarChart3, Headphones,
  type LucideIcon,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─── Image Map: feature title → image path ─── */
const featureImageMap: Record<string, string> = {
  "Hire to Retire": "/hr-performace/Hire to Retire.png",
  "Time to Leave": "/hr-performace/Time to Leave.png",
  "Recruit to Onboard": "/hr-performace/Recruit to Onboard.png",
  "Payroll to Compliance": "/hr-performace/payroll.png",
  "Learn & Grow": "/hr-performace/Learn & Grow.png",
  "Self-Service HR": "/hr-performace/Self-Service HR.png",
  "Goals to Growth": "/hr-performace/Goals to Growth.png",
  "Spend to Reimburse": "/hr-performace/Spend to Reimburse.png",
  "Data to Decisions": "/hr-performace/Data to Decisions.png",
  "Connect & Support": "/hr-performace/Connect & Support.png",
};

/* ─── Feature Data ─── */
const features = [
  { num: "01", title: "Hire to Retire", desc: "Complete employee journey", color: "#4CAF68", icon: Users },
  { num: "02", title: "Time to Leave", desc: "Attendance & leave management", color: "#3B9B5A", icon: Clock },
  { num: "03", title: "Recruit to Onboard", desc: "Hiring made simple", color: "#2F7D4C", icon: Briefcase },
  { num: "04", title: "Payroll to Compliance", desc: "Payroll & statutory needs", color: "#4CAF68", icon: IndianRupee },
  { num: "05", title: "Learn & Grow", desc: "Training & development", color: "#3B9B5A", icon: GraduationCap },
  { num: "06", title: "Self-Service HR", desc: "Employee access & requests", color: "#2F7D4C", icon: Settings },
  { num: "07", title: "Goals to Growth", desc: "Performance management", color: "#4CAF68", icon: Target },
  { num: "08", title: "Spend to Reimburse", desc: "Expenses & claims", color: "#3B9B5A", icon: Receipt },
  { num: "09", title: "Data to Decisions", desc: "Reports & insights", color: "#2F7D4C", icon: BarChart3 },
  { num: "10", title: "Connect & Support", desc: "HR communication & support", color: "#4CAF68", icon: Headphones },
];

/* ─── Dynamic Dashboard Image Component ─── */
function DashboardImage({
  activeIndex,
  prevIndex,
}: {
  activeIndex: number;
  prevIndex: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentImgRef = useRef<HTMLImageElement>(null);
  const prevImgRef = useRef<HTMLImageElement>(null);

  const currentSrc = featureImageMap[features[activeIndex].title];
  const prevSrc = featureImageMap[features[prevIndex].title];

  /* Animate image transition */
  useEffect(() => {
    if (!containerRef.current || !currentImgRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const tl = gsap.timeline();

    /* Fade out the previous image */
    if (prevImgRef.current && activeIndex !== prevIndex) {
      tl.fromTo(
        prevImgRef.current,
        { opacity: 1, scale: 1, filter: "blur(0px)" },
        {
          opacity: 0,
          scale: 1.06,
          filter: "blur(12px)",
          duration: 0.5,
          ease: "power2.in",
        },
        0
      );
    }

    /* Bring in the current image */
    tl.fromTo(
      currentImgRef.current,
      { opacity: 0, scale: 0.92, filter: "blur(10px)", y: 20 },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      activeIndex !== prevIndex ? 0.15 : 0
    );

    return () => {
      tl.kill();
    };
  }, [activeIndex, prevIndex]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ minHeight: "200px" }}>
      {/* Previous image (fading out) */}
      {activeIndex !== prevIndex && (
        <img
          ref={prevImgRef}
          src={prevSrc}
          alt=""
          className="absolute inset-0 w-full h-auto block will-change-transform"
          style={{ transformOrigin: "center center" }}
          aria-hidden="true"
        />
      )}
      {/* Current image (fading in) */}
      <img
        ref={currentImgRef}
        src={currentSrc}
        alt={`HR Core — ${features[activeIndex].title}`}
        className="relative w-full h-auto block will-change-transform"
        style={{ transformOrigin: "center center" }}
      />
    </div>
  );
}

/* ─── Main Component ─── */
export function HRMSPortalFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineTrackRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  /* Track previous index for crossfade */
  const handleSetActive = useCallback(
    (i: number) => {
      setActiveIndex((prev) => {
        setPrevIndex(prev);
        return i;
      });
    },
    []
  );

  /* ─── Preload all images ─── */
  useEffect(() => {
    features.forEach((f) => {
      const img = new Image();
      img.src = featureImageMap[f.title];
    });
  }, []);

  /* ─── GSAP ScrollTrigger Setup ─── */
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>(".hrms-feature-step");

      /* Master ScrollTrigger for overall progress */
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      });

      /* Per-feature triggers */
      steps.forEach((step, i) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top 55%",
          end: "bottom 45%",
          onEnter: () => handleSetActive(i),
          onEnterBack: () => handleSetActive(i),
        });

        /* Feature text reveal */
        const num = step.querySelector(".feature-num");
        const title = step.querySelector(".feature-title");
        const desc = step.querySelector(".feature-desc");
        const line = step.querySelector(".feature-accent-line");

        gsap.fromTo(
          [num, title, desc, line].filter(Boolean),
          { opacity: 0, y: 30, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 70%",
              end: "top 40%",
              scrub: 1,
            },
          }
        );
      });

      /* Dashboard subtle 3D perspective on scroll */
      if (dashboardRef.current) {
        gsap.to(dashboardRef.current, {
          rotateX: 2,
          rotateY: -1,
          y: -10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
          },
        });
      }

      /* Glow parallax */
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          y: -80,
          x: 30,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [handleSetActive]);

  const timelineFillHeight = `${(scrollProgress * 100).toFixed(1)}%`;

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#07120E] text-[#F4F7F5]"
      style={{ perspective: "1200px" }}
    >
      {/* ═══ AMBIENT BACKGROUND LAYERS ═══ */}

      {/* Layer 1: Large green radial glow */}
      <div
        ref={glowRef}
        className="absolute top-[20%] right-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(76,175,104,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Layer 2: Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,247,245,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(244,247,245,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Layer 3: Blurred top-left orb */}
      <div className="absolute top-[-5%] left-[10%] w-[500px] h-[500px] bg-[#2F7D4C]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Layer 4: Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ═══ MAIN CONTENT ═══ */}
      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* ─── Section Header ─── */}
        <div className="pt-16 md:pt-20 pb-12 md:pb-16 px-6 md:px-12 text-center max-w-5xl mx-auto">
          <h2
            className="hrms-heading text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-[1.05]"
            style={{
              background: "linear-gradient(180deg, #F4F7F5 0%, rgba(244,247,245,0.7) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Meet Our Powerful HRMS Portal
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed" style={{ color: "rgba(244,247,245,0.5)" }}>
            From{" "}
            <span className="text-[#F4F7F5] font-semibold">Hire to Retire.</span>{" "}
            Manage your complete employee journey with simple, smart tools that make everyday HR easier.
          </p>
        </div>

        {/* ─── Two-Column Scroll Layout ─── */}
        <div className="flex flex-col lg:flex-row relative px-6 md:px-12">
          {/* ▸ LEFT: Features + Timeline (42%) */}
          <div className="w-full lg:w-[42%] relative">
            {/* Vertical Timeline */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px" ref={timelineTrackRef}>
              {/* Track */}
              <div className="absolute inset-0 bg-white/[0.06] rounded-full" />
              {/* Fill */}
              <div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#4CAF68] to-[#2F7D4C] rounded-full transition-none"
                style={{ height: timelineFillHeight }}
              />
              {/* Nodes */}
              {features.map((f, i) => (
                <div
                  key={f.num}
                  className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
                  style={{ top: `${(i / (features.length - 1)) * 100}%` }}
                >
                  <div
                    className="w-3 h-3 rounded-full border-2 transition-all duration-500"
                    style={{
                      borderColor: i <= activeIndex ? "#4CAF68" : "rgba(244,247,245,0.12)",
                      backgroundColor:
                        i === activeIndex
                          ? "#4CAF68"
                          : i < activeIndex
                          ? "#2F7D4C"
                          : "transparent",
                      boxShadow: i === activeIndex ? "0 0 12px rgba(76,175,104,0.6)" : "none",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Feature Steps */}
            <div className="lg:pl-12">
              {features.map((feature, i) => {
                const isActive = activeIndex === i;
                const isPast = i < activeIndex;

                return (
                  <div
                    key={feature.num}
                    className="hrms-feature-step min-h-[60vh] lg:min-h-[80vh] flex flex-col justify-center py-12 lg:py-0"
                  >
                    <div
                      className="transition-all duration-700 ease-out"
                      style={{
                        opacity: isActive ? 1 : isPast ? 0.3 : 0.15,
                        transform: isActive ? "scale(1) translateY(0)" : "scale(0.97) translateY(8px)",
                        filter: isActive ? "blur(0px)" : "blur(0.5px)",
                      }}
                    >
                      {/* Icon + Number */}
                      <div className="feature-num flex items-center gap-4 mb-6">
                        <div
                          className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 shrink-0"
                          style={{
                            background: isActive ? feature.color : "rgba(244,247,245,0.06)",
                            border: isActive ? "none" : "1px solid rgba(244,247,245,0.08)",
                            boxShadow: isActive ? `0 8px 30px ${feature.color}40, 0 0 0 1px ${feature.color}30` : "none",
                          }}
                        >
                          <feature.icon
                            size={28}
                            className="transition-colors duration-500"
                            style={{ color: isActive ? "#fff" : "rgba(244,247,245,0.25)" }}
                            strokeWidth={2}
                          />
                        </div>
                        <span
                          className="text-sm font-bold tracking-widest uppercase transition-colors duration-500"
                          style={{ color: isActive ? feature.color : "rgba(244,247,245,0.15)" }}
                        >
                          {feature.num}
                        </span>
                        {/* Accent line */}
                        <div
                          className="feature-accent-line h-[2px] rounded-full transition-all duration-700 ease-out"
                          style={{
                            width: isActive ? "48px" : "20px",
                            background: isActive
                              ? `linear-gradient(90deg, ${feature.color}, transparent)`
                              : "rgba(244,247,245,0.08)",
                          }}
                        />
                      </div>

                      {/* Title */}
                      <h3
                        className="feature-title text-3xl md:text-4xl lg:text-[3.2rem] font-bold tracking-tight mb-4 leading-[1.1] transition-colors duration-500"
                        style={{ color: isActive ? "#F4F7F5" : "rgba(244,247,245,0.4)" }}
                      >
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="feature-desc text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-md transition-colors duration-500"
                        style={{ color: isActive ? "rgba(244,247,245,0.6)" : "rgba(244,247,245,0.2)" }}
                      >
                        {feature.desc}
                      </p>

                      {/* Active glow dot */}
                      {isActive && (
                        <div className="mt-8 flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#4CAF68] animate-pulse" />
                          <span className="text-sm font-medium text-[#4CAF68]/70 tracking-wide uppercase">Active Module</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ▸ RIGHT: Sticky Dashboard (58%) */}
          <div className="w-full lg:w-[58%] lg:pl-12 xl:pl-20 relative">
            <div className="sticky top-[12vh] h-auto lg:h-[76vh] flex items-center justify-center">
              {/* Dashboard Container with 3D */}
              <div
                ref={dashboardRef}
                className="relative w-full max-w-[720px] will-change-transform"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Ambient glow behind dashboard — shifts color per feature */}
                <div
                  className="absolute inset-[-20%] rounded-full pointer-events-none transition-all duration-1000"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${features[activeIndex].color}15, transparent 70%)`,
                  }}
                />

                {/* Animated color ring pulse */}
                <div
                  className="absolute inset-[-8%] rounded-[32px] pointer-events-none transition-all duration-700"
                  style={{
                    border: `1px solid ${features[activeIndex].color}18`,
                    boxShadow: `0 0 60px ${features[activeIndex].color}08, inset 0 0 60px ${features[activeIndex].color}05`,
                  }}
                />

                {/* Dashboard Frame */}
                <div className="relative rounded-[24px] overflow-hidden border border-white/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)] bg-[#0a1810]">
                  {/* Browser Chrome */}
                  <div className="h-10 md:h-12 bg-[#0c1a12] border-b border-white/[0.06] flex items-center px-5 gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    <div className="flex-1 mx-6">
                      <div className="h-6 bg-white/[0.04] rounded-md max-w-[200px] mx-auto flex items-center justify-center">
                        <span
                          className="text-[10px] font-medium tracking-wide transition-all duration-500"
                          style={{ color: `${features[activeIndex].color}90` }}
                        >
                          hrcore.com/{features[activeIndex].title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Image — DYNAMIC per feature */}
                  <div className="relative overflow-hidden bg-[#07120E]">
                    <DashboardImage
                      activeIndex={activeIndex}
                      prevIndex={prevIndex}
                    />

                    {/* Animated gradient overlay that shifts with active index */}
                    <div
                      className="absolute inset-0 pointer-events-none transition-all duration-1000 ease-out"
                      style={{
                        background: `linear-gradient(${150 + activeIndex * 15}deg, 
                          ${features[activeIndex].color}10 0%, 
                          transparent 40%, 
                          transparent 60%, 
                          rgba(7,18,14,0.3) 100%)`,
                      }}
                    />

                    {/* Bottom fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1810] to-transparent pointer-events-none" />

                    {/* Active feature indicator overlay */}
                    <div className="absolute bottom-4 left-5 right-5 flex items-center gap-3 pointer-events-none">
                      <div
                        className="px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-500 border backdrop-blur-md"
                        style={{
                          background: `${features[activeIndex].color}20`,
                          borderColor: `${features[activeIndex].color}40`,
                          color: features[activeIndex].color,
                        }}
                      >
                        {features[activeIndex].num} — {features[activeIndex].title}
                      </div>

                      {/* Mini progress bar */}
                      <div className="flex-1 h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700 ease-out"
                          style={{
                            width: `${((activeIndex + 1) / features.length) * 100}%`,
                            background: `linear-gradient(90deg, ${features[activeIndex].color}, ${features[activeIndex].color}80)`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reflection — mirrors current feature image */}
                <div className="hidden lg:block relative h-16 mt-1 overflow-hidden rounded-b-[24px] opacity-[0.04] pointer-events-none">
                  <img
                    src={featureImageMap[features[activeIndex].title]}
                    alt=""
                    className="w-full h-auto block transform scale-y-[-1] origin-top"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Section End Spacer ─── */}
        <div className="h-20 md:h-32" />
      </div>
    </section>
  );
}
