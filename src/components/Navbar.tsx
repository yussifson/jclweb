'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle, ChevronDown, Sparkles, Zap } from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState('GHS (₵)');
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '/properties' },
    { name: 'Land', href: '/land' },
    { name: 'Services', href: '/services' },
    { name: 'Tonefo Gadgets', href: '/services#tonefo', highlight: true },
    { name: 'Projects', href: '/projects' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-100'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with Official Image */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-md p-1 border border-slate-200 group-hover:scale-105 transition-transform duration-200 overflow-hidden">
              <Image
                src={COMPANY_INFO.logo}
                alt="JCL Royal Group Logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#0466c8] flex items-center gap-1.5">
                JCL <span className="text-[#FF5500] font-black text-sm tracking-wide">ROYAL GROUP</span>
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase -mt-1">
                Real Estate &amp; Tonefo Electronics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                    link.highlight
                      ? 'text-[#FF5500] hover:bg-[#FFF0EB]'
                      : isActive
                      ? 'bg-[#0466c8] text-white shadow-sm'
                      : 'text-slate-700 hover:text-[#0466c8] hover:bg-slate-100'
                  }`}
                >
                  {link.highlight && <Zap className="w-3.5 h-3.5 text-[#FF5500] fill-[#FF5500]" />}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs: WhatsApp + Inquire */}
          <div className="hidden md:flex items-center space-x-2.5">
            {/* Currency Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center space-x-1 px-3 py-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm"
              >
                <span>{currency}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-2xl shadow-xl border border-slate-100 py-1.5 z-50">
                  {['GHS (₵)', 'USD ($)', 'EUR (€)', 'GBP (£)'].map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        setCurrency(curr);
                        setCurrencyDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#0466c8] transition-colors"
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* WhatsApp Quick Chat */}
            <a
              href={COMPANY_INFO.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-all duration-200 shadow-sm hover:scale-105"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>

            {/* Inquire Button with Neon Orange Accent */}
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-[#0466c8] text-white text-xs font-bold hover:bg-[#034078] transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 border border-[#0466c8]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Inquire Now</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center space-x-2 xl:hidden">
            <a
              href={COMPANY_INFO.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-emerald-600 text-white text-xs font-bold"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-2xl bg-white border border-slate-200 text-slate-800 hover:text-[#0466c8] shadow-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[66px] bg-white border-b border-slate-200 shadow-2xl p-6 transition-all duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-base font-bold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#0466c8] text-white'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.highlight && (
                    <span className="px-2 py-0.5 rounded-full bg-[#FFF0EB] text-[#FF5500] text-xs font-extrabold">
                      GADGETS
                    </span>
                  )}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
              <div className="flex items-center justify-between px-2 text-xs">
                <span className="text-slate-500 font-medium">Currency Display</span>
                <span className="font-bold text-[#0466c8]">{currency}</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenInquiry) onOpenInquiry();
                }}
                className="w-full py-3.5 rounded-2xl bg-[#0466c8] text-white font-bold text-center shadow-md flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-[#FF5500]" />
                <span>Book Site Inspection or Consultation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
