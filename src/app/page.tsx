'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import AgentCard from '@/components/AgentCard';
import PropertyModal from '@/components/PropertyModal';
import InquiryModal from '@/components/InquiryModal';
import SearchFilterBar from '@/components/SearchFilterBar';
import FAQAccordion from '@/components/FAQAccordion';
import {
  MOCK_PROPERTIES,
  MOCK_AGENTS,
  MOCK_TESTIMONIALS,
  COMPANY_INFO,
  Property,
} from '@/data/mockData';
import {
  ArrowRight,
  Sparkles,
  MapPin,
  Bookmark,
  Building2,
  Compass,
  HardHat,
  Zap,
  Star,
  ChevronRight,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';

export default function HomePage() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryService, setInquiryService] = useState('real-estate');

  const heroProperty = MOCK_PROPERTIES[0];
  const premierProperties = MOCK_PROPERTIES.slice(0, 6);

  const handleOpenInquiry = (service: string = 'real-estate') => {
    setInquiryService(service);
    setInquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
      {/* Global Navbar */}
      <Navbar onOpenInquiry={() => handleOpenInquiry('real-estate')} />

      <main className="flex-grow pt-24 md:pt-28">
        {/* ========================================================
            HERO SECTION (Matching Design 1, 4, 5 + Blue & Neon Orange)
           ======================================================== */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-4 pb-12">
          {/* Header Title */}
          <div className="mb-8 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#0466c8] mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>JCL Royal Group • Real Estate &amp; Tonefo Electronics</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#001845] tracking-tight leading-[1.08]">
              Real estate for living and investments
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Experience the perfect blend of property care, construction support, and trusted Tonefo electronics sourcing.
            </p>
          </div>

          {/* Hero Main Dual Card Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-stretch">
            {/* Left Big Hero Image */}
            <div className="lg:col-span-8 relative rounded-4xl overflow-hidden min-h-[380px] lg:min-h-[480px] bg-[#001845] shadow-float group">
              <Image
                src={heroProperty.image}
                alt={heroProperty.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001845]/80 via-transparent to-black/20" />

              {/* Badges on hero image */}
              <div className="absolute top-5 left-5 flex items-center gap-2">
                <span className="px-4 py-1.5 rounded-full bg-[#FF5500] text-white text-xs font-black shadow-neon">
                  Exclusive Masterpiece
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#0466c8] text-xs font-bold shadow-sm">
                  100% Titled
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white max-w-xl">
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
                  {heroProperty.title}
                </h2>
                <p className="text-xs sm:text-sm text-blue-100 line-clamp-2">
                  {heroProperty.description}
                </p>
              </div>
            </div>

            {/* Right Floating Property Info Card */}
            <div className="lg:col-span-4 bg-white rounded-4xl p-6 sm:p-7 border border-blue-100 shadow-float flex flex-col justify-between">
              <div>
                {/* Address & Bookmark */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-bold text-slate-900 block leading-tight">
                        {heroProperty.address}
                      </span>
                      <span className="text-xs text-slate-500">
                        {heroProperty.neighborhood}, {heroProperty.city}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="p-2 rounded-full bg-slate-50 text-slate-500 hover:text-[#0466c8] transition-colors"
                    aria-label="Bookmark property"
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>

                {/* 3-Column Specs Grid */}
                <div className="grid grid-cols-3 gap-3 py-3 border-y border-slate-100 mb-5 text-center">
                  <div>
                    <span className="text-lg font-extrabold text-[#0466c8] block">
                      {heroProperty.bedrooms}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">beds</span>
                  </div>
                  <div>
                    <span className="text-lg font-extrabold text-[#0466c8] block">
                      {heroProperty.bathrooms}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">baths</span>
                  </div>
                  <div>
                    <span className="text-lg font-extrabold text-[#0466c8] block">
                      {heroProperty.sqft.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">sqft</span>
                  </div>
                </div>

                {/* Price & Split Options */}
                <div className="flex items-baseline justify-between mb-6">
                  <span className="text-2xl sm:text-3xl font-black text-[#001845] tracking-tight">
                    {heroProperty.priceFormatted}
                  </span>
                  <button
                    onClick={() => setSelectedProperty(heroProperty)}
                    className="text-xs font-bold text-[#0466c8] hover:text-[#FF5500] flex items-center gap-1"
                  >
                    Split options <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Agent Snippet (CEO or Lead Consultant) */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-blue-50/60 border border-blue-100 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden bg-white ring-1 ring-blue-200">
                      <Image
                        src={heroProperty.agent.image}
                        alt={heroProperty.agent.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">
                        {heroProperty.agent.name}
                      </span>
                      <span className="text-[10px] text-[#0466c8] uppercase tracking-wider font-extrabold">
                        {heroProperty.agent.role}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleOpenInquiry('real-estate')}
                    className="px-3.5 py-1.5 rounded-full border border-[#0466c8] text-xs font-bold text-[#0466c8] hover:bg-[#0466c8] hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </div>
              </div>

              {/* Request a Tour CTA Button */}
              <div>
                <button
                  onClick={() => handleOpenInquiry('real-estate')}
                  className="w-full py-4 rounded-full bg-[#0466c8] hover:bg-[#034078] text-white font-extrabold text-sm transition-all shadow-md flex flex-col items-center justify-center hover:scale-[1.01]"
                >
                  <span className="leading-tight">Request a tour</span>
                  <span className="text-[10px] text-blue-200 font-normal">Earliest at 11:00 tomorrow</span>
                </button>
              </div>
            </div>
          </div>

          {/* Search Filter Bar */}
          <div className="mt-4">
            <SearchFilterBar />
          </div>
        </section>

        {/* ========================================================
            KEY METRICS STRIP
           ======================================================== */}
        <section className="py-10 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="pt-4 md:pt-0">
                <span className="text-3xl sm:text-4xl font-black text-[#0466c8] tracking-tight block">
                  100%
                </span>
                <span className="text-xs sm:text-sm text-slate-600 font-bold">
                  Litigation-Free Guarantee
                </span>
              </div>
              <div className="pt-4 md:pt-0">
                <span className="text-3xl sm:text-4xl font-black text-[#FF5500] tracking-tight block">
                  500+
                </span>
                <span className="text-xs sm:text-sm text-slate-600 font-bold">
                  Properties &amp; Land Parcels Sold
                </span>
              </div>
              <div className="pt-4 md:pt-0">
                <span className="text-3xl sm:text-4xl font-black text-[#0466c8] tracking-tight block">
                  150+
                </span>
                <span className="text-xs sm:text-sm text-slate-600 font-bold">
                  Prime Locations &amp; Corridors
                </span>
              </div>
              <div className="pt-4 md:pt-0">
                <span className="text-3xl sm:text-4xl font-black text-[#FF5500] tracking-tight block">
                  2,000+
                </span>
                <span className="text-xs sm:text-sm text-slate-600 font-bold">
                  Satisfied Clients &amp; Reviews
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            FEATURE SPOTLIGHT & MAP VALUE EXPLORER
           ======================================================== */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            <div className="lg:col-span-5">
              <span className="text-xs font-black uppercase tracking-wider text-[#FF5500] block mb-2">
                Architectural &amp; Development Excellence
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001845] tracking-tight leading-tight mb-4">
                Find a property you will be proud to own.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                From property sourcing and site appraisal to civil project management, final handover, and smart Tonefo gadget installation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/properties"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#0466c8] hover:bg-[#034078] text-white text-xs font-extrabold transition-all shadow-md hover:scale-105"
                >
                  <span>Explore Properties</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/land"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all shadow-sm"
                >
                  <span>View Titled Land</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card group">
                <Image
                  src={MOCK_PROPERTIES[1].image}
                  alt={MOCK_PROPERTIES[1].title}
                  fill
                  sizes="400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001845]/80 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-xs font-extrabold text-[#FF5500]">Residential Haven</span>
                  <h4 className="text-base font-bold">{MOCK_PROPERTIES[1].title}</h4>
                  <span className="text-xs font-bold mt-1">{MOCK_PROPERTIES[1].priceFormatted}</span>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card group">
                <Image
                  src={MOCK_PROPERTIES[2].image}
                  alt={MOCK_PROPERTIES[2].title}
                  fill
                  sizes="400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001845]/80 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-xs font-extrabold text-[#FF5500]">Modern Living</span>
                  <h4 className="text-base font-bold">{MOCK_PROPERTIES[2].title}</h4>
                  <span className="text-xs font-bold mt-1">{MOCK_PROPERTIES[2].priceFormatted}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map / Value Banner Card */}
          <div className="bg-gradient-to-r from-[#034078] via-[#0466c8] to-[#001845] rounded-4xl p-8 md:p-12 text-white shadow-float relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7">
                <span className="px-3.5 py-1 rounded-full bg-[#FF5500] text-white text-xs font-black uppercase tracking-wider mb-3 inline-block shadow-sm">
                  Strategic Land &amp; Property Network
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                  Discover Properties with the Best Value
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm max-w-lg leading-relaxed">
                  From Airport Residential and Cantonments to high-growth coastal development corridors in Prampram and Aburi, our geospatial network identifies prime appreciation zones.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-end gap-4">
                <Link
                  href="/properties"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-[#0466c8] font-black text-xs hover:bg-blue-50 transition-all text-center shadow-md hover:scale-105"
                >
                  Discover Homes →
                </Link>
                <Link
                  href="/land"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FF5500] hover:bg-[#e04b00] text-white font-black text-xs transition-all text-center shadow-neon hover:scale-105"
                >
                  Explore Land
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            PREMIER HOUSES GRID
           ======================================================== */}
        <section className="py-16 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#FF5500] block mb-1">
                  Curated Catalog
                </span>
                <h2 className="text-3xl font-extrabold text-[#001845] tracking-tight">
                  Explore our premier houses
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Hand-selected luxury estates, urban apartments, and investment residences.
                </p>
              </div>

              <Link
                href="/properties"
                className="mt-4 sm:mt-0 inline-flex items-center space-x-1.5 px-5 py-2 rounded-full border border-blue-200 text-xs font-bold text-[#0466c8] hover:bg-blue-50 transition-colors shadow-sm self-start sm:self-auto"
              >
                <span>View all listings</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Responsive 3-Column Property Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {premierProperties.map((prop) => (
                <PropertyCard
                  key={prop.id}
                  property={prop}
                  onSelect={(p) => setSelectedProperty(p)}
                  onQuickInquire={() => handleOpenInquiry('real-estate')}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            SELL WITH TOP AGENTS & CEO SPOTLIGHT
           ======================================================== */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#FF5500] block mb-1">
                Advisory Leadership
              </span>
              <h2 className="text-3xl font-extrabold text-[#001845] tracking-tight">
                Sell with top advisors
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Skip the hustle and let our verified surveyors and property consultants get things done.
              </p>
            </div>

            <button
              onClick={() => handleOpenInquiry('real-estate')}
              className="mt-4 sm:mt-0 inline-flex items-center space-x-1.5 px-5 py-2 rounded-full bg-[#0466c8] hover:bg-[#034078] text-white text-xs font-bold transition-colors shadow-sm self-start sm:self-auto"
            >
              <span>Meet all advisors</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MOCK_AGENTS.map((agent) => (
              <AgentCard
                key={agent.id}
                agent={agent}
                onContact={() => handleOpenInquiry('real-estate')}
              />
            ))}
          </div>
        </section>

        {/* ========================================================
            SERVICES / 4 PILLARS + TONEFO GADGETS
           ======================================================== */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-wider text-[#FF5500] block mb-1">
                Integrated Solutions
              </span>
              <h2 className="text-3xl font-extrabold text-[#001845] tracking-tight">
                Property &amp; Electrical Solutions
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                From property guidance to gadget sourcing, we provide tailored solutions for homes, investment buyers, and everyday tech needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Building2,
                  title: 'Property Sales & Rentals',
                  desc: 'Browse verified homes, rentals, and investment opportunities with a team that understands what matters.',
                  href: '/properties',
                },
                {
                  icon: Compass,
                  title: 'Land & Cadastral Titling',
                  desc: 'Cadastral surveying, GNSS boundary demarcation, and 100% litigation-free land certificates.',
                  href: '/land',
                },
                {
                  icon: HardHat,
                  title: 'Building & Construction',
                  desc: 'From planning to completion, we manage construction projects with quality craftsmanship and clear timelines.',
                  href: '/services',
                },
                {
                  icon: Zap,
                  title: 'Tonefo Gadget Sourcing',
                  desc: 'Electrical gadgets, appliances, and accessories selected for quality, performance, and long-term value.',
                  href: '/services#tonefo',
                  highlight: true,
                },
              ].map((serv, idx) => {
                const Icon = serv.icon;
                return (
                  <div
                    key={idx}
                    className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                      serv.highlight
                        ? 'bg-gradient-to-b from-[#FFF0EB] to-white border-[#FF5500]/30 shadow-card hover:shadow-neon'
                        : 'bg-slate-50 border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-card'
                    }`}
                  >
                    <div>
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-sm ${
                        serv.highlight ? 'bg-[#FF5500] text-white' : 'bg-[#0466c8] text-white'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">{serv.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">{serv.desc}</p>
                    </div>
                    <Link
                      href={serv.href}
                      className={`text-xs font-bold flex items-center gap-1 mt-auto ${
                        serv.highlight ? 'text-[#FF5500] hover:underline' : 'text-[#0466c8] hover:text-[#034078]'
                      }`}
                    >
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            FAQ ACCORDION SECTION
           ======================================================== */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-[#FF5500] block mb-1">
              Clear Answers
            </span>
            <h2 className="text-3xl font-extrabold text-[#001845] tracking-tight">
              Frequently asked questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Everything you need to know about purchasing properties, land registration, Tonefo gadgets, and site tours.
            </p>
          </div>

          <FAQAccordion />
        </section>

        {/* ========================================================
            AUTHENTIC CLIENT REVIEWS SPOTLIGHT
           ======================================================== */}
        <section className="py-16 bg-slate-50 border-y border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#FF5500] block mb-1">
                Client Stories
              </span>
              <h2 className="text-3xl font-extrabold text-[#001845] tracking-tight">
                Real experiences from property buyers and gadget customers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MOCK_TESTIMONIALS.map((test) => (
                <div
                  key={test.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-card flex flex-col justify-between hover:-translate-y-1 transition-all"
                >
                  <div className="mb-6">
                    <div className="flex items-center space-x-1 mb-3 text-[#FF5500]">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FF5500] text-[#FF5500]" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                      &ldquo;{test.quote}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100 ring-2 ring-blue-100">
                      <Image src={test.avatar} alt={test.author} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{test.author}</h4>
                      <p className="text-[11px] text-[#0466c8] font-semibold">{test.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            FULL-WIDTH CALL TO ACTION BANNER
           ======================================================== */}
        <section className="relative py-20 bg-gradient-to-r from-[#001845] via-[#0466c8] to-[#001845] overflow-hidden">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Ready to Make Your Dream Property a Reality?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Speak with Mr. Eric Kwaw and our team of chartered surveyors and property consultants today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleOpenInquiry('real-estate')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF5500] hover:bg-[#e04b00] text-white font-black text-xs transition-all shadow-neon hover:scale-105"
              >
                Inquire &amp; Book Tour
              </button>
              <a
                href={COMPANY_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#0466c8] font-black text-xs hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-[#0466c8]" />
                <span>WhatsApp (+233 55 786 0299)</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Property Details Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onBookTour={() => {
          setSelectedProperty(null);
          handleOpenInquiry('real-estate');
        }}
      />

      {/* Consultation Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultService={inquiryService}
      />
    </div>
  );
}
