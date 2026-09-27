'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import PropertyCard from '@/components/PropertyCard';
import InquiryModal from '@/components/InquiryModal';
import { PROPERTY_TYPES_PORTFOLIO, PropertyTypePortfolio } from '@/data/mockData';
import { Search, Building2, Sparkles } from 'lucide-react';

export default function PropertiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<PropertyTypePortfolio | null>(null);

  const categories = ['All', 'Villas', 'Penthouses', 'Townhouses', 'Commercial', 'Residential'];

  const filteredProperties = useMemo(() => {
    return PROPERTY_TYPES_PORTFOLIO.filter((prop) => {
      if (selectedCategory !== 'All' && prop.category !== selectedCategory) {
        return false;
      }

      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = prop.title.toLowerCase().includes(q);
        const matchesTagline = prop.tagline.toLowerCase().includes(q);
        const matchesDesc = prop.description.toLowerCase().includes(q);
        const matchesSpecs = prop.specifications.some((s) => s.toLowerCase().includes(q));
        if (!matchesTitle && !matchesTagline && !matchesDesc && !matchesSpecs) return false;
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  const handleInquire = (prop: PropertyTypePortfolio) => {
    setSelectedProperty(prop);
    setInquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#0466c8] selection:text-white">
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="flex-grow pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner (Tridloop Pattern) */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0466c8] text-xs font-bold uppercase tracking-wider shadow-xs">
              <Building2 className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Architectural Design &amp; Turnkey Delivery</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#001845] tracking-tight">
              Property Development Portfolios
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              Explore our core architectural categories. Each property type is custom-engineered to your lifestyle and land parcel with structural drawings, BOQ transparency, and turnkey delivery.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="bg-[#F8FAFC] rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-sm mb-12 space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Category Pill Tabs */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      selectedCategory === cat
                        ? 'bg-[#0466c8] text-white shadow-sm'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cat === 'All' ? 'All Portfolios' : cat}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search features (e.g., solar, pool, rooftop)..."
                  className="w-full pl-9 pr-4 py-2 rounded-full bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0466c8]"
                />
              </div>

            </div>
          </div>

          {/* Properties Grid */}
          {filteredProperties.length === 0 ? (
            <div className="text-center py-16 bg-[#F8FAFC] rounded-3xl border border-slate-200 p-8">
              <Building2 className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800 mb-1">No Matching Portfolio Found</h3>
              <p className="text-xs text-slate-500 mb-4">Try clearing your search query or selecting a different category.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2 rounded-full bg-[#0466c8] text-white text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onInquire={handleInquire}
                />
              ))}
            </div>
          )}

        </div>
      </main>

      <Footer />
      <FloatingActions onOpenInquiry={() => setInquiryOpen(true)} />
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultService="real-estate"
      />
    </div>
  );
}
