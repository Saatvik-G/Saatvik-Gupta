"use client";

import React from "react";
import { motion } from "framer-motion";
import resumeData from "../data/resumeData.json";

// Inline Icons to prevent external import issues
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function Home() {
  const finishedProjects = resumeData.projects.filter(
    (p) => p.status === "Shipped"
  );
  
  const inProgressProjects = resumeData.projects.filter(
    (p) => p.status === "In-Progress"
  );

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-gray-100 selection:bg-blue-500/20 selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Restrained Luxury Sticky Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/65 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-mono text-xs tracking-[0.3em] text-white/50 select-none">
            SG // CORE
          </span>
          <nav className="hidden md:flex gap-8 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">
            <a href="#about" onClick={(e) => handleScroll(e, "about")} className="hover:text-blue-500 transition-colors">01 / About</a>
            <a href="#skills" onClick={(e) => handleScroll(e, "skills")} className="hover:text-blue-500 transition-colors">02 / Skills</a>
            <a href="#experience" onClick={(e) => handleScroll(e, "experience")} className="hover:text-blue-500 transition-colors">03 / Experience</a>
            <a href="#projects" onClick={(e) => handleScroll(e, "projects")} className="hover:text-blue-500 transition-colors">04 / Projects</a>
            <a href="#certifications" onClick={(e) => handleScroll(e, "certifications")} className="hover:text-blue-500 transition-colors">05 / Certs</a>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="hover:text-blue-500 transition-colors">06 / Contact</a>
          </nav>
        </div>
      </header>

      {/* Chapters feed */}
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        
        {/* CHAPTER 01: HERO */}
        <motion.section
          id="hero"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="min-h-screen flex flex-col justify-center items-start text-left relative pt-20"
        >
          {/* Subtle top indicator */}
          <div className="font-mono text-[10px] tracking-[0.3em] text-blue-500 uppercase mb-8">
            // INDEX // SAATVIK GUPTA
          </div>
          
          {/* Nike scale headline */}
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-white uppercase leading-none mb-8 select-none">
            Saatvik
            <br />
            Gupta
          </h1>

          {/* Understated title details */}
          <p className="text-xs sm:text-sm font-mono text-gray-400 uppercase tracking-[0.25em] mb-6 pl-2">
            {resumeData.profile.subtitle}
          </p>

          <p className="text-lg sm:text-xl text-gray-400 max-w-xl italic mb-12 font-light leading-relaxed pl-2">
            "{resumeData.profile.tagline}"
          </p>

          {/* Confident single CTA */}
          <div className="pl-2">
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="group inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-white hover:text-blue-500 transition-colors relative py-2"
            >
              <span>Explore Specifications</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white group-hover:bg-blue-500 transition-colors" />
            </a>
          </div>
        </motion.section>

        {/* Subtle transition divider */}
        <div className="h-[1px] w-full bg-white/5" />

        {/* CHAPTER 02: ABOUT */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="min-h-screen flex flex-col justify-center items-center text-center relative py-24"
        >
          <div className="font-mono text-[10px] tracking-[0.3em] text-blue-500 uppercase mb-12">
            01 / BIOGRAPHY
          </div>
          
          {/* Centered constrained luxury-style bio block */}
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 leading-relaxed font-light font-sans tracking-tight">
              {resumeData.profile.bio}
            </p>
          </div>
        </motion.section>

        {/* Subtle transition divider */}
        <div className="h-[1px] w-full bg-white/5" />

        {/* CHAPTER 03: SKILLS */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="min-h-screen flex flex-col justify-center items-start relative py-24"
        >
          <div className="font-mono text-[10px] tracking-[0.3em] text-blue-500 uppercase mb-16">
            02 / SKILL CLASSIFICATIONS
          </div>

          {/* Vercel clean grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {resumeData.skills.map((group, i) => (
              <div key={i} className="p-8 border border-white/5 bg-[#08080a]/40 relative">
                <div className="absolute top-0 left-0 w-2 h-[1px] bg-blue-500" />
                <div className="absolute top-0 left-0 w-[1px] h-2 bg-blue-500" />
                
                <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-white mb-6">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white/5 border border-white/5 text-gray-400 text-[10px] font-mono tracking-wider"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Subtle transition divider */}
        <div className="h-[1px] w-full bg-white/5" />

        {/* CHAPTER 04: EXPERIENCE */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="min-h-screen flex flex-col justify-center items-start relative py-24"
        >
          <div className="font-mono text-[10px] tracking-[0.3em] text-blue-500 uppercase mb-16">
            03 / EXPERIENCE SPEC SHEET
          </div>

          {/* Koenigsegg spec timelines format */}
          {resumeData.experience.map((exp, idx) => (
            <div key={idx} className="w-full border border-white/5 bg-[#08080a]/40 p-8 sm:p-12 relative">
              <div className="absolute top-0 left-0 w-4 h-[1px] bg-blue-500" />
              <div className="absolute top-0 left-0 w-[1px] h-4 bg-blue-500" />
              <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-blue-500" />
              <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-blue-500" />

              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">SYSTEM ROLE //</span>
                  <h3 className="text-xl font-bold text-white tracking-tight">{exp.role}</h3>
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">ORGANIZATION //</span>
                  <h4 className="text-base font-semibold text-gray-300">{exp.company}</h4>
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">DURATION PERIOD //</span>
                  <p className="text-sm font-mono text-blue-400">{exp.duration}</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </motion.section>

        {/* Subtle transition divider */}
        <div className="h-[1px] w-full bg-white/5" />

        {/* CHAPTER 05: PROJECTS */}
        <section id="projects" className="space-y-24 py-24">
          <div className="font-mono text-[10px] tracking-[0.3em] text-blue-500 uppercase">
            04 / SELECTED WORKS & SANDBOX
          </div>

          {/* Finished Projects Row */}
          <div className="space-y-12">
            <div className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em]">// COMPLETED PLATFORMS</div>
            <div className="grid md:grid-cols-2 gap-12">
              {finishedProjects.map((project, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={revealVariants}
                  className="p-8 border border-white/10 bg-[#08080c] relative flex flex-col justify-between h-[300px] hover:border-blue-500/30 transition-all duration-500"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] text-gray-500">// SPECS {i + 1}</span>
                      <div className="flex gap-4">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                          <GithubIcon className="w-4 h-4" />
                        </a>
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Live Demo">
                            <ExternalLinkIcon className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{project.name}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 font-mono text-[9px] text-blue-400">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-blue-500/5 border border-blue-500/10 uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* In-Progress Projects Row */}
          <div className="space-y-12">
            <div className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em]">// IN PROGRESS DEVELOPMENT (OUTLINED DEMARCATORS)</div>
            <div className="grid md:grid-cols-2 gap-12">
              {inProgressProjects.map((project, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={revealVariants}
                  className="p-8 border border-white/5 border-dashed bg-transparent relative flex flex-col justify-between h-[300px] hover:border-blue-500/20 opacity-60 hover:opacity-100 transition-all duration-500"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] text-gray-500">// ROADMAP {i + 1}</span>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{project.name}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 font-mono text-[9px] text-gray-500">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-white/5 border border-white/10 uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Subtle transition divider */}
        <div className="h-[1px] w-full bg-white/5" />

        {/* CHAPTER 06: CERTIFICATIONS */}
        <motion.section
          id="certifications"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="min-h-screen flex flex-col justify-center items-start relative py-24"
        >
          <div className="font-mono text-[10px] tracking-[0.3em] text-blue-500 uppercase mb-16">
            05 / CERTIFICATIONS DIRECTORY
          </div>

          <ul className="space-y-6 text-sm sm:text-base text-gray-300 leading-relaxed font-light pl-2 w-full">
            {resumeData.certifications.map((cert, idx) => (
              <li key={idx} className="flex items-start gap-4 py-3 border-b border-white/5">
                <span className="text-blue-500 font-mono font-bold select-none">// {idx + 1}</span>
                <span>{cert.title} — {cert.issuer} ({cert.date})</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Subtle transition divider */}
        <div className="h-[1px] w-full bg-white/5" />

        {/* CHAPTER 07: CONTACT */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="min-h-screen flex flex-col justify-center items-start relative py-24 pl-2"
        >
          <div className="font-mono text-[10px] tracking-[0.3em] text-blue-500 uppercase mb-12">
            06 / CONNECTION
          </div>

          {/* Nike bold statement */}
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white uppercase mb-8">
            Let's build
            <br />
            something.
          </h2>

          <p className="text-gray-400 text-sm max-w-md font-light leading-relaxed mb-12">
            {resumeData.profile.name} // Open to internships, collaborations, and opportunities.
          </p>

          <div className="space-y-6 font-mono text-xs sm:text-sm tracking-wider w-full max-w-xl">
            <div className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-white/5 gap-2">
              <span className="text-gray-500 w-28">// EMAIL:</span>
              <a href={`mailto:${resumeData.profile.email}`} className="text-white hover:text-blue-500 transition-colors">
                {resumeData.profile.email}
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-white/5 gap-2">
              <span className="text-gray-500 w-28">// LINKEDIN:</span>
              <a href={resumeData.profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors">
                {resumeData.profile.linkedin.replace("https://", "")}
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-white/5 gap-2">
              <span className="text-gray-500 w-28">// GITHUB:</span>
              <a href={resumeData.profile.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors">
                {resumeData.profile.github.replace("https://", "")}
              </a>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/5 text-[10px] font-mono text-gray-600 flex justify-between">
          <span>© {new Date().getFullYear()} Saatvik Gupta. All rights reserved.</span>
        </footer>

      </div>
    </div>
  );
}
