"use client";

import React from "react";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Skills from "../components/Skills";

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[#030303] flex flex-col justify-center">
        <div className="py-12">
          <Skills />
        </div>
      </main>
      <ScrollToTop />
    </>
  );
}
