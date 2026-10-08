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
  MapPin
} from 'lucide-react';

export const Hero_FirstTransport = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [cargoType, setCargoType] = useState('Heavy Haulage');

  return (
    <div className="relative w-full rounded-3xl overflow-hidden text-white shadow-2xl border border-neutral-800 bg-neutral-950 font-jakarta min-h-[700px] flex flex-col justify-between">
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
      <header className="relative z-20 px-6 sm:px-12 py-5 flex items-center justify-between border-b border-white/10 backdrop-blur-xs">
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

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wider text-neutral-300 uppercase">
          <a href="#home" className="text-white hover:text-orange-400 transition">Home</a>
          <a href="#about" className="hover:text-white transition">About Us</a>
          <a href="#expertise" className="hover:text-white transition">Expertise</a>
          <a href="#careers" className="hover:text-white transition">Careers</a>
          <a href="#community" className="hover:text-white transition">Community</a>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowQuoteModal(true)}
            className="border border-white/30 hover:border-white text-white text-xs font-semibold px-5 py-2 rounded-full transition active:scale-95 cursor-pointer backdrop-blur-md"
          >
            Join Us
          </button>
        </div>
      </header>

      {/* Hero Typography & Content */}
      <div className="relative z-10 px-6 sm:px-12 py-12 sm:py-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 flex flex-col items-start text-left max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]"
          >
            Logistics You <br />
            Can Count On, <br />
            Start to Finish.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-sm sm:text-base text-neutral-300 max-w-xl leading-relaxed font-normal"
          >
            We specialise in heavy haulage, freight solutions, and earthmoving transport.
            With a commitment to delivering excellence, we ensure your goods reach their destination safely, efficiently, and on time.
          </motion.p>

          {/* Action Buttons matching screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-6"
          >
            <button
              onClick={() => setShowQuoteModal(true)}
              className="bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-sm px-6 py-3.5 rounded-full flex items-center gap-3 transition-transform active:scale-95 shadow-xl cursor-pointer"
            >
              <span>Contact Us</span>
              <div className="w-5 h-5 rounded-full bg-neutral-950 text-white flex items-center justify-center text-[10px]">
                →
              </div>
            </button>

            <button
              onClick={() => setShowQuoteModal(true)}
              className="text-white hover:text-orange-400 font-semibold text-sm transition cursor-pointer flex items-center gap-1.5"
            >
              <span>Learn More</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom 3 Metrics matching screenshot */}
      <div className="relative z-10 px-6 sm:px-12 py-8 border-t border-white/10 bg-neutral-950/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">10%</div>
            <div className="text-xs text-neutral-400 mt-1 font-medium">First Nations Employment</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">35+</div>
            <div className="text-xs text-neutral-400 mt-1 font-medium">Clients Nationally</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">150K+</div>
            <div className="text-xs text-neutral-400 mt-1 font-medium">Tonnes of material transported yearly</div>
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
                  className="w-7 h-7 rounded-full bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              <div className="py-5 space-y-4 text-xs">
                <div>
                  <label className="text-neutral-400 block mb-1">Select Freight Category</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Heavy Haulage', 'Earthmoving', 'National Freight', 'Mine Logistics'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setCargoType(type)}
                        className={`p-2.5 rounded-xl border text-left font-medium transition ${
                          cargoType === type
                            ? 'bg-orange-500/20 border-orange-500 text-white'
                            : 'bg-neutral-950 border-white/10 text-neutral-400'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-neutral-950 rounded-xl border border-white/10 space-y-1.5 font-mono">
                  <div className="flex justify-between text-neutral-400">
                    <span>Fleet Availability</span>
                    <span className="text-emerald-400 font-bold">Live Dispatch Ready</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Insurance Coverage</span>
                    <span className="text-white">$20M Comprehensive</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowQuoteModal(false);
                  alert('Thank you! A senior dispatch logistics coordinator has received your query.');
                }}
                className="w-full py-3 bg-white text-neutral-950 font-bold rounded-xl hover:bg-neutral-200 transition"
              >
                Submit Dispatch Request
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero_FirstTransport;
