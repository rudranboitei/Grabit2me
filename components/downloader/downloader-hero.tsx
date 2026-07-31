'use client';

import { Download, Zap, Video, LucideIcon, DownloadCloud } from 'lucide-react';
import Image from 'next/image';

interface InlineIconProps {
  icon: LucideIcon;
  variant?: 'solid' | 'transparent' | 'filled';
}

function InlineIcon({ icon: Icon, variant = 'transparent' }: InlineIconProps) {
  if (variant === 'solid') {
    return (
      <span className="inline-flex items-center justify-center bg-black text-white p-[clamp(0.25rem,1vw,0.5rem)] rounded-[clamp(0.75rem,2vw,1.25rem)] shrink-0">
        <Icon className="w-[clamp(1.5rem,4vw,2.75rem)] h-[clamp(1.5rem,4vw,2.75rem)]" strokeWidth={2.5} />
      </span>
    );
  }

  return (
    <span className="inline-flex items-center justify-center text-black shrink-0">
      <Icon 
        className="w-[clamp(2rem,5vw,3.5rem)] h-[clamp(2rem,5vw,3.5rem)]" 
        strokeWidth={variant === 'transparent' ? 2.5 : 0} 
        fill={variant === 'filled' ? 'currentColor' : 'none'} 
      />
    </span>
  );
}

export function DownloaderHero() {
  const handleInstallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('show-pwa-install'));
  };

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 mb-16 mt-8">
      {/* Small top title */}
      <div className="text-xl md:text-2xl font-bold tracking-tight text-black">
        GrabIt2Me
      </div>

      {/* Main massive headline */}
      <h1 className="text-[clamp(1.75rem,4.5vw,3.5rem)] font-bold tracking-tighter text-black leading-[1.1] max-w-5xl flex flex-wrap items-center justify-center gap-x-[clamp(0.375rem,1.5vw,0.75rem)] gap-y-2">
        <span>The ultimate</span>
        <InlineIcon icon={Zap} variant="filled" />
        <span>downloader</span>
        <div className="w-full h-0"></div>
        <span>to grab high-quality</span>
        <InlineIcon icon={Video} variant="transparent" />
        <span>media</span>
        <div className="w-full h-0 hidden md:block"></div>
        <span>from your favorite</span>
        <InlineIcon icon={DownloadCloud} variant="transparent" />
        <span>social apps</span>
      </h1>

      {/* Action button */}
      <div className="pt-8 flex flex-col items-center gap-12">
        <button 
          onClick={handleInstallClick}
          className="cursor-pointer inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-[24px] font-semibold text-xl hover:bg-black/90 transition-colors"
        >
          <Download className="w-6 h-6" />
          Install App
        </button>
      </div>
    </div>
  );
}
