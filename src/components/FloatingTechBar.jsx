import React from 'react';

// Eszter Bial's exact flower smiley SVG
function FlowerSmiley({ className = "w-6 h-6", petalColor = "#e50914", faceColor = "#ffffff" }) {
  return (
    <svg className={className} viewBox="0 0 31.1 28.3" fill="none">
      <path d="M23.3,9.7c3.5-2,3.5-7,0-9s-7.8.5-7.8,4.5v18c0,4,4.3,6.5,7.8,4.5s3.5-7,0-9c3.5,2,7.8-.5,7.8-4.5s-4.3-6.5-7.8-4.5Z" fill={petalColor}/>
      <path d="M7.8.7c-3.5,2-3.5,7,0,9C4.3,7.7,0,10.2,0,14.2s4.3,6.5,7.8,4.5c-3.5,2-3.5,7,0,9s7.8-.5,7.8-4.5V5.2C15.6,1.2,11.2-1.3,7.8.7Z" fill={petalColor}/>
      <g>
        <path d="M14.3,11.3c-1.2,1.2-3.2,1.2-4.4,0" fill="none" stroke={faceColor} strokeWidth="1.3" strokeLinecap="round" strokeMiterlimit="10"/>
        <path d="M21.1,11.3c-1.2,1.2-3.2,1.2-4.4,0" fill="none" stroke={faceColor} strokeWidth="1.3" strokeLinecap="round" strokeMiterlimit="10"/>
      </g>
      <path d="M22.2,14.3c-3.7,3.7-9.6,3.7-13.3,0" fill="none" stroke={faceColor} strokeWidth="1.3" strokeLinecap="round" strokeMiterlimit="10"/>
    </svg>
  );
}

