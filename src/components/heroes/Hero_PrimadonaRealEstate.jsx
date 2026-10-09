import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Home,
  Search,
  MapPin,
  Building,
  ArrowRight,
  ChevronDown,
  Check,
  Sparkles,
  Menu,
  X
} from 'lucide-react';
import { useIsMobile } from './useIsMobile';

const LOCATIONS = ['Karimunjawa, Jepara', 'Seminyak, Bali', 'Menteng, Jakarta', 'Lombok Coast'];
const PROPERTY_TYPES = ['Minimalist Villa', 'Modern Penthouse', 'Tropical Retreat', 'Seafront Estate'];

export const Hero_PrimadonaRealEstate = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
  const [selectedType, setSelectedType] = useState(PROPERTY_TYPES[0]);
  const [priceBudget, setPriceBudget] = useState('IDR 13,000,000');
  const [showResultsModal, setShowResultsModal] = useState(false);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden text-white shadow-2xl border border-blue-950/80 bg-[#09152b] font-jakarta min-h-[640px] flex flex-col justify-between">
      {/* Twilight Villa Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: "url('/assets/primadona-villa.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#09152b]/95 via-[#09152b]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09152b]/95 via-transparent to-[#09152b]/60" />
      </div>

      {/* Top Header */}
      <header className="relative z-30 px-5 sm:px-12 py-4 sm:py-5 flex items-center justify-between border-b border-white/10 backdrop-blur-md">
        {/* Brand */}
        <div className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-blue-600/30">
            P
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tight text-white">
            Primadona
          </span>
        </div>

        {/* Desktop Links */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-300">
            <a href="#sell" className="hover:text-white transition">For Sell</a>
            <a href="#rent" className="hover:text-white transition">For Rent</a>
            <a href="#property" className="text-white font-bold">Property</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#about" className="hover:text-white transition">About</a>
          </nav>
        )}

        {/* Desktop Social Icons */}
        {!isMobile && (
          <div className="hidden md:flex items-center gap-2">
            {['f', 't', 'in', 'ig'].map((s) => (
              <div
                key={s}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs font-bold transition cursor-pointer"
              >
                {s}
              </div>
            ))}
          </div>
        )}

        {/* Mobile Hamburger Button */}
        {isMobile && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition active:scale-95 cursor-pointer flex items-center justify-center"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        )}

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobile && mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 z-40 bg-[#09152b]/95 backdrop-blur-2xl border-b border-white/15 px-6 py-5 flex flex-col gap-3 shadow-2xl text-left"
            >
              <a href="#sell" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white py-1">For Sell</a>
              <a href="#rent" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white py-1">For Rent</a>
              <a href="#property" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold text-white py-1">Property</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white py-1">Pricing</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white py-1">About</a>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Social:</span>
                <div className="flex items-center gap-2">
                  {['f', 't', 'in', 'ig'].map((s) => (
                    <div key={s} className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center text-xs font-bold">
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Hero Stage */}
      <div className="relative z-10 px-5 sm:px-12 py-8 sm:py-16 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center flex-1">
        {/* Left Column */}
        <div className="lg:col-span-8 flex flex-col items-start text-left max-w-2xl">
          <h1 className={`${isMobile ? 'text-2xl leading-tight' : 'text-3xl sm:text-5xl lg:text-7xl leading-[1.08]'} font-black tracking-tight text-white`}>
            Solution to All Your <br />
            Property Needs
          </h1>

          <p className="mt-3 sm:mt-5 text-xs sm:text-base text-slate-300 max-w-lg leading-relaxed font-normal">
            Get the features you in all the property we offer with the best price you can get.
          </p>

          {/* Interactive Glass Search Filter Bar matching screenshot */}
          <div className={`mt-6 sm:mt-10 w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 sm:p-4 shadow-2xl ${isMobile ? 'flex flex-col gap-3' : 'flex flex-wrap sm:flex-nowrap items-center justify-between gap-3'}`}>
            {/* Location selector */}
            <div className={`${isMobile ? 'w-full pb-2 border-b border-white/10' : 'flex-1 min-w-[130px] border-r border-white/10 pr-3'}`}>
              <span className="text-[11px] text-slate-400 font-medium block">Location</span>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-transparent text-white font-bold text-xs sm:text-sm focus:outline-none cursor-pointer w-full mt-0.5"
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc} value={loc} className="bg-slate-900 text-white">
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Price selector */}
            <div className={`${isMobile ? 'w-full pb-2 border-b border-white/10' : 'flex-1 min-w-[130px] border-r border-white/10 pr-3'}`}>
              <span className="text-[11px] text-slate-400 font-medium block">Price</span>
              <input
                type="text"
                value={priceBudget}
                onChange={(e) => setPriceBudget(e.target.value)}
                className="bg-transparent text-white font-bold text-xs sm:text-sm focus:outline-none w-full mt-0.5"
              />
            </div>

            {/* Type selector */}
            <div className={`${isMobile ? 'w-full' : 'flex-1 min-w-[130px]'}`}>
              <span className="text-[11px] text-slate-400 font-medium block">Type</span>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-transparent text-white font-bold text-xs sm:text-sm focus:outline-none cursor-pointer w-full mt-0.5"
              >
                {PROPERTY_TYPES.map((type) => (
                  <option key={type} value={type} className="bg-slate-900 text-white">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Arrow Action Button matching screenshot */}
            <button
              onClick={() => setShowResultsModal(true)}
              className={`${isMobile ? 'w-full py-3 mt-1' : 'w-12 h-12'} rounded-xl bg-white text-slate-950 flex items-center justify-center font-bold text-xs hover:bg-slate-200 transition active:scale-95 shadow-lg cursor-pointer shrink-0 gap-2`}
              title="Search Properties"
            >
              {isMobile && <span>Search Available Villas</span>}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom 3 Metrics matching screenshot */}
      <div className="relative z-10 px-5 sm:px-12 py-5 sm:py-7 border-t border-white/10 bg-[#09152b]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-2 sm:gap-8 text-center sm:text-left">
          <div className="min-w-0">
            <div className={`${isMobile ? 'text-lg' : 'text-2xl sm:text-4xl'} font-extrabold text-white tracking-tight truncate`}>10</div>
            <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 font-medium truncate">Cities</div>
          </div>
          <div className="min-w-0">
            <div className={`${isMobile ? 'text-lg' : 'text-2xl sm:text-4xl'} font-extrabold text-white tracking-tight truncate`}>27,725</div>
            <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 font-medium truncate">Properties</div>
          </div>
          <div className="min-w-0">
            <div className={`${isMobile ? 'text-lg' : 'text-2xl sm:text-4xl'} font-extrabold text-white tracking-tight truncate`}>5,827</div>
            <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 font-medium truncate">Happy clients</div>
          </div>
        </div>
      </div>

      {/* Property Results Modal */}
      <AnimatePresence>
        {showResultsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 border border-white/20 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-left"
            >
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <h3 className="font-bold text-white text-base">Matching Villas Found</h3>
                <button
                  onClick={() => setShowResultsModal(false)}
                  className="w-7 h-7 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="py-4 space-y-3 text-xs">
                <div className="p-4 bg-slate-950 rounded-2xl border border-white/10">
                  <div className="text-emerald-400 font-bold mb-1">AVAILABLE NOW</div>
                  <div className="text-base font-bold text-white">{selectedType}</div>
                  <div className="text-slate-400 mt-0.5">{selectedLocation} • {priceBudget}</div>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowResultsModal(false);
                  alert('Thank you! A luxury property concierge will schedule a private tour.');
                }}
                className="w-full py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition text-xs cursor-pointer"
              >
                Schedule Private Viewing
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero_PrimadonaRealEstate;
