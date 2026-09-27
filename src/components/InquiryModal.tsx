'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Building2, Compass, HardHat, Zap, MessageCircle, Palette } from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function InquiryModal({ isOpen, onClose, defaultService }: InquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState(defaultService || 'real-estate');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    budget: '',
    locationPreference: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001845]/70 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-modal border border-slate-100 p-6 md:p-8 my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Received</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
              Thank you for reaching out to JCL Royal Group. An advisor will contact you directly via phone or WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={COMPANY_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-[#0466c8] text-white text-xs font-bold hover:bg-[#034078] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center space-x-2 text-[#FF5500] text-xs font-extrabold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>JCL Royal Group Advisory</span>
            </div>
            <h3 className="text-2xl font-extrabold text-[#001845] tracking-tight mb-2">
              Book a Consultation or Tour
            </h3>
            <p className="text-slate-500 text-xs md:text-sm mb-6">
              Connect directly with our real estate brokers, chartered land surveyors, interior designers, and Tonefo gadget team.
            </p>

            {/* Service Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-5">
              {[
                { id: 'real-estate', label: 'Property', icon: Building2 },
                { id: 'land', label: 'Titled Land', icon: Compass },
                { id: 'engineering', label: 'Construction', icon: HardHat },
                { id: 'interior-deco', label: 'Interior Deco', icon: Palette },
                { id: 'tonefo', label: 'Tonefo Gadgets', icon: Zap },
              ].map((item) => {
                const Icon = item.icon;
                const isSelected = service === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setService(item.id)}
                    className={`flex flex-col items-center justify-center p-2 rounded-2xl border text-[11px] font-bold transition-all ${
                      isSelected
                        ? 'border-[#0466c8] bg-[#0466c8] text-white shadow-sm'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 mb-1" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Samuel Adjei"
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0466c8]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="samuel@example.com"
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0466c8]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+233 55 ... or 024 ..."
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0466c8]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Estimated Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0466c8] cursor-pointer"
                  >
                    <option value="">Select range</option>
                    <option value="under100k">&lt; $100,000 / GHS</option>
                    <option value="100k-500k">$100,000 - $500,000</option>
                    <option value="500k-2m">$500,000 - $2,000,000</option>
                    <option value="2m+">$2,000,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Message / Requirements</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your inquiry, property of interest, site inspection date request, or gadget specs..."
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0466c8] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-[#FF5500] hover:bg-[#e04b00] text-white text-xs font-black transition-all shadow-neon flex items-center justify-center space-x-2 mt-2 hover:scale-[1.01]"
              >
                <span>Submit Inquiry</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
