import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { healanceHeaderData } from '../../data/headerData';
import MobileSideDrawer from '../common/MobileSideDrawer';

/**
 * 4-square wellness cross emblem matching Healance
 */
const HealanceLogo = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="8" height="8" rx="2" fill="white" />
    <rect x="14" y="2" width="8" height="8" rx="2" fill="white" />
    <rect x="2" y="14" width="8" height="8" rx="2" fill="white" />
    <rect x="14" y="14" width="8" height="8" rx="2" fill="white" fillOpacity="0.4" />
  </svg>
);

export const Header_Healance = ({ forcedMobile = false }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { brand, navigation, actions } = healanceHeaderData;

  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6">
      <nav 
        className="w-full relative backdrop-blur-xl bg-neutral-900/75 text-white py-3.5 px-4 sm:px-8 flex items-center justify-between border border-white/15 rounded-full shadow-2xl"
        aria-label="Healance Wellness Navigation"
      >
        {/* Left: Brand */}
        <a href={brand.href} className="flex items-center gap-2.5 group">
          <HealanceLogo className="w-5 h-5 transition-transform group-hover:rotate-90 duration-300" />
          <span className="text-lg font-bold tracking-tight text-white">
            {brand.name}
          </span>
        </a>

        {/* Center: Nav links (Desktop) */}
        {!forcedMobile && (
          <div className="hidden lg:flex items-center gap-7">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

        {/* Right: Dual Buttons (Book Session & Get Support) */}
        <div className="flex items-center gap-2.5">
          {!forcedMobile && (
            <a
              href={actions.book.href}
              className="hidden sm:inline-block px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-white border border-white/60 hover:border-white rounded-full transition-all hover:bg-white/10"
            >
              {actions.book.label}
            </a>
          )}

          <a
            href={actions.support.href}
            className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-neutral-900 bg-white hover:bg-neutral-100 rounded-full transition-all shadow-sm hover:scale-105 active:scale-95"
          >
            {actions.support.label}
          </a>

          {/* Mobile Side Slider Toggle */}
          <button
            onClick={() => setDrawerOpen(true)}
            className={`p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition cursor-pointer ${!forcedMobile ? 'lg:hidden' : ''}`}
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Side Slider */}
      <MobileSideDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        brand={
          <div className="flex items-center gap-2">
            <HealanceLogo className="w-5 h-5" />
            <span className="text-lg font-bold text-white">{brand.name}</span>
          </div>
        }
        navigation={navigation}
        actions={
          <div className="flex flex-col gap-2.5">
            <a
              href={actions.book.href}
              className="w-full text-center py-2.5 text-sm font-medium border border-white/40 text-white rounded-xl hover:bg-white/10 transition"
            >
              {actions.book.label}
            </a>
            <a
              href={actions.support.href}
              className="w-full text-center py-2.5 text-sm font-bold bg-white text-neutral-900 rounded-xl hover:bg-neutral-100 transition shadow-sm"
            >
              {actions.support.label}
            </a>
          </div>
        }
      />
    </header>
  );
};

export default Header_Healance;
