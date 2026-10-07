import React, { useState } from 'react';
import { ShoppingBag, ArrowRight, Menu, X } from 'lucide-react';
import headerData from '../../data/headerData';
import SoRunLogo from '../common/SoRunLogo';

/**
 * Header 4: Clean Modern Light Floating Capsule
 * Features:
 * - Crisp floating glass pill in light mode with subtle shadow
 * - Bouncy dot active indicator
 * - Soft pill hover effect with border highlighting
 * - Inverted high-contrast buttons
 */
export const Header4_MinimalLight = () => {
  const { brand, navigation, actions } = headerData;
  const [activeTab, setActiveTab] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full max-w-7xl mx-auto px-4 py-6">
      <nav 
        className="relative bg-white/95 backdrop-blur-md text-zinc-900 rounded-full px-4 py-2 sm:px-6 sm:py-2.5 flex items-center justify-between border border-zinc-200/80 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] transition-all"
        aria-label="Light Capsule Header"
      >
        {/* Brand */}
        <a href={brand.href} className="flex items-center gap-2.5 group">
          <SoRunLogo className="w-8 h-8 text-zinc-950 group-hover:rotate-45 transition-transform duration-300" />
          <span className="text-xl font-extrabold tracking-tight text-zinc-950">
            {brand.name}
          </span>
        </a>

        {/* Center Nav */}
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

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
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

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-full bg-zinc-100 text-zinc-900"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 p-4 bg-white/95 backdrop-blur-md border border-zinc-200 rounded-3xl shadow-xl animate-in fade-in">
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileOpen(false);
                }}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium ${
                  activeTab === item.id ? 'bg-zinc-100 font-bold text-zinc-950' : 'text-zinc-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-zinc-200 flex gap-2">
            <a href={actions.login.href} className="flex-1 text-center py-2 text-sm rounded-full bg-zinc-100 text-zinc-950 font-medium">
              {actions.login.label}
            </a>
            <a href={actions.signup.href} className="flex-1 text-center py-2 text-sm rounded-full bg-zinc-950 text-white font-semibold">
              {actions.signup.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header4_MinimalLight;
