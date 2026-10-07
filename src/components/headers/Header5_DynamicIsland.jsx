import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, ArrowRight } from 'lucide-react';
import headerData from '../../data/headerData';
import SoRunLogo from '../common/SoRunLogo';
import MobileSideDrawer from '../common/MobileSideDrawer';

/**
 * Header 5: Dynamic Island Style Expandable Header
 * Includes Mobile Side Slider
 */
export const Header5_DynamicIsland = ({ forcedMobile = false }) => {
  const { brand, navigation, actions } = headerData;
  const [activeTab, setActiveTab] = useState("home");
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="w-full max-w-7xl mx-auto px-2 sm:px-4">
      <nav 
        className="relative bg-zinc-900/95 backdrop-blur-2xl text-white rounded-[32px] px-3 py-2 sm:px-6 sm:py-3 flex items-center justify-between border border-zinc-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300"
        aria-label="Dynamic Island Header"
      >
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a href={brand.href} className="flex items-center gap-2 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center p-1.5 shadow-md group-hover:scale-105 transition-transform">
              <SoRunLogo className="w-full h-full text-white" />
            </div>
            <div>
              <span className="text-sm sm:text-base font-bold tracking-tight text-white block leading-none">
                {brand.name}
              </span>
              <span className="text-[10px] text-zinc-400 font-medium tracking-wider uppercase hidden sm:block">
                {brand.tagline}
              </span>
            </div>
          </a>
        </div>

        {/* Center: Search Bar or Nav Links (Desktop only) */}
        {!forcedMobile && (
          searchOpen ? (
            <div className="hidden lg:flex flex-1 max-w-md mx-4 animate-in fade-in duration-200">
              <div className="relative flex items-center w-full">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3" />
                <input 
                  type="text" 
                  placeholder="Search products, boxes..." 
                  className="w-full bg-zinc-800 text-sm text-white placeholder-zinc-400 pl-9 pr-8 py-1.5 rounded-full outline-none ring-1 ring-purple-500/50 focus:ring-2 focus:ring-purple-400"
                  autoFocus
                />
                <button 
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-2.5 text-zinc-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="hidden lg:flex items-center bg-zinc-800/80 p-1 rounded-full border border-zinc-700/40">
              {navigation.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`relative text-xs uppercase tracking-wider font-semibold px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-700/50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          )
        )}

        {/* Right Tools & Actions */}
        <div className="flex items-center gap-2">
          {!forcedMobile && !searchOpen && (
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden lg:flex p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          )}

          <a
            href={actions.cart.href}
            className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition relative"
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400" />
          </a>

          {!forcedMobile && (
            <a
              href={actions.signup.href}
              className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-zinc-950 font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <span>{actions.signup.label}</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          )}

          {/* Mobile Side Slider Menu Button */}
          <button
            onClick={() => setDrawerOpen(true)}
            className={`p-1.5 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition cursor-pointer ${!forcedMobile ? 'lg:hidden' : ''}`}
            aria-label="Menu"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Side Slider Drawer */}
      <MobileSideDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeId={activeTab}
        onSelect={(item) => setActiveTab(item.id)}
        brand={
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center p-1">
              <SoRunLogo className="w-full h-full text-white" />
            </div>
            <span className="text-lg font-bold text-white">{brand.name}</span>
          </div>
        }
        navigation={navigation}
        actions={
          <div className="flex flex-col gap-2.5">
            <a href={actions.login.href} className="w-full text-center py-2.5 text-sm rounded-xl bg-zinc-800 text-white">
              {actions.login.label}
            </a>
            <a href={actions.signup.href} className="w-full text-center py-2.5 text-sm rounded-xl bg-emerald-400 text-zinc-950 font-bold">
              {actions.signup.label}
            </a>
          </div>
        }
      />
    </header>
  );
};

export default Header5_DynamicIsland;
