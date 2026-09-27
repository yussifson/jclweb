'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';

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

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '/properties' },
    { label: 'Land', href: '/land' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 ${
        scrolled ? 'shadow-md shadow-slate-200/50' : 'shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        
        {/* Brand Logo with Authentic Full Color Fidelity */}
        <Link href="/" className="flex items-center space-x-3 group shrink-0 py-1">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white flex items-center justify-center p-0.5 border border-slate-200/80 shadow-xs group-hover:scale-105 transition-transform overflow-hidden">
            <Image
              src="/images/jcl-royal-group.jpg"
              alt="JCL Royal Group"
              fill
              sizes="44px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-tight text-[#001845] flex items-center gap-1 leading-none">
              JCL <span className="text-[#0466c8] font-bold">Royal Group</span>
            </span>
            <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold tracking-wider uppercase mt-1">
              Real Estate &amp; Land Dev
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Tridloop Sparkline Rounded Pill Container) */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 border border-slate-200/70 px-4 py-1.5 rounded-full shadow-inner">
          {navLinks.map((item) => {
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
          <a
            href={`tel:${COMPANY_INFO.phones[0].clean}`}
            className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-[11px] font-bold text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <PhoneCall className="w-3 h-3 text-[#FF5500]" />
            <span>055 786 0299</span>
          </a>

          <button
            onClick={() => onOpenInquiry?.() || (window.location.href = '/contact')}
            className="inline-flex items-center gap-2 bg-[#0466c8] hover:bg-[#0353a4] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:text-[#0466c8] hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-2xl px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-[#0466c8] text-white'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry?.() || (window.location.href = '/contact');
              }}
              className="w-full py-3 rounded-full bg-[#FF5500] text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-md"
            >
              <span>Instant Consultation Request</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
