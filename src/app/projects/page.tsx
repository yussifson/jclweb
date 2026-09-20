'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InquiryModal from '@/components/InquiryModal';
import { MOCK_PROJECTS, ProjectItem } from '@/data/mockData';
import { Building2, MapPin, Calendar, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function ProjectsPage() {
  const [filterStatus, setFilterStatus] = useState('All');
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const filteredProjects = filterStatus === 'All'
    ? MOCK_PROJECTS
    : MOCK_PROJECTS.filter(p => p.status.toLowerCase() === filterStatus.toLowerCase());

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 mb-3">
              <Building2 className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Track Record of Execution</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Development Portfolio &amp; Projects
            </h1>
            <p className="mt-3 text-sm text-slate-500 max-w-2xl mx-auto">
              Showcasing landmark residential communities, commercial towers, and master-planned land allocations delivered by JCL Royal Group.
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
                    ? 'bg-brand-dark text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Project Showcase Cards */}
          <div className="space-y-10 mb-16">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-card hover:shadow-float transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch group"
              >
                {/* Project Image */}
                <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[300px] bg-slate-900 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-slate-800 shadow-sm">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-blue-600" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>Year: {project.completionYear}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs font-bold text-slate-700 mb-3">
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
                      className="px-6 py-3 rounded-full bg-brand-dark text-white text-xs font-bold hover:bg-slate-800 transition-all flex items-center space-x-2 shadow-sm"
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
