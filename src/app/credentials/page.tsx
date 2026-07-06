"use client";

import React from "react";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { Award, Calendar, Shield, ShieldCheck, Cpu, Database, Cloud, Code, Layers } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  category: string;
}

const CERTIFICATIONS: Certification[] = [
  { title: "Google Cloud Generative AI Leader: ML Lifecycle & Google Cloud Tools", issuer: "Infosys Springboard", date: "June 2026", category: "AI & ML" },
  { title: "Data Analysis with Python (300 hrs)", issuer: "freeCodeCamp", date: "April 2026", category: "Data" },
  { title: "Tata GenAI Powered Data Analytics Job Simulation", issuer: "Forage", date: "February 2026", category: "Data" },
  { title: "JPMorgan Chase Software Engineering Job Simulation", issuer: "Forage", date: "January 2026", category: "Software Eng" },
  { title: "British Airways Data Science Job Simulation", issuer: "Forage", date: "July 2026", category: "Data" },
  { title: "Deloitte Data Analytics Job Simulation", issuer: "Forage", date: "June 2026", category: "Data" },
  { title: "AWS Solutions Architecture Job Simulation", issuer: "Forage", date: "January 2026", category: "Cloud" },
  { title: "Goldman Sachs Operations Job Simulation", issuer: "Forage", date: "January 2026", category: "Software Eng" },
  { title: "AIGP: AI Privacy Engineering, Sensitive Data & Controller Obligations", issuer: "Infosys Springboard", date: "June 2026", category: "Cybersecurity" },
  { title: "AI Fundamentals: Foundations for Understanding AI", issuer: "IBM SkillsBuild", date: "June 2026", category: "AI & ML" },
  { title: "Introduction to Data Science", issuer: "Cisco Networking Academy", date: "February 2026", category: "Data" },
  { title: "Commonwealth Bank Introduction to Cybersecurity", issuer: "Forage", date: "April 2026", category: "Cybersecurity" },
  { title: "Quantium Software Engineering Job Simulation", issuer: "Forage", date: "June 2026", category: "Software Eng" },
  { title: "Innovating with Google Cloud AI", issuer: "Google Cloud", date: "February 2026", category: "AI & ML" },
  { title: "Wells Fargo Software Engineering Job Simulation", issuer: "Forage", date: "July 2026", category: "Software Eng" },
  { title: "AWS Internship Training", issuer: "Internship Studio", date: "April 2026", category: "Cloud" },
  { title: "Python (Basic)", issuer: "HackerRank", date: "August 2025", category: "Data" }
];

const SKILL_GROUPS = [
  {
    title: "Cloud & Architecture",
    icon: <Cloud className="w-5 h-5 text-blue-400" />,
    skills: ["Amazon Web Services (AWS)", "Google Cloud Platform", "Cloud Computing", "Solutions Architecture", "Cloud Infrastructure"],
  },
  {
    title: "AI & Machine Learning",
    icon: <Cpu className="w-5 h-5 text-purple-400" />,
    skills: ["Artificial Intelligence", "Machine Learning", "Generative AI", "Google Cloud AI", "LLM Architecture", "BERT Fine-Tuning", "Prompt Engineering"],
  },
  {
    title: "Data Science & Analytics",
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    skills: ["Data Science", "Data Analytics", "Python", "Pandas", "NumPy", "Chart.js", "Data Visualization", "Data Storytelling", "Predictive Modeling", "SQL"],
  },
  {
    title: "Cybersecurity & Privacy",
    icon: <Shield className="w-5 h-5 text-red-400" />,
    skills: ["Cybersecurity", "Penetration Testing", "Incident Response", "Security Awareness", "AI Privacy Engineering"],
  },
  {
    title: "Software Engineering",
    icon: <Code className="w-5 h-5 text-amber-400" />,
    skills: ["JavaScript", "HTML5", "CSS3", "REST API", "Apache Kafka", "GitHub Actions", "Software Testing", "Data Modeling"],
  },
];

export default function CredentialsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[#030303] px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto space-y-28">
          
          {/* Section 1: Certifications (Certificate Box Layout) */}
          <div className="space-y-12">
            <div>
              <p className="font-mono text-xs text-blue-400 uppercase tracking-widest">// Credentials Directory</p>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-3">
                Professional Certifications
              </h1>
              <div className="h-[2px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="relative glass-card p-8 rounded-none border border-white/10 flex flex-col justify-between h-[240px] bg-[#08080c] transition-all hover:border-blue-500/50 hover:bg-black/80 group"
                >
                  {/* Decorative Certificate Frame Corners */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/20 group-hover:border-blue-500/40" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/20 group-hover:border-blue-500/40" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-white/20 group-hover:border-blue-500/40" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/20 group-hover:border-blue-500/40" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500">
                        {cert.category}
                      </span>
                      <Award className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <h3 className="font-bold text-gray-200 text-sm md:text-base leading-snug group-hover:text-white transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs text-gray-400 font-mono">
                    <span className="font-semibold text-gray-300">{cert.issuer}</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Technical Skills (Neat Categorized Boxes) */}
          <div className="space-y-12">
            <div>
              <p className="font-mono text-xs text-purple-400 uppercase tracking-widest">// Technical Frameworks</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-3">
                Skills Catalog
              </h2>
              <div className="h-[2px] w-20 bg-gradient-to-r from-purple-500 to-blue-500 mt-4 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SKILL_GROUPS.map((group, idx) => (
                <div
                  key={idx}
                  className="glass-card p-8 rounded-none border border-white/5 bg-[#08080c] space-y-6"
                >
                  <div className="flex items-center gap-3.5 pb-4 border-b border-white/5">
                    <div className="p-2.5 bg-white/5 rounded-none border border-white/5">
                      {group.icon}
                    </div>
                    <h3 className="text-base font-bold text-white tracking-wide">{group.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1.5 bg-white/5 border border-white/5 text-gray-300 font-mono hover:text-white hover:border-white/10 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <ScrollToTop />
    </>
  );
}
