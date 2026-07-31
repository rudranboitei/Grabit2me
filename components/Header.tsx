'use client';

import React from 'react';
import { Download } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';

export function Header() {
  const handleInstallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('show-pwa-install'));
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="flex items-center justify-between p-2 pl-6 pr-2 rounded-[2rem] md:rounded-full border border-black/5 bg-white/80 backdrop-blur-xl w-full max-w-5xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] pointer-events-auto">
        
        {/* Left Side: Logo */}
        <Link href="/" className="flex-shrink-0 scale-100 origin-left py-1 md:py-2">
          <Logo showText={false} />
        </Link>

        {/* Right Side: Install Button */}
        <button 
          onClick={handleInstallClick}
          className="cursor-pointer flex items-center justify-center gap-2 bg-black text-white px-5 md:px-6 py-3 md:py-3.5 rounded-full hover:bg-black/90 transition-colors flex-shrink-0"
        >
          <Download className="w-5 h-5" />
          <span className="text-sm md:text-[15px] font-semibold">Install App</span>
        </button>

      </div>
    </header>
  );
}
