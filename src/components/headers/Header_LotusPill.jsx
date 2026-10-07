import React, { useState } from 'react';
import { LayoutGrid, Menu } from 'lucide-react';
import { lotusPillHeaderData } from '../../data/headerData';
import MobileSideDrawer from '../common/MobileSideDrawer';

/**
 * Geometric Coral Lotus / Tulip flower icon matching the reference design
 */
const LotusLogo = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Center diamond petal */}
    <path d="M16 8L20 14L16 20L12 14L16 8Z" fill="#e11d48" />
    {/* Left wing petal */}
    <path d="M8 12L13 15L16 22L10 24L6 18L8 12Z" fill="#f43f5e" />
    {/* Right wing petal */}
    <path d="M24 12L19 15L16 22L22 24L26 18L24 12Z" fill="#f43f5e" />
    {/* Base stem point */}
    <path d="M16 22L13 25L16 28L19 25L16 22Z" fill="#be123c" />
  </svg>
);

export const Header_LotusPill = ({ forcedMobile = false }) => {
  const [activeTab, setActiveTab] = useState("feature");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { navigation } = lotusPillHeaderData;

  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6">
      <nav 
        className="w-full py-4 flex items-center justify-between"
        aria-label="Lotus Pill Navigation"
      >
        {/* Left: Lotus Brand Emblem */}
        <a href="#home" className="flex items-center gap-2 group">
          <LotusLogo className="w-8 h-8 transition-transform group-hover:scale-110" />
        </a>

        {/* Center: Floating Skeuomorphic Capsule Pill (Desktop) */}
        {!forcedMobile && (
          <div className="hidden md:flex items-center bg-[#19191c] p-1.5 rounded-full shadow-xl border border-neutral-800/80">
            {navigation.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`text-sm font-medium transition-all duration-200 rounded-full cursor-pointer ${
                    isActive
                      ? 'bg-[#2a2a2e] text-white px-5 py-1.5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.4)] font-semibold'
                      : 'text-neutral-300 hover:text-white px-4 py-1.5 hover:bg-neutral-800/40'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Right: Floating Circular App Grid Button */}
        <div className="flex items-center gap-3">
          <button
            className="w-10 h-10 rounded-full bg-[#19191c] hover:bg-[#252529] text-white flex items-center justify-center shadow-lg border border-neutral-800 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Apps Menu"
          >
            <LayoutGrid className="w-4 h-4 text-white" />
          </button>

          {/* Mobile Side Slider Toggle */}
          <button
            onClick={() => setDrawerOpen(true)}
            className={`p-2 rounded-full bg-[#19191c] text-white hover:bg-neutral-800 transition cursor-pointer ${!forcedMobile ? 'md:hidden' : ''}`}
            aria-label="Toggle menu"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Side Slider */}
      <MobileSideDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeId={activeTab}
        onSelect={(item) => setActiveTab(item.id)}
        brand={
          <div className="flex items-center gap-2">
            <LotusLogo className="w-7 h-7" />
            <span className="font-bold text-lg text-white">Lotus Feature</span>
          </div>
        }
        navigation={navigation}
        actions={
          <div className="flex flex-col gap-2">
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#2a2a2e] text-white font-semibold text-sm rounded-xl">
              <LayoutGrid className="w-4 h-4" />
              <span>Explore All Apps</span>
            </button>
          </div>
        }
      />
    </header>
  );
};

export default Header_LotusPill;
