import React from 'react';
import { Sparkles, Terminal, Layers, Code, Compass, Zap } from 'lucide-react';

export default function Marquee() {
  const items = [
    { text: "UI/UX DESIGN", icon: Layers },
    { text: "DISTRIBUTED BACKEND", icon: Terminal },
    { text: "FIGMA DESIGN SYSTEMS", icon: Sparkles },
    { text: "REST & GRAPHQL APIS", icon: Code },
    { text: "SYSTEM ARCHITECTURE", icon: Compass },
    { text: "HIGH-THROUGHPUT MICROSERVICES", icon: Zap },
    { text: "INTERACTIVE PROTOTYPING", icon: Layers },
    { text: "INSTAGRAM @M4.HEX_", icon: Sparkles },
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-[#222222] bg-[#0c0c0c] py-3.5 select-none z-20">
      
      {/* Subtle edge fade overlays */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none"></div>

      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* Repeating sequence 1 */}
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={`m1-${index}`} className="flex items-center gap-4 group cursor-default">
              <span className="font-bebas text-xl sm:text-2xl tracking-widest text-zinc-300 group-hover:text-[#e50914] transition-colors flex items-center gap-3">
                {item.text}
              </span>
              <span className="text-[#e50914] text-xs">✦</span>
            </div>
          );
        })}

        {/* Repeating sequence 2 for seamless loop */}
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={`m2-${index}`} className="flex items-center gap-4 group cursor-default">
              <span className="font-bebas text-xl sm:text-2xl tracking-widest text-zinc-300 group-hover:text-[#e50914] transition-colors flex items-center gap-3">
                {item.text}
              </span>
              <span className="text-[#e50914] text-xs">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
