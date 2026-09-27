'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import InquiryModal from '@/components/InquiryModal';
import { LAND_CATEGORIES_PORTFOLIO, LandCategoryPortfolio } from '@/data/mockData';
import { Compass, CheckCircle2, ShieldCheck, Check, FileCheck, ArrowRight, Layers } from 'lucide-react';

export default function LandPage() {
  const [selectedZoning, setSelectedZoning] = useState('All');
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<LandCategoryPortfolio | null>(null);

  const categories = ['All', 'Residential', 'Commercial', 'Gated Community', 'Industrial'];

  const filteredLand = selectedZoning === 'All'
    ? LAND_CATEGORIES_PORTFOLIO
    : LAND_CATEGORIES_PORTFOLIO.filter(l => l.zoning.toLowerCase() === selectedZoning.toLowerCase());

  const handleInquireLand = (land: LandCategoryPortfolio) => {
    setSelectedCategory(land);
    setInquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#0466c8] selection:text-white">
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="flex-grow pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Page Header (Tridloop Pattern) */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0466c8] text-xs font-bold uppercase tracking-wider shadow-xs">
              <Compass className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>100% Litigation-Free Cadastral Land</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#001845] tracking-tight">
              Titled Land &amp; Master-Planned Acreage
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              Authentically registered, surveyed with differential GPS, and backed by verified Lands Commission search documents. Ready for immediate construction across prime corridors.
            </p>
          </div>

          {/* 3 Trust Guarantees Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F8FAFC] rounded-3xl p-7 border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0466c8] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#001845]">Litigation-Free Guarantee</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Every acre undergoes thorough statutory searches at the Lands Commission and stool verification with zero overlapping claims.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-3xl p-7 border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FF5500]/10 text-[#FF5500] flex items-center justify-center font-bold">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#001845]">Barcoded Cadastral Plans</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Boundary demarcations with concrete pillars and official barcoded site plans signed by licensed surveyors.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-3xl p-7 border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0466c8] flex items-center justify-center font-bold">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#001845]">Infrastructure Ready</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Graded access roads, electrical distribution lines, and ready water conduits for immediate building development.
              </p>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((zoning) => (
              <button
                key={zoning}
                onClick={() => setSelectedZoning(zoning)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${
                  selectedZoning === zoning
                    ? 'bg-[#0466c8] text-white shadow-sm'
                    : 'bg-[#F8FAFC] text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {zoning === 'All' ? 'All Land Portfolios' : `${zoning} Land`}
              </button>
            ))}
          </div>

          {/* Land Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredLand.map((land) => (
              <div
                key={land.id}
                className="bg-white rounded-[32px] border border-slate-200/90 shadow-xl hover:shadow-2xl hover:border-[#0466c8] transition-all duration-300 p-7 flex flex-col justify-between group space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[#0466c8] text-xs font-black border border-blue-100">
                      {land.zoning}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{land.titleStatus}</span>
                    </span>
                  </div>

                  <div className="relative h-60 rounded-2xl overflow-hidden bg-slate-100">
                    <Image
                      src={land.image}
                      alt={land.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-xl font-extrabold text-[#001845] tracking-tight">
                    {land.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {land.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-700">
                    {land.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#0466c8] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-600 space-y-1">
                    <strong className="text-[#001845] block">Plot Allocation Units:</strong>
                    <span>{land.allocationSizes}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleInquireLand(land)}
                    className="w-full py-3.5 rounded-full bg-[#0466c8] hover:bg-[#0353a4] text-white font-extrabold text-xs transition-all shadow-md flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    <span>Schedule Land Inspection Tour</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Site Inspection Consultation Card */}
          <div className="bg-gradient-to-br from-[#001845] via-[#0466c8] to-[#001233] text-white rounded-[36px] p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden border border-blue-400/20">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-400/15 blur-3xl pointer-events-none" />
            <div className="space-y-2 max-w-2xl text-center md:text-left relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
                <span>Free Guided Inspection (Monday – Saturday)</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                Inspect Your Parcel with a Certified Surveyor
              </h4>
              <p className="text-xs sm:text-sm text-blue-100 font-medium leading-relaxed">
                We provide transport from our office to inspect the land, confirm concrete boundary pillars, and review Lands Commission records in person or via live HD video walkthrough for diaspora clients.
              </p>
            </div>
            <div className="shrink-0 relative z-10">
              <button
                onClick={() => setInquiryOpen(true)}
                className="px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#001845] font-extrabold text-sm transition-all shadow-xl inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book Guided Tour</span>
                <ArrowRight className="w-4 h-4 text-[#0466c8]" />
              </button>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <FloatingActions onOpenInquiry={() => setInquiryOpen(true)} />
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultService="land"
      />
    </div>
  );
}
