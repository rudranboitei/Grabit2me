'use client';

import * as React from 'react';
import { Loader2, Link2, X, Zap } from 'lucide-react';

interface DownloaderFormProps {
  url: string;
  setUrl: (url: string) => void;
  loading: boolean;
  onSubmit: () => void;
  onReset: () => void;
  hasMedia: boolean;
}

export function DownloaderForm({
  url,
  setUrl,
  loading,
  onSubmit,
  onReset,
  hasMedia,
}: DownloaderFormProps) {
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <div id="download-form" className="w-full max-w-2xl mx-auto space-y-4">
      {/* Search / Input Button Group inside a subtle shadow wrapper */}
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          if (!loading && url.trim()) {
            onSubmit();
          }
        }}
        className="relative flex items-stretch w-full rounded-full shadow-2xl border border-gray-200 bg-white overflow-hidden p-1.5 focus-within:ring-4 focus-within:ring-black/10 focus-within:border-black transition-all duration-200"
      >
        <div className="relative flex-1 flex items-center">
          <Link2 className="absolute left-5 h-5 w-5 text-gray-500" />
          <input
            type="url"
            placeholder="Paste Instagram or X/Twitter link here..."
            value={url}
            onChange={handleUrlChange}
            className="pl-12 pr-12 h-14 w-full bg-white text-black placeholder-gray-400 focus:outline-none text-base md:text-lg font-medium"
            disabled={loading}
          />
          {(url || hasMedia) && (
            <button
              type="button"
              onClick={onReset}
              className="absolute right-3 h-8 w-8 flex items-center justify-center rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
              title="Clear"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        <button
          type="submit"
          disabled={loading || !url.trim()}
          className="h-14 px-8 bg-black hover:bg-gray-800 disabled:bg-gray-300 text-white font-bold text-sm uppercase tracking-wide rounded-full flex items-center justify-center shrink-0 transition-all shadow-md active:scale-95"
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              <Zap className="h-4 w-4 mr-2 fill-current" />
              <span>Fetch</span>
            </>
          )}
        </button>
      </form>

      {/* Loading state indicator */}
      {loading && !hasMedia && (
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 flex flex-col items-center justify-center space-y-4 shadow-sm">
          <Loader2 className="h-8 w-8 animate-spin text-black" />
          <div className="text-center">
            <p className="text-base font-bold text-black">Retrieving media files...</p>
            <p className="text-sm text-gray-500 mt-2 font-medium">This can take up to a minute for high resolution files.</p>
          </div>
        </div>
      )}

    </div>
  );
}
