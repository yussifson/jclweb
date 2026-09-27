'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  HardHat,
  Zap,
  Compass,
  CheckCircle2,
  Check,
  PhoneCall,
  Sparkles,
  MapPin,
  Clock,
  Layers,
  FileCheck
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import InquiryModal from '@/components/InquiryModal';
import PropertyCard from '@/components/PropertyCard';
import FAQAccordion from '@/components/FAQAccordion';
import {
  COMPANY_INFO,
  PROPERTY_TYPES_PORTFOLIO,
  LAND_CATEGORIES_PORTFOLIO,
  MOCK_TESTIMONIALS,
  PropertyTypePortfolio
} from '@/data/mockData';

export default function Home() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('real-estate');

  const handleInquireProperty = (prop: PropertyTypePortfolio) => {
    setSelectedService('real-estate');
    setInquiryOpen(true);
  };

  const handleInquireLand = () => {
    setSelectedService('land');
    setInquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001845] selection:bg-[#0466c8] selection:text-white">
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="flex-grow">

        {/* ══════════════════════════════════════════════════════════════
            1. HERO SECTION (TRIDLOOP ARCHITECTURAL AESTHETIC)
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-[#F8FAFC] via-white to-white overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0466c8] text-xs font-bold uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping" />
              <span>Accra &amp; Prampram Master-Planned Lands</span>
            </div>

            {/* Main Headline with Marker Highlight Pill */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#001845] tracking-tight leading-[1.12]">
              Your future. <br className="hidden sm:inline" />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 px-4 py-0.5 text-[#001845] font-black">Your Land &amp; Property.</span>
                <span className="absolute inset-0 bg-[#0466c8]/15 rounded-2xl transform -rotate-1 z-0 shadow-xs" />
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed pt-2">
              JCL Royal Group is Ghana&apos;s trusted real estate and land development company. We deliver 100% litigation-free titled land, turnkey master-built residential villas, commercial facilities, and genuine Tonefo smart electrical gadgets.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  setSelectedService('real-estate');
                  setInquiryOpen(true);
                }}
                className="px-8 py-4 rounded-full bg-[#0466c8] hover:bg-[#0353a4] text-white font-extrabold text-sm transition-all shadow-xl shadow-[#0466c8]/25 inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book Official Consultation</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <Link
                href="/land"
                className="px-8 py-4 rounded-full bg-white border border-slate-200 text-[#001845] font-bold text-sm hover:bg-slate-50 transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <span>Explore Titled Land</span>
                <ShieldCheck className="w-4 h-4 text-[#FF5500]" />
              </Link>
            </div>

            {/* Social Proof Pill with Team Avatars */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center -space-x-2.5">
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-sm relative">
                  <Image src={COMPANY_INFO.ceo.image} alt={COMPANY_INFO.ceo.name} fill className="object-cover" />
                </div>
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-sm relative">
                  <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Consultant" fill className="object-cover" />
                </div>
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-sm relative">
                  <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" alt="Surveyor" fill className="object-cover" />
                </div>
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-sm relative">
                  <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Engineer" fill className="object-cover" />
                </div>
              </div>
              <div className="text-left text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5 text-[#0466c8] font-extrabold text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0466c8]" />
                  <span>Audited by Licensed Surveyors &amp; Civil Engineers</span>
                </div>
                <span className="text-slate-500 text-[11px]">1,250+ Titles &amp; Plots Delivered • Zero Litigation</span>
              </div>
            </div>

          </div>

          {/* 5-Tile Floating Capability Grid (Tridloop Pattern) */}
          <div className="max-w-5xl mx-auto pt-16 pb-4 relative">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6 items-center justify-center">
              
              {/* Tile 1: Titled Land */}
              <Link
                href="/land"
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center space-y-3 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0466c8] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                  <Compass className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-[#001845]">Titled Land Sales</span>
              </Link>

              {/* Tile 2: Luxury Residential */}
              <Link
                href="/properties"
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center space-y-3 sm:translate-y-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FF5500]/10 text-[#FF5500] flex items-center justify-center shadow-inner border border-[#FF5500]/20 group-hover:scale-105 transition-transform">
                  <Building2 className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-[#001845]">Luxury Residences</span>
              </Link>

              {/* Tile 3: Turnkey Construction (Center Feature Accent) */}
              <Link
                href="/services"
                className="p-6 rounded-3xl bg-white text-[#001845] border-2 border-[#0466c8] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center space-y-3 col-span-2 sm:col-span-1 sm:-translate-y-2 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0466c8] text-white flex items-center justify-center shadow-inner font-bold group-hover:scale-105 transition-transform">
                  <HardHat className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-[#001845]">Turnkey Building</span>
              </Link>

              {/* Tile 4: Tonefo Gadgets */}
              <Link
                href="/services"
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center space-y-3 sm:translate-y-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FF5500]/10 text-[#FF5500] flex items-center justify-center shadow-inner border border-[#FF5500]/20 group-hover:scale-105 transition-transform">
                  <Zap className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-[#001845]">Tonefo Gadgets</span>
              </Link>

              {/* Tile 5: Cadastral Survey */}
              <Link
                href="/services"
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center space-y-3 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0466c8] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-[#001845]">GPS Surveying</span>
              </Link>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            2. PROPERTY DEVELOPMENT TYPES (NO PRICES, NO SPECIFIC STREETS)
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Header Block */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-100">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0466c8] border border-blue-100 text-xs font-bold uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>Development Portfolios</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001845] tracking-tight">
                  Architectural Property Types &amp; Master Builds
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  Every property class is custom-tailored to your architectural preferences, land topography, and family requirements with full structural engineering blueprints.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/properties"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-[#001845] font-bold text-xs transition-colors"
                >
                  <span>View All Categories</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0466c8]" />
                </Link>
              </div>
            </div>

            {/* 3-Column Grid of Property Portfolio Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROPERTY_TYPES_PORTFOLIO.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onInquire={handleInquireProperty}
                />
              ))}
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            3. TITLED LAND PORTFOLIOS (NO PRICES, VERIFIED TITLE FOCUS)
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-[#F8FAFC] border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Header Block */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0466c8]/10 text-[#0466c8] border border-[#0466c8]/20 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>100% Litigation-Free Guarantee</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#001845] tracking-tight">
                Titled Land Categories &amp; Master Plots
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
                Guaranteed legal title, barcoded cadastral GPS surveys, and permanent boundary beacons in high-growth prime corridors across Greater Accra.
              </p>
            </div>

            {/* 4 Land Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {LAND_CATEGORIES_PORTFOLIO.map((land) => (
                <div
                  key={land.id}
                  className="bg-white rounded-[32px] border border-slate-200/90 shadow-xl hover:shadow-2xl hover:border-[#0466c8] transition-all duration-300 p-7 flex flex-col justify-between group space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[#0466c8] text-xs font-black border border-blue-100">
                        {land.zoning}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{land.titleStatus}</span>
                      </span>
                    </div>

                    <div className="relative h-56 rounded-2xl overflow-hidden bg-slate-100">
                      <Image
                        src={land.image}
                        alt={land.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <h3 className="text-xl font-extrabold text-[#001845] tracking-tight">
                      {land.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {land.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-700">
                      {land.keyFeatures.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#0466c8] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
                      <strong className="text-[#001845] block mb-0.5">Plot Availability &amp; Sizes:</strong>
                      <span>{land.allocationSizes}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      onClick={handleInquireLand}
                      className="w-full py-3.5 rounded-full bg-[#0466c8] hover:bg-[#0353a4] text-white font-extrabold text-xs transition-all shadow-md flex items-center justify-center gap-2 hover:scale-[1.01]"
                    >
                      <span>Book Land Site Inspection</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            4. DIRECT CEO & ENGINEERING LEADERSHIP GUARANTEE (TRIDLOOP PATTERN)
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[36px] p-8 sm:p-12 border border-slate-200/90 shadow-2xl flex flex-col lg:flex-row items-center gap-8">
              
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden border-4 border-[#0466c8] shadow-lg shrink-0">
                <Image
                  src={COMPANY_INFO.ceo.image}
                  alt={COMPANY_INFO.ceo.name}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>

              <div className="space-y-3 text-center lg:text-left flex-grow">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0466c8]/10 text-[#0466c8] text-xs font-extrabold">
                  <span>● Direct CEO &amp; Senior Engineering Leadership</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#001845] tracking-tight leading-snug">
                  &ldquo;You work directly with licensed surveyors, chartered civil engineers, and company leadership—with zero speculative markup or litigation risk.&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-3xl">
                  Led by <strong>Mr. Eric Kwaw</strong> (CEO &amp; Founder), every parcel allocation and turnkey construction contract is backed by rigorous Lands Commission searches, stamped barcoded coordinates, and clear contractual guarantees.
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href={COMPANY_INFO.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm transition-all shadow-xl inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Direct WhatsApp Line</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            5. THE 6 PILLARS & TRUST METRICS (TRIDLOOP 1-YEAR STYLE)
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-white text-[#001845] border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Header Block */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0466c8]/10 text-[#0466c8] border border-[#0466c8]/20 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
                The JCL Royal Group Guarantee
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#001845] tracking-tight leading-tight">
                Full-spectrum real estate &amp; land engineering. <br />
                <span className="relative inline-block mt-1">
                  <span className="relative z-10 px-3 py-0.5 text-[#001845] font-black">Zero speculative risk.</span>
                  <span className="absolute inset-0 bg-[#0466c8]/15 rounded-xl transform -rotate-1 z-0 shadow-xs" />
                </span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                When you secure land or build with JCL Royal Group, every process is conducted with absolute legal transparency, precision GPS mapping, structural guarantees, and genuine Tonefo gadgets.
              </p>
            </div>

            {/* 4 Metrics Stats Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 text-center space-y-1 shadow-xs hover:border-[#0466c8] transition-all">
                <div className="text-3xl sm:text-4xl font-black text-[#0466c8]">100%</div>
                <div className="text-xs font-bold text-slate-800">Litigation-Free Guarantee</div>
                <p className="text-[11px] text-slate-500 font-medium">Lands Commission validated</p>
              </div>
              <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 text-center space-y-1 shadow-xs hover:border-[#FF5500] transition-all">
                <div className="text-3xl sm:text-4xl font-black text-[#FF5500]">1,250+</div>
                <div className="text-xs font-bold text-slate-800">Titles &amp; Plots Delivered</div>
                <p className="text-[11px] text-slate-500 font-medium">Ghana &amp; Diaspora owners</p>
              </div>
              <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 text-center space-y-1 shadow-xs hover:border-[#0466c8] transition-all">
                <div className="text-3xl sm:text-4xl font-black text-[#0466c8]">10 Yrs</div>
                <div className="text-xs font-bold text-slate-800">Structural Build Warranty</div>
                <p className="text-[11px] text-slate-500 font-medium">Turnkey civil masonry</p>
              </div>
              <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 text-center space-y-1 shadow-xs hover:border-[#FF5500] transition-all">
                <div className="text-3xl sm:text-4xl font-black text-[#FF5500]">Tonefo</div>
                <div className="text-xs font-bold text-slate-800">Direct Smart Gadgets</div>
                <p className="text-[11px] text-slate-500 font-medium">Genuine electronics &amp; solar</p>
              </div>
            </div>

            {/* 6 Included Resources Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200/90 shadow-xl space-y-5 flex flex-col justify-between hover:border-[#0466c8] transition-all group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0466c8] flex items-center justify-center font-bold border border-blue-200 group-hover:scale-105 transition-transform">
                      <FileCheck className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-[#0466c8]/10 text-[#0466c8] border border-[#0466c8]/20">
                      LEGAL SECURITY
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#001845]">Lands Commission Search &amp; Due Diligence</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    Official search records from the Lands Commission, verification with traditional stool authorities, and court registry checks to ensure 100% clean title.
                  </p>
                </div>
                <div className="space-y-2 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0466c8] shrink-0" /> Stamped search report</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0466c8] shrink-0" /> Stool custodian clearance</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0466c8] shrink-0" /> Indenture registration support</div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200/90 shadow-xl space-y-5 flex flex-col justify-between hover:border-[#FF5500] transition-all group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#FF5500]/10 text-[#FF5500] flex items-center justify-center font-bold border border-[#FF5500]/20 group-hover:scale-105 transition-transform">
                      <Compass className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-[#FF5500]/10 text-[#FF5500] border border-[#FF5500]/20">
                      GPS ACCURACY
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#001845]">Barcoded Cadastral GPS Surveying</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    Licensed surveyors conduct differential GPS mapping, install concrete boundary pillars, and certify official barcoded site plans.
                  </p>
                </div>
                <div className="space-y-2 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FF5500] shrink-0" /> Permanent concrete boundary beacons</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FF5500] shrink-0" /> Barcoded Survey Division site plans</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FF5500] shrink-0" /> Guided on-site beacon confirmation</div>
                </div>
              </div>

              {/* Card 3 (Center Highlight) */}
              <div className="bg-white p-8 rounded-[32px] border-2 border-[#0466c8] shadow-2xl space-y-5 flex flex-col justify-between relative group transform md:-translate-y-2">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#0466c8] text-white flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform">
                      <HardHat className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-[#0466c8] text-white">
                      TURNKEY BUILDING
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#001845]">Turnkey Architectural &amp; Civil Construction</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    Comprehensive construction execution from structural blueprints and municipal permits to luxury masonry, roofing, tiling, and turnkey key handover.
                  </p>
                </div>
                <div className="space-y-2 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0466c8] shrink-0" /> 10-year structural engineering warranty</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0466c8] shrink-0" /> Transparent BOQ milestone payments</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0466c8] shrink-0" /> Weekly HD video construction progress</div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200/90 shadow-xl space-y-5 flex flex-col justify-between hover:border-[#FF5500] transition-all group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#FF5500]/10 text-[#FF5500] flex items-center justify-center font-bold border border-[#FF5500]/20 group-hover:scale-105 transition-transform">
                      <Zap className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      TONEFO SMART TECH
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#001845]">Tonefo Smart Electronics &amp; Solar Microgrids</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    Direct sourcing of authentic electrical gadgets, home automation, CCTV surveillance, and hybrid solar microgrid setups with local warranty.
                  </p>
                </div>
                <div className="space-y-2 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FF5500] shrink-0" /> Direct manufacturer warranty</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FF5500] shrink-0" /> Professional on-site solar engineering</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FF5500] shrink-0" /> Tonefo tech repair support</div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200/90 shadow-xl space-y-5 flex flex-col justify-between hover:border-[#0466c8] transition-all group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0466c8] flex items-center justify-center font-bold border border-blue-200 group-hover:scale-105 transition-transform">
                      <Clock className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-blue-50 text-[#0466c8]">
                      DIASPORA DESK
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#001845]">Dedicated Remote &amp; Diaspora Oversight</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    Streamlined property acquisition and building services for clients abroad in the UK, USA, Canada, and Europe with virtual walkthroughs and verified documentation.
                  </p>
                </div>
                <div className="space-y-2 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0466c8] shrink-0" /> Virtual GPS coordinate walkthroughs</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0466c8] shrink-0" /> Secure international bank transfers</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0466c8] shrink-0" /> Power of attorney &amp; deed couriering</div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200/90 shadow-xl space-y-5 flex flex-col justify-between hover:border-[#FF5500] transition-all group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 text-[#001845] flex items-center justify-center font-bold border border-slate-200 group-hover:scale-105 transition-transform">
                      <Layers className="w-6 h-6 text-[#0466c8]" />
                    </div>
                    <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      INFRASTRUCTURE
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#001845]">Master-Planned Infrastructure Delivery</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    All JCL residential parcels feature graded access roads, immediate national grid electrical connection, and underground stormwater drainage layouts.
                  </p>
                </div>
                <div className="space-y-2 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0466c8] shrink-0" /> Graded access roads</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0466c8] shrink-0" /> Electrical poles &amp; national grid access</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0466c8] shrink-0" /> Immediate construction readiness</div>
                </div>
              </div>

            </div>

            {/* Bottom Ownership Assurance Box */}
            <div className="bg-[#F8FAFC] rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0466c8]/10 text-[#0466c8] text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>100% Registered Title &amp; Zero Dispute Guarantee</span>
                </div>
                <h4 className="text-lg sm:text-xl font-extrabold text-[#001845]">
                  Complete Peace of Mind on Every Parcel &amp; Building Contract
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  We guarantee full legal title registration, licensed surveyor boundary certification, and milestone-backed building execution for every single client.
                </p>
              </div>
              <div className="shrink-0">
                <button
                  onClick={() => setInquiryOpen(true)}
                  className="px-8 py-4 rounded-full bg-[#0466c8] hover:bg-[#0353a4] text-white font-extrabold text-sm transition-all shadow-xl shadow-[#0466c8]/25 inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Book Free Inspection Tour</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            6. CLIENT TESTIMONIALS SECTION
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-[#F8FAFC] border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0466c8] border border-blue-100 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>Verified Client Stories</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001845] tracking-tight">
                Trusted by Homeowners &amp; Diaspora Investors
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {MOCK_TESTIMONIALS.map((test) => (
                <div
                  key={test.id}
                  className="bg-white rounded-[32px] p-8 border border-slate-200/90 shadow-xl flex flex-col justify-between space-y-6"
                >
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed italic">
                    &ldquo;{test.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100 shrink-0">
                      <Image src={test.avatar} alt={test.author} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-[#001845]">{test.author}</h4>
                      <p className="text-xs text-[#0466c8] font-bold">{test.title}</p>
                      <p className="text-[11px] text-slate-500 font-medium">{test.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            7. FAQS SECTION
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0466c8] border border-blue-100 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0466c8]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001845] tracking-tight">
                Clear Answers to Essential Land &amp; Property Questions
              </h2>
            </div>

            <FAQAccordion />

          </div>
        </section>

      </main>

      <Footer />
      <FloatingActions onOpenInquiry={() => setInquiryOpen(true)} />
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
