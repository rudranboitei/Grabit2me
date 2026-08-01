'use client';


export function DownloaderHero() {
  const handleInstallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('show-pwa-install'));
  };

  return (
    <div className="flex flex-col items-center justify-center text-center mb-24 mt-16 relative z-10">
      
      {/* Small top title */}
      <div className="text-[14px] md:text-[16px] font-[500] tracking-tight text-[#1b1c1c] flex items-center justify-center gap-2 mb-6 opacity-80">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        <span>Fast & Free Downloader</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      </div>

      {/* Main massive headline as requested */}
      <h1 className="text-[46px] sm:text-[64px] md:text-[84px] font-[730] tracking-[-0.04em] text-[#1b1c1c] leading-[1.05] max-w-[900px] text-center mx-auto mb-6">
        Need to save reels? <br/> I've got you covered
      </h1>
      
      <p className="text-[18px] md:text-[22px] text-[#1b1c1c]/90 font-normal max-w-2xl mx-auto leading-relaxed">
        Downloading and saving media for creators and founders
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
