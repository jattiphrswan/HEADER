import React, { useState } from 'react';
import { ShoppingBag, ArrowRight, Menu } from 'lucide-react';
import headerData from '../../data/headerData';
import SoRunLogo from '../common/SoRunLogo';
import MobileSideDrawer from '../common/MobileSideDrawer';

/**
 * Header 4: Clean Modern Light Floating Capsule
 * Features:
 * - Crisp floating glass pill in light mode with subtle shadow
 * - Bouncy dot active indicator
 * - Inverted high-contrast buttons
 * - Mobile Side Slider Drawer
 */
export const Header4_MinimalLight = ({ forcedMobile = false }) => {
  const { brand, navigation, actions } = headerData;
  const [activeTab, setActiveTab] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="w-full max-w-7xl mx-auto px-2 sm:px-4">
      <nav 
        className="relative bg-white/95 backdrop-blur-md text-zinc-900 rounded-full px-3 py-2 sm:px-6 sm:py-2.5 flex items-center justify-between border border-zinc-200/80 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] transition-all"
        aria-label="Light Capsule Header"
      >
        {/* Brand */}
        <a href={brand.href} className="flex items-center gap-2 sm:gap-2.5 group">
          <SoRunLogo className="w-7 h-7 sm:w-8 sm:h-8 text-zinc-950 group-hover:rotate-45 transition-transform duration-300" />
          <span className="text-lg sm:text-xl font-extrabold tracking-tight text-zinc-950">
            {brand.name}
          </span>
        </a>

        {/* Center Nav (Desktop) */}
        {!forcedMobile && (
          <div className="hidden md:flex items-center gap-1 bg-zinc-100/80 p-1 rounded-full border border-zinc-200/50">
            {navigation.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-white text-zinc-950 shadow-sm font-semibold'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-white/60'
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
                  )}
                  {item.label}
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
              className="p-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200/70 text-zinc-700 hover:text-zinc-950 transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-indigo-600" />
            </a>

            <a
              href={actions.login.href}
              className="text-sm font-medium text-zinc-700 hover:text-zinc-950 px-3.5 py-1.5 transition-colors"
            >
              {actions.login.label}
            </a>

            <a
              href={actions.signup.href}
              className="group inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition-all hover:shadow-md hover:scale-105 active:scale-95"
            >
              <span>{actions.signup.label}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        )}

        {/* Mobile Actions: Compact Sign Up + Side Slider Trigger */}
        <div className={`flex items-center gap-2 ${!forcedMobile ? 'md:hidden' : ''}`}>
          <a
            href={actions.signup.href}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-zinc-950 rounded-full"
          >
            Sign up
          </a>
          <button
            onClick={() => setDrawerOpen(true)}
            className="p-1.5 rounded-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition cursor-pointer"
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
        theme="light"
        brand={
          <div className="flex items-center gap-2">
            <SoRunLogo className="w-7 h-7 text-zinc-950" />
            <span className="text-lg font-bold text-zinc-950">{brand.name}</span>
          </div>
        }
        navigation={navigation}
        actions={
          <div className="flex flex-col gap-2.5">
            <a href={actions.login.href} className="w-full text-center py-2.5 text-sm rounded-xl bg-zinc-100 text-zinc-900 font-medium">
              {actions.login.label}
            </a>
            <a href={actions.signup.href} className="w-full text-center py-2.5 text-sm rounded-xl bg-zinc-950 text-white font-semibold">
              {actions.signup.label}
            </a>
          </div>
        }
      />
    </header>
  );
};

export default Header4_MinimalLight;
