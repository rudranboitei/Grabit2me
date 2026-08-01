import { Zap, ShieldCheck, DownloadCloud, Smartphone, Paperclip } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Downloads',
    description: 'No waiting around. Paste a link and grab your media instantly in the highest quality available.',
  },
  {
    icon: ShieldCheck,
    title: 'No Sign-up Needed',
    description: 'Completely free and anonymous. We never store your data or ask you to create an account.',
  },
  {
    icon: DownloadCloud,
    title: 'All Platforms',
    description: 'Seamlessly fetch videos, reels, and photos from Instagram and X with a single click.',
  },
  {
    icon: Smartphone,
    title: 'Any Device',
    description: 'Our tool works flawlessly whether you\'re on a phone, tablet, or good old desktop.',
    hasClip: true
  },
];

export function FeaturesSection() {
  return (
    <section className="w-full max-w-5xl mx-auto pt-12 pb-32 space-y-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-[32px] md:text-[40px] font-[730] tracking-[-0.4px] text-[#1b1c1c] leading-[110%] mb-4">
          Why GrabIt2Me
        </h2>
        <p className="text-[18px] md:text-[22px] font-[730] tracking-[-0.4px] text-[#1b1c1c] max-w-xl mx-auto leading-relaxed">
          I could bore you with a long list of perks, but here it is in a nutshell:
        </p>
      </div>

      {/* 2x2 Grid Layout matching the screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto place-items-stretch">
        {features.map((feat, idx) => (
          <div
            key={idx}
            className="bg-[#fbfeff] rounded-[32px] md:rounded-[40px] shadow-[inset_0px_-4px_4px_0px_rgb(210,203,198)] border-2 border-[rgba(199,196,194,0.2)] p-6 md:p-8 flex flex-col items-start justify-start gap-4 w-full h-full relative overflow-visible"
          >
            <div className="w-full flex items-center justify-start gap-3">
              <feat.icon className="w-7 h-7 text-black shrink-0" strokeWidth={2.5} />
              <h3 className="text-xl md:text-[26px] font-bold text-black leading-tight tracking-tight">{feat.title}</h3>
            </div>

            <div className="border-b-[3px] border-dotted border-[rgba(199,196,194,0.5)] w-full"></div>

            <p className="text-[15px] md:text-[17px] text-black/80 font-medium leading-relaxed text-left w-full h-full">
              {feat.description}
            </p>

            {feat.hasClip && (
              <div className="absolute -top-5 right-2 md:-top-8 md:-right-4 rotate-12 z-10 pointer-events-none drop-shadow-md">
                <Paperclip className="w-10 h-10 md:w-16 md:h-16 text-black" strokeWidth={1.5} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
