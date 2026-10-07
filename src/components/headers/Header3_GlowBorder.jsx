import React, { useState } from 'react';
import { ShoppingBag, Sparkles, Menu } from 'lucide-react';
import headerData from '../../data/headerData';
import SoRunLogo from '../common/SoRunLogo';
import MobileSideDrawer from '../common/MobileSideDrawer';

/**
 * Header 3: Cyberpunk Glow Border
 * Features Mobile Side Slider
 */
export const Header3_GlowBorder = ({ forcedMobile = false }) => {
  const { brand, navigation, actions } = headerData;
  const [activeTab, setActiveTab] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="w-full max-w-7xl mx-auto px-2 sm:px-4">
      <div className="relative group p-[1px] rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-emerald-400 transition-all duration-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]">
        <nav 
          className="relative bg-[#0d0d11] text-white rounded-full px-3 py-2 sm:px-6 sm:py-2.5 flex items-center justify-between"
          aria-label="Neon Glow Header"
        >
          {/* Brand */}
          <a href={brand.href} className="flex items-center gap-2 sm:gap-3">
            <div className="relative">
              <SoRunLogo className="w-7 h-7 sm:w-8 sm:h-8 text-fuchsia-400 animate-pulse" />
              <div className="absolute inset-0 bg-fuchsia-500 blur-md opacity-40 -z-10" />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
              {brand.name}
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400" />
            </span>
          </a>

          {/* Desktop Nav */}
          {!forcedMobile && (
            <div className="hidden md:flex items-center gap-1 bg-white/[0.03] px-3 py-1 rounded-full border border-white/5">
              {navigation.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`group/link relative px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
                      isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-violet-500 to-emerald-400 transition-all duration-300 ${
                        isActive ? 'opacity-100 scale-x-100 shadow-[0_0_8px_#a855f7]' : 'opacity-0 scale-x-0 group-hover/link:opacity-100 group-hover/link:scale-x-75'
                      }`}
                    />
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
                className="p-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-neutral-300 hover:text-white transition-all hover:scale-110 active:scale-95 border border-white/5"
                aria-label="Cart"
              >
                <ShoppingBag className="w-4 h-4 text-violet-300" />
              </a>

              <a
                href={actions.login.href}
                className="text-sm font-medium text-neutral-300 hover:text-white px-3.5 py-1.5 transition-colors"
              >
                {actions.login.label}
              </a>

              <a
                href={actions.signup.href}
                className="relative px-5 py-2 text-sm font-semibold text-black rounded-full bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 hover:brightness-110 transition-all shadow-[0_0_20px_rgba(110,231,183,0.4)] hover:scale-105 active:scale-95"
              >
                {actions.signup.label}
              </a>
            </div>
          )}

          {/* Mobile Right */}
          <div className={`flex items-center gap-2 ${!forcedMobile ? 'md:hidden' : ''}`}>
            <a
              href={actions.signup.href}
              className="px-3 py-1.5 text-xs font-semibold rounded-full bg-emerald-400 text-black"
            >
              Sign up
            </a>
            <button
              onClick={() => setDrawerOpen(true)}
              className="p-1.5 rounded-full bg-white/5 text-white cursor-pointer"
              aria-label="Menu"
            >
              <Menu className="w-4 h-4" />
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
        brand={
          <div className="flex items-center gap-2">
            <SoRunLogo className="w-7 h-7 text-fuchsia-400" />
            <span className="text-lg font-bold text-white">{brand.name}</span>
          </div>
        }
        navigation={navigation}
        actions={
          <div className="flex flex-col gap-2.5">
            <a href={actions.login.href} className="w-full text-center py-2.5 text-sm rounded-xl bg-white/5 text-white">
              {actions.login.label}
            </a>
            <a href={actions.signup.href} className="w-full text-center py-2.5 text-sm rounded-xl bg-emerald-400 text-black font-semibold">
              {actions.signup.label}
            </a>
          </div>
        }
      />
    </header>
  );
};

export default Header3_GlowBorder;
