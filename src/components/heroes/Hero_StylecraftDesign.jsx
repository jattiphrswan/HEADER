import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  Sofa,
  Sparkles,
  Palette,
  Check,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { useIsMobile } from './useIsMobile';

const FABRICS = [
  { id: 'charcoal', name: 'Charcoal Velvet', hex: '#262626' },
  { id: 'oatmeal', name: 'Oatmeal Linen', hex: '#d4c5b9' },
  { id: 'forest', name: 'Forest Corduroy', hex: '#2d3e35' }
];

export const Hero_StylecraftDesign = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFabric, setActiveFabric] = useState(FABRICS[0]);
  const [showCatalogModal, setShowCatalogModal] = useState(false);

  return (
    <div className="relative w-full rounded-[36px] sm:rounded-[44px] bg-white p-2 sm:p-4 md:p-6 shadow-2xl font-jakarta">
      {/* Dark Inner Room Container with rounded corners */}
      <div className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden bg-neutral-950 text-white min-h-[620px] flex flex-col justify-between p-4 sm:p-10">
        {/* Background Interior Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: "url('/assets/stylecraft-living.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/65" />
        </div>

        {/* Top Header matching the curved cutout aesthetic */}
        <header className="relative z-30 flex items-center justify-between pb-4 sm:pb-6 border-b border-white/15">
          {/* Brand */}
          <div className="flex items-center gap-2.5 sm:gap-3 cursor-pointer">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white text-black font-black flex items-center justify-center text-base sm:text-lg shadow-lg">
              S
            </div>
            <div className="text-left">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase block text-white leading-none">
                STYLECRAFT
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-wider text-neutral-300 uppercase font-semibold block mt-0.5">
                DESIGN
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          {!isMobile && (
            <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider text-neutral-200 uppercase">
              <a href="#shop" className="hover:text-white transition">Shop</a>
              <a href="#browser" className="hover:text-white transition">Browser</a>
              <a href="#about" className="hover:text-white transition">About Us</a>
              <a href="#faq" className="hover:text-white transition">FAQ</a>
            </nav>
          )}

          {/* Right Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {!isMobile && (
              <button
                onClick={() => setShowCatalogModal(true)}
                className="bg-neutral-900/90 hover:bg-neutral-900 border border-white/20 text-white font-bold text-xs px-4 sm:px-5 py-2.5 rounded-full flex items-center gap-2 transition active:scale-95 shadow-md cursor-pointer"
              >
                <span>Connect with us</span>
                <div className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center text-[9px]">
                  ↗
                </div>
              </button>
            )}

            {isMobile && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition active:scale-95 cursor-pointer flex items-center justify-center"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              </button>
            )}
          </div>

          {/* Mobile Dropdown Drawer */}
          <AnimatePresence>
            {isMobile && mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-2xl border-b border-white/15 px-6 py-5 flex flex-col gap-3 shadow-2xl text-left"
              >
                <a href="#shop" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-wider text-neutral-200 hover:text-white py-1">Shop</a>
                <a href="#browser" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-wider text-neutral-200 hover:text-white py-1">Browser</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-wider text-neutral-200 hover:text-white py-1">About Us</a>
                <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-wider text-neutral-200 hover:text-white py-1">FAQ</a>

                <div className="pt-3 border-t border-white/10">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setShowCatalogModal(true);
                    }}
                    className="w-full py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider transition cursor-pointer"
                  >
                    Connect With Us ↗
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Center Hero Content matching screenshot */}
        <div className="relative z-10 py-8 sm:py-16 max-w-2xl mx-auto text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${isMobile ? 'text-2xl sm:text-3xl leading-tight' : 'text-3xl sm:text-5xl lg:text-6xl leading-[1.12]'} font-black tracking-tight text-white font-syne`}
          >
            Modern Furniture for <br />
            Minimalist Lovers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 sm:mt-5 text-xs sm:text-base text-neutral-200/90 max-w-xl mx-auto leading-relaxed font-normal"
          >
            Experience the ultimate relaxation with our collection of serene and tranquil spa-inspired designs.
          </motion.p>

          {/* Coral Red Action Button matching screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 sm:mt-8 flex flex-col items-center gap-4"
          >
            <button
              onClick={() => setShowCatalogModal(true)}
              className="bg-[#f05a4f] hover:bg-[#e04a3f] text-white font-bold text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5 rounded-full flex items-center gap-2.5 transition active:scale-95 shadow-xl shadow-red-500/20 cursor-pointer"
            >
              <span>Explore More</span>
              <div className="w-5 h-5 rounded-full bg-white text-[#f05a4f] flex items-center justify-center text-[10px]">
                ↗
              </div>
            </button>
          </motion.div>
        </div>

        {/* Bottom Interactive Fabric Swatches */}
        <div className="relative z-10 pt-4 sm:pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-neutral-300">
            <Palette className="w-4 h-4 text-[#f05a4f]" />
            <span className="text-[11px] sm:text-xs">Upholstery: <strong>{activeFabric.name}</strong></span>
          </div>

          <div className="flex items-center gap-2">
            {FABRICS.map((fabric) => (
              <button
                key={fabric.id}
                onClick={() => setActiveFabric(fabric)}
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 transition-transform cursor-pointer flex items-center justify-center ${
                  activeFabric.id === fabric.id
                    ? 'border-white scale-110 shadow-md'
                    : 'border-white/20 hover:scale-105'
                }`}
                style={{ backgroundColor: fabric.hex }}
                title={fabric.name}
              >
                {activeFabric.id === fabric.id && (
                  <Check className={`w-3 h-3 ${fabric.id === 'oatmeal' ? 'text-black' : 'text-white'}`} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Catalog Modal */}
      <AnimatePresence>
        {showCatalogModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-neutral-900 border border-white/20 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-left text-white"
            >
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sofa className="w-5 h-5 text-[#f05a4f]" />
                  <h3 className="font-bold text-white text-base">Nordic Lounge Collection</h3>
                </div>
                <button
                  onClick={() => setShowCatalogModal(false)}
                  className="w-7 h-7 rounded-full bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="py-4 space-y-3 text-xs text-neutral-300">
                <div className="p-4 bg-neutral-950 rounded-2xl border border-white/10">
                  <div className="text-[#f05a4f] font-bold text-[10px] uppercase tracking-wider mb-1">Featured Item</div>
                  <div className="text-sm font-bold text-white">The Oslo Modular 3-Seater</div>
                  <div className="text-neutral-400 mt-1">Configured in {activeFabric.name} • Solid Smoked Oak Base</div>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowCatalogModal(false);
                  alert(`Sample swatches for ${activeFabric.name} ordered. Free fabric box is on the way!`);
                }}
                className="w-full py-3 bg-[#f05a4f] hover:bg-[#e04a3f] font-bold rounded-xl text-white transition text-xs cursor-pointer"
              >
                Order Free Fabric Swatch Box
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero_StylecraftDesign;
