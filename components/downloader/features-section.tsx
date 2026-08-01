import { Zap, ShieldCheck, ImageIcon, Film, Smartphone, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Unique design',
    description: 'Cookie-cutter websites? Not on my watch. Your business deserves better than a template.',
  },
  {
    icon: ShieldCheck,
    title: 'Bang for your buck',
    description: 'Quality design that doesn\'t break the bank, because looking like a million bucks shouldn\'t mean spending it.',
  },
  {
    icon: Film,
    title: 'Converting clicks',
    description: 'Strategic layouts and engaging design to help with conversions. A great website should do more than just sit there looking pretty.',
  },
  {
    icon: Smartphone,
    title: 'Responsive',
    description: 'I make websites that always look stunning and work flawlessly, whether you\'re on a phone, tablet, or good old desktop.',
  },
];

export function FeaturesSection() {
  return (
    <section className="w-full max-w-6xl mx-auto pt-16 pb-32 space-y-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-[44px] md:text-[56px] font-normal tracking-tight text-black leading-tight mb-4">
          Why GrabIt2Me
        </h2>
        <p className="text-xl text-black font-normal">
          I could bore you with a long list of perks, but here are the key takeaways:
        </p>
      </div>

      {/* Grid to center cards and wrap them similarly to the reference */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
        {features.map((feat, idx) => (
          <div 
            key={idx} 
            className="bg-[#fbfeff] rounded-[40px] shadow-[inset_0px_-4px_4px_0px_rgb(210,203,198)] border-2 border-[rgba(199,196,194,0.2)] p-[24px] flex flex-col items-center justify-start gap-[10px] w-full max-w-[300px] min-h-[250px] relative overflow-visible"
          >
            <div className="w-full flex items-center justify-start gap-3">
              <feat.icon className="w-8 h-8 text-black" fill="black" />
              <h3 className="text-[20px] font-semibold text-black leading-tight">{feat.title}</h3>
            </div>
            
            <div className="border-b-[3px] border-dotted border-[rgba(199,196,194,0.5)] w-full my-2"></div>
            
            <p className="text-[16px] text-black/80 font-normal leading-relaxed text-left w-full">
              {feat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
