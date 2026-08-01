'use client';

import { useState } from 'react';

const faqs = [
  { question: "How does GrabIt work?", answer: "Simply paste the URL of the media you want to download, click 'Fetch', and once the media is processed, select your preferred quality/format to download." },
  { question: "Which platforms are supported?", answer: "Currently, we support Instagram and X (Twitter)." },
  { question: "Is GrabIt free to use?", answer: "Yes! GrabIt is completely free to use. No registration, no subscriptions, no hidden fees." },
  { question: "Are there watermarks on downloaded videos?", answer: "No, we do not add any watermarks to downloaded videos or images." },
  { question: "Do you store the videos I download?", answer: "No, we do not store any videos. All processing happens in real-time on our servers." },
  { question: "Can I download videos in bulk?", answer: "Currently, we process one video at a time to ensure quality and prevent server overload." },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-3xl mx-auto pt-16 pb-16 px-4 flex flex-col items-center relative z-10">
      <h2 className="text-[40px] md:text-[56px] font-[730] tracking-[-0.4px] text-[#1b1c1c] leading-[110%] mb-4 text-center max-w-xl">
        Frequently<br/>asked questions
      </h2>
      <p className="text-[18px] md:text-[22px] font-[500] text-[#1b1c1c] mb-12 text-center">
        Got questions? I've got the answers
      </p>

      <div className="w-full space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx} 
              className="bg-[#fbfeff] rounded-[40px] shadow-[inset_0px_-4px_4px_0px_rgb(210,203,198)] border-2 border-[rgba(199,196,194,0.2)] overflow-hidden cursor-pointer transition-all duration-300"
            >
              <div 
                className="w-full px-6 py-4 md:px-8 md:py-[18px] flex items-center justify-between"
                onClick={() => toggleFaq(idx)}
              >
                <h3 className="text-[16px] md:text-[18px] font-[730] text-[#1b1c1c] pr-4 select-none">
                  {faq.question}
                </h3>
                <div className={`shrink-0 w-8 h-8 rounded-full bg-[#1b1c1c] flex items-center justify-center text-white transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              {isOpen && (
                <div className="px-6 md:px-8 pb-6 pt-0 text-[16px] md:text-[18px] text-[#1b1c1c]/80 leading-relaxed font-normal">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
