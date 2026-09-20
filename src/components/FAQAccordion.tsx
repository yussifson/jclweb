'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { MOCK_FAQS, FAQItem } from '@/data/mockData';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto divide-y divide-slate-200">
      {MOCK_FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={faq.id} className="py-5 transition-colors">
            <button
              type="button"
              onClick={() => toggleFAQ(idx)}
              className="w-full flex items-center justify-between text-left group focus:outline-none"
            >
              <span className={`text-base md:text-lg font-bold transition-colors ${
                isOpen ? 'text-brand-dark' : 'text-slate-800 group-hover:text-blue-600'
              }`}>
                {faq.question}
              </span>
              <span className={`ml-4 w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                isOpen
                  ? 'bg-brand-dark text-white border-brand-dark rotate-180'
                  : 'bg-white text-slate-500 border-slate-200 group-hover:border-slate-400'
              }`}>
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div className="mt-4 pt-2 grid grid-cols-1 md:grid-cols-12 gap-6 items-start text-sm text-slate-600 leading-relaxed animate-fadeIn">
                <div className={faq.imagePreview ? 'md:col-span-8' : 'md:col-span-12'}>
                  <p>{faq.answer}</p>
                </div>
                {faq.imagePreview && (
                  <div className="md:col-span-4 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-sm bg-slate-100">
                    <Image
                      src={faq.imagePreview}
                      alt={faq.question}
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
