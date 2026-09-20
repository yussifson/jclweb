'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InquiryModal from '@/components/InquiryModal';
import { MOCK_SERVICES, COMPANY_INFO } from '@/data/mockData';
import { Building2, Compass, HardHat, Zap, CheckCircle2, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

export default function ServicesPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('real-estate');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return Building2;
      case 'Compass': return Compass;
      case 'HardHat': return HardHat;
      case 'Zap': return Zap;
      default: return Building2;
    }
  };

  const handleInquire = (serviceId: string) => {
    let s = 'real-estate';
    if (serviceId === 'service-2') s = 'land';
    if (serviceId === 'service-3') s = 'engineering';
    if (serviceId === 'service-4') s = 'tonefo';
    setSelectedService(s);
    setInquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#0466c8] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Full-Spectrum Real Estate &amp; Tonefo Electronics</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#001845] tracking-tight">
              Our Professional Services
            </h1>
            <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">
              From raw land acquisition and cadastral surveying to turnkey civil construction and trusted Tonefo electrical gadget sourcing.
            </p>
          </div>

          {/* 4 Pillars Deep Breakdown */}
          <div className="space-y-12 mb-16">
            {MOCK_SERVICES.map((service, index) => {
              const Icon = getIcon(service.iconName);
              const isTonefo = service.id === 'service-4';

              return (
                <div
                  id={isTonefo ? 'tonefo' : undefined}
                  key={service.id}
                  className={`rounded-3xl p-6 sm:p-10 border transition-all duration-300 ${
                    isTonefo
                      ? 'bg-gradient-to-r from-orange-50/50 via-white to-blue-50/30 border-[#FF5500]/30 shadow-card hover:shadow-neon'
                      : 'bg-white border-slate-100 shadow-card hover:shadow-float hover:border-blue-100'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left info */}
                    <div className="lg:col-span-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md ${
                        isTonefo ? 'bg-[#FF5500] text-white shadow-neon' : 'bg-[#0466c8] text-white'
                      }`}>
                        <Icon className="w-7 h-7" />
                      </div>

                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-black uppercase tracking-wider text-[#FF5500]">
                          Capability Pillar 0{index + 1}
                        </span>
                        {isTonefo && (
                          <span className="px-2.5 py-0.5 rounded-full bg-[#FF5500] text-white text-[10px] font-black uppercase">
                            Tonefo Division
                          </span>
                        )}
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold text-[#001845] mb-3 tracking-tight">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-bold text-slate-700 mb-4">
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
                            <CheckCircle2 className={`w-4 h-4 shrink-0 ${isTonefo ? 'text-[#FF5500]' : 'text-emerald-500'}`} />
                            <span className="font-medium">{d}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => handleInquire(service.id)}
                          className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full text-white text-xs font-extrabold transition-all shadow-md hover:scale-105 ${
                            isTonefo ? 'bg-[#FF5500] hover:bg-[#e04b00] shadow-neon' : 'bg-[#0466c8] hover:bg-[#034078]'
                          }`}
                        >
                          <span>{isTonefo ? 'Inquire Tonefo Products' : 'Engage Service'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <a
                          href={COMPANY_INFO.social.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm"
                        >
                          <MessageCircle className="w-4 h-4 fill-white" />
                          <span>WhatsApp Chat</span>
                        </a>
                      </div>
                    </div>

                    {/* Right: Step Workflow Grid */}
                    <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100">
                      <h3 className="text-xs font-black text-[#001845] uppercase tracking-wider mb-5">
                        Execution Methodology
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.workflow.map((w) => (
                          <div key={w.step} className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                            <span className={`text-xs font-black block mb-1 ${isTonefo ? 'text-[#FF5500]' : 'text-[#0466c8]'}`}>
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
