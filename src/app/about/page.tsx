'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import InquiryModal from '@/components/InquiryModal';
import AgentCard from '@/components/AgentCard';
import { MOCK_AGENTS, COMPANY_INFO } from '@/data/mockData';
import { Building2, ShieldCheck, Award, Target, CheckCircle2, Zap, ArrowRight, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#0466c8] selection:text-white">
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="flex-grow pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header (Tridloop Pattern) */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0466c8] text-xs font-bold uppercase tracking-wider shadow-xs">
              <Building2 className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>About JCL Royal Group</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#001845] tracking-tight">
              Pioneering Trusted Real Estate &amp; Land Development
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              JCL Royal Group is a diversified real estate and land development company committed to dependable property solutions, litigation-free land acquisition, civil construction support, and trusted Tonefo electronics across Ghana.
            </p>
          </div>

          {/* CEO / Founder Profile (Tridloop Senior Leadership Card Pattern) */}
          <div className="bg-[#F8FAFC] rounded-[36px] p-8 sm:p-12 border border-slate-200/90 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0466c8] bg-slate-900">
                  <Image
                    src={COMPANY_INFO.ceo.image}
                    alt="Mr. Eric Kwaw, CEO & Founder"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 text-center">
                    <span className="text-base font-extrabold text-white block">Mr. Eric Kwaw</span>
                    <span className="text-xs text-[#FF5500] font-bold uppercase">CEO &amp; Founder</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0466c8]/10 text-[#0466c8] text-xs font-black uppercase">
                  Executive Leadership
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#001845] tracking-tight">
                  Mr. Eric Kwaw
                </h2>
                <p className="text-base font-bold text-[#0466c8]">
                  {COMPANY_INFO.ceo.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {COMPANY_INFO.ceo.bio}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setInquiryOpen(true)}
                    className="px-8 py-4 rounded-full bg-[#0466c8] hover:bg-[#0353a4] text-white text-xs sm:text-sm font-extrabold transition-all shadow-xl shadow-[#0466c8]/25 inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Consult with Executive Leadership</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-slate-200/90 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0466c8] flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#001845]">Our Corporate Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                To eliminate risk in property acquisition and land ownership by combining certified cadastral surveying, rigorous Lands Commission search verifications, and quality construction management for every client.
              </p>
            </div>

            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-slate-200/90 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF5500]/10 text-[#FF5500] flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#001845]">Our Long-Term Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                To become the premier trusted real estate and master development brand across West Africa, recognized for litigation-free residential enclaves, commercial towers, and architectural longevity.
              </p>
            </div>
          </div>

          {/* Advisory Team */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0466c8] border border-blue-100 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0466c8]" />
                <span>Executive &amp; Advisory Team</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#001845]">
                Chartered Surveyors, Engineers &amp; Advisors
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {MOCK_AGENTS.map((agent) => (
                <AgentCard
                  key={agent.id}
                  agent={agent}
                  onContact={() => setInquiryOpen(true)}
                />
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <FloatingActions onOpenInquiry={() => setInquiryOpen(true)} />
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultService="real-estate"
      />
    </div>
  );
}
