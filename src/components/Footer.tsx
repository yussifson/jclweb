'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';

export default function Footer() {
  return (
    <footer className="bg-[#F8FAFC] text-[#001845] pt-20 pb-24 md:pb-12 mt-auto border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Top Brand & Floating Nav Section (Tridloop Architectural Pattern) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-200">
          
          {/* Logo & Identity */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 rounded-2xl bg-white flex items-center justify-center p-1 border border-slate-200 shadow-xs overflow-hidden">
              <Image
                src="/images/jcl-emblem.png"
                alt="JCL Royal Group"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-black tracking-tight text-[#001845]">
                JCL <span className="text-[#0466c8]">Royal Group</span>
              </span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                Ghana&apos;s Trusted Real Estate &amp; Land
              </span>
            </div>
          </Link>

          {/* Floating Nav Pill Container */}
          <nav className="flex flex-wrap items-center justify-center gap-1 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-xs">
            {[
              { label: 'Home', href: '/' },
              { label: 'Properties', href: '/properties' },
              { label: 'Land', href: '/land' },
              { label: 'Services', href: '/services' },
              { label: 'Projects', href: '/projects' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-1 text-xs font-bold text-slate-600 hover:text-[#0466c8] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact Details */}
          <div className="flex flex-wrap items-center gap-5 text-xs font-bold text-slate-600">
            <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#0466c8] transition-colors flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <a href={`tel:${COMPANY_INFO.phones[0].clean}`} className="hover:text-[#0466c8] transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#0466c8]" />
              <span>{COMPANY_INFO.phones[0].number}</span>
            </a>
          </div>

        </div>

        {/* Center Mega Statement with Animated Accent Pings */}
        <div className="text-center space-y-6 py-4">
          <div className="flex items-center justify-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0466c8] animate-ping" />
            <h3 className="text-3xl sm:text-5xl font-extrabold text-[#001845] tracking-tight">
              Litigation-free land &amp; master-built homes.
            </h3>
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] animate-ping" />
          </div>
          
          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto leading-relaxed">
            Direct CEO-led consultation with verified Lands Commission cadastral records. Zero intermediary markup, guaranteed boundary demarcation, and complete peace of mind.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0466c8] hover:bg-[#0353a4] text-white font-extrabold text-xs sm:text-sm transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Schedule Official Consultation</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
            <a
              href={COMPANY_INFO.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>
        </div>

        {/* 4 Trust Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 text-center space-y-1 shadow-xs hover:border-[#0466c8] transition-all">
            <div className="text-2xl sm:text-3xl font-black text-[#0466c8]">100%</div>
            <div className="text-xs font-bold text-slate-800">Litigation-Free Guarantee</div>
            <p className="text-[11px] text-slate-500 font-medium">Lands Commission verified</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 text-center space-y-1 shadow-xs hover:border-[#FF5500] transition-all">
            <div className="text-2xl sm:text-3xl font-black text-[#FF5500]">Accra &amp; Prampram</div>
            <div className="text-xs font-bold text-slate-800">Prime Locations</div>
            <p className="text-[11px] text-slate-500 font-medium">Master-planned enclaves</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 text-center space-y-1 shadow-xs hover:border-[#0466c8] transition-all">
            <div className="text-2xl sm:text-3xl font-black text-[#0466c8]">10 Years</div>
            <div className="text-xs font-bold text-slate-800">Structural Warranty</div>
            <p className="text-[11px] text-slate-500 font-medium">Turnkey civil engineering</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 text-center space-y-1 shadow-xs hover:border-[#FF5500] transition-all">
            <div className="text-2xl sm:text-3xl font-black text-[#FF5500]">Tonefo</div>
            <div className="text-xs font-bold text-slate-800">Smart Gadgets &amp; Solar</div>
            <p className="text-[11px] text-slate-500 font-medium">Genuine electronics division</p>
          </div>
        </div>

        {/* Bottom Bar: Social Badges, Locations & Copyright */}
        <div className="pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} JCL Royal Group Ltd. All rights reserved.</p>

          {/* Social Badges */}
          <div className="flex items-center gap-3">
            <a
              href={COMPANY_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#0466c8] hover:border-[#0466c8]/30 transition-all shadow-2xs font-semibold text-xs"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#0466c8]" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href={COMPANY_INFO.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 transition-all shadow-2xs font-semibold text-xs"
            >
              <span>TikTok (@jclrealestate)</span>
            </a>
          </div>

          <p className="text-slate-500 font-medium">New Bortiano, West Hills Mall (GCB, Adjacent GRA) • Prampram • Accra, Ghana</p>
        </div>

      </div>
    </footer>
  );
}
