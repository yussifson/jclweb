import React from 'react';
import Link from 'next/link';
import { Building2, Mail, Phone, MapPin, ArrowRight, ShieldCheck, Award, FileCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Banner / Newsletter CTA */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-semibold tracking-wide uppercase mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Real Estate & Land Advisory</span>
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Discover Nature&apos;s Wonders with Expert Guidance
              </h3>
              <p className="mt-2 text-slate-300 text-sm md:text-base max-w-xl">
                Subscribe for exclusive off-market listings, prime cadastral land updates, and quarterly property valuation reports.
              </p>
            </div>

            <div className="lg:col-span-5">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="px-5 py-3.5 rounded-full bg-slate-950/80 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-brand-gold flex-1 shadow-inner"
                  required
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-full bg-white text-brand-dark font-semibold text-sm hover:bg-slate-100 transition-all duration-200 shadow-md flex items-center justify-center space-x-2 shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 4-Column Navigation Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-brand-gold border border-white/20">
                <Building2 className="w-5 h-5 text-[#C59B27]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  JCL <span className="text-slate-400 font-semibold text-sm tracking-normal">ROYAL GROUP</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase -mt-1">
                  Real Estate & Development
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Your premier partner for verified residential estates, commercial hubs, precision cadastral surveying, and end-to-end civil construction management.
            </p>
            <div className="pt-2 flex flex-col space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                <span>88 Financial Square, Airport Residential, Accra, Ghana</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <span>+233 (0) 30 200 4580 / +1 (839) 849-8483</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <span>contact@jclroyalgroup.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Properties & Land
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/properties" className="hover:text-white transition-colors">Residential Villas</Link></li>
              <li><Link href="/properties" className="hover:text-white transition-colors">Urban Apartments</Link></li>
              <li><Link href="/properties" className="hover:text-white transition-colors">Commercial Complexes</Link></li>
              <li><Link href="/land" className="hover:text-white transition-colors">Titled Land Parcels</Link></li>
              <li><Link href="/land" className="hover:text-white transition-colors">Acreage Subdivisions</Link></li>
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Corporate Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Real Estate Brokerage</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Land Cadastral Surveying</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Civil Engineering</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Quantity Surveying (BOQ)</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Project Portfolio</Link></li>
            </ul>
          </div>

          {/* Company & Trust */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Company & Standards
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About JCL Royal Group</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Leadership & Governance</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Book Site Inspection</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">General Inquiry</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Accreditations */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <Award className="w-3.5 h-3.5 text-brand-gold" />
              <span>Certified Institution & Surveyor Led</span>
            </span>
            <span className="flex items-center space-x-1">
              <FileCheck className="w-3.5 h-3.5 text-brand-gold" />
              <span>100% Litigation-Free Title Guarantee</span>
            </span>
          </div>
          <div className="text-center md:text-right">
            © {new Date().getFullYear()} JCL Royal Group Ltd. All rights reserved. Built with precision.
          </div>
        </div>
      </div>
    </footer>
  );
}
