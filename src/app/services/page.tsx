'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import InquiryModal from '@/components/InquiryModal';
import { SERVICE_PILLARS, ServicePillar } from '@/data/mockData';
import {
  Building2,
  Compass,
  HardHat,
  Zap,
  ShieldCheck,
  Target,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Palette,
  Check,
  PhoneCall
} from 'lucide-react';

export default function ServicesPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('real-estate');
  const [activeFilter, setActiveFilter] = useState('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return Building2;
      case 'Compass': return Compass;
      case 'HardHat': return HardHat;
      case 'Zap': return Zap;
      case 'ShieldCheck': return ShieldCheck;
      case 'Target': return Target;
      case 'Sparkles': return Sparkles;
      case 'Palette': return Palette;
      default: return Building2;
    }
  };

  const handleInquire = (serviceId: string) => {
    let s = 'real-estate';
    if (serviceId === 'service-land') s = 'land';
    if (serviceId === 'service-construction') s = 'engineering';
    if (serviceId === 'service-interior-deco') s = 'interior-deco';
    if (serviceId === 'service-tonefo') s = 'tonefo';
    if (serviceId === 'service-surveying') s = 'land';
    setSelectedService(s);
    setInquiryOpen(true);
  };

  const filterTabs = [
    { id: 'all', label: 'All 5 Core Services' },
    { id: 'service-land', label: 'Titled Land Sales' },
    { id: 'service-construction', label: 'Civil Construction' },
    { id: 'service-interior-deco', label: 'Interior Decoration' },
    { id: 'service-tonefo', label: 'Tonefo Gadgets' },
    { id: 'service-surveying', label: 'Cadastral Surveying' },
  ];

  const displayedServices = activeFilter === 'all'
    ? SERVICE_PILLARS
    : SERVICE_PILLARS.filter(s => s.id === activeFilter);

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#0466c8] selection:text-white">
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="flex-grow pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header (Tridloop Pattern) */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0466c8] text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Full-Spectrum Development Ecosystem</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#001845] tracking-tight">
              Our Professional Services
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              From litigation-free land acquisition and cadastral surveying to turnkey civil construction, luxury interior decoration, and trusted Tonefo smart gadgets across Ghana.
            </p>
          </div>

          {/* Quick Filter Pill Tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${
                  activeFilter === tab.id
                    ? 'bg-[#0466c8] text-white shadow-sm'
                    : 'bg-[#F8FAFC] text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 5 Pillars Deep Breakdown Cards */}
          <div className="space-y-14">
            {displayedServices.map((service, index) => {
              const Icon = getIcon(service.iconName);
              const isTonefo = service.id === 'service-tonefo';
              const isDeco = service.id === 'service-interior-deco';

              return (
                <div
                  id={service.id}
                  key={service.id}
                  className="bg-white rounded-[36px] overflow-hidden border border-slate-200/90 shadow-xl hover:shadow-2xl hover:border-[#0466c8] transition-all duration-300 group"
                >
                  {/* Top Image Banner with Visual Context */}
                  <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#001845] text-xs font-black shadow-md border border-white/40">
                        <span>Pillar 0{SERVICE_PILLARS.findIndex(s => s.id === service.id) + 1}</span>
                      </div>
                      {service.badge && (
                        <span className={`px-4 py-1.5 rounded-full text-white text-xs font-bold shadow-md uppercase tracking-wider ${
                          isTonefo || isDeco ? 'bg-[#FF5500]' : 'bg-[#0466c8]'
                        }`}>
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                      <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight drop-shadow-md">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-200 font-medium line-clamp-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    
                    {/* Left Column: Description & Deliverables */}
                    <div className="lg:col-span-6 space-y-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md ${
                          isTonefo || isDeco ? 'bg-[#FF5500] text-white' : 'bg-[#0466c8] text-white'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-black uppercase tracking-wider text-[#FF5500] block">
                            Service Overview
                          </span>
                          <h3 className="text-xl font-extrabold text-[#001845]">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                        {service.description}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="space-y-2.5 pt-4 border-t border-slate-100">
                        <span className="text-xs font-extrabold text-[#001845] block uppercase tracking-wider">
                          Key Deliverables &amp; Guarantees:
                        </span>
                        {service.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-start space-x-2.5 text-xs font-semibold text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#0466c8] shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => handleInquire(service.id)}
                          className="px-8 py-3.5 rounded-full bg-[#0466c8] hover:bg-[#0353a4] text-white text-xs sm:text-sm font-extrabold transition-all shadow-xl shadow-[#0466c8]/25 inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <span>Inquire on {service.title.split(' ')[0]}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Right Column: Execution Workflow Steps */}
                    <div className="lg:col-span-6 bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200/90 space-y-6">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                        <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                          Execution &amp; Delivery Workflow
                        </span>
                        <span className="text-[11px] font-bold text-[#0466c8]">
                          3-Phase Structured Process
                        </span>
                      </div>

                      <div className="space-y-6">
                        {service.workflow.map((wStep) => (
                          <div key={wStep.step} className="flex items-start space-x-4">
                            <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 text-[#0466c8] font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                              {wStep.step}
                            </div>
                            <div className="space-y-1">
                              <h4 className="text-sm font-extrabold text-[#001845]">
                                {wStep.title}
                              </h4>
                              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                {wStep.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct Consultation Banner */}
          <div className="bg-gradient-to-br from-[#001845] via-[#0466c8] to-[#001233] text-white rounded-[36px] p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden border border-blue-400/20">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-400/15 blur-3xl pointer-events-none" />
            <div className="space-y-2 max-w-2xl text-center md:text-left relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                <Check className="w-4 h-4 text-[#FF5500]" />
                <span>Custom Turnkey &amp; Design Proposals</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                Need a Custom Package Combining Land, Building &amp; Interior Deco?
              </h4>
              <p className="text-xs sm:text-sm text-blue-100 font-medium leading-relaxed">
                We provide integrated turnkey contracts combining land acquisition, structural engineering, interior fit-outs, and Tonefo smart automation under a single accountable team.
              </p>
            </div>
            <div className="shrink-0 relative z-10">
              <button
                onClick={() => {
                  setSelectedService('real-estate');
                  setInquiryOpen(true);
                }}
                className="px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#001845] font-extrabold text-sm transition-all shadow-xl inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Request Integrated Proposal</span>
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
        defaultService={selectedService}
      />
    </div>
  );
}
