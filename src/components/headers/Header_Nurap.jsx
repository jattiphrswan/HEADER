import React, { useState } from 'react';
import { Mail, X } from 'lucide-react';
import { nurapHeaderData } from '../../data/headerData';
import MobileSideDrawer from '../common/MobileSideDrawer';

export const Header_Nurap = ({ forcedMobile = false }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { brand, menuLabel, contact, navigation } = nurapHeaderData;

  return (
    <header className="w-full bg-[#edf1ed] text-zinc-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        <nav 
          className="relative py-4 sm:py-5 flex items-center justify-between border-b border-zinc-300/70"
          aria-label="Nurap Luxury Navigation"
        >
          {/* Left: Two-line Minimalist Hamburger + MANU */}
          <div className="flex-1 flex justify-start">
            <button
              onClick={() => setDrawerOpen(true)}
              className="group flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-zinc-800 hover:text-black uppercase cursor-pointer py-1"
              aria-label="Toggle Menu"
            >
              <div className="flex flex-col gap-[4px] w-4.5 sm:w-5">
                <span className="w-full h-[1.5px] bg-zinc-900 transition-all duration-300 group-hover:w-3/4" />
                <span className="w-full h-[1.5px] bg-zinc-900 transition-all duration-300 group-hover:w-full" />
              </div>
              <span className="select-none font-medium">{menuLabel}</span>
            </button>
          </div>

          {/* Center: NURAP Serif Brand */}
          <div className="flex-1 text-center">
            <a 
              href={brand.href} 
              className="font-serif text-lg sm:text-2xl font-normal tracking-[0.2em] sm:tracking-[0.3em] text-zinc-950 uppercase hover:opacity-80 transition-opacity"
            >
              {brand.name}
            </a>
          </div>

          {/* Right: CONTACT with Mail Icon */}
          <div className="flex-1 flex justify-end">
            <a
              href={contact.href}
              className="group flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold tracking-widest text-zinc-800 hover:text-black uppercase transition-colors py-1"
            >
              <span className="font-medium select-none hidden sm:inline">{contact.label}</span>
              <Mail className="w-4 h-4 text-zinc-800 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </nav>
      </div>

      {/* Side Slider Drawer */}
      <MobileSideDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        theme="light"
        brand={
          <span className="font-serif text-xl tracking-[0.25em] text-black uppercase">
            {brand.name}
          </span>
        }
        navigation={navigation}
        actions={
          <div className="flex flex-col gap-2">
            <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-semibold">
              Curated Commissions
            </span>
            <a
              href="#inquire"
              className="w-full text-center py-3 text-xs uppercase tracking-widest font-bold bg-black text-white rounded-xl hover:bg-zinc-800 transition"
            >
              Contact Studio ✉
            </a>
          </div>
        }
      />
    </header>
  );
};

export default Header_Nurap;
