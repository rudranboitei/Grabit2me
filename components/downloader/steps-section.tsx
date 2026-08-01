import { ClipboardCopy, ArrowRightLeft, Download } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardCopy,
    title: 'Copy Link',
    description: 'Find the Instagram Reels, Photo, Video, or X (Twitter) post you want to save, and copy its link/URL.',
  },
  {
    number: '02',
    icon: ArrowRightLeft,
    title: 'Paste & Fetch',
    description: 'Paste the link into the download input above. GrabIt automatically detects the platform and fetches the media.',
  },
  {
    number: '03',
    icon: Download,
    title: 'Download Media',
    description: 'Preview the video or image directly in your browser. Choose your preferred quality, click Download, and save it.',
  },
];

export function StepsSection() {
  return (
    <section className="w-full max-w-5xl mx-auto py-16 border-t border-cloud-gray">
      {/* Section header */}
      <div className="text-center mb-12 space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-steel-gray font-inter">
          Workflow
        </p>
        <h2 className="text-3xl font-heading font-bold tracking-tight text-ink-black">
          Simple three-step process.
        </h2>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.title}
            className="relative flex flex-col p-6 sm:p-8 rounded-xl border border-cloud-gray bg-white/50 backdrop-blur-sm hover:border-cool-gray hover:bg-white/80 transition-all duration-300 group"
          >
            {/* Background Number */}
            <div className="absolute top-6 right-8 text-4xl font-extrabold text-ash-gray/40 select-none group-hover:text-ash-gray/80 transition-colors duration-300">
              {step.number}
            </div>

            <div className="w-10 h-10 rounded-full flex items-center justify-center border border-cloud-gray bg-ash-gray/60 text-jet-black group-hover:border-primary/20 group-hover:text-primary transition-colors duration-300 mb-6">
              <step.icon className="w-4.5 h-4.5" />
            </div>

            <h3 className="text-sm font-semibold text-jet-black mb-2 font-inter">
              {step.title}
            </h3>
            <p className="text-xs text-steel-gray leading-relaxed font-inter">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
