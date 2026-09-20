'use client';

import React from 'react';
import Image from 'next/image';
import { Bed, Bath, Square, Bookmark, ArrowUpRight, MapPin } from 'lucide-react';
import { Property } from '@/data/mockData';

interface PropertyCardProps {
  property: Property;
  onSelect?: (property: Property) => void;
  onQuickInquire?: (property: Property) => void;
}

export default function PropertyCard({ property, onSelect, onQuickInquire }: PropertyCardProps) {
  return (
    <div
      onClick={() => onSelect && onSelect(property)}
      className="group bg-white rounded-3xl p-3.5 border border-slate-100 shadow-card hover:shadow-float transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1 hover:border-blue-100"
    >
      {/* Image Thumbnail Container */}
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 mb-3.5">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* Status Badge with Neon Orange or Blue Accent */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold shadow-sm border backdrop-blur-md ${
            property.statusTag === 'Exclusive' || property.statusTag === 'Hot Deal'
              ? 'bg-[#FF5500] text-white border-[#FF5500]'
              : 'bg-white/95 text-[#0466c8] border-white/60'
          }`}>
            {property.statusTag}
          </span>
        </div>

        {/* Bookmark Icon */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-[#0466c8] hover:bg-white transition-colors shadow-sm"
          aria-label="Save property"
        >
          <Bookmark className="w-4 h-4" />
        </button>

        {/* Category Pill */}
        <div className="absolute bottom-3 right-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#001845]/70 backdrop-blur-md text-white">
            {property.category.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 px-1.5 pb-1">
        {/* Price & Action */}
        <div className="flex items-baseline justify-between mb-1.5">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-extrabold text-[#001845] tracking-tight">
              {property.priceFormatted}
            </span>
          </div>
          <span className="text-xs font-bold text-[#0466c8] group-hover:text-[#FF5500] flex items-center gap-0.5 transition-colors">
            Details <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Property Title */}
        <h3 className="font-bold text-slate-900 text-base line-clamp-1 group-hover:text-[#0466c8] transition-colors mb-2">
          {property.title}
        </h3>

        {/* Specs Row */}
        <div className="flex items-center gap-3 text-xs text-slate-600 py-2 border-y border-slate-100 mb-2.5">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1">
              <Bed className="w-3.5 h-3.5 text-[#0466c8]" />
              <span className="font-medium">{property.bedrooms} beds</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1">
              <Bath className="w-3.5 h-3.5 text-[#0466c8]" />
              <span className="font-medium">{property.bathrooms} baths</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Square className="w-3.5 h-3.5 text-[#0466c8]" />
            <span className="font-medium">{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        {/* Location & Address */}
        <div className="flex items-center justify-between mt-auto text-xs text-slate-500">
          <div className="flex items-center gap-1 line-clamp-1">
            <MapPin className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
            <span className="truncate">{property.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
