import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { easyWeekHeaderData } from '../../data/headerData';
import MobileSideDrawer from '../common/MobileSideDrawer';

/**
 * Stylized line-art octopus emblem for EasyWeek
 */
const OctopusLogo = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Head dome */}
    <path 
      d="M16 4C10.5 4 7 8 7 13C7 16 9 18 10 19C10 21 9 23 7 25C9 26 12 25 13 23C13 25 15 26 16 26C17 26 19 25 19 23C20 25 23 26 25 25C23 23 22 21 22 19C23 18 25 16 25 13C25 8 21.5 4 16 4Z" 
      stroke="white" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    {/* Eyes */}
    <circle cx="12" cy="13" r="1.5" fill="white" />
    <circle cx="20" cy="13" r="1.5" fill="white" />
  </svg>
);

export const Header_EasyWeek = ({ forcedMobile = false }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { brand, navigation, actions } = easyWeekHeaderData;

  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6">
      <nav 
        className="w-full bg-[#121316] text-white py-3 px-4 sm:px-7 flex items-center justify-between border border-neutral-800 rounded-2xl shadow-xl"
        aria-label="EasyWeek Navigation"
      >
        {/* Left: Brand with Octopus Logo */}
        <a href={brand.href} className="flex items-center gap-2.5 group">
          <OctopusLogo className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-110" />
          <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
            {brand.name}
          </span>
        </a>

        {/* Center: Nav links (Desktop) */}
        {!forcedMobile && (
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  item.isHighlight
                    ? 'text-[#22c55e] font-semibold hover:text-[#4ade80]'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

        {/* Right: Log in & White Sign up Pill */}
        <div className="flex items-center gap-4">
          {!forcedMobile && (
            <a
              href={actions.login.href}
              className="hidden sm:inline-block text-sm font-medium text-neutral-300 hover:text-white transition-colors"
            >
              {actions.login.label}
            </a>
          )}

          <a
            href={actions.signup.href}
            className="bg-white text-black text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-xl sm:rounded-2xl transition-all duration-200 hover:bg-neutral-100 hover:scale-105 active:scale-95 shadow-sm"
          >
            {actions.signup.label}
          </a>

          {/* Mobile Side Slider Toggle */}
          <button
            onClick={() => setDrawerOpen(true)}
            className={`p-1.5 rounded-xl bg-neutral-800 text-white hover:bg-neutral-700 transition cursor-pointer ${!forcedMobile ? 'md:hidden' : ''}`}
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
            <OctopusLogo className="w-6 h-6" />
            <span className="text-lg font-bold text-white">{brand.name}</span>
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
              href={actions.signup.href}
              className="w-full text-center py-2.5 text-sm font-bold bg-white text-black rounded-xl hover:bg-neutral-100"
            >
              {actions.signup.label}
            </a>
          </div>
        }
      />
    </header>
  );
};

export default Header_EasyWeek;
