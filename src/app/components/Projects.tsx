"use client";

import React, { useRef } from "react";
import { ExternalLink, Code2, FolderGit, ChevronLeft, ChevronRight } from "lucide-react";

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
}

const PROJECTS: Project[] = [
  {
    name: "EcoTrace — Carbon Footprint Platform",
    description:
      "A personal carbon footprint tracking platform built with HTML/CSS/JS. Features an interactive dashboard, activity logging, Chart.js analytics, AI coaching, gamified achievements, and offline caching via localStorage.",
    tags: ["HTML5", "CSS3", "JavaScript", "Chart.js", "localStorage"],
    githubUrl: "https://github.com/Saatvik-G/Carbon-Footprint-Awareness-Platform",
    liveUrl: "https://saatvik-g.github.io/Carbon-Footprint-Awareness-Platform/",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    name: "Jack&Trades — Service Marketplace",
    description:
      "A full-stack marketplace web application connecting local freelancers and skilled handymen directly with clients. Supports streamlined scheduling, booking mechanisms, and customer reviews.",
    tags: ["Next.js", "React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Saatvik-G",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
  },
  {
    name: "Music Recommendation System",
    description:
      "An intelligent, content-based recommendation engine filtering tracks based on audio features, user preference clustering, and mood modeling. Built with Python and Flask.",
    tags: ["Python", "Pandas", "Scikit-learn", "Flask"],
    githubUrl: "https://github.com/Saatvik-G",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
  },
  {
    name: "Plagiarism Checker",
    description:
      "An algorithm-driven text analysis tool calculating document similarity ratios using TF-IDF vectorization and cosine similarity to compare multiple files and flag similarities.",
    tags: ["Python", "NLTK", "Flask", "NLP"],
    githubUrl: "https://github.com/Saatvik-G/Plagiarism-Checker",
    gradient: "from-red-500/20 via-amber-500/10 to-transparent",
  },
  {
    name: "Task Tracker Board",
    description:
      "An interactive task workspace with columns, categorization, status toggles, priority tags, and statistics dashboards. Keeps data synced locally for seamless client-side planning.",
    tags: ["React", "TypeScript", "Tailwind CSS", "LocalStorage"],
    githubUrl: "https://github.com/Saatvik-G",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
  },
  {
    name: "Mean-Variance-Std Dev Calculator",
    description:
      "A mathematical statistics tool built with NumPy that converts array streams into 3x3 matrices, calculating values of mean, variance, standard deviation, max, min, and sum across rows and columns.",
    tags: ["Python", "NumPy", "Data Science"],
    githubUrl: "https://github.com/Saatvik-G/Mean-Variance-St.-Deviation-Calculator",
    gradient: "from-yellow-500/20 via-orange-500/10 to-transparent",
  },
  {
    name: "Cryptographic Encoder-Decoder",
    description:
      "A security utility program implementing customizable cryptography keys to encode and decode sensitive text messages, keeping calculations local and secure.",
    tags: ["Python", "Cryptography", "Security"],
    githubUrl: "https://github.com/Saatvik-G/Encoder-Decoder",
    gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
  },
  {
    name: "Random Password Generator",
    description:
      "A high-security client-side web utility that generates cryptographically secure, randomized keys. Users can customize length, caps, numbers, and symbols.",
    tags: ["HTML5", "CSS3", "JavaScript", "Security"],
    githubUrl: "https://github.com/Saatvik-G/Random-Password-Generator",
    gradient: "from-fuchsia-500/20 via-pink-500/10 to-transparent",
  },
  {
    name: "Snake-Water-Gun Game",
    description:
      "An interactive game of Snake-Water-Gun featuring a gameplay session loop, score statistics tracking, and interactive computer selection rules.",
    tags: ["Python", "Algorithms", "Game Dev"],
    githubUrl: "https://github.com/Saatvik-G/Snake-Water-Gun-Game",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
  },
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth * 0.75 : scrollLeft + clientWidth * 0.75;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-[#030303]">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="h-[3px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full" />
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Wrapper */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 scroll-smooth no-scrollbar snap-x snap-mandatory"
        >
          {PROJECTS.map((project, idx) => (
            <div
              key={`${project.name}-${idx}`}
              className="flex-shrink-0 w-[300px] sm:w-[360px] snap-start glass-card rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between"
            >
              {/* Aesthetic Header Visual */}
              <div className={`h-36 w-full bg-gradient-to-b ${project.gradient} p-6 flex flex-col justify-between border-b border-white/5`}>
                <div className="flex items-center justify-between w-full">
                  <Code2 className="w-6 h-6 text-gray-400" />
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
                <h3 className="text-base font-bold text-white leading-snug line-clamp-1">
                  {project.name.split(" — ")[0]}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2.5 py-1 rounded bg-white/5 border border-white/5 text-gray-400 font-medium"
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
    </section>
  );
}
