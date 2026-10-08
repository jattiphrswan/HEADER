import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  Sparkles,
  ShoppingBag,
  Sliders,
  Check,
  ChevronRight
} from 'lucide-react';

const SWATCHES = [
  { name: 'Charcoal Velvet', color: '#27272a' },
  { name: 'Oatmeal Linen', color: '#d6d3d1' },
  { name: 'Forest Olive', color: '#3f4f44' }
];

export const Hero_StylecraftDesign = () => {
  const [selectedSwatch, setSelectedSwatch] = useState(SWATCHES[0]);
  const [showCatalogModal, setShowCatalogModal] = useState(false);

  return (
    <div className="relative w-full rounded-[40px] overflow-hidden bg-white p-3 sm:p-5 shadow-2xl border border-slate-200">
      {/* Inner Container with Dark Living Room Background */}
      <div className="relative w-full rounded-[32px] overflow-hidden bg-neutral-950 text-white min-h-[680px] flex flex-col justify-between p-6 sm:p-12">
        {/* Background Interior Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: "url('/assets/stylecraft-living.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
        </div>

        {/* Top Header matching the curved cutout aesthetic */}
        <header className="relative z-20 flex items-center justify-between pb-6 border-b border-white/15">
          {/* Brand */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-white text-black font-black flex items-center justify-center text-lg shadow-lg">
              S
            </div>
            <div className="text-left">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase block text-white leading-none">
                STYLECRAFT
              </span>
              <span className="text-[10px] tracking-wider text-neutral-300 uppercase font-semibold block mt-0.5">
                DESIGN
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider text-neutral-200 uppercase">
            <a href="#shop" className="hover:text-white transition">Shop</a>
            <a href="#browser" className="hover:text-white transition">Browser</a>
            <a href="#about" className="hover:text-white transition">About Us</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </nav>

          {/* Connect With Us Button matching screenshot */}
          <button
            onClick={() => setShowCatalogModal(true)}
            className="bg-neutral-900/90 hover:bg-neutral-900 border border-white/20 text-white font-bold text-xs px-4 sm:px-5 py-2.5 rounded-full flex items-center gap-2 transition active:scale-95 shadow-md cursor-pointer"
          >
            <span>Connect with us</span>
            <div className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center text-[9px]">
              ↗
            </div>
          </button>
        </header>

        {/* Center Hero Content matching screenshot */}
        <div className="relative z-10 py-12 sm:py-20 max-w-2xl mx-auto text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] font-syne"
          >
            Modern Furniture for <br />
            Minimalist Lovers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-sm sm:text-base text-neutral-200/90 max-w-xl mx-auto leading-relaxed font-normal"
          >
            Experience the ultimate relaxation with our collection of serene and tranquil spa-inspired designs.
          </motion.p>

          {/* Coral Red Action Button matching screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col items-center gap-4"
          >
            <button
              onClick={() => setShowCatalogModal(true)}
              className="bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-full flex items-center gap-2.5 transition active:scale-95 shadow-xl shadow-rose-500/30 cursor-pointer"
            >
              <span>Explore More</span>
              <div className="w-5 h-5 rounded-full bg-white text-rose-600 flex items-center justify-center text-[10px] font-bold">
                ↗
              </div>
            </button>
          </motion.div>
        </div>

        {/* Bottom Fabric Customizer Swatch */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs">
          <div className="flex items-center gap-3">
            <span className="text-neutral-400 font-medium">Upholstery:</span>
            <div className="flex items-center gap-2">
              {SWATCHES.map((swatch) => (
                <button
                  key={swatch.name}
                  onClick={() => setSelectedSwatch(swatch)}
                  className={`w-6 h-6 rounded-full border-2 transition-transform cursor-pointer ${
                    selectedSwatch.name === swatch.name
                      ? 'scale-125 border-white shadow-md'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: swatch.color }}
                  title={swatch.name}
                />
              ))}
            </div>
            <span className="text-white font-semibold ml-1">{selectedSwatch.name}</span>
          </div>

          <span className="text-neutral-400 text-[11px] font-mono">
            Handcrafted in Copenhagen • 10-Year Frame Warranty
          </span>
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
                <h3 className="font-bold text-white text-base">Stylecraft 2026 Collection</h3>
                <button
                  onClick={() => setShowCatalogModal(false)}
                  className="w-7 h-7 rounded-full bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              <div className="py-5 space-y-3 text-xs">
                <div className="p-4 bg-neutral-950 rounded-2xl border border-white/10 space-y-2">
                  <div className="text-rose-400 font-bold">LIMITED PRODUCTION RUN</div>
                  <div className="text-base font-bold text-white">The Oslo Modular Lounge</div>
                  <div className="text-neutral-400">Selected Fabric: {selectedSwatch.name}</div>
                  <div className="text-lg font-mono font-bold text-white mt-1">$3,850 USD</div>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowCatalogModal(false);
                  alert('Thank you! A Stylecraft interior consultant will be in touch with fabric samples.');
                }}
                className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-xl transition text-xs"
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
