"use client";

import React, { useState } from "react";
import Link from "next/link";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollToTop from "./components/ScrollToTop";
import { Award, Code2, ArrowRight, Database, Cpu, Cloud, Shield, CheckCircle2 } from "lucide-react";

// Top projects for homepage highlights
const FEATURED_PROJECTS = [
  {
    name: "EcoTrace — Carbon Footprint Platform",
    description: "A personal carbon footprint tracking platform built with HTML/CSS/JS. Features an interactive dashboard, activity logging, Chart.js analytics, AI coaching, and offline caching via localStorage.",
    tags: ["HTML5", "CSS3", "JavaScript", "Chart.js"],
    githubUrl: "https://github.com/Saatvik-G/Carbon-Footprint-Awareness-Platform",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    name: "Jack&Trades — Service Marketplace",
    description: "A full-stack marketplace web application connecting local freelancers and skilled handymen directly with clients. Supports streamlined scheduling, booking mechanisms, and customer reviews.",
    tags: ["Next.js", "React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Saatvik-G",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
  },
  {
    name: "Music Recommendation System",
    description: "An intelligent, content-based recommendation engine filtering tracks based on audio features, user preference clustering, and mood modeling. Built with Python and Flask.",
    tags: ["Python", "Pandas", "Scikit-learn", "Flask"],
    githubUrl: "https://github.com/Saatvik-G",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
  }
];

// Top certifications for highlights
const HIGHLIGHT_CERTS = [
  { title: "Google Cloud Generative AI Leader", issuer: "Infosys Springboard", date: "June 2026", cat: "AI & ML" },
  { title: "Data Analysis with Python (300 hrs)", issuer: "freeCodeCamp", date: "April 2026", cat: "Data" },
  { title: "AWS Solutions Architecture", issuer: "Forage", date: "January 2026", cat: "Cloud" }
];

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <>
      {/* 3D Splash Screen Portal */}
      {!hasEntered && <SplashScreen onEnter={() => setHasEntered(true)} />}

      {/* Portfolio Site Content */}
      <Navbar />
      <main className="flex-1 w-full opacity-0 animate-fade-in bg-[#030303]" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
        
        {/* Hero Section */}
        <Hero />

        {/* Intro Section (Bio & Placeholder Profile Image) */}
        <section className="py-32 border-t border-white/5 bg-[#050508]/40 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-5 gap-16 items-center">
            {/* Bio Info */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <p className="font-mono text-xs text-blue-400 uppercase tracking-widest">// Profile Brief</p>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-3">
                  Hi, I'm Saatvik
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                A 3rd year Computer Science student at PES University who believes the best way to learn is by actually doing. 
                I don't wait for opportunities to come — I go out and create them. Passionate about using technology to solve 
                real problems and create meaningful impact.
              </p>
              <p className="text-gray-400 leading-relaxed text-base font-light">
                Still finding my path, and I think that's okay — curiosity is my compass and consistency is my habit. Open to internships, collaborations, and opportunities.
              </p>
            </div>

            {/* Profile Placeholder Image Card */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-72 h-72 glass-card border border-white/10 flex items-center justify-center group overflow-hidden bg-[#08080c]">
                {/* Visual Blueprint Frame */}
                <div className="absolute inset-3 border border-white/5 border-dashed pointer-events-none" />
                <div className="absolute top-4 left-4 text-[9px] font-mono text-gray-600 uppercase tracking-widest">// PORTRAIT_PLACEHOLDER</div>
                
                {/* High-End Geometric SVG Placeholder Avatar */}
                <svg className="w-40 h-40 text-gray-700 group-hover:text-blue-500/80 transition-colors duration-500" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="35" r="18" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M20 80C20 65 30 58 50 58C70 58 80 65 80 80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="opacity-40" />
                </svg>

                {/* Corner Accents */}
                <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-white/20" />
                <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-white/20" />
                <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-white/20" />
                <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-white/20" />
              </div>
            </div>
          </div>
        </section>

        {/* Overlapping Staggered Featured Projects Showcase */}
        <section id="featured-highlights" className="py-32 border-t border-white/5 bg-transparent relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <p className="font-mono text-xs text-purple-400 uppercase tracking-widest">// Selected Works</p>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-3">
                  Featured Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-blue-400 hover:text-white transition-colors"
              >
                View Full Directory
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Overlapping horizontal stack list */}
            <div className="flex overflow-x-auto pb-10 pt-4 px-2 no-scrollbar scroll-smooth snap-x snap-mandatory">
              <div className="flex gap-0 pl-4">
                {FEATURED_PROJECTS.map((project, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-[290px] sm:w-[350px] snap-start glass-card rounded-none border border-white/10 bg-[#08080c] overflow-hidden flex flex-col justify-between shadow-2xl relative transition-all duration-500 hover:scale-[1.03] hover:z-20 hover:border-blue-500/40"
                    style={{
                      marginLeft: idx === 0 ? "0px" : "-50px", // negative margin creates overlapping effect
                    }}
                  >
                    {/* Visual Blueprint Frame */}
                    <div className="absolute inset-2 border border-white/5 border-dashed pointer-events-none" />

                    <div className={`h-32 w-full bg-gradient-to-b ${project.gradient} p-5 flex flex-col justify-between border-b border-white/5`}>
                      <Code2 className="w-5 h-5 text-gray-500" />
                      <h3 className="text-base font-bold text-white leading-snug truncate">
                        {project.name.split(" — ")[0]}
                      </h3>
                    </div>

                    <div className="p-5 space-y-5 flex-1 flex flex-col justify-between relative z-10">
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-4 font-light">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] px-2 py-0.5 bg-white/5 border border-white/5 text-gray-400 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section (Core skills & Top certifications) */}
        <section className="py-32 border-t border-white/5 bg-[#050508]/40 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-5 gap-16 items-start">
            
            {/* Left Column: Top skills highlights */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="font-mono text-xs text-blue-400 uppercase tracking-widest">// Technical Core</p>
                <h2 className="text-3xl font-extrabold tracking-tight text-white mt-3">
                  Core Highlights
                </h2>
                <p className="text-gray-400 text-sm mt-4 font-light leading-relaxed">
                  A snapshot of key areas in computing systems and infrastructure.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Cloud & Infrastructure Solutions", icon: <Cloud className="w-4 h-4 text-blue-400" /> },
                  { label: "AI Workflow Integration & ML Models", icon: <Cpu className="w-4 h-4 text-purple-400" /> },
                  { label: "Data Pipeline & Analytical Storytelling", icon: <Database className="w-4 h-4 text-emerald-400" /> },
                  { label: "Cybersecurity Compliance & Privacy", icon: <Shield className="w-4 h-4 text-red-400" /> },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3.5 p-4 bg-white/5 border border-white/5 font-mono text-xs text-gray-300">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Top certifications highlights */}
            <div className="lg:col-span-3 space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono text-gray-400">
                  // Top Certifications
                </h3>
                <Link
                  href="/credentials"
                  className="group inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-400 hover:text-white transition-colors"
                >
                  All Credentials
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="space-y-5">
                {HIGHLIGHT_CERTS.map((cert, idx) => (
                  <div
                    key={idx}
                    className="relative glass-card p-6 rounded-none border border-white/10 flex items-center justify-between gap-6 bg-[#08080c] hover:border-blue-500/30 group"
                  >
                    {/* Corners */}
                    <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-white/20 group-hover:border-blue-500/40" />
                    <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-white/20 group-hover:border-blue-500/40" />
                    <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-white/20 group-hover:border-blue-500/40" />
                    <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-white/20 group-hover:border-blue-500/40" />

                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/5 border border-white/5 flex-shrink-0 text-gray-400 group-hover:text-blue-400 transition-colors">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-200 text-sm group-hover:text-white transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1 font-mono">{cert.issuer} • {cert.date}</p>
                      </div>
                    </div>
                    <span className="hidden sm:inline-block font-mono text-[9px] uppercase tracking-widest text-gray-500 bg-white/5 px-2.5 py-1">
                      {cert.cat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>
      <ScrollToTop />
    </>
  );
}
