'use client';

import Link from 'next/link';

export const Footer = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText('hello@zenwood.studio');
  };

  return (
    <footer className="w-full max-w-5xl mx-auto px-4 pb-12 relative overflow-visible mt-24">
      
      <div className="bg-[#fbfeff] rounded-[64px] border-2 border-dashed border-gray-300 px-4 py-24 flex flex-col items-center text-center space-y-[48px] relative overflow-hidden">
        
        {/* Title */}
        <h2 className="text-[40px] md:text-[68px] font-normal leading-tight text-black text-center max-w-3xl relative z-10">
          Got a killer idea?<br />Let's bring it to life!
        </h2>

        {/* Button Stack */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg relative z-20">
          <a 
            href="https://cal.com/zenwood/intro" 
            target="_blank" 
            rel="noopener"
            className="relative overflow-hidden w-full sm:w-auto flex items-center justify-center bg-[#ffc73b] rounded-[40px] shadow-[inset_0px_-4px_4px_0px_rgb(208,163,52)] border-2 border-[rgba(19,20,21,0.06)] px-8 py-4 hover:scale-105 transition-transform"
          >
            <span className="text-black font-semibold text-[18px]">Book a call</span>
            {/* Shine effect */}
            <div className="absolute inset-0 w-[200%] h-full bg-[#fbfeff] opacity-20 -rotate-45 translate-x-[-150%] hover:translate-x-[150%] transition-transform duration-[1500ms]" />
          </a>

          <button 
            aria-label="Copy email button"
            onClick={copyEmail}
            className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-[#fbfeff] rounded-[40px] shadow-[inset_0px_-4px_4px_0px_rgb(210,203,198)] border-2 border-[rgba(199,196,194,0.2)] px-8 py-4 hover:scale-105 transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" className="w-5 h-5 group-active:hidden fill-black">
              <path d="M 15.99 0.437 L 5.253 0.437 C 4.882 0.437 4.582 0.737 4.582 1.108 L 4.582 4.463 L 1.227 4.463 C 0.856 4.463 0.556 4.763 0.556 5.134 L 0.556 15.871 C 0.556 16.241 0.856 16.542 1.227 16.542 L 11.964 16.542 C 12.334 16.542 12.635 16.241 12.635 15.871 L 12.635 12.516 L 15.99 12.516 C 16.36 12.516 16.661 12.215 16.661 11.845 L 16.661 1.108 C 16.661 0.737 16.36 0.437 15.99 0.437 Z M 15.319 11.173 L 12.635 11.173 L 12.635 5.134 C 12.635 4.763 12.334 4.463 11.964 4.463 L 5.924 4.463 L 5.924 1.779 L 15.319 1.779 Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 18" className="w-5 h-5 hidden group-active:block fill-black">
              <path d="M 8.514 0.523 C 3.937 0.523 0.226 4.264 0.226 8.88 C 0.226 13.496 3.937 17.237 8.514 17.237 C 13.091 17.237 16.801 13.496 16.801 8.88 C 16.796 4.266 13.089 0.528 8.514 0.523 Z M 12.152 7.407 L 7.689 11.907 C 7.44 12.157 7.036 12.157 6.787 11.907 L 4.875 9.978 C 4.626 9.727 4.626 9.32 4.875 9.069 C 5.124 8.817 5.528 8.817 5.777 9.069 L 7.239 10.543 L 11.25 6.497 C 11.499 6.246 11.903 6.246 12.152 6.497 C 12.401 6.748 12.401 7.155 12.152 7.407 Z" />
            </svg>
            <span className="text-black font-semibold text-[18px] group-active:hidden">Send an email</span>
            <span className="text-black font-semibold text-[18px] hidden group-active:inline">Email copied</span>
          </button>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col items-center justify-center text-[17px] text-[#262626] font-medium relative z-20 gap-2 mt-8">
          <a href="https://x.com/ui_zsolt" target="_blank" rel="noopener" className="underline hover:text-black">
            Follow me on X
          </a>
          <span>© Zenwood Studio 2026</span>
        </div>

        {/* Tree stickers */}
        <div className="absolute left-[10%] bottom-[20%] opacity-100 -rotate-[12deg] pointer-events-none z-0">
          <img 
            src="https://framerusercontent.com/images/3F7ldnftLP0RuSKEOksr3928ms.webp?width=443&height=446" 
            alt="Tree Sticker" 
            className="w-[110px] h-[110px] md:w-[140px] md:h-[140px] object-cover" 
          />
        </div>
        
        <div className="absolute right-[22%] bottom-[12%] opacity-100 rotate-[5deg] pointer-events-none z-0">
          <img 
            src="https://framerusercontent.com/images/3F7ldnftLP0RuSKEOksr3928ms.webp?width=443&height=446" 
            alt="Tree Sticker" 
            className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] object-cover" 
          />
        </div>

        <div className="absolute right-[5%] bottom-[30%] opacity-100 rotate-[15deg] pointer-events-none z-0 hidden md:block">
          <img 
            src="https://framerusercontent.com/images/3F7ldnftLP0RuSKEOksr3928ms.webp?width=443&height=446" 
            alt="Tree Sticker" 
            className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] object-cover" 
          />
        </div>
      </div>
    </footer>
  );
};
