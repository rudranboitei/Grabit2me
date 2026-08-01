'use client';

import { Download } from 'lucide-react';
import Image from 'next/image';

export function DownloaderHero() {
  const handleInstallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('show-pwa-install'));
  };

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 mb-16 mt-8">
      {/* Small top title */}
      <div className="text-xl md:text-2xl font-normal tracking-tight text-black flex items-center gap-2">
        <div className="w-8 h-8 bg-black rounded-full text-white flex items-center justify-center text-sm font-bold">
          G
        </div>
        GrabIt2Me
      </div>

      {/* Main massive headline as requested: Bricolage Grotesque, 730 weight, ~40px size, 110% line height, -0.4px tracking */}
      <h1 className="text-[32px] md:text-[40px] font-[730] tracking-[-0.4px] text-[#1b1c1c] leading-[110%] max-w-4xl text-center mx-auto mt-4 mb-4">
        Need a cool tool? <br/> I've got you covered
      </h1>
      
      <p className="text-[18px] md:text-[22px] text-black font-normal mt-2 max-w-2xl mx-auto leading-relaxed">
        Downloading and saving media <br/> for creators and founders
      </p>

      {/* Action button matching the "Book a call" style */}
      <div className="pt-6 flex flex-col items-center gap-4">
        <button 
          onClick={handleInstallClick}
          className="relative overflow-hidden cursor-pointer inline-flex items-center gap-2 bg-[#ffc73b] text-[#1b1c1c] px-8 py-4 rounded-[40px] font-[730] text-[18px] hover:scale-105 transition-transform shadow-[inset_0px_-4px_4px_0px_rgb(208,163,52)] border-2 border-[rgba(19,20,21,0.06)]"
        >
          Install App
          {/* Shine effect */}
          <div className="absolute inset-0 w-[200%] h-full bg-[#fbfeff] opacity-20 -rotate-45 translate-x-[-150%] hover:translate-x-[150%] transition-transform duration-[1500ms]" />
        </button>
        
        <div className="flex items-center gap-2 text-[15px] font-[730] text-[#1b1c1c]">
          <div className="w-3 h-3 rounded-full bg-[#ffc73b] shadow-[inset_0px_-2px_2px_0px_rgb(208,163,52)]" />
          available
        </div>
      </div>
    </div>
  );
}
