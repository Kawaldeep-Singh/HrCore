"use client";

import * as React from "react";
import Image from "next/image";

export function Logo({ className = "", width, height }: { className?: string, width?: number, height?: number }) {
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`} 
      style={width && height ? { width, height } : undefined}
    >
      <Image 
        src="/BG-Logo.png" 
        alt="HR Core Logo" 
        fill
        sizes="(max-width: 768px) 100vw, 300px"
        className="object-contain"
        priority
      />
    </div>
  );
}
