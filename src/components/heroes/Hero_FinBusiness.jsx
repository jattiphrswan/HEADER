import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Building2,
  DollarSign,
  ArrowDownLeft,
  ArrowUpRight,
  Menu,
  X
} from 'lucide-react';
import { useIsMobile } from './useIsMobile';

const CURRENCIES = [
  { code: 'EUR', label: 'Euro', flag: '🇪🇺', rate: 1.08 },
  { code: 'GBP', label: 'British Pound', flag: '🇬🇧', rate: 1.27 },
  { code: 'AUD', label: 'Australian Dollar', flag: '🇦🇺', rate: 0.65 },
  { code: 'JPY', label: 'Japanese Yen', flag: '🇯🇵', rate: 0.0066 }
];

export const Hero_FinBusiness = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sendAmount, setSendAmount] = useState(1000);
  const [selectedCurrency, setSelectedCurrency] = useState(CURRENCIES[0]);
  const [hoveredBar, setHoveredBar] = useState(2); // Bar with $30,403 tooltip
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  // Math breakdown
  const fee = 4.0;
  const netAmount = Math.max(0, sendAmount - fee);
  const convertedTotal = (netAmount * selectedCurrency.rate).toFixed(2);

  const bars = [
    { height: 45, val: '$18,200', active: false },
    { height: 65, val: '$24,500', active: false },
    { height: 90, val: '$30,403', active: true }, // Highlighted hatched bar
    { height: 50, val: '$20,100', active: false },
    { height: 75, val: '$28,900', active: false }
  ];

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-white text-slate-900 border border-slate-200/80 shadow-2xl font-jakarta">
      {/* Top Navigation Bar */}
      <header className="relative z-30 px-5 sm:px-12 py-4 sm:py-5 flex items-center justify-between border-b border-slate-100 bg-white/90 backdrop-blur-md">
        {/* Brand */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-xl bg-slate-950 text-white flex items-center justify-center font-black text-sm">
            F
          </div>
          <span className="text-lg font-extrabold tracking-tight text-slate-950">
            FinApp
          </span>
        </div>

        {/* Desktop Links */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-600">
            <a href="#products" className="hover:text-slate-950 transition">Products</a>
            <a href="#solutions" className="hover:text-slate-950 transition">Solutions</a>
            <a href="#treasury" className="hover:text-slate-950 transition">Treasury</a>
            <a href="#pricing" className="hover:text-slate-950 transition">Pricing</a>
          </nav>
        )}

        {/* Right CTA / Mobile Toggle */}
        <div className="flex items-center gap-3">
          {!isMobile && (
            <button
              onClick={() => setShowPreviewModal(true)}
              className="bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold px-5 py-2.5 rounded-full transition active:scale-95 cursor-pointer"
            >
              Open Account
            </button>
          )}

          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 transition active:scale-95 cursor-pointer flex items-center justify-center"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
              className="absolute top-full left-0 right-0 z-40 bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-6 py-5 flex flex-col gap-3 shadow-2xl text-left"
            >
              <a href="#products" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-slate-700 hover:text-slate-950 py-1">Products</a>
              <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-slate-700 hover:text-slate-950 py-1">Solutions</a>
              <a href="#treasury" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-slate-700 hover:text-slate-950 py-1">Treasury</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-slate-700 hover:text-slate-950 py-1">Pricing</a>

              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowPreviewModal(true);
                  }}
                  className="w-full py-2.5 rounded-full bg-slate-950 text-white font-bold text-xs transition cursor-pointer"
                >
                  Open Free Account
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Hero Container */}
      <div className="p-5 sm:p-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] sm:text-xs font-medium mb-4 sm:mb-6 shadow-xs">
              <span className="bg-white/20 text-white px-1.5 py-0.2 rounded-full font-bold text-[10px]">
                New
              </span>
              <span>Multi-currency account</span>
            </div>

            {/* Bold Clean Humanist Headline */}
            <h1 className={`${isMobile ? 'text-2xl sm:text-3xl leading-tight' : 'text-3xl sm:text-5xl lg:text-6xl leading-[1.12]'} font-extrabold tracking-tight text-slate-950`}>
              All in one App finance <br />
              for your business
            </h1>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-6 text-xs sm:text-base text-slate-600 max-w-lg leading-relaxed font-normal">
              Keep your business account needs safely organized under one roof. Manage money quickly, easily & efficiently.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
              <button className="bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition shadow-md active:scale-95 cursor-pointer">
                Try for Free
              </button>

              <button
                onClick={() => setShowPreviewModal(true)}
                className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 font-bold text-xs sm:text-sm px-5 sm:px-6 py-3 sm:py-3.5 rounded-full flex items-center gap-2 transition active:scale-95 cursor-pointer shadow-xs"
              >
                <span>Preview</span>
                <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">
                  ▶
                </div>
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-8 sm:mt-12 flex items-center gap-3">
              <div className="flex -space-x-2 shrink-0">
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                ].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Avatar"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <span className="font-extrabold text-slate-900 text-xs sm:text-sm">12k+</span>
                <span className="text-slate-500 text-[11px] sm:text-xs ml-1 font-medium">
                  Used by teams and professionals.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Real-World App Mockup */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Background Layered Card */}
              <div className="bg-slate-50/80 rounded-[28px] sm:rounded-[32px] p-4 sm:p-8 border border-slate-200/90 shadow-xl relative">
                {/* Browser Dots */}
                <div className="flex items-center gap-1.5 mb-4 sm:mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>

                {/* Total Balance Metric */}
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <div>
                    <span className="text-xs font-semibold text-slate-500">Total Balance</span>
                    <div className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                      $48,403
                    </div>
                  </div>

                  {/* Balance pill */}
                  <div className="bg-slate-900 text-white rounded-xl px-2.5 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1.5 shadow-md">
                    <span className="text-xs sm:text-sm">🇺🇸</span>
                    <div className="text-left">
                      <div className="text-[9px] text-slate-400">Balance</div>
                      <div className="text-[11px] sm:text-xs font-mono font-bold">$90,438.40</div>
                    </div>
                  </div>
                </div>

                {/* Chart Grid Lines and Frequency Bars */}
                <div className="relative pt-4 sm:pt-6 pb-2">
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[10px] text-slate-400 font-mono">
                    <div className="border-b border-slate-200/60 pb-0.5">$40k</div>
                    <div className="border-b border-slate-200/60 pb-0.5">$30k</div>
                    <div className="border-b border-slate-200/60" />
                  </div>

                  <div className="flex items-end justify-center gap-2 sm:gap-4 h-28 sm:h-36 relative z-10 px-4 sm:px-8">
                    {bars.map((bar, idx) => {
                      const isSelected = hoveredBar === idx;
                      return (
                        <div
                          key={idx}
                          onMouseEnter={() => setHoveredBar(idx)}
                          className="flex-1 flex flex-col items-center justify-end h-full cursor-pointer group"
                        >
                          {isSelected && (
                            <div className="mb-1 sm:mb-2 bg-slate-900 text-white text-[10px] font-bold font-mono px-1.5 sm:px-2 py-0.5 rounded shadow-lg whitespace-nowrap">
                              {bar.val}
                            </div>
                          )}
                          <div
                            style={{ height: `${bar.height}%` }}
                            className={`w-full max-w-[28px] rounded-t-lg transition-all ${
                              bar.active
                                ? 'bg-slate-900 [background:repeating-linear-gradient(45deg,#0f172a,#0f172a_4px,#334155_4px,#334155_8px)]'
                                : 'bg-slate-200 group-hover:bg-slate-300'
                            }`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Overlapping Interactive Send Card */}
              <motion.div
                whileHover={{ y: -3 }}
                className="mt-3 sm:mt-[-50px] mx-auto sm:ml-auto w-full max-w-sm bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-100 z-20 text-left"
              >
                <div className="text-xs text-slate-500 font-medium mb-1.5">You send exactly</div>
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl p-2 mb-3">
                  <input
                    type="number"
                    value={sendAmount}
                    onChange={(e) => setSendAmount(Number(e.target.value) || 0)}
                    className="flex-1 bg-transparent font-bold text-slate-900 text-base focus:outline-none"
                  />
                  <select
                    value={selectedCurrency.code}
                    onChange={(e) => {
                      const cur = CURRENCIES.find((c) => c.code === e.target.value);
                      if (cur) setSelectedCurrency(cur);
                    }}
                    className="bg-white border border-slate-200 rounded-lg px-2 py-1 text-xs font-bold text-slate-800 cursor-pointer focus:outline-none"
                  >
                    {CURRENCIES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Conversion Math Breakdown */}
                <div className="space-y-1 text-xs text-slate-500 font-mono pt-1">
                  <div className="flex justify-between">
                    <span>- {fee.toFixed(2)}</span>
                    <span className="text-slate-400">Bank fee</span>
                  </div>
                  <div className="flex justify-between font-semibold text-slate-700">
                    <span>= {netAmount.toFixed(2)}</span>
                    <span>After fee</span>
                  </div>
                  <div className="flex justify-between">
                    <span>× {selectedCurrency.rate}</span>
                    <span className="text-slate-400">Exchange rate</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-slate-100 font-bold text-slate-900 text-sm">
                    <span>Recipient gets:</span>
                    <span className="text-emerald-600">${convertedTotal} USD</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {showPreviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-left border border-slate-100"
            >
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-base">Multi-Currency Global Treasury</h3>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="py-4 space-y-3 text-xs text-slate-600">
                <p>
                  Create virtual accounts in 35+ countries without local subsidiaries. Real mid-market rates guaranteed.
                </p>
                <div className="p-3 bg-slate-50 rounded-xl font-mono text-slate-700 space-y-1">
                  <div>IBAN: GB82 MIDL 4005 1512 3456 78</div>
                  <div>SWIFT/BIC: MIDLGB22</div>
                  <div className="text-emerald-600 font-bold">Status: Active & Insured to $250k</div>
                </div>
              </div>

              <button
                onClick={() => setShowPreviewModal(false)}
                className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition text-xs cursor-pointer"
              >
                Open Demo Account
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero_FinBusiness;
