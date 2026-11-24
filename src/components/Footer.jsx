import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { InstagramIcon, GithubIcon, LinkedinIcon, FigmaIcon, TwitterIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('en-US', { hour12: false, timeZone: 'Asia/Jakarta' }) + ' WIB');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a] pt-16 pb-12 relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Big Callout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-900">
          <div>
            <span className="font-mono-code text-xs text-[#e50914] uppercase tracking-widest block mb-2">
              DESIGN × ARCHITECTURE × RELIABILITY
            </span>
            <h3 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide uppercase leading-none">
              DESIGNED TO INSPIRE. ENGINEERED TO SCALE.
            </h3>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-[#e50914] text-xs font-mono-code text-zinc-300 hover:text-white transition-all w-fit shadow-md group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#e50914] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Middle Links & Socials */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-zinc-900">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#e50914] flex items-center justify-center font-bebas text-sm text-white">
                MR
              </div>
              <span className="font-bebas text-xl tracking-wider text-white">{personalInfo.name}</span>
            </div>
            <p className="text-xs text-zinc-400 font-sans leading-relaxed">
              Hybrid UX/UI Designer & Distributed Systems Engineer. Bridging aesthetics and high-concurrency computing.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono-code text-[#e50914] uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-display text-zinc-400">
              <li><a href="#top" className="hover:text-white transition-colors">Hero Overview</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Selected Projects</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills & Education</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Work Process</a></li>
              <li><a href="#instagram" className="hover:text-white transition-colors">Instagram Feed</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono-code text-[#e50914] uppercase tracking-wider mb-3">
              Specializations
            </h4>
            <ul className="space-y-2 text-xs font-display text-zinc-400">
              <li>Design Systems & Figma Tokens</li>
              <li>High-Throughput Node & Go APIs</li>
              <li>PostgreSQL & Redis Caching</li>
              <li>Micro-Interactions & GSAP</li>
              <li>End-to-End System Security</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono-code text-[#e50914] uppercase tracking-wider mb-3">
              Connect & Follow
            </h4>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={personalInfo.contact.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#e50914] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#e50914] transition-all shadow"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#e50914] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all shadow"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#e50914] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-blue-600 transition-all shadow"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://figma.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#e50914] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all shadow"
                aria-label="Figma"
              >
                <FigmaIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#e50914] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all shadow"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Local time */}
            <div className="mt-4 pt-4 border-t border-zinc-900 flex items-center gap-2 text-[11px] font-mono-code text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot"></span>
              <span>LOCAL TIME: {timeStr || '17:50 WIB'}</span>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-zinc-400">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>Crafted with</span>
            <span className="text-[#e50914]">♥</span>
            <span>& Crimson Brutalism</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
