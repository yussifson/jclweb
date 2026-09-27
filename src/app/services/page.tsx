'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import InquiryModal from '@/components/InquiryModal';
import { SERVICE_PILLARS } from '@/data/mockData';
import { Building2, Compass, HardHat, Zap, ShieldCheck, Target, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function ServicesPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('real-estate');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return Building2;
      case 'Compass': return Compass;
      case 'HardHat': return HardHat;
      case 'Zap': return Zap;
      case 'ShieldCheck': return ShieldCheck;
      case 'Target': return Target;
      default: return Building2;
    }
  };

  const handleInquire = (serviceId: string) => {
    let s = 'real-estate';
    if (serviceId === 'service-land') s = 'land';
    if (serviceId === 'service-construction') s = 'engineering';
    if (serviceId === 'service-tonefo') s = 'tonefo';
    if (serviceId === 'service-surveying') s = 'land';
    setSelectedService(s);
    setInquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#0466c8] selection:text-white">
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="flex-grow pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header (Tridloop Pattern) */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0466c8] text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Full-Spectrum Capabilities</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#001845] tracking-tight">
              Our Professional Services
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              From raw land acquisition and cadastral surveying to turnkey civil construction and trusted Tonefo electrical gadget sourcing across Ghana.
            </p>
          </div>

          {/* 4 Pillars Deep Breakdown */}
          <div className="space-y-12">
            {SERVICE_PILLARS.map((service, index) => {
              const Icon = getIcon(service.iconName);
              const isTonefo = service.id === 'service-tonefo';

              return (
                <div
                  id={isTonefo ? 'tonefo' : undefined}
                  key={service.id}
                  className="bg-white rounded-[32px] p-8 sm:p-10 border border-slate-200/90 shadow-xl hover:shadow-2xl hover:border-[#0466c8] transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    
                    {/* Left info */}
                    <div className="lg:col-span-6 space-y-5">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${
                        isTonefo ? 'bg-[#FF5500] text-white shadow-neon' : 'bg-[#0466c8] text-white'
                      }`}>
                        <Icon className="w-7 h-7" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black uppercase tracking-wider text-[#FF5500]">
                          Capability Pillar 0{index + 1}
                        </span>
                        {isTonefo && (
                          <span className="px-2.5 py-0.5 rounded-full bg-[#FF5500] text-white text-[10px] font-black uppercase">
                            Tonefo Division
                          </span>
                        )}
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001845] tracking-tight">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-bold text-slate-800">
                        {service.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                        {service.description}
                      </p>

                      {/* Deliverables checklist */}
                      <div className="pt-2 space-y-2 border-t border-slate-100">
                        <span className="text-xs font-extrabold text-[#001845] block uppercase tracking-wider">
                          Key Deliverables:
                        </span>
                        {service.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-start space-x-2 text-xs font-semibold text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#0466c8] shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => handleInquire(service.id)}
                          className="px-6 py-3 rounded-full bg-[#0466c8] hover:bg-[#0353a4] text-white text-xs font-bold transition-all shadow-md inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <span>Inquire on this Service</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Right Workflow Steps */}
                    <div className="lg:col-span-6 bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200/90 space-y-6">
                      <span className="text-xs font-black uppercase tracking-wider text-slate-400 block">
                        Standard Execution Process
                      </span>

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
