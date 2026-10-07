import React, { useState } from 'react';
import { Search, User, Heart, ShoppingCart, Menu } from 'lucide-react';
import { connectHeaderData } from '../../data/headerData';
import MobileSideDrawer from '../common/MobileSideDrawer';

export const Header_Connect = ({ forcedMobile = false }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { brand, navigation, actions } = connectHeaderData;

  return (
    <header className="w-full bg-white text-zinc-900 border-b border-zinc-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-5">
        <nav 
          className="flex items-center justify-between"
          aria-label="Connect Store Navigation"
        >
          {/* Left: Brand with Orange Dot */}
          <a href={brand.href} className="flex items-baseline group">
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-black">
              {brand.name}
            </span>
            <span className="text-3xl font-black text-orange-500 leading-none">
              .
            </span>
          </a>

          {/* Center: Nav links (Desktop) */}
          {!forcedMobile && (
            <div className="hidden md:flex items-center gap-7 lg:gap-10">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-sm font-semibold text-zinc-800 hover:text-black transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}

          {/* Right: E-Commerce Action Icons */}
          <div className="flex items-center gap-4 sm:gap-5">
            <a
              href={actions.search.href}
              className="p-1.5 text-zinc-700 hover:text-black hover:bg-zinc-100 rounded-full transition"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </a>

            {!forcedMobile && (
              <a
                href={actions.user.href}
                className="hidden sm:inline-block p-1.5 text-zinc-700 hover:text-black hover:bg-zinc-100 rounded-full transition"
                aria-label="My Account"
              >
                <User className="w-5 h-5" />
              </a>
            )}

            {!forcedMobile && (
              <a
                href={actions.wishlist.href}
                className="hidden sm:inline-block p-1.5 text-zinc-700 hover:text-black hover:bg-zinc-100 rounded-full transition relative"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-orange-500" />
              </a>
            )}

            <a
              href={actions.cart.href}
              className="p-1.5 text-zinc-700 hover:text-black hover:bg-zinc-100 rounded-full transition relative"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {actions.cart.count}
              </span>
            </a>

            {/* Mobile Side Slider Toggle */}
            <button
              onClick={() => setDrawerOpen(true)}
              className={`p-2 rounded-xl text-zinc-900 hover:bg-zinc-100 transition cursor-pointer ${!forcedMobile ? 'md:hidden' : ''}`}
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Side Slider */}
      <MobileSideDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        theme="light"
        brand={
          <div className="flex items-baseline">
            <span className="text-2xl font-black text-black">Connect</span>
            <span className="text-2xl font-black text-orange-500">.</span>
          </div>
        }
        navigation={navigation}
        actions={
          <div className="flex flex-col gap-2.5">
            <a
              href="#account"
              className="w-full text-center py-2.5 text-sm font-semibold bg-zinc-100 text-zinc-900 rounded-xl"
            >
              My Account
            </a>
            <a
              href="#checkout"
              className="w-full text-center py-3 text-sm font-bold bg-black text-white rounded-xl shadow-sm"
            >
              Proceed to Checkout ({actions.cart.count})
            </a>
          </div>
        }
      />
    </header>
  );
};

export default Header_Connect;
