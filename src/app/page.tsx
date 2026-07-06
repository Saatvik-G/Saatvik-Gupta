"use client";

import React, { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <>
      {/* 3D Splash Screen Portal */}
      {!hasEntered && <SplashScreen onEnter={() => setHasEntered(true)} />}
      
      {/* Portfolio Site Content */}
      <Navbar />
      <main className="flex-1 w-full opacity-0 animate-fade-in" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
        <Hero />
        
        {/* Featured Highlights sections with generous vertical spacing */}
        <div id="featured-highlights" className="bg-[#030303] py-24 space-y-36">
          <Projects />
          <Certifications />
        </div>
      </main>
      <ScrollToTop />
    </>
  );
}
