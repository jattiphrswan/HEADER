import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sun,
  Wind,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Sliders,
  DollarSign
} from 'lucide-react';

export const Hero_SunEco = () => {
  const [showSavingsModal, setShowSavingsModal] = useState(false);
  const [monthlyBill, setMonthlyBill] = useState(250);

  const estimatedSavings = Math.round(monthlyBill * 0.72 * 12);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-[#f4f7f4] text-slate-900 border border-slate-200/80 shadow-2xl font-jakarta min-h-[760px] flex flex-col justify-between">
      {/* Top Header */}
      <header className="px-6 sm:px-12 py-5 flex items-center justify-between border-b border-slate-200/60 bg-white/60 backdrop-blur-md">
        {/* Brand */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-md">
            ☼
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-950">
            SunEco
          </span>
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#home" className="text-slate-950 font-bold">Home</a>
          <a href="#solutions" className="hover:text-slate-950 transition">Solutions</a>
          <a href="#services" className="hover:text-slate-950 transition">Services</a>
          <a href="#how" className="hover:text-slate-950 transition">How we work</a>
          <a href="#contact" className="hover:text-slate-950 transition">Contact</a>
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => setShowSavingsModal(true)}
          className="bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center gap-2 transition active:scale-95 shadow-md cursor-pointer"
        >
          <span>Get Started</span>
          <div className="w-5 h-5 rounded-full bg-white text-slate-950 flex items-center justify-center text-[10px]">
            ↗
          </div>
        </button>
      </header>

      {/* Center Hero Typography */}
      <div className="pt-8 sm:pt-12 px-6 sm:px-12 text-center max-w-3xl mx-auto flex flex-col items-center">
        {/* 10K+ Badge matching screenshot */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-xs font-semibold text-emerald-800 mb-5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>10K+ installations completed</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12]">
          Your Energy, Your Control, <br />
          Your Clean Future
        </h1>

        <p className="mt-5 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed font-normal">
          Switch to smarter, sustainable energy solutions that reduce your bills, protect the planet, and future-proof your home or business.
        </p>

        {/* Center Button */}
        <div className="mt-7">
          <button
            onClick={() => setShowSavingsModal(true)}
            className="bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm px-7 py-3.5 rounded-full flex items-center gap-2 transition active:scale-95 shadow-xl cursor-pointer"
          >
            <span>Get Started</span>
            <div className="w-5 h-5 rounded-full bg-white text-slate-950 flex items-center justify-center text-[10px]">
              ↗
            </div>
          </button>
        </div>
      </div>

      {/* 3D Landscape Diorama matching screenshot */}
      <div className="relative mt-4 px-4 sm:px-12 flex justify-center items-end">
        <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
          <img
            src="/assets/suneco-landscape.jpg"
            alt="Clean Energy Diorama"
            className="w-full h-auto object-cover max-h-[380px]"
          />

          {/* Social Proof Pill in corner matching screenshot */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100">
            <div className="flex -space-x-2">
              {[
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
              ].map((img, i) => (
                <img key={i} src={img} alt="Client" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">9K+ Happy Clients</div>
              <div className="text-[10px] text-emerald-600 font-semibold">Zero Carbon Certified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Savings Calculator Modal */}
      <AnimatePresence>
        {showSavingsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-left border border-slate-100"
            >
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-base">Solar Savings Estimator</h3>
                <button
                  onClick={() => setShowSavingsModal(false)}
                  className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              <div className="py-5 space-y-4 text-xs">
                <div>
                  <div className="flex justify-between mb-1 text-slate-600">
                    <span>Average Monthly Electric Bill</span>
                    <strong className="text-slate-900 font-mono">${monthlyBill}/mo</strong>
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
                </div>

                <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 text-center">
                  <span className="text-xs text-emerald-800 font-medium block">
                    Estimated 25-Year Grid Savings
                  </span>
                  <div className="text-3xl font-extrabold text-emerald-900 font-mono mt-1">
                    ${estimatedSavings.toLocaleString()} USD
                  </div>
                  <span className="text-[10px] text-emerald-700 mt-1 block">
                    Includes 30% Federal Clean Energy Tax Credit
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowSavingsModal(false);
                  alert('Thank you! A certified SunEco energy consultant will contact you.');
                }}
                className="w-full py-3 bg-slate-950 text-white font-bold rounded-xl hover:bg-slate-800 transition text-xs"
              >
                Claim Free Site Survey
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero_SunEco;
