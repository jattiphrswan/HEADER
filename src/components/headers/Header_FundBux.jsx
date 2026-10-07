import React, { useState } from 'react';
import { Mail, Phone, Menu, Heart } from 'lucide-react';
import { fundBuxHeaderData } from '../../data/headerData';
import MobileSideDrawer from '../common/MobileSideDrawer';

/**
 * Colorful charity emblem with raising hands
 */
const FundBuxLogo = ({ className = "w-9 h-9" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="18" fill="#0d9488" />
    <path d="M12 28V18C12 16.5 13.5 15 15 15C16.5 15 18 16.5 18 18V28" fill="#e11d48" />
    <path d="M18 28V14C18 12.5 19.5 11 21 11C22.5 11 24 12.5 24 14V28" fill="#f59e0b" />
    <circle cx="15" cy="13" r="2" fill="#ffffff" />
    <circle cx="21" cy="9" r="2" fill="#ffffff" />
  </svg>
);

export const Header_FundBux = ({ forcedMobile = false }) => {
  const [activeTab, setActiveTab] = useState("about");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { topBar, brand, navigation } = fundBuxHeaderData;

  return (
    <header className="w-full bg-white text-zinc-900 border-b border-zinc-200/80 shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-[#f8fafc] border-b border-zinc-200/60 text-xs text-zinc-600 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6 py-2">
            <a href={`mailto:${topBar.email}`} className="flex items-center gap-1.5 hover:text-black">
              <Mail className="w-3.5 h-3.5 text-teal-600" />
              <span>{topBar.email}</span>
            </a>
            <a href={`tel:${topBar.phone}`} className="flex items-center gap-1.5 hover:text-black">
              <Phone className="w-3.5 h-3.5 text-rose-500" />
              <span>{topBar.phone}</span>
            </a>
          </div>

          <a
            href={topBar.donateHref}
            className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold px-6 py-2 flex items-center gap-1.5 transition uppercase tracking-wider text-[11px]"
          >
            <Heart className="w-3.5 h-3.5 fill-white" />
            <span>{topBar.donateLabel}</span>
          </a>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <nav 
          className="py-3 sm:py-4 flex items-center justify-between"
          aria-label="FundBux Charity Navigation"
        >
          {/* Left: Brand Logo */}
          <a href={brand.href} className="flex items-center gap-3 group">
            <FundBuxLogo className="w-9 h-9 sm:w-10 sm:h-10 transition-transform group-hover:scale-105" />
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
              {navigation.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`relative text-sm font-semibold transition-colors cursor-pointer py-2 ${
                      isActive ? 'text-black' : 'text-zinc-600 hover:text-black'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#dc2626] rounded-full" />
                    )}
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Right: Social Icons + Mobile Menu */}
          <div className="flex items-center gap-4">
            {!forcedMobile && (
              <div className="hidden xl:flex items-center gap-3 text-zinc-500">
                <span className="hover:text-teal-600 cursor-pointer text-xs font-bold">f</span>
                <span className="hover:text-teal-600 cursor-pointer text-xs font-bold">t</span>
                <span className="hover:text-teal-600 cursor-pointer text-xs font-bold">in</span>
                <span className="hover:text-teal-600 cursor-pointer text-xs font-bold">ig</span>
              </div>
            )}

            <a
              href={topBar.donateHref}
              className="sm:hidden bg-[#f59e0b] text-white font-bold text-xs px-3.5 py-1.5 rounded-lg"
            >
              Donate
            </a>

            {/* Mobile Hamburger Button */}
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
        activeId={activeTab}
        onSelect={(item) => setActiveTab(item.id)}
        theme="light"
        brand={
          <div className="flex items-center gap-2">
            <FundBuxLogo className="w-7 h-7" />
            <span className="font-bold text-lg text-black">{brand.name}</span>
          </div>
        }
        navigation={navigation}
        actions={
          <a
            href={topBar.donateHref}
            className="w-full text-center py-3 bg-[#f59e0b] text-white font-bold text-sm rounded-xl uppercase tracking-wider shadow-sm"
          >
            {topBar.donateLabel}
          </a>
        }
      />
    </header>
  );
};

export default Header_FundBux;
