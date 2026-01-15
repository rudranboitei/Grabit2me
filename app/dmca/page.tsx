import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'DMCA Policy - grabit2me',
  description: 'DMCA Policy for grabit2me video downloader service',
}

export default function DMCAPage() {
  return (
    <div className="min-h-screen py-24 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        <Link href="/" className="inline-flex  rounded-2xl items-center gap-2 px-4 py-2 bg-white border-3 border-[#1a1a1a] font-bold text-sm transition-all hover:shadow-md mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl  rounded-full font-black inline-block bg-[#c084fc] border-3 border-[#1a1a1a] px-6 py-3 -rotate-1 shadow-md text-white">DMCA Policy</h1>
        </div>

        <div className="bg-white rounded-2xl border-3 border-[#1a1a1a] p-6 sm:p-8 shadow-lg space-y-6">
          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">Digital Millennium Copyright Act Notice</h2>
            <p>
              grabit2me respects the intellectual property rights of others and expects our users to do the same. We comply with the provisions of the Digital Millennium Copyright Act (DMCA).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">Our Service</h2>
            <p>
              grabit2me is a tool that enables users to download publicly available content from various social media platforms. We do not host, store, or control the content that users download. Our service merely facilitates access to content that is already publicly available.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">Copyright Infringement Notification</h2>
            <p>
              If you believe that your copyrighted work has been accessed through our service in a way that constitutes copyright infringement, please provide us with the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A physical or electronic signature of the copyright owner or authorized representative</li>
              <li>Identification of the copyrighted work claimed to have been infringed</li>
              <li>Identification of the material that is claimed to be infringing, with sufficient detail</li>
              <li>Your contact information (address, telephone number, email address)</li>
              <li>A statement that you have a good faith belief that the use is not authorized by the copyright owner</li>
              <li>A statement, under penalty of perjury, that the information in the notification is accurate</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">Counter-Notification</h2>
            <p>
              If you believe that content you posted was removed in error, you may submit a counter-notification with the following:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your physical or electronic signature</li>
              <li>Identification of the material that has been removed</li>
              <li>A statement under penalty of perjury that you have a good faith belief that the material was removed by mistake</li>
              <li>Your name, address, and telephone number</li>
              <li>A statement consenting to jurisdiction of the federal court</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">Repeat Infringers</h2>
            <p>
              We may, in appropriate circumstances, disable or terminate accounts of users who are repeat infringers of copyright.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">Important Notice</h2>
            <p>
              Please note that grabit2me is a neutral service provider. We do not control or monitor the content that users choose to download. Content ownership remains with the original creators and platforms. Users are responsible for ensuring they have the right to download and use any content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 pb-2 border-b-3 border-[#1a1a1a]">Contact for DMCA Notices</h2>
            <p>
              Please send all DMCA notices and counter-notifications to our designated agent through our contact page. Include "DMCA Notice" in the subject line.
            </p>
          </section>

          <p className="text-sm mt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}
