import React, { useState } from 'react';
import { Phone, Mail, ChevronDown, Menu } from 'lucide-react';
import { finanDoxHeaderData } from '../../data/headerData';
import MobileSideDrawer from '../common/MobileSideDrawer';

export const Header_FinanDox = ({ forcedMobile = false }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { topBar, navigation } = finanDoxHeaderData;

  return (
    <header className="w-full bg-[#0c1421] text-white shadow-xl">
      {/* Top Navy Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Left: Brand + Language selector */}
        <div className="flex items-center gap-6">
          <a href="#home" className="text-xl sm:text-2xl font-black tracking-tight text-white">
            {topBar.brand}
          </a>

          {!forcedMobile && (
            <div className="hidden md:flex items-center gap-1 text-xs text-neutral-400 cursor-pointer hover:text-white">
              <span>Language: <strong className="text-white">{topBar.language}</strong></span>
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
          )}
        </div>

        {/* Center / Right: Contact Info & Get A Quote Button */}
        <div className="flex items-center gap-6">
          {!forcedMobile && (
            <div className="hidden lg:flex items-center gap-6 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-white/10">
                  <Phone className="w-3.5 h-3.5 text-orange-400" />
                </div>
                <div>
                  <span className="block text-[10px] text-neutral-400 uppercase">Phone Number</span>
                  <span className="font-bold text-white">{topBar.phone}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-white/10">
                  <Mail className="w-3.5 h-3.5 text-orange-400" />
                </div>
                <div>
                  <span className="block text-[10px] text-neutral-400 uppercase">Email Address</span>
                  <span className="font-bold text-white">{topBar.email}</span>
                </div>
              </div>
            </div>
          )}

          <a
            href={topBar.quoteHref}
            className="hidden sm:inline-block border border-white/40 hover:border-white text-white text-xs font-semibold px-5 py-2 rounded-full transition-colors hover:bg-white/10"
          >
            {topBar.quoteLabel}
          </a>

          {/* Mobile Side Slider Toggle */}
          <button
            onClick={() => setDrawerOpen(true)}
            className={`p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition cursor-pointer ${!forcedMobile ? 'lg:hidden' : ''}`}
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bottom Orange Ribbon Bar (Desktop) */}
      {!forcedMobile && (
        <div className="hidden lg:block bg-[#d9481b] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
            <nav className="flex items-center gap-6 py-3 text-sm font-semibold tracking-wide">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="hover:text-white/80 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Social Icons with Dividers */}
            <div className="flex items-center h-full text-xs font-bold divide-x divide-white/20 border-r border-white/20">
              <span className="px-4 py-3 hover:bg-black/10 cursor-pointer">f</span>
              <span className="px-4 py-3 hover:bg-black/10 cursor-pointer">t</span>
              <span className="px-4 py-3 hover:bg-black/10 cursor-pointer">Bē</span>
              <span className="px-4 py-3 hover:bg-black/10 cursor-pointer">▶</span>
            </div>
          </div>
        </div>
      )}

      {/* Side Slider */}
      <MobileSideDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        brand={<span className="text-2xl font-black text-white">{topBar.brand}</span>}
        navigation={navigation}
        actions={
          <a
            href={topBar.quoteHref}
            className="w-full text-center py-3 bg-[#d9481b] hover:bg-[#c23e16] text-white font-bold text-sm rounded-xl transition shadow-sm"
          >
            {topBar.quoteLabel}
          </a>
        }
      />
    </header>
  );
};

export default Header_FinanDox;
