"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import ScrollToTop from "./components/ScrollToTop";
import ProjectModal from "./components/ProjectModal";
import { Award, Code2, ArrowRight, ExternalLink, Hammer, Music, FolderGit, MapPin, Mail, MessageSquare, Layers } from "lucide-react";

// Centralized JSON Import
import resumeData from "../data/resumeData.json";

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
  
  // Modal states for progressive disclosure
  const [selectedProj, setSelectedProj] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Parse centralized projects data
  const homepageProjects = resumeData.projects.filter(
    (p) => p.status === "Shipped" && (p.name.includes("EcoTrace") || p.name.includes("Task Tracker"))
  );
  
  const sandboxProjects = resumeData.projects.filter((p) => p.status === "In-Progress");
  
  const highlightedCerts = resumeData.certifications.slice(0, 3);

  const openProjectDetails = (proj: any) => {
    setSelectedProj(proj);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* 3D Splash Screen Portal */}
      {!hasEntered ? (
        <SplashScreen onEnter={() => setHasEntered(true)} />
      ) : (
        <>
          <Navbar />
          <main className="flex-1 w-full bg-[#030303] opacity-0 animate-fade-in animate-fill-forwards" style={{ animationDelay: "100ms" }}>
            
            {/* Hero Splash Header */}
            <Hero />

            {/* Split-Pane Dashboard Container */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid lg:grid-cols-3 gap-16 items-start">
              
              {/* LEFT PANE: Sticky Bio, Metrics, & Contact Panel */}
              <div className="lg:sticky lg:top-28 space-y-10 lg:pr-6">
                
                {/* Visual Avatar & Name */}
                <div className="space-y-6">
                  <div className="relative w-28 h-28 glass-card border border-white/10 flex items-center justify-center overflow-hidden bg-[#08080c]">
                    <div className="absolute inset-1.5 border border-white/5 border-dashed pointer-events-none" />
                    {!avatarError ? (
                      <div className="relative w-full h-full">
                        <Image
                          src="/portrait.jpg"
                          alt={resumeData.profile.name}
                          fill
                          className="object-cover"
                          onError={() => setAvatarError(true)}
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg border border-white/15">
                        <span className="text-xl font-extrabold text-white tracking-widest font-mono">SG</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h1 className="text-2xl font-extrabold text-white tracking-tight">{resumeData.profile.name}</h1>
                    <p className="text-xs font-mono text-blue-400 mt-2 tracking-wider leading-relaxed">{resumeData.profile.subtitle}</p>
                  </div>
                </div>

                {/* Left side quick anchors */}
                <nav className="hidden lg:flex flex-col gap-3 font-mono text-xs text-gray-500 uppercase tracking-widest pt-4 border-t border-white/5">
                  <a href="#experience" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <span>↳</span> Experience Timeline
                  </a>
                  <a href="#featured-projects" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <span>↳</span> Featured Shipped
                  </a>
                  <a href="#sandbox" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <span>↳</span> Brainstorming Sandbox
                  </a>
                  <a href="#top-certifications" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <span>↳</span> Certifications
                  </a>
                </nav>

                {/* Key Metrics Dashboard */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                  {resumeData.metrics.map((metric, i) => (
                    <div key={i} className="bg-[#08080c] border border-white/5 p-4 flex flex-col justify-between">
                      <div className="text-xl font-extrabold text-white tracking-tight font-mono">{metric.value}</div>
                      <div className="text-[10px] text-gray-400 font-mono uppercase tracking-wider mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Quick Info & Contact */}
                <div className="space-y-4 pt-6 border-t border-white/5 text-xs text-gray-400 font-mono">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span>{resumeData.profile.location}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <a href={`mailto:${resumeData.profile.email}`} className="hover:text-white transition-colors">{resumeData.profile.email}</a>
                  </div>
                  <div className="flex gap-4 pt-2">
                    <a href={resumeData.profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                      <MessageSquare className="w-4 h-4 text-blue-500" /> LinkedIn
                    </a>
                    <a href={resumeData.profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                      <GithubIcon className="w-4 h-4 text-white" /> GitHub
                    </a>
                  </div>
                </div>

              </div>

              {/* RIGHT PANE: Scrollable Feed */}
              <div className="lg:col-span-2 space-y-24">
                
                {/* 1. About Bio text */}
                <section id="bio" className="space-y-6">
                  <div>
                    <p className="font-mono text-xs text-blue-400 uppercase tracking-widest">// Profile Bio</p>
                    <h2 className="text-xl font-extrabold text-white uppercase tracking-wider font-mono mt-2">Executive Summary</h2>
                  </div>
                  <p className="text-gray-300 leading-loose text-base font-light">
                    {resumeData.profile.bio}
                  </p>
                </section>

                <div className="border-t border-white/5 w-full" />

                {/* 2. Experience Section */}
                <section id="experience">
                  <Experience />
                </section>

                <div className="border-t border-white/5 w-full" />

                {/* 3. Featured Shipped Projects */}
                <section id="featured-projects" className="space-y-12">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <p className="font-mono text-xs text-emerald-400 uppercase tracking-widest">// Featured Shipped</p>
                      <h2 className="text-2xl font-extrabold tracking-tight text-white mt-3">Selected Projects</h2>
                    </div>
                    <Link
                      href="/projects"
                      className="group inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-400 hover:text-white transition-colors"
                    >
                      All Projects
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Clean side-by-side grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {homepageProjects.map((project, idx) => (
                      <div
                        key={idx}
                        onClick={() => openProjectDetails(project)}
                        className="glass-card rounded-none border border-white/10 overflow-hidden flex flex-col justify-between shadow-2xl bg-[#08080c] hover:border-blue-500/20 transition-all duration-300 cursor-pointer p-6 relative group"
                      >
                        <div className="absolute inset-2 border border-white/5 border-dashed pointer-events-none" />
                        
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-mono text-gray-500">// FEATURED {idx + 1}</span>
                            <FolderGit className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <h3 className="text-lg font-bold text-white leading-tight">{project.name.split(" — ")[0]}</h3>
                          <p className="text-gray-300 text-xs sm:text-sm leading-loose line-clamp-3 font-light">{project.description}</p>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4 mt-6 border-t border-white/5 z-10">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[9px] px-2 py-0.5 bg-white/5 border border-white/5 text-gray-400 font-mono">{tag}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="border-t border-white/5 w-full" />

                {/* 4. Brainstorming sandbox */}
                <section id="sandbox" className="space-y-12">
                  <div>
                    <p className="font-mono text-xs text-blue-400 uppercase tracking-widest">// In-Progress Sandbox</p>
                    <h2 className="text-2xl font-extrabold tracking-tight text-white mt-3">Currently Building</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {sandboxProjects.map((project, idx) => (
                      <div
                        key={idx}
                        onClick={() => openProjectDetails(project)}
                        className="glass-card rounded-none border border-white/10 overflow-hidden flex flex-col justify-between shadow-2xl bg-[#08080c] hover:border-purple-500/20 transition-all duration-300 p-6 relative cursor-pointer group"
                      >
                        <div className="absolute inset-2 border border-white/5 border-dashed pointer-events-none" />

                        <div className="space-y-4 z-10">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-mono text-purple-400 bg-purple-500/10 border border-purple-500/25 px-2.5 py-1 uppercase tracking-wider font-bold">
                              {project.roadmap}
                            </span>
                            <Hammer className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <h3 className="text-lg font-bold text-white">{project.name}</h3>
                          <p className="text-gray-300 text-xs sm:text-sm leading-loose line-clamp-3 font-light">
                            {project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4 mt-6 border-t border-white/5 z-10">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[9px] px-2 py-0.5 bg-white/5 border border-white/5 text-gray-400 font-mono">{tag}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="border-t border-white/5 w-full" />

                {/* 5. Top Certifications */}
                <section id="top-certifications" className="space-y-12">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <p className="font-mono text-xs text-blue-400 uppercase tracking-widest">// Credential Highlights</p>
                      <h2 className="text-2xl font-extrabold tracking-tight text-white mt-3">Top Certifications</h2>
                    </div>
                    <Link
                      href="/certifications"
                      className="group inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-400 hover:text-white transition-colors"
                    >
                      All Certifications
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {highlightedCerts.map((cert, idx) => (
                      <div
                        key={idx}
                        className="relative glass-card p-5 rounded-none border border-white/10 flex flex-col justify-between shadow-2xl bg-[#08080c] hover:border-blue-500/20 transition-all duration-300 h-[260px]"
                      >
                        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20" />
                        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20" />
                        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/20" />
                        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20" />

                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 uppercase tracking-wider font-bold">{cert.category}</span>
                          <Award className="w-4.5 h-4.5 text-gray-500" />
                        </div>

                        {/* Cert Seal in the middle */}
                        <div className="flex justify-center items-center py-2 opacity-35">
                          <svg className="w-12 h-12 text-gray-600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            <path d="M50 28 L54 38 L65 38 L56 45 L60 56 L50 49 L40 56 L44 45 L35 38 L46 38 Z" fill="currentColor" />
                            <path d="M43 72 L37 88 L45 82 L53 88 L47 72" fill="currentColor" opacity="0.5" />
                            <path d="M57 72 L51 88 L59 82 L67 88 L61 72" fill="currentColor" opacity="0.5" />
                          </svg>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-bold text-gray-200 text-xs line-clamp-2 leading-snug">{cert.title}</h3>
                          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-gray-500">
                            <span>{cert.issuer}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

              </div>
            </div>

            {/* Reusable Progressive Disclosure Modal Dialog */}
            <ProjectModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              project={selectedProj}
            />

          </main>
          <ScrollToTop />
        </>
      )}
    </>
  );
}
