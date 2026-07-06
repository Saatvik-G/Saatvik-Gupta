"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ChevronRight } from "lucide-react";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#030303]" />,
});

interface SplashScreenProps {
  onEnter: () => void;
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const [isFading, setIsFading] = useState(false);
  const [mounted, setMounted] = useState(true);
  const [triggerBeam, setTriggerBeam] = useState(false);

  const handleEnter = () => {
    setTriggerBeam(true);
    // Allow the light beam to travel across the screen first, then fade out the splash screen
    setTimeout(() => {
      setIsFading(true);
    }, 800);

    setTimeout(() => {
      setMounted(false);
      onEnter();
    }, 1500);
  };

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030303] transition-opacity duration-1000 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* 3D Canvas Background for Splash Screen */}
      <div className="absolute inset-0 w-full h-full z-0">
        <HeroCanvas />
      </div>

      {/* Traveling Light Beam Indicator */}
      {triggerBeam && <div className="animate-light-beam z-50 pointer-events-none" />}

      {/* Entry UI Overlay */}
      <div className={`relative z-10 text-center space-y-8 max-w-md px-6 select-none transition-all duration-700 ${
        triggerBeam ? "scale-95 opacity-50 blur-sm" : ""
      }`}>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border border-white/20 shadow-lg shadow-purple-500/20">
            <span className="text-2xl font-extrabold text-white tracking-widest font-mono">SG</span>
          </div>
          <span className="text-[10px] font-mono tracking-[0.25em] text-gray-400 uppercase">
            Saatvik Gupta
          </span>
        </div>

        <button
          onClick={handleEnter}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-medium tracking-widest text-xs uppercase transition-all duration-500 cursor-pointer overflow-hidden shadow-2xl hover:scale-105"
        >
          <span className="relative z-10 flex items-center gap-2">
            Enter Portfolio
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 transition-transform duration-500" />
        </button>
      </div>

    </div>
  );
}
