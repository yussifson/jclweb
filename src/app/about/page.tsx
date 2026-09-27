'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import InquiryModal from '@/components/InquiryModal';
import AgentCard from '@/components/AgentCard';
import { MOCK_AGENTS, COMPANY_INFO } from '@/data/mockData';
import {
  Building2,
  ShieldCheck,
  Award,
  Target,
  CheckCircle2,
  Zap,
  ArrowRight,
  Sparkles,
  Compass,
  HardHat,
  Palette,
  Check,
  FileCheck,
  Users,
  Globe2,
  Clock,
  Layers,
  MapPin
} from 'lucide-react';

export default function AboutPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#0466c8] selection:text-white">
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="flex-grow">

        {/* ══════════════════════════════════════════════════════════════
            1. HERO SECTION (TRIDLOOP ARCHITECTURAL AESTHETIC)
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-[#F8FAFC] via-white to-white border-b border-slate-100 overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0466c8] text-xs font-bold uppercase tracking-wider shadow-xs">
              <Building2 className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>About JCL Royal Group Ltd</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#001845] tracking-tight leading-[1.12]">
              Building trust. <br className="hidden sm:inline" />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 px-4 py-0.5 text-[#001845] font-black">Demarcating value.</span>
                <span className="absolute inset-0 bg-[#0466c8]/15 rounded-2xl transform -rotate-1 z-0 shadow-xs" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed pt-2">
              Founded by <strong>Mr. Eric Kwaw</strong>, JCL Royal Group is a premier Ghanaian real estate development, cadastral surveying, and smart technology enterprise. We exist to eliminate land disputes, champion architectural longevity, deliver luxury interior styling, and provide genuine Tonefo electronics across Ghana.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setInquiryOpen(true)}
                className="px-8 py-4 rounded-full bg-[#0466c8] hover:bg-[#0353a4] text-white font-extrabold text-sm transition-all shadow-xl shadow-[#0466c8]/25 inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Consult Executive Team</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              <Link
                href="/services"
                className="px-8 py-4 rounded-full bg-white border border-slate-200 text-[#001845] font-bold text-sm hover:bg-slate-50 transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <span>Explore Capabilities</span>
                <Sparkles className="w-4 h-4 text-[#FF5500]" />
              </Link>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            2. TYPOGRAPHIC STAT STATEMENT
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center relative">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#001845] leading-[1.3] tracking-tight max-w-5xl mx-auto">
              Delivering secure, litigation-free land, master-built villas, and bespoke interiors for{" "}
              <span className="relative inline-block">
                <span className="relative z-10 px-2 text-[#001845] bg-[#0466c8]/20 rounded-lg">Families &amp; Diaspora Clients</span>
              </span>{" "}
              — with verified titles, complete transparency, and zero legal disputes.
            </h2>

            {/* Feature Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
              <div className="px-4 py-2 rounded-full bg-[#F8FAFC] border border-slate-200 text-xs font-bold text-[#001845] flex items-center gap-2 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#0466c8]" />
                Lands Commission Search Certified
              </div>
              <div className="px-4 py-2 rounded-full bg-[#F8FAFC] border border-slate-200 text-xs font-bold text-[#001845] flex items-center gap-2 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
                10-Year Turnkey Structural Warranty
              </div>
              <div className="px-4 py-2 rounded-full bg-[#F8FAFC] border border-slate-200 text-xs font-bold text-[#001845] flex items-center gap-2 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#0466c8]" />
                Tonefo Direct Tech Sourcing
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            3. THE JCL STORY & CORPORATE HERITAGE
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-[#F8FAFC] border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Text Story */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0466c8] border border-blue-100 text-xs font-bold uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>Our Heritage &amp; Genesis</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001845] tracking-tight">
                  Born from a Mission to Protect Property Investors in Ghana
                </h2>

                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  For decades, acquiring land and constructing property in Ghana has been fraught with chieftaincy disputes, fraudulent multi-sales, unregistered boundaries, and unreliable contractors. Countless hardworking residents and diaspora returnees lost their life savings to speculative land agents.
                </p>

                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  <strong>JCL Royal Group was founded to change this reality forever.</strong> By establishing an uncompromised standard anchored on certified cadastral GPS surveying, direct traditional stool clearances, mandatory statutory searches at the Lands Commission, and licensed civil engineering, we transformed property acquisition into a safe, transparent, and joyful milestone.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <div className="text-2xl font-black text-[#0466c8]">100%</div>
                    <div className="text-xs font-bold text-slate-800">Clean Legal Due Diligence</div>
                    <p className="text-[11px] text-slate-500 font-medium">Every parcel certified before listing</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <div className="text-2xl font-black text-[#FF5500]">End-to-End</div>
                    <div className="text-xs font-bold text-slate-800">Integrated Capability</div>
                    <p className="text-[11px] text-slate-500 font-medium">Land, Build, Deco &amp; Tonefo Tech</p>
                  </div>
                </div>
              </div>

              {/* Right Architectural Image Gallery Card */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                    alt="JCL Royal Group Development"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FF5500] block">
                      Master-Planned Excellence
                    </span>
                    <span className="text-base font-extrabold">
                      Prampram &amp; Greater Accra Enclaves
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0466c8] flex items-center justify-center shrink-0 font-bold">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <strong className="text-[#001845] block font-extrabold">Serving the Global Ghanaian Diaspora</strong>
                    <span className="text-slate-500 font-medium">Over 45% of clients in UK, USA, Canada &amp; Europe</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            4. DETAILED CEO & FOUNDER LEADERSHIP SECTION
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#001845] via-[#0466c8] to-[#001233] text-white rounded-[36px] p-8 sm:p-14 shadow-2xl relative overflow-hidden border border-blue-400/20">
              
              <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-blue-400/15 blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                
                {/* CEO Image */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/30 bg-slate-900">
                    <Image
                      src={COMPANY_INFO.ceo.image}
                      alt="Mr. Eric Kwaw, CEO & Founder"
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 text-center">
                      <span className="text-lg font-extrabold text-white block">Mr. Eric Kwaw</span>
                      <span className="text-xs text-[#FF5500] font-bold uppercase tracking-wider">CEO &amp; Founder</span>
                    </div>
                  </div>
                </div>

                {/* CEO Biography & Executive Philosophy */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-black uppercase border border-white/20">
                    Executive Leadership
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                    Mr. Eric Kwaw
                  </h2>

                  <p className="text-lg font-extrabold text-blue-200 leading-snug">
                    &ldquo;{COMPANY_INFO.ceo.tagline}&rdquo;
                  </p>

                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-medium">
                    {COMPANY_INFO.ceo.bio}
                  </p>

                  <div className="space-y-3 pt-2 text-xs font-semibold text-slate-100">
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#FF5500] shrink-0" />
                      <span>Direct oversight on all Lands Commission title deeds and cadastral surveys</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#FF5500] shrink-0" />
                      <span>Founder of Tonefo Gadgets &amp; Solar Solutions distribution arm</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#FF5500] shrink-0" />
                      <span>Direct personal consultation available for high-capacity investors &amp; diaspora clients</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => setInquiryOpen(true)}
                      className="px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#001845] text-xs sm:text-sm font-extrabold transition-all shadow-xl inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Book Direct CEO Consultation</span>
                      <ArrowRight className="w-4 h-4 text-[#0466c8]" />
                    </button>
                    <a
                      href={COMPANY_INFO.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-extrabold transition-all shadow-md inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>WhatsApp Direct</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            5. THE 5-PILLAR ECOSYSTEM BENTO GRID
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-[#F8FAFC] border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-xs font-bold text-[#0466c8] uppercase tracking-wider border border-blue-100">
                Integrated Capabilities
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#001845] tracking-tight">
                The 5 Pillars of JCL Royal Group
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium">
                A unified lifecycle covering every dimension of land acquisition, construction, interior decoration, and smart electronics.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Tile 1: Titled Land */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200/90 shadow-xl flex flex-col justify-between space-y-6 hover:border-[#0466c8] transition-all">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0466c8] flex items-center justify-center font-bold">
                    <Compass className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#0466c8]/10 text-[#0466c8]">
                    01 • LAND ACQUISITION
                  </span>
                  <h3 className="text-xl font-extrabold text-[#001845]">Litigation-Free Titled Land</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    100% dispute-free parcels with verified Lands Commission search reports, barcoded cadastral plans, and permanent boundary pillars.
                  </p>
                </div>
                <Link href="/land" className="text-xs font-bold text-[#0466c8] hover:underline inline-flex items-center gap-1">
                  Explore Land Portfolios <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Tile 2: Turnkey Construction */}
              <div className="bg-white p-8 rounded-[32px] border-2 border-[#0466c8] shadow-2xl flex flex-col justify-between space-y-6 transform md:-translate-y-2">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0466c8] text-white flex items-center justify-center font-bold shadow-md">
                    <HardHat className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#0466c8] text-white">
                    02 • TURNKEY BUILDING
                  </span>
                  <h3 className="text-xl font-extrabold text-[#001845]">Civil &amp; Residential Construction</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Architectural concept to full structural completion with 10-year warranty, transparent BOQ milestone invoices, and weekly video progress.
                  </p>
                </div>
                <Link href="/services" className="text-xs font-bold text-[#0466c8] hover:underline inline-flex items-center gap-1">
                  View Building Workflow <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Tile 3: Interior Decoration */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200/90 shadow-xl flex flex-col justify-between space-y-6 hover:border-[#FF5500] transition-all">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF5500]/10 text-[#FF5500] flex items-center justify-center font-bold">
                    <Palette className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#FF5500]/10 text-[#FF5500]">
                    03 • INTERIOR DECO
                  </span>
                  <h3 className="text-xl font-extrabold text-[#001845]">Interior Decoration &amp; Fit-Outs</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Photorealistic 3D interior architecture, custom cabinetry, bespoke millwork, Italian imported marble, and white-glove staging.
                  </p>
                </div>
                <Link href="/services#service-interior-deco" className="text-xs font-bold text-[#FF5500] hover:underline inline-flex items-center gap-1">
                  Explore Interior Styling <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Tile 4: Tonefo Gadgets */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200/90 shadow-xl flex flex-col justify-between space-y-6 hover:border-[#FF5500] transition-all">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF5500]/10 text-[#FF5500] flex items-center justify-center font-bold">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#FF5500]/10 text-[#FF5500]">
                    04 • TONEFO TECH
                  </span>
                  <h3 className="text-xl font-extrabold text-[#001845]">Tonefo Gadgets &amp; Solar Solutions</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Genuine electronics sourcing, solar microgrid installations, and smart home automation with 1 to 3-year warranty and local technical support.
                  </p>
                </div>
                <Link href="/services#service-tonefo" className="text-xs font-bold text-[#FF5500] hover:underline inline-flex items-center gap-1">
                  Discover Tonefo Products <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Tile 5: Cadastral Surveying */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200/90 shadow-xl flex flex-col justify-between space-y-6 hover:border-[#0466c8] transition-all col-span-1 md:col-span-2">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0466c8] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#0466c8]/10 text-[#0466c8]">
                    05 • SURVEYING &amp; REGULARIZATION
                  </span>
                  <h3 className="text-xl font-extrabold text-[#001845]">Cadastral GPS Surveying &amp; Land Regularization</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Differential GPS boundary mapping, barcoded site plans certified by licensed surveyors, Lands Commission registry filings, and boundary dispute mediation.
                  </p>
                </div>
                <Link href="/services#service-surveying" className="text-xs font-bold text-[#0466c8] hover:underline inline-flex items-center gap-1">
                  Learn About Survey Standards <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            6. MISSION, VISION & OPERATIONAL PRINCIPLES
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#F8FAFC] rounded-[32px] p-8 sm:p-10 border border-slate-200/90 shadow-xl space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0466c8] flex items-center justify-center font-bold">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#001845]">Our Corporate Mission</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  To eliminate risk in property acquisition and land ownership by combining certified cadastral surveying, rigorous Lands Commission search verifications, quality civil engineering, and bespoke interior styling for every resident and diaspora client.
                </p>
              </div>

              <div className="bg-[#F8FAFC] rounded-[32px] p-8 sm:p-10 border border-slate-200/90 shadow-xl space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF5500]/10 text-[#FF5500] flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#001845]">Our Long-Term Vision</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  To stand as West Africa&apos;s most trusted and technologically integrated master development group—renowned for 100% litigation-free residential enclaves, commercial logistics towers, and architectural longevity.
                </p>
              </div>
            </div>

            {/* 4 Core Operational Principles */}
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0466c8] border border-blue-100 text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0466c8]" />
                  <span>The JCL Code of Practice</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#001845]">
                  Our 4 Non-Negotiable Operational Principles
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-lg space-y-3">
                  <div className="text-2xl font-black text-[#0466c8]">01</div>
                  <h4 className="text-base font-extrabold text-[#001845]">Radical Transparency</h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Zero hidden fees, transparent BOQ breakdown, and stamped search results provided before any monetary commitment.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-lg space-y-3">
                  <div className="text-2xl font-black text-[#FF5500]">02</div>
                  <h4 className="text-base font-extrabold text-[#001845]">Structural Integrity</h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Licensed civil engineers oversee every pour, lintel, and beam with a strict 10-year structural guarantee.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-lg space-y-3">
                  <div className="text-2xl font-black text-[#0466c8]">03</div>
                  <h4 className="text-base font-extrabold text-[#001845]">Milestone Accountability</h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Clients pay exclusively as verified physical milestones are achieved and inspected on site or via video.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-lg space-y-3">
                  <div className="text-2xl font-black text-[#FF5500]">04</div>
                  <h4 className="text-base font-extrabold text-[#001845]">Lifelong Stewardship</h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    From land indenture to final interior styling, solar setup, and property maintenance, we support your asset permanently.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            7. EXECUTIVE & ADVISORY TEAM
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-[#F8FAFC] border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0466c8] border border-blue-100 text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>Executive &amp; Advisory Team</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#001845] tracking-tight">
                Chartered Surveyors, Engineers &amp; Advisors
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Direct access to industry veterans with proven track records across Ghana&apos;s real estate and construction sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {MOCK_AGENTS.map((agent) => (
                <AgentCard
                  key={agent.id}
                  agent={agent}
                  onContact={() => setInquiryOpen(true)}
                />
              ))}
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            8. CORPORATE COMPLIANCE & STATUTORY CLEARANCE
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-[#0466c8]">
                Statutory Regulatory Alignment
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#001845]">
                Licensed &amp; Verified Institutional Partnerships
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto text-center">
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-1">
                <div className="text-xs font-bold text-[#001845]">Survey &amp; Mapping Division</div>
                <p className="text-[11px] text-slate-500 font-medium">Lands Commission Certified</p>
              </div>
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-1">
                <div className="text-xs font-bold text-[#001845]">Land Title Registry Division</div>
                <p className="text-[11px] text-slate-500 font-medium">Official Title Deed Filings</p>
              </div>
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-1">
                <div className="text-xs font-bold text-[#001845]">Ministry of Works &amp; Housing</div>
                <p className="text-[11px] text-slate-500 font-medium">Civil Engineering Standards</p>
              </div>
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-1">
                <div className="text-xs font-bold text-[#001845]">Municipal Assembly Permits</div>
                <p className="text-[11px] text-slate-500 font-medium">Full Building Clearances</p>
              </div>
            </div>
          </div>
        </section>

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
