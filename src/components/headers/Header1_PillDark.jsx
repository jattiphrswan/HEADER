import React, { useState } from 'react';
import { ShoppingBag, Menu } from 'lucide-react';
import headerData from '../../data/headerData';
import SoRunLogo from '../common/SoRunLogo';
import MobileSideDrawer from '../common/MobileSideDrawer';

/**
 * Header 1: Exact recreation of the reference screenshot
 * Features:
 * - Floating black pill container
 * - SoRun brand logo & typography
 * - Nested dark container with lavender/periwinkle active pill
 * - Dark shopping bag circular button & divider
 * - Dark Login button and soft mint-green "Sign up" pill
 * - Mobile Side Slider Drawer (smooth slide-in from right)
 */
export const Header1_PillDark = ({ currentActive = "home", onNavigate, forcedMobile = false }) => {
  const [activeTab, setActiveTab] = useState(currentActive);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { brand, navigation, actions } = headerData;

  const handleTabClick = (item) => {
    setActiveTab(item.id);
    if (onNavigate) onNavigate(item);
  };

  return (
    <header className="w-full max-w-7xl mx-auto px-2 sm:px-4">
      {/* Main Floating Pill Header */}
      <nav 
        className="relative bg-black text-white rounded-full px-3 py-2 sm:px-5 sm:py-2.5 flex items-center justify-between shadow-2xl shadow-black/40 border border-neutral-900"
        aria-label="Main Navigation"
      >
        {/* Left: Brand Logo & Title */}
        <a 
          href={brand.href} 
          className="flex items-center gap-2.5 group transition-transform duration-200 hover:scale-[1.02] pl-1"
        >
          <div className="transition-transform duration-300 group-hover:rotate-12">
            <SoRunLogo className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-white select-none">
            {brand.name}
          </span>
        </a>

        {/* Center: Desktop Navigation Bar in Capsule Container */}
        {!forcedMobile && (
          <div className="hidden md:flex items-center bg-[#171719] p-1 rounded-full border border-neutral-800/80 shadow-inner">
            {navigation.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item)}
                  className={`relative text-sm font-medium transition-all duration-200 rounded-full cursor-pointer ${
                    isActive
                      ? 'bg-[#dcd7fe] text-[#121124] px-4 py-1.5 shadow-sm font-semibold'
                      : 'text-neutral-300 hover:text-white px-3.5 py-1.5 hover:bg-neutral-800/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Right: Actions (Cart, Divider, Login, Sign up) */}
        {!forcedMobile && (
          <div className="hidden md:flex items-center gap-2">
            {/* Shopping Bag Button */}
            <a
              href={actions.cart.href}
              className="w-9 h-9 rounded-full bg-[#1c1c1f] hover:bg-neutral-800 text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200 relative group"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
            </a>

            {/* Thin Vertical Divider */}
            <div className="h-4 w-[1px] bg-neutral-800 mx-1" aria-hidden="true" />

            {/* Login Button */}
            <a
              href={actions.login.href}
              className="bg-[#1c1c1f] hover:bg-neutral-800 text-white text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-95"
            >
              {actions.login.label}
            </a>

            {/* Sign Up Button (Mint / Pastel Green Pill) */}
            <a
              href={actions.signup.href}
              className="bg-[#e9faef] hover:bg-[#d8f6e1] text-[#0d2a1b] text-sm font-semibold px-4.5 py-1.5 rounded-full transition-all duration-200 hover:scale-[1.04] active:scale-95 shadow-sm"
            >
              {actions.signup.label}
            </a>
          </div>
        )}

        {/* Mobile View: Compact Cart + Side Slider Hamburger Trigger */}
        <div className={`flex items-center gap-2 ${!forcedMobile ? 'md:hidden' : ''}`}>
          <a
            href={actions.cart.href}
            className="w-8 h-8 rounded-full bg-[#1c1c1f] text-neutral-300 flex items-center justify-center"
            aria-label="Cart"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
          </a>

          <a
            href={actions.signup.href}
            className="bg-[#e9faef] text-[#0d2a1b] text-xs font-semibold px-3 py-1.5 rounded-full"
          >
            Sign up
          </a>

          {/* Side Slider Trigger Button */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="w-8 h-8 rounded-full bg-[#1c1c1f] text-white flex items-center justify-center hover:bg-neutral-800 transition cursor-pointer"
            aria-label="Open mobile menu"
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
        onSelect={handleTabClick}
        brand={
          <div className="flex items-center gap-2">
            <SoRunLogo className="w-7 h-7 text-white" />
            <span className="text-lg font-bold text-white">{brand.name}</span>
          </div>
        }
        navigation={navigation}
        actions={
          <div className="flex flex-col gap-2.5">
            <a
              href={actions.login.href}
              className="w-full text-center bg-[#1c1c1f] hover:bg-neutral-800 text-white text-sm font-medium py-3 rounded-2xl transition"
            >
              {actions.login.label}
            </a>
            <a
              href={actions.signup.href}
              className="w-full text-center bg-[#e9faef] hover:bg-[#d8f6e1] text-[#0d2a1b] text-sm font-semibold py-3 rounded-2xl transition shadow-sm"
            >
              {actions.signup.label}
            </a>
          </div>
        }
      />
    </header>
  );
};

export default Header1_PillDark;
