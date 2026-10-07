import React, { useState } from 'react';
import { ArrowUpRight, Menu } from 'lucide-react';
import { blekHeaderData } from '../../data/headerData';
import MobileSideDrawer from '../common/MobileSideDrawer';

/**
 * Header: Blek World
 * Features:
 * - Dark top bar with rounded corners
 * - "Blek" white badge logo with "World" typography
 * - Navigation links: Home, Initiatives, Stats, About, Blog, Contact
 * - Iconic curved scoop/swoop transition into the vibrant purple "Register Now" button
 * - Mobile Side Slider Drawer (smooth slide-in from right)
 */
export const Header_BlekWorld = ({ currentActive = "home", onNavigate, forcedMobile = false }) => {
  const [activeTab, setActiveTab] = useState(currentActive);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { brand, navigation, action } = blekHeaderData;

  const handleTabClick = (item) => {
    setActiveTab(item.id);
    if (onNavigate) onNavigate(item);
  };

  return (
    <header className="w-full max-w-7xl mx-auto px-2 sm:px-4">
      {/* Main Bar */}
      <nav 
        className="relative bg-[#141417] text-white rounded-full sm:rounded-t-[32px] md:rounded-[32px] flex items-stretch justify-between shadow-2xl border border-neutral-800/80 overflow-hidden min-h-[58px] sm:min-h-[68px] select-none"
        aria-label="Blek World Navigation"
      >
        {/* Left: Brand Logo & Title */}
        <div className="flex items-center pl-3.5 sm:pl-7 py-2.5 z-10">
          <a 
            href={brand.href} 
            className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02]"
          >
            {/* White "Blek" badge */}
            <span className="bg-white text-black font-extrabold text-xs sm:text-base px-2.5 sm:px-3 py-1 rounded-xl tracking-tight shadow-sm transition-transform duration-300 group-hover:rotate-[-2deg]">
              {brand.badge}
            </span>
            {/* "World" text */}
            <span className="text-white font-bold text-base sm:text-xl tracking-tight">
              {brand.name}
            </span>
          </a>
        </div>

        {/* Center: Desktop Navigation Links */}
        {!forcedMobile && (
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 py-3 px-4">
            {navigation.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item)}
                  className={`relative text-sm font-medium transition-all duration-200 cursor-pointer group/nav py-1 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <span 
                    className={`absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#5257f1] transition-all duration-200 ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover/nav:opacity-70 group-hover/nav:scale-x-75'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        )}

        {/* Right: Actions */}
        <div className="flex items-stretch">
          {/* Desktop & Tablet Curved Action Button */}
          {!forcedMobile && (
            <a
              href={action.href}
              className="hidden sm:flex items-stretch group cursor-pointer relative"
            >
              {/* Organic Bezier S-Curve Connector */}
              <svg 
                className="h-full w-9 sm:w-11 text-[#4f46e5] fill-current -mr-[1px] pointer-events-none" 
                viewBox="0 0 44 72" 
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M 44 0 C 26 0 16 38 0 72 L 44 72 Z" />
              </svg>

              <div className="bg-[#4f46e5] hover:bg-[#4338ca] text-white flex items-center gap-2 sm:gap-3 pl-2 sm:pl-3 pr-5 sm:pr-8 transition-colors duration-200">
                <span className="text-sm sm:text-base font-medium tracking-tight whitespace-nowrap">
                  {action.label}
                </span>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-white/60 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-white">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
              </div>
            </a>
          )}

          {/* Mobile Right Bar: Compact Register + Side Slider Menu Trigger */}
          <div className={`flex items-center pr-3 gap-2 ${!forcedMobile ? 'sm:hidden' : ''}`}>
            <a
              href={action.href}
              className="flex items-center gap-1.5 bg-[#4f46e5] active:bg-[#4338ca] text-white text-xs font-semibold px-3 py-1.5 rounded-full transition"
            >
              <span>Register</span>
              <div className="w-4 h-4 rounded-full border border-white/60 flex items-center justify-center">
                <ArrowUpRight className="w-2.5 h-2.5" />
              </div>
            </a>

            <button
              onClick={() => setDrawerOpen(true)}
              className="p-1.5 rounded-xl bg-neutral-800 text-white hover:bg-neutral-700 transition cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Side Slider Drawer */}
      <MobileSideDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeId={activeTab}
        onSelect={handleTabClick}
        brand={
          <div className="flex items-center gap-2">
            <span className="bg-white text-black font-extrabold text-sm px-2.5 py-0.5 rounded-xl">
              {brand.badge}
            </span>
            <span className="text-lg font-bold text-white">{brand.name}</span>
          </div>
        }
        navigation={navigation}
        actions={
          <a
            href={action.href}
            className="w-full flex items-center justify-center gap-2 bg-[#4f46e5] hover:bg-[#4338ca] text-white text-sm font-semibold py-3.5 rounded-2xl transition shadow-lg shadow-indigo-600/30"
          >
            <span>{action.label}</span>
            <div className="w-5 h-5 rounded-full border border-white/70 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>
        }
      />
    </header>
  );
};

export default Header_BlekWorld;
