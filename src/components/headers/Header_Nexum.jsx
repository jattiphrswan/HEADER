import React, { useState } from 'react';
import { ArrowRight, Menu } from 'lucide-react';
import { nexumHeaderData } from '../../data/headerData';
import MobileSideDrawer from '../common/MobileSideDrawer';

export const Header_Nexum = ({ forcedMobile = false }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { brand, navigation, action } = nexumHeaderData;

  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6">
      <nav 
        className="w-full bg-[#16171a] text-white py-3 sm:py-4 px-4 sm:px-8 flex items-center justify-between border border-neutral-800 rounded-2xl shadow-xl"
        aria-label="Nexum Agency Navigation"
      >
        {/* Left: Brand */}
        <a href={brand.href} className="flex items-center gap-1 group">
          <span className="text-lg sm:text-xl font-black tracking-tight text-white">
            {brand.name}
          </span>
          <span className="text-[10px] text-neutral-400 font-bold self-start mt-0.5">
            {brand.tag}
          </span>
        </a>

        {/* Center: Nav links (Desktop) */}
        {!forcedMobile && (
          <div className="hidden lg:flex items-center gap-6 xl:gap-9">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-xs font-semibold tracking-widest uppercase text-neutral-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

        {/* Right: Get in touch Button */}
        <div className="flex items-center gap-3">
          <a
            href={action.href}
            className="group flex items-center gap-2.5 bg-white text-black pl-1.5 pr-4 sm:pr-5 py-1.5 rounded-full transition-all duration-200 hover:bg-neutral-200 hover:scale-105 active:scale-95 shadow-sm"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-xs sm:text-sm font-bold tracking-tight">
              {action.label}
            </span>
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

      {/* Side Slider */}
      <MobileSideDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        brand={
          <div className="flex items-center gap-1">
            <span className="text-lg font-black text-white">{brand.name}</span>
            <span className="text-[10px] text-neutral-400 font-bold">{brand.tag}</span>
          </div>
        }
        navigation={navigation}
        actions={
          <a
            href={action.href}
            className="w-full flex items-center justify-center gap-2 py-3 bg-white text-black font-bold text-sm rounded-xl"
          >
            <span>{action.label}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        }
      />
    </header>
  );
};

export default Header_Nexum;
