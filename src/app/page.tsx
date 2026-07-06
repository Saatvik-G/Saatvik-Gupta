"use client";

import React, { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
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
        <About />
        <Skills />
        <Certifications />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <ScrollToTop />
    </>
  );
}
