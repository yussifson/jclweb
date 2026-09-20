'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InquiryModal from '@/components/InquiryModal';
import { MOCK_PROJECTS } from '@/data/mockData';
import { Building2, MapPin, Calendar, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function ProjectsPage() {
  const [filterStatus, setFilterStatus] = useState('All');
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const filteredProjects = filterStatus === 'All'
    ? MOCK_PROJECTS
    : MOCK_PROJECTS.filter(p => p.status.toLowerCase() === filterStatus.toLowerCase());

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#0466c8] mb-3">
              <Building2 className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Track Record of Delivery</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#001845] tracking-tight">
              Development Portfolio &amp; Projects
            </h1>
            <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">
              Showcasing landmark residential communities, commercial hubs, and master-planned land subdivisions delivered across Ghana.
            </p>
          </div>

          {/* Status Filter Tabs */}
          <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-4 mb-10">
            {['All', 'Completed', 'Under Construction'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${
                  filterStatus === status
                    ? 'bg-[#0466c8] text-white shadow-md'
                    : 'bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-[#0466c8] border border-slate-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Project Showcase Cards */}
          <div className="space-y-10 mb-16">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-card hover:shadow-float transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch group hover:border-blue-100"
              >
                {/* Project Image */}
                <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[300px] bg-[#001845] overflow-hidden">
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
                    <span className="px-3.5 py-1.5 rounded-full bg-[#FF5500] text-white text-xs font-bold shadow-neon">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                        <span className="font-semibold text-slate-700">{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#0466c8]" />
                        <span>Year: {project.completionYear}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-[#001845] mb-2 group-hover:text-[#0466c8] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-bold text-[#0466c8] mb-3">
                      Scope: {project.scope}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 mb-6">
                      {project.highlights.map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => setInquiryOpen(true)}
                      className="px-6 py-3 rounded-full bg-[#0466c8] hover:bg-[#034078] text-white text-xs font-bold transition-all flex items-center space-x-2 shadow-sm hover:scale-105"
                    >
                      <span>Inquire About Similar Developments</span>
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

      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultService="engineering"
      />
    </div>
  );
}
