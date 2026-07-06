"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ArrowRight, Terminal } from "lucide-react";

// Dynamically import the 3D canvas so it loads asynchronously and does not block initial load
const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-radial-gradient-fallback opacity-40" />,
});

export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("featured-highlights");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-12 overflow-hidden bg-black"
    >
      {/* 3D Canvas wrapper */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <HeroCanvas />
      </div>

      {/* Hero content container with expanded padding and spacing */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 text-center relative pointer-events-auto flex flex-col items-center justify-center">
        {/* Title with increased margin-bottom */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white mb-10 leading-none">
          Hi, I am{" "}
          <span className="block mt-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent animate-fade-in py-2">
            Saatvik Gupta
          </span>
        </h1>

        {/* Specialization Subtitle */}
        <p className="text-sm md:text-base font-mono uppercase tracking-[0.2em] text-blue-400 mb-8 max-w-2xl mx-auto">
          CS Student | Cloud • AI • Data Analytics • Cybersecurity
        </p>

        {/* Philosophy with expanded margins */}
        <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto italic mb-16 leading-relaxed tracking-wide">
          "Curiosity is my compass. <br className="sm:hidden" /> Consistency is my habit."
        </p>

        {/* Actions CTA with expanded spacing */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#featured-highlights"
            onClick={handleScrollToProjects}
            className="group flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium text-sm transition-all duration-300 cursor-pointer shadow-lg shadow-purple-500/10 hover:scale-[1.03]"
          >
            Explore Highlights
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/contact"
            className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-gray-200 font-medium text-sm transition-all duration-300 cursor-pointer"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Decorative gradient overlay at bottom to transition smoothly into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
    </section>
  );
}
