'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import InquiryModal from '@/components/InquiryModal';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Send,
  Building2,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Calendar,
  User,
  Check,
  FileCheck2,
  Navigation,
  Compass,
  Landmark,
  Eye
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';

export default function ContactPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedDept, setSelectedDept] = useState('Titled Land Acquisition');
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Titled Land Acquisition',
    siteInspectionDate: '',
    locationPreference: 'New Bortiano / West Hills Mall Area',
    message: '',
  });

  const departments = [
    'Titled Land Acquisition',
    'Residential & Villa Build',
    'Pre-Financed Building',
    'Interior Decoration & Fit-outs',
    'Cadastral & Land Regulation',
    'Machine Hiring & Equipment',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDeptSelect = (dept: string) => {
    setSelectedDept(dept);
    setFormData({ ...formData, department: dept });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] selection:bg-[#0466c8] selection:text-white">
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header (Tridloop Architectural Pattern) */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0466c8] text-xs font-extrabold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Direct Corporate Inquiries &amp; Office Visits</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#001845] tracking-tight leading-[1.15]">
              Connect with <span className="text-[#0466c8]">JCL Royal Group</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              Visit our corporate headquarters in <strong>New Bortiano</strong>, schedule a private cadastral site tour, inspect Lands Commission search records, or speak directly with our civil engineers.
            </p>
          </div>

          {/* Main 2-Column Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* ══════════════════════════════════════════════════════════════
                LEFT COLUMN: CORPORATE CONTACT DIRECTORY (CLEAN LUXURY BENTO)
            ══════════════════════════════════════════════════════════════ */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Primary Office Card with Photo Preview */}
              <div className="bg-white rounded-[32px] border border-slate-200/90 shadow-lg overflow-hidden flex flex-col justify-between">
                
                {/* Office Photo Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900 group">
                  <Image
                    src="/images/office/office-building-1.jpg"
                    alt="JCL Royal Group Headquarters - New Bortiano"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-black text-[#001845] shadow-xs">
                      Corporate Headquarters
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-black shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      <span>Open Today</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block">Official Location</span>
                    <p className="text-sm font-extrabold text-white drop-shadow-sm">
                      New Bortiano • West Hills Mall Area
                    </p>
                  </div>
                </div>

                <div className="p-7 sm:p-8 space-y-5">
                  <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-start space-x-3.5">
                      <MapPin className="w-4 h-4 text-[#FF5500] shrink-0 mt-1" />
                      <div>
                        <span className="font-extrabold text-[#001845] block">Physical Office Location</span>
                        <span className="font-semibold text-slate-800 leading-relaxed block">
                          New Bortiano, West Hills Mall - GCB, Adjacent GRA
                        </span>
                        <span className="text-xs text-slate-500 font-medium block mt-0.5">
                          GCB Bank Building (Ground Floor) • StarLife (1st Floor) • JCL Real Estate (Top Floor)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3.5">
                      <Clock className="w-4 h-4 text-[#0466c8] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[#001845] block">Operating Hours</span>
                        <span className="font-medium text-slate-600">Monday – Friday: 8:00 AM – 5:30 PM (GMT)</span>
                        <span className="block text-slate-500 font-medium">Saturday: 9:00 AM – 3:00 PM (Site Tours &amp; Consultations)</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3.5">
                      <Mail className="w-4 h-4 text-[#0466c8] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[#001845] block">Official Email</span>
                        <a href="mailto:info@jclroyalgh.com" className="font-bold text-[#0466c8] hover:underline">
                          info@jclroyalgh.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Instant WhatsApp Button */}
                  <div className="pt-2">
                    <a
                      href={COMPANY_INFO.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center space-x-2 shadow-md transition-all hover:scale-[1.01]"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Instant WhatsApp Chat (055 266 6222)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Telephone Numbers Card */}
              <div className="bg-white rounded-[32px] p-7 sm:p-8 border border-slate-200/90 shadow-lg space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-[#FF5500] shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-[#001845]">Official Phone Lines</h3>
                    <p className="text-[11px] text-slate-500 font-medium">Click any line to initiate a direct call</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {COMPANY_INFO.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone.clean}`}
                      className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/80 hover:border-[#0466c8] transition-all group flex flex-col justify-between space-y-1 text-center"
                    >
                      <span className="text-[10px] font-extrabold uppercase text-slate-500 group-hover:text-[#0466c8]">
                        {phone.label}
                      </span>
                      <span className="text-xs font-black text-[#001845] group-hover:text-[#0466c8]">
                        {phone.number}
                      </span>
                    </a>
                  ))}
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[11px] font-bold text-slate-500">
                    Motto: &quot;Get us your land and we will pre-finance your building&quot;
                  </span>
                </div>
              </div>

              {/* Verified Due Diligence Assurance Pill */}
              <div className="p-5 rounded-3xl bg-blue-50/80 border border-blue-200/80 text-xs text-slate-700 flex items-start gap-3.5 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#0466c8] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-[#001845] font-extrabold block">Litigation-Free Cadastral Guarantee</strong>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    All site visits depart from our New Bortiano headquarters with physically verified GPS coordinates and Lands Commission search documentation.
                  </p>
                </div>
              </div>

            </div>

            {/* ══════════════════════════════════════════════════════════════
                RIGHT COLUMN: INTERACTIVE CONSULTATION & SITE TOUR BOOKING FORM
            ══════════════════════════════════════════════════════════════ */}
            <div className="lg:col-span-7 bg-white rounded-[32px] p-8 sm:p-10 border border-slate-200/90 shadow-xl space-y-8">
              
              {submitted ? (
                <div className="text-center py-16 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-extrabold text-[#001845]">Inquiry Successfully Transmitted</h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                      Thank you for contacting JCL Royal Group. A senior consultant from our <strong>New Bortiano</strong> office will review your specifications and contact you within <strong>2 business hours</strong>.
                    </p>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-7 py-3 rounded-full bg-[#0466c8] hover:bg-[#0353a4] text-white text-xs font-extrabold transition-all shadow-md"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  
                  {/* Form Header */}
                  <div className="space-y-1.5 border-b border-slate-100 pb-5">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5500] uppercase tracking-wider">
                      <FileCheck2 className="w-3.5 h-3.5" />
                      <span>Confidential Consultation</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#001845] tracking-tight">
                      Book a Site Tour or Request Consultation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      Select your department of interest and provide your project details below.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Department Interactive Option Selector */}
                    <div className="space-y-2">
                      <label className="block text-[11px] font-extrabold text-[#001845] uppercase tracking-wider">
                        Select Service / Department
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {departments.map((dept) => (
                          <button
                            type="button"
                            key={dept}
                            onClick={() => handleDeptSelect(dept)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                              selectedDept === dept
                                ? 'bg-[#0466c8] text-white shadow-xs'
                                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                            }`}
                          >
                            {dept}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-bold text-slate-700 uppercase">Your Full Name</label>
                        <div className="relative">
                          <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Kwabena Darko"
                            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0466c8] focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-bold text-slate-700 uppercase">Email Address</label>
                        <div className="relative">
                          <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="kwabena@example.com"
                            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0466c8] focus:bg-white transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phone and Preferred Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-bold text-slate-700 uppercase">Phone / WhatsApp</label>
                        <div className="relative">
                          <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="055 266 6222 or your phone..."
                            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0466c8] focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-bold text-slate-700 uppercase">Preferred Site / Region</label>
                        <div className="relative">
                          <MapPin className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                          <select
                            value={formData.locationPreference}
                            onChange={(e) => setFormData({ ...formData, locationPreference: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-bold focus:outline-none focus:border-[#0466c8] focus:bg-white cursor-pointer transition-all"
                          >
                            <option>New Bortiano / West Hills Mall Area</option>
                            <option>Prampram Beachfront &amp; Master Enclave</option>
                            <option>Greater Accra Residential Enclaves</option>
                            <option>Commercial Arterial Frontages</option>
                            <option>Client&apos;s Private Land (Pre-Financed Building)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Inspection Date (Optional) */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold text-slate-700 uppercase">
                        Preferred Inspection Date (Optional)
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        <input
                          type="date"
                          value={formData.siteInspectionDate}
                          onChange={(e) => setFormData({ ...formData, siteInspectionDate: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0466c8] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Detailed Requirements Message */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold text-slate-700 uppercase">Project / Land Specifications</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please detail your land acreage, architectural concept, pre-financing needs, or specific inquiry..."
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0466c8] focus:bg-white transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-[#0466c8] hover:bg-[#0353a4] text-white text-xs sm:text-sm font-extrabold transition-all shadow-xl shadow-[#0466c8]/25 flex items-center justify-center space-x-2 hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <Send className="w-4 h-4 text-white" />
                      <span>Transmit Official Inquiry to JCL Team</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  </form>
                </div>
              )}

            </div>

          </div>

          {/* ══════════════════════════════════════════════════════════════
              VISUAL HEADQUARTERS LOCATOR & LANDMARK PHOTO GUIDE
          ══════════════════════════════════════════════════════════════ */}
          <section className="bg-white rounded-[36px] p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-xl space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0466c8] text-xs font-black uppercase tracking-wider">
                  <Landmark className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>Physical Office Landmark Guide</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#001845] tracking-tight">
                  How to Locate Our Headquarters in <span className="text-[#0466c8]">New Bortiano</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Easily identify our corporate premises when visiting. Use these real exterior photos and key landmarks to navigate straight to our office.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="https://maps.google.com/?q=West+Hills+Mall+New+Bortiano+Accra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-[#0466c8] hover:bg-[#0353a4] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions to West Hills Mall Area</span>
                </a>
              </div>
            </div>

            {/* 3 Key Landmarks Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-2 text-xs font-extrabold text-[#001845]">
                  <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
                  <span>1. Ground Floor Landmark</span>
                </div>
                <p className="text-xs font-bold text-slate-800">GCB Bank Branch</p>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  Our building features an active GCB Bank branch and ATM gallery on the ground floor with yellow customer benches.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-2 text-xs font-extrabold text-[#001845]">
                  <span className="w-2 h-2 rounded-full bg-[#0466c8]" />
                  <span>2. Adjacent Landmark</span>
                </div>
                <p className="text-xs font-bold text-slate-800">Adjacent to GRA</p>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  Directly adjacent to the Ghana Revenue Authority (GRA) office at New Bortiano, near Altezza building.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-2 text-xs font-extrabold text-[#001845]">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>3. Upper Corporate Floor</span>
                </div>
                <p className="text-xs font-bold text-slate-800">JCL Real Estate &amp; Construction</p>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  Prominent JCL Real Estate 3D lettering &amp; billboard on the top facade: 0552 666 222 / 0552 622 226 / 0552 666 266.
                </p>
              </div>
            </div>

            {/* Interactive Photo Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Main Featured Photo (7 Cols) */}
              <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200">
                <Image
                  src={COMPANY_INFO.officeImages[activePhotoIdx].src}
                  alt={COMPANY_INFO.officeImages[activePhotoIdx].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 750px"
                  className="object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#0466c8] text-white text-xs font-extrabold shadow-sm">
                    {COMPANY_INFO.officeImages[activePhotoIdx].title}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs sm:text-sm font-semibold text-slate-100 drop-shadow-sm">
                    {COMPANY_INFO.officeImages[activePhotoIdx].caption}
                  </p>
                </div>
              </div>

              {/* Thumbnail Selector Stack (4 Cols) */}
              <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3">
                {COMPANY_INFO.officeImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`relative rounded-2xl overflow-hidden border-2 transition-all p-1 text-left flex items-center gap-3 ${
                      activePhotoIdx === idx
                        ? 'border-[#0466c8] bg-blue-50/70 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="relative w-16 h-14 sm:w-20 sm:h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="pr-2 py-1">
                      <span className="text-[11px] font-extrabold text-[#001845] block line-clamp-1">
                        {img.title}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium line-clamp-1">
                        Click to preview
                      </span>
                    </div>
                  </button>
                ))}
              </div>

            </div>

          </section>

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