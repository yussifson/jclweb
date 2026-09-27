'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
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
  FileCheck,
  Palette,
  MessageCircle,
  ChevronRight
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
            1. HERO SECTION (AUTHENTIC VIDEO BACKGROUND & DUAL-CARD DESIGN)
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[92vh] lg:min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden flex flex-col justify-between">
          
          {/* Background Video with Multi-Layer Gradients */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <video
              src="https://res.cloudinary.com/dlhyawc5e/video/upload/v1779283268/projectvideo_bnftd9.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover opacity-55 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/50 to-slate-950/90 backdrop-blur-[1px]" />
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10 my-auto py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Core Headline & Dual Value Cards */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Top Location & Accreditation Pill */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping" />
                  <span>JCL Royal Group • Accra &amp; Prampram</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                  We bring new <br />
                  <span className="relative inline-block mt-1">
                    <span className="relative z-10 text-white font-black">evolution of</span>
                    <span className="absolute inset-0 bg-[#0466c8]/50 rounded-2xl transform -rotate-1 z-0" />
                  </span>{' '}
                  home &amp; land.
                </h1>

                {/* Subtext */}
                <p className="text-sm sm:text-base text-slate-200 font-medium max-w-xl leading-relaxed">
                  Experience the unified synergy of 100% litigation-free titled land, turnkey civil construction, bespoke interior decoration, and genuine Tonefo smart electricals across Ghana.
                </p>

                {/* Action CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => {
                      setSelectedService('real-estate');
                      setInquiryOpen(true);
                    }}
                    className="px-8 py-4 rounded-full bg-[#0466c8] hover:bg-[#0353a4] text-white font-extrabold text-xs sm:text-sm transition-all shadow-xl shadow-[#0466c8]/40 inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Request Services</span>
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </button>

                  <a
                    href={COMPANY_INFO.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm transition-all shadow-xl inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>

                {/* Bottom Glass Value Banner */}
                <div className="pt-4">
                  <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 max-w-xl space-y-1 shadow-2xl">
                    <p className="text-lg sm:text-xl font-extrabold text-white">Available now in Ghana.</p>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium">
                      Litigation-free titled land, turnkey civil construction, luxury interior styling, and Tonefo electronics from one accountable team.
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Column: Hero Interactive Visual Showcase Cards */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* Top Quick Link Card */}
                <Link
                  href="/services"
                  className="group relative flex h-24 sm:h-28 flex-col justify-end overflow-hidden rounded-3xl bg-[#0466c8] hover:bg-[#0353a4] p-6 text-white shadow-2xl transition-all border border-blue-400/30"
                >
                  <ArrowUpRight className="absolute right-5 top-5 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <span className="text-xs font-bold text-blue-200 uppercase tracking-wider">Ecosystem Capabilities</span>
                  <p className="text-lg sm:text-xl font-extrabold leading-tight">A realm of infinite possibilities</p>
                </Link>

                {/* Dual Featured Properties & Tonefo Preview Box */}
                <div className="relative rounded-3xl bg-white/95 backdrop-blur-md p-3.5 shadow-2xl border border-white/30 space-y-3">
                  <div className="grid grid-cols-2 gap-3 min-h-[220px] sm:min-h-[260px]">
                    
                    {/* Visual 1 */}
                    <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-black/5">
                      <Image
                        src="https://res.cloudinary.com/dlhyawc5e/image/upload/v1779141605/image_mo2c4a.png"
                        alt="JCL Luxury Property"
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-contain p-2 drop-shadow-md hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-[#001845] text-white text-[9px] font-black uppercase">
                        Master Build
                      </div>
                    </div>

                    {/* Visual 2 */}
                    <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-black/5">
                      <Image
                        src="https://res.cloudinary.com/dlhyawc5e/image/upload/v1779220660/heroslide1_zu4ir8.jpg"
                        alt="JCL Architectural Residence"
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-[#FF5500] text-white text-[9px] font-black uppercase">
                        Titled Land
                      </div>
                    </div>

                  </div>

                  {/* Floating Circular Thumbnails Strip at Bottom Right */}
                  <div className="flex items-center justify-between px-2 pt-1">
                    <div className="text-[11px] font-bold text-slate-800">
                      <span>Certified Cadastral &amp; Tonefo Tech</span>
                    </div>

                    <div className="flex items-center -space-x-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-md relative bg-white">
                        <Image src="https://res.cloudinary.com/dlhyawc5e/image/upload/v1779141605/image_mo2c4a.png" alt="Preview 1" fill className="object-contain" />
                      </div>
                      <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-md relative bg-white">
                        <Image src="https://res.cloudinary.com/dlhyawc5e/image/upload/v1779220660/heroslide1_zu4ir8.jpg" alt="Preview 2" fill className="object-cover" />
                      </div>
                      <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-md relative bg-white">
                        <Image src="https://res.cloudinary.com/dlhyawc5e/image/upload/v1779220660/heroslide4_tibcil.jpg" alt="Preview 3" fill className="object-cover" />
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* Hero Bottom Navigation & Direct Hotline */}
          <div className="max-w-7xl mx-auto w-full relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-4">
              <Link href="/services" className="hover:text-white font-bold flex items-center gap-1">
                <Building2 className="w-4 h-4 text-[#0466c8]" />
                <span>Real Estate</span>
              </Link>
              <Link href="/land" className="hover:text-white font-bold flex items-center gap-1">
                <Compass className="w-4 h-4 text-[#FF5500]" />
                <span>Titled Land</span>
              </Link>
              <Link href="/services#service-interior-deco" className="hover:text-white font-bold flex items-center gap-1">
                <Palette className="w-4 h-4 text-[#0466c8]" />
                <span>Interior Deco</span>
              </Link>
              <Link href="/services#service-tonefo" className="hover:text-white font-bold flex items-center gap-1">
                <Zap className="w-4 h-4 text-[#FF5500]" />
                <span>Tonefo Tech</span>
              </Link>
            </div>

            <Link href="/contact" className="hover:text-white underline underline-offset-4 font-semibold text-slate-200">
              Not sure where to start? Talk directly to our CEO &amp; Engineering team →
            </Link>
          </div>

        </section>

        {/* ══════════════════════════════════════════════════════════════
            2. BRAND WATERMARK & CAPABILITY TICKER STRIP
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative py-8 bg-[#F8FAFC] border-y border-slate-200/80 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-6 text-center md:text-left">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#0466c8] animate-pulse" />
                <span className="text-xs sm:text-sm font-black text-[#001845] uppercase tracking-widest">
                  JCL Royal Group Ecosystem
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#0466c8]" /> 100% Litigation-Free Land</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#FF5500]" /> Turnkey Civil Construction</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#0466c8]" /> Luxury Interior Deco</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#FF5500]" /> Tonefo Smart Electricals</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            3. WHAT WE DO BEST (ENHANCED 4-COLUMN VISUAL SHOWCASE)
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Header Block */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0466c8] border border-blue-100 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>What We Do Best</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-[#001845] tracking-tight">
                  Property, land, construction &amp; interior solutions that feel sharp and simple.
                </h2>
              </div>
              <div className="shrink-0">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0466c8] hover:bg-[#0353a4] text-white font-extrabold text-xs sm:text-sm transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>See All 5 Services</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>

            {/* 4 Authentic Showcase Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Property & Land */}
              <Link
                href="/land"
                className="group relative min-h-[380px] rounded-[32px] overflow-hidden bg-slate-950 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-end p-6 text-white"
              >
                <Image
                  src="https://res.cloudinary.com/dlhyawc5e/image/upload/v1778683097/Modern_Luxury_Bangla_Villa_sm7qxz.jpg"
                  alt="Property Sales & Titled Land"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="relative z-10 space-y-2">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-black uppercase text-white inline-block">
                    Titled Land
                  </span>
                  <h3 className="text-xl font-extrabold text-white">Litigation-Free Land Sales</h3>
                  <p className="text-xs text-slate-200 line-clamp-2 font-medium">
                    Verified Lands Commission search reports, GPS barcoded coordinates, and permanent boundary beacons.
                  </p>
                  <div className="pt-2 flex items-center text-xs font-bold text-[#FF5500] group-hover:text-white transition-colors">
                    <span>Inspect Land Parcels</span> <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              </Link>

              {/* Card 2: Building Construction */}
              <Link
                href="/services"
                className="group relative min-h-[380px] rounded-[32px] overflow-hidden bg-slate-950 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-end p-6 text-white"
              >
                <Image
                  src="https://res.cloudinary.com/dlhyawc5e/image/upload/v1778683100/download_vqjuzk.jpg"
                  alt="Building & Construction"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="relative z-10 space-y-2">
                  <span className="px-3 py-1 rounded-full bg-[#0466c8] text-[10px] font-black uppercase text-white inline-block">
                    10-Yr Warranty
                  </span>
                  <h3 className="text-xl font-extrabold text-white">Turnkey Civil Building</h3>
                  <p className="text-xs text-slate-200 line-clamp-2 font-medium">
                    Structural blueprints, BOQ transparency, quality masonry, roofing, and turnkey walk-through handover.
                  </p>
                  <div className="pt-2 flex items-center text-xs font-bold text-[#FF5500] group-hover:text-white transition-colors">
                    <span>Explore Construction</span> <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              </Link>

              {/* Card 3: Interior Decoration */}
              <Link
                href="/services#service-interior-deco"
                className="group relative min-h-[380px] rounded-[32px] overflow-hidden bg-slate-950 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-end p-6 text-white"
              >
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                  alt="Interior Decoration & Fit-outs"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="relative z-10 space-y-2">
                  <span className="px-3 py-1 rounded-full bg-[#FF5500] text-[10px] font-black uppercase text-white inline-block">
                    Interior Styling
                  </span>
                  <h3 className="text-xl font-extrabold text-white">Interior Deco &amp; Fit-Outs</h3>
                  <p className="text-xs text-slate-200 line-clamp-2 font-medium">
                    3D photorealistic visualization, custom cabinetry, Italian marble tiling, and turnkey furniture curation.
                  </p>
                  <div className="pt-2 flex items-center text-xs font-bold text-[#FF5500] group-hover:text-white transition-colors">
                    <span>Discover Interior Deco</span> <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              </Link>

              {/* Card 4: Tonefo Gadgets */}
              <Link
                href="/services#service-tonefo"
                className="group relative min-h-[380px] rounded-[32px] overflow-hidden bg-slate-950 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-end p-6 text-white"
              >
                <Image
                  src="https://res.cloudinary.com/dlhyawc5e/image/upload/v1778682789/applc1_xs8bbg.jpg"
                  alt="Tonefo Gadgets & Solar"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="relative z-10 space-y-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-600 text-[10px] font-black uppercase text-white inline-block">
                    Tonefo Division
                  </span>
                  <h3 className="text-xl font-extrabold text-white">Tonefo Gadgets &amp; Solar</h3>
                  <p className="text-xs text-slate-200 line-clamp-2 font-medium">
                    Genuine electronics sourcing, solar microgrid installations, and smart home automation with local warranty.
                  </p>
                  <div className="pt-2 flex items-center text-xs font-bold text-[#FF5500] group-hover:text-white transition-colors">
                    <span>Browse Electronics</span> <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              </Link>

            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            4. THE JCL DIFFERENCE (MEDIA SHOWCASE)
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-[#F8FAFC] border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0466c8] border border-blue-100 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0466c8]" />
                <span>The JCL Advantage</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#001845] tracking-tight">
                The JCL Difference
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium">
                Integrated real estate development, chartered land surveying, and Tonefo electronics under one roof.
              </p>
            </div>

            {/* Split Media & Value Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Real Estate & Construction Expertise */}
              <div className="lg:col-span-6 bg-white rounded-[36px] p-8 sm:p-10 border border-slate-200/90 shadow-xl flex flex-col justify-between space-y-6">
                <div className="relative h-60 rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src="https://res.cloudinary.com/dlhyawc5e/image/upload/v1778744174/download_1_zlxwgi.jpg"
                    alt="Real Estate Construction Expertise"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-extrabold text-[#001845]">
                    Real Estate, Building &amp; Construction Expertise
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    From land due diligence and site appraisal to architectural blueprinting, project management, and final key handover, our construction and real-estate teams coordinate every single step. We ensure full compliance with Ghanaian building codes and provide a 10-year structural warranty.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedService('engineering');
                    setInquiryOpen(true);
                  }}
                  className="w-full py-3.5 rounded-full bg-slate-50 hover:bg-[#0466c8] text-[#001845] hover:text-white font-bold text-xs transition-colors border border-slate-200 flex items-center justify-center gap-2"
                >
                  <span>Book Construction Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Right Column: Tonefo Gadgets & Electronics Division */}
              <div className="lg:col-span-6 bg-white rounded-[36px] p-8 sm:p-10 border border-slate-200/90 shadow-xl flex flex-col justify-between space-y-6">
                <div className="relative h-60 rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src="https://res.cloudinary.com/dlhyawc5e/image/upload/v1778745059/set-modern-home-appliances-grey-table_495423-30742_qe72re.jpg"
                    alt="Gadgets & Electronics Supply"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-extrabold text-[#001845]">
                    Gadgets &amp; Electronics — Sourcing, Install &amp; Support
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    We curate and supply genuine electronics, solar energy systems, and smart home automation directly from verified manufacturers. Our certified technicians handle professional on-site setup, warranty backing, and ongoing local after-sales maintenance.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedService('tonefo');
                    setInquiryOpen(true);
                  }}
                  className="w-full py-3.5 rounded-full bg-slate-50 hover:bg-[#FF5500] text-[#001845] hover:text-white font-bold text-xs transition-colors border border-slate-200 flex items-center justify-center gap-2"
                >
                  <span>Explore Tonefo Electronics</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            5. PROPERTY PORTFOLIO TYPES (NO PRICES)
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
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
            6. TITLED LAND PORTFOLIOS (NO PRICES)
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-[#F8FAFC] border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
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
            7. DIRECT CEO & ENGINEERING LEADERSHIP GUARANTEE
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#001845] via-[#0466c8] to-[#001233] text-white rounded-[36px] p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden border border-blue-400/20">
              
              {/* Subtle background glow */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl shrink-0 bg-white/10">
                <Image
                  src={COMPANY_INFO.ceo.image}
                  alt={COMPANY_INFO.ceo.name}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>

              <div className="space-y-3 text-center lg:text-left flex-grow relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-extrabold border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping" />
                  <span>Direct CEO &amp; Senior Engineering Leadership</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                  &ldquo;You work directly with licensed surveyors, chartered civil engineers, and company leadership—with zero speculative markup or litigation risk.&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 font-medium leading-relaxed max-w-3xl">
                  Led by <strong>Mr. Eric Kwaw</strong> (CEO &amp; Founder), every parcel allocation and turnkey construction contract is backed by rigorous Lands Commission searches, stamped barcoded coordinates, and clear contractual guarantees.
                </p>
              </div>

              <div className="shrink-0 relative z-10">
                <a
                  href={COMPANY_INFO.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm transition-all shadow-xl inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Direct WhatsApp Line</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            8. CLIENT TESTIMONIALS SECTION (AUTHENTIC VERIFIED DATA)
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-gradient-to-b from-[#F8FAFC] via-blue-50/20 to-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0466c8] border border-blue-100 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>Verified Client Stories</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001845] tracking-tight">
                Real experiences from property buyers and gadget customers.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Hear directly from individuals and families who trusted JCL Royal Group for land, homes, and Tonefo electronics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {MOCK_TESTIMONIALS.map((test, index) => (
                <div
                  key={test.id}
                  className={`bg-white rounded-[32px] p-8 border border-slate-200/90 shadow-xl hover:shadow-2xl hover:border-[#0466c8] transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group ${
                    index === 0 ? 'md:-rotate-1' : index === 2 ? 'md:rotate-1' : ''
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex text-[#FF5500]">
                        {[...Array(test.rating)].map((_, i) => (
                          <span key={i} className="text-sm">★</span>
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Verified Purchase</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed italic">
                      &ldquo;{test.quote}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                      <Image
                        src={test.avatar}
                        alt={test.author}
                        fill
                        className="object-cover"
                      />
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
            9. FAQS SECTION
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
