import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { teamSyncHeaderData } from '../../data/headerData';
import MobileSideDrawer from '../common/MobileSideDrawer';

export const Header_TeamSync = ({ forcedMobile = false }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { brand, navigation, actions } = teamSyncHeaderData;

  return (
    <header className="w-full max-w-7xl mx-auto px-2 sm:px-4">
      <nav 
        className="w-full bg-white text-zinc-900 rounded-2xl py-3 px-4 sm:px-8 flex items-center justify-between border border-zinc-200/80 shadow-sm"
        aria-label="TeamSync Navigation"
      >
        {/* Left: Navigation links (Desktop) */}
        {!forcedMobile && (
          <div className="hidden md:flex items-center gap-6 lg:gap-8 flex-1">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm font-medium text-zinc-700 hover:text-black transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

        {/* Center: Brand Logo */}
        <div className={`flex items-center ${!forcedMobile ? 'justify-start md:justify-center flex-1 md:flex-initial' : 'justify-start'}`}>
          <a href={brand.href} className="flex items-center gap-2 group">
            <div className="relative">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 32 32" fill="none">
                <rect width="28" height="28" rx="8" fill="#141419" />
                <path d="M14 7C14 10.86 10.86 14 7 14C10.86 14 14 17.14 14 21C14 17.14 17.14 14 21 14C17.14 14 14 10.86 14 7Z" fill="white" />
                <circle cx="23" cy="5" r="2" fill="#141419" />
              </svg>
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900">
              {brand.name}
            </span>
          </a>
        </div>

        {/* Right: Auth Actions (Desktop) */}
        {!forcedMobile && (
          <div className="hidden md:flex items-center justify-end gap-5 flex-1">
            <a
              href={actions.login.href}
              className="text-sm font-medium text-zinc-700 hover:text-black transition-colors"
            >
              {actions.login.label}
            </a>
            <a
              href={actions.signup.href}
              className="bg-[#181824] hover:bg-black text-white text-sm font-semibold px-6 py-2 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-sm"
            >
              {actions.signup.label}
            </a>
          </div>
        )}

        {/* Mobile Hamburger Side Slider Trigger */}
        <div className={`flex items-center gap-2 ${!forcedMobile ? 'md:hidden' : ''}`}>
          <a
            href={actions.signup.href}
            className="bg-[#181824] text-white text-xs font-semibold px-3 py-1.5 rounded-full"
          >
            {actions.signup.label}
          </a>
          <button
            onClick={() => setDrawerOpen(true)}
            className="p-1.5 rounded-xl text-zinc-800 hover:bg-zinc-100 transition cursor-pointer"
            aria-label="Toggle navigation"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Side Slider Drawer */}
      <MobileSideDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        theme="light"
        brand={
          <div className="flex items-center gap-2">
            <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
              <rect width="28" height="28" rx="8" fill="#141419" />
              <path d="M14 7C14 10.86 10.86 14 7 14C10.86 14 14 17.14 14 21C14 17.14 17.14 14 21 14C17.14 14 14 10.86 14 7Z" fill="white" />
              <circle cx="23" cy="5" r="2" fill="#141419" />
            </svg>
            <span className="text-lg font-bold text-zinc-900">{brand.name}</span>
          </div>
        }
        navigation={navigation}
        actions={
          <div className="flex flex-col gap-2.5">
            <a
              href={actions.login.href}
              className="w-full text-center py-3 text-sm font-medium text-zinc-700 bg-zinc-100 rounded-xl"
            >
              {actions.login.label}
            </a>
            <a
              href={actions.signup.href}
              className="w-full text-center py-3 text-sm font-semibold text-white bg-[#181824] rounded-xl"
            >
              {actions.signup.label}
            </a>
          </div>
        }
      />
    </header>
  );
};

export default Header_TeamSync;
