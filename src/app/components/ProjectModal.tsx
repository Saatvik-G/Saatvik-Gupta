"use client";

import React, { useEffect } from "react";
import { X, Calendar, Settings, Code, Layers } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    name: string;
    description: string;
    tags: string[];
    detailedSpecs?: {
      architecture?: string;
      milestones?: string[];
      techLog?: string;
    };
  } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark overlay background */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Modal Card content */}
      <div className="relative w-full max-w-2xl bg-[#08080c] border border-white/10 p-8 shadow-2xl z-10 transition-all duration-300 overflow-y-auto max-h-[85vh]">
        {/* Frame borders */}
        <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-white/20" />
        <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-white/20" />
        <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-white/20" />
        <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-white/20" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors cursor-pointer border border-white/5 bg-white/5 hover:bg-white/10"
          aria-label="Close modal dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title & tags */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5 text-xs text-blue-400 uppercase tracking-widest font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Deep-Dive</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white leading-tight">
            {project.name.split(" — ")[0]}
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed font-light">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2.5 py-1 bg-white/5 border border-white/5 text-gray-400 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Dynamic Detailed specs */}
        {project.detailedSpecs && (
          <div className="mt-8 pt-6 border-t border-white/5 space-y-6">
            
            {/* System Architecture */}
            {project.detailedSpecs.architecture && (
              <div className="space-y-2">
                <h3 className="flex items-center gap-2 text-xs font-bold font-mono text-gray-400 uppercase tracking-wider">
                  <Settings className="w-3.5 h-3.5 text-purple-400" />
                  System Architecture
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-light pl-6">
                  {project.detailedSpecs.architecture}
                </p>
              </div>
            )}

            {/* Milestones Roadmap */}
            {project.detailedSpecs.milestones && (
              <div className="space-y-2.5">
                <h3 className="flex items-center gap-2 text-xs font-bold font-mono text-gray-400 uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  Development Roadmap & Phases
                </h3>
                <ul className="space-y-1.5 pl-6 text-xs text-gray-400 leading-relaxed font-mono">
                  {project.detailedSpecs.milestones.map((m, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-blue-500 font-bold">↳</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Engineering Tech Log */}
            {project.detailedSpecs.techLog && (
              <div className="space-y-2">
                <h3 className="flex items-center gap-2 text-xs font-bold font-mono text-gray-400 uppercase tracking-wider">
                  <Code className="w-3.5 h-3.5 text-amber-400" />
                  Engineering Log Details
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-light pl-6 italic">
                  "{project.detailedSpecs.techLog}"
                </p>
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
}
