"use client";

import React, { useState } from "react";
import Link from "next/link";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollToTop from "./components/ScrollToTop";
import { Award, Code2, ChevronLeft, ChevronRight, Layers, ArrowRight, ExternalLink } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const FEATURED_PROJECTS = [
  {
    name: "EcoTrace — Carbon Footprint Platform",
    description: "A personal carbon footprint tracking platform built with HTML/CSS/JS. Features an interactive dashboard, activity logging, Chart.js analytics, AI coaching, and offline caching via localStorage.",
    tags: ["HTML5", "CSS3", "JavaScript", "Chart.js"],
    githubUrl: "https://github.com/Saatvik-G/Carbon-Footprint-Awareness-Platform",
    liveUrl: "https://saatvik-g.github.io/Carbon-Footprint-Awareness-Platform/",
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

const HIGHLIGHT_CERTS = [
  { title: "Google Cloud Generative AI Leader", issuer: "Infosys Springboard", date: "June 2026", cat: "AI & ML" },
  { title: "Data Analysis with Python (300 hrs)", issuer: "freeCodeCamp", date: "April 2026", cat: "Data" },
  { title: "AWS Solutions Architecture", issuer: "Forage", date: "January 2026", cat: "Cloud" }
];

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [projIndex, setProjIndex] = useState(0);
  const [certIndex, setCertIndex] = useState(0);

  const nextProj = () => setProjIndex((prev) => (prev + 1) % FEATURED_PROJECTS.length);
  const prevProj = () => setProjIndex((prev) => (prev - 1 + FEATURED_PROJECTS.length) % FEATURED_PROJECTS.length);

  const nextCert = () => setCertIndex((prev) => (prev + 1) % HIGHLIGHT_CERTS.length);
  const prevCert = () => setCertIndex((prev) => (prev - 1 + HIGHLIGHT_CERTS.length) % HIGHLIGHT_CERTS.length);

  return (
    <>
      {/* 3D Splash Screen Portal */}
      {!hasEntered && <SplashScreen onEnter={() => setHasEntered(true)} />}

      {/* Portfolio Site Content */}
      <Navbar />
      <main className="flex-1 w-full opacity-0 animate-fade-in bg-[#030303]" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
        
        {/* Hero Section */}
        <Hero />

        {/* Intro Brief */}
        <section className="py-36 border-t border-white/5 bg-[#050508]/40 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-5 gap-20 items-center">
            {/* Bio Info */}
            <div className="lg:col-span-3 space-y-10">
              <div>
                <p className="font-mono text-xs text-blue-400 uppercase tracking-widest">// Profile Brief</p>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4">
                  Hi, I'm Saatvik
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                A 3rd year Computer Science student at PES University who believes the best way to learn is by actually doing. 
                I don't wait for opportunities to come — I go out and create them. Passionate about using technology to solve 
                real problems and create meaningful impact.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/skills"
                  className="group inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white text-xs uppercase tracking-widest font-bold font-mono transition-colors"
                >
                  View Skills Catalog
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Profile Placeholder Image Card */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-72 h-72 glass-card border border-white/10 flex items-center justify-center group overflow-hidden bg-[#08080c]">
                <div className="absolute inset-3 border border-white/5 border-dashed pointer-events-none" />
                <div className="absolute top-4 left-4 text-[9px] font-mono text-gray-600 uppercase tracking-widest">// PORTRAIT_PLACEHOLDER</div>
                
                <svg className="w-40 h-40 text-gray-700 group-hover:text-blue-500/80 transition-colors duration-500" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="35" r="18" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M20 80C20 65 30 58 50 58C70 58 80 65 80 80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="opacity-40" />
                </svg>

                {/* Frame Accents */}
                <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-white/20" />
                <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-white/20" />
                <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-white/20" />
                <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-white/20" />
              </div>
            </div>
          </div>
        </section>

        {/* 3D Stacked Featured Projects Carousel */}
        <section id="featured-highlights" className="py-36 border-t border-white/5 bg-transparent relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center space-y-16">
            <div className="w-full flex items-center justify-between">
              <div>
                <p className="font-mono text-xs text-purple-400 uppercase tracking-widest">// Selected Works</p>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-3">
                  Featured Projects
                </h2>
              </div>
              <div className="flex gap-4 items-center">
                <Link
                  href="/projects"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-400 hover:text-white transition-colors mr-4"
                >
                  All Projects Directory
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <div className="flex gap-2">
                  <button onClick={prevProj} className="p-3 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextProj} className="p-3 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* 3D Stack Deck */}
            <div className="relative w-full max-w-[450px] h-[430px] flex items-center justify-center card-perspective">
              {FEATURED_PROJECTS.map((project, idx) => {
                let offset = idx - projIndex;
                if (offset < 0) offset = offset + FEATURED_PROJECTS.length;
                const isVisible = offset < 3;
                if (!isVisible) return null;

                const zIndex = 30 - offset;
                const opacity = 1 - offset * 0.25;
                const scale = 1 - offset * 0.05;
                const translateX = offset * 25;
                const translateY = offset * 15;
                const rotateY = offset * 3;

                return (
                  <div
                    key={idx}
                    onClick={() => offset > 0 && setProjIndex(idx)}
                    style={{
                      zIndex,
                      opacity,
                      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotateY(${rotateY}deg)`,
                      transition: "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.6s, z-index 0.6s",
                    }}
                    className={`absolute w-full h-[380px] glass-card rounded-none border border-white/10 overflow-hidden flex flex-col justify-between shadow-2xl bg-[#08080c] ${
                      offset > 0 ? "cursor-pointer select-none" : ""
                    }`}
                  >
                    <div className="absolute inset-2 border border-white/5 border-dashed pointer-events-none" />

                    <div className={`h-32 w-full bg-gradient-to-b ${project.gradient} p-5 flex flex-col justify-between border-b border-white/5`}>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-gray-400">// FEATURED {idx + 1}</span>
                        {offset === 0 && (
                          <div className="flex items-center gap-3">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                              <GithubIcon className="w-5 h-5" />
                            </a>
                            {project.liveUrl && (
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <ExternalLink className="w-5 h-5" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-white truncate">{project.name.split(" — ")[0]}</h3>
                    </div>

                    <div className="p-5 space-y-4 flex-1 flex flex-col justify-between relative z-10">
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-4 font-light">{project.description}</p>
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[9px] px-2 py-0.5 bg-white/5 border border-white/5 text-gray-400 font-mono">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3D Stacked Certifications Carousel */}
        <section className="py-36 border-t border-white/5 bg-[#050508]/40 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center space-y-16">
            <div className="w-full flex items-center justify-between">
              <div>
                <p className="font-mono text-xs text-blue-400 uppercase tracking-widest">// Credential Highlights</p>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-3">
                  Top Certifications
                </h2>
              </div>
              <div className="flex gap-4 items-center">
                <Link
                  href="/certifications"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-400 hover:text-white transition-colors mr-4"
                >
                  All Certifications Directory
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <div className="flex gap-2">
                  <button onClick={prevCert} className="p-3 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextCert} className="p-3 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* 3D Stack Deck */}
            <div className="relative w-full max-w-[400px] h-[370px] flex items-center justify-center card-perspective">
              {HIGHLIGHT_CERTS.map((cert, idx) => {
                let offset = idx - certIndex;
                if (offset < 0) offset = offset + HIGHLIGHT_CERTS.length;
                const isVisible = offset < 3;
                if (!isVisible) return null;

                const zIndex = 30 - offset;
                const opacity = 1 - offset * 0.25;
                const scale = 1 - offset * 0.05;
                const translateX = offset * 20;
                const translateY = offset * 12;
                const rotateY = offset * 3;

                return (
                  <div
                    key={idx}
                    onClick={() => offset > 0 && setCertIndex(idx)}
                    style={{
                      zIndex,
                      opacity,
                      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotateY(${rotateY}deg)`,
                      transition: "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.6s, z-index 0.6s",
                    }}
                    className={`absolute w-full h-[320px] glass-card rounded-none border border-white/10 p-6 flex flex-col justify-between shadow-2xl bg-[#08080c] ${
                      offset > 0 ? "cursor-pointer select-none" : ""
                    }`}
                  >
                    <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20" />
                    <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20" />
                    <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/20" />
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20" />

                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 uppercase tracking-wider">{cert.cat}</span>
                      <Award className="w-5 h-5 text-gray-500" />
                    </div>

                    {/* Cert Seal in the middle */}
                    <div className="flex justify-center items-center py-2 opacity-35">
                      <svg className="w-16 h-16 text-gray-600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                        <path d="M50 28 L54 38 L65 38 L56 45 L60 56 L50 49 L40 56 L44 45 L35 38 L46 38 Z" fill="currentColor" />
                        <path d="M43 72 L37 88 L45 82 L53 88 L47 72" fill="currentColor" opacity="0.5" />
                        <path d="M57 72 L51 88 L59 82 L67 88 L61 72" fill="currentColor" opacity="0.5" />
                      </svg>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-bold text-gray-200 text-sm line-clamp-2">{cert.title}</h3>
                      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-400">
                        <span>{cert.issuer}</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>
      <ScrollToTop />
    </>
  );
}
