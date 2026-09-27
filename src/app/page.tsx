'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import PropertyCard from '@/components/PropertyCard';
import PropertyModal from '@/components/PropertyModal';
import InquiryModal from '@/components/InquiryModal';
import FAQAccordion from '@/components/FAQAccordion';
import {
  MOCK_PROPERTIES,
  MOCK_TESTIMONIALS,
  COMPANY_INFO,
  Property,
} from '@/data/mockData';
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Building2,
  DollarSign,
  Bed,
  Bath,
  Maximize,
  Star,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export default function HomePage() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryService, setInquiryService] = useState('real-estate');

  // Search state for Hero floating card
  const [searchLocation, setSearchLocation] = useState('Accra');
  const [searchType, setSearchType] = useState('Apartment');
  const [searchPrice, setSearchPrice] = useState('1500000');

  const popularProperties = MOCK_PROPERTIES.slice(0, 6);

  const handleOpenInquiry = (service: string = 'real-estate') => {
    setInquiryService(service);
    setInquiryOpen(true);
  };

  const popularCities = [
    { name: 'Accra', count: '140+ Listings', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
    { name: 'Prampram', count: '85+ Plots', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80' },
    { name: 'Aburi Ridge', count: '45+ Estates', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80' },
    { name: 'Tema Industrial', count: '30+ Parcels', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#FF5500] selection:text-white">
      {/* Clean Top Header */}
      <Navbar />

      <main className="flex-grow pt-20 md:pt-24">
        {/* ========================================================
            HERO SECTION
           ======================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-4 pb-12">
          <div className="relative rounded-4xl bg-[#001845] overflow-hidden min-h-[580px] lg:min-h-[620px] shadow-2xl flex flex-col justify-between p-6 sm:p-10 lg:p-14">
            {/* Background Property Photo */}
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
              alt="Luxury architecture"
              fill
              priority
              className="object-cover object-center opacity-65 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001845]/90 via-[#001845]/60 to-transparent" />

            {/* Top Tag */}
            <div className="relative z-10">
              <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/30 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>Premier Real Estate &amp; Land Development</span>
              </span>
            </div>

            {/* Main Content Row: Left Title + Right Search Card */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-8">
              {/* Left Headline & Explore Button */}
              <div className="lg:col-span-7 max-w-xl text-white">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
                  Buy, Rent, &amp; Sell Property
                </h1>
                <Link
                  href="/properties"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white text-[#001845] text-xs font-bold hover:bg-blue-50 transition-all shadow-lg hover:scale-105"
                >
                  <span>Explore All Properties</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0466c8]" />
                </Link>
              </div>

              {/* Right Floating Search Card */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 leading-snug">
                  Find your Best Property
                </h3>
                <p className="text-xs text-slate-500 font-medium mb-5">what do you want?</p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href = `/properties?location=${searchLocation}&type=${searchType}`;
                  }}
                  className="space-y-4"
                >
                  {/* Location Field */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-wider">Location</label>
                    <div className="flex items-center space-x-2 px-3.5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200">
                      <MapPin className="w-4 h-4 text-[#0466c8] shrink-0" />
                      <select
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                        className="w-full bg-transparent text-xs font-bold text-slate-800 border-none p-0 focus:ring-0 cursor-pointer"
                      >
                        <option value="Accra">Accra, Ghana (Airport, Cantonments, East Legon)</option>
                        <option value="Prampram">Prampram Coastal Corridor</option>
                        <option value="Aburi">Aburi Scenic Ridge</option>
                        <option value="Tema">Tema Industrial Park</option>
                      </select>
                    </div>
                  </div>

                  {/* Property Type Field */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-wider">Property Type</label>
                    <div className="flex items-center space-x-2 px-3.5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200">
                      <Building2 className="w-4 h-4 text-[#0466c8] shrink-0" />
                      <select
                        value={searchType}
                        onChange={(e) => setSearchType(e.target.value)}
                        className="w-full bg-transparent text-xs font-bold text-slate-800 border-none p-0 focus:ring-0 cursor-pointer"
                      >
                        <option value="Apartment">Luxury Apartment</option>
                        <option value="house">Detached Villa &amp; House</option>
                        <option value="land">Titled Land Parcel</option>
                        <option value="commercial">Commercial Hub</option>
                      </select>
                    </div>
                  </div>

                  {/* Spec Quick Indicator Row */}
                  <div className="flex items-center justify-between py-1.5 px-3 bg-blue-50/60 rounded-xl text-[11px] font-semibold text-[#0466c8]">
                    <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5 text-[#0466c8]" /> 4 Bed</span>
                    <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5 text-[#0466c8]" /> 2+ Bathroom</span>
                    <span className="flex items-center gap-1"><Maximize className="w-3.5 h-3.5 text-[#0466c8]" /> 1,800+ sqft</span>
                  </div>

                  {/* Max Price Field */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-wider">Target Budget / Price</label>
                    <div className="flex items-center space-x-2 px-3.5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200">
                      <DollarSign className="w-4 h-4 text-[#0466c8] shrink-0" />
                      <select
                        value={searchPrice}
                        onChange={(e) => setSearchPrice(e.target.value)}
                        className="w-full bg-transparent text-xs font-bold text-slate-800 border-none p-0 focus:ring-0 cursor-pointer"
                      >
                        <option value="500000">&lt; $500,000 / GHS</option>
                        <option value="1500000">$500,000 - $1,500,000</option>
                        <option value="3500000">$1,500,000 - $3,500,000</option>
                        <option value="5000000">$3,500,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Neon Orange Search Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-[#FF5500] hover:bg-[#e04b00] text-white font-extrabold text-xs transition-all shadow-neon hover:scale-[1.01]"
                  >
                    Search Properties
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            PROOF & TRUST STRIP
           ======================================================== */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-slate-100">
            {/* Left: 1250+ Companies & Clients */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                1,250+ Clients &amp; Companies Trust by us.
              </h2>
              <div className="flex items-center gap-3 mt-4">
                <div className="flex -space-x-2 overflow-hidden">
                  {MOCK_TESTIMONIALS.map((t, idx) => (
                    <div key={idx} className="inline-block h-9 w-9 rounded-full ring-2 ring-white overflow-hidden bg-slate-100">
                      <Image src={t.avatar} alt={t.author} width={36} height={36} className="object-cover" />
                    </div>
                  ))}
                  <div className="inline-flex h-9 w-9 rounded-full bg-[#FF5500] text-white text-xs font-bold items-center justify-center ring-2 ring-white">
                    +
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                  <Star className="w-3.5 h-3.5 fill-[#FF5500] text-[#FF5500]" />
                  <span>4.9 Rating (1.2k+ Reviews)</span>
                </div>
              </div>
            </div>

            {/* Center Decorative Orange Spark Accent */}
            <div className="hidden lg:flex lg:col-span-2 justify-center">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF0EB] flex items-center justify-center text-[#FF5500] font-black text-2xl shadow-sm">
                ✳
              </div>
            </div>

            {/* Right Copy & Action Links */}
            <div className="lg:col-span-5">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Your leading real estate advocate, transforming land and houses into lasting value. Trust JCL Royal Group to expertly guide you home with 100% litigation-free title verification.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/properties"
                  className="px-5 py-2.5 rounded-full bg-[#001845] hover:bg-[#032d60] text-white text-xs font-bold transition-all shadow-sm"
                >
                  More Listings
                </Link>
                <button
                  onClick={() => handleOpenInquiry('real-estate')}
                  className="px-4 py-2.5 text-xs font-bold text-[#0466c8] hover:text-[#034078] flex items-center gap-1.5 transition-colors"
                >
                  <span>Request a Callback</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            POPULAR LISTINGS
           ======================================================== */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Popular Listings
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Explore latest and featured properties for sale, rent &amp; mortgage.
              </p>
            </div>

            <Link
              href="/properties"
              className="mt-3 sm:mt-0 inline-flex items-center space-x-1.5 px-4 py-2 rounded-full border border-blue-200 text-xs font-bold text-[#0466c8] hover:bg-blue-50 transition-colors shadow-sm self-start sm:self-auto"
            >
              <span>Explore All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularProperties.map((prop) => (
              <PropertyCard
                key={prop.id}
                property={prop}
                onSelect={(p) => setSelectedProperty(p)}
                onQuickInquire={() => handleOpenInquiry('real-estate')}
              />
            ))}
          </div>
        </section>

        {/* ========================================================
            POPULAR LOCATIONS / CITIES
           ======================================================== */}
        <section className="py-12 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Popular Locations
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Top-rated real estate and land investment corridors across Ghana.
                </p>
              </div>
              <Link
                href="/land"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full border border-blue-200 bg-white text-xs font-bold text-[#0466c8] hover:bg-blue-50 shadow-sm"
              >
                <span>Explore All</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {popularCities.map((city, idx) => (
                <Link
                  key={idx}
                  href={`/properties?location=${city.name}`}
                  className="group flex flex-col items-center text-center cursor-pointer"
                >
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden mb-3.5 ring-4 ring-white shadow-md group-hover:ring-[#0466c8] group-hover:scale-105 transition-all duration-300">
                    <Image src={city.image} alt={city.name} fill className="object-cover" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-[#0466c8] transition-colors">{city.name}</h3>
                  <span className="text-xs text-slate-500 font-medium">{city.count}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            FEATURED LISTING & TESTIMONIAL SPLIT
           ======================================================== */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-left mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Listing &amp; Client Story
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Card: Featured Property */}
            <div className="lg:col-span-7 bg-[#001845] rounded-3xl overflow-hidden shadow-card relative min-h-[340px] group cursor-pointer"
              onClick={() => setSelectedProperty(MOCK_PROPERTIES[0])}
            >
              <Image
                src={MOCK_PROPERTIES[0].image}
                alt={MOCK_PROPERTIES[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001845]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full bg-[#FF5500] text-white text-xs font-bold shadow-neon mb-2 inline-block">
                  Featured Masterpiece
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">{MOCK_PROPERTIES[0].title}</h3>
                <p className="text-xs text-blue-100">{MOCK_PROPERTIES[0].address}</p>
              </div>
            </div>

            {/* Right Card: Quote & Metric Counters */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-card flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-3">
                  &ldquo;Extraordinary <span className="text-[#FF5500] italic font-serif">performance!</span> Quick solutions. Highly recommended.&rdquo;
                </h3>
                <div className="flex items-center gap-3 pt-3 mb-6">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-100 ring-2 ring-blue-100">
                    <Image src={MOCK_TESTIMONIALS[0].avatar} alt={MOCK_TESTIMONIALS[0].author} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{MOCK_TESTIMONIALS[0].author}</h4>
                    <p className="text-[11px] text-[#0466c8] font-semibold">{MOCK_TESTIMONIALS[0].title}</p>
                  </div>
                </div>
              </div>

              {/* Metric Counters */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                <div>
                  <span className="text-3xl sm:text-4xl font-black text-[#0466c8] tracking-tight block">
                    1,500+
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">
                    Project Handover
                  </span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-black text-[#FF5500] tracking-tight block">
                    1.9M+
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">
                    Happy Clients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            FAQ SECTION
           ======================================================== */}
        <section className="py-14 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#0466c8] block mb-1">
                Frequently Asked
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001845] tracking-tight">
                Got Questions? We Have Answers.
              </h2>
            </div>
            <FAQAccordion />
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Action Buttons (WhatsApp + Inquire Now) */}
      <FloatingActions onOpenInquiry={() => handleOpenInquiry('real-estate')} />

      {/* Property Details Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onBookTour={() => {
          setSelectedProperty(null);
          handleOpenInquiry('real-estate');
        }}
      />

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultService={inquiryService}
      />
    </div>
  );
}
