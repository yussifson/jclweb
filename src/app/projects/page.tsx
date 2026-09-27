'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import InquiryModal from '@/components/InquiryModal';
import { MOCK_PROJECTS } from '@/data/mockData';
import { Building2, Calendar, CheckCircle2, ArrowRight, Sparkles, Check } from 'lucide-react';

export default function ProjectsPage() {
  const [filterStatus, setFilterStatus] = useState('All');
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const filteredProjects = filterStatus === 'All'
    ? MOCK_PROJECTS
    : MOCK_PROJECTS.filter(p => p.status.toLowerCase() === filterStatus.toLowerCase());

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#0466c8] selection:text-white">
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="flex-grow pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header (Tridloop Pattern) */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0466c8] text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Track Record of Execution</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#001845] tracking-tight">
              Development Milestones &amp; Projects
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              Showcasing landmark residential enclaves, commercial facilities, and master-planned infrastructure delivered with structural precision across Ghana.
            </p>
          </div>

          {/* Status Filter Tabs */}
          <div className="flex items-center justify-center gap-2 pb-2">
            {['All', 'Completed', 'Under Construction'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                  filterStatus === status
                    ? 'bg-[#0466c8] text-white shadow-sm'
                    : 'bg-[#F8FAFC] text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {status === 'All' ? 'All Deliveries' : status}
              </button>
            ))}
          </div>

          {/* Project Showcase Cards */}
          <div className="space-y-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-[32px] overflow-hidden border border-slate-200/90 shadow-xl hover:shadow-2xl hover:border-[#0466c8] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch group"
              >
                {/* Project Image */}
                <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[340px] bg-[#001845] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#0466c8] shadow-sm">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#0466c8] text-white text-xs font-bold shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                      <div className="flex items-center gap-1 text-[#0466c8]">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{project.completionPeriod}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-extrabold text-[#001845] tracking-tight group-hover:text-[#0466c8] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-black text-[#FF5500] uppercase tracking-wide">
                      Scope: {project.scope}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      <span className="text-xs font-extrabold text-[#001845] block uppercase tracking-wider">
                        Key Structural Highlights:
                      </span>
                      {project.highlights.map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <Check className="w-4 h-4 text-[#0466c8] shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setInquiryOpen(true)}
                      className="px-6 py-3.5 rounded-full bg-[#0466c8] hover:bg-[#0353a4] text-white text-xs font-bold transition-all shadow-md inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Inquire on Similar Development</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
      <FloatingActions onOpenInquiry={() => setInquiryOpen(true)} />
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultService="engineering"
      />
    </div>
  );
}
