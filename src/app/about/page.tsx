'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InquiryModal from '@/components/InquiryModal';
import { MOCK_AGENTS } from '@/data/mockData';
import { Building2, ShieldCheck, Award, Users, Target, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Story Banner */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 mb-3">
              <Building2 className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>About JCL Royal Group</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Pioneering Surveyor-Led Real Estate &amp; Civil Engineering
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              JCL Royal Group is a diversified real estate, land development, and civil engineering firm committed to creating lasting value through litigation-free land allocation, architectural luxury, and financial predictability.
            </p>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-dark text-brand-gold flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-[#C59B27]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Corporate Mission</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To eliminate risk in property acquisition and land ownership by combining certified cadastral surveying, rigorous title verification, and transparent engineering execution for every client.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-dark text-brand-gold flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-[#C59B27]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Long-Term Vision</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To become the premier trusted developer and real estate authority across the region, recognized for master-planned communities, high-density commercial towers, and architectural longevity.
                </p>
              </div>
            </div>
          </div>

          {/* What Sets Us Apart */}
          <div className="bg-gradient-to-r from-slate-900 to-brand-dark rounded-4xl p-8 sm:p-12 text-white shadow-float mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold block mb-1">
                The JCL Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Why Discerning Clients Choose JCL Royal Group
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-8 h-8 text-brand-gold mb-3" />
                <h4 className="text-sm font-bold mb-2">Surveyor-Led Precision</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Unlike traditional brokers, our foundations are built on licensed cadastral surveyors who verify boundary coordinates before any transaction.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-8 h-8 text-brand-gold mb-3" />
                <h4 className="text-sm font-bold mb-2">100% Litigation-Free Title</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every parcel and residential listing is subjected to 3-tier statutory searches at the Lands Commission and relevant traditional authorities.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <Building2 className="w-8 h-8 text-brand-gold mb-3" />
                <h4 className="text-sm font-bold mb-2">Turnkey Civil Construction</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  From initial earthworks and structural concrete to quantity surveying cost controls, we oversee the entire development lifecycle.
                </p>
              </div>
            </div>
          </div>

          {/* Executive Leadership & Advisory Team */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Leadership Team
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Executive Leadership &amp; Senior Advisors
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                Seasoned professionals with deep expertise in property law, structural engineering, and quantity surveying.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {MOCK_AGENTS.map((member) => (
                <div key={member.id} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-card flex flex-col">
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 mb-4">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{member.name}</h4>
                  <span className="text-xs font-semibold text-blue-600 mb-2">{member.role}</span>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultService="real-estate"
      />
    </div>
  );
}
