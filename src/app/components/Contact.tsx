"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, MessageSquare } from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

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

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "saatvik.gupta@example.com"; // standard placeholder email address

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#07070a]/50">
      {/* Background glow decorator */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="h-[3px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 mx-auto rounded-full" />
          <p className="mt-6 text-gray-300 leading-relaxed text-base md:text-lg">
            Open to internships, collaborations, and opportunities. Feel free to reach out!
          </p>
        </div>

        {/* Action Cards */}
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Email Card */}
          <div className="glass-card p-8 rounded-2xl border border-white/5 flex flex-col justify-between items-center text-center group">
            <div className="space-y-4 w-full">
              <div className="p-4 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Email Address</h3>
              <p className="text-sm text-gray-400">Direct inquiries, project collaboration, or internship opportunities.</p>
              
              <div className="flex items-center justify-between gap-3 p-3.5 bg-white/5 rounded-xl border border-white/5 font-mono text-xs md:text-sm text-gray-300 select-all">
                <span>{emailAddress}</span>
                <button
                  onClick={handleCopyEmail}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <a
              href={`mailto:${emailAddress}`}
              className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium text-sm hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-blue-500/15"
            >
              Send an Email
            </a>
          </div>

          {/* Socials Card */}
          <div className="glass-card p-8 rounded-2xl border border-white/5 flex flex-col justify-between items-center text-center group">
            <div className="space-y-4 w-full">
              <div className="p-4 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Social Connections</h3>
              <p className="text-sm text-gray-400">Find me on professional platforms and explore my developer contributions.</p>
              
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com/in/saatvik-gupta-ab7598351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 bg-white/5 rounded-xl border border-white/5 text-gray-300 hover:text-white hover:border-white/10 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-semibold">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Saatvik-G"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 bg-white/5 rounded-xl border border-white/5 text-gray-300 hover:text-white hover:border-white/10 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span className="text-xs font-semibold">GitHub</span>
                </a>
              </div>
            </div>

            <div className="mt-6 w-full text-xs text-gray-400 italic">
              "Bengaluru, Karnataka, India"
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-24 pt-8 border-t border-white/5 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Saatvik Gupta. All rights reserved.</p>
          <p className="mt-1 font-mono text-[10px]">Built with Next.js, Tailwind CSS, & Three.js</p>
        </div>
      </div>
    </section>
  );
}
