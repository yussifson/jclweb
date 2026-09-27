'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { MOCK_FAQS } from '@/data/mockData';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {MOCK_FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={faq.id}
            className={`rounded-3xl border transition-all duration-300 p-6 ${
              isOpen
                ? 'bg-white border-[#0466c8] shadow-xl shadow-[#0466c8]/5'
                : 'bg-[#F8FAFC] border-slate-200/90 hover:border-slate-300'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleFAQ(idx)}
              className="w-full flex items-center justify-between text-left group focus:outline-none"
            >
              <div className="flex items-center gap-3 pr-4">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-xs transition-colors ${
                  isOpen ? 'bg-[#0466c8] text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  0{idx + 1}
                </span>
                <span className={`text-base sm:text-lg font-extrabold transition-colors ${
                  isOpen ? 'text-[#001845]' : 'text-slate-800 group-hover:text-[#0466c8]'
                }`}>
                  {faq.question}
                </span>
              </div>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center border shrink-0 transition-all ${
                isOpen
                  ? 'bg-[#0466c8] text-white border-[#0466c8] rotate-180 shadow-xs'
                  : 'bg-white text-slate-500 border-slate-200 group-hover:border-[#0466c8] group-hover:text-[#0466c8]'
              }`}>
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed animate-fadeIn">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
