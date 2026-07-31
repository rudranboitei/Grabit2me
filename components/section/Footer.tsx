'use client';

import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Download } from 'lucide-react';

export const Footer = () => {
  const handleInstallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('show-pwa-install'));
  };

  return (
    <footer className="relative z-10 w-full max-w-4xl mx-auto px-4 py-24 pb-32 flex flex-col items-center text-center space-y-12 bg-white">
      <div className="flex justify-center w-full max-w-[200px] opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
        <Logo className="scale-150" />
      </div>

      <div className="flex justify-center w-full">
        <button 
          onClick={handleInstallClick}
          className="cursor-pointer flex items-center gap-2 bg-black text-white px-6 py-3 rounded-[24px] hover:bg-black/90 transition-colors"
        >
          <Download className="w-4 h-4" />
          <span className="text-[15px] font-semibold">Install App</span>
        </button>
      </div>
      
      <div className="flex flex-col space-y-4 pt-4">
        <Link href="/terms" className="text-[20px] font-semibold text-gray-400 hover:text-black transition-colors leading-[1.1em]">
          Terms of Service
        </Link>
        <Link href="/privacy" className="text-[20px] font-semibold text-gray-400 hover:text-black transition-colors leading-[1.1em]">
          Privacy Policy
        </Link>
        <Link href="/dmca" className="text-[20px] font-semibold text-gray-400 hover:text-black transition-colors leading-[1.1em]">
          DMCA
        </Link>
        <Link href="/faq" className="text-[20px] font-semibold text-gray-400 hover:text-black transition-colors leading-[1.1em]">
          FAQ
        </Link>
        <Link href="/disclaimer" className="text-[20px] font-semibold text-gray-400 hover:text-black transition-colors leading-[1.1em]">
          Disclaimer
        </Link>
      </div>
      
      <div className="pt-12 flex flex-col items-center space-y-2 opacity-60">
        <p className="font-semibold text-base text-gray-400">Crafted with care</p>
        <p className="font-semibold text-base text-gray-400">© {new Date().getFullYear()} GrabIt2Me</p>
      </div>
    </footer>
  );
};
