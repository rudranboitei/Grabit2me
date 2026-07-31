import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'FAQ - GrabIt2Me',
  description: 'Frequently asked questions about GrabIt social media downloader',
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white text-black py-16 sm:py-24">
      <div className="container max-w-3xl mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">FAQ</h1>
            <p className="text-lg text-gray-500">Find answers to common questions about using GrabIt.</p>
          </div>

          <div className="space-y-8 text-base md:text-lg text-gray-700 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">How does GrabIt work?</h2>
              <p>
                Simply paste the URL of the media you want to download, click "Fetch", and once the media is processed, select your preferred quality/format to download. Our service processes publicly available content in real-time.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Which platforms are supported?</h2>
              <p>
                Currently, we support Instagram and X (Twitter).
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Is GrabIt free to use?</h2>
              <p>
                Yes! GrabIt is completely free to use. No registration, no subscriptions, no hidden fees.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Do I need to create an account?</h2>
              <p>
                No account is required. You can use GrabIt anonymously without signing up or logging in.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Are there watermarks on downloaded videos?</h2>
              <p>
                No, we do not add any watermarks to downloaded videos or images. You get the original content as served by the social platform.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Can I download private or restricted content?</h2>
              <p>
                No, our service only works with publicly available content. We cannot access private accounts or restricted/deleted posts.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">What video quality can I download?</h2>
              <p>
                We provide the highest quality versions available from the source post, and offer multiple resolution formats when served by the host platform API.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Is it legal to download videos?</h2>
              <p>
                You should only download content that you own or have explicit permission to use. Always respect copyright laws and content creators' rights. We recommend using downloaded media for personal, non-commercial purposes only.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Do you store the videos I download?</h2>
              <p>
                No, we do not store any videos. All processing happens in real-time on our servers, and we do not maintain copy archives of your downloads.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Why isn't my download working?</h2>
              <p>
                Common causes: the post is set to private, the link is incorrect or malformed, or the content has been deleted. Make sure you are using a valid, public URL. If problems persist, feel free to try again later.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Can I download videos in bulk?</h2>
              <p>
                Currently, we process one video at a time to ensure quality and prevent server overload. For multiple downloads, you'll need to copy and paste each link individually.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">How can I contact support?</h2>
              <p>
                You can reach us through email at <a href="mailto:support@grabit2me.com" className="text-black font-semibold hover:underline underline-offset-2">support@grabit2me.com</a>. We'll do our best to respond to your inquiry as quickly as possible.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Is GrabIt safe to use?</h2>
              <p>
                Yes, our service is safe. We do not require any personal details, do not require installing any browser extensions, and do not track your downloads. Always make sure you are accessing the official GrabIt domain.
              </p>
            </section>
            <p className="text-sm text-gray-500 pt-8 border-t border-gray-100">Last updated: July 31, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
