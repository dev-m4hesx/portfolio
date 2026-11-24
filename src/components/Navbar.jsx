import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles, Terminal, Palette, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenContact, onOpenProjects }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative top-0 left-0 right-0 z-40 bg-transparent py-4 sm:py-5 border-b border-zinc-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-[#e50914] flex items-center justify-center text-white font-bebas text-lg tracking-wider group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(229,9,20,0.5)]">
            MR
          </div>
          <div className="flex flex-col">
            <span className="font-bebas text-lg tracking-wider text-white group-hover:text-[#e50914] transition-colors leading-none">
              {personalInfo.name}
            </span>
            <span className="font-mono-code text-[10px] text-zinc-400 tracking-tight flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e50914] inline-block pulse-dot"></span>
              UI/UX & BACKEND ARCHITECT
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 font-display text-xs uppercase tracking-wider text-zinc-300">
          <button 
            type="button" 
            onClick={onOpenProjects}
            className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-[#e50914] cursor-pointer"
          >
            Projects
          </button>
          <button 
            type="button" 
            onClick={onOpenProjects}
            className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-[#e50914] cursor-pointer"
          >
            Skills & Education
          </button>
          <button 
            type="button" 
            onClick={onOpenProjects}
            className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-[#e50914] cursor-pointer"
          >
            Work Process
          </button>
          <a 
            href={personalInfo.contact.instagram.url}
            target="_blank"
            rel="noreferrer" 
            className="hover:text-white transition-colors flex items-center gap-1 text-zinc-300 hover:border-b-2 hover:border-[#e50914] py-1"
          >
            <span className="text-[#e50914]">@</span>Instagram
          </a>
          <button 
            type="button" 
            onClick={onOpenContact}
            className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-[#e50914] cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Action button */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] font-mono-code text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot"></span>
            <span>AVAILABLE FOR FREELANCE</span>
          </div>
          <button
            type="button"
            onClick={onOpenContact}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#e50914] hover:bg-[#b91c1c] text-white text-xs font-bold font-display uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(229,9,20,0.35)] hover:shadow-[0_0_30px_rgba(229,9,20,0.6)] hover:translate-y-[-1px] cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-300 hover:text-white p-2 rounded-lg bg-zinc-900 border border-zinc-800"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0e0e] border-b border-zinc-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 font-display text-sm tracking-wider uppercase text-zinc-300">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenProjects(); }}
              className="py-2 text-left hover:text-[#e50914] border-b border-zinc-800/60"
            >
              Selected Projects
            </button>
            <a 
              href={personalInfo.contact.instagram.url}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#e50914] border-b border-zinc-800/60 flex items-center justify-between"
            >
              <span>Instagram Profile</span>
              <span className="text-xs text-[#e50914] font-mono-code">{personalInfo.contact.instagram.handle}</span>
            </a>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="py-2 text-left hover:text-[#e50914]"
            >
              Contact & Inquiries
            </button>
          </div>
          
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-[#e50914] text-white font-bold text-xs uppercase tracking-wider"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
