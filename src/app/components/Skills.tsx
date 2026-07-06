"use client";

import React, { useState } from "react";
import { Cloud, Cpu, Database, Shield, Code, Layers } from "lucide-react";

type SkillCategory = "All" | "Cloud" | "AI" | "Data" | "Cyber" | "Software";

interface SkillItem {
  name: string;
  category: SkillCategory;
}

const SKILL_CATEGORIES: { id: SkillCategory; label: string; icon: React.ReactNode }[] = [
  { id: "All", label: "All Skills", icon: <Layers className="w-4 h-4" /> },
  { id: "Cloud", label: "Cloud & Arch", icon: <Cloud className="w-4 h-4" /> },
  { id: "AI", label: "AI & ML", icon: <Cpu className="w-4 h-4" /> },
  { id: "Data", label: "Data Analytics", icon: <Database className="w-4 h-4" /> },
  { id: "Cyber", label: "Cybersecurity", icon: <Shield className="w-4 h-4" /> },
  { id: "Software", label: "Software Eng", icon: <Code className="w-4 h-4" /> },
];

const SKILLS: SkillItem[] = [
  // Cloud & Architecture
  { name: "Amazon Web Services (AWS)", category: "Cloud" },
  { name: "Google Cloud Platform", category: "Cloud" },
  { name: "Cloud Computing", category: "Cloud" },
  { name: "Solutions Architecture", category: "Cloud" },
  { name: "Cloud Infrastructure", category: "Cloud" },

  // AI & Machine Learning
  { name: "Artificial Intelligence", category: "AI" },
  { name: "Machine Learning", category: "AI" },
  { name: "Generative AI", category: "AI" },
  { name: "Google Cloud AI", category: "AI" },
  { name: "LLM Architecture", category: "AI" },
  { name: "BERT Fine-Tuning", category: "AI" },
  { name: "Prompt Engineering", category: "AI" },

  // Data
  { name: "Data Science", category: "Data" },
  { name: "Data Analytics", category: "Data" },
  { name: "Python", category: "Data" },
  { name: "Pandas", category: "Data" },
  { name: "NumPy", category: "Data" },
  { name: "Chart.js", category: "Data" },
  { name: "Data Visualization", category: "Data" },
  { name: "Data Storytelling", category: "Data" },
  { name: "Predictive Modeling", category: "Data" },
  { name: "SQL", category: "Data" },

  // Cybersecurity
  { name: "Cybersecurity", category: "Cyber" },
  { name: "Penetration Testing", category: "Cyber" },
  { name: "Incident Response", category: "Cyber" },
  { name: "Security Awareness", category: "Cyber" },
  { name: "AI Privacy Engineering", category: "Cyber" },

  // Software Engineering
  { name: "JavaScript", category: "Software" },
  { name: "HTML5", category: "Software" },
  { name: "CSS3", category: "Software" },
  { name: "REST API", category: "Software" },
  { name: "Apache Kafka", category: "Software" },
  { name: "GitHub Actions", category: "Software" },
  { name: "Software Testing", category: "Software" },
  { name: "Data Modeling", category: "Software" },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("All");

  const filteredSkills = activeCategory === "All"
    ? SKILLS
    : SKILLS.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#07070a]/50">
      {/* Background glow decorator */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="h-[3px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full" />
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-10 pb-2 overflow-x-auto no-scrollbar border-b border-white/5">
          {SKILL_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/10 border border-purple-500/20"
                    : "bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category.icon}
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Skills Tag Cloud / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, index) => {
            // Pick icon depending on category
            const renderSkillCategoryIcon = (cat: SkillCategory) => {
              switch (cat) {
                case "Cloud":
                  return <Cloud className="w-4 h-4 text-blue-400" />;
                case "AI":
                  return <Cpu className="w-4 h-4 text-purple-400" />;
                case "Data":
                  return <Database className="w-4 h-4 text-emerald-400" />;
                case "Cyber":
                  return <Shield className="w-4 h-4 text-red-400" />;
                case "Software":
                  return <Code className="w-4 h-4 text-amber-400" />;
                default:
                  return <Layers className="w-4 h-4 text-gray-400" />;
              }
            };

            return (
              <div
                key={`${skill.name}-${index}`}
                className="glass-card flex items-center gap-3 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className="p-1.5 rounded-md bg-white/5">
                  {renderSkillCategoryIcon(skill.category)}
                </div>
                <span className="text-sm font-medium text-gray-200 group-hover:text-white">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
