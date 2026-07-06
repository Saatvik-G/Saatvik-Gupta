"use client";

import React, { useState } from "react";
import { Award, ChevronDown, ChevronUp, Calendar, ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  category: "Cloud" | "AI & ML" | "Data" | "Software Eng" | "Cybersecurity";
}

const CERTIFICATIONS: Certification[] = [
  {
    title: "Google Cloud Generative AI Leader: ML Lifecycle & Google Cloud Tools",
    issuer: "Infosys Springboard",
    date: "June 2026",
    category: "AI & ML"
  },
  {
    title: "Data Analysis with Python (300 hrs)",
    issuer: "freeCodeCamp",
    date: "April 2026",
    category: "Data"
  },
  {
    title: "Tata GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    date: "February 2026",
    category: "Data"
  },
  {
    title: "JPMorgan Chase Software Engineering Job Simulation",
    issuer: "Forage",
    date: "January 2026",
    category: "Software Eng"
  },
  {
    title: "British Airways Data Science Job Simulation",
    issuer: "Forage",
    date: "July 2026",
    category: "Data"
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Forage",
    date: "June 2026",
    category: "Data"
  },
  {
    title: "AWS Solutions Architecture Job Simulation",
    issuer: "Forage",
    date: "January 2026",
    category: "Cloud"
  },
  {
    title: "Goldman Sachs Operations Job Simulation",
    issuer: "Forage",
    date: "January 2026",
    category: "Software Eng"
  },
  {
    title: "AIGP: AI Privacy Engineering, Sensitive Data & Controller Obligations",
    issuer: "Infosys Springboard",
    date: "June 2026",
    category: "Cybersecurity"
  },
  {
    title: "AI Fundamentals: Foundations for Understanding AI",
    issuer: "IBM SkillsBuild",
    date: "June 2026",
    category: "AI & ML"
  },
  {
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    date: "February 2026",
    category: "Data"
  },
  {
    title: "Commonwealth Bank Introduction to Cybersecurity",
    issuer: "Forage",
    date: "April 2026",
    category: "Cybersecurity"
  },
  {
    title: "Quantium Software Engineering Job Simulation",
    issuer: "Forage",
    date: "June 2026",
    category: "Software Eng"
  },
  {
    title: "Innovating with Google Cloud AI",
    issuer: "Google Cloud",
    date: "February 2026",
    category: "AI & ML"
  },
  {
    title: "Wells Fargo Software Engineering Job Simulation",
    issuer: "Forage",
    date: "July 2026",
    category: "Software Eng"
  },
  {
    title: "AWS Internship Training",
    issuer: "Internship Studio",
    date: "April 2026",
    category: "Cloud"
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "August 2025",
    category: "Data"
  }
];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);

  const displayedCerts = showAll ? CERTIFICATIONS : CERTIFICATIONS.slice(0, 6);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "Cloud": return "text-blue-400 bg-blue-500/10 border-blue-500/20";
      case "AI & ML": return "text-purple-400 bg-purple-500/10 border-purple-500/20";
      case "Data": return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
      case "Cybersecurity": return "text-red-400 bg-red-500/10 border-red-500/20";
      default: return "text-amber-400 bg-amber-500/10 border-amber-500/20";
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Certifications & Simulations
            </h2>
            <div className="h-[3px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full" />
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-md">
            Interactive simulations, comprehensive courses, and specializations verifying practical exposure.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCerts.map((cert, index) => (
            <div
              key={`${cert.title}-${index}`}
              className="glass-card flex flex-col justify-between p-6 rounded-2xl border border-white/5 relative overflow-hidden group"
            >
              {/* Decorative accent corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="space-y-4">
                {/* Category & Icon */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2.5 py-1 rounded-full border font-semibold tracking-wider ${getCategoryColor(cert.category)}`}>
                    {cert.category}
                  </span>
                  <Award className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-100 group-hover:text-white transition-colors leading-snug line-clamp-2 md:text-base text-sm">
                  {cert.title}
                </h3>
              </div>

              {/* Issuer & Date info */}
              <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <span className="font-semibold text-gray-300">{cert.issuer}</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Toggle Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer shadow-md"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show More ({CERTIFICATIONS.length - 6} more) <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
