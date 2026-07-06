"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import ScrollToTop from "./components/ScrollToTop";
import { Award, ArrowRight, ExternalLink, Hammer, Music, FolderGit } from "lucide-react";

// Centralized Data Imports
import { PROJECTS } from "../data/projects";
import { CERTIFICATIONS } from "../data/certifications";

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

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [avatarError, setAvatarError] = useState(true);

  // Filter out Utilities from Homepage Featured list.
  const featuredShipped = PROJECTS.filter(
    (p) => p.status === "Shipped" && (p.name.includes("EcoTrace") || p.name.includes("Task Tracker"))
  );

  // In-progress sandbox projects
  const inProgress = PROJECTS.filter((p) => p.status === "In-Progress");

  // Top 3 certifications highlights
  const highlightedCerts = CERTIFICATIONS.slice(0, 3);

  return (
    <>
      {/* 3D Splash Screen Portal */}
      {!hasEntered ? (
        <SplashScreen onEnter={() => setHasEntered(true)} />
      ) : (
        <>
          <Navbar />
          <main className="flex-1 w-full bg-[#030303] opacity-0 animate-fade-in animate-fill-forwards" style={{ animationDelay: "100ms" }}>
            
            {/* Hero Section */}
            <Hero />

            {/* Subtle Divider */}
            <div className="border-t border-white/5 w-full" />

            {/* Complete Bio About Section */}
            <section id="about-section" className="py-44 bg-[#050508]/20 relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-5 gap-20 items-center">
                {/* Bio Info */}
                <div className="lg:col-span-3 space-y-10">
                  <div>
                    <p className="font-mono text-xs text-blue-400 uppercase tracking-widest">// About Me</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4">
                      Saatvik Gupta
                    </h2>
                    <div className="h-[2px] w-12 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full" />
                  </div>
                  <p className="text-gray-300 leading-relaxed text-base font-light">
                    Hi, I'm Saatvik — a 3rd year Computer Science student who believes the best way to learn is by actually doing. 
                    I don't wait for opportunities to come — I go out and create them. Passionate about using technology to solve 
                    real problems and create meaningful impact. Still finding my path, and I think that's okay — curiosity is my 
                    compass and consistency is my habit. Open to internships, collaborations, and opportunities.
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

                {/* Profile Avatar Card */}
                <div className="lg:col-span-2 flex justify-center">
                  <div className="relative w-64 h-64 glass-card border border-white/10 flex items-center justify-center overflow-hidden bg-[#08080c]">
                    <div className="absolute inset-3 border border-white/5 border-dashed pointer-events-none" />
                    
                    {!avatarError ? (
                      <div className="relative w-full h-full">
                        <Image
                          src="/portrait.jpg"
                          alt="Saatvik Gupta Portrait"
                          fill
                          className="object-cover"
                          onError={() => setAvatarError(true)}
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center space-y-4">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20 border border-white/15">
                          <span className="text-3xl font-extrabold text-white tracking-widest font-mono">SG</span>
                        </div>
                        <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                          Saatvik Gupta
                        </div>
                      </div>
                    )}

                    {/* Frame Accents */}
                    <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-white/20" />
                    <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-white/20" />
                    <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-white/20" />
                    <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-white/20" />
                  </div>
                </div>
              </div>
            </section>

            {/* Subtle Divider */}
            <div className="border-t border-white/5 w-full" />

            {/* Experience Timeline Section */}
            <Experience />

            {/* Subtle Divider */}
            <div className="border-t border-white/5 w-full" />

            {/* Featured Shipped Projects */}
            <section id="featured-highlights" className="py-44 bg-transparent relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                  <div>
                    <p className="font-mono text-xs text-emerald-400 uppercase tracking-widest">// Featured Shipped</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-3">
                      Featured Projects
                    </h2>
                  </div>
                  <Link
                    href="/projects"
                    className="group inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-400 hover:text-white transition-colors"
                  >
                    All Projects Directory
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="flex overflow-x-auto pb-10 pt-4 gap-8 no-scrollbar scroll-smooth snap-x snap-mandatory w-full">
                  {featuredShipped.map((project, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0 w-[300px] sm:w-[380px] snap-start glass-card rounded-none border border-white/10 overflow-hidden flex flex-col justify-between shadow-2xl bg-[#08080c] hover:border-blue-500/20 transition-all duration-300"
                    >
                      <div className="absolute inset-2 border border-white/5 border-dashed pointer-events-none" />

                      {/* Card Visual Header Placeholder */}
                      <div className={`h-40 w-full bg-gradient-to-b ${project.gradient} p-5 flex flex-col justify-between border-b border-white/5 relative`}>
                        <div className="absolute inset-2 border border-white/5 border-dashed pointer-events-none" />
                        <div className="flex items-center justify-between z-10">
                          <span className="text-[10px] font-mono text-gray-400">// SHIPPED {idx + 1}</span>
                          <div className="flex items-center gap-3">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                              <GithubIcon className="w-4.5 h-4.5" />
                            </a>
                            {project.liveUrl && (
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <ExternalLink className="w-4.5 h-4.5" />
                              </a>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-3.5 z-10">
                          <div className="p-2 bg-black/40 border border-white/10">
                            <FolderGit className="w-8 h-8 text-blue-400" />
                          </div>
                          <h3 className="text-base font-bold text-white truncate">{project.name.split(" — ")[0]}</h3>
                        </div>
                      </div>

                      <div className="p-5 space-y-4 flex-1 flex flex-col justify-between relative z-10">
                        <p className="text-gray-300 text-xs sm:text-sm leading-loose line-clamp-4 font-light">{project.description}</p>
                        <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[9px] px-2 py-0.5 bg-white/5 border border-white/5 text-gray-400 font-mono">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Subtle Divider */}
            <div className="border-t border-white/5 w-full" />

            {/* Brainstorming & Currently Building Section */}
            <section className="py-44 bg-[#050508]/20 relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
                <div>
                  <p className="font-mono text-xs text-blue-400 uppercase tracking-widest">// In-Progress Sandbox</p>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-3">
                    Currently Building & Brainstorming
                  </h2>
                  <div className="h-[2px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  {inProgress.map((project, idx) => (
                    <div
                      key={idx}
                      className="glass-card rounded-none border border-white/10 overflow-hidden flex flex-col justify-between shadow-2xl bg-[#08080c] hover:border-purple-500/20 transition-all duration-300 p-8 relative"
                    >
                      <div className="absolute inset-2 border border-white/5 border-dashed pointer-events-none" />

                      <div className="space-y-6 z-10">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-mono text-purple-400 bg-purple-500/10 border border-purple-500/25 px-2.5 py-1 uppercase tracking-wider">
                            {project.roadmap}
                          </span>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <GithubIcon className="w-5 h-5" />
                          </a>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="p-2.5 bg-white/5 border border-white/5">
                            {project.name.includes("Jack") ? (
                              <Hammer className="w-8 h-8 text-blue-400" />
                            ) : (
                              <Music className="w-8 h-8 text-purple-400" />
                            )}
                          </div>
                          <h3 className="text-lg font-bold text-white">{project.name}</h3>
                        </div>

                        <p className="text-gray-300 text-sm leading-loose font-light">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-4 mt-6 border-t border-white/5 z-10">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/5 text-gray-400 font-mono">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Subtle Divider */}
            <div className="border-t border-white/5 w-full" />

            {/* Top Certifications Highlight Row */}
            <section className="py-44 bg-transparent relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                  <div>
                    <p className="font-mono text-xs text-blue-400 uppercase tracking-widest">// Credential Highlights</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-3">
                      Top Certifications
                    </h2>
                  </div>
                  <Link
                    href="/certifications"
                    className="group inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-400 hover:text-white transition-colors"
                  >
                    All Certifications Directory
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="flex overflow-x-auto pb-10 pt-4 gap-8 no-scrollbar scroll-smooth snap-x snap-mandatory w-full">
                  {highlightedCerts.map((cert, idx) => (
                    <div
                      key={idx}
                      className="relative flex-shrink-0 w-[280px] sm:w-[340px] snap-start glass-card rounded-none border border-white/10 p-6 flex flex-col justify-between shadow-2xl bg-[#08080c] hover:border-blue-500/20 transition-all duration-300 h-[320px]"
                    >
                      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20" />
                      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20" />
                      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/20" />
                      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20" />

                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 uppercase tracking-wider">{cert.category}</span>
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
                  ))}
                </div>
              </div>
            </section>

          </main>
          <ScrollToTop />
        </>
      )}
    </>
  );
}
