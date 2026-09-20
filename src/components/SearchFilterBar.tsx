'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Building2, DollarSign, BedDouble, Zap } from 'lucide-react';

interface SearchFilterBarProps {
  onSearch?: (filters: {
    category: string;
    location: string;
    priceRange: string;
    bedrooms: string;
  }) => void;
  compact?: boolean;
}

export default function SearchFilterBar({ onSearch, compact = false }: SearchFilterBarProps) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [location, setLocation] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [bedrooms, setBedrooms] = useState('all');
  const [propertyType, setPropertyType] = useState('all');

  const categories = ['All', 'House', 'Apartment', 'Residential', 'Commercial', 'Land', 'Tonefo Gadgets'];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCategory === 'Tonefo Gadgets') {
      router.push('/services#tonefo');
      return;
    }
    if (onSearch) {
      onSearch({
        category: selectedCategory,
        location,
        priceRange,
        bedrooms,
      });
    } else {
      router.push(`/properties?category=${selectedCategory.toLowerCase()}&location=${location}&bedrooms=${bedrooms}`);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Top Filter Category Chips */}
      <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-3 mb-2">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          const isGadget = cat === 'Tonefo Gadgets';

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 shrink-0 flex items-center gap-1.5 ${
                isSelected
                  ? isGadget
                    ? 'bg-[#FF5500] text-white shadow-neon scale-105'
                    : 'bg-[#0466c8] text-white shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-[#0466c8] border border-slate-200 shadow-sm'
              }`}
            >
              {isGadget && <Zap className={`w-3.5 h-3.5 ${isSelected ? 'fill-white' : 'text-[#FF5500] fill-[#FF5500]'}`} />}
              <span>{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Main Search Filter Pill Container */}
      <form
        onSubmit={handleSearchSubmit}
        className="bg-white/95 backdrop-blur-md rounded-3xl md:rounded-full p-2.5 md:p-2 border border-slate-200 shadow-float grid grid-cols-1 md:grid-cols-12 gap-2 items-center ring-1 ring-blue-50"
      >
        {/* Field 1: Location */}
        <div className="md:col-span-3 px-3.5 py-2 flex items-center space-x-3 rounded-2xl md:rounded-full hover:bg-slate-50 transition-colors">
          <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-[#0466c8] shrink-0">
            <MapPin className="w-4 h-4 text-[#0466c8]" />
          </div>
          <div className="flex flex-col text-left flex-1 min-w-0">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Location</span>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="text-xs font-extrabold text-slate-800 bg-transparent border-none p-0 focus:ring-0 cursor-pointer truncate"
            >
              <option value="all">All Locations (Accra, Prampram, Aburi)</option>
              <option value="Accra">Accra (Airport, East Legon, Cantonments)</option>
              <option value="Prampram">Prampram Coastal Corridor</option>
              <option value="Aburi">Aburi Scenic Ridge</option>
              <option value="Tema">Tema Industrial Area</option>
            </select>
          </div>
        </div>

        <div className="hidden md:block w-px h-8 bg-slate-200" />

        {/* Field 2: Property Type */}
        <div className="md:col-span-3 px-3.5 py-2 flex items-center space-x-3 rounded-2xl md:rounded-full hover:bg-slate-50 transition-colors">
          <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-[#0466c8] shrink-0">
            <Building2 className="w-4 h-4 text-[#0466c8]" />
          </div>
          <div className="flex flex-col text-left flex-1 min-w-0">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Property Type</span>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="text-xs font-extrabold text-slate-800 bg-transparent border-none p-0 focus:ring-0 cursor-pointer truncate"
            >
              <option value="all">All Types</option>
              <option value="house">Houses &amp; Luxury Villas</option>
              <option value="apartment">Apartments &amp; Condos</option>
              <option value="commercial">Commercial Hubs</option>
              <option value="land">Titled Land Parcels</option>
            </select>
          </div>
        </div>

        <div className="hidden md:block w-px h-8 bg-slate-200" />

        {/* Field 3: Price Range */}
        <div className="md:col-span-2 px-3.5 py-2 flex items-center space-x-3 rounded-2xl md:rounded-full hover:bg-slate-50 transition-colors">
          <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-[#0466c8] shrink-0">
            <DollarSign className="w-4 h-4 text-[#0466c8]" />
          </div>
          <div className="flex flex-col text-left flex-1 min-w-0">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Price Range</span>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="text-xs font-extrabold text-slate-800 bg-transparent border-none p-0 focus:ring-0 cursor-pointer truncate"
            >
              <option value="all">Any Price</option>
              <option value="under100k">&lt; $100,000 / GHS</option>
              <option value="100k-500k">$100K - $500K</option>
              <option value="500k-1.5m">$500K - $1.5M</option>
              <option value="1.5m+">$1.5M+</option>
            </select>
          </div>
        </div>

        <div className="hidden md:block w-px h-8 bg-slate-200" />

        {/* Field 4: Bedrooms */}
        <div className="md:col-span-2 px-3.5 py-2 flex items-center space-x-3 rounded-2xl md:rounded-full hover:bg-slate-50 transition-colors">
          <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-[#0466c8] shrink-0">
            <BedDouble className="w-4 h-4 text-[#0466c8]" />
          </div>
          <div className="flex flex-col text-left flex-1 min-w-0">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Rooms</span>
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="text-xs font-extrabold text-slate-800 bg-transparent border-none p-0 focus:ring-0 cursor-pointer truncate"
            >
              <option value="all">Any Rooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4+">4+ Bedrooms</option>
            </select>
          </div>
        </div>

        {/* Action Button */}
        <div className="md:col-span-2 flex items-center justify-end p-1">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3.5 rounded-full bg-[#FF5500] hover:bg-[#e04b00] text-white text-xs font-black transition-all duration-200 shadow-neon flex items-center justify-center space-x-2 hover:scale-105"
          >
            <Search className="w-3.5 h-3.5 text-white" />
            <span>Search</span>
          </button>
        </div>
      </form>
    </div>
  );
}
