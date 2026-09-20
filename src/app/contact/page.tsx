'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, CheckCircle2, Send, Sparkles, Building2, Compass, HardHat } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Property Sales & Acquisition',
    siteInspectionDate: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar onOpenInquiry={() => {}} />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 mb-3">
              <Mail className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Direct Office &amp; Advisory Channels</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Get in Touch with JCL Royal Group
            </h1>
            <p className="mt-3 text-sm text-slate-500 max-w-xl mx-auto">
              Schedule a site inspection, request land cadastral records, or speak with our civil engineering and quantity surveying advisors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-card">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  <span>Headquarters &amp; Principal Office</span>
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Accra Office</span>
                      <span>88 Financial Square, Airport Residential Area, Accra, Ghana</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Telephone Enquiries</span>
                      <span>+233 (0) 30 200 4580 / +233 (0) 24 400 8912</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Official Email</span>
                      <span>contact@jclroyalgroup.com / sales@jclroyalgroup.com</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Operating Hours</span>
                      <span>Monday – Friday: 8:00 AM – 5:30 PM (GMT)<br />Saturday: 9:00 AM – 2:00 PM (Site Tours)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Department Quick Directory */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-card">
                <h4 className="text-sm font-bold uppercase tracking-wider text-brand-gold mb-4">
                  Direct Department Routing
                </h4>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-300">Residential &amp; Commercial Sales</span>
                    <span className="font-semibold text-white">Ext. 101</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-300">Cadastral Survey &amp; Land Titling</span>
                    <span className="font-semibold text-white">Ext. 104</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-300">Civil Construction &amp; Engineering</span>
                    <span className="font-semibold text-white">Ext. 108</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Quantity Surveying &amp; BOQs</span>
                    <span className="font-semibold text-white">Ext. 112</span>
                  </div>
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
                    Thank you for contacting JCL Royal Group. An executive advisor from the requested department will reach out to you within 2 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-brand-dark text-white text-xs font-bold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                    Send a Message or Book Site Inspection
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6">
                    Fill out the form below to receive official property documentation, cadastral plans, or to schedule a guided site inspection tour.
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
                          className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-brand-dark"
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
                          className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-brand-dark"
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
                          placeholder="+233 (0) ... or +1 ..."
                          className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-brand-dark"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Department</label>
                        <select
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-semibold focus:outline-none focus:border-brand-dark cursor-pointer"
                        >
                          <option>Property Sales &amp; Acquisition</option>
                          <option>Titled Land &amp; Cadastral Surveying</option>
                          <option>Civil Engineering &amp; Turnkey Construction</option>
                          <option>Quantity Surveying &amp; BOQ Advisory</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Preferred Site Inspection Date (Optional)</label>
                      <input
                        type="date"
                        value={formData.siteInspectionDate}
                        onChange={(e) => setFormData({ ...formData, siteInspectionDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-brand-dark"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Detailed Requirements</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe the property type, parcel zoning preference, budget parameters, or specific surveying inquiry..."
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-brand-dark resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl bg-brand-dark text-white text-xs font-bold hover:bg-slate-800 transition-all shadow-md flex items-center justify-center space-x-2"
                    >
                      <Send className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Transmit Inquiry to Advisory Team</span>
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
