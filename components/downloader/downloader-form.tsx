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
      <div className="bg-[#fbfeff] rounded-[40px] shadow-[inset_0px_-4px_4px_0px_rgb(210,203,198)] border-2 border-[rgba(199,196,194,0.2)] p-4 relative overflow-hidden">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            if (!loading && url.trim()) {
              onSubmit();
            }
          }}
          className="relative flex flex-col md:flex-row items-stretch w-full gap-3"
        >
          <div className="relative flex-1 flex items-center bg-gray-50/50 rounded-[40px] p-2 border-2 border-dotted border-[rgba(199,196,194,0.5)]">
            <Link2 className="absolute left-4 h-5 w-5 text-black/50" />
            <input
              type="url"
              placeholder="Paste Instagram or X link..."
              value={url}
              onChange={handleUrlChange}
              className="pl-10 pr-10 h-12 w-full bg-transparent text-black placeholder-black/40 focus:outline-none text-base md:text-lg font-normal"
              disabled={loading}
            />
            {(url || hasMedia) && (
              <button
                type="button"
                onClick={onReset}
                className="absolute right-3 h-8 w-8 flex items-center justify-center rounded-full text-black/40 hover:text-black hover:bg-black/5 transition-colors"
                title="Clear"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || !url.trim()}
            className="h-16 md:h-auto px-8 bg-[#ffc73b] hover:scale-105 shadow-[inset_0px_-4px_4px_0px_rgb(208,163,52)] border-2 border-[rgba(19,20,21,0.06)] disabled:bg-gray-300 disabled:shadow-none disabled:border-transparent text-black font-semibold text-lg rounded-[40px] flex items-center justify-center shrink-0 transition-transform active:scale-95"
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                <span>Fetch</span>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Loading state indicator */}
      {loading && !hasMedia && (
        <div className="bg-[#fbfeff] rounded-[40px] shadow-[inset_0px_-4px_4px_0px_rgb(210,203,198)] border-2 border-[rgba(199,196,194,0.2)] p-8 flex flex-col items-center justify-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-black" />
          <div className="text-center">
            <p className="text-lg font-normal text-black">Retrieving media...</p>
          </div>
        </div>
      )}

    </div>
  );
}
