import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sun,
  Wind,
  Zap,
  TrendingDown,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Sliders,
  Menu,
  X
} from 'lucide-react';
import { useIsMobile } from './useIsMobile';

export const Hero_SunEco = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSavingsModal, setShowSavingsModal] = useState(false);
  const [monthlyBill, setMonthlyBill] = useState(240);

  // Approximate solar savings math
  const estimatedSavings25Y = Math.round(monthlyBill * 12 * 25 * 0.78);
  const co2ReductionTonnes = Math.round((monthlyBill / 10) * 1.4);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-[#f4f6f2] font-jakarta shadow-2xl border border-emerald-950/10 min-h-[640px] flex flex-col justify-between">
      {/* Top Header Navigation */}
      <header className="relative z-30 px-5 sm:px-12 py-4 sm:py-5 flex items-center justify-between border-b border-emerald-950/5 bg-white/80 backdrop-blur-md">
        {/* Brand */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-md">
            ☼
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-950">
            SunEco
          </span>
        </div>

        {/* Desktop Links */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#home" className="text-slate-950 font-bold">Home</a>
            <a href="#solutions" className="hover:text-slate-950 transition">Solutions</a>
            <a href="#services" className="hover:text-slate-950 transition">Services</a>
            <a href="#how" className="hover:text-slate-950 transition">How we work</a>
            <a href="#contact" className="hover:text-slate-950 transition">Contact</a>
          </nav>
        )}

        {/* Desktop CTA / Mobile Toggle */}
        <div className="flex items-center gap-3">
          {!isMobile && (
            <button
              onClick={() => setShowSavingsModal(true)}
              className="bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center gap-2 transition active:scale-95 shadow-md cursor-pointer"
            >
              <span>Get Started</span>
              <div className="w-5 h-5 rounded-full bg-white text-slate-950 flex items-center justify-center text-[10px]">
                ↗
              </div>
            </button>
          )}

          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900/10 hover:bg-slate-900/20 text-slate-950 transition active:scale-95 cursor-pointer flex items-center justify-center"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
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
              className="absolute top-full left-0 right-0 z-40 bg-white/95 backdrop-blur-2xl border-b border-emerald-950/10 px-6 py-5 flex flex-col gap-3 shadow-2xl text-left"
            >
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold text-slate-950 py-1">Home</a>
              <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-slate-600 hover:text-slate-950 py-1">Solutions</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-slate-600 hover:text-slate-950 py-1">Services</a>
              <a href="#how" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-slate-600 hover:text-slate-950 py-1">How we work</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-slate-600 hover:text-slate-950 py-1">Contact</a>

              <div className="pt-3 border-t border-slate-200">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowSavingsModal(true);
                  }}
                  className="w-full py-3 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <span>Get Started with Solar</span>
                  <span>↗</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Center Hero Typography */}
      <div className="pt-6 sm:pt-12 px-5 sm:px-12 text-center max-w-3xl mx-auto flex flex-col items-center">
        {/* 10K+ Badge matching screenshot */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-100/90 border border-emerald-200 text-[11px] sm:text-xs font-semibold text-emerald-800 mb-3 sm:mb-5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>10K+ installations completed</span>
        </div>

        {/* Headline */}
        <h1 className={`${isMobile ? 'text-2xl sm:text-3xl leading-tight' : 'text-3xl sm:text-5xl lg:text-6xl leading-[1.12]'} font-extrabold tracking-tight text-slate-950`}>
          Your Energy, Your Control, <br />
          Your Clean Future
        </h1>

        <p className="mt-3 sm:mt-5 text-xs sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed font-normal">
          Switch to smarter, sustainable energy solutions that reduce your bills, protect the planet, and future-proof your home or business.
        </p>

        {/* Center Button */}
        <div className="mt-5 sm:mt-7">
          <button
            onClick={() => setShowSavingsModal(true)}
            className="bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full flex items-center gap-2 transition active:scale-95 shadow-xl cursor-pointer"
          >
            <span>Get Started</span>
            <div className="w-5 h-5 rounded-full bg-white text-slate-950 flex items-center justify-center text-[10px]">
              ↗
            </div>
          </button>
        </div>
      </div>

      {/* 3D Landscape Diorama matching screenshot */}
      <div className="relative mt-4 px-4 sm:px-12 flex justify-center items-end pb-4">
        <div className="relative w-full max-w-4xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-slate-100">
          <img
            src="/assets/suneco-landscape.jpg"
            alt="Clean Energy Diorama"
            className="w-full h-auto object-cover max-h-[380px]"
          />

          {/* Social Proof Pill in corner matching screenshot */}
          <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-2.5 sm:gap-3 border border-slate-100 max-w-[90%]">
            <div className="flex -space-x-2 shrink-0">
              {[
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
              ].map((img, i) => (
                <img key={i} src={img} alt="Client" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <div className="min-w-0">
              <div className="text-[11px] sm:text-xs font-bold text-slate-900 truncate">9K+ Happy Clients</div>
              <div className="text-[9px] sm:text-[10px] text-emerald-600 font-semibold truncate">Zero Carbon Certified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Savings Calculator Modal */}
      <AnimatePresence>
        {showSavingsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-left"
            >
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                    <Sun className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">Your Solar Estimate</h3>
                </div>
                <button
                  onClick={() => setShowSavingsModal(false)}
                  className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 hover:text-slate-900 flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="py-5 space-y-5">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-600 mb-2">
                    <span>Average Monthly Electric Bill</span>
                    <span className="text-emerald-600 font-bold">${monthlyBill} / mo</span>
                  </div>
                  <input
                    type="range"
                    min="80"
                    max="800"
                    step="10"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>$80/mo</span>
                    <span>$800/mo</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100 text-left">
                    <span className="text-[10px] font-semibold text-emerald-700 block">25-Yr Estimated Savings</span>
                    <span className="text-lg font-black text-emerald-950 mt-1 block">${estimatedSavings25Y.toLocaleString()}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-left">
                    <span className="text-[10px] font-semibold text-slate-600 block">CO2 Offset</span>
                    <span className="text-lg font-black text-slate-950 mt-1 block">{co2ReductionTonnes} Tons</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowSavingsModal(false);
                  alert(`Thank you! A SunEco specialist will prepare a customized zero-down proposal for your $${monthlyBill}/mo bill.`);
                }}
                className="w-full py-3 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-xl transition text-xs cursor-pointer"
              >
                Request Free Drone Site Survey
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero_SunEco;
