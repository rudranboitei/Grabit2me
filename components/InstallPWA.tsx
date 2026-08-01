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
import Image from 'next/image';

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
            <div className="bg-[#fbfeff] rounded-[40px] shadow-[inset_0px_-4px_4px_0px_rgb(210,203,198)] border-2 border-[rgba(199,196,194,0.3)] p-2 pl-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#fbfeff] rounded-[16px] flex items-center justify-center shrink-0 border-2 border-[rgba(199,196,194,0.3)] shadow-[inset_0px_-2px_2px_0px_rgb(210,203,198)] overflow-hidden">
                  <Image src="/icon-192.png" alt="GrabIt2Me Logo" width={28} height={28} className="h-7 w-7 object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-[730] text-[#1b1c1c] leading-tight tracking-tight">Install App</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={handleReminderInstall}
                  className="px-6 py-3 bg-[#ffc73b] text-[#1b1c1c] rounded-[40px] font-[730] text-[15px] shadow-[inset_0px_-4px_4px_0px_rgb(208,163,52)] border-2 border-[rgba(19,20,21,0.06)] hover:scale-105 transition-transform"
                >
                  Get
                </button>
                <button
                  onClick={handleReminderDismiss}
                  className="w-10 h-10 flex items-center justify-center rounded-full text-[#1b1c1c]/50 hover:text-[#1b1c1c] transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        <Sheet open={showIOSPrompt} onOpenChange={setShowIOSPrompt}>
          <SheetContent side="bottom" className="h-auto bg-[#fbfeff] border-t-2 border-[rgba(199,196,194,0.3)] p-6 md:p-10 rounded-t-[40px] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.15)]">
            <div className="max-w-md mx-auto">
              <SheetHeader className="text-center mb-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-[32px] bg-[#fbfeff] flex items-center justify-center shrink-0 mb-6 shadow-[inset_0px_-4px_4px_0px_rgb(210,203,198)] border-2 border-[rgba(199,196,194,0.3)]">
                  <Image src="/icon-192.png" alt="GrabIt2Me Logo" width={64} height={64} className="w-16 h-16 object-contain" />
                </div>
                <SheetTitle className="text-[32px] md:text-[40px] font-[730] text-[#1b1c1c] tracking-[-0.4px] leading-[110%]">Install GrabIt2Me</SheetTitle>
                <SheetDescription className="text-[16px] md:text-[18px] font-normal text-[#1b1c1c]/70 mt-3">
                  Get the best experience directly on your home screen.
                </SheetDescription>
              </SheetHeader>

              <div className="space-y-4 mb-10">
                <ol className="space-y-6 text-[16px] md:text-[18px] text-[#1b1c1c]/90 font-medium tracking-tight">
                  <li className="flex items-center gap-5">
                    <span className="shrink-0 w-12 h-12 rounded-[20px] bg-[#ffc73b] flex items-center justify-center text-[18px] font-[730] text-[#1b1c1c] shadow-[inset_0px_-4px_4px_0px_rgb(208,163,52)] border-2 border-[rgba(19,20,21,0.06)]">1</span>
                    <span>
                      Tap <Share2 className="inline w-6 h-6 mx-1 text-[#1b1c1c]" /> Share below.
                    </span>
                  </li>
                  <li className="flex items-center gap-5">
                    <span className="shrink-0 w-12 h-12 rounded-[20px] bg-[#ffc73b] flex items-center justify-center text-[18px] font-[730] text-[#1b1c1c] shadow-[inset_0px_-4px_4px_0px_rgb(208,163,52)] border-2 border-[rgba(19,20,21,0.06)]">2</span>
                    <span>
                      Tap <strong className="font-[730] text-[#1b1c1c]">"Add to Home Screen"</strong>.
                    </span>
                  </li>
                  <li className="flex items-center gap-5">
                    <span className="shrink-0 w-12 h-12 rounded-[20px] bg-[#ffc73b] flex items-center justify-center text-[18px] font-[730] text-[#1b1c1c] shadow-[inset_0px_-4px_4px_0px_rgb(208,163,52)] border-2 border-[rgba(19,20,21,0.06)]">3</span>
                    <span>
                      Tap <strong className="font-[730] text-[#1b1c1c]">"Add"</strong> to finish.
                    </span>
                  </li>
                </ol>
              </div>

              <SheetFooter>
                <button 
                  onClick={handleIOSDismiss} 
                  className="w-full h-16 bg-[#fbfeff] text-[#1b1c1c] rounded-[40px] font-[730] text-[18px] shadow-[inset_0px_-4px_4px_0px_rgb(210,203,198)] border-2 border-[rgba(199,196,194,0.3)] hover:scale-[1.02] transition-transform"
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
          <div className="bg-[#fbfeff] rounded-[40px] shadow-[inset_0px_-4px_4px_0px_rgb(210,203,198)] border-2 border-[rgba(199,196,194,0.3)] p-2 pl-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#fbfeff] rounded-[16px] flex items-center justify-center shrink-0 border-2 border-[rgba(199,196,194,0.3)] shadow-[inset_0px_-2px_2px_0px_rgb(210,203,198)] overflow-hidden">
                <Image src="/icon-192.png" alt="GrabIt2Me Logo" width={28} height={28} className="h-7 w-7 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-[730] text-[#1b1c1c] leading-tight tracking-tight">Install App</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={handleReminderInstall}
                className="px-6 py-3 bg-[#ffc73b] text-[#1b1c1c] rounded-[40px] font-[730] text-[15px] shadow-[inset_0px_-4px_4px_0px_rgb(208,163,52)] border-2 border-[rgba(19,20,21,0.06)] hover:scale-105 transition-transform"
              >
                Get
              </button>
              <button
                onClick={handleReminderDismiss}
                className="w-10 h-10 flex items-center justify-center rounded-full text-[#1b1c1c]/50 hover:text-[#1b1c1c] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <Sheet open={showInstall} onOpenChange={setShowInstall}>
        <SheetContent side="bottom" className="h-auto bg-[#fbfeff] border-t-2 border-[rgba(199,196,194,0.3)] p-6 md:p-10 rounded-t-[40px] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.15)]">
          <div className="max-w-md mx-auto">
            <SheetHeader className="text-center mb-10 flex flex-col items-center">
              <div className="w-24 h-24 rounded-[32px] bg-[#fbfeff] flex items-center justify-center shrink-0 mb-6 shadow-[inset_0px_-4px_4px_0px_rgb(210,203,198)] border-2 border-[rgba(199,196,194,0.3)]">
                <Image src="/icon-192.png" alt="GrabIt2Me Logo" width={64} height={64} className="w-16 h-16 object-contain" />
              </div>
              <SheetTitle className="text-[32px] md:text-[40px] font-[730] text-[#1b1c1c] tracking-[-0.4px] leading-[110%]">Install GrabIt2Me</SheetTitle>
              <SheetDescription className="text-[16px] md:text-[18px] font-normal text-[#1b1c1c]/70 mt-3">
                Lightning fast access directly from your home screen.
              </SheetDescription>
            </SheetHeader>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-5">
                <div className="shrink-0 w-14 h-14 rounded-[24px] bg-[#fbfeff] flex items-center justify-center text-[#1b1c1c] shadow-[inset_0px_-4px_4px_0px_rgb(210,203,198)] border-2 border-[rgba(199,196,194,0.3)]">
                  <Smartphone className="w-7 h-7 text-[#1b1c1c]" />
                </div>
                <div>
                  <h4 className="text-[18px] md:text-[20px] font-[730] text-[#1b1c1c] tracking-tight">Works Offline</h4>
                  <p className="text-[#1b1c1c]/70 text-[15px] font-normal mt-0.5">Reliable even with poor connection</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="shrink-0 w-14 h-14 rounded-[24px] bg-[#fbfeff] flex items-center justify-center text-[#1b1c1c] shadow-[inset_0px_-4px_4px_0px_rgb(210,203,198)] border-2 border-[rgba(199,196,194,0.3)]">
                  <Download className="w-7 h-7 text-[#1b1c1c]" />
                </div>
                <div>
                  <h4 className="text-[18px] md:text-[20px] font-[730] text-[#1b1c1c] tracking-tight">Lightning Fast</h4>
                  <p className="text-[#1b1c1c]/70 text-[15px] font-normal mt-0.5">Native application performance</p>
                </div>
              </div>
            </div>

            <SheetFooter className="flex flex-col gap-4">
              <button 
                onClick={handleInstallClick} 
                className="w-full h-16 bg-[#ffc73b] text-[#1b1c1c] rounded-[40px] font-[730] text-[18px] shadow-[inset_0px_-4px_4px_0px_rgb(208,163,52)] border-2 border-[rgba(19,20,21,0.06)] hover:scale-[1.02] transition-transform"
              >
                Install Now
              </button>
              <button 
                onClick={handleDismiss} 
                className="w-full h-16 bg-[#fbfeff] text-[#1b1c1c] rounded-[40px] font-[730] text-[18px] shadow-[inset_0px_-4px_4px_0px_rgb(210,203,198)] border-2 border-[rgba(199,196,194,0.3)] hover:scale-[1.02] transition-transform"
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
