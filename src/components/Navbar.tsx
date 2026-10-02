'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ArrowRight,
  PhoneCall,
  Home,
  Building2,
  MapPin,
  Layers,
  Sparkles,
  Info,
  Briefcase,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';
import MobileBottomNav from './MobileBottomNav';

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const desktopNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '/properties' },
    { label: 'Land', href: '/land' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const primaryNavItems = [
    { label: 'Home', href: '/', icon: Home, desc: 'Overview & Highlights' },
    { label: 'Properties', href: '/properties', icon: Building2, desc: 'Turnkey Architectural Portfolios' },
    { label: 'Land', href: '/land', icon: MapPin, desc: 'Litigation-Free Titled Plots' },
    { label: 'Services', href: '/services', icon: Layers, desc: 'Construction, Surveying & Decor' },
  ];

  const remainingNavItems = [
    { label: 'Projects & Milestones', href: '/projects', icon: Briefcase, desc: 'Track record of executed enclaves' },
    { label: 'About JCL Royal Group', href: '/about', icon: Info, desc: 'Heritage, Leadership & Guarantees' },
    { label: 'Contact & Headquarters', href: '/contact', icon: Phone, desc: 'Directions, Phones & WhatsApp' },
  ];

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          TOP HEADER
      ══════════════════════════════════════════════════════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 ${
          scrolled ? 'shadow-md shadow-slate-200/50' : 'shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          
          {/* Brand Logo with Authentic Full Color Fidelity */}
          <Link href="/" className="flex items-center space-x-3 group shrink-0 py-1">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white flex items-center justify-center p-1 border border-slate-200/80 shadow-xs group-hover:scale-105 transition-transform overflow-hidden">
              <Image
                src="/images/jcl-emblem.png"
                alt="JCL Royal Group"
                fill
                sizes="44px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-center">
              <span className="text-base sm:text-lg font-black tracking-tight text-[#001845] flex items-center gap-1 leading-none">
                JCL <span className="text-[#0466c8] font-bold">Royal Group</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Tridloop Rounded Pill Container) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 border border-slate-200/70 px-4 py-1.5 rounded-full shadow-inner">
            {desktopNavLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'text-[#001845] bg-white shadow-xs'
                      : 'text-slate-600 hover:text-[#001845] hover:bg-white/50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Right Actions */}
          <div className="flex items-center gap-2.5">
            {/* Phone Call Link (Desktop Only) */}
            <a
              href={`tel:${COMPANY_INFO.phones[0].clean}`}
              className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-[11px] font-bold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-[#FF5500]" />
              <span>055 786 0299</span>
            </a>

            {/* Book Consultation Button (DESKTOP ONLY: Hidden on mobile top header as requested) */}
            <button
              onClick={() => onOpenInquiry?.() || (window.location.href = '/contact')}
              className="hidden md:inline-flex items-center gap-2 bg-[#0466c8] hover:bg-[#0353a4] text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </button>

            {/* Mobile Menu Trigger (Opens Slide-over Drawer) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2.5 rounded-2xl bg-slate-50 hover:bg-slate-100 text-[#001845] border border-slate-200/80 transition-colors"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════
          MOBILE SLIDE-OVER DRAWER (NOT A DROPDOWN)
      ══════════════════════════════════════════════════════════════ */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex justify-end">
          
          {/* Backdrop Overlay */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
          />

          {/* Slide-over Drawer Sheet */}
          <div className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto z-10 animate-slideLeft">
            
            {/* Drawer Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
              <div className="flex items-center space-x-2.5">
                <div className="relative w-9 h-9 rounded-xl bg-white flex items-center justify-center p-1 border border-slate-200 shadow-xs overflow-hidden">
                  <Image
                    src="/images/jcl-emblem.png"
                    alt="JCL Royal Group"
                    fill
                    sizes="36px"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black text-[#001845] leading-tight">
                    JCL <span className="text-[#0466c8]">Royal Group</span>
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    Navigation &amp; Services
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="p-5 space-y-6 flex-grow">
              
              {/* Primary Pages Grid */}
              <div className="space-y-2">
                <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider px-1">
                  Primary Categories
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {primaryNavItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`p-3 rounded-2xl border transition-all flex flex-col justify-between space-y-1 ${
                          isActive
                            ? 'bg-[#0466c8] text-white border-[#0466c8] shadow-sm'
                            : 'bg-[#F8FAFC] text-slate-800 border-slate-200/80 hover:bg-blue-50/50'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#0466c8]'}`} />
                        <div>
                          <span className="text-xs font-extrabold block">{item.label}</span>
                          <span className={`text-[9px] font-medium line-clamp-1 ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                            {item.desc}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Remaining Navigation Pages (Distinct Detailed List) */}
              <div className="space-y-2">
                <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider px-1">
                  Corporate &amp; Operations
                </span>
                <div className="space-y-2">
                  {remainingNavItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                          isActive
                            ? 'bg-blue-50 text-[#0466c8] border-blue-200'
                            : 'bg-white text-slate-800 border-slate-200/90 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-xl ${isActive ? 'bg-[#0466c8] text-white' : 'bg-slate-100 text-slate-700'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-extrabold text-[#001845] block">{item.label}</span>
                            <span className="text-[10px] text-slate-500 font-medium">{item.desc}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Direct Actions in Drawer */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider px-1">
                  Direct Inquiries &amp; Support
                </span>

                {/* Book Consultation Button in Drawer */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry?.() || (window.location.href = '/contact');
                  }}
                  className="w-full py-3.5 px-4 rounded-full bg-[#0466c8] hover:bg-[#0353a4] text-white font-extrabold text-xs flex items-center justify-center space-x-2 shadow-md transition-all active:scale-[0.98]"
                >
                  <Sparkles className="w-4 h-4 text-[#FF5500]" />
                  <span>Book Private Consultation / Tour</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {/* WhatsApp Direct Line */}
                <a
                  href={COMPANY_INFO.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center space-x-2 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp (+233 55 786 0299)</span>
                </a>

                {/* Phone Quick Call */}
                <a
                  href={`tel:${COMPANY_INFO.phones[0].clean}`}
                  className="w-full py-2.5 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-[#001845] font-bold text-xs flex items-center justify-center space-x-2 transition-all border border-slate-200/80"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#0466c8]" />
                  <span>Call Lines: 055 786 0299 / 024 456 7890</span>
                </a>
              </div>

              {/* Assurance Seal */}
              <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100 text-[11px] text-slate-600 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#0466c8] shrink-0 mt-0.5" />
                <span>Lands Commission verified &amp; 100% litigation-free titles across Accra &amp; Prampram.</span>
              </div>

            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-slate-100 bg-[#F8FAFC] text-center text-[10px] font-bold text-slate-500">
              © {new Date().getFullYear()} JCL Royal Group Ltd. All rights reserved.
            </div>

          </div>

        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          MOBILE BOTTOM NAVIGATION BAR (FIXED AT SCREEN BOTTOM)
      ══════════════════════════════════════════════════════════════ */}
      <MobileBottomNav
        onOpenMenu={() => setMobileMenuOpen(true)}
        onOpenInquiry={onOpenInquiry}
      />
    </>
  );
}
