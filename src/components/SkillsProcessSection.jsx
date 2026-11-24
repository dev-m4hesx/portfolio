import React, { useState } from 'react';
import { 
  Search, 
  Compass, 
  PenTool, 
  Code2, 
  Send, 
  Sparkles, 
  ArrowUpRight, 
  GraduationCap, 
  Terminal, 
  Palette, 
  Server,
  Layers,
  CheckCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function SkillsProcessSection() {
  const [skillTab, setSkillTab] = useState('all');

  const processIcons = {
    Search: Search,
    Compass: Compass,
    PenTool: PenTool,
    Code2: Code2,
    Send: Send
  };

  const allSkills = [
    ...personalInfo.skills.design.map(s => ({ name: s, category: 'design' })),
    ...personalInfo.skills.backend.map(s => ({ name: s, category: 'backend' })),
    ...personalInfo.skills.frontend.map(s => ({ name: s, category: 'frontend' })),
  ];

  const visibleSkills = skillTab === 'all' 
    ? allSkills 
    : allSkills.filter(s => s.category === skillTab);

  return (
    <section id="skills" className="py-24 bg-[#080808] border-b border-[#1f1f1f] relative">
      
      {/* Background glow behind crimson card */}
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#e50914]/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Split Grid matching reference design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ================= COLUMN 1: EDUCATION & SKILLS (4 Cols) ================= */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-[#0f0f0f] border border-zinc-800/90 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              
              {/* Header */}
              <div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wider uppercase leading-none">
                  EDUCATION & SKILLS
                </h3>
                <div className="w-10 h-0.5 bg-[#e50914] mt-2"></div>
              </div>

              {/* Education Sub-block */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono-code text-[#e50914] uppercase tracking-wider font-semibold">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>EDUCATION & CERTIFICATIONS</span>
                </div>

                <div className="space-y-3.5">
                  {personalInfo.education.map((item, idx) => (
                    <div key={idx} className="group border-b border-zinc-800/60 pb-3 last:border-0 last:pb-0">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-xs font-bold text-zinc-100 group-hover:text-white transition-colors leading-snug">
                          {item.degree}
                        </h4>
                        <span className="text-[11px] font-mono-code text-[#e50914] shrink-0 font-medium">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-0.5 font-sans">
                        {item.institution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Sub-block */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono-code text-[#e50914] uppercase tracking-wider font-semibold">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>TECHNICAL TOOLKIT</span>
                  </div>
                  
                  {/* Skill filter pills */}
                  <div className="flex gap-1 text-[10px] font-mono-code">
                    <button
                      onClick={() => setSkillTab('all')}
                      className={`px-2 py-0.5 rounded ${skillTab === 'all' ? 'bg-[#e50914] text-white' : 'text-zinc-400 hover:text-white'}`}
                    >
                      ALL
                    </button>
                    <button
                      onClick={() => setSkillTab('design')}
                      className={`px-2 py-0.5 rounded ${skillTab === 'design' ? 'bg-[#e50914] text-white' : 'text-zinc-400 hover:text-white'}`}
                    >
                      UI/UX
                    </button>
                    <button
                      onClick={() => setSkillTab('backend')}
                      className={`px-2 py-0.5 rounded ${skillTab === 'backend' ? 'bg-[#e50914] text-white' : 'text-zinc-400 hover:text-white'}`}
                    >
                      BACKEND
                    </button>
                  </div>
                </div>

                {/* Skill Chips / Buttons matching reference design */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {visibleSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono-code text-zinc-300 hover:text-white hover:border-[#e50914] hover:bg-zinc-800 transition-all cursor-default flex items-center gap-1.5 shadow-sm"
                    >
                      <span className={`w-1 h-1 rounded-full ${
                        skill.category === 'design' ? 'bg-[#e50914]' : skill.category === 'backend' ? 'bg-amber-500' : 'bg-cyan-400'
                      }`}></span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom mini badge */}
            <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono-code text-zinc-400">
              <span>DESIGN TO PRODUCTION</span>
              <span className="text-[#e50914]">FULL LIFECYCLE</span>
            </div>
          </div>


          {/* ================= COLUMN 2: WORK PROCESS (5 Cols) ================= */}
          <div id="process" className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-[#0f0f0f] border border-zinc-800/90 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Header */}
              <div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wider uppercase leading-none">
                  WORK PROCESS
                </h3>
                <div className="w-10 h-0.5 bg-[#e50914] mt-2"></div>
              </div>

              {/* Vertical Stepper Timeline matching reference design */}
              <div className="relative pl-2 space-y-6">
                
                {/* Connecting Vertical Line */}
                <div className="absolute top-4 bottom-4 left-6 w-[2px] bg-zinc-800 -z-0"></div>

                {personalInfo.processSteps.map((step, idx) => {
                  const Icon = processIcons[step.iconName] || Search;
                  return (
                    <div key={idx} className="relative flex items-start gap-4 group">
                      
                      {/* Step Circle with Icon */}
                      <div className="w-9 h-9 rounded-full bg-zinc-900 border-2 border-zinc-700 group-hover:border-[#e50914] group-hover:bg-[#e50914] transition-all duration-300 flex items-center justify-center shrink-0 z-10 text-zinc-300 group-hover:text-white shadow-md">
                        <Icon className="w-4 h-4" />
                      </div>

                      {/* Step Content */}
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono-code font-bold text-[#e50914]">
                            {step.number}
                          </span>
                          <h4 className="text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-white group-hover:text-[#e50914] transition-colors">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed mt-1 font-sans">
                          {step.description}
                        </p>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>

            {/* Bottom mini badge */}
            <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono-code text-zinc-400">
              <span>AGILE ITERATION</span>
              <span className="text-[#e50914]">ZERO TECHNICAL DEBT</span>
            </div>
          </div>


          {/* ================= COLUMN 3: PHILOSOPHY CALLOUT CARD (3 Cols) ================= */}
          <div className="lg:col-span-3 rounded-2xl bg-gradient-to-br from-[#c80815] via-[#a80712] to-[#7a040b] p-7 sm:p-8 flex flex-col justify-between text-white shadow-[0_15px_40px_rgba(200,8,21,0.35)] relative overflow-hidden group">
            
            {/* Background Subtle Watermark Quote Mark */}
            <span className="absolute -top-6 -right-3 text-9xl font-serif text-white/10 select-none pointer-events-none group-hover:text-white/15 transition-all">
              “
            </span>

            {/* Top Quote Mark Icon */}
            <div className="w-10 h-10 rounded-full bg-black/25 backdrop-blur-sm flex items-center justify-center text-white/90 text-2xl font-serif">
              “
            </div>

            {/* Main Quote Text matching image */}
            <div className="my-8 space-y-4 relative z-10">
              <p className="font-display text-lg sm:text-xl font-bold leading-snug tracking-tight text-white drop-shadow-sm">
                "{personalInfo.philosophy.quote}"
              </p>
              
              {/* Handwritten Script Signature */}
              <div className="pt-2">
                <span className="font-script text-3xl sm:text-4xl text-white/95 block transform -rotate-3">
                  {personalInfo.philosophy.author}
                </span>
                <span className="text-[10px] font-mono-code tracking-widest uppercase text-white/75 mt-0.5 block">
                  Product Designer & Architect
                </span>
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="relative z-10 pt-4 border-t border-white/20">
              <a
                href="#contact"
                className="w-full py-3.5 px-4 rounded-xl bg-black hover:bg-zinc-950 text-white font-display text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-xl group/btn"
              >
                <span>{personalInfo.philosophy.ctaText}</span>
                <span className="text-[#e50914] group-hover/btn:translate-x-1 transition-transform">✦</span>
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
