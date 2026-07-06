"use client";

import React from "react";
import { ExternalLink, Code2, FolderGit } from "lucide-react";

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
  featured: boolean;
}

const PROJECTS: Project[] = [
  {
    name: "EcoTrace — Carbon Footprint Intelligence Platform",
    description:
      "A personal carbon footprint tracking platform built with vanilla HTML/CSS/JavaScript. Features an interactive dashboard, activity logging, Chart.js analytics, AI-powered coaching system, gamified achievements, and full offline functionality using localStorage. Crafted with zero dependencies for instant load times and privacy-first design.",
    tags: ["HTML5", "CSS3", "JavaScript", "Chart.js", "localStorage"],
    githubUrl: "https://github.com/Saatvik-G/Carbon-Footprint-Awareness-Platform",
    liveUrl: "https://saatvik-g.github.io/Carbon-Footprint-Awareness-Platform/",
    featured: true,
  },
  {
    name: "Jack&Trades — Local Service Marketplace",
    description:
      "A full-stack marketplace web application connecting local freelancers and skilled handymen directly with clients in their community. Supports streamlined scheduling, booking mechanisms, customer reviews, and a responsive frontend dashboard.",
    tags: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/Saatvik-G",
    featured: true,
  },
  {
    name: "Music Recommendation System",
    description:
      "An intelligent, content-based recommendation engine that filters and suggests tracks based on audio features, user preference clustering, and mood modeling. Built using Flask for API endpoints and Python for ML computations.",
    tags: ["Python", "Pandas", "Scikit-learn", "Flask", "Machine Learning"],
    githubUrl: "https://github.com/Saatvik-G",
    featured: true,
  },
  {
    name: "Plagiarism Checker",
    description:
      "An algorithm-driven text analysis tool calculating document similarity ratios using natural language processing (NLP). Leverages TF-IDF vectorization and cosine similarity to compare multiple files and flag potential plagiarism.",
    tags: ["Python", "NLTK", "Flask", "NLP", "HTML5", "CSS3"],
    githubUrl: "https://github.com/Saatvik-G/Plagiarism-Checker",
    featured: false,
  },
  {
    name: "Task Tracker Productivity Board",
    description:
      "An interactive task workspace with columns, categorization, status toggles, priority tags, and statistics dashboards. Keeps data synced locally for seamless client-side planning.",
    tags: ["React", "TypeScript", "Tailwind CSS", "LocalStorage"],
    githubUrl: "https://github.com/Saatvik-G",
    featured: false,
  },
  {
    name: "Mean-Variance-Standard Deviation Calculator",
    description:
      "A mathematical statistics tool built with NumPy that converts array streams into 3x3 matrices, calculating values of mean, variance, standard deviation, max, min, and sum across rows, columns, and flattened states.",
    tags: ["Python", "NumPy", "Data Science"],
    githubUrl: "https://github.com/Saatvik-G/Mean-Variance-St.-Deviation-Calculator",
    featured: false,
  },
  {
    name: "Cryptographic Encoder-Decoder",
    description:
      "A security utility program implementing customizable cryptography keys to encode and decode sensitive text messages. Protects information locally using robust cryptographic standard practices.",
    tags: ["Python", "Cryptography", "Security"],
    githubUrl: "https://github.com/Saatvik-G/Encoder-Decoder",
    featured: false,
  },
  {
    name: "Random Password Generator",
    description:
      "A high-security, responsive client-side web utility that generates cryptographically secure, randomized keys. Users can customize length and match rules (numbers, capitals, symbols).",
    tags: ["HTML5", "CSS3", "JavaScript", "Security"],
    githubUrl: "https://github.com/Saatvik-G/Random-Password-Generator",
    featured: false,
  },
  {
    name: "Snake-Water-Gun Game",
    description:
      "An interactive implementation of the classic Indian variant of Rock-Paper-Scissors. Tracks overall win-loss analytics, scoreboard streaks, and features an adaptive computer choice engine.",
    tags: ["Python", "Algorithms", "Game Dev"],
    githubUrl: "https://github.com/Saatvik-G/Snake-Water-Gun-Game",
    featured: false,
  },
];

export default function Projects() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const remainingProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-[3px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full" />
        </div>

        {/* Featured Projects Grid (Large, 1-column on mobile, 2-column or 3-column on larger desktop) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, idx) => (
            <div
              key={`${project.name}-${idx}`}
              className="glass-card flex flex-col justify-between p-6 md:p-8 rounded-2xl border border-white/5 relative overflow-hidden group shadow-xl"
            >
              {/* Highlight background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/5 to-purple-500/5 opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/25 text-blue-400 font-bold uppercase tracking-wider">
                    Featured
                  </span>
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

                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                  {project.name}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                  {project.description}
                </p>
              </div>

              {/* Tags block */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-gray-400 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Subheading */}
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <FolderGit className="w-5 h-5 text-purple-400" />
            More Accomplishments
          </h3>
          <div className="h-[2px] w-12 bg-purple-500/30 mt-2 rounded-full" />
        </div>

        {/* Regular Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {remainingProjects.map((project, idx) => (
            <div
              key={`${project.name}-${idx}`}
              className="glass-card flex flex-col justify-between p-6 rounded-2xl border border-white/5 relative overflow-hidden group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Code2 className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors" />
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors leading-snug line-clamp-1">
                  {project.name.split(" — ")[0]}
                </h4>

                <p className="text-gray-300 text-xs md:text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tags block */}
              <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-gray-400 font-medium"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-[10px] px-1.5 py-0.5 text-gray-500 font-medium">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
