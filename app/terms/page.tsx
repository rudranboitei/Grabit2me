import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - GrabIt2Me',
  description: 'Terms of Service for GrabIt social media downloader service',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-black py-16 sm:py-24">
      <div className="container max-w-3xl mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Terms of Service</h1>
            <p className="text-lg text-gray-500">Please read our terms before using the service.</p>
          </div>

          <div className="space-y-8 text-base md:text-lg text-gray-700 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">1. Acceptance of Terms</h2>
              <p>
                By accessing and using GrabIt, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our service.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">2. Use License</h2>
              <p>
                Permission is granted to temporarily download videos through GrabIt for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">3. User Obligations</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600">
                <li>Only download content you have rights to access</li>
                <li>Respect copyright and intellectual property rights</li>
                <li>Not use the service for commercial purposes without permission</li>
                <li>Not abuse or attempt to circumvent service limitations</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">4. Prohibited Uses</h2>
              <p>You may not use GrabIt to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600">
                <li>Download copyrighted content without permission</li>
                <li>Violate any laws or regulations</li>
                <li>Infringe on others' rights</li>
                <li>Distribute malware or harmful code</li>
                <li>Interfere with the service's operation</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">5. Service Modifications</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue the service at any time without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">6. Disclaimer of Warranties</h2>
              <p>
                The service is provided "as is" without any warranties, expressed or implied. We do not warrant that the service will be uninterrupted, secure, or error-free.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">7. Limitation of Liability</h2>
              <p>
                GrabIt shall not be liable for any damages arising from the use or inability to use the service, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">8. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless GrabIt from any claims, damages, losses, liabilities, and expenses arising from your use of the service or violation of these terms.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">9. Changes to Terms</h2>
              <p>
                We reserve the right to revise these terms at any time. By continuing to use the service after changes are posted, you agree to be bound by the revised terms.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">10. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us through our contact page.
              </p>
            </section>
            <p className="text-sm text-gray-500 pt-8 border-t border-gray-100">Last updated: July 31, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
