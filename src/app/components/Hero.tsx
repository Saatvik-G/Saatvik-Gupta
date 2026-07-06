"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ArrowRight, Download, Terminal } from "lucide-react";

// Dynamically import the 3D canvas so it loads asynchronously and does not block initial load
const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-radial-gradient-fallback opacity-40" />,
});

export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("projects");
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
      className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* 3D Canvas wrapper */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <HeroCanvas />
      </div>

      {/* Hero content container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 text-center relative pointer-events-auto">
        {/* Code tag indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold uppercase tracking-widest mb-6 animate-fade-in">
          <Terminal className="w-3.5 h-3.5" />
          <span>Computer Science Portfolio</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Hi, I am{" "}
          <span className="block mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Saatvik Gupta
          </span>
        </h1>

        {/* Tagline / Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 mb-4 max-w-3xl mx-auto">
          CS Student | Cloud • AI • Data Analytics • Cybersecurity
        </p>

        {/* Philosophy */}
        <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto italic mb-10">
          "Curiosity is my compass. Consistency is my habit."
        </p>

        {/* Actions CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium text-sm transition-all duration-300 cursor-pointer shadow-lg shadow-purple-500/10 hover:scale-[1.02]"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-gray-200 font-medium text-sm transition-all duration-300 cursor-pointer"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Decorative gradient overlay at bottom to transition smoothly into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
    </section>
  );
}
