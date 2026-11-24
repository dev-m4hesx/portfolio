import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorStyle, setCursorStyle] = useState('default');
  const [cursorLabel, setCursorLabel] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on devices that support hover
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const projectCard = target.closest('#projects .group');
      const interactiveEl = target.closest('a, button, input, select, textarea, [role="button"]');

      if (projectCard) {
        setCursorStyle('project');
        setCursorLabel('VIEW');
      } else if (interactiveEl) {
        setCursorStyle('hover');
        setCursorLabel('');
      } else {
        setCursorStyle('default');
        setCursorLabel('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      
      {/* Outer Follower Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none transition-all duration-150 ease-out ${
          cursorStyle === 'project'
            ? 'w-16 h-16 bg-[#e50914] text-white font-bebas text-xs tracking-wider shadow-[0_0_25px_rgba(229,9,20,0.6)]'
            : cursorStyle === 'hover'
            ? 'w-12 h-12 border-2 border-[#e50914] bg-[#e50914]/15'
            : 'w-8 h-8 border border-white/30 bg-transparent'
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      >
        {cursorLabel && <span>{cursorLabel}</span>}
      </div>

      {/* Center Small Dot */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none transition-transform duration-75 ${
          cursorStyle === 'project' ? 'opacity-0' : 'bg-[#e50914]'
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      />
    </div>
  );
}
