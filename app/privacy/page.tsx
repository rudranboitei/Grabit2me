import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - grabit2me',
  description: 'Privacy Policy for grabit2me video downloader service',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-24 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        <Link href="/" className="inline-flex  rounded-2xl items-center gap-2 px-4 py-2 bg-white border-3 border-[#1a1a1a] font-bold text-sm transition-all hover:shadow-md mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl rounded-full font-black inline-block bg-[#6bcfff] border-3 border-[#1a1a1a] px-6 py-3 rotate-1 shadow-md">Privacy Policy</h1>
        </div>

        <div className="bg-white rounded-2xl border-3 border-[#1a1a1a] p-6 sm:p-8 shadow-lg space-y-6">
          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">1. Information We Collect</h2>
            <p>
              grabit2me is designed with privacy in mind. We collect minimal information necessary to provide our service:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>URLs you submit for processing (temporarily, not stored)</li>
              <li>Basic analytics data (page views, anonymized)</li>
              <li>Technical information (browser type, device type)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">2. How We Use Your Information</h2>
            <p>The information we collect is used to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process video download requests</li>
              <li>Improve service performance and reliability</li>
              <li>Analyze usage patterns (anonymized)</li>
              <li>Prevent abuse and ensure service security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">3. Data Storage and Security</h2>
            <p>
              We do not store the videos or content you download. URLs are processed in real-time and not permanently stored. We implement appropriate security measures to protect against unauthorized access to our systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">4. Cookies and Tracking</h2>
            <p>
              We may use cookies and similar technologies for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Essential service functionality</li>
              <li>Analytics to understand service usage</li>
              <li>Improving user experience</li>
            </ul>
            <p className="mt-2">
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">5. Third-Party Services</h2>
            <p>
              Our service may interact with third-party platforms (Instagram, X, YouTube, etc.) to retrieve publicly available content. We are not responsible for the privacy practices of these platforms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">6. Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share anonymized aggregate data for analytics purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access information we hold about you</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of analytics tracking</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">8. Children's Privacy</h2>
            <p>
              Our service is not directed to individuals under the age of 13. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">9. Changes to Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify users of significant changes by posting a notice on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">10. Contact Us</h2>
            <p>
              If you have questions about this privacy policy or our practices, please contact us through our contact page.
            </p>
          </section>

          <p className="text-sm mt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}
