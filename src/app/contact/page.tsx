'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import InquiryModal from '@/components/InquiryModal';
import { MapPin, Phone, Mail, Clock, CheckCircle2, Send, Building2, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';

export default function ContactPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Titled Land Acquisition & Due Diligence',
    siteInspectionDate: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#0466c8] selection:text-white">
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="flex-grow pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header (Tridloop Pattern) */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0466c8] text-xs font-bold uppercase tracking-wider shadow-xs">
              <Mail className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Direct Official Communications</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#001845] tracking-tight">
              Get in Touch with JCL Royal Group
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-xl mx-auto">
              Schedule a guided site inspection in Accra or Prampram, request Lands Commission search records, or speak with our Tonefo gadget team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-gradient-to-br from-[#001845] via-[#0466c8] to-[#001233] text-white rounded-[32px] p-8 shadow-2xl space-y-6 relative overflow-hidden border border-blue-400/20">
                <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-400/15 blur-3xl pointer-events-none" />
                
                <h3 className="text-xl font-extrabold text-white flex items-center gap-2 relative z-10">
                  <Building2 className="w-5 h-5 text-[#FF5500]" />
                  <span>Headquarters &amp; Principal Office</span>
                </h3>

                <div className="space-y-5 text-xs sm:text-sm text-blue-100 relative z-10">
                  <div className="flex items-start space-x-3.5">
                    <MapPin className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-white block">Principal Location</span>
                      <span className="font-medium text-slate-200">{COMPANY_INFO.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Phone className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-white block">Telephone &amp; WhatsApp Lines</span>
                      <div className="space-y-1 mt-1 text-slate-100 font-bold">
                        <div>{COMPANY_INFO.phones[0].label}: <a href={`tel:${COMPANY_INFO.phones[0].clean}`} className="text-white hover:underline">{COMPANY_INFO.phones[0].number}</a></div>
                        <div>Line 1: <a href={`tel:${COMPANY_INFO.phones[1].clean}`} className="text-white hover:underline">{COMPANY_INFO.phones[1].number}</a></div>
                        <div>Line 2: <a href={`tel:${COMPANY_INFO.phones[2].clean}`} className="text-white hover:underline">{COMPANY_INFO.phones[2].number}</a></div>
                        <div>Line 3: <a href={`tel:${COMPANY_INFO.phones[3].clean}`} className="text-white hover:underline">{COMPANY_INFO.phones[3].number}</a></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Mail className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-white block">Official Email</span>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-white font-bold hover:underline">{COMPANY_INFO.email}</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Clock className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-white block">Operating Hours</span>
                      <span className="font-medium text-slate-200">Monday – Friday: 8:00 AM – 5:30 PM (GMT)<br />Saturday: 9:00 AM – 3:00 PM (Site Tours)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20 relative z-10">
                  <a
                    href={COMPANY_INFO.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center space-x-2 shadow-md transition-all hover:scale-[1.01]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Instant WhatsApp Chat (+233 55 786 0299)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation & Inspection Form */}
            <div className="lg:col-span-7 bg-white rounded-[32px] p-8 sm:p-10 border border-slate-200/90 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#001845]">Inquiry Successfully Transmitted</h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto font-medium">
                    Thank you for contacting JCL Royal Group. An advisor will reach out to you within 2 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-[#0466c8] text-white text-xs font-bold"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#001845] tracking-tight">
                      Send a Message or Book Site Inspection
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                      Fill out the form below to receive official property blueprints, cadastral plans, or to schedule a guided site tour.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Your Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Kwabena Darko"
                          className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0466c8]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="kwabena@example.com"
                          className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0466c8]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+233 55 ... or 024 ..."
                          className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0466c8]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Department</label>
                        <select
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-bold focus:outline-none focus:border-[#0466c8] cursor-pointer"
                        >
                          <option>Titled Land Acquisition &amp; Due Diligence</option>
                          <option>Turnkey Residential &amp; Villa Building</option>
                          <option>Interior Decoration &amp; Bespoke Fit-outs</option>
                          <option>Commercial Complex Construction</option>
                          <option>Tonefo Gadgets &amp; Solar Microgrids</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Preferred Site Inspection Date (Optional)</label>
                      <input
                        type="date"
                        value={formData.siteInspectionDate}
                        onChange={(e) => setFormData({ ...formData, siteInspectionDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0466c8]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Detailed Requirements</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your development type, land requirements, or specific inquiry..."
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0466c8] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-[#0466c8] hover:bg-[#0353a4] text-white text-xs font-extrabold transition-all shadow-xl shadow-[#0466c8]/25 flex items-center justify-center space-x-2 hover:scale-[1.01]"
                    >
                      <Send className="w-3.5 h-3.5 text-white" />
                      <span>Transmit Inquiry to JCL Team</span>
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
