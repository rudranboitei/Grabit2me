import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    // Validate URL
    if (!url || typeof url !== 'string') {
      return NextResponse.json(
        { error: 'Please provide a valid URL' },
        { status: 400 }
      );
    }

    // Check if it's an Instagram URL
    const instagramRegex = /^https?:\/\/(www\.)?instagram\.com\/(p|reel|tv|stories)\/[A-Za-z0-9_-]+\/?/;
    if (!instagramRegex.test(url)) {
      return NextResponse.json(
        { error: 'Please provide a valid Instagram post, reel, or story URL' },
        { status: 400 }
      );
    }

    // Determine if URL is a reel or story
    const isReel = url.includes('/reel/');
    const isStory = url.includes('/stories/');

    // Fetch the Instagram page HTML
    let response;
    try {
      response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Accept-Encoding': 'gzip, deflate, br',
          'DNT': '1',
          'Connection': 'keep-alive',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'none',
          'Cache-Control': 'max-age=0',
        },
        timeout: 15000,
      });
    } catch (err) {
      // If direct fetch fails, try the embed endpoint
      const shortcode = url.match(/\/(p|reel|tv|stories)\/([A-Za-z0-9_-]+)/)?.[2];
      if (shortcode && !isStory) {
        response = await axios.get(`https://www.instagram.com/p/${shortcode}/embed/captioned/`, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          },
          timeout: 15000,
        });
      } else {
        throw err;
      }
    }

    // Parse HTML with cheerio
    const $ = cheerio.load(response.data);

    // Determine media type and URL
    let mediaUrl: string | null = null;
    let type: 'video' | 'image' | 'carousel' | null = null;
    let carouselItems: Array<{ type: 'video' | 'image'; url: string; thumbnail?: string }> = [];

    // Priority 1: Try to extract video from inline JavaScript data (most reliable for reels)
    const scriptTags = $('script').toArray();
    for (const script of scriptTags) {
      const scriptContent = $(script).html() || '';
      
      // Check for carousel posts first
      const carouselMatch = scriptContent.match(/"edge_sidecar_to_children":\s*\{[^}]*"edges":\s*\[([^\]]+)\]/);
      if (carouselMatch) {
        type = 'carousel';
        const carouselData = carouselMatch[0];
        
        // Extract all media items from carousel
        const nodeMatches = carouselData.matchAll(/"node":\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/g);
        
        for (const nodeMatch of nodeMatches) {
          const nodeContent = nodeMatch[1];
          
          // Check if it's a video
          const isVideo = nodeContent.includes('"is_video":true');
          
          if (isVideo) {
            const videoMatch = nodeContent.match(/"video_url":"([^"]+)"/);
            if (videoMatch) {
              const videoUrl = videoMatch[1].replace(/\\u0026/g, '&').replace(/\\/g, '');
              const thumbnailMatch = nodeContent.match(/"display_url":"([^"]+)"/);
              carouselItems.push({
                type: 'video',
                url: videoUrl,
                thumbnail: thumbnailMatch ? thumbnailMatch[1].replace(/\\u0026/g, '&').replace(/\\/g, '') : undefined
              });
            }
          } else {
            // It's an image
            const imageMatch = nodeContent.match(/"display_url":"([^"]+)"/);
            if (imageMatch) {
              const imageUrl = imageMatch[1].replace(/\\u0026/g, '&').replace(/\\/g, '');
              carouselItems.push({
                type: 'image',
                url: imageUrl
              });
            }
          }
        }
        
        if (carouselItems.length > 0) {
          break;
        }
      }
      
      // Multiple patterns to find the highest quality video URL
      // Pattern 1: Look for video_url with highest resolution
      const videoUrlMatches = scriptContent.matchAll(/"video_url":"([^"]+)"/g);
      const videoUrls = Array.from(videoUrlMatches).map(m => m[1]);
      
      if (videoUrls.length > 0 && type !== 'carousel') {
        // Pick the first one (usually highest quality)
        mediaUrl = videoUrls[0].replace(/\\u0026/g, '&').replace(/\\/g, '');
        type = 'video';
        break;
      }
      
      // Pattern 2: videoUrl
      const videoUrlMatch = scriptContent.match(/"videoUrl":"([^"]+)"/);
      if (videoUrlMatch && videoUrlMatch[1]) {
        mediaUrl = videoUrlMatch[1].replace(/\\u0026/g, '&').replace(/\\/g, '');
        type = 'video';
        break;
      }
      
      // Pattern 3: video_versions (array of quality options)
      const videoVersionsMatch = scriptContent.match(/"video_versions":\[([^\]]+)\]/);
      if (videoVersionsMatch) {
        const versions = videoVersionsMatch[1];
        const urlMatch = versions.match(/"url":"([^"]+)"/);
        if (urlMatch && urlMatch[1]) {
          mediaUrl = urlMatch[1].replace(/\\u0026/g, '&').replace(/\\/g, '');
          type = 'video';
          break;
        }
      }
      
      // Pattern 4: Look for .mp4 URLs (last resort)
      const mp4Match = scriptContent.match(/"(https?:\\\/\\\/[^"]*\.mp4[^"]*)"/);
      if (mp4Match && mp4Match[1]) {
        mediaUrl = mp4Match[1].replace(/\\u0026/g, '&').replace(/\\/g, '');
        type = 'video';
        break;
      }

      // Pattern 5: For stories - look for specific story video patterns
      if (isStory) {
        const storyVideoMatch = scriptContent.match(/"video_resources":\[([^\]]+)\]/);
        if (storyVideoMatch) {
          const resources = storyVideoMatch[1];
          const srcMatch = resources.match(/"src":"([^"]+)"/);
          if (srcMatch && srcMatch[1]) {
            mediaUrl = srcMatch[1].replace(/\\u0026/g, '&').replace(/\\/g, '');
            type = 'video';
            break;
          }
        }

        // Story image pattern
        const storyImageMatch = scriptContent.match(/"display_resources":\[([^\]]+)\]/);
        if (storyImageMatch && !mediaUrl) {
          const resources = storyImageMatch[1];
          const srcMatch = resources.match(/"src":"([^"]+)"/);
          if (srcMatch && srcMatch[1]) {
            mediaUrl = srcMatch[1].replace(/\\u0026/g, '&').replace(/\\/g, '');
            type = 'image';
          }
        }
      }
    }

    // Extract OG meta tags (try multiple selectors)
    const ogType = $('meta[property="og:type"]').attr('content');
    const ogVideo = $('meta[property="og:video"]').attr('content') || 
                    $('meta[property="og:video:secure_url"]').attr('content') ||
                    $('meta[property="og:video:url"]').attr('content');
    const ogImage = $('meta[property="og:image"]').attr('content');
    const ogTitle = $('meta[property="og:title"]').attr('content');
    const ogDescription = $('meta[property="og:description"]').attr('content');

    // Try to extract from JSON-LD script tag
    let jsonLdData: any = null;
    $('script[type="application/ld+json"]').each((_, el) => {
      try {
        const data = JSON.parse($(el).html() || '');
        if (data.video || data.image) {
          jsonLdData = data;
        }
      } catch (e) {
        // Skip invalid JSON
      }
    });

    // Priority 2: Check OG video tags
    if (!mediaUrl && ogVideo) {
      mediaUrl = ogVideo;
      type = 'video';
    }

    // Priority 3: Fallback to JSON-LD video data
    if (!mediaUrl && jsonLdData) {
      if (jsonLdData.video && typeof jsonLdData.video === 'object') {
        mediaUrl = jsonLdData.video.contentUrl || jsonLdData.video.url;
        type = 'video';
      }
    }

    // Priority 4: Only use image if no video found
    if (!mediaUrl) {
      if (ogImage) {
        mediaUrl = ogImage;
        type = 'image';
      } else if (jsonLdData && jsonLdData.image) {
        mediaUrl = typeof jsonLdData.image === 'string' ? jsonLdData.image : jsonLdData.image.url;
        type = 'image';
      }
    }

    // Last resort: Try to find display_url for images
    if (!mediaUrl) {
      for (const script of scriptTags) {
        const scriptContent = $(script).html() || '';
        const imageUrlMatch = scriptContent.match(/"display_url":"([^"]+)"/);
        if (imageUrlMatch && imageUrlMatch[1]) {
          mediaUrl = imageUrlMatch[1].replace(/\\u0026/g, '&').replace(/\\/g, '');
          type = 'image';
          break;
        }
      }
    }

    // If no media found
    if (!mediaUrl || !type) {
      console.error('No media found. Debugging info:', {
        ogVideo: !!ogVideo,
        ogImage: !!ogImage,
        jsonLdData: !!jsonLdData,
        scriptTagsCount: scriptTags.length,
        isStory
      });
      
      if (isStory) {
        return NextResponse.json(
          { 
            error: 'Could not extract story. Instagram stories require authentication or may have expired. Please note that stories are only available for 24 hours.' 
          },
          { status: 404 }
        );
      }
      
      return NextResponse.json(
        { 
          error: 'Could not extract media from this URL. It might be private or unavailable.' 
        },
        { status: 404 }
      );
    }

    // If it's a reel but we only found an image, return error
    if (isReel && type === 'image') {
      return NextResponse.json(
        { 
          error: 'Could not extract video from this reel. It might be private or the video format is not supported.' 
        },
        { status: 404 }
      );
    }

    console.log('Successfully extracted:', { type, mediaUrlLength: mediaUrl?.length, carouselItemsCount: carouselItems.length });

    // Return the extracted data
    if (type === 'carousel' && carouselItems.length > 0) {
      return NextResponse.json({
        type: 'carousel',
        carouselItems,
        title: ogTitle || 'Instagram Carousel Post',
        description: ogDescription || '',
      });
    }

    return NextResponse.json({
      type,
      mediaUrl,
      title: ogTitle || 'Instagram Post',
      description: ogDescription || '',
    });

  } catch (error: any) {
    console.error('Instagram API Error:', error);

    // Handle specific errors
    if (error.code === 'ECONNABORTED' || error.code === 'ETIMEDOUT') {
      return NextResponse.json(
        { error: 'Request timeout. Please try again.' },
        { status: 408 }
      );
    }

    if (error.response?.status === 404) {
      return NextResponse.json(
        { error: 'Post not found. It might be deleted or private.' },
        { status: 404 }
      );
    }

    if (error.response?.status === 429) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to fetch Instagram content. Please check the URL and try again.' },
      { status: 500 }
    );
  }
}
