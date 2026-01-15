'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Download, Share2, Smartphone, X } from 'lucide-react';
import { useEffect, useState } from 'react';

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
      return;
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
      };
    }
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
          <div className="fixed bottom-4 left-4 right-4 z-40 animate-in slide-in-from-bottom-5 duration-500">
            <div className="bg-accent border-3 border-black p-4 rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary border-3 border-black flex items-center justify-center rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <Smartphone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bangers text-sm tracking-wide">Install grabit2me App</p>
                    <p className="text-xs font-medium">Get instant access from your home screen!</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleReminderInstall}
                    className="font-bangers h-10 px-4 bg-black text-white border-3 border-black font-bold text-sm transition-all rounded-2xl shadow-[2px_2px_0px_0px_rgba(255,107,157,1)] hover:shadow-[4px_4px_0px_0px_rgba(255,107,157,1)]"
                  >
                    Install
                  </button>
                  <button
                    onClick={handleReminderDismiss}
                    className="h-10 w-10 bg-white border-3 border-black font-bold flex items-center justify-center transition-all rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <Sheet open={showIOSPrompt} onOpenChange={setShowIOSPrompt}>
          <SheetContent side="bottom" className="h-auto bg-card border-t-4 border-black rounded-t-3xl p-0">
            <div className="p-5 sm:p-6">
              <SheetHeader className="text-left mb-5">
                <SheetTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary border-3 border-black flex items-center justify-center rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bangers text-xl tracking-wide">Install grabit2me App</span>
                </SheetTitle>
                <SheetDescription className="text-muted-foreground font-medium mt-2">
                  Get the best experience with our app on your iPhone!
                </SheetDescription>
              </SheetHeader>

              <div className="pb-5">
                <div className="space-y-4">
                  <div className="bg-background border-3 border-black p-4 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-bangers text-base tracking-wide mb-4">Installation Steps:</h4>
                    <ol className="space-y-4 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="shrink-0 w-8 h-8 bg-secondary border-3 border-black flex items-center justify-center text-sm font-bangers rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-white">1</span>
                        <span className="pt-1.5 font-medium">Tap the <Share2 className="inline w-4 h-4 mx-1" /> Share button at the bottom of your screen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="shrink-0 w-8 h-8 bg-accent border-3 border-black flex items-center justify-center text-sm font-bangers rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">2</span>
                        <span className="pt-1.5 font-medium">Scroll down and tap <strong>"Add to Home Screen"</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="shrink-0 w-8 h-8 bg-primary border-3 border-black flex items-center justify-center text-sm font-bangers text-white rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">3</span>
                        <span className="pt-1.5 font-medium">Tap <strong>"Add"</strong> in the top right corner</span>
                      </li>
                    </ol>
                  </div>

                  <div className="flex items-center gap-3 text-sm bg-secondary border-3 border-black p-3 rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-white">
                    <Download className="w-5 h-5" />
                    <span className="font-bold">Access grabit2me instantly from your home screen!</span>
                  </div>
                </div>
              </div>

              <SheetFooter>
                <button
                  onClick={handleIOSDismiss}
                  className="font-bangers w-full h-14 bg-black text-white border-3 border-black font-bold text-lg transition-all rounded-2xl shadow-[4px_4px_0px_0px_rgba(255,107,157,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,107,157,1)]"
                >
                  Got it!
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
        <div className="fixed bottom-4 left-4 right-4 z-40 animate-in slide-in-from-bottom-5 duration-500">
          <div className="bg-secondary border-3 border-black p-4 rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary border-3 border-black flex items-center justify-center rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <Download className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-bangers text-sm tracking-wide text-white">Install grabit2me App</p>
                  <p className="text-xs font-medium text-white">Quick access, works offline, and faster!</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleReminderInstall}
                  className="font-bangers h-10 px-4 bg-black text-white border-3 border-black font-bold text-sm transition-all rounded-2xl shadow-[2px_2px_0px_0px_rgba(255,107,157,1)] hover:shadow-[4px_4px_0px_0px_rgba(255,107,157,1)]"
                >
                  Install
                </button>
                <button
                  onClick={handleReminderDismiss}
                  className="h-10 w-10 bg-white border-3 border-black font-bold flex items-center justify-center transition-all rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Sheet open={showInstall} onOpenChange={setShowInstall}>
        <SheetContent side="bottom" className="h-auto bg-card border-t-4 border-black rounded-t-3xl p-0">
          <div className="p-5 sm:p-6">
            <SheetHeader className="text-left mb-5">
              <SheetTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary border-3 border-black flex items-center justify-center rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <span className="font-bangers text-xl tracking-wide">Install grabit2me App</span>
              </SheetTitle>
              <SheetDescription className="text-muted-foreground font-medium mt-2">
                Install grabit2me for quick access and a better experience!
              </SheetDescription>
            </SheetHeader>

            <div className="pb-5">
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-background border-3 border-black p-4 rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="shrink-0 w-12 h-12 bg-secondary border-3 border-black flex items-center justify-center rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bangers tracking-wide">Works Offline</h4>
                    <p className="text-muted-foreground text-sm font-medium">Access your downloads even without internet</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-background border-3 border-black p-4 rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="shrink-0 w-12 h-12 bg-accent border-3 border-black flex items-center justify-center rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <Download className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bangers tracking-wide">Lightning Fast</h4>
                    <p className="text-muted-foreground text-sm font-medium">Native app performance and speed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-background border-3 border-black p-4 rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="shrink-0 w-12 h-12 bg-primary border-3 border-black flex items-center justify-center rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <Share2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bangers tracking-wide">Easy Access</h4>
                    <p className="text-muted-foreground text-sm font-medium">Launch directly from your home screen</p>
                  </div>
                </div>
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col gap-3">
              <button
                onClick={handleInstallClick}
                className="font-bangers w-full h-14 bg-black text-white border-3 border-black font-bold text-lg transition-all rounded-2xl shadow-[4px_4px_0px_0px_rgba(78,205,196,1)] hover:shadow-[6px_6px_0px_0px_rgba(78,205,196,1)]"
              >
                Install Now
              </button>
              <button
                onClick={handleDismiss}
                className="font-bangers w-full h-12 bg-background text-foreground border-3 border-black font-bold text-base transition-all rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
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
