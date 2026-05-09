import React, { useState } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: React.ReactNode;
  afterImage: React.ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Antes',
  afterLabel = 'Después'
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="relative w-full aspect-square sm:aspect-video rounded-2xl overflow-hidden group select-none">
      {/* Base Image (After) */}
      <div className="absolute inset-0">
        {afterImage}
      </div>
      
      {/* Clipped Overlaid Image (Before) */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
      >
        <div className="absolute inset-0 w-full h-full">
          {beforeImage}
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute inset-x-0 bottom-4 px-4 flex justify-between pointer-events-none z-10">
        <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm transition-opacity opacity-0 group-hover:opacity-100">{beforeLabel}</span>
        <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm transition-opacity opacity-0 group-hover:opacity-100">{afterLabel}</span>
      </div>

      {/* Invisible Range Input Slider */}
      <input 
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0"
        style={{ WebkitAppearance: 'none', appearance: 'none' }}
      />
      
      {/* Custom Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none z-10 -ml-[2px]"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-brand-muted">
            <path d="m15 18 6-6-6-6"/>
            <path d="m9 18-6-6 6-6"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
