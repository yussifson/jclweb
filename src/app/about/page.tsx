'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import InquiryModal from '@/components/InquiryModal';
import { MOCK_AGENTS, COMPANY_INFO } from '@/data/mockData';
import { Building2, ShieldCheck, Award, Target, CheckCircle2, Zap } from 'lucide-react';

export default function AboutPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#FF5500] selection:text-white">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Story Banner */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#0466c8] mb-3 shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>About JCL Royal Group Ltd</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#001845] tracking-tight">
              Pioneering Trusted Real Estate &amp; Land Development
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              JCL Royal Group is a diversified real estate and land development company committed to dependable property solutions, litigation-free land acquisition, civil construction support, and trusted electronics sourcing across Ghana.
            </p>
          </div>

          {/* CEO / Founder Profile */}
          <div className="bg-gradient-to-r from-[#032d60] via-[#0466c8] to-[#001845] text-white rounded-4xl p-8 sm:p-12 mb-16 shadow-float overflow-hidden relative border border-blue-400/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7">
                <span className="text-xs font-black uppercase tracking-wider text-[#FF5500] bg-white/10 px-3.5 py-1 rounded-full inline-block mb-3">
                  Executive Leadership
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
                  Mr. Eric Kwaw
                </h2>
                <p className="text-base font-bold text-blue-100 mb-4">
                  {COMPANY_INFO.ceo.tagline}
                </p>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed mb-6 max-w-xl">
                  {COMPANY_INFO.ceo.bio}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setInquiryOpen(true)}
                    className="px-6 py-3 rounded-full bg-[#FF5500] hover:bg-[#e04b00] text-white text-xs font-black transition-all shadow-neon hover:scale-105"
                  >
                    Consult with Executive Team
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 ring-4 ring-[#FF5500]/30 bg-slate-900">
                  <Image
                    src={COMPANY_INFO.ceo.image}
                    alt="Mr. Eric Kwaw, CEO & Founder"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-center">
                    <span className="text-sm font-black text-white block">Mr. Eric Kwaw</span>
                    <span className="text-xs text-[#FF5500] font-bold uppercase">CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0466c8] text-white flex items-center justify-center mb-6 shadow-sm">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#001845] mb-3">Our Corporate Mission</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To eliminate risk in property acquisition and land ownership by combining certified cadastral surveying, rigorous Lands Commission search verifications, and quality construction management for every client.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FF5500] text-white flex items-center justify-center mb-6 shadow-neon">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#001845] mb-3">Our Long-Term Vision</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To become the premier trusted real estate and master development brand across West Africa, recognized for litigation-free residential enclaves, commercial towers, and architectural longevity.
                </p>
              </div>
            </div>
          </div>

          {/* Core Strengths */}
          <div className="bg-slate-50 rounded-4xl p-8 sm:p-12 mb-16 border border-slate-100">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#FF5500] block mb-1">
                Core Strengths
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001845] tracking-tight">
                The JCL Royal Group Advantage
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <ShieldCheck className="w-8 h-8 text-[#0466c8] mb-3" />
                <h4 className="text-sm font-bold text-slate-900 mb-2">Surveyor-Led Due Diligence</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our foundations are built on licensed cadastral surveyors who verify boundary coordinates, beacon pillars, and statutory registries before any allocation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-[#FF5500] mb-3" />
                <h4 className="text-sm font-bold text-slate-900 mb-2">100% Litigation-Free Guarantee</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every parcel and home is subjected to 3-tier statutory registry verification at the Lands Commission and traditional councils.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <Zap className="w-8 h-8 text-[#FF5500] mb-3" />
                <h4 className="text-sm font-bold text-slate-900 mb-2">Tonefo Gadgets &amp; Smart Tech</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We supply, install, and support quality home electrical gadgets and energy accessories with full warranties and dedicated after-sales care.
                </p>
              </div>
            </div>
          </div>

          {/* Advisory Team */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#0466c8] block mb-1">
                Advisory Team
              </span>
              <h2 className="text-3xl font-extrabold text-[#001845] tracking-tight">
                Consultants &amp; Technical Leads
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {MOCK_AGENTS.map((member) => (
                <div key={member.id} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-card flex flex-col hover:border-blue-100 transition-all">
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 mb-4 ring-1 ring-blue-100">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{member.name}</h4>
                  <span className="text-xs font-bold text-[#0466c8] mb-2">{member.role}</span>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{member.bio}</p>
                </div>
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
