import React, { useState } from 'react';
import { Menu, Play } from 'lucide-react';
import { auralyticaHeaderData } from '../../data/headerData';
import MobileSideDrawer from '../common/MobileSideDrawer';

/**
 * Geometric 4-quadrant star/matrix emblem for Auralytica
 */
const AuralyticaLogo = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 28 28" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="10" height="10" rx="3" stroke="white" strokeWidth="2" />
    <rect x="16" y="2" width="10" height="10" rx="3" stroke="white" strokeWidth="2" />
    <rect x="2" y="16" width="10" height="10" rx="3" stroke="white" strokeWidth="2" />
    <rect x="16" y="16" width="10" height="10" rx="3" stroke="white" strokeWidth="2" />
    <circle cx="14" cy="14" r="2.5" fill="white" />
  </svg>
);

export const Header_Auralytica = ({ forcedMobile = false }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { brand, leftNav, rightNav, action } = auralyticaHeaderData;

  const allNav = [...leftNav, ...rightNav];

  return (
    <header className="w-full bg-[#0c0d10] text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 sm:py-4">
        <nav 
          className="flex items-center justify-between"
          aria-label="Auralytica AI Navigation"
        >
          {/* Left Nav (Desktop) */}
          {!forcedMobile && (
            <div className="hidden lg:flex items-center gap-7 flex-1 justify-start">
              {leftNav.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}

          {/* Center Brand Logo */}
          <div className="flex items-center gap-2.5 flex-1 lg:flex-initial justify-start lg:justify-center">
            <a href={brand.href} className="flex items-center gap-2.5 group">
              <AuralyticaLogo className="w-6 h-6 transition-transform group-hover:rotate-45 duration-300" />
              <span className="text-base sm:text-lg font-black tracking-widest text-white uppercase">
                {brand.name}
              </span>
            </a>
          </div>

          {/* Right Nav & Watch Demo (Desktop) */}
          <div className="flex items-center gap-6 flex-1 justify-end">
            {!forcedMobile && (
              <div className="hidden lg:flex items-center gap-7">
                {rightNav.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}

            <a
              href={action.href}
              className="border border-white/40 hover:border-white text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full transition-all hover:bg-white/10"
            >
              {action.label}
            </a>

            {/* Mobile Side Slider Toggle */}
            <button
              onClick={() => setDrawerOpen(true)}
              className={`p-1.5 rounded-xl bg-neutral-800 text-white hover:bg-neutral-700 transition cursor-pointer ${!forcedMobile ? 'lg:hidden' : ''}`}
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
        brand={
          <div className="flex items-center gap-2">
            <AuralyticaLogo className="w-6 h-6" />
            <span className="text-base font-black tracking-widest text-white uppercase">{brand.name}</span>
          </div>
        }
        navigation={allNav}
        actions={
          <a
            href={action.href}
            className="w-full flex items-center justify-center gap-2 py-3 bg-white text-black font-bold text-sm rounded-xl"
          >
            <Play className="w-4 h-4 fill-black" />
            <span>{action.label}</span>
          </a>
        }
      />
    </header>
  );
};

export default Header_Auralytica;
