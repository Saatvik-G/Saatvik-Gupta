"use client";

import React from "react";
import { Cloud, Cpu, Database, Shield, Code } from "lucide-react";

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
  borderColor: string;
  skills: string[];
}

const SKILL_GROUPS: SkillCategory[] = [
  {
    title: "Cloud & Architecture",
    description: "Designing scalable, secure, and reliable virtual systems.",
    icon: <Cloud className="w-6 h-6 text-blue-400" />,
    iconColor: "bg-blue-500/10",
    borderColor: "group-hover:border-blue-500/30",
    skills: ["Amazon Web Services (AWS)", "Google Cloud Platform", "Cloud Computing", "Solutions Architecture", "Cloud Infrastructure"],
  },
  {
    title: "AI & Machine Learning",
    description: "Training model architectures and integrating intelligence.",
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    iconColor: "bg-purple-500/10",
    borderColor: "group-hover:border-purple-500/30",
    skills: ["Artificial Intelligence", "Machine Learning", "Generative AI", "Google Cloud AI", "LLM Architecture", "BERT Fine-Tuning", "Prompt Engineering"],
  },
  {
    title: "Data Science & Analytics",
    description: "Processing list data streams and building calculations.",
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    iconColor: "bg-emerald-500/10",
    borderColor: "group-hover:border-emerald-500/30",
    skills: ["Data Science", "Data Analytics", "Python", "Pandas", "NumPy", "Chart.js", "Data Visualization", "Data Storytelling", "Predictive Modeling", "SQL"],
  },
  {
    title: "Cybersecurity & Privacy",
    description: "Auditing compliance and protecting digital operations.",
    icon: <Shield className="w-6 h-6 text-red-400" />,
    iconColor: "bg-red-500/10",
    borderColor: "group-hover:border-red-500/30",
    skills: ["Cybersecurity", "Penetration Testing", "Incident Response", "Security Awareness", "AI Privacy Engineering"],
  },
  {
    title: "Software Engineering",
    description: "Building modern APIs and pipelines.",
    icon: <Code className="w-6 h-6 text-amber-400" />,
    iconColor: "bg-amber-500/10",
    borderColor: "group-hover:border-amber-500/30",
    skills: ["JavaScript", "HTML5", "CSS3", "REST API", "Apache Kafka", "GitHub Actions", "Software Testing", "Data Modeling"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="h-[3px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full" />
        </div>

        {/* Grouped Skills Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={`${group.title}-${idx}`}
              className={`glass-card p-10 rounded-none border border-white/10 flex flex-col justify-between group transition-all duration-300 bg-[#08080c] ${group.borderColor}`}
            >
              <div className="space-y-8">
                {/* Header with icon and title */}
                <div className="flex items-center gap-5">
                  <div className={`p-3.5 rounded-none ${group.iconColor} flex-shrink-0 border border-white/5`}>
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-gray-200 transition-colors">
                      {group.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed font-light">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Skills tags cloud */}
                <div className="flex flex-wrap gap-y-3.5 gap-x-2 pt-6 border-t border-white/5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center text-xs px-3.5 py-1.5 bg-white/5 border border-white/5 text-gray-300 font-mono hover:bg-white/10 hover:text-white hover:border-white/10 transition-colors leading-none"
                    >
                      {skill}
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
