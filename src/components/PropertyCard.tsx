'use client';

import React from 'react';
import Image from 'next/image';
import { PropertyTypePortfolio } from '@/data/mockData';
import { Building2, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface PropertyCardProps {
  property: PropertyTypePortfolio;
  onInquire: (property: PropertyTypePortfolio) => void;
}

export default function PropertyCard({ property, onInquire }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-[32px] border border-slate-200/90 shadow-xl hover:shadow-2xl hover:border-[#0466c8] transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      
      {/* Top Media Container */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#001845] font-extrabold text-[11px] shadow-sm border border-white/40">
            {property.category}
          </span>
          <span className="px-3 py-1 rounded-full bg-[#0466c8] text-white font-bold text-[10px] shadow-sm tracking-wide uppercase">
            {property.type}
          </span>
        </div>

        {/* Bottom Tagline Overlay on Image */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <span className="text-xs font-semibold text-white/90 line-clamp-1 drop-shadow-sm">
            {property.tagline}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-5">
        <div className="space-y-3">
          <h3 className="text-xl font-extrabold text-[#001845] tracking-tight group-hover:text-[#0466c8] transition-colors">
            {property.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            {property.description}
          </p>

          {/* Specifications Pills */}
          <div className="pt-2 space-y-1.5 border-t border-slate-100">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Architectural &amp; Build Highlights
            </span>
            {property.specifications.slice(0, 3).map((spec, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0466c8] shrink-0" />
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button: Opens Inquiry Modal */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <div className="text-[11px] font-bold text-[#FF5500]">
            Custom Blueprint &amp; Turnkey
          </div>
          <button
            onClick={() => onInquire(property)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0466c8] hover:bg-[#0353a4] text-white font-bold text-xs transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Inquire on Build</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </button>
        </div>

      </div>
    </div>
  );
}
