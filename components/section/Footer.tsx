'use client';

import Link from 'next/link';

export const Footer = () => {
  const handleInstallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('show-pwa-install'));
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.origin);
  };

  return (
    <footer className="w-full max-w-5xl mx-auto px-4 pb-12 mt-24 relative">
      <div className="bg-[#fbfeff] rounded-[48px] md:rounded-[64px] border-2 border-dashed border-[rgba(199,196,194,0.7)] px-6 md:px-4 py-16 md:py-24 flex flex-col items-center text-center relative mt-16 shadow-sm overflow-visible">
        
        {/* Mobile: Tree sticker on top right corner */}
        <div className="absolute -top-10 -right-6 z-20 block md:hidden">
          <img 
            src="https://framerusercontent.com/images/3F7ldnftLP0RuSKEOksr3928ms.webp?width=443&height=446" 
            alt="Tree Sticker" 
            className="w-[110px] h-[110px] object-contain drop-shadow-sm" 
          />
        </div>

        {/* Desktop: 3 scattered tree stickers inside the box */}
        <div className="absolute left-[10%] bottom-[20%] opacity-100 -rotate-[12deg] pointer-events-none z-0 hidden md:block">
          <img 
            src="https://framerusercontent.com/images/3F7ldnftLP0RuSKEOksr3928ms.webp?width=443&height=446" 
            alt="Tree Sticker" 
            className="w-[140px] h-[140px] object-cover" 
          />
        </div>
        
        <div className="absolute right-[22%] bottom-[12%] opacity-100 rotate-[5deg] pointer-events-none z-0 hidden md:block">
          <img 
            src="https://framerusercontent.com/images/3F7ldnftLP0RuSKEOksr3928ms.webp?width=443&height=446" 
            alt="Tree Sticker" 
            className="w-[120px] h-[120px] object-cover" 
          />
        </div>

        <div className="absolute right-[5%] bottom-[30%] opacity-100 rotate-[15deg] pointer-events-none z-0 hidden md:block">
          <img 
            src="https://framerusercontent.com/images/3F7ldnftLP0RuSKEOksr3928ms.webp?width=443&height=446" 
            alt="Tree Sticker" 
            className="w-[180px] h-[180px] object-cover" 
          />
        </div>

        {/* Title */}
        <h2 className="text-[32px] md:text-[40px] font-[730] tracking-[-0.4px] text-[#1b1c1c] leading-[110%] mb-10 md:mb-[48px] relative z-10 max-w-2xl">
          Love what you see?<br />Start downloading today!
        </h2>

        {/* Button Stack - Responsive (Stacked on mobile, row on desktop) */}
        <div className="flex flex-col md:flex-row w-full max-w-[340px] md:max-w-lg gap-4 relative z-20 justify-center">
          <button 
            onClick={handleInstallClick}
            className="relative overflow-hidden w-full md:w-auto flex items-center justify-center bg-[#ffc73b] rounded-[40px] shadow-[inset_0px_-4px_4px_0px_rgb(208,163,52)] border-2 border-[rgba(19,20,21,0.06)] h-[56px] px-8 hover:scale-[1.02] transition-transform"
          >
            <span className="text-[#1b1c1c] font-[730] text-[17px]">Install App</span>
            {/* Shine effect */}
            <div className="absolute inset-0 w-[200%] h-full bg-[#fbfeff] opacity-20 -rotate-45 translate-x-[-150%] hover:translate-x-[150%] transition-transform duration-[1500ms]" />
          </button>

          <button 
            aria-label="Copy link button"
            onClick={copyUrl}
            className="group w-full md:w-auto flex items-center justify-center gap-2 bg-[#fbfeff] rounded-[40px] shadow-[inset_0px_-4px_4px_0px_rgb(210,203,198)] border-2 border-[rgba(199,196,194,0.2)] h-[56px] px-8 hover:scale-[1.02] transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" className="w-5 h-5 group-active:hidden fill-[#1b1c1c]">
              <path d="M 15.99 0.437 L 5.253 0.437 C 4.882 0.437 4.582 0.737 4.582 1.108 L 4.582 4.463 L 1.227 4.463 C 0.856 4.463 0.556 4.763 0.556 5.134 L 0.556 15.871 C 0.556 16.241 0.856 16.542 1.227 16.542 L 11.964 16.542 C 12.334 16.542 12.635 16.241 12.635 15.871 L 12.635 12.516 L 15.99 12.516 C 16.36 12.516 16.661 12.215 16.661 11.845 L 16.661 1.108 C 16.661 0.737 16.36 0.437 15.99 0.437 Z M 15.319 11.173 L 12.635 11.173 L 12.635 5.134 C 12.635 4.763 12.334 4.463 11.964 4.463 L 5.924 4.463 L 5.924 1.779 L 15.319 1.779 Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 18" className="w-5 h-5 hidden group-active:block fill-[#1b1c1c]">
              <path d="M 8.514 0.523 C 3.937 0.523 0.226 4.264 0.226 8.88 C 0.226 13.496 3.937 17.237 8.514 17.237 C 13.091 17.237 16.801 13.496 16.801 8.88 C 16.796 4.266 13.089 0.528 8.514 0.523 Z M 12.152 7.407 L 7.689 11.907 C 7.44 12.157 7.036 12.157 6.787 11.907 L 4.875 9.978 C 4.626 9.727 4.626 9.32 4.875 9.069 C 5.124 8.817 5.528 8.817 5.777 9.069 L 7.239 10.543 L 11.25 6.497 C 11.499 6.246 11.903 6.246 12.152 6.497 C 12.401 6.748 12.401 7.155 12.152 7.407 Z" />
            </svg>
            <span className="text-[#1b1c1c] font-[730] text-[17px] group-active:hidden">Share site</span>
            <span className="text-[#1b1c1c] font-[730] text-[17px] hidden group-active:inline">Link copied</span>
          </button>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col items-center justify-center text-[15px] md:text-[17px] text-[#1b1c1c] font-[730] relative z-20 gap-1 md:gap-2 mt-12 md:mt-8">
          <a href="https://x.com/GrabIt2Me" target="_blank" rel="noopener" className="underline hover:opacity-70">
            Follow us on X
          </a>
          <span>© GrabIt2Me {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};
