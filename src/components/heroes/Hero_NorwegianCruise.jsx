import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  Play,
  ArrowUpRight,
  ChevronDown,
  Anchor,
  Sparkles,
  Volume2,
  VolumeX,
  X
} from 'lucide-react';

export const Hero_NorwegianCruise = () => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden text-white shadow-2xl border border-sky-950/80 bg-[#071326] font-jakarta min-h-[720px] flex flex-col justify-between">
      {/* Aerial Top-Down Ocean Cruise Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: "url('/assets/norwegian-cruise.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#071326]/90 via-[#071326]/60 to-[#071326]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/90 via-transparent to-[#071326]/50" />
      </div>

      {/* Top Header Navigation */}
      <header className="relative z-20 px-6 sm:px-12 py-5 flex items-center justify-between border-b border-white/10 backdrop-blur-xs">
        {/* Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
            <Anchor className="w-4 h-4" />
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tight text-white font-editorial-italic">
            Norwegian Cruise
          </span>
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-200">
          <a href="#home" className="text-white hover:text-sky-300 transition">Home</a>
          <a href="#destinations" className="hover:text-sky-300 transition">Destinations</a>
          <a href="#ships" className="hover:text-sky-300 transition">Ships</a>
          <a href="#mycruise" className="hover:text-sky-300 transition">My Cruise</a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowBookingModal(true)}
            className="bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-full transition active:scale-95 shadow-md cursor-pointer"
          >
            Find a cruise
          </button>
        </div>
      </header>

      {/* Center Hero Stage */}
      <div className="relative z-10 px-6 sm:px-12 py-10 sm:py-16 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1">
        {/* Left Column: Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col items-start text-left max-w-xl">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-sky-200 font-medium mb-6">
            <span>Your Home By The Sea</span>
          </div>

          {/* Headline in Elegant Serif */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.08] font-editorial-italic">
            Lost at Sea, <br />
            Found in Peace
          </h1>

          <p className="mt-6 text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-md font-normal">
            Immerse yourself in breathtaking horizon panoramas, bespoke private staterooms, and world-class culinary excellence across the Nordic seas.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-semibold">
            <button
              onClick={() => setShowBookingModal(true)}
              className="bg-white hover:bg-slate-100 text-slate-950 px-6 py-3.5 rounded-full flex items-center gap-2 transition active:scale-95 shadow-lg cursor-pointer"
            >
              <span>Sea View Rentals</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setShowBookingModal(true)}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 rounded-full flex items-center gap-2 transition active:scale-95 cursor-pointer backdrop-blur-md"
            >
              <span>Book a Suite</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center / Right Interactive Play Button matching screenshot */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <button
            onClick={() => setIsPlayingVideo(true)}
            className="relative group p-6 rounded-full cursor-pointer focus:outline-none"
            title="Watch Cinematic Voyage Reel"
          >
            {/* Pulsing Ripple Rings */}
            <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
            <span className="absolute inset-2 rounded-full bg-sky-400/20 blur-md" />
            {/* Center Play Button */}
            <span className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/90 group-hover:bg-white text-slate-950 flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
              <Play className="w-8 h-8 fill-current ml-1" />
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Row: Social Icons & Scroll Indicator */}
      <div className="relative z-10 px-6 sm:px-12 py-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
        {/* Scroll indicator */}
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase">
          <span>SCROLL</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </div>

        {/* Social Icons matching screenshot */}
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
      </div>

      {/* Video Reel Modal */}
      <AnimatePresence>
        {isPlayingVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 border border-white/20 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl text-left"
            >
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <h3 className="font-bold text-white text-base">The Fjord Maiden: 4K Voyage Reel</h3>
                <button
                  onClick={() => setIsPlayingVideo(false)}
                  className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="py-6">
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-black flex items-center justify-center border border-white/10">
                  <img
                    src="/assets/norwegian-cruise.jpg"
                    alt="Ocean Reel"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <p className="text-xs text-sky-200 font-mono">
                      Filmed over Geirangerfjord, Norway • 4K HDR 60FPS
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsPlayingVideo(false)}
                className="w-full py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition text-xs"
              >
                Close Voyage Preview
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Booking Drawer */}
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
                <h3 className="font-bold text-white text-base">Find Your Fjord Cruise</h3>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="w-7 h-7 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              <div className="py-4 space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 block mb-1">Departure Port</span>
                  <div className="p-3 bg-slate-950 border border-white/10 rounded-xl text-white font-medium">
                    Oslo Fjord Terminal (Norway)
                  </div>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1">Stateroom Class</span>
                  <div className="p-3 bg-slate-950 border border-white/10 rounded-xl text-sky-300 font-medium">
                    Penthouse Balcony Suite (All Inclusive)
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowBookingModal(false);
                  alert('Your cruise reservation has been saved!');
                }}
                className="w-full py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition text-xs"
              >
                Confirm Luxury Itinerary
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero_NorwegianCruise;
