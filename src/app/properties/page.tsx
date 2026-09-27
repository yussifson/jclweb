'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import PropertyCard from '@/components/PropertyCard';
import PropertyModal from '@/components/PropertyModal';
import InquiryModal from '@/components/InquiryModal';
import { MOCK_PROPERTIES, Property } from '@/data/mockData';
import { Search, Sparkles } from 'lucide-react';

export default function PropertiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedBeds, setSelectedBeds] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Properties' },
    { id: 'house', label: 'Houses & Villas' },
    { id: 'apartment', label: 'Apartments' },
    { id: 'commercial', label: 'Commercial' },
  ];

  const filteredProperties = useMemo(() => {
    return MOCK_PROPERTIES.filter((prop) => {
      if (selectedCategory !== 'all' && prop.category !== selectedCategory) {
        if (selectedCategory === 'house' && prop.category !== 'villa' && prop.category !== 'house') {
          return false;
        }
        if (selectedCategory !== 'house' && prop.category !== selectedCategory) {
          return false;
        }
      }

      if (selectedType !== 'all' && prop.type !== selectedType) {
        return false;
      }

      if (selectedLocation !== 'all' && !prop.city.toLowerCase().includes(selectedLocation.toLowerCase()) && !prop.address.toLowerCase().includes(selectedLocation.toLowerCase())) {
        return false;
      }

      if (selectedBeds !== 'all') {
        if (selectedBeds === '4+' && prop.bedrooms < 4) return false;
        if (selectedBeds !== '4+' && prop.bedrooms !== parseInt(selectedBeds)) return false;
      }

      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = prop.title.toLowerCase().includes(q);
        const matchesAddress = prop.address.toLowerCase().includes(q);
        const matchesDesc = prop.description.toLowerCase().includes(q);
        if (!matchesTitle && !matchesAddress && !matchesDesc) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'sqft') return b.sqft - a.sqft;
      return 0;
    });
  }, [selectedCategory, selectedType, selectedLocation, selectedBeds, searchQuery, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#FF5500] selection:text-white">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Banner */}
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#0466c8] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Verified Real Estate Catalog</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#001845] tracking-tight">
              Curated Properties &amp; Estates
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Browse premier luxury residences, urban suites, and commercial hubs in Airport Residential, Cantonments, East Legon, and coastal areas.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="bg-slate-50 rounded-3xl p-4 sm:p-6 border border-slate-100 shadow-card mb-10 space-y-4">
            {/* Category Chips & Sale/Rent Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-[#0466c8] text-white shadow-md'
                        : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-[#0466c8] border border-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-1 bg-white p-1 rounded-full text-xs font-bold border border-slate-200">
                {['all', 'sale', 'rent'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedType(t)}
                    className={`px-3.5 py-1.5 rounded-full capitalize transition-all ${
                      selectedType === t
                        ? 'bg-[#FF5500] text-white shadow-sm'
                        : 'text-slate-600 hover:text-[#0466c8]'
                    }`}
                  >
                    {t === 'all' ? 'All Status' : `For ${t}`}
                  </button>
                ))}
              </div>
            </div>

            {/* Granular Filters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {/* Search text */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search address, neighborhood..."
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0466c8]"
                />
              </div>

              {/* Location Select */}
              <div>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-800 font-bold focus:outline-none focus:border-[#0466c8] cursor-pointer"
                >
                  <option value="all">All Locations</option>
                  <option value="Accra">Accra (Airport, East Legon, Cantonments)</option>
                  <option value="Prampram">Prampram Coastal Enclave</option>
                  <option value="Aburi">Aburi Hilltop</option>
                </select>
              </div>

              {/* Bedrooms Select */}
              <div>
                <select
                  value={selectedBeds}
                  onChange={(e) => setSelectedBeds(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-800 font-bold focus:outline-none focus:border-[#0466c8] cursor-pointer"
                >
                  <option value="all">Any Bedrooms</option>
                  <option value="1">1 Bedroom</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4+">4+ Bedrooms</option>
                </select>
              </div>

              {/* Sort By */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-800 font-bold focus:outline-none focus:border-[#0466c8] cursor-pointer"
                >
                  <option value="featured">Sort by: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="sqft">Living Space (Sq Ft)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Showing {filteredProperties.length} Properties
            </span>
            {(selectedCategory !== 'all' || selectedType !== 'all' || selectedLocation !== 'all' || selectedBeds !== 'all' || searchQuery !== '') && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedType('all');
                  setSelectedLocation('all');
                  setSelectedBeds('all');
                  setSearchQuery('');
                }}
                className="text-xs font-bold text-[#FF5500] hover:underline"
              >
                Reset all filters
              </button>
            )}
          </div>

          {/* Property Cards Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((prop) => (
                <PropertyCard
                  key={prop.id}
                  property={prop}
                  onSelect={(p) => setSelectedProperty(p)}
                  onQuickInquire={() => setInquiryOpen(true)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-100">
              <p className="text-slate-500 text-sm font-semibold">No properties matched your filter criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedType('all');
                  setSelectedLocation('all');
                  setSelectedBeds('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#0466c8] text-white text-xs font-bold"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />

      <FloatingActions onOpenInquiry={() => setInquiryOpen(true)} />

      {/* Property Details Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onBookTour={() => {
          setSelectedProperty(null);
          setInquiryOpen(true);
        }}
      />

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultService="real-estate"
      />
    </div>
  );
}
