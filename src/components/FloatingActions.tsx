'use client';

import React, { useState } from 'react';
import { MessageCircle, Sparkles, X } from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';

interface FloatingActionsProps {
  onOpenInquiry: () => void;
}

export default function FloatingActions({ onOpenInquiry }: FloatingActionsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40 flex flex-col items-end space-y-3">
      {/* Expanded Quick Contact Menu */}
      {isOpen && (
        <div className="bg-white rounded-3xl p-4 shadow-2xl border border-slate-100 mb-2 flex flex-col space-y-2.5 animate-fadeIn w-64">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-800">Quick Assistance</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-full"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* WhatsApp Direct */}
          <a
            href={COMPANY_INFO.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-2.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <MessageCircle className="w-4 h-4 fill-white" />
            </div>
            <div className="flex flex-col">
              <span>Chat on WhatsApp</span>
              <span className="text-[10px] text-emerald-600 font-medium">+233 55 786 0299</span>
            </div>
          </a>

          {/* Inquiry Modal Trigger */}
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenInquiry();
            }}
            className="flex items-center space-x-3 p-2.5 rounded-2xl bg-blue-50 hover:bg-blue-100 text-[#0466c8] text-xs font-bold transition-all text-left"
          >
            <div className="w-8 h-8 rounded-full bg-[#0466c8] text-white flex items-center justify-center shrink-0 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#FF5500]" />
            </div>
            <div className="flex flex-col">
              <span>Book Site Tour / Inquiry</span>
              <span className="text-[10px] text-slate-500 font-medium">Fast 2-hour response</span>
            </div>
          </button>
        </div>
      )}

      {/* Floating Pill Buttons */}
      <div className="flex items-center space-x-2.5">
        {/* Floating WhatsApp Quick Trigger */}
        <a
          href={COMPANY_INFO.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-200 group relative"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#FF5500] rounded-full border-2 border-white animate-pulse" />
        </a>

        {/* Floating Inquiry Pill Button */}
        <button
          onClick={onOpenInquiry}
          className="px-5 py-3 rounded-full bg-[#0466c8] hover:bg-[#034078] text-white text-xs font-black shadow-xl flex items-center space-x-2 hover:scale-105 transition-all duration-200 border border-blue-400/30 ring-4 ring-blue-50"
        >
          <Sparkles className="w-4 h-4 text-[#FF5500]" />
          <span>Inquire Now</span>
        </button>
      </div>
    </div>
  );
}
