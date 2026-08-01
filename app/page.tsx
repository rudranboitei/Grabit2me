'use client';

import * as React from 'react';
import InstallPWA from '@/components/InstallPWA';
import { DownloaderHero } from '@/components/downloader/downloader-hero';
import { DownloaderForm } from '@/components/downloader/downloader-form';
import { MediaPreview } from '@/components/downloader/media-preview';
import { FeaturesSection } from '@/components/downloader/features-section';
import { useMediaDownloader } from '@/hooks/useMediaDownloader';

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
    <div className="min-h-screen relative overflow-hidden bg-[#79bbed]">
      <InstallPWA />

      {/* Sky Blue Background */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-[#79bbed] to-[#9ed1f0]" />

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
      </main>
    </div>
  );
}
