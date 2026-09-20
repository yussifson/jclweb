'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Building2, DollarSign, BedDouble, SlidersHorizontal } from 'lucide-react';

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

  const categories = ['All', 'House', 'Apartment', 'Residential', 'Commercial', 'Land'];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 shrink-0 ${
              selectedCategory === cat
                ? 'bg-brand-dark text-white shadow-md'
                : 'bg-white/80 backdrop-blur-md text-slate-700 hover:bg-white hover:text-brand-dark border border-slate-200/80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Search Filter Pill Container */}
      <form
        onSubmit={handleSearchSubmit}
        className="bg-white/95 backdrop-blur-md rounded-3xl md:rounded-full p-2.5 md:p-2 border border-slate-200/80 shadow-float grid grid-cols-1 md:grid-cols-12 gap-2 items-center"
      >
        {/* Field 1: Location */}
        <div className="md:col-span-3 px-3 py-2 flex items-center space-x-3 rounded-2xl md:rounded-full hover:bg-slate-50 transition-colors">
          <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
            <MapPin className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex flex-col text-left flex-1 min-w-0">
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Location</span>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="text-xs font-bold text-slate-800 bg-transparent border-none p-0 focus:ring-0 cursor-pointer truncate"
            >
              <option value="all">All Locations (San Jose, Accra, etc.)</option>
              <option value="San Jose">San Jose, CA</option>
              <option value="Accra">Accra (Airport, East Legon)</option>
              <option value="Prampram">Prampram Coastal Corridor</option>
              <option value="New York">New York, NY</option>
            </select>
          </div>
        </div>

        <div className="hidden md:block w-px h-8 bg-slate-200" />

        {/* Field 2: Property Type */}
        <div className="md:col-span-3 px-3 py-2 flex items-center space-x-3 rounded-2xl md:rounded-full hover:bg-slate-50 transition-colors">
          <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
            <Building2 className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex flex-col text-left flex-1 min-w-0">
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Property Type</span>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="text-xs font-bold text-slate-800 bg-transparent border-none p-0 focus:ring-0 cursor-pointer truncate"
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
        <div className="md:col-span-2 px-3 py-2 flex items-center space-x-3 rounded-2xl md:rounded-full hover:bg-slate-50 transition-colors">
          <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
            <DollarSign className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex flex-col text-left flex-1 min-w-0">
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Price Range</span>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="text-xs font-bold text-slate-800 bg-transparent border-none p-0 focus:ring-0 cursor-pointer truncate"
            >
              <option value="all">Any Price</option>
              <option value="under500k">&lt; $500,000</option>
              <option value="500k-1.5m">$500K - $1.5M</option>
              <option value="1.5m-3m">$1.5M - $3.0M</option>
              <option value="3m+">$3.0M+</option>
            </select>
          </div>
        </div>

        <div className="hidden md:block w-px h-8 bg-slate-200" />

        {/* Field 4: Bedrooms */}
        <div className="md:col-span-2 px-3 py-2 flex items-center space-x-3 rounded-2xl md:rounded-full hover:bg-slate-50 transition-colors">
          <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
            <BedDouble className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex flex-col text-left flex-1 min-w-0">
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Rooms</span>
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="text-xs font-bold text-slate-800 bg-transparent border-none p-0 focus:ring-0 cursor-pointer truncate"
            >
              <option value="all">Any Rooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3-4">3 - 4 Bedrooms</option>
              <option value="5+">5+ Bedrooms</option>
            </select>
          </div>
        </div>

        {/* Action Button */}
        <div className="md:col-span-2 flex items-center justify-end p-1">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3.5 rounded-full bg-brand-dark text-white text-xs font-bold hover:bg-slate-800 transition-all duration-200 shadow-md flex items-center justify-center space-x-2 hover:scale-[1.02]"
          >
            <Search className="w-3.5 h-3.5 text-brand-gold" />
            <span>Search</span>
          </button>
        </div>
      </form>
    </div>
  );
}
