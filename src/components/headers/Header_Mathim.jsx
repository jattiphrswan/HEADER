import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { mathimHeaderData } from '../../data/headerData';
import MobileSideDrawer from '../common/MobileSideDrawer';

export const Header_Mathim = ({ forcedMobile = false }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { brand, navigation, action } = mathimHeaderData;

  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6">
      <nav 
        className="w-full bg-gradient-to-r from-[#d6f2df] via-[#ebf7f0] to-white/95 text-zinc-900 py-3.5 px-4 sm:px-8 flex items-center justify-between border border-emerald-100 rounded-2xl shadow-sm"
        aria-label="Mathim EdTech Navigation"
      >
        {/* Left: Brand with checkmark and gradient accent */}
        <a href={brand.href} className="flex items-center gap-1.5 group">
          <div className="flex items-center font-black text-xl tracking-tight text-zinc-950">
            <span className="text-xl mr-0.5 font-bold">&#10003;</span>
            <span>MA</span>
            <span className="relative">
              <span className="absolute -top-1 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              THIM
            </span>
          </div>
        </a>

        {/* Center: Nav links (Desktop) */}
        {!forcedMobile && (
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm font-semibold text-zinc-700 hover:text-black transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

        {/* Right: Angled Ribbon "Join Today!" Button */}
        <div className="flex items-center gap-3">
          <a
            href={action.href}
            style={{ clipPath: 'polygon(16px 0, 100% 0, 100% 100%, 0 100%)' }}
            className="relative bg-gradient-to-r from-[#1d4ed8] to-[#6d28d9] hover:from-[#1e40af] hover:to-[#5b21b6] text-white font-bold text-xs sm:text-sm pl-7 sm:pl-9 pr-5 sm:pr-7 py-2.5 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md flex items-center justify-center cursor-pointer"
          >
            {action.label}
          </a>

          {/* Mobile Side Slider Toggle */}
          <button
            onClick={() => setDrawerOpen(true)}
            className={`p-2 rounded-xl text-zinc-800 hover:bg-black/5 transition cursor-pointer ${!forcedMobile ? 'lg:hidden' : ''}`}
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
        theme="light"
        brand={
          <div className="flex items-center font-black text-lg text-black">
            <span>&#10003; MATHIM</span>
          </div>
        }
        navigation={navigation}
        actions={
          <a
            href={action.href}
            className="w-full text-center py-3 bg-gradient-to-r from-[#1d4ed8] to-[#6d28d9] text-white font-bold text-sm rounded-xl shadow-md"
          >
            {action.label}
          </a>
        }
      />
    </header>
  );
};

export default Header_Mathim;
