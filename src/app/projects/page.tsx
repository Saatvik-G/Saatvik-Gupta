"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { ExternalLink, Code2, FolderGit, Layers } from "lucide-react";

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

interface Project {
  name: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  gradient: string;
  category: "Full-Stack" | "AI & Data Science" | "Utilities";
}

const PROJECTS: Project[] = [
  {
    name: "EcoTrace — Carbon Footprint Platform",
    description: "A personal carbon footprint tracking platform built with HTML/CSS/JS. Features an interactive dashboard, activity logging, Chart.js analytics, AI coaching, gamified achievements, and offline caching via localStorage.",
    tags: ["HTML5", "CSS3", "JavaScript", "Chart.js", "localStorage"],
    githubUrl: "https://github.com/Saatvik-G/Carbon-Footprint-Awareness-Platform",
    liveUrl: "https://saatvik-g.github.io/Carbon-Footprint-Awareness-Platform/",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    category: "Utilities",
  },
  {
    name: "Jack&Trades",
    description: "An AI ecosystem for cross-disciplinary discovery, currently being actively built with Next.js, TypeScript, Tailwind CSS, and the Gemini API, following a six-phase roadmap. [Status: Brainstorming & Development]",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API"],
    githubUrl: "https://github.com/Saatvik-G/Jack-Trades.git",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    category: "Full-Stack",
  },
  {
    name: "EchoVerse (Music Recommendation)",
    description: "An AI-powered music recommendation app (no audio playback) using the Last.fm API, MusicBrainz, and the OpenAI API, being built in three sequential phases. [Status: Brainstorming & Development]",
    tags: ["OpenAI API", "Last.fm API", "MusicBrainz API", "Next.js"],
    githubUrl: "https://github.com/Saatvik-G/Music-Recommendation.git",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    category: "AI & Data Science",
  },
  {
    name: "Plagiarism Checker",
    description: "An algorithm-driven text analysis tool calculating document similarity ratios using TF-IDF vectorization and cosine similarity to compare multiple files and flag similarities.",
    tags: ["Python", "NLTK", "Flask", "NLP"],
    githubUrl: "https://github.com/Saatvik-G/Plagiarism-Checker",
    gradient: "from-red-500/20 via-amber-500/10 to-transparent",
    category: "AI & Data Science",
  },
  {
    name: "Task Tracker Board",
    description: "An interactive task workspace with columns, categorization, status toggles, priority tags, and statistics dashboards. Keeps data synced locally for seamless client-side planning.",
    tags: ["React", "TypeScript", "Tailwind CSS", "LocalStorage"],
    githubUrl: "https://github.com/Saatvik-G",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    category: "Full-Stack",
  },
  {
    name: "Mean-Variance-Std Dev Calculator",
    description: "A mathematical statistics tool built with NumPy that converts array streams into 3x3 matrices, calculating values of mean, variance, standard deviation, max, min, and sum across rows and columns.",
    tags: ["Python", "NumPy", "Data Science"],
    githubUrl: "https://github.com/Saatvik-G/Mean-Variance-St.-Deviation-Calculator",
    gradient: "from-yellow-500/20 via-orange-500/10 to-transparent",
    category: "AI & Data Science",
  },
  {
    name: "Cryptographic Encoder-Decoder",
    description: "A security utility program implementing customizable cryptography keys to encode and decode sensitive text messages, keeping calculations local and secure.",
    tags: ["Python", "Cryptography", "Security"],
    githubUrl: "https://github.com/Saatvik-G/Encoder-Decoder",
    gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
    category: "Utilities",
  },
  {
    name: "Random Password Generator",
    description: "A high-security client-side web utility that generates cryptographically secure, randomized keys. Users can customize length, caps, numbers, and symbols.",
    tags: ["HTML5", "CSS3", "JavaScript", "Security"],
    githubUrl: "https://github.com/Saatvik-G/Random-Password-Generator",
    gradient: "from-fuchsia-500/20 via-pink-500/10 to-transparent",
    category: "Utilities",
  },
  {
    name: "Snake-Water-Gun Game",
    description: "An interactive game of Snake-Water-Gun featuring a gameplay session loop, score statistics tracking, and interactive computer selection rules.",
    tags: ["Python", "Algorithms", "Game Dev"],
    githubUrl: "https://github.com/Saatvik-G/Snake-Water-Gun-Game",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    category: "Utilities",
  },
];

type FilterType = "All" | "Full-Stack" | "AI & Data Science" | "Utilities";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterType>("All");

  const filteredProjects = filter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[#030303] px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs text-blue-400 uppercase tracking-widest">// Showcase Directory</p>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-3">
                All Projects
              </h1>
              <div className="h-[2px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full" />
            </div>

            {/* Filter controls */}
            <div className="flex flex-wrap gap-2.5 font-mono text-[10px] uppercase tracking-wider">
              {["All", "Full-Stack", "AI & Data Science", "Utilities"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type as FilterType)}
                  className={`px-4 py-2 border transition-all cursor-pointer ${
                    filter === type
                      ? "border-blue-500 bg-blue-500/10 text-white font-bold"
                      : "border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout of Neat Boxes */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="glass-card flex flex-col justify-between rounded-none border border-white/5 bg-[#08080c] overflow-hidden group hover:border-blue-500/20"
              >
                {/* Header Image Placeholder */}
                <div className={`h-40 w-full bg-gradient-to-b ${project.gradient} p-6 flex flex-col justify-between border-b border-white/5 relative`}>
                  {/* Visual Blueprint Frame */}
                  <div className="absolute inset-2 border border-white/5 border-dashed pointer-events-none" />
                  
                  <div className="flex items-center justify-between z-10">
                    <Code2 className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-5 h-5" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-base font-bold text-white leading-snug z-10 truncate">
                    {project.name.split(" — ")[0]}
                  </h3>
                </div>

                {/* Box Content */}
                <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
                  <p className="text-gray-300 text-sm leading-loose line-clamp-4 font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-1 bg-white/5 border border-white/5 text-gray-400 font-mono"
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
      </main>
      <ScrollToTop />
    </>
  );
}
