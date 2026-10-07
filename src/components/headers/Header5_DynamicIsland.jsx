import React, { useState } from 'react';
import { ShoppingBag, Search, Bell, Menu, X, ArrowRight } from 'lucide-react';
import headerData from '../../data/headerData';
import SoRunLogo from '../common/SoRunLogo';

/**
 * Header 5: Dynamic Island Style Expandable Header
 * Features:
 * - Ultra-compact dynamic capsule with quick-action toggles
 * - Expandable search micro-interaction
 * - Live notification pill
 * - Smooth transition states
 */
export const Header5_DynamicIsland = () => {
  const { brand, navigation, actions } = headerData;
  const [activeTab, setActiveTab] = useState("home");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full max-w-7xl mx-auto px-4 py-6">
      <nav 
        className="relative bg-zinc-900/95 backdrop-blur-2xl text-white rounded-[32px] px-4 py-2 sm:px-6 sm:py-3 flex items-center justify-between border border-zinc-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300"
        aria-label="Dynamic Island Header"
      >
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a href={brand.href} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center p-1.5 shadow-md group-hover:scale-105 transition-transform">
              <SoRunLogo className="w-full h-full text-white" />
            </div>
            <div className="hidden min-[400px]:block">
              <span className="text-base font-bold tracking-tight text-white block leading-none">
                {brand.name}
              </span>
              <span className="text-[10px] text-zinc-400 font-medium tracking-wider uppercase">
                {brand.tagline}
              </span>
            </div>
          </a>
        </div>

        {/* Center: Search Bar or Nav Links */}
        {searchOpen ? (
          <div className="flex-1 max-w-md mx-4 animate-in fade-in duration-200">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3" />
              <input 
                type="text" 
                placeholder="Search products, boxes, categories..." 
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
        )}

        {/* Right Tools & Actions */}
        <div className="flex items-center gap-2">
          {!searchOpen && (
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition"
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

          <a
            href={actions.signup.href}
            className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-zinc-950 font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all shadow-md hover:scale-105 active:scale-95"
          >
            <span>{actions.signup.label}</span>
            <ArrowRight className="w-3 h-3" />
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-full bg-zinc-800 text-white"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden mt-2 p-4 bg-zinc-900 border border-zinc-700/60 rounded-3xl animate-in fade-in">
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileOpen(false);
                }}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium ${
                  activeTab === item.id ? 'bg-purple-600/30 text-purple-300 font-bold' : 'text-zinc-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-zinc-800 flex gap-2">
            <a href={actions.login.href} className="flex-1 text-center py-2 text-sm rounded-full bg-zinc-800 text-white">
              {actions.login.label}
            </a>
            <a href={actions.signup.href} className="flex-1 text-center py-2 text-sm rounded-full bg-emerald-400 text-zinc-950 font-bold">
              {actions.signup.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header5_DynamicIsland;
