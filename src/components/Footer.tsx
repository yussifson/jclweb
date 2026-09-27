import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, Mail, Phone, MapPin, ArrowRight, ShieldCheck, Award, FileCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';

export default function Footer() {
  return (
    <footer className="bg-[#001845] text-white pt-16 pb-12 border-t border-blue-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter CTA Banner with Harmonious Blue & Orange Blend */}
        <div className="bg-gradient-to-r from-[#032d60] via-[#0466c8] to-[#001845] border border-blue-400/20 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-96 h-96 bg-[#FF5500]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#FF5500] text-white text-xs font-black tracking-wide uppercase mb-3 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Real Estate &amp; Land Development</span>
              </span>
              <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                Build your next home or land investment with JCL Group
              </h3>
              <p className="mt-2 text-blue-100 text-sm md:text-base max-w-xl">
                Get exclusive access to newly titled parcels, luxury off-plan residences, and certified cadastral surveys across Ghana.
              </p>
            </div>

            <div className="lg:col-span-5">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-blue-200 text-sm focus:outline-none focus:border-[#FF5500] focus:bg-white/20 flex-1 shadow-inner"
                  required
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-full bg-[#FF5500] hover:bg-[#e04b00] text-white font-extrabold text-sm transition-all duration-200 shadow-neon flex items-center justify-center space-x-2 shrink-0 hover:scale-105"
                >
                  <span>Stay Updated</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 4-Column Navigation Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-blue-900/40">
          {/* Brand Info with Authentic Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-2xl bg-white flex items-center justify-center p-1 border border-white/20 shadow-md overflow-hidden">
                <Image
                  src="/images/jcl-royal-group.jpg"
                  alt="JCL Royal Group"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white flex items-center gap-1.5">
                  JCL <span className="text-[#FF5500] font-black text-sm tracking-wide">ROYAL GROUP</span>
                </span>
                <span className="text-[10px] text-blue-200 font-medium tracking-wider uppercase -mt-1">
                  Real Estate &amp; Land Development
                </span>
              </div>
            </Link>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed max-w-sm">
              Your trusted partner for litigation-free registered land, bespoke residential properties, and turnkey civil engineering across Ghana.
            </p>

            {/* Contact Details */}
            <div className="pt-2 flex flex-col space-y-2 text-xs text-blue-100">
              <div className="flex items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-[#FF5500] shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#FF5500] shrink-0" />
                <span>{COMPANY_INFO.phones[0].number} / {COMPANY_INFO.phones[1].number}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#FF5500] shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF5500] mb-4">
              Properties &amp; Land
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-blue-200">
              <li><Link href="/properties" className="hover:text-white transition-colors">Residential Villas</Link></li>
              <li><Link href="/properties" className="hover:text-white transition-colors">Luxury Apartments</Link></li>
              <li><Link href="/properties" className="hover:text-white transition-colors">Commercial Hubs</Link></li>
              <li><Link href="/land" className="hover:text-white transition-colors">Titled Land Parcels</Link></li>
              <li><Link href="/land" className="hover:text-white transition-colors">Prampram &amp; Aburi Plots</Link></li>
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF5500] mb-4">
              Corporate Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-blue-200">
              <li><Link href="/services" className="hover:text-white transition-colors">Property Sales &amp; Rentals</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Cadastral Land Surveying</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Building &amp; Civil Construction</Link></li>
              <li><Link href="/services#tonefo" className="hover:text-white transition-colors">Tonefo Gadgets Division</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Project Portfolio</Link></li>
            </ul>
          </div>

          {/* Company & Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF5500] mb-4">
              Company &amp; Governance
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-blue-200">
              <li><Link href="/about" className="hover:text-white transition-colors">About Mr. Eric Kwaw &amp; Team</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Book Guided Site Tour</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">General Inquiry</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Corporate Governance</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Accreditations */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-blue-200 gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center space-x-1">
              <Award className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Certified Surveyor Led</span>
            </span>
            <span className="flex items-center space-x-1">
              <FileCheck className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>100% Litigation-Free Guarantee</span>
            </span>
          </div>
          <div className="text-center md:text-right text-blue-300">
            Copyright © {new Date().getFullYear()} JCL Royal Group Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
