'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
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
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3.5'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="w-9 h-9 rounded-full bg-[#0466c8] flex items-center justify-center text-white shadow-md p-1.5 group-hover:scale-105 transition-transform duration-200">
              <div className="relative w-full h-full">
                <Image
                  src={COMPANY_INFO.logo}
                  alt="JCL Royal Group"
                  fill
                  className="object-contain filter brightness-0 invert"
                />
              </div>
            </div>
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1">
              JCL <span className="text-[#0466c8] font-bold">Royal Group</span>
            </span>
          </Link>

          {/* Clean Desktop Navigation Links (matching reference top header) */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-semibold transition-colors duration-200 py-1 ${
                    isActive
                      ? 'text-[#0466c8] font-bold'
                      : 'text-slate-600 hover:text-[#0466c8]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0466c8] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTAs: Clean WhatsApp text link + Primary Blue Action Pill */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={COMPANY_INFO.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-slate-600 hover:text-[#0466c8] flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-[#0466c8] hover:bg-[#034078] text-white text-xs font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
            >
              <span>Inquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#0466c8] hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-2xl p-6 transition-all duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-base font-bold transition-colors ${
                    isActive
                      ? 'bg-[#0466c8] text-white'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
              <a
                href={COMPANY_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-2xl bg-emerald-50 text-emerald-700 text-xs font-bold flex items-center justify-center gap-2 border border-emerald-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp (+233 55 786 0299)</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenInquiry) onOpenInquiry();
                }}
                className="w-full py-3.5 rounded-2xl bg-[#0466c8] text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-md"
              >
                <span>Inquire &amp; Book Site Tour</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
