import { Download, Zap, Video, LucideIcon } from 'lucide-react';

interface InlineIconProps {
  icon: LucideIcon;
  variant?: 'solid' | 'transparent' | 'filled';
}

function InlineIcon({ icon: Icon, variant = 'transparent' }: InlineIconProps) {
  if (variant === 'solid') {
    return (
      <span className="inline-flex items-center justify-center bg-black text-white p-[clamp(0.25rem,1vw,0.5rem)] rounded-[clamp(0.75rem,2vw,1.25rem)] shrink-0">
        <Icon className="w-[clamp(1.5rem,4vw,2.75rem)] h-[clamp(1.5rem,4vw,2.75rem)]" strokeWidth={3} />
      </span>
    );
  }

  return (
    <span className="inline-flex items-center justify-center text-black shrink-0">
      <Icon 
        className="w-[clamp(2rem,5vw,3.5rem)] h-[clamp(2rem,5vw,3.5rem)]" 
        strokeWidth={variant === 'transparent' ? 3 : 0} 
        fill={variant === 'filled' ? 'currentColor' : 'none'} 
      />
    </span>
  );
}

export function DownloaderHero() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 mb-12 mt-4">
      {/* Small top title */}
      <div className="text-[clamp(1rem,1.5vw,1.125rem)] font-[599] tracking-tight text-black">
        GrabIt2Me
      </div>

      {/* Main massive headline */}
      <h1 className="text-[clamp(1.75rem,5vw,4.5rem)] font-[599] tracking-tighter text-black leading-[1.05] max-w-5xl flex flex-wrap items-center justify-center gap-x-[clamp(0.375rem,1.5vw,0.75rem)] gap-y-2">
        <span>The ultimate</span>
        <InlineIcon icon={Download} variant="solid" />
        <span>downloader</span>
        <span>to keep</span>
        <InlineIcon icon={Zap} variant="filled" />
        <span>distracted</span>
        <InlineIcon icon={Video} variant="transparent" />
        <span>minds on track</span>
      </h1>

      {/* Action button */}
      <div className="pt-8">
        <a 
          href="#download-form" 
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-[599] text-xl hover:bg-gray-800 transition-colors shadow-2xl"
        >
          <Download className="w-6 h-6" />
          Download for iOS
        </a>
      </div>
    </div>
  );
}
