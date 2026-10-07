import React, { useState } from 'react';
import { ArrowUpRight, Menu } from 'lucide-react';
import { deeperSignalsHeaderData } from '../../data/headerData';
import MobileSideDrawer from '../common/MobileSideDrawer';

/**
 * Geometric wireframe icosahedron/polyhedral gem icon for Deeper Signals
 */
const PolyhedralLogo = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <polygon points="18,4 31,13 28,30 8,30 5,13" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
    <polyline points="18,4 18,30" stroke="white" strokeWidth="1.8" />
    <polyline points="5,13 18,20 31,13" stroke="white" strokeWidth="1.8" />
    <polyline points="18,4 8,30" stroke="white" strokeWidth="1.2" opacity="0.7" />
    <polyline points="18,4 28,30" stroke="white" strokeWidth="1.2" opacity="0.7" />
    <polyline points="5,13 18,30 31,13" stroke="white" strokeWidth="1.2" opacity="0.7" />
  </svg>
);

export const Header_DeeperSignals = ({ forcedMobile = false }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { brand, navigation, actions } = deeperSignalsHeaderData;

  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6">
      <nav 
        className="w-full bg-gradient-to-r from-[#e11d48] via-[#e6005c] to-[#ff2a6d] text-white py-3.5 px-4 sm:px-8 flex items-center justify-between rounded-2xl sm:rounded-full shadow-2xl shadow-rose-950/20"
        aria-label="Deeper Signals Navigation"
      >
        {/* Left: Brand with Polyhedral Logo */}
        <a href={brand.href} className="flex items-center gap-2.5 group">
          <PolyhedralLogo className="w-7 h-7 sm:w-8 sm:h-8 transition-transform group-hover:rotate-12 duration-300" />
          <div className="flex flex-col leading-none">
            <span className="font-black text-sm tracking-widest text-white">
              {brand.name}
            </span>
            <span className="font-black text-[9px] tracking-[0.25em] text-white/90 mt-0.5">
              {brand.subtitle}
            </span>
          </div>
        </a>

        {/* Center / Right: Nav links & Actions (Desktop) */}
        {!forcedMobile && (
          <div className="hidden lg:flex items-center gap-7">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

        {/* Right Actions: Contact Pill & Log In */}
        <div className="flex items-center gap-4">
          <a
            href={actions.contact.href}
            className="group bg-white hover:bg-neutral-100 text-[#e11d48] font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full flex items-center gap-1.5 transition-all shadow-md hover:scale-105 active:scale-95"
          >
            <span>{actions.contact.label}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {!forcedMobile && (
            <a
              href={actions.login.href}
              className="hidden sm:inline-block text-sm font-semibold text-white hover:text-white/80 transition-colors"
            >
              {actions.login.label}
            </a>
          )}

          {/* Mobile Side Slider Toggle */}
          <button
            onClick={() => setDrawerOpen(true)}
            className={`p-1.5 rounded-full bg-white/20 text-white hover:bg-white/30 transition cursor-pointer ${!forcedMobile ? 'lg:hidden' : ''}`}
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
            <PolyhedralLogo className="w-7 h-7" />
            <span className="font-bold text-base text-white">DEEPER SIGNALS</span>
          </div>
        }
        navigation={navigation}
        actions={
          <div className="flex flex-col gap-2.5">
            <a
              href={actions.login.href}
              className="w-full text-center py-2.5 text-sm font-medium bg-neutral-800 text-white rounded-xl"
            >
              {actions.login.label}
            </a>
            <a
              href={actions.contact.href}
              className="w-full text-center py-3 text-sm font-bold bg-white text-[#e11d48] rounded-xl flex items-center justify-center gap-1.5"
            >
              <span>{actions.contact.label}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        }
      />
    </header>
  );
};

export default Header_DeeperSignals;
