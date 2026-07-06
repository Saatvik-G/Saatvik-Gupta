"use client";

import React from "react";
import { GraduationCap, MapPin, Compass, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow decorator */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-[3px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Main Copy */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Saatvik Gupta
              </span>
            </h3>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              A 3rd year Computer Science student who believes the best way to learn is by actually doing. 
              I don't wait for opportunities to come — I go out and create them. Passionate about using technology 
              to solve real problems and create meaningful impact.
            </p>
            <p className="text-gray-400 leading-relaxed text-base">
              Still finding my path, and I think that's okay — curiosity is my compass and consistency is my habit. 
              I'm constantly experimenting with cloud architectures, training neural networks, analyzing datasets, 
              and refining my skills in cybersecurity.
            </p>
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Compass</div>
                  <div className="text-sm font-medium">Curiosity</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Habit</div>
                  <div className="text-sm font-medium">Consistency</div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Cards (Stats / Info) */}
          <div className="md:col-span-2 space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-6">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Education & Status</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-white text-sm md:text-base">PES University</h5>
                    <p className="text-xs text-gray-400">B.Tech in Computer Science</p>
                    <p className="text-xs text-blue-400 font-medium">3rd Year Student</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-white text-sm md:text-base">Bengaluru, India</h5>
                    <p className="text-xs text-gray-400">Tech Capital & Innovation Hub</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 text-center">
                <p className="text-xs text-gray-400 italic">
                  "Open to internships, collaborations, and opportunities."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
