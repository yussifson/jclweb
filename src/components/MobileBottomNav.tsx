'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Building2, MapPin, Layers, Menu } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenMenu: () => void;
  onOpenInquiry?: () => void;
}

export default function MobileBottomNav({ onOpenMenu }: MobileBottomNavProps) {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Properties', href: '/properties', icon: Building2 },
    { label: 'Land', href: '/land', icon: MapPin },
    { label: 'Services', href: '/services', icon: Layers },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] px-2 py-1.5 pb-safe">
      <div className="max-w-md mx-auto grid grid-cols-5 items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all duration-200 relative ${
                isActive
                  ? 'text-[#0466c8]'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div
                className={`p-1 rounded-xl transition-all ${
                  isActive ? 'bg-blue-50 text-[#0466c8]' : 'text-slate-500'
                }`}
              >
                <Icon className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span
                className={`text-[10px] tracking-tight transition-all mt-0.5 ${
                  isActive ? 'font-extrabold text-[#0466c8]' : 'font-semibold text-slate-600'
                }`}
              >
                {item.label}
              </span>
              {isActive && (
                <span className="absolute top-0 w-8 h-1 bg-[#0466c8] rounded-full" />
              )}
            </Link>
          );
        })}

        {/* 5th Action: More / Menu Trigger (Opens Slide-over Drawer) */}
        <button
          onClick={onOpenMenu}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl text-slate-600 hover:text-[#0466c8] transition-all duration-200 active:scale-95"
          aria-label="Open More Menu"
        >
          <div className="p-1 rounded-xl bg-slate-100/80 text-slate-700">
            <Menu className="w-5 h-5 stroke-[2.2]" />
          </div>
          <span className="text-[10px] font-semibold text-slate-600 mt-0.5 tracking-tight">
            Menu
          </span>
        </button>
      </div>
    </div>
  );
}