export default function FloatingTechBar({ isEntered = false }) {
  const languages = [
    {
      name: "python",
      logo: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M11.91 2c-5.06 0-4.75 2.19-4.75 2.19l.01 2.27h4.84v.69H5.16S2 6.78 2 11.89c0 5.12 2.76 4.93 2.76 4.93h1.65v-2.31s-.09-2.76 2.71-2.76h4.66v-.71H9.12s-2.61.12-2.61-2.52c0-2.65 2.32-2.58 2.32-2.58h6.29s2.42.06 2.42-2.38C17.54 1.2 14.86 2 11.91 2zm-1.34 1.39a.78.78 0 110 1.56.78.78 0 010-1.56z" fill="#387EB8"/>
          <path d="M12.09 22c5.06 0 4.75-2.19 4.75-2.19l-.01-2.27h-4.84v-.69h6.85s3.16.37 3.16-4.74c0-5.12-2.76-4.93-2.76-4.93h-1.65v2.31s.09 2.76-2.71 2.76h-4.66v.71h4.66s2.61-.12 2.61 2.52c0 2.65-2.32 2.58-2.32 2.58H8.86s-2.42-.06-2.42 2.38C6.44 22.8 9.14 22 12.09 22zm1.34-1.39a.78.78 0 110-1.56.78.78 0 010 1.56z" fill="#FFE052"/>
        </svg>
      )
    },
    {
      name: "c++",
      logo: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7.78v11.56L12 22l10-4.66V7.78L12 2z" fill="#00599C"/>
          <path d="M12 4.14l7.65 4.42v8.88L12 20.36 4.35 17.44V8.56L12 4.14z" fill="#004482"/>
          <path d="M9.8 14.3c-.6-.4-.9-1-.9-1.8 0-.8.3-1.4.9-1.8.6-.4 1.3-.6 2.2-.6.7 0 1.3.1 1.8.4.5.3.8.7.9 1.1h-1.5c-.1-.2-.3-.4-.6-.5-.3-.1-.6-.2-.9-.2-.5 0-.9.1-1.2.4-.3.3-.5.7-.5 1.2 0 .5.2.9.5 1.2.3.3.7.4 1.2.4.3 0 .7-.1 1-.2.3-.1.4-.3.6-.5h1.5c-.2.5-.5.9-.9 1.2-.5.3-1.1.4-1.9.4-.9 0-1.6-.2-2.2-.6z" fill="#FFFFFF"/>
          <path d="M15.4 12.7h.8v-.8h.6v.8h.8v.6h-.8v.8h-.6v-.8h-.8v-.6zm2.7 0h.8v-.8h.6v.8h.8v.6h-.8v.8h-.6v-.8h-.8v-.6z" fill="#FFFFFF"/>
        </svg>
      )
    },
    {
      name: "c#",
      logo: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7.78v11.56L12 22l10-4.66V7.78L12 2z" fill="#9B4993"/>
          <path d="M12 4.14l7.65 4.42v8.88L12 20.36 4.35 17.44V8.56L12 4.14z" fill="#68217A"/>
          <path d="M10 14.3c-.6-.4-.9-1-.9-1.8 0-.8.3-1.4.9-1.8.6-.4 1.3-.6 2.2-.6.7 0 1.3.1 1.8.4.5.3.8.7.9 1.1h-1.5c-.1-.2-.3-.4-.6-.5-.3-.1-.6-.2-.9-.2-.5 0-.9.1-1.2.4-.3.3-.5.7-.5 1.2 0 .5.2.9.5 1.2.3.3.7.4 1.2.4.3 0 .7-.1 1-.2.3-.1.4-.3.6-.5h1.5c-.2.5-.5.9-.9 1.2-.5.3-1.1.4-1.9.4-.9 0-1.6-.2-2.2-.6z" fill="#FFFFFF"/>
          <path d="M15.6 13.9l.2-1.1h-.9l.2-1h1l.2-1.1h.9l-.2 1.1h1l.2-1.1h.9l-.2 1.1h.9l-.2 1h-.9l-.2 1.1h.9l-.2 1h-.9l-.2 1.1h-.9l.2-1.1h-1l-.2 1.1h-.9l.2-1.1h-.9l.2-1h.9zm1.1 0h1l.2-1.1h-1l-.2 1.1z" fill="#FFFFFF"/>
        </svg>
      )
    },
    {
      name: "css3",
      logo: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M3.5 2h17l-1.55 17.39L12 22l-6.95-2.61L3.5 2z" fill="#1572B6"/>
          <path d="M12 3.65v16.51l5.57-2.09 1.25-14.42H12z" fill="#33A9DC"/>
          <path d="M12 8.13H7.83l.25 2.8h3.92V8.13zm0 5.48l-.03.01-2.33-.63-.15-1.67H7.36l.29 3.28 4.35 1.21V13.61z" fill="#EBEBEB"/>
          <path d="M12 8.13v2.8h3.67l-.26 2.92-3.41.92v2.22l4.35-1.21.57-6.42L17 8.13H12z" fill="#FFFFFF"/>
        </svg>
      )
    },
    {
      name: "javascript",
      logo: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
          <path d="M7.5 17.5c.6.9 1.4 1.5 2.5 1.5 1.4 0 2.2-.7 2.2-2.6v-7h-2.1v7c0 .8-.3 1.1-.8 1.1-.4 0-.7-.2-.9-.6l-.9.6zm7.2-1c.6 1 1.5 1.6 2.8 1.6 1.3 0 2.2-.6 2.2-1.7 0-1-.6-1.5-1.8-2l-.6-.3c-1.3-.5-2.2-1.2-2.2-2.6 0-1.5 1.2-2.6 3-2.6 1.4 0 2.3.5 2.9 1.5l-1.5 1c-.3-.6-.7-.9-1.4-.9-.6 0-1.1.4-1.1.9 0 .6.4.9 1.4 1.3l.6.3c1.6.7 2.6 1.3 2.6 2.8 0 1.8-1.4 2.8-3.4 2.8-1.8 0-3-.8-3.6-2l1.6-1.1z" fill="#000000"/>
        </svg>
      )
    },
    {
      name: "react",
      logo: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(0 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 12)"/>
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB"/>
        </svg>
      )
    },
    {
      name: "figma",
      logo: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M8 2h4v6.67H8A3.33 3.33 0 018 2z" fill="#F24E1E"/>
          <path d="M12 2h4a3.33 3.33 0 010 6.67H12V2z" fill="#FF7262"/>
          <path d="M8 8.67h4v6.66H8a3.33 3.33 0 010-6.66z" fill="#A259FF"/>
          <path d="M8 15.33h4V22a3.33 3.33 0 01-3.33-3.33A3.33 3.33 0 018 15.33z" fill="#0ACF83"/>
          <circle cx="16" cy="12" r="3.33" fill="#1ABCFE"/>
        </svg>
      )
    },
    {
      name: "node.js",
      logo: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2z" fill="#339933"/>
          <path d="M12 4.2l7.1 4.1v8.2L12 20.6l-7.1-4.1V8.3L12 4.2z" fill="#026E00"/>
          <path d="M12 7.5c1.4 0 2.5.4 3.2 1.1l-1 1.2c-.5-.5-1.2-.7-2.1-.7-1.5 0-2.5.9-2.5 2.2s1 2.2 2.5 2.2c.9 0 1.6-.3 2.1-.7l1 1.2c-.8.8-1.9 1.2-3.2 1.2-2.5 0-4.2-1.7-4.2-3.9 0-2.3 1.7-4 4.2-4z" fill="#FFFFFF"/>
        </svg>
      )
    },
    {
      name: "html5",
      logo: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M3.5 2h17l-1.55 17.39L12 22l-6.95-2.61L3.5 2z" fill="#E34F26"/>
          <path d="M12 3.65v16.51l5.57-2.09 1.25-14.42H12z" fill="#EF652A"/>
          <path d="M7.83 8.13h4.17v2.8H9.37l.25 2.8H12v2.22l-4.35-1.21-.29-3.28h1.93l.15 1.67 2.33.63.03-.01v-2.8H7.58L7.83 8.13z" fill="#EBEBEB"/>
          <path d="M12 8.13v2.8h4.42l-.25 2.8H12v2.22l4.35-1.21.57-6.42.22-2.39H12z" fill="#FFFFFF"/>
        </svg>
      )
    },
    {
      name: "postgresql",
      logo: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="7" rx="8" ry="3.5" stroke="#4169E1" strokeWidth="1.5" fill="#1e293b"/>
          <path d="M4 7v5c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5V7" stroke="#4169E1" strokeWidth="1.5"/>
          <path d="M4 12v5c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5v-5" stroke="#4169E1" strokeWidth="1.5"/>
        </svg>
      )
    }
  ];

  return (
    <aside 
      aria-label="Languages and Tools Dock" 
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[94vw] max-w-4xl select-none"
    >
      
      {/* Floating Pill Dock inspired directly by Eszter Bial */}
      <div 
        className={`relative w-full rounded-full bg-[#0d0d0d]/90 backdrop-blur-xl border border-zinc-800/90 hover:border-[#e50914]/60 py-2 sm:py-2.5 px-3 overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.9)] transition-all duration-1000 ease-out group ${
          isEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-28 pointer-events-none'
        }`}
        style={{ transitionDelay: '600ms' }}
      >
        
        {/* Subtle Edge Fade Gradients */}
        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none"></div>

        {/* Running Marquee Track with exact Eszter Bial typography and Flower Smileys */}
        <div className="animate-marquee flex items-center gap-6 sm:gap-8 whitespace-nowrap group-hover:[animation-play-state:paused]">
          
          {/* Loop Set 1 */}
          {languages.map((item, idx) => (
            <div key={`lang1-${idx}`} className="flex items-center gap-6 sm:gap-8 shrink-0">
              
              {/* Language Item with Logo & Editorial Serif Italic Name */}
              <div className="flex items-center gap-2 group/item cursor-pointer">
                <span className="group-hover/item:scale-110 transition-transform">
                  {item.logo}
                </span>
                <span className="font-editorial text-xl sm:text-2xl text-zinc-100 group-hover/item:text-[#e50914] transition-colors leading-none tracking-normal">
                  {item.name}
                </span>
              </div>

              {/* Exact Eszter Bial Flower Smiley Separator */}
              <div className="shrink-0 flex items-center justify-center">
                <FlowerSmiley 
                  className="w-5 h-5 sm:w-6 sm:h-5.5 hover:rotate-45 transition-transform duration-300" 
                  petalColor="#e50914" 
                  faceColor="#ffffff" 
                />
              </div>

            </div>
          ))}

          {/* Loop Set 2 for seamless infinite scroll */}
          {languages.map((item, idx) => (
            <div key={`lang2-${idx}`} className="flex items-center gap-6 sm:gap-8 shrink-0">
              
              {/* Language Item with Logo & Editorial Serif Italic Name */}
              <div className="flex items-center gap-2 group/item cursor-pointer">
                <span className="group-hover/item:scale-110 transition-transform">
                  {item.logo}
                </span>
                <span className="font-editorial text-xl sm:text-2xl text-zinc-100 group-hover/item:text-[#e50914] transition-colors leading-none tracking-normal">
                  {item.name}
                </span>
              </div>

              {/* Exact Eszter Bial Flower Smiley Separator */}
              <div className="shrink-0 flex items-center justify-center">
                <FlowerSmiley 
                  className="w-5 h-5 sm:w-6 sm:h-5.5 hover:rotate-45 transition-transform duration-300" 
                  petalColor="#e50914" 
                  faceColor="#ffffff" 
                />
              </div>

            </div>
          ))}

        </div>

      </div>

    </aside>
  );
}
