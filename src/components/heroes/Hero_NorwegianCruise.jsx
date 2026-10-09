import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Anchor,
  Play,
  ArrowUpRight,
  Compass,
  Calendar,
  Users,
  ChevronDown,
  X,
  Volume2,
  VolumeX,
  Menu
} from 'lucide-react';
import { useIsMobile } from './useIsMobile';

export const Hero_NorwegianCruise = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [stateroomType, setStateroomType] = useState('Ocean Penthouse Suite');

  return (
    <div className="relative w-full rounded-3xl overflow-hidden text-white shadow-2xl border border-sky-950/80 bg-[#0a192f] font-jakarta min-h-[640px] flex flex-col justify-between">
      {/* Aerial Ocean Cruise Ship Background with subtle movement */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: "url('/assets/norwegian-cruise.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/95 via-[#0a192f]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/90 via-transparent to-[#0a192f]/60" />
      </div>

      {/* Top Header Navigation */}
      <header className="relative z-30 px-5 sm:px-12 py-4 sm:py-5 flex items-center justify-between border-b border-white/10 backdrop-blur-md">
        {/* Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
            <Anchor className="w-4 h-4" />
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tight text-white font-editorial-italic">
            Norwegian Cruise
          </span>
        </div>

        {/* Desktop Links */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-200">
            <a href="#home" className="text-white hover:text-sky-300 transition">Home</a>
            <a href="#destinations" className="hover:text-sky-300 transition">Destinations</a>
            <a href="#ships" className="hover:text-sky-300 transition">Ships</a>
            <a href="#mycruise" className="hover:text-sky-300 transition">My Cruise</a>
          </nav>
        )}

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {!isMobile && (
            <button
              onClick={() => setShowBookingModal(true)}
              className="bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-full transition active:scale-95 shadow-md cursor-pointer"
            >
              Find a cruise
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
              className="absolute top-full left-0 right-0 z-40 bg-[#0a192f]/95 backdrop-blur-2xl border-b border-white/15 px-6 py-5 flex flex-col gap-3 shadow-2xl text-left"
            >
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-200 hover:text-sky-300 py-1">Home</a>
              <a href="#destinations" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-200 hover:text-sky-300 py-1">Destinations</a>
              <a href="#ships" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-200 hover:text-sky-300 py-1">Ships</a>
              <a href="#mycruise" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-200 hover:text-sky-300 py-1">My Cruise</a>

              <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowBookingModal(true);
                  }}
                  className="w-full py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs transition cursor-pointer"
                >
                  Find a cruise
                </button>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <span>Connect with us:</span>
                  <div className="flex items-center gap-2">
                    {['f', 't', 'in'].map((social) => (
                      <div key={social} className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center text-xs font-bold">
                        {social}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Center Hero Stage */}
      <div className={`relative z-10 px-5 sm:px-12 py-8 sm:py-16 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center flex-1`}>
        {/* Left Column: Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col items-start text-left max-w-xl">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs text-sky-200 font-medium mb-4 sm:mb-6">
            <span>Your Home By The Sea</span>
          </div>

          {/* Headline in Elegant Serif */}
          <h1 className={`${isMobile ? 'text-2xl sm:text-3xl leading-tight' : 'text-3xl sm:text-6xl lg:text-7xl leading-[1.08]'} font-normal tracking-tight text-white font-editorial-italic`}>
            Lost at Sea, <br />
            Found in Peace
          </h1>

          <p className="mt-4 sm:mt-6 text-xs sm:text-base text-slate-300/90 leading-relaxed max-w-md font-normal">
            Immerse yourself in breathtaking horizon panoramas, bespoke private staterooms, and world-class culinary excellence across the Nordic seas.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-semibold">
            <button
              onClick={() => setShowBookingModal(true)}
              className="bg-white hover:bg-slate-100 text-slate-950 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full flex items-center gap-2 transition active:scale-95 shadow-lg cursor-pointer"
            >
              <span>Sea View Rentals</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setShowBookingModal(true)}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-full flex items-center gap-2 transition active:scale-95 cursor-pointer backdrop-blur-md"
            >
              <span>Book a Suite</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center / Right Interactive Play Button */}
        <div className={`flex items-center justify-center ${isMobile ? 'mt-4' : 'lg:col-span-5'}`}>
          <button
            onClick={() => setIsPlayingVideo(true)}
            className="relative group p-4 sm:p-6 rounded-full cursor-pointer focus:outline-none"
            title="Watch Cinematic Voyage Reel"
          >
            {/* Pulsing Ripple Rings */}
            <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
            <span className="absolute inset-2 rounded-full bg-sky-400/20 blur-md" />
            {/* Center Play Button */}
            <span className={`relative ${isMobile ? 'w-16 h-16' : 'w-20 h-20 sm:w-24 sm:h-24'} rounded-full bg-white/90 group-hover:bg-white text-slate-950 flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110`}>
              <Play className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} fill-current ml-1`} />
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Row: Social Icons & Scroll Indicator */}
      <div className="relative z-10 px-5 sm:px-12 py-5 sm:py-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
        {/* Scroll indicator */}
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase">
          <span>SCROLL</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </div>

        {/* Desktop Social Icons */}
        {!isMobile && (
          <div className="flex items-center gap-2">
            {['f', 't', 'in'].map((social) => (
              <div
                key={social}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs font-bold transition cursor-pointer"
              >
                {social}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Video Reel Modal */}
      <AnimatePresence>
        {isPlayingVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 border border-white/20 rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl"
            >
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <img
                  src="/assets/norwegian-cruise.jpg"
                  alt="Fleet cinematic reel"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-black/60 text-white hover:bg-black transition cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setIsPlayingVideo(false)}
                    className="p-2 rounded-full bg-black/60 text-white hover:bg-black transition cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <div className="text-xs uppercase font-bold text-sky-400 tracking-wider">Nordic Voyage Fleet</div>
                  <h3 className="text-lg font-bold text-white font-editorial-italic">Midnight Fjord Expedition 2026</h3>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Booking Drawer Modal */}
      <AnimatePresence>
        {showBookingModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 border border-white/20 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-left"
            >
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <h3 className="font-bold text-white text-base">Select Your Nordic Stateroom</h3>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="w-7 h-7 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="py-4 space-y-3 text-xs">
                {['Ocean Penthouse Suite', 'Balcony Horizon Room', 'Grand Fjord Residence'].map((suite) => (
                  <div
                    key={suite}
                    onClick={() => setStateroomType(suite)}
                    className={`p-3.5 rounded-2xl border transition cursor-pointer flex items-center justify-between ${
                      stateroomType === suite
                        ? 'border-sky-400 bg-sky-950/40 text-white'
                        : 'border-white/10 bg-slate-950 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <span className="font-semibold">{suite}</span>
                    <span className="text-sky-300 font-bold">$1,290 / night</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setShowBookingModal(false);
                  alert(`Reserved: ${stateroomType}. Welcome aboard Norwegian Cruise.`);
                }}
                className="w-full py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition text-xs cursor-pointer"
              >
                Confirm Stateroom Selection
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero_NorwegianCruise;
