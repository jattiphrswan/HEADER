import React, { useState } from 'react';
import { ShoppingBag, ArrowUpRight, Menu } from 'lucide-react';
import headerData from '../../data/headerData';
import SoRunLogo from '../common/SoRunLogo';
import MobileSideDrawer from '../common/MobileSideDrawer';

/**
 * Header 2: Liquid Sliding Indicator
 * Includes Mobile Side Slider Drawer
 */
export const Header2_SlidingPill = ({ forcedMobile = false }) => {
  const { brand, navigation, actions } = headerData;
  const [activeTab, setActiveTab] = useState("home");
  const [hoveredTab, setHoveredTab] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="w-full max-w-7xl mx-auto px-2 sm:px-4">
      <nav 
        className="relative backdrop-blur-xl bg-zinc-950/90 text-white rounded-full px-3 py-2 sm:px-6 sm:py-3 flex items-center justify-between border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all"
        aria-label="Liquid Sliding Header"
      >
        {/* Brand */}
        <a 
          href={brand.href} 
          className="flex items-center gap-2 sm:gap-3 group"
        >
          <div className="relative p-1 rounded-xl bg-white/5 border border-white/10 group-hover:border-purple-500/50 transition-colors duration-300">
            <SoRunLogo className="w-6 h-6 sm:w-7 sm:h-7 text-purple-300 group-hover:scale-110 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            {brand.name}
          </span>
        </a>

        {/* Desktop Nav with Liquid Hover Pill */}
        {!forcedMobile && (
          <div 
            className="hidden md:flex items-center relative bg-white/5 p-1.5 rounded-full border border-white/5"
            onMouseLeave={() => setHoveredTab(null)}
          >
            {navigation.map((item) => {
              const isActive = activeTab === item.id;
              const isHovered = hoveredTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  onMouseEnter={() => setHoveredTab(item.id)}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 z-10 cursor-pointer ${
                    isActive
                      ? 'text-zinc-950 font-semibold'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full shadow-md -z-10 animate-in fade-in zoom-in-95 duration-200" />
                  )}
                  {!isActive && isHovered && (
                    <span className="absolute inset-0 bg-white/15 rounded-full -z-10 animate-in fade-in duration-150" />
                  )}
                  {item.label}
                  {item.badge && (
                    <span className="ml-1.5 px-1.5 py-0.2 text-[10px] uppercase font-bold tracking-wider rounded-full bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Right Actions (Desktop) */}
        {!forcedMobile && (
          <div className="hidden md:flex items-center gap-3">
            <a
              href={actions.cart.href}
              className="relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all duration-200 hover:scale-105 group"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 transition-transform group-hover:-rotate-6" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-zinc-950">
                {actions.cart.count}
              </span>
            </a>

            <a
              href={actions.login.href}
              className="text-sm font-medium text-zinc-300 hover:text-white px-4 py-2 rounded-full hover:bg-white/5 transition-colors"
            >
              {actions.login.label}
            </a>

            <a
              href={actions.signup.href}
              className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-emerald-300 to-teal-300 px-5 py-2 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:from-emerald-200 hover:to-teal-200 hover:shadow-[0_0_25px_rgba(52,211,153,0.4)] hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">{actions.signup.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        )}

        {/* Mobile Actions: Cart + Side Slider Toggle */}
        <div className={`flex items-center gap-2 ${!forcedMobile ? 'md:hidden' : ''}`}>
          <a
            href={actions.cart.href}
            className="p-2 rounded-full bg-white/5 text-zinc-300"
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4" />
          </a>

          <a
            href={actions.signup.href}
            className="px-3 py-1.5 text-xs font-semibold rounded-full bg-emerald-300 text-zinc-950"
          >
            Sign up
          </a>

          <button
            onClick={() => setDrawerOpen(true)}
            className="p-2 rounded-full bg-white/5 text-white hover:bg-white/10 transition cursor-pointer"
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
            <SoRunLogo className="w-7 h-7 text-purple-300" />
            <span className="text-lg font-bold text-white">{brand.name}</span>
          </div>
        }
        navigation={navigation}
        actions={
          <div className="flex flex-col gap-2.5">
            <a href={actions.login.href} className="w-full text-center py-2.5 text-sm rounded-xl bg-white/5 text-white font-medium">
              {actions.login.label}
            </a>
            <a href={actions.signup.href} className="w-full text-center py-2.5 text-sm rounded-xl bg-gradient-to-r from-emerald-300 to-teal-300 text-zinc-950 font-bold">
              {actions.signup.label}
            </a>
          </div>
        }
      />
    </header>
  );
};

export default Header2_SlidingPill;
