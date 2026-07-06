"use client";

import React from "react";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { Award, Calendar } from "lucide-react";
import { CERTIFICATIONS } from "../../data/certifications";

export default function CertificationsPage() {
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
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[#030303] px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header */}
          <div>
            <p className="font-mono text-xs text-blue-400 uppercase tracking-widest">// Credentials Directory</p>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-3">
              Certifications & Qualifications
            </h1>
            <div className="h-[2px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full" />
          </div>

          {/* Grid Layout of Certificate-like Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="relative glass-card p-6 rounded-none border border-white/10 flex flex-col justify-between h-[360px] bg-[#07070a] transition-all hover:border-blue-500/30 hover:bg-black/90 group"
              >
                {/* Certificate Frame Borders */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/20 group-hover:border-blue-500/40" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/20 group-hover:border-blue-500/40" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-white/20 group-hover:border-blue-500/40" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/20 group-hover:border-blue-500/40" />

                {/* Top: Category & Badge */}
                <div className="flex items-center justify-between">
                  <span className={`text-[9px] px-2.5 py-1 rounded-full border font-bold uppercase tracking-wider ${getCategoryColor(cert.category)}`}>
                    {cert.category}
                  </span>
                  <Award className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                </div>

                {/* Middle: Premium Geometric Seal SVG (Fills the empty space beautifully!) */}
                <div className="flex justify-center items-center my-4 py-2 opacity-35 group-hover:opacity-75 transition-opacity duration-500">
                  <svg className="w-20 h-20 text-gray-600 group-hover:text-blue-500/60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" />
                    {/* Star polygons representing credential approval */}
                    <path d="M50 26 L55 38 L68 38 L58 46 L62 58 L50 50 L38 58 L42 46 L32 38 L45 38 Z" fill="currentColor" opacity="0.8" />
                    {/* Hanging Ribbons */}
                    <path d="M43 72 L37 90 L45 84 L53 90 L47 72" fill="currentColor" opacity="0.6" />
                    <path d="M57 72 L51 90 L59 84 L67 90 L61 72" fill="currentColor" opacity="0.6" />
                  </svg>
                </div>

                {/* Bottom: Title & Issuer */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-200 text-sm md:text-base leading-snug group-hover:text-white transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs text-gray-400 font-mono">
                    <span className="font-semibold text-gray-300">{cert.issuer}</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.date}
                    </span>
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
