"use client";

import React, { useRef } from "react";
import { Award, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth * 0.75 : scrollLeft + clientWidth * 0.75;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

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
    <section id="certifications" className="py-32 relative overflow-hidden bg-[#050508]/30">
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Certifications
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

        {/* Horizontal Scrolling Certifications Grid */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 scroll-smooth no-scrollbar snap-x snap-mandatory"
        >
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={`${cert.title}-${index}`}
              className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start glass-card flex flex-col justify-between p-6 rounded-2xl border border-white/5 relative overflow-hidden group"
            >
              {/* Decorative accent corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="space-y-4">
                {/* Category & Icon */}
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] px-2.5 py-1 rounded-full border font-bold uppercase tracking-wider ${getCategoryColor(cert.category)}`}>
                    {cert.category}
                  </span>
                  <Award className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-100 group-hover:text-white transition-colors leading-snug line-clamp-3 text-sm">
                  {cert.title}
                </h3>
              </div>

              {/* Issuer & Date info */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <span className="font-semibold text-gray-300">{cert.issuer}</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
