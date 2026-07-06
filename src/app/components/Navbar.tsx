"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Projects Directory", href: "/projects" },
  { label: "Credentials Directory", href: "/credentials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/85 border-b border-white/5 backdrop-blur-md py-4">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg text-white group"
        >
          <Terminal className="w-5 h-5 text-blue-500 group-hover:text-purple-500 transition-colors" />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-400 transition-all duration-300">
            Saatvik.dev
          </span>
        </Link>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-xs uppercase tracking-widest font-semibold transition-colors hover:text-white py-1 ${
                  isActive ? "text-white font-bold" : "text-gray-400"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-[#0a0a0f] border-l border-white/5 backdrop-blur-lg z-40 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 pt-24 px-8">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-semibold tracking-wider uppercase transition-colors hover:text-white ${
                  isActive ? "text-blue-400 font-bold" : "text-gray-400"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </header>
  );
}
