'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Building2, Menu, X, Phone, ChevronDown, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState('USD ($)');
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
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-2xl bg-brand-dark flex items-center justify-center text-brand-gold shadow-md group-hover:scale-105 transition-transform duration-200">
              <Building2 className="w-5 h-5 text-[#C59B27]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-brand-dark flex items-center gap-1.5">
                JCL <span className="text-slate-500 font-semibold text-sm tracking-normal">ROYAL GROUP</span>
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase -mt-1">
                Real Estate & Development
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/70 shadow-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-dark text-white shadow-sm'
                      : 'text-slate-600 hover:text-brand-dark hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Currency Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center space-x-1 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm"
              >
                <span>{currency}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-2xl shadow-xl border border-slate-100 py-1.5 z-50">
                  {['USD ($)', 'GHS (₵)', 'EUR (€)', 'GBP (£)'].map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        setCurrency(curr);
                        setCurrencyDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 hover:text-brand-dark transition-colors"
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Inquire / Direct Contact Button */}
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-brand-dark text-white text-sm font-medium hover:bg-slate-800 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02]"
            >
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span>Inquire</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-brand-dark focus:outline-none shadow-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] bg-white border-b border-slate-200 shadow-2xl p-6 transition-all duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-brand-dark text-white'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs text-slate-500 font-medium">Currency Display</span>
                <span className="text-xs font-bold text-slate-800">{currency}</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenInquiry) onOpenInquiry();
                }}
                className="w-full py-3 rounded-2xl bg-brand-dark text-white font-semibold text-center shadow-md flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-brand-gold" />
                <span>Inquire & Book Inspection</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
