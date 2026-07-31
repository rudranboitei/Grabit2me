import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Disclaimer - GrabIt2Me',
  description: 'Disclaimer for GrabIt social media downloader service',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white text-black py-16 sm:py-24">
      <div className="container max-w-3xl mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Disclaimer</h1>
            <p className="text-lg text-gray-500">Please read our disclaimer policy regarding service usage.</p>
          </div>

          <div className="space-y-8 text-base md:text-lg text-gray-700 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">General Information</h2>
              <p>
                GrabIt is a downloader utility that allows users to access and save publicly available content from social media platforms. By using our service, you acknowledge and agree to this disclaimer.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Content Ownership</h2>
              <p>
                We do not host, store, or own any content downloaded through our service. All content belongs to their respective copyright holders. Users are responsible for ensuring they have the right to download and use any content.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">User Responsibility</h2>
              <p>
                Users must comply with all applicable laws and regulations, including copyright laws. We are not responsible for how users utilize downloaded content. You should only download content that you have permission to use or that is in the public domain.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Service Availability</h2>
              <p>
                We strive to provide a reliable service but do not guarantee uninterrupted access. The service is provided "as is" without warranties of any kind, either express or implied.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Third-Party Platforms</h2>
              <p>
                GrabIt is not affiliated with, endorsed by, or sponsored by Instagram, Meta, X (Twitter), or any other social media platform. All trademarks and registered trademarks are the property of their respective owners.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, GrabIt shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Changes to Disclaimer</h2>
              <p>
                We reserve the right to modify this disclaimer at any time. Continued use of the service after changes constitutes acceptance of the modified disclaimer.
              </p>
            </section>
            <p className="text-sm text-gray-500 pt-8 border-t border-gray-100">Last updated: July 31, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
