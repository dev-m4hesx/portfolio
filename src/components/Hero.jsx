import React from 'react';
import { Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import KineticLinkRoller from './KineticLinkRoller';

export default function Hero({ isEntered = false, onReplay }) {
  return (
    <section className="relative w-full min-h-screen lg:h-screen lg:min-h-screen bg-[#080808] text-white flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-12 pb-32 sm:pb-36 lg:pb-12 select-none">
      
      {/* Ambient Red Glow in Background */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[1000px] h-[55vh] bg-[#e50914]/15 rounded-full blur-[160px] pointer-events-none -z-0 transition-all duration-1000 ease-out ${
          isEntered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
      ></div>

      {/* TOP HEADER SUBHEAD BAR WITH REPLAY BUTTON */}
      <div 
        className={`w-full flex items-center justify-between text-[11px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-display text-zinc-400 z-30 transition-all duration-700 ease-out mb-4 lg:mb-0 ${
          isEntered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}
        style={{ transitionDelay: '80ms' }}
      >
        <div className="flex items-center gap-2">
          <span className="text-[#e50914] font-bold">UX/UI DESIGNER</span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-400">BACKEND ARCHITECT</span>
        </div>

        {onReplay && (
          <button
            onClick={onReplay}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-800/90 bg-zinc-900/60 hover:bg-[#e50914]/15 hover:border-[#e50914]/50 text-zinc-400 hover:text-white transition-all text-[10px] tracking-wider font-mono-code cursor-pointer pointer-events-auto"
            title="Replay in-page entrance animation"
          >
            <span>↻</span>
            <span>REPLAY ENTRANCE</span>
          </button>
        )}
      </div>

      {/* ================= DESKTOP STAGE (>= 1024px) ================= */}
      <div className="hidden lg:flex relative w-full flex-1 items-center justify-between my-auto">
        
        {/* Giant Background Text: UX/UI DESIGNER perfectly fitted across behind photo */}
        <div 
          className={`absolute top-[3vh] sm:top-[4vh] lg:top-[5vh] left-0 right-0 flex justify-center pointer-events-none z-0 select-none transition-all duration-1000 ease-out ${
            isEntered ? 'opacity-95 scale-100 translate-y-0' : 'opacity-0 scale-85 translate-y-16'
          }`}
          style={{ transitionDelay: '160ms' }}
        >
          <h1 className="font-bebas text-[11vw] xl:text-[145px] 2xl:text-[165px] leading-none tracking-[0.02em] text-[#bd0b17] uppercase font-black text-center whitespace-nowrap drop-shadow-[0_15px_35px_rgba(189,11,23,0.35)] opacity-95">
            UX/UI DESIGNER
          </h1>
        </div>

        {/* Center Portrait: Mahesh Raj towering in center */}
        <div 
          className={`absolute inset-x-0 bottom-0 top-[2vh] flex items-end justify-center pointer-events-none z-10 transition-all duration-1000 ease-out ${
            isEntered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-36 scale-90'
          }`}
          style={{ transitionDelay: '260ms' }}
        >
          <div className="relative h-[82vh] max-h-[820px] flex items-end justify-center">
            {/* Layered cinematic backlight halos */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-[#bd0b17]/30 rounded-full blur-[110px] -z-10 pointer-events-none"></div>
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#e50914]/20 rounded-full blur-[70px] -z-10 pointer-events-none"></div>
            
            <img
              src={personalInfo.heroPortrait}
              alt={personalInfo.name}
              className="h-full w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.98)] filter contrast-[1.08] saturate-[1.05] brightness-[0.98]"
              onError={(e) => {
                e.target.src = "/mahesh-cutout-rim.png";
              }}
            />

            {/* Bottom seamless gradient fade into pitch black base */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080808] via-[#080808]/90 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* LEFT COLUMN: Name, Title, Bio, Buttons */}
        <div className="relative z-20 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg space-y-3 sm:space-y-4 lg:space-y-5 pointer-events-auto">
          <div>
            <span 
              className={`font-script text-3xl sm:text-4xl lg:text-5xl text-[#e50914] block transform -rotate-3 origin-bottom-left transition-all duration-700 ease-out ${
                isEntered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
              }`}
              style={{ transitionDelay: '360ms' }}
            >
              {personalInfo.greeting}
            </span>
            <div 
              className={`font-bebas text-6xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-white uppercase leading-[0.82] font-black mt-1 transition-all duration-800 ease-out ${
                isEntered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
              }`}
              style={{ transitionDelay: '420ms' }}
            >
              <div>MAHESH</div>
              <div>RAJ</div>
            </div>
          </div>

          {/* Red Subtitle Badge */}
          <div 
            className={`text-[#e50914] font-display text-xs sm:text-sm font-bold tracking-widest uppercase flex items-center gap-2 transition-all duration-700 ease-out ${
              isEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e50914] pulse-dot"></span>
            <span>{personalInfo.roles}</span>
          </div>

          {/* Bio Description */}
          <p 
            className={`text-zinc-300 text-xs sm:text-sm leading-relaxed font-sans max-w-sm transition-all duration-700 ease-out ${
              isEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '560ms' }}
          >
            {personalInfo.bio}
          </p>

          {/* Jitter-Style 3D Blur Kinetic Link Roller (Instagram, GitHub, Gmail) */}
          <div 
            className={`transition-all duration-800 ease-out ${
              isEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '640ms' }}
          >
            <KineticLinkRoller />
          </div>
        </div>

        {/* RIGHT COLUMN: Sparkle quote + Stats stack moved UP */}
        <div className="relative z-20 text-right space-y-4 lg:space-y-5 pointer-events-auto flex flex-col items-end -mt-16 sm:-mt-20 lg:-mt-24">
          
          {/* Sparkle callout */}
          <div 
            className={`flex items-center gap-2 text-zinc-300 max-w-[210px] justify-end transition-all duration-700 ease-out ${
              isEntered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
            style={{ transitionDelay: '380ms' }}
          >
            <Sparkles className="w-4 h-4 text-[#e50914] shrink-0" />
            <p className="text-xs sm:text-sm font-sans leading-snug text-zinc-300">
              {personalInfo.sparkleText}
            </p>
          </div>

          {/* Stats Stack matching uploaded image */}
          <div className="space-y-3 sm:space-y-3.5">
            {personalInfo.stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`group transition-all duration-700 ease-out ${
                  isEntered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
                }`}
                style={{ transitionDelay: `${480 + idx * 90}ms` }}
              >
                <div className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[#e50914] font-black leading-none group-hover:scale-105 transition-transform inline-block">
                  {stat.value}
                </div>
                <p className="text-[9px] sm:text-[10px] lg:text-[11px] font-display uppercase tracking-widest text-zinc-400 group-hover:text-zinc-200 transition-colors mt-0.5 font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* ================= MOBILE & TABLET RESPONSIVE STAGE (< 1024px) ================= */}
      <div className="flex lg:hidden flex-col w-full relative z-20 space-y-6 sm:space-y-8 my-auto">
        
        {/* Mobile/Tablet Identity: Greeting + Name + Role */}
        <div className="space-y-2">
          <span 
            className={`font-script text-2xl sm:text-4xl text-[#e50914] block transform -rotate-2 origin-bottom-left transition-all duration-700 ease-out ${
              isEntered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {personalInfo.greeting}
          </span>
          <div 
            className={`font-bebas text-6xl sm:text-7xl md:text-8xl tracking-tight text-white uppercase leading-[0.85] font-black transition-all duration-800 ease-out ${
              isEntered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
            style={{ transitionDelay: '260ms' }}
          >
            <div>MAHESH</div>
            <div>RAJ</div>
          </div>
          <div 
            className={`text-[#e50914] font-display text-[11px] sm:text-sm font-bold tracking-widest uppercase flex items-center gap-2 pt-1 transition-all duration-700 ease-out ${
              isEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '320ms' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e50914] pulse-dot"></span>
            <span>{personalInfo.roles}</span>
          </div>
        </div>

        {/* Mobile/Tablet Centerpiece Portrait with Backdrop Red Glow and Giant Type */}
        <div 
          className={`relative w-full flex items-center justify-center my-2 overflow-hidden transition-all duration-1000 ease-out ${
            isEntered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-12'
          }`}
          style={{ transitionDelay: '380ms' }}
        >
          {/* Backdrop Giant Type */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 select-none whitespace-nowrap">
            <h2 className="font-bebas text-[15vw] sm:text-[12vw] leading-none text-[#bd0b17] uppercase font-black opacity-85 tracking-wide">
              UX/UI DESIGNER
            </h2>
          </div>

          {/* Layered cinematic backlight glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-[#e50914]/25 rounded-full blur-[80px] pointer-events-none -z-0"></div>

          {/* Portrait Image */}
          <div className="relative z-10 h-[38vh] sm:h-[46vh] max-h-[420px] flex items-end justify-center">
            <img
              src={personalInfo.heroPortrait}
              alt={personalInfo.name}
              className="h-full w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)] filter contrast-[1.08] saturate-[1.05]"
              onError={(e) => {
                e.target.src = "/mahesh-cutout-rim.png";
              }}
            />
            {/* Base gradient blend */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Mobile/Tablet Bio & Kinetic Links */}
        <div className="space-y-4">
          <p 
            className={`text-zinc-300 text-xs sm:text-sm leading-relaxed font-sans max-w-lg transition-all duration-700 ease-out ${
              isEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '440ms' }}
          >
            {personalInfo.bio}
          </p>

          <div 
            className={`transition-all duration-800 ease-out ${
              isEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <KineticLinkRoller />
          </div>
        </div>

        {/* Mobile/Tablet Stats Grid & Sparkle Quote */}
        <div 
          id="stats"
          className={`space-y-4 pt-2 transition-all duration-700 ease-out ${
            isEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '560ms' }}
        >
          {/* Sparkle callout */}
          <div className="flex items-center gap-2 text-zinc-300 max-w-md">
            <Sparkles className="w-4 h-4 text-[#e50914] shrink-0" />
            <p className="text-xs sm:text-sm font-sans leading-snug text-zinc-300">
              {personalInfo.sparkleText}
            </p>
          </div>

          {/* Stats Grid: 2 cols on mobile, 4 cols on tablet */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-2xl">
            {personalInfo.stats.map((stat, idx) => (
              <div 
                key={`mob-stat-${idx}`}
                className="bg-zinc-900/60 border border-zinc-800/90 rounded-xl p-3 sm:p-4 hover:border-[#e50914]/50 transition-colors"
              >
                <div className="font-bebas text-3xl sm:text-4xl text-[#e50914] font-black leading-none">
                  {stat.value}
                </div>
                <p className="text-[10px] sm:text-[11px] font-display uppercase tracking-wider text-zinc-400 font-semibold mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
