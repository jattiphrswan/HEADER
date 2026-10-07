import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Mail, ArrowRight, Menu } from 'lucide-react';
import { gencioHeaderData } from '../../data/headerData';
import MobileSideDrawer from '../common/MobileSideDrawer';

/**
 * Gencio gradient 'G' logo emblem with red accent
 */
const GencioLogo = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M26 14C25 8 20 5 15 5C8.9 5 4 9.9 4 16C4 22.1 8.9 27 15 27C21 27 25 23 26 18H15V14H26Z" 
      stroke="#3b82f6" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    {/* Red dot/flame accent over the i */}
    <circle cx="27" cy="7" r="2.5" fill="#ef4444" />
  </svg>
);

export const Header_Gencio = ({ forcedMobile = false }) => {
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { announcement, brand, navigation, contact } = gencioHeaderData;

  return (
    <header className="w-full bg-white text-zinc-900 border-b border-zinc-200 shadow-sm">
      {/* Top Purple Announcement Bar */}
      {announcementVisible && (
        <div className="bg-[#5a4fe6] text-white text-xs py-2 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Arrows */}
            <div className="flex items-center gap-1.5">
              <button className="w-5 h-5 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition cursor-pointer">
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button className="w-5 h-5 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition cursor-pointer">
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Announcement Text */}
            <p className="font-semibold text-center truncate px-2 text-[11px] sm:text-xs">
              {announcement.text}
            </p>

            {/* Close */}
            <button 
              onClick={() => setAnnouncementVisible(false)}
              className="flex items-center gap-1 opacity-80 hover:opacity-100 cursor-pointer font-bold text-[11px]"
            >
              <span>Close</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 sm:py-4">
        <nav 
          className="flex items-center justify-between"
          aria-label="Gencio Main Navigation"
        >
          {/* Left: Brand */}
          <a href={brand.href} className="flex items-center gap-2 group">
            <GencioLogo className="w-8 h-8 transition-transform group-hover:scale-105" />
            <span className="text-xl sm:text-2xl font-black tracking-tight text-zinc-950">
              {brand.name}
            </span>
          </a>

          {/* Center: Nav links (Desktop) */}
          {!forcedMobile && (
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 border-l border-zinc-200 pl-6">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-xs font-black tracking-wider uppercase text-zinc-800 hover:text-[#5a4fe6] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}

          {/* Right: Email & GET QUOTE Button */}
          <div className="flex items-center gap-5">
            {!forcedMobile && (
              <a
                href={`mailto:${contact.email}`}
                className="hidden xl:flex items-center gap-2 text-xs font-black tracking-wider text-zinc-700 hover:text-black uppercase"
              >
                <div className="p-1.5 rounded-full bg-blue-50 text-[#3b82f6]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>{contact.email}</span>
              </a>
            )}

            <a
              href={contact.quoteHref}
              className="group bg-[#ef4444] hover:bg-[#dc2626] text-white font-black text-xs uppercase tracking-wider px-5 sm:px-6 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <span>{contact.quoteLabel}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Mobile Side Slider Toggle */}
            <button
              onClick={() => setDrawerOpen(true)}
              className={`p-2 rounded-xl text-zinc-900 hover:bg-zinc-100 transition cursor-pointer ${!forcedMobile ? 'lg:hidden' : ''}`}
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Side Slider */}
      <MobileSideDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        theme="light"
        brand={
          <div className="flex items-center gap-2">
            <GencioLogo className="w-7 h-7" />
            <span className="font-black text-xl text-black">GENCiO</span>
          </div>
        }
        navigation={navigation}
        actions={
          <div className="flex flex-col gap-2.5">
            <a
              href={`mailto:${contact.email}`}
              className="text-center text-xs font-bold text-zinc-600 py-2 border border-zinc-200 rounded-xl"
            >
              {contact.email}
            </a>
            <a
              href={contact.quoteHref}
              className="w-full text-center py-3 bg-[#ef4444] text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md"
            >
              {contact.quoteLabel} &rarr;
            </a>
          </div>
        }
      />
    </header>
  );
};

export default Header_Gencio;
