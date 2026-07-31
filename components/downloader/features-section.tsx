import { Zap, ShieldCheck, ImageIcon, Film, Smartphone, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Download',
    description: 'Paste a link and get your media in seconds. No waiting, no queue.',
  },
  {
    icon: ShieldCheck,
    title: 'No Sign-up Required',
    description: 'Completely free and anonymous. We never store your data or links.',
  },
  {
    icon: Film,
    title: 'High-Quality Video',
    description: 'Choose from multiple resolutions up to the original upload quality.',
  },
  {
    icon: ImageIcon,
    title: 'Photos & Carousels',
    description: 'Download single photos or full Instagram carousel posts with ease.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Works seamlessly on all devices. Installable as a PWA for quick access.',
  },
  {
    icon: Globe,
    title: 'Any Public Post',
    description: 'Works on any publicly accessible post from Instagram or X (Twitter).',
  },
];

export function FeaturesSection() {
  return (
    <section className="w-full max-w-4xl mx-auto pt-24 pb-32 space-y-24 px-4">
      <div className="flex flex-col items-center justify-center space-y-24">
        <p className="text-[28px] md:text-[36px] font-semibold tracking-[-0.01em] leading-[1.1] text-center text-black">
          GrabIt2Me is an all-in-one downloader that brings together your favorite social media platforms into a single tool.
        </p>

        <p className="text-[28px] md:text-[36px] font-semibold tracking-[-0.01em] leading-[1.1] text-center text-black">
          Seamlessly integrated with Instagram and X, GrabIt2Me fetches videos, reels, and photos effortlessly in seconds.
        </p>

        <p className="text-[28px] md:text-[36px] font-semibold tracking-[-0.01em] leading-[1.1] text-center text-black">
          Designed with simplicity in mind, the tool aims to create an easy to use experience, allowing you to focus on saving the content that truly matters.
        </p>
      </div>
    </section>
  );
}
