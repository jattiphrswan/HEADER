import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  Clock,
  PhoneCall,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Menu,
  X
} from 'lucide-react';
import { useIsMobile } from './useIsMobile';

export const Hero_FirstTransport = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [cargoType, setCargoType] = useState('Heavy Haulage');

  return (
    <div className="relative w-full rounded-3xl overflow-hidden text-white shadow-2xl border border-neutral-800 bg-neutral-950 font-jakarta min-h-[640px] flex flex-col justify-between">
      {/* Background Highway Truck Image with atmospheric contrast gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: "url('/assets/first-transport-truck.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/60" />
      </div>

      {/* Top Header Navigation */}
      <header className="relative z-30 px-5 sm:px-12 py-4 sm:py-5 flex items-center justify-between border-b border-white/10 backdrop-blur-md">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 font-black">
            ❯❯
          </div>
          <div className="text-left">
            <span className="text-base sm:text-lg font-black tracking-wider uppercase block text-white leading-none">
              FIRST
            </span>
            <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-bold block mt-0.5">
              TRANSPORT
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wider text-neutral-300 uppercase">
            <a href="#home" className="text-white hover:text-orange-400 transition">Home</a>
            <a href="#about" className="hover:text-white transition">About Us</a>
            <a href="#expertise" className="hover:text-white transition">Expertise</a>
            <a href="#careers" className="hover:text-white transition">Careers</a>
            <a href="#community" className="hover:text-white transition">Community</a>
          </nav>
        )}

        {/* Right CTA / Mobile Toggle */}
        <div className="flex items-center gap-3">
          {!isMobile && (
            <button
              onClick={() => setShowQuoteModal(true)}
              className="border border-white/30 hover:border-white text-white text-xs font-semibold px-5 py-2 rounded-full transition active:scale-95 cursor-pointer backdrop-blur-md"
            >
              Join Us
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
              className="absolute top-full left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-2xl border-b border-white/15 px-6 py-5 flex flex-col gap-3.5 shadow-2xl text-left"
            >
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-wider text-white hover:text-orange-400 py-1">Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white py-1">About Us</a>
              <a href="#expertise" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white py-1">Expertise</a>
              <a href="#careers" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white py-1">Careers</a>
              <a href="#community" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white py-1">Community</a>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowQuoteModal(true);
                  }}
                  className="w-full py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer"
                >
                  Join Us / Request Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Typography & Content */}
      <div className="relative z-10 px-5 sm:px-12 py-8 sm:py-16 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        <div className="lg:col-span-8 flex flex-col items-start text-left max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${isMobile ? 'text-2xl sm:text-3xl leading-tight' : 'text-3xl sm:text-6xl lg:text-7xl leading-[1.05]'} font-black tracking-tight text-white`}
          >
            Logistics You <br />
            Can Count On, <br />
            Start to Finish.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 sm:mt-6 text-xs sm:text-base text-neutral-300 max-w-xl leading-relaxed font-normal"
          >
            We specialise in heavy haulage, freight solutions, and earthmoving transport.
            With a commitment to delivering excellence, we ensure your goods reach their destination safely, efficiently, and on time.
          </motion.p>

          {/* Action Buttons matching screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <button
              onClick={() => setShowQuoteModal(true)}
              className="bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-xs sm:text-sm px-5 sm:px-6 py-3 sm:py-3.5 rounded-full flex items-center gap-2.5 transition-transform active:scale-95 shadow-xl cursor-pointer"
            >
              <span>Contact Us</span>
              <div className="w-5 h-5 rounded-full bg-neutral-950 text-white flex items-center justify-center text-[10px]">
                →
              </div>
            </button>

            <button
              onClick={() => setShowQuoteModal(true)}
              className="text-white hover:text-orange-400 font-semibold text-xs sm:text-sm transition cursor-pointer flex items-center gap-1.5"
            >
              <span>Learn More</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom 3 Metrics matching screenshot */}
      <div className="relative z-10 px-5 sm:px-12 py-5 sm:py-7 border-t border-white/10 bg-neutral-950/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-2 sm:gap-6 text-center sm:text-left">
          <div className="min-w-0">
            <div className={`${isMobile ? 'text-lg' : 'text-2xl sm:text-4xl'} font-extrabold text-white tracking-tight truncate`}>10%</div>
            <div className="text-[10px] sm:text-xs text-neutral-400 mt-1 font-medium truncate">First Nations Employment</div>
          </div>
          <div className="min-w-0">
            <div className={`${isMobile ? 'text-lg' : 'text-2xl sm:text-4xl'} font-extrabold text-white tracking-tight truncate`}>35+</div>
            <div className="text-[10px] sm:text-xs text-neutral-400 mt-1 font-medium truncate">Clients Nationally</div>
          </div>
          <div className="min-w-0">
            <div className={`${isMobile ? 'text-lg' : 'text-2xl sm:text-4xl'} font-extrabold text-white tracking-tight truncate`}>150K+</div>
            <div className="text-[10px] sm:text-xs text-neutral-400 mt-1 font-medium truncate">Tonnes / yearly</div>
          </div>
        </div>
      </div>

      {/* Interactive Freight Quote Modal */}
      <AnimatePresence>
        {showQuoteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-neutral-900 border border-white/20 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-left"
            >
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
                    <Truck className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-white text-base">Request Haulage Quote</h3>
                </div>
                <button
                  onClick={() => setShowQuoteModal(false)}
                  className="w-7 h-7 rounded-full bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="py-4 space-y-3 text-xs">
                <div>
                  <label className="text-neutral-400 block mb-1">Cargo Division</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Heavy Haulage', 'Freight Solutions', 'Earthmoving'].map((t) => (
                      <button
                        key={t}
                        onClick={() => setCargoType(t)}
                        className={`p-2 rounded-xl border text-center transition font-semibold ${
                          cargoType === t
                            ? 'border-orange-500 bg-orange-500/20 text-white'
                            : 'border-white/10 bg-neutral-950 text-neutral-400'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="text-neutral-400 block mb-1">Origin Depot</label>
                    <input
                      type="text"
                      defaultValue="Brisbane Port"
                      className="w-full bg-neutral-950 border border-white/10 rounded-xl px-3 py-2 text-white font-medium"
                    />
                  </div>
                  <div>
                    <label className="text-neutral-400 block mb-1">Destination</label>
                    <input
                      type="text"
                      defaultValue="Pilbara Mining Hub"
                      className="w-full bg-neutral-950 border border-white/10 rounded-xl px-3 py-2 text-white font-medium"
                    />
                  </div>
                </div>

                <div className="p-3 bg-neutral-950 rounded-xl border border-white/10 flex items-center gap-3 text-neutral-300">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Licensed road train fleet with 100% telemetry tracking.</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowQuoteModal(false);
                  alert(`Haulage quote requested for ${cargoType}. A logistics coordinator will contact you shortly.`);
                }}
                className="w-full py-3 bg-orange-500 hover:bg-orange-600 font-bold rounded-xl text-white transition text-xs tracking-wider uppercase cursor-pointer"
              >
                Dispatch Freight Request
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero_FirstTransport;
