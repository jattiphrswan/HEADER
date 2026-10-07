import React, { useState } from 'react';
import { ChevronDown, Zap, Menu } from 'lucide-react';
import { untitledUiHeaderData } from '../../data/headerData';
import MobileSideDrawer from '../common/MobileSideDrawer';

export const Header_UntitledUI = ({ forcedMobile = false }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { brand, navigation, actions } = untitledUiHeaderData;

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <header className="w-full max-w-7xl mx-auto px-2 sm:px-4">
      <nav 
        className="relative bg-[#e6e9e0] text-zinc-900 rounded-full sm:rounded-t-[32px] md:rounded-[32px] px-4 sm:px-8 py-3 flex items-center justify-between border border-zinc-300/80 shadow-sm"
        aria-label="Untitled UI Navigation"
      >
        {/* Left: Brand + Nav links */}
        <div className="flex items-center gap-6 lg:gap-8">
          <a href={brand.href} className="flex items-center gap-2 group">
            <svg 
              className="w-5 h-5 text-zinc-950 transition-transform duration-300 group-hover:rotate-45" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 1L14.6 7.4L21.4 5.2L17.8 11.2L23 15.6L16.2 16.4L15.6 23.2L11.2 18L6.8 23.2L6.2 16.4L-0.6 15.6L4.6 11.2L1 5.2L7.8 7.4Z" />
            </svg>
            <span className="text-base sm:text-lg font-bold tracking-tight text-zinc-950">
              {brand.name}
            </span>
          </a>

          {!forcedMobile && (
            <div className="hidden lg:flex items-center gap-5 xl:gap-6">
              {navigation.map((item) => {
                if (item.hasDropdown) {
                  const isOpen = activeDropdown === item.id;
                  return (
                    <div key={item.id} className="relative">
                      <button
                        onClick={() => toggleDropdown(item.id)}
                        onMouseEnter={() => setActiveDropdown(item.id)}
                        className="flex items-center gap-1 text-sm font-medium text-zinc-700 hover:text-zinc-950 transition-colors py-1 cursor-pointer"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isOpen && (
                        <div 
                          onMouseLeave={() => setActiveDropdown(null)}
                          className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl p-2 shadow-xl border border-zinc-200 z-50 animate-in fade-in zoom-in-95 duration-150"
                        >
                          {item.dropdownItems.map((sub, idx) => (
                            <a
                              key={idx}
                              href={`#${sub.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block px-3 py-2 text-xs font-medium text-zinc-700 hover:text-black hover:bg-zinc-100 rounded-xl transition"
                            >
                              {sub}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className="text-sm font-medium text-zinc-700 hover:text-zinc-950 transition-colors"
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Right: Actions (Desktop) */}
        {!forcedMobile && (
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={actions.login.href}
              className="text-sm font-medium text-zinc-800 hover:text-zinc-950 transition-colors"
            >
              {actions.login.label}
            </a>

            <a
              href={actions.getStarted.href}
              className="group flex items-center gap-2 bg-[#141418] hover:bg-black text-white pl-1.5 pr-4 py-1.5 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-sm"
            >
              <div className="w-6 h-6 rounded-full bg-neutral-700/80 flex items-center justify-center transition-transform group-hover:scale-110">
                <Zap className="w-3.5 h-3.5 text-white fill-white" />
              </div>
              <span className="text-sm font-semibold tracking-tight">
                {actions.getStarted.label}
              </span>
            </a>
          </div>
        )}

        {/* Mobile Toggle Button */}
        <div className={`flex items-center gap-2 ${!forcedMobile ? 'sm:hidden' : ''}`}>
          <a
            href={actions.getStarted.href}
            className="flex items-center gap-1.5 bg-[#141418] text-white pl-1 pr-3 py-1 rounded-full text-xs font-semibold"
          >
            <div className="w-5 h-5 rounded-full bg-neutral-700 flex items-center justify-center">
              <Zap className="w-2.5 h-2.5 text-white fill-white" />
            </div>
            <span>Start</span>
          </a>

          <button
            onClick={() => setDrawerOpen(true)}
            className="p-1.5 rounded-lg bg-zinc-300/70 text-zinc-900 cursor-pointer"
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
        theme="light"
        brand={
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L14.6 7.4L21.4 5.2L17.8 11.2L23 15.6L16.2 16.4L15.6 23.2L11.2 18L6.8 23.2L6.2 16.4L-0.6 15.6L4.6 11.2L1 5.2L7.8 7.4Z" />
            </svg>
            <span className="text-base font-bold text-black">{brand.name}</span>
          </div>
        }
        navigation={navigation}
        actions={
          <div className="flex flex-col gap-2.5">
            <a
              href={actions.login.href}
              className="w-full text-center py-2.5 text-sm font-medium text-zinc-800 bg-zinc-100 rounded-xl"
            >
              {actions.login.label}
            </a>
            <a
              href={actions.getStarted.href}
              className="w-full text-center py-2.5 text-sm font-semibold text-white bg-black rounded-xl"
            >
              {actions.getStarted.label}
            </a>
          </div>
        }
      />
    </header>
  );
};

export default Header_UntitledUI;
