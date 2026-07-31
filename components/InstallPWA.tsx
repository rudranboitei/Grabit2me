'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import { Download, Share2, Smartphone, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstall, setShowInstall] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSPrompt, setShowIOSPrompt] = useState(false);
  const [showReminderBanner, setShowReminderBanner] = useState(false);

  useEffect(() => {
    // Check if running on iOS
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(ios);

    // Check if it's a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Check if already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (isStandalone) {
      return; // Already installed
    }

    // Custom event listener for manual triggers
    const handleCustomInstallEvent = () => {
      if (ios) {
        setShowIOSPrompt(true);
      } else {
        setShowInstall(true);
      }
    };
    window.addEventListener('show-pwa-install', handleCustomInstallEvent);

    // Only show reminders on mobile devices
    if (isMobile) {
      // Check reminder banner dismissal
      const reminderDismissed = localStorage.getItem('pwa-reminder-dismissed');
      const reminderDismissedTime = localStorage.getItem('pwa-reminder-dismissed-time');

      // Show reminder banner after 5 seconds if not dismissed or after 1 day
      if (!reminderDismissed || (reminderDismissedTime && Date.now() - parseInt(reminderDismissedTime) > 1 * 24 * 60 * 60 * 1000)) {
        setTimeout(() => setShowReminderBanner(true), 5000);
      }
    }

    // iOS specific prompt
    if (ios) {
      const hasSeenPrompt = localStorage.getItem('ios-pwa-prompt-dismissed');
      const dismissedTime = localStorage.getItem('ios-pwa-prompt-dismissed-time');

      // Show again after 1 day
      if (!hasSeenPrompt || (dismissedTime && Date.now() - parseInt(dismissedTime) > 1 * 24 * 60 * 60 * 1000)) {
        setTimeout(() => setShowIOSPrompt(true), 1000);
      }
    }

    // Handle Android install prompt (mobile only)
    if (isMobile) {
      const handler = (e: any) => {
        e.preventDefault();
        setDeferredPrompt(e);

        const hasSeenPrompt = localStorage.getItem('pwa-prompt-dismissed');
        const dismissedTime = localStorage.getItem('pwa-prompt-dismissed-time');

        // Show again after 1 day
        if (!hasSeenPrompt || (dismissedTime && Date.now() - parseInt(dismissedTime) > 1 * 24 * 60 * 60 * 1000)) {
          setTimeout(() => setShowInstall(true), 1000);
        }
      };

      window.addEventListener('beforeinstallprompt', handler);

      return () => {
        window.removeEventListener('beforeinstallprompt', handler);
        window.removeEventListener('show-pwa-install', handleCustomInstallEvent);
      };
    }

    return () => {
      window.removeEventListener('show-pwa-install', handleCustomInstallEvent);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
      localStorage.removeItem('pwa-prompt-dismissed');
      localStorage.removeItem('pwa-prompt-dismissed-time');
      setShowReminderBanner(false);
      localStorage.setItem('pwa-reminder-dismissed', 'true');
    }

    setDeferredPrompt(null);
    setShowInstall(false);
  };

  const handleDismiss = () => {
    setShowInstall(false);
    localStorage.setItem('pwa-prompt-dismissed', 'true');
    localStorage.setItem('pwa-prompt-dismissed-time', Date.now().toString());
  };

  const handleIOSDismiss = () => {
    setShowIOSPrompt(false);
    localStorage.setItem('ios-pwa-prompt-dismissed', 'true');
    localStorage.setItem('ios-pwa-prompt-dismissed-time', Date.now().toString());
  };

  const handleReminderDismiss = () => {
    setShowReminderBanner(false);
    localStorage.setItem('pwa-reminder-dismissed', 'true');
    localStorage.setItem('pwa-reminder-dismissed-time', Date.now().toString());
  };

  const handleReminderInstall = () => {
    setShowReminderBanner(false);
    if (isIOS) {
      setShowIOSPrompt(true);
    } else {
      setShowInstall(true);
    }
  };

  // iOS Install Instructions using Sheet
  if (isIOS) {
    return (
      <>
        {/* Reminder Banner for iOS */}
        {showReminderBanner && (
          <div className="fixed bottom-6 left-4 right-4 z-40 animate-in slide-in-from-bottom-5 duration-500 max-w-md mx-auto">
            <div className="bg-black rounded-full shadow-2xl p-2 pl-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0">
                  <img src="/icon-192.png" alt="GrabIt2Me Logo" className="h-7 w-7 object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold text-white leading-tight">Install App</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={handleReminderInstall}
                  className="px-6 py-3 bg-white text-black rounded-[24px] font-semibold text-base hover:bg-gray-100 transition-colors"
                >
                  Get
                </button>
                <button
                  onClick={handleReminderDismiss}
                  className="w-10 h-10 flex items-center justify-center rounded-[24px] text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        <Sheet open={showIOSPrompt} onOpenChange={setShowIOSPrompt}>
          <SheetContent side="bottom" className="h-auto bg-white/95 backdrop-blur-2xl border-t border-white/20 p-6 md:p-10 rounded-t-[40px] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.15)]">
            <div className="max-w-md mx-auto">
              <SheetHeader className="text-center mb-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-[24px] bg-white flex items-center justify-center shrink-0 mb-6 shadow-2xl border border-gray-100">
                  <img src="/icon-192.png" alt="GrabIt2Me Logo" className="w-16 h-16 object-contain" />
                </div>
                <SheetTitle className="text-3xl md:text-4xl font-semibold text-black tracking-tighter">Install GrabIt2Me</SheetTitle>
                <SheetDescription className="text-base md:text-lg font-medium text-gray-500 mt-2">
                  Get the best experience directly on your home screen.
                </SheetDescription>
              </SheetHeader>

              <div className="space-y-4 mb-10">
                <ol className="space-y-6 text-lg md:text-xl text-gray-600 font-semibold tracking-tight">
                  <li className="flex items-center gap-5">
                    <span className="shrink-0 w-12 h-12 rounded-full bg-black flex items-center justify-center text-lg font-semibold text-white">1</span>
                    <span>
                      Tap <Share2 className="inline w-7 h-7 mx-1 text-black" /> Share below.
                    </span>
                  </li>
                  <li className="flex items-center gap-5">
                    <span className="shrink-0 w-12 h-12 rounded-full bg-black flex items-center justify-center text-lg font-semibold text-white">2</span>
                    <span>
                      Tap <strong className="text-black">"Add to Home Screen"</strong>.
                    </span>
                  </li>
                  <li className="flex items-center gap-5">
                    <span className="shrink-0 w-12 h-12 rounded-full bg-black flex items-center justify-center text-lg font-semibold text-white">3</span>
                    <span>
                      Tap <strong className="text-black">"Add"</strong> to finish.
                    </span>
                  </li>
                </ol>
              </div>

              <SheetFooter>
                <button 
                  onClick={handleIOSDismiss} 
                  className="w-full h-16 bg-black text-white rounded-[24px] font-semibold text-xl hover:bg-gray-800 transition-colors shadow-2xl"
                >
                  Done
                </button>
              </SheetFooter>
            </div>
          </SheetContent>
        </Sheet>
      </>
    );
  }

  // Android/Desktop Install Prompt using Sheet
  return (
    <>
      {/* Reminder Banner for Android/Desktop */}
      {showReminderBanner && (
        <div className="fixed bottom-6 left-4 right-4 z-40 animate-in slide-in-from-bottom-5 duration-500 max-w-md mx-auto">
          <div className="bg-black rounded-full shadow-2xl p-2 pl-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0">
                <img src="/icon-192.png" alt="GrabIt2Me Logo" className="h-7 w-7 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-white leading-tight">Install App</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={handleReminderInstall}
                className="px-6 py-3 bg-white text-black rounded-[24px] font-semibold text-base hover:bg-gray-100 transition-colors"
              >
                Get
              </button>
              <button
                onClick={handleReminderDismiss}
                className="w-10 h-10 flex items-center justify-center rounded-[24px] text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <Sheet open={showInstall} onOpenChange={setShowInstall}>
        <SheetContent side="bottom" className="h-auto bg-white/95 backdrop-blur-2xl border-t border-white/20 p-6 md:p-10 rounded-t-[40px] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.15)]">
          <div className="max-w-md mx-auto">
            <SheetHeader className="text-center mb-10 flex flex-col items-center">
              <div className="w-24 h-24 rounded-[24px] bg-white flex items-center justify-center shrink-0 mb-6 shadow-2xl border border-gray-100">
                <img src="/icon-192.png" alt="GrabIt2Me Logo" className="w-16 h-16 object-contain" />
              </div>
              <SheetTitle className="text-3xl md:text-4xl font-semibold text-black tracking-tighter">Install GrabIt2Me</SheetTitle>
              <SheetDescription className="text-base md:text-lg font-medium text-gray-500 mt-2">
                Lightning fast access directly from your home screen.
              </SheetDescription>
            </SheetHeader>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-5">
                <div className="shrink-0 w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-black">
                  <Smartphone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-black tracking-tight">Works Offline</h4>
                  <p className="text-gray-500 text-base font-medium mt-0.5">Reliable even with poor connection</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="shrink-0 w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-black">
                  <Download className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-black tracking-tight">Lightning Fast</h4>
                  <p className="text-gray-500 text-base font-medium mt-0.5">Native application performance</p>
                </div>
              </div>
            </div>

            <SheetFooter className="flex flex-col gap-4">
              <button 
                onClick={handleInstallClick} 
                className="w-full h-16 bg-black text-white rounded-[24px] font-semibold text-xl hover:bg-gray-800 transition-colors shadow-2xl"
              >
                Install Now
              </button>
              <button 
                onClick={handleDismiss} 
                className="w-full h-16 bg-white text-gray-500 rounded-[24px] font-semibold text-lg hover:text-black transition-colors"
              >
                Maybe Later
              </button>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
