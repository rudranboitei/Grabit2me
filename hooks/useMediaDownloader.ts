import { useState, useRef, useEffect, useCallback } from 'react';
import { toast } from 'sonner';

export interface MediaResponse {
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

type Platform = 'instagram' | 'twitter' | 'unsupported';

export function useMediaDownloader() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadingFormat, setDownloadingFormat] = useState<string | null>(null);
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'fetching' | 'starting'>('idle');
  const [media, setMedia] = useState<MediaResponse | null>(null);
  const previousUrlRef = useRef('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize from Web Share Target API (when shared from other apps)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const sharedUrl = params.get('url') || params.get('text');
      if (sharedUrl) {
        // Extract URL if the shared text includes additional strings (e.g., "Check this out https://...")
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const matches = sharedUrl.match(urlRegex);
        if (matches && matches.length > 0) {
          setUrl(matches[0]);
        } else {
          setUrl(sharedUrl);
        }
        
        // Remove the query parameters from the URL so it's clean
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }
  }, []);

  const detectPlatform = (urlStr: string): Platform => {
    const urlLower = urlStr.toLowerCase().trim();

    if (urlLower.includes('instagram.com') || urlLower.includes('instagr.am')) {
      return 'instagram';
    } else if (urlLower.includes('twitter.com') || urlLower.includes('x.com')) {
      return 'twitter';
    }

    return 'unsupported';
  };

  const handleFetchMedia = useCallback(async (manualUrl?: string) => {
    const targetUrl = (manualUrl ?? url).trim();
    if (!targetUrl) {
      toast.error('Please enter a URL');
      return;
    }

    const platform = detectPlatform(targetUrl);

    if (platform === 'unsupported') {
      toast.error('Platform not supported. Currently we support Instagram and X (Twitter) only.');
      return;
    }

    setLoading(true);
    setMedia(null);

    try {
      const apiEndpoint = platform === 'instagram' ? '/api/instagram' : '/api/twitter';

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: targetUrl }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch media. Make sure the link is public.');
      }

      setMedia(data);
      toast.success('Media found!');
    } catch (err: unknown) {
      toast.error(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [url]);

  // Debounced Auto-fetch when URL is pasted or changed
  useEffect(() => {
    const trimmedUrl = url.trim();

    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Only proceed if URL has changed, is not empty, and not loading
    if (trimmedUrl && trimmedUrl !== previousUrlRef.current && !loading && !media) {
      const platform = detectPlatform(trimmedUrl);

      // Only auto-fetch if it's a supported platform
      if (platform !== 'unsupported') {
        previousUrlRef.current = trimmedUrl;
        
        // Debounce the fetch by 600ms
        timeoutRef.current = setTimeout(() => {
          handleFetchMedia(trimmedUrl);
        }, 600);
      }
    }
  }, [url, handleFetchMedia, loading, media]);

  const handleUrlChange = (newUrl: string) => {
    setUrl(newUrl);
    // Reset media preview when URL changes significantly
    if (media && newUrl.trim() !== previousUrlRef.current) {
      setMedia(null);
    }
  };

  const handleDownload = async (customUrl?: string, isExternal?: boolean, formatId?: string) => {
    if (!media) return;

    const downloadId = formatId || customUrl || 'default';
    setDownloading(true);
    setDownloadingFormat(downloadId);
    setDownloadStatus('fetching');

    try {
      const urlToDownload = customUrl || media.mediaUrl;

      // Handle external download links
      if (isExternal || (customUrl && customUrl.includes('y2mate.com'))) {
        window.open(urlToDownload, '_blank');
        setDownloading(false);
        setDownloadingFormat(null);
        setDownloadStatus('idle');
        return;
      }

      // Direct download trigger via endpoint
      const downloadUrl = `/api/download?url=${encodeURIComponent(urlToDownload)}&type=${media.type}`;

      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `grabit-${media.type}-${Date.now()}.${media.type === 'video' ? 'mp4' : 'jpg'}`;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadStatus('starting');
      toast.success('Download started!');
      setTimeout(() => {
        setDownloading(false);
        setDownloadingFormat(null);
        setDownloadStatus('idle');
      }, 1000);
    } catch (err: unknown) {
      console.error('Download failed:', err);
      setDownloading(false);
      setDownloadingFormat(null);
      setDownloadStatus('idle');
      toast.error(err.message || 'Download failed. Please try again.');
    }
  };

  const handleReset = () => {
    setUrl('');
    setMedia(null);
    previousUrlRef.current = '';
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return {
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
  };
}
