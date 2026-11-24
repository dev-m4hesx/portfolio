import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Server, Layout, Cpu, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#121212] border border-zinc-800 rounded-2xl overflow-y-auto shadow-2xl text-white scrollbar-thin"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#121212]/95 backdrop-blur-md border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <span className="font-bebas text-2xl text-[#e50914]">{project.id}</span>
            <div>
              <h3 className="font-bebas text-xl sm:text-2xl tracking-wide uppercase leading-none">{project.title}</h3>
              <p className="font-mono-code text-[11px] text-zinc-400 mt-0.5">{project.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-zinc-800/80 hover:bg-[#e50914] text-zinc-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Main Visual Banner */}
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700 text-xs font-mono-code text-zinc-300">
                {project.category}
              </span>
            </div>
          </div>

          {/* Key Metrics Banner */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#1c1214] to-[#121212] border border-[#e50914]/30 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-mono-code uppercase tracking-wider text-[#e50914]">Impact & Performance Metrics</p>
              <p className="text-sm sm:text-base font-bold text-white mt-0.5">{project.metrics}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded bg-[#e50914]/20 text-[#e50914] text-xs font-mono-code font-bold">
                PROD VERIFIED
              </span>
            </div>
          </div>

          {/* Description & Problem-Solving */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono-code text-zinc-400 tracking-wider">Overview & Architecture</h4>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Role & Deliverables Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#e50914]">
                <Layout className="w-4 h-4" />
                <span>My Role & Architecture</span>
              </div>
              <p className="text-sm font-semibold text-white">{project.role}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-zinc-800 text-[11px] font-mono-code text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#e50914]">
                <Cpu className="w-4 h-4" />
                <span>Key Deliverables</span>
              </div>
              <ul className="space-y-2">
                {project.deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#e50914] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Actions / Links */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800">
            <div className="flex items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg bg-[#e50914] hover:bg-[#b91c1c] text-white text-xs font-display uppercase tracking-wider font-bold flex items-center gap-2 transition-colors shadow-lg"
              >
                <span>Live Experience</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-display uppercase tracking-wider flex items-center gap-2 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Repository</span>
              </a>
            </div>
            <button
              onClick={onClose}
              className="text-xs text-zinc-400 hover:text-white font-mono-code"
            >
              Press ESC to close
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
