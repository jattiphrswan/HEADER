import React, { useState } from 'react';
import { ArrowRight, Menu } from 'lucide-react';
import { dataPressHeaderData } from '../../data/headerData';
import MobileSideDrawer from '../common/MobileSideDrawer';

/**
 * Geometric nodes emblem for DataPress
 */
const DataPressLogo = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4L26 10V22L16 28L6 22V10L16 4Z" stroke="#0052cc" strokeWidth="2.5" />
    <circle cx="16" cy="4" r="2.5" fill="#0052cc" />
    <circle cx="26" cy="10" r="2.5" fill="#0052cc" />
    <circle cx="26" cy="22" r="2.5" fill="#0052cc" />
    <circle cx="16" cy="28" r="2.5" fill="#0052cc" />
    <circle cx="6" cy="22" r="2.5" fill="#0052cc" />
    <circle cx="6" cy="10" r="2.5" fill="#0052cc" />
    <path d="M16 12L21 16L16 20L11 16L16 12Z" fill="#0052cc" />
  </svg>
);

export const Header_DataPress = ({ forcedMobile = false }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { topRibbon, brand, navigation, action } = dataPressHeaderData;

  return (
    <header className="w-full bg-white text-zinc-900 shadow-sm border-b border-zinc-200">
      {/* Top Angled Blue Ribbon */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div 
            style={{ clipPath: 'polygon(0 0, 100% 0, 96% 100%, 0 100%)' }}
            className="w-fit bg-[#0052cc] text-white text-xs font-medium py-1.5 pl-4 pr-12 flex items-center gap-4"
          >
            <span>{topRibbon.welcome}</span>
            <span className="opacity-40">|</span>
            <span>{topRibbon.phone}</span>
            <span className="opacity-40">|</span>
            <span>{topRibbon.email}</span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 sm:py-4">
        <nav 
          className="flex items-center justify-between"
          aria-label="DataPress Navigation"
        >
          {/* Left: Brand */}
          <a href={brand.href} className="flex items-center gap-3 group">
            <DataPressLogo className="w-8 h-8 sm:w-9 sm:h-9 transition-transform group-hover:scale-105" />
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-zinc-900 block leading-tight">
                {brand.name}
              </span>
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">
                {brand.subtitle}
              </span>
            </div>
          </a>

          {/* Center: Nav links (Desktop) */}
          {!forcedMobile && (
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-sm font-semibold text-zinc-700 hover:text-[#0052cc] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}

          {/* Right: Boxed Button with Blue Arrow Square */}
          <div className="flex items-center gap-3">
            <a
              href={action.href}
              className="group border border-zinc-200 hover:border-zinc-400 pl-4 pr-1.5 py-1.5 rounded-lg flex items-center gap-3 text-xs sm:text-sm font-bold text-zinc-900 transition-all hover:shadow-sm"
            >
              <span>{action.label}</span>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-[#0052cc] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
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
            <DataPressLogo className="w-7 h-7" />
            <span className="font-black text-xl text-zinc-900">{brand.name}</span>
          </div>
        }
        navigation={navigation}
        actions={
          <a
            href={action.href}
            className="w-full flex items-center justify-center gap-2 py-3 bg-[#0052cc] text-white font-bold text-sm rounded-xl"
          >
            <span>{action.label}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        }
      />
    </header>
  );
};

export default Header_DataPress;
