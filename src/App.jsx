import React, { useState, useEffect, useCallback } from 'react';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import FloatingTechBar from './components/FloatingTechBar';

export default function App() {
  const isSettledParam = typeof window !== 'undefined' && window.location.search.includes('settled');
  const [isEntered, setIsEntered] = useState(isSettledParam);

  // Trigger in-page entrance animation immediately on page mount
  useEffect(() => {
    if (isSettledParam) return;
    const timer = setTimeout(() => {
      setIsEntered(true);
    }, 120);
    return () => clearTimeout(timer);
  }, [isSettledParam]);

  // Replay entrance animation on demand
  const handleReplay = useCallback(() => {
    setIsEntered(false);
    setTimeout(() => {
      setIsEntered(true);
    }, 100);
  }, []);

  return (
    <div className="w-screen h-screen min-h-screen bg-[#080808] text-white overflow-hidden relative font-sans selection:bg-[#e50914] selection:text-white">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Main Full-Size Hero Screen with Dramatic In-Page Entrance */}
      <main className="w-full h-full">
        <Hero isEntered={isEntered} onReplay={handleReplay} />
      </main>

      {/* Floating Bottom Tech Bar with Entrance Slide */}
      <FloatingTechBar isEntered={isEntered} />
    </div>
  );
}
