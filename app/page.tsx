'use client';

import * as React from 'react';
import InstallPWA from '@/components/InstallPWA';
import { DownloaderHero } from '@/components/downloader/downloader-hero';
import { DownloaderForm } from '@/components/downloader/downloader-form';
import { MediaPreview } from '@/components/downloader/media-preview';
import { FeaturesSection } from '@/components/downloader/features-section';
import { FaqSection } from '@/components/section/faq-section';
import { BehindTheScenesSection } from '@/components/section/behind-the-scenes';
import { useMediaDownloader } from '@/hooks/useMediaDownloader';
import Image from 'next/image';

export default function Home() {
  const {
    url,
    loading,
    downloading,
    downloadingFormat,
    downloadStatus,
    media,
    handleUrlChange,
    handleFetchMedia,
    handleDownload,
    handleReset,
  } = useMediaDownloader();

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/* Decorative Clouds Background */}
      <div className="absolute top-[35%] -left-[10%] w-[400px] md:w-[600px] opacity-80 blur-[8px] md:blur-[12px] pointer-events-none z-0 select-none">
        <Image src="/cloude.avif" alt="Cloud" width={600} height={400} className="w-full h-auto object-contain" />
      </div>
      <div className="absolute top-[10%] right-[10%] w-[200px] md:w-[300px] opacity-70 blur-[6px] md:blur-[8px] pointer-events-none z-0 select-none hidden sm:block">
        <Image src="/cloude.avif" alt="Cloud" width={300} height={200} className="w-full h-auto object-contain" />
      </div>
      <div className="absolute top-[50%] -right-[15%] w-[500px] md:w-[800px] opacity-90 blur-[12px] md:blur-[16px] pointer-events-none z-0 select-none">
        <Image src="/cloude.avif" alt="Cloud" width={800} height={500} className="w-full h-auto object-contain" />
      </div>

      <InstallPWA />

      <main className="relative z-10 container max-w-5xl mx-auto px-4 font-sans">
        {/* Hero + Tool Section */}
        <section className="py-16 sm:py-24 space-y-8">
          <DownloaderHero />
          
          <DownloaderForm
            url={url}
            setUrl={handleUrlChange}
            loading={loading}
            onSubmit={handleFetchMedia}
            onReset={handleReset}
            hasMedia={!!media}
          />

          {media && (
            <MediaPreview
              media={media}
              downloading={downloading}
              downloadingFormat={downloadingFormat}
              downloadStatus={downloadStatus}
              handleDownload={handleDownload}
            />
          )}
        </section>

        {/* Features Section */}
        {!media && <FeaturesSection />}
        
        {/* FAQ Section */}
        {!media && <FaqSection />}

        {/* Behind The Scenes Section */}
        {!media && <BehindTheScenesSection />}
      </main>
    </div>
  );
}
