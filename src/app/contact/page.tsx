'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, CheckCircle2, Send, Building2, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Real Estate Sales & Rentals',
    siteInspectionDate: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onOpenInquiry={() => {}} />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#0466c8] mb-3">
              <Mail className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Direct Official Communication</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#001845] tracking-tight">
              Get in Touch with JCL Royal Group
            </h1>
            <p className="mt-3 text-sm text-slate-600 max-w-xl mx-auto">
              Schedule a site inspection in Accra or Prampram, request land cadastral records, or speak with our Tonefo gadget and construction team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-card">
                <h3 className="text-lg font-bold text-[#001845] mb-6 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#0466c8]" />
                  <span>Headquarters &amp; Principal Office</span>
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Location</span>
                      <span>{COMPANY_INFO.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Direct Telephone Lines</span>
                      <div className="space-y-1 mt-1 text-slate-700 font-medium">
                        <div>{COMPANY_INFO.phones[0].label}: <a href={`tel:${COMPANY_INFO.phones[0].clean}`} className="text-[#0466c8] font-bold hover:underline">{COMPANY_INFO.phones[0].number}</a></div>
                        <div>Line 1: <a href={`tel:${COMPANY_INFO.phones[1].clean}`} className="text-[#0466c8] font-bold hover:underline">{COMPANY_INFO.phones[1].number}</a></div>
                        <div>Line 2: <a href={`tel:${COMPANY_INFO.phones[2].clean}`} className="text-[#0466c8] font-bold hover:underline">{COMPANY_INFO.phones[2].number}</a></div>
                        <div>Line 3: <a href={`tel:${COMPANY_INFO.phones[3].clean}`} className="text-[#0466c8] font-bold hover:underline">{COMPANY_INFO.phones[3].number}</a></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Official Email</span>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#0466c8] font-bold hover:underline">{COMPANY_INFO.email}</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Operating Hours</span>
                      <span>Monday – Friday: 8:00 AM – 5:30 PM (GMT)<br />Saturday: 9:00 AM – 3:00 PM (Site Tours)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200">
                  <a
                    href={COMPANY_INFO.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Instant WhatsApp Chat (+233 55 786 0299)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation & Inspection Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-card">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Successfully Transmitted</h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mb-6">
                    Thank you for contacting JCL Royal Group. An advisor will reach out to you within 2 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#0466c8] text-white text-xs font-bold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-extrabold text-[#001845] tracking-tight mb-2">
                    Send a Message or Book Site Inspection
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6">
                    Fill out the form below to receive official property documentation, cadastral plans, or to schedule a guided site tour.
                  </p>

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
                          <option>Real Estate Sales &amp; Rentals</option>
                          <option>Titled Land &amp; Cadastral Surveying</option>
                          <option>Building &amp; Civil Construction</option>
                          <option>Tonefo Gadgets &amp; Electricals</option>
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
                        placeholder="Please describe the property type, parcel location, budget, or specific inquiry..."
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0466c8] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl bg-[#FF5500] hover:bg-[#e04b00] text-white text-xs font-black transition-all shadow-neon flex items-center justify-center space-x-2 hover:scale-[1.01]"
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
    </div>
  );
}
