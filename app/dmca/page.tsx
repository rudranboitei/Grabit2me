import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'DMCA Policy - GrabIt2Me',
  description: 'DMCA Policy for GrabIt social media downloader service',
};

export default function DmcaPage() {
  return (
    <div className="min-h-screen bg-white text-black py-16 sm:py-24">
      <div className="container max-w-3xl mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">DMCA Policy</h1>
            <p className="text-lg text-gray-500">Our compliance guidelines for the Digital Millennium Copyright Act.</p>
          </div>

          <div className="space-y-8 text-base md:text-lg text-gray-700 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Digital Millennium Copyright Act Notice</h2>
              <p>
                GrabIt respects the intellectual property rights of others and expects our users to do the same. We comply with the provisions of the Digital Millennium Copyright Act (DMCA).
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Our Service</h2>
              <p>
                GrabIt is a tool that enables users to download publicly available content from social media platforms. We do not host, store, or control the content that users download. Our service merely facilitates access to content that is already publicly available.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Copyright Infringement Notification</h2>
              <p>
                If you believe that your copyrighted work has been accessed through our service in a way that constitutes copyright infringement, please provide us with the following information:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600">
                <li>A physical or electronic signature of the copyright owner or authorized representative</li>
                <li>Identification of the copyrighted work claimed to have been infringed</li>
                <li>Identification of the material that is claimed to be infringing, with sufficient detail</li>
                <li>Your contact information (address, telephone number, email address)</li>
                <li>A statement that you have a good faith belief that the use is not authorized by the copyright owner</li>
                <li>A statement, under penalty of perjury, that the information in the notification is accurate</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Counter-Notification</h2>
              <p>
                If you believe that content you posted was removed in error, you may submit a counter-notification with the following:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600">
                <li>Your physical or electronic signature</li>
                <li>Identification of the material that has been removed</li>
                <li>A statement under penalty of perjury that you have a good faith belief that the material was removed by mistake</li>
                <li>Your name, address, and telephone number</li>
                <li>A statement consenting to jurisdiction of the federal court</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Repeat Infringers</h2>
              <p>
                We may, in appropriate circumstances, disable or terminate access of users who are repeat infringers of copyright.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Important Notice</h2>
              <p>
                Please note that GrabIt is a neutral service provider. We do not control or monitor the content that users choose to download. Content ownership remains with the original creators and platforms. Users are responsible for ensuring they have the right to download and use any content.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Contact for DMCA Notices</h2>
              <p>
                Please send all DMCA notices and counter-notifications to our designated agent through our contact page. Include "DMCA Notice" in the subject line.
              </p>
            </section>
            <p className="text-sm text-gray-500 pt-8 border-t border-gray-100">Last updated: July 31, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
