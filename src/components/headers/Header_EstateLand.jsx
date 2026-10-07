import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { estateLandHeaderData } from '../../data/headerData';
import MobileSideDrawer from '../common/MobileSideDrawer';

export const Header_EstateLand = ({ forcedMobile = false }) => {
  const [activeTab, setActiveTab] = useState("buying");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { brand, leftNav, rightNav } = estateLandHeaderData;

  const allNav = [...leftNav, ...rightNav];

  return (
    <header className="w-full bg-[#d2e8f4] text-zinc-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <nav 
          className="relative py-4 sm:py-5 flex items-center justify-between border-b border-[#a9c9db]"
          aria-label="Estate Land Navigation"
        >
          {/* Left Nav (Desktop) */}
          {!forcedMobile && (
            <div className="hidden md:flex items-center gap-7 lg:gap-10 flex-1 justify-start">
              {leftNav.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className="relative text-sm font-semibold text-zinc-900 hover:text-black transition-colors cursor-pointer pb-2"
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#115e59] rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* Center: Cursive Script Logo */}
          <div className="flex-1 md:flex-initial text-left md:text-center">
            <a 
              href={brand.href} 
              className="inline-block transition-transform hover:scale-105"
            >
              <span className="font-serif italic text-2xl sm:text-3xl font-bold tracking-tight text-[#164e63] select-none drop-shadow-sm font-['Playfair_Display',serif]">
                Estate Land
              </span>
            </a>
          </div>

          {/* Right Nav (Desktop) */}
          {!forcedMobile && (
            <div className="hidden md:flex items-center gap-7 lg:gap-10 flex-1 justify-end">
              {rightNav.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className="relative text-sm font-semibold text-zinc-900 hover:text-black transition-colors cursor-pointer pb-2"
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#115e59] rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* Mobile Hamburger Button */}
          <div className={`flex items-center ${!forcedMobile ? 'md:hidden' : ''}`}>
            <button
              onClick={() => setDrawerOpen(true)}
              className="p-2 rounded-xl text-zinc-900 hover:bg-black/5 transition cursor-pointer"
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
        activeId={activeTab}
        onSelect={(item) => setActiveTab(item.id)}
        theme="light"
        brand={
          <span className="font-serif italic text-2xl font-bold text-[#164e63]">
            Estate Land
          </span>
        }
        navigation={allNav}
        actions={
          <a
            href="#contact"
            className="w-full text-center py-3 bg-[#115e59] text-white font-semibold text-sm rounded-xl hover:bg-[#0f766e] transition shadow-sm"
          >
            Inquire About Properties
          </a>
        }
      />
    </header>
  );
};

export default Header_EstateLand;
