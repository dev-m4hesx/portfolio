import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Filter, Layers, Server, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function SelectedProjects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'UI/UX', 'Backend', 'Full-Stack'];

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] border-b border-[#1f1f1f] relative">
      
      {/* Background glow accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[400px] bg-[#e50914]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header matching image */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-zinc-800/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#e50914] uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-[#e50914] pulse-dot"></span>
              <span>CURATED ARCHITECTURE & INTERFACES</span>
            </div>
            <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide uppercase leading-none">
              SELECTED PROJECTS
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-display uppercase tracking-wider transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#e50914] text-white shadow-[0_0_15px_rgba(229,9,20,0.5)]'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid matching the 3-column / 4-card horizontal flow in reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group cursor-pointer rounded-xl bg-[#121212] border border-zinc-800/90 hover:border-[#e50914] transition-all duration-300 overflow-hidden flex flex-col justify-between crimson-border-glow shadow-xl"
            >
              
              {/* Project Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                />

                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-zinc-800 text-[10px] font-mono-code text-zinc-300 uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Floating Quick View Pill */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-[#e50914] text-white text-xs font-display font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Meta Footer matching exact layout: "01  TITLE | SUBTITLE  →" */}
              <div className="p-5 flex items-center justify-between border-t border-zinc-800/80 bg-[#121212]">
                <div className="flex items-start gap-4">
                  <span className="font-bebas text-3xl sm:text-4xl text-[#e50914] leading-none font-bold">
                    {project.id}
                  </span>
                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-white tracking-wider uppercase group-hover:text-[#e50914] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-mono-code text-[11px] text-zinc-400 uppercase tracking-tight mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-[#e50914] group-hover:border-[#e50914] transition-all transform group-hover:translate-x-1 shrink-0 ml-3">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Tag strip */}
              <div className="px-5 pb-4 pt-1 flex flex-wrap gap-1.5 bg-[#121212]">
                {project.tags.slice(0, 3).map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-400 border border-zinc-800">
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Callout / GitHub Link */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono-code text-zinc-400">
            Have a custom architecture or design requirement?{' '}
            <a href="#contact" className="text-[#e50914] hover:underline font-bold">
              Let's build a dedicated system blueprint ➔
            </a>
          </p>
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}

    </section>
  );
}
