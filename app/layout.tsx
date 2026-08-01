import PWARegister from "@/components/PWARegister";
import { SplashScreens } from "@/components/SplashScreens";
import { Footer } from "@/components/section/Footer";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
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
    default: "grabit2me - Free Social Media Video Downloader | Instagram & X",
    template: "%s | grabit2me"
  },
  description: "Download videos and images from Instagram and X (Twitter) instantly. Free, fast, and no login required. The simplest social media downloader tool.",
  keywords: [
    "video downloader",
    "instagram downloader",
    "instagram reels downloader",
    "instagram video downloader",
    "x downloader",
    "twitter downloader",
    "twitter video downloader",
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
  manifest: "/manifest.webmanifest",
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
    description: "Download videos and images from Instagram and X (Twitter) instantly. Free, fast, no login required.",
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
    description: "Download videos and images from Instagram and X (Twitter) instantly. Free, fast, no login required.",
    images: [`${process.env.NEXT_PUBLIC_APP_URL || 'https://grabit2me.vercel.app/'}/og.png`],
    creator: "@grabit2me",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
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
    <html lang="en" className={cn(bricolage.variable, "font-sans antialiased")}>
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
        <SplashScreens />
      </head>
      <body className="font-sans font-medium text-foreground bg-background">
        <PWARegister />
        <Analytics />
        <TooltipProvider>{children}</TooltipProvider>
        <Footer />
        <Toaster 
          position="bottom-center" 
          toastOptions={{
            style: {
              background: 'black',
              color: 'white',
              border: 'none',
              borderRadius: '9999px',
              padding: '16px 24px',
              fontSize: '16px',
              fontWeight: 500
            }
          }} 
        />
      </body>
    </html>
  );
}

