"use client";

import { useState } from "react";
import { HeroSection2 } from "@/components/HeroSection2";
import { HeroVariant } from "@/components/HeroVariant";
import { HeroVariant3 } from "@/components/HeroVariant3";
import { Settings2 } from "lucide-react";

export function HeroSwitcher({ activeVariant, setActiveVariant }: { activeVariant: 1 | 2 | 3; setActiveVariant: (v: 1 | 2 | 3) => void }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative">
      {/* Render the selected Hero section */}
      {activeVariant === 1 && <HeroSection2 />}
      {activeVariant === 2 && <HeroVariant />}
      {activeVariant === 3 && <HeroVariant3 />}

      {/* Fixed Switcher Panel on the right */}
      <div className="fixed right-0 top-1/3 -translate-y-1/2 z-[100] flex items-center">

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#16a34a] text-white p-3 rounded-l-xl shadow-xl hover:bg-[#15803d] transition-colors flex items-center justify-center border border-r-0 border-[#4CAF68]/30"
          title="Toggle UI Switcher"
        >
          <Settings2 size={24} className={isOpen ? "rotate-90 transition-transform duration-300" : "transition-transform duration-300"} />
        </button>

        {/* Panel Content */}
        <div
          className={`bg-[#060d10]/95 backdrop-blur-xl border border-r-0 border-[#16a34a]/30 shadow-2xl transition-all duration-300 ease-in-out ${
            isOpen ? "w-[200px] opacity-100 px-4 py-5" : "w-0 opacity-0 p-0 border-0"
          }`}
          style={{ borderTopLeftRadius: '0.75rem', borderBottomLeftRadius: '0.75rem' }}
        >
          <div className={isOpen ? "min-w-[160px]" : "hidden"}>
            <p className="text-white text-xs uppercase tracking-wider font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Hero Variants
            </p>
            <div className="space-y-3">
              <button
                onClick={() => setActiveVariant(1)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeVariant === 1
                    ? "bg-[#16a34a] text-white shadow-lg shadow-[#16a34a]/30 scale-[1.02]"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                V 1
              </button>
              <button
                onClick={() => setActiveVariant(2)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeVariant === 2
                    ? "bg-[#16a34a] text-white shadow-lg shadow-[#16a34a]/30 scale-[1.02]"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                V 2
              </button>
              <button
                onClick={() => setActiveVariant(3)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeVariant === 3
                    ? "bg-[#16a34a] text-white shadow-lg shadow-[#16a34a]/30 scale-[1.02]"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                V 3
              </button>
            </div>

            <p className="text-gray-500 text-[10px] mt-4 text-center">
              Click to preview designs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
