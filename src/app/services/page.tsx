'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InquiryModal from '@/components/InquiryModal';
import { MOCK_SERVICES } from '@/data/mockData';
import { Building2, Compass, HardHat, Calculator, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function ServicesPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('real-estate');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return Building2;
      case 'Compass': return Compass;
      case 'HardHat': return HardHat;
      case 'Calculator': return Calculator;
      default: return Building2;
    }
  };

  const handleInquire = (serviceId: string) => {
    let s = 'real-estate';
    if (serviceId === 'service-2') s = 'land';
    if (serviceId === 'service-3') s = 'engineering';
    if (serviceId === 'service-4') s = 'qs';
    setSelectedService(s);
    setInquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Full-Spectrum Real Estate &amp; Engineering</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Our Professional Capabilities
            </h1>
            <p className="mt-3 text-sm text-slate-500 max-w-2xl mx-auto">
              From raw land acquisition and cadastral surveying to turnkey civil construction and disciplined quantity surveying.
            </p>
          </div>

          {/* 4 Pillars Deep Breakdown */}
          <div className="space-y-12 mb-16">
            {MOCK_SERVICES.map((service, index) => {
              const Icon = getIcon(service.iconName);
              const isEven = index % 2 === 1;

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-card hover:shadow-float transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left info */}
                    <div className="lg:col-span-6">
                      <div className="w-14 h-14 rounded-2xl bg-brand-dark text-brand-gold flex items-center justify-center mb-6 shadow-sm">
                        <Icon className="w-7 h-7 text-[#C59B27]" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                        Capability Pillar 0{index + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-4">
                        {service.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Deliverables checklist */}
                      <div className="space-y-2 mb-6">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                          Key Deliverables:
                        </span>
                        {service.deliverables.map((d, i) => (
                          <div key={i} className="flex items-center space-x-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => handleInquire(service.id)}
                        className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-brand-dark text-white text-xs font-bold hover:bg-slate-800 transition-all shadow-md"
                      >
                        <span>Engage Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Right: Step Workflow Grid */}
                    <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100">
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-5">
                        Execution Methodology
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.workflow.map((w) => (
                          <div key={w.step} className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                            <span className="text-xs font-black text-brand-gold block mb-1">
                              STEP {w.step}
                            </span>
                            <h4 className="text-xs font-bold text-slate-900 mb-1">{w.title}</h4>
                            <p className="text-[11px] text-slate-500 leading-relaxed">{w.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />

      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
