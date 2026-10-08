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
  Sparkles
} from 'lucide-react';

const LOCATIONS = ['Karimunjawa, Jepara', 'Seminyak, Bali', 'Menteng, Jakarta', 'Lombok Coast'];
const PROPERTY_TYPES = ['Minimalist Villa', 'Modern Penthouse', 'Tropical Retreat', 'Seafront Estate'];

export const Hero_PrimadonaRealEstate = () => {
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
  const [selectedType, setSelectedType] = useState(PROPERTY_TYPES[0]);
  const [priceBudget, setPriceBudget] = useState('IDR 13,000,000');
  const [showResultsModal, setShowResultsModal] = useState(false);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden text-white shadow-2xl border border-blue-950/80 bg-[#09152b] font-jakarta min-h-[720px] flex flex-col justify-between">
      {/* Twilight Villa Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: "url('/assets/primadona-villa.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#09152b]/95 via-[#09152b]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09152b]/95 via-transparent to-[#09152b]/50" />
      </div>

      {/* Top Header */}
      <header className="relative z-20 px-6 sm:px-12 py-5 flex items-center justify-between border-b border-white/10 backdrop-blur-xs">
        {/* Brand */}
        <div className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm">
            P
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Primadona
          </span>
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-300">
          <a href="#sell" className="hover:text-white transition">For Sell</a>
          <a href="#rent" className="hover:text-white transition">For Rent</a>
          <a href="#property" className="text-white font-bold">Property</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#about" className="hover:text-white transition">About</a>
        </nav>

        {/* Social Icons matching screenshot */}
        <div className="flex items-center gap-2">
          {['f', 't', 'in', 'ig'].map((s) => (
            <div
              key={s}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs font-bold transition cursor-pointer"
            >
              {s}
            </div>
          ))}
        </div>
      </header>

      {/* Main Hero Stage */}
      <div className="relative z-10 px-6 sm:px-12 py-10 sm:py-16 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1">
        {/* Left Column */}
        <div className="lg:col-span-8 flex flex-col items-start text-left max-w-2xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
            Solution to All Your <br />
            Property Needs
          </h1>

          <p className="mt-5 text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed font-normal">
            Get the features you in all the property we offer with the best price you can get.
          </p>

          {/* Interactive Glass Search Filter Bar matching screenshot */}
          <div className="mt-10 w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 sm:p-4 shadow-2xl flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
            {/* Location selector */}
            <div className="flex-1 min-w-[130px] border-r border-white/10 pr-3">
              <span className="text-[11px] text-slate-400 font-medium block">Location</span>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-transparent text-white font-bold text-xs sm:text-sm focus:outline-none cursor-pointer w-full"
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc} value={loc} className="bg-slate-900 text-white">
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Price selector */}
            <div className="flex-1 min-w-[130px] border-r border-white/10 pr-3">
              <span className="text-[11px] text-slate-400 font-medium block">Price</span>
              <input
                type="text"
                value={priceBudget}
                onChange={(e) => setPriceBudget(e.target.value)}
                className="bg-transparent text-white font-bold text-xs sm:text-sm focus:outline-none w-full"
              />
            </div>

            {/* Type selector */}
            <div className="flex-1 min-w-[130px]">
              <span className="text-[11px] text-slate-400 font-medium block">Type</span>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-transparent text-white font-bold text-xs sm:text-sm focus:outline-none cursor-pointer w-full"
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
              className="w-12 h-12 rounded-xl bg-white text-slate-950 flex items-center justify-center hover:bg-slate-200 transition active:scale-95 shadow-lg cursor-pointer shrink-0"
              title="Search Properties"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom 3 Metrics matching screenshot */}
      <div className="relative z-10 px-6 sm:px-12 py-8 border-t border-white/10 bg-[#09152b]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6 text-left max-w-lg">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">10</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Cities</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">27,725</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Properties</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">5,827</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Happy clients</div>
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
                  className="w-7 h-7 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center"
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
                className="w-full py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition text-xs"
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
