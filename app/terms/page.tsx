import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service - grabit2me',
  description: 'Terms of Service for grabit2me video downloader service',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen py-24 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        <Link href="/" className="inline-flex  rounded-2xl items-center gap-2 px-4 py-2 bg-white border-3 border-[#1a1a1a] font-bold text-sm transition-all hover:shadow-md mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl  rounded-full font-black inline-block bg-primary border-3 border-[#1a1a1a] px-6 py-3 -rotate-1 shadow-md">Terms of Service</h1>
        </div>

        <div className="bg-white rounded-2xl border-3 border-[#1a1a1a] p-6 sm:p-8 shadow-lg space-y-6">
          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">1. Acceptance of Terms</h2>
            <p>
              By accessing and using grabit2me, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">2. Use License</h2>
            <p>
              Permission is granted to temporarily download videos through grabit2me for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">3. User Obligations</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Only download content you have rights to access</li>
              <li>Respect copyright and intellectual property rights</li>
              <li>Not use the service for commercial purposes without permission</li>
              <li>Not abuse or attempt to circumvent service limitations</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">4. Prohibited Uses</h2>
            <p>You may not use grabit2me to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Download copyrighted content without permission</li>
              <li>Violate any laws or regulations</li>
              <li>Infringe on others' rights</li>
              <li>Distribute malware or harmful code</li>
              <li>Interfere with the service's operation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">5. Service Modifications</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue the service at any time without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">6. Disclaimer of Warranties</h2>
            <p>
              The service is provided "as is" without any warranties, expressed or implied. We do not warrant that the service will be uninterrupted, secure, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">7. Limitation of Liability</h2>
            <p>
              grabit2me shall not be liable for any damages arising from the use or inability to use the service, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">8. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless grabit2me from any claims, damages, losses, liabilities, and expenses arising from your use of the service or violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">9. Changes to Terms</h2>
            <p>
              We reserve the right to revise these terms at any time. By continuing to use the service after changes are posted, you agree to be bound by the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">10. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us through our contact page.
            </p>
          </section>

          <p className="text-sm mt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}
