"use client";

import React from "react";
import { GraduationCap, MapPin, Compass, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-transparent">
      {/* Background glow decorator */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-[3px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Main Copy */}
          <div className="lg:col-span-3 space-y-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-wide leading-snug">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Saatvik Gupta
              </span>
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg font-light">
              A 3rd year Computer Science student who believes the best way to learn is by actually doing. 
              I don't wait for opportunities to come — I go out and create them. Passionate about using technology 
              to solve real problems and create meaningful impact.
            </p>
            <p className="text-gray-400 leading-relaxed text-base font-light">
              Still finding my path, and I think that's okay — curiosity is my compass and consistency is my habit. 
              I'm constantly experimenting with cloud architectures, training neural networks, analyzing datasets, 
              and refining my skills in cybersecurity.
            </p>
            
            {/* Quick Stats Grid with more space */}
            <div className="grid sm:grid-cols-2 gap-8 pt-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Compass</div>
                  <div className="text-base font-semibold">Curiosity</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Habit</div>
                  <div className="text-base font-semibold">Consistency</div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Cards (Stats / Info) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-8 rounded-2xl border border-white/5 space-y-8">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">// Education & Status</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <GraduationCap className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-white text-base">PES University</h5>
                    <p className="text-sm text-gray-400 mt-0.5">B.Tech in Computer Science</p>
                    <p className="text-xs text-blue-400 font-semibold mt-1">3rd Year Student</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <MapPin className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-white text-base">Bengaluru, India</h5>
                    <p className="text-sm text-gray-400 mt-0.5">Tech Capital & Innovation Hub</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 text-center">
                <p className="text-sm text-gray-400 italic">
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
