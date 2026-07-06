"use client";

import React from "react";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "AWS Intern",
      company: "Internship Studio",
      duration: "February 2026 – April 2026",
      description:
        "Completed a 2-month AWS internship program gaining hands-on exposure to Amazon Web Services and cloud computing fundamentals.",
      points: [
        "Provisioned and managed scalable cloud resources including Amazon EC2, Amazon S3, and AWS IAM roles.",
        "Gained direct exposure to cloud network topologies, VPC configuration, and Solutions Architecture principles.",
        "Built and deployed mock cloud infrastructure verifying best practices in security, load balancing, and high availability.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#07070a]/50">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="h-[3px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full" />
        </div>

        {/* Timeline container */}
        <div className="max-w-3xl mx-auto relative border-l-2 border-white/5 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={`${exp.role}-${idx}`} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-[#050508] border-2 border-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-3 h-3 text-blue-400" />
              </div>

              {/* Card wrapper */}
              <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-gray-300">{exp.company}</h4>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium md:bg-white/5 px-3 py-1 rounded-full border border-white/5 md:border-none w-max">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.duration}
                  </span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>

                {/* Key Achievements Bullet points */}
                <ul className="space-y-2.5 pt-2 text-xs md:text-sm text-gray-400">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
