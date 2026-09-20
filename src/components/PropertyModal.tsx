'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Bed, Bath, Square, MapPin, CheckCircle, Phone, Mail, Sparkles } from 'lucide-react';
import { Property } from '@/data/mockData';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onBookTour?: (property: Property) => void;
}

export default function PropertyModal({ property, onClose, onBookTour }: PropertyModalProps) {
  const [activeImage, setActiveImage] = useState<number>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!property) return null;

  const images = property.gallery && property.gallery.length > 0 ? property.gallery : [property.image];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-modal overflow-hidden border border-slate-100 my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-black hover:bg-white shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left / Top: Gallery */}
          <div className="lg:col-span-7 bg-slate-900 p-4 flex flex-col">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-800 mb-3 shadow-inner">
              <Image
                src={images[activeImage]}
                alt={property.title}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold">
                  {property.statusTag}
                </span>
              </div>
            </div>

            {/* Thumbnail selector */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-16 h-12 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      activeImage === i ? 'border-brand-gold scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt="thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Details & Agent Consultation */}
          <div className="lg:col-span-5 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {property.category.toUpperCase()}
                </span>
                <span className="text-2xl font-black text-brand-dark tracking-tight">
                  {property.priceFormatted}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 mb-1 leading-snug">
                {property.title}
              </h2>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{property.address}</span>
              </div>

              {/* Specs Pills */}
              <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-2xl mb-4 text-center">
                <div>
                  <span className="block text-[11px] text-slate-400 font-medium">Beds</span>
                  <span className="text-xs font-bold text-slate-800">{property.bedrooms}</span>
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 font-medium">Baths</span>
                  <span className="text-xs font-bold text-slate-800">{property.bathrooms}</span>
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 font-medium">Living Space</span>
                  <span className="text-xs font-bold text-slate-800">{property.sqft.toLocaleString()} sqft</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {property.description}
              </p>

              {/* Features checklist */}
              <div className="mb-4">
                <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mb-2">
                  Key Amenities
                </span>
                <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-700">
                  {property.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Agent / Contact box */}
            <div className="pt-4 border-t border-slate-100 mt-auto">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-100 shrink-0">
                  <Image src={property.agent.image} alt={property.agent.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{property.agent.name}</h4>
                  <p className="text-[11px] text-slate-500">{property.agent.role}</p>
                </div>
              </div>

              {formSubmitted ? (
                <div className="p-3 bg-emerald-50 text-emerald-800 rounded-2xl text-xs font-medium text-center">
                  Thank you! Our advisor will contact you within 2 business hours.
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setFormSubmitted(true)}
                  className="w-full py-3 rounded-2xl bg-brand-dark text-white text-xs font-bold hover:bg-slate-800 transition-all flex items-center justify-center space-x-2 shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-brand-gold" />
                  <span>Request Private Tour &amp; Inspection</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
