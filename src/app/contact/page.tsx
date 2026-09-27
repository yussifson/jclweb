'use client';

import React, { useState } from 'react';
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
  HelpCircle
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';

export default function ContactPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedDept, setSelectedDept] = useState('Titled Land Acquisition');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Titled Land Acquisition',
    siteInspectionDate: '',
    locationPreference: 'Prampram Beachfront & Master Enclave',
    message: '',
  });

  const departments = [
    'Titled Land Acquisition',
    'Residential & Villa Build',
    'Interior Decoration & Fit-outs',
    'Cadastral & Land Regulation',
    'Tonefo Gadgets & Solar',
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header (Tridloop Architectural Pattern) */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0466c8] text-xs font-extrabold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Direct Corporate Inquiries &amp; Guided Tours</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#001845] tracking-tight leading-[1.15]">
              Connect with <span className="text-[#0466c8]">JCL Royal Group</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              Schedule a private cadastral site tour, inspect Lands Commission search records, or speak directly with our licensed civil engineers and property consultants.
            </p>
          </div>

          {/* Main 2-Column Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* ══════════════════════════════════════════════════════════════
                LEFT COLUMN: CORPORATE CONTACT DIRECTORY (CLEAN LUXURY BENTO)
            ══════════════════════════════════════════════════════════════ */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Primary Office Card */}
              <div className="bg-white rounded-[32px] p-7 sm:p-8 border border-slate-200/90 shadow-lg space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0466c8] shadow-xs">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-[#001845]">Principal Headquarters</h3>
                      <span className="text-[11px] font-bold text-[#0466c8] uppercase tracking-wide">Accra, Ghana</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-extrabold border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open Today</span>
                  </span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-5">
                  <div className="flex items-start space-x-3.5">
                    <MapPin className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#001845] block">Office Address</span>
                      <span className="font-medium text-slate-600 leading-relaxed">{COMPANY_INFO.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Clock className="w-4 h-4 text-[#0466c8] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#001845] block">Working Hours</span>
                      <span className="font-medium text-slate-600">Monday – Friday: 8:00 AM – 5:30 PM (GMT)</span>
                      <span className="block text-slate-500 font-medium">Saturday: 9:00 AM – 3:00 PM (Scheduled Site Tours)</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Mail className="w-4 h-4 text-[#0466c8] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#001845] block">Official Email</span>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold text-[#0466c8] hover:underline">
                        {COMPANY_INFO.email}
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
                    <span>Instant WhatsApp Chat (+233 55 786 0299)</span>
                  </a>
                </div>
              </div>

              {/* Direct Telephone Numbers Card */}
              <div className="bg-white rounded-[32px] p-7 sm:p-8 border border-slate-200/90 shadow-lg space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-[#FF5500] shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-[#001845]">Direct Phone Lines</h3>
                    <p className="text-[11px] text-slate-500 font-medium">Click any line to initiate a direct call</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {COMPANY_INFO.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone.clean}`}
                      className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/80 hover:border-[#0466c8] transition-all group flex flex-col justify-between space-y-1"
                    >
                      <span className="text-[10px] font-extrabold uppercase text-slate-500 group-hover:text-[#0466c8]">
                        {phone.label}
                      </span>
                      <span className="text-xs font-extrabold text-[#001845] group-hover:text-[#0466c8]">
                        {phone.number}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Verified Due Diligence Assurance Pill */}
              <div className="p-5 rounded-3xl bg-blue-50/80 border border-blue-200/80 text-xs text-slate-700 flex items-start gap-3.5 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#0466c8] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-[#001845] font-extrabold block">Litigation-Free Cadastral Guarantee</strong>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    All site visits include physical GPS beacon verification and Lands Commission site search documentation prior to any commitment.
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
                      Thank you for contacting JCL Royal Group. A senior consultant will review your specifications and contact you within <strong>2 business hours</strong>.
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
                            placeholder="+233 55 ... or 024 ..."
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
                            <option>Prampram Beachfront &amp; Master Enclave</option>
                            <option>Greater Accra Residential Enclaves</option>
                            <option>Commercial Arterial Frontages</option>
                            <option>Client&apos;s Private Land (Civil Construction)</option>
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
                        placeholder="Please detail your land acreage, architectural concept, interior fit-out scope, or specific inquiry..."
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
