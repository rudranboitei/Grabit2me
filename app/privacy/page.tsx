import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - GrabIt2Me',
  description: 'Privacy Policy for GrabIt social media downloader service',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-black py-16 sm:py-24">
      <div className="container max-w-3xl mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="text-lg text-gray-500">We respect your privacy and process minimal data.</p>
          </div>

          <div className="space-y-8 text-base md:text-lg text-gray-700 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">1. Information We Collect</h2>
              <p>
                GrabIt is designed with privacy in mind. We collect minimal information necessary to provide our service:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600">
                <li>URLs you submit for processing (temporarily processed, never stored)</li>
                <li>Basic analytics data (anonymized page views)</li>
                <li>Technical information (browser type, device type)</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">2. How We Use Your Information</h2>
              <p>The information we collect is used to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600">
                <li>Process video download requests</li>
                <li>Improve service performance and reliability</li>
                <li>Analyze usage patterns (anonymized)</li>
                <li>Prevent abuse and ensure service security</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">3. Data Storage and Security</h2>
              <p>
                We do not store the videos or content you download. URLs are processed in real-time and not permanently stored. We implement appropriate security measures to protect against unauthorized access to our systems.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">4. Cookies and Tracking</h2>
              <p>
                We may use cookies and similar technologies for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600">
                <li>Essential service functionality</li>
                <li>Analytics to understand service usage</li>
                <li>Improving user experience</li>
              </ul>
              <p className="mt-2 text-xs">
                You can control cookie settings through your browser preferences.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">5. Third-Party Services</h2>
              <p>
                Our service interacts with third-party platforms (Instagram, X, etc.) to retrieve publicly available content that you request. We are not responsible for the privacy practices of these platforms.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">6. Data Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share anonymized aggregate data for analytics purposes.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600">
                <li>Access information we process about you</li>
                <li>Request deletion of your session logs</li>
                <li>Opt-out of analytics tracking</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">8. Children's Privacy</h2>
              <p>
                Our service is not directed to individuals under the age of 13. We do not knowingly collect personal information from children.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">9. Changes to Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify users of significant changes by posting a notice on our website.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">10. Contact Us</h2>
              <p>
                If you have questions about this privacy policy or our practices, please contact us through our contact page.
              </p>
            </section>
            <p className="text-sm text-gray-500 pt-8 border-t border-gray-100">Last updated: July 31, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
