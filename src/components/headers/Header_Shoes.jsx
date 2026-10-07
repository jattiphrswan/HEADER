import React, { useState } from 'react';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { shoesHeaderData } from '../../data/headerData';
import MobileSideDrawer from '../common/MobileSideDrawer';

/**
 * Sneaker Icon SVG matching the reference design
 */
const SneakerLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Shadow */}
    <ellipse cx="24" cy="36" rx="20" ry="3" fill="#e5e7eb" />
    {/* Back high-top sneaker */}
    <path 
      d="M26 6C28 6 30 8 31 11L37 25C38 27 36 30 33 30L23 30C21 30 20 28 20 26L21 16C21 10 23 6 26 6Z" 
      fill="#111827" 
    />
    <path d="M26 12L31 16M25 16L30 20M24 20L29 24" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    {/* Front low-top sneaker */}
    <path 
      d="M7 26C7 22 10 18 15 18L21 21C24 22 26 24 28 27L28 31C28 32 27 33 26 33L10 33C8 33 7 31 7 29L7 26Z" 
      fill="#000000" 
    />
    <path d="M7 32L28 32" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 23L17 25M13 26L16 28" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const Header_Shoes = ({ forcedMobile = false }) => {
  const [activeTab, setActiveTab] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { brand, navigation, actions } = shoesHeaderData;

  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6">
      <nav 
        className="w-full bg-white text-zinc-900 py-3 sm:py-4 px-4 sm:px-8 flex items-center justify-between border-b border-zinc-200/60 shadow-sm"
        aria-label="Shoes E-Commerce Navigation"
      >
        {/* Left: Sneaker Brand Logo */}
        <a href={brand.href} className="flex flex-col items-center group cursor-pointer">
          <SneakerLogo className="w-10 h-8 transition-transform group-hover:scale-105" />
          <span className="font-black text-xs tracking-[0.3em] uppercase text-black mt-0.5">
            {brand.name}
          </span>
        </a>

        {/* Center: Nav links (Desktop) */}
        {!forcedMobile && (
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navigation.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`text-sm font-semibold transition-all duration-200 rounded-full cursor-pointer ${
                    isActive
                      ? 'bg-black text-white px-5 py-2 shadow-sm'
                      : 'text-zinc-700 hover:text-black px-4 py-2 hover:bg-zinc-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Right: Search & Cart */}
        <div className="flex items-center gap-3">
          <a
            href={actions.search.href}
            className="p-2 rounded-full text-zinc-700 hover:text-black hover:bg-zinc-100 transition"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </a>

          <a
            href={actions.cart.href}
            className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-zinc-800 transition shadow-sm relative group"
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span className="sr-only">{actions.cart.count} items in cart</span>
          </a>

          {/* Mobile Side Slider Toggle */}
          <button
            onClick={() => setDrawerOpen(true)}
            className={`p-2 rounded-xl text-zinc-800 hover:bg-zinc-100 transition cursor-pointer ${!forcedMobile ? 'md:hidden' : ''}`}
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Side Slider */}
      <MobileSideDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeId={activeTab}
        onSelect={(item) => setActiveTab(item.id)}
        theme="light"
        brand={
          <div className="flex items-center gap-2">
            <SneakerLogo className="w-8 h-7" />
            <span className="font-extrabold tracking-widest text-sm text-black">SHOES</span>
          </div>
        }
        navigation={navigation}
        actions={
          <div className="flex flex-col gap-2">
            <a
              href="#shop-all"
              className="w-full text-center py-3 text-sm font-bold bg-black text-white rounded-xl shadow-sm"
            >
              Shop New Arrivals
            </a>
          </div>
        }
      />
    </header>
  );
};

export default Header_Shoes;
