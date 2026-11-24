import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Platform Vector Glyphs
function InstagramGlyph({ className = "w-5 h-5", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function GithubGlyph({ className = "w-5 h-5", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function GmailGlyph({ className = "w-5 h-5", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
    </svg>
  );
}

export default function KineticLinkRoller() {
  const links = [
    {
      id: 'instagram',
      name: 'Instagram',
      handle: personalInfo.contact.instagram.handle || '@m4.hex_',
      url: personalInfo.contact.instagram.url || 'https://instagram.com/m4.hex_',
      brandColor: '#E1306C',
      icon: InstagramGlyph
    },
    {
      id: 'github',
      name: 'GitHub',
      handle: personalInfo.contact.github?.username || 'dev-m4hesx',
      url: personalInfo.contact.github?.url || 'https://github.com/dev-m4hesx',
      brandColor: '#ffffff',
      icon: GithubGlyph
    },
    {
      id: 'gmail',
      name: 'Gmail',
      handle: personalInfo.contact.email || 'mahesxraj@gmail.com',
      url: personalInfo.contact.gmailComposeUrl || `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.contact.email || 'mahesxraj@gmail.com'}&su=Project%20Inquiry%20for%20Mahesh%20Raj`,
      brandColor: '#EA4335',
      icon: GmailGlyph
    }
  ];

  const [activeIndex, setActiveIndex] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const linkParam = params.get('link');
      if (linkParam === 'github' || linkParam === '1') return 1;
      if (linkParam === 'gmail' || linkParam === 'email' || linkParam === '2') return 2;
    }
    return 0;
  });
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycling kinetic roller matching the video
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % links.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [isPaused, links.length]);

  return (
    <div 
      className="relative z-20 pt-2 pointer-events-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle Label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#e50914] pulse-dot"></span>
        <span className="text-[10px] font-mono-code uppercase tracking-widest text-zinc-400">
          CONNECT DIRECTLY
        </span>
      </div>

      {/* 3D Perspective Kinetic Roller Frame */}
      <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-[130px] sm:h-[145px] overflow-hidden select-none [perspective:900px]">
        
        {/* Top & Bottom Depth Vignette Masks */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#080808] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#080808] to-transparent z-10 pointer-events-none"></div>

        {/* Rolling items stack */}
        <div className="relative w-full h-full flex flex-col justify-center">
          {links.map((link, idx) => {
            // Distance from active center index (with wrap-around for 3 items)
            let diff = idx - activeIndex;
            if (diff > 1) diff -= links.length;
            if (diff < -1) diff += links.length;

            const isCurrent = diff === 0;
            const isAbove = diff === -1;
            const isBelow = diff === 1;

            // Dynamic 3D transform & blur classes
            let transformClass = '';
            let filterClass = '';
            let opacityClass = '';

            if (isCurrent) {
              transformClass = 'translate-y-0 rotate-x-0 scale-100 z-20';
              filterClass = 'blur-0';
              opacityClass = 'opacity-100';
            } else if (isAbove) {
              transformClass = '-translate-y-9 sm:-translate-y-11 rotate-x-35 scale-90 z-10';
              filterClass = 'blur-[2.5px]';
              opacityClass = 'opacity-35';
            } else if (isBelow) {
              transformClass = 'translate-y-9 sm:translate-y-11 -rotate-x-35 scale-90 z-10';
              filterClass = 'blur-[2.5px]';
              opacityClass = 'opacity-35';
            } else {
              transformClass = 'translate-y-20 opacity-0 scale-75 z-0';
              filterClass = 'blur-md';
              opacityClass = 'opacity-0 pointer-events-none';
            }

            const Icon = link.icon;

            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`absolute left-0 right-0 flex items-center gap-3 py-1.5 transition-all duration-500 ease-out cursor-pointer group ${transformClass} ${filterClass} ${opacityClass}`}
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Directional Arrow (Active indicator matching the video) */}
                <div className={`transition-all duration-300 flex items-center justify-center shrink-0 ${
                  isCurrent 
                    ? 'opacity-100 translate-x-0 text-[#e50914]' 
                    : 'opacity-0 -translate-x-2 text-zinc-600'
                }`}>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                </div>

                {/* Platform Logo First */}
                <div className={`flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isCurrent 
                    ? 'scale-105 group-hover:scale-115' 
                    : 'scale-95'
                }`}
                style={{
                  color: isCurrent ? link.brandColor : '#71717a'
                }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Username / Handle Side by Side */}
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className={`font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap transition-colors duration-200 ${
                    isCurrent 
                      ? 'text-white group-hover:text-[#e50914]' 
                      : 'text-zinc-400'
                  }`}>
                    {link.handle}
                  </span>
                  {isCurrent && (
                    <span className="text-xs font-mono-code text-[#e50914] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0">
                      ↗
                    </span>
                  )}
                </div>
              </a>
            );
          })}
        </div>

      </div>

      {/* Mini interactive dots */}
      <div className="flex items-center gap-1.5 mt-1 pl-8">
        {links.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === i ? 'w-5 bg-[#e50914]' : 'w-1.5 bg-zinc-700 hover:bg-zinc-500'
            }`}
            aria-label={`Jump to link ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
