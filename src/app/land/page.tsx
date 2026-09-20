'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InquiryModal from '@/components/InquiryModal';
import { MOCK_LAND, LandParcel } from '@/data/mockData';
import { Compass, CheckCircle2, ShieldCheck, MapPin, Maximize2, FileText, ArrowRight, Sparkles } from 'lucide-react';

export default function LandPage() {
  const [selectedZoning, setSelectedZoning] = useState('All');
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedParcel, setSelectedParcel] = useState<LandParcel | null>(null);

  const filteredLand = selectedZoning === 'All'
    ? MOCK_LAND
    : MOCK_LAND.filter(l => l.zoning.toLowerCase() === selectedZoning.toLowerCase());

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 mb-3">
              <Compass className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Cadastral Surveyed &amp; Registered Parcels</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Titled Land &amp; Development Acreage
            </h1>
            <p className="mt-3 text-sm text-slate-500 max-w-2xl mx-auto">
              Guaranteed 100% litigation-free land offerings with barcoded cadastral plans, verified Lands Commission registration, and road infrastructure.
            </p>
          </div>

          {/* Guarantee Banner */}
          <div className="bg-gradient-to-r from-brand-dark to-slate-900 text-white rounded-3xl p-6 sm:p-8 mb-12 shadow-card border border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-800">
              <div className="flex items-start space-x-3.5 pt-4 md:pt-0">
                <ShieldCheck className="w-8 h-8 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Litigation-Free Guarantee</h4>
                  <p className="text-xs text-slate-400 mt-1">Multi-tier statutory searches at the Lands Commission before every allocation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3.5 pt-4 md:pt-0 md:pl-6">
                <FileText className="w-8 h-8 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Barcoded Cadastral Plans</h4>
                  <p className="text-xs text-slate-400 mt-1">GNSS / RTK boundary pillars demarcated by licensed surveyors.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3.5 pt-4 md:pt-0 md:pl-6">
                <Maximize2 className="w-8 h-8 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Zoned &amp; Road Ready</h4>
                  <p className="text-xs text-slate-400 mt-1">Direct access to arterial road networks and municipal utility corridors.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Chips */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8">
            {['All', 'Residential', 'Commercial', 'Mixed-Use', 'Industrial'].map((zoning) => (
              <button
                key={zoning}
                onClick={() => setSelectedZoning(zoning)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${
                  selectedZoning === zoning
                    ? 'bg-brand-dark text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {zoning} Parcels
              </button>
            ))}
          </div>

          {/* Land Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {filteredLand.map((parcel) => (
              <div
                key={parcel.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-card hover:shadow-float transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={parcel.image}
                      alt={parcel.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-slate-800 shadow-sm">
                        {parcel.zoning}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold shadow-sm">
                        {parcel.titleStatus}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-2xl font-black text-slate-900 tracking-tight">
                        {parcel.priceFormatted}
                      </span>
                      <span className="text-xs font-bold text-slate-500">{parcel.acreage}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {parcel.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{parcel.location}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {parcel.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      {parcel.highlights.map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => {
                      setSelectedParcel(parcel);
                      setInquiryOpen(true);
                    }}
                    className="w-full py-3 rounded-full bg-brand-dark text-white text-xs font-bold hover:bg-slate-800 transition-all flex items-center justify-center space-x-2 shadow-sm"
                  >
                    <span>Request Site Survey &amp; Indenture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Land Acquisition Process Workflow */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-card">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Transparent Step-by-Step
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Land Acquisition &amp; Titling Process
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Site Inspection & Cadastral Mapping', desc: 'Visit the demarcated site with our licensed surveyor to inspect boundary pillars.' },
                { step: '02', title: 'Statutory Registry Search', desc: 'Execution of 3-tier search at the Lands Commission and traditional council.' },
                { step: '03', title: 'Indenture & Site Plan Execution', desc: 'Preparation of certified barcoded site plans and legal deed of assignment.' },
                { step: '04', title: 'Lands Commission Titling', desc: 'Submission for yellow card registration and final Land Title Certificate.' },
              ].map((item) => (
                <div key={item.step} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col">
                  <span className="text-2xl font-black text-brand-gold mb-2">{item.step}</span>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
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
        defaultService="land"
      />
    </div>
  );
}
