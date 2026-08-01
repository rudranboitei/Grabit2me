'use client';

import * as React from 'react';
import { toast } from 'sonner';
import { Download, Loader2, Play, Volume2, VolumeX, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MediaResponse {
  type: 'video' | 'image';
  mediaUrl: string;
  title?: string;
  description?: string;
  thumbnail?: string;
  externalDownload?: boolean;
  availableFormats?: {
    video: Array<{
      quality: string;
      extension: string;
      url: string;
      qualityNum: number;
      hasAudio?: boolean;
      isExternal?: boolean;
    }>;
    audio: Array<{
      quality: string;
      extension: string;
      url: string;
    }>;
  };
  previewQuality?: string;
}

interface MediaPreviewProps {
  media: MediaResponse;
  downloading: boolean;
  downloadingFormat: string | null;
  downloadStatus: 'idle' | 'fetching' | 'starting';
  handleDownload: (customUrl?: string, isExternal?: boolean, formatId?: string) => Promise<void>;
}

export function MediaPreview({
  media,
  downloading,
  downloadingFormat,
  downloadStatus,
  handleDownload,
}: MediaPreviewProps) {
  return (
    <div id="media-preview" className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-[#fbfeff] rounded-[40px] shadow-[inset_0px_-4px_4px_0px_rgb(210,203,198)] border-2 border-[rgba(199,196,194,0.2)] overflow-hidden">
        {/* Aspect Ratio Controlled Media Preview Container */}
        <div className="relative w-full bg-black flex items-center justify-center max-h-[60vh] overflow-hidden border-b border-gray-200">
          {media.type === 'video' ? (
            <video
              controls
              controlsList="nodownload"
              className="w-full h-auto max-h-[60vh] object-contain"
              src={media.mediaUrl}
              onError={() => toast.error('Failed to load video preview. You can still try downloading it.')}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={media.mediaUrl}
              alt={media.title || 'Media Preview'}
              className="w-full h-auto max-h-[60vh] object-contain"
              onError={() => toast.error('Failed to load image preview. You can still try downloading it.')}
            />
          )}
        </div>

        {/* Media Details */}
        {media.title && (
          <div className="border-b border-gray-200/50 py-5 px-5 sm:px-8">
            <h3 className="text-base font-bold leading-snug line-clamp-2 text-black">
              {media.title}
            </h3>
            {media.description && (
              <p className="text-sm font-medium text-black/60 line-clamp-2 mt-1.5">
                {media.description}
              </p>
            )}
          </div>
        )}

        {/* Download Buttons Section */}
        <div className="p-5 sm:p-8 space-y-5">
          {media.availableFormats && media.availableFormats.video.length > 0 ? (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-base font-bold text-black">
                <Download className="h-5 w-5 text-black" />
                <span>{media.externalDownload ? 'Download Options' : 'Select Video Quality'}</span>
              </div>

              {media.externalDownload && (
                <p className="text-sm font-medium text-gray-600 bg-gray-100 p-4 rounded-2xl">
                  💡 Click a download button below to load the video details on the hosting service, where you can save it.
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {media.availableFormats.video.map((format, index) => {
                  const formatId = `video-${index}-${format.quality}`;
                  const isThisDownloading = downloadingFormat === formatId;

                  return (
                    <button
                      key={index}
                      onClick={() => handleDownload(format.url, format.isExternal, formatId)}
                      disabled={downloading}
                      className="bg-[#fbfeff] rounded-[40px] shadow-[inset_0px_-4px_4px_0px_rgb(210,203,198)] border-2 border-[rgba(199,196,194,0.2)] h-12 text-sm flex items-center justify-between font-bold w-full text-black hover:scale-[1.02] transition-transform px-4 disabled:opacity-50"
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        {isThisDownloading ? (
                          <Loader2 className="h-4 w-4 animate-spin shrink-0 text-black" />
                        ) : (
                          <Download className="h-4 w-4 shrink-0 text-gray-400" />
                        )}
                        <span className="truncate">
                          {isThisDownloading
                            ? (downloadStatus === 'starting' ? 'Starting...' : 'Downloading...')
                            : format.quality}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 ml-2">
                        {format.isExternal && (
                          <ExternalLink className="h-3.5 w-3.5 text-gray-400" />
                        )}
                        {!format.isExternal && format.hasAudio && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold bg-gray-100 text-black">
                            <Volume2 className="h-3 w-3 mr-1" /> HD
                          </span>
                        )}
                        {!format.isExternal && !format.hasAudio && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold bg-red-50 text-red-600">
                            <VolumeX className="h-3 w-3 mr-1" /> Muted
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Audio formats */}
              {media.availableFormats.audio && media.availableFormats.audio.length > 0 && (
                <div className="space-y-4 pt-5 border-t border-gray-200">
                  <div className="text-sm font-bold text-black uppercase tracking-wider">
                    Audio Tracks Only
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {media.availableFormats.audio.map((format, index) => {
                      const formatId = `audio-${index}-${format.quality}`;
                      const isThisDownloading = downloadingFormat === formatId;

                      return (
                        <button
                          key={index}
                          onClick={() => handleDownload(format.url, false, formatId)}
                          disabled={downloading}
                          className="bg-[#fbfeff] rounded-[40px] shadow-[inset_0px_-4px_4px_0px_rgb(210,203,198)] border-2 border-[rgba(199,196,194,0.2)] h-12 text-sm flex items-center justify-between font-bold w-full text-black hover:scale-[1.02] transition-transform px-4 disabled:opacity-50"
                        >
                          <div className="flex items-center gap-2.5 truncate">
                            {isThisDownloading ? (
                              <Loader2 className="h-4 w-4 animate-spin shrink-0 text-black" />
                            ) : (
                              <Download className="h-4 w-4 shrink-0 text-gray-400" />
                            )}
                            <span className="truncate">
                              {isThisDownloading
                                ? (downloadStatus === 'starting' ? 'Starting...' : 'Downloading...')
                                : `Audio - ${format.quality}`}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Single Direct Download Button if formats not available */
            <button
              onClick={() => handleDownload()}
              disabled={downloading}
              className="bg-[#ffc73b] shadow-[inset_0px_-4px_4px_0px_rgb(208,163,52)] border-2 border-[rgba(19,20,21,0.06)] w-full h-14 text-base font-semibold text-black flex items-center justify-center gap-2.5 rounded-[40px] hover:scale-[1.02] transition-transform disabled:opacity-50"
            >
              {downloading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>{downloadStatus === 'starting' ? 'Starting...' : 'Downloading...'}</span>
                </>
              ) : (
                <>
                  <Download className="h-5 w-5" />
                  <span>Download {media.type === 'video' ? 'Video' : 'Image'}</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
