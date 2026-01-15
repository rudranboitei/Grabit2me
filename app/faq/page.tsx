import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'FAQ - grabit2me',
  description: 'Frequently asked questions about grabit2me video downloader',
}

export default function FAQPage() {
  return (
    <div className="min-h-screen py-24 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        <Link href="/" className="inline-flex items-center rounded-2xl gap-2 px-4 py-2 bg-white border-3 border-[#1a1a1a] font-bold text-sm transition-all hover:shadow-md mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-black  rounded-full inline-block bg-[#98ee99] border-3 border-[#1a1a1a] px-6 py-3 rotate-1 shadow-md">FAQ</h1>
        </div>

        <div className="bg-white border-3 border-[#1a1a1a] p-6 sm:p-8 shadow-lg space-y-8 rounded-2xl">
          <section className="space-y-3 pb-6 border-b-2 border-[#1a1a1a] last:border-b-0">
            <h2 className="text-xl font-black">How does grabit2me work?</h2>
            <p className="font-medium">
              Simply paste the URL of the video you want to download, click "Fetch Video", and once the video is processed, click the download button. Our service retrieves publicly available content from social media platforms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black pb-2 border-b-2 border-[#1a1a1a]">Which platforms are supported?</h2>
            <p className="text-muted-foreground">
              Currently, we support Instagram, X (Twitter), Threads, LinkedIn, Snapchat, and YouTube. We're working on adding more platforms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black pb-2 border-b-2 border-[#1a1a1a]">Is grabit2me free to use?</h2>
            <p className="text-muted-foreground">
              Yes! grabit2me is completely free to use. No registration, no subscriptions, no hidden fees.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black pb-2 border-b-2 border-[#1a1a1a]">Do I need to create an account?</h2>
            <p className="text-muted-foreground">
              No account is required. You can use grabit2me anonymously without signing up or logging in.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black pb-2 border-b-2 border-[#1a1a1a]">Are there watermarks on downloaded videos?</h2>
            <p className="text-muted-foreground">
              No, we don't add any watermarks to the videos you download. You get the original content as it appears on the platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black pb-2 border-b-2 border-[#1a1a1a]">Can I download private or restricted content?</h2>
            <p className="text-muted-foreground">
              No, our service only works with publicly available content. We cannot access private accounts or restricted videos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black pb-2 border-b-2 border-[#1a1a1a]">What video quality can I download?</h2>
            <p className="text-muted-foreground">
              The available quality depends on the source platform. For platforms like YouTube, we offer multiple quality options. For others, we provide the best available quality.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black pb-2 border-b-2 border-[#1a1a1a]">Is it legal to download videos?</h2>
            <p className="text-muted-foreground">
              You should only download content that you have permission to use or that is in the public domain. Always respect copyright laws and content creators' rights. We recommend using downloaded content for personal, non-commercial purposes only.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black pb-2 border-b-2 border-[#1a1a1a]">Do you store the videos I download?</h2>
            <p className="text-muted-foreground">
              No, we do not store any videos. All processing happens in real-time, and we don't keep any copies of the content you download.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black pb-2 border-b-2 border-[#1a1a1a]">Why isn't my download working?</h2>
            <p className="text-muted-foreground">
              Common issues include: the video is private, the URL is incorrect, or the content has been removed from the platform. Make sure you're using a valid, public video URL. If problems persist, try a different video or contact us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black pb-2 border-b-2 border-[#1a1a1a]">Can I download videos in bulk?</h2>
            <p className="text-muted-foreground">
              Currently, we process one video at a time to ensure quality and prevent abuse. For bulk downloads, you'll need to process each URL separately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black pb-2 border-b-2 border-[#1a1a1a]">Is there a download limit?</h2>
            <p className="text-muted-foreground">
              We implement fair usage policies to ensure service availability for all users. Excessive usage may be temporarily restricted.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black pb-2 border-b-2 border-[#1a1a1a]">How can I contact support?</h2>
            <p className="text-muted-foreground">
              You can reach us through our <Link href="/contact" className="text-foreground underline">contact page</Link>. We'll do our best to respond to your inquiry as quickly as possible.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black pb-2 border-b-2 border-[#1a1a1a]">Is grabit2me safe to use?</h2>
            <p className="text-muted-foreground">
              Yes, our service is safe. We don't require personal information, don't install any software on your device, and don't store your data. Always ensure you're on the official grabit2me website.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
