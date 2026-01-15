import PWARegister from "@/components/PWARegister";
import { Footer } from "@/components/section/Footer";
import { HeroHeader } from "@/components/section/Header";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Bangers, Kalam } from 'next/font/google';
import "./globals.css";

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bangers',
  display: 'swap',
});

const kalam = Kalam({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-kalam',
  display: 'swap',
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://grabit2me.vercel.app/'),
  title: {
    default: "grabit2me - Free Social Media Video Downloader | Instagram, X, YouTube, Threads",
    template: "%s | grabit2me"
  },
  description: "Download videos and images from Instagram, X (Twitter), Threads, LinkedIn, Snapchat, and YouTube instantly. Free, fast, and no login required. Best social media video downloader tool.",
  keywords: [
    "video downloader",
    "instagram downloader",
    "instagram reels downloader",
    "instagram video downloader",
    "x downloader",
    "twitter downloader",
    "twitter video downloader",
    "threads downloader",
    "youtube downloader",
    "youtube video downloader",
    "linkedin video downloader",
    "snapchat downloader",
    "social media downloader",
    "download videos",
    "download reels",
    "save videos",
    "free video downloader",
    "online video downloader",
    "grabit2me",
  ],
  authors: [{ name: "grabit2me", url: "https://grabit2me.vercel.app" }],
  creator: "grabit2me",
  publisher: "grabit2me",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "grabit2me",
  },
  applicationName: "grabit2me",
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://grabit2me.vercel.app/',
    title: "grabit2me - Social Media Video Downloader",
    description: "Download videos and images from Instagram, X (Twitter), Threads, LinkedIn, Snapchat, and YouTube instantly",
    siteName: "grabit2me",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://grabit2me.vercel.app/'}/og.png`,
        width: 1200,
        height: 630,
        alt: "grabit2me - Download videos from Instagram, X, YouTube & more",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "grabit2me - Social Media Video Downloader",
    description: "Download videos and images from Instagram, X (Twitter), Threads, LinkedIn, Snapchat, and YouTube instantly",
    images: [`${process.env.NEXT_PUBLIC_APP_URL || 'https://grabit2me.vercel.app/'}/og.png`],
    creator: "@grabit2me",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon-192-solid.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512-solid.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="GrabIt" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="GrabIt" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-tap-highlight" content="no" />

        <link rel="manifest" href="/manifest.json?v=4" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* iOS Splash Screens - iPhone */}
        <link rel="apple-touch-startup-image" media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/apple-splash-1170-2532.png" />
        <link rel="apple-touch-startup-image" media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/apple-splash-1125-2436.png" />
        <link rel="apple-touch-startup-image" media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/apple-splash-1242-2688.png" />
        <link rel="apple-touch-startup-image" media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/apple-splash-1125-2436.png" />
        <link rel="apple-touch-startup-image" media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/apple-splash-1125-2436.png" />
        <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/apple-splash-1242-2688.png" />
        <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/apple-splash-828-1792.png" />

        {/* iOS Splash Screens - iPad */}
        <link rel="apple-touch-startup-image" media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/apple-splash-2048-2732.png" />
        <link rel="apple-touch-startup-image" media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/apple-splash-1668-2388.png" />
        <link rel="apple-touch-startup-image" media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/apple-splash-1668-2388.png" />
        <link rel="apple-touch-startup-image" media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/apple-splash-1536-2048.png" />

        {/* Fallback iOS Splash Screens */}
        <link rel="apple-touch-startup-image" media="(prefers-color-scheme: light)" href="/ios-light.png" />
        <link rel="apple-touch-startup-image" media="(prefers-color-scheme: dark)" href="/ios-dark.png" />
        <link rel="apple-touch-startup-image" href="/ios-tinted.png" />
      </head>
      <body
        className={`${kalam.variable} ${bangers.variable} antialiased`}
        style={{ fontFamily: 'var(--font-kalam), ui-sans-serif, system-ui, sans-serif' }}
      >
        <HeroHeader />
        <PWARegister />
        <Analytics/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
