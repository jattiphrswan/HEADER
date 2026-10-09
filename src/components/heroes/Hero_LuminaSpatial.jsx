import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Eye,
  Cpu,
  Volume2,
  Sparkles,
  ShoppingBag,
  Check,
  ChevronRight,
  Shield,
  Layers,
  Rotate3d,
  Maximize2,
  Menu,
  X
} from 'lucide-react';
import { useIsMobile } from './useIsMobile';

const HOTSPOTS = [
  {
    id: 'optics',
    x: '42%',
    y: '65%',
    title: 'Dual 4K Micro-OLED Displays',
    desc: '23 million pixels with 96% DCI-P3 color fidelity and 120Hz dynamic refresh rate for true retinal immersion.',
    icon: Eye
  },
  {
    id: 'neural',
    x: '75%',
    y: '52%',
    title: 'Neural Core M4 Co-Processor',
    desc: '12ms photon-to-motion latency, real-time hand & eye tracking without controllers.',
    icon: Cpu
  },
  {
    id: 'audio',
    x: '82%',
    y: '30%',
    title: 'Spatial Audio Raytracing',
    desc: 'Dual-driver audio pods deliver personalized spatial sound that automatically matches your room geometry.',
    icon: Volume2
  }
];

const FINISHES = [
  { id: 'obsidian', name: 'Space Obsidian', color: '#171717', aura: 'rgba(255,255,255,0.1)' },
  { id: 'titanium', name: 'Raw Titanium', color: '#71717a', aura: 'rgba(161,161,170,0.2)' },
  { id: 'aurora', name: 'Aurora Teal', color: '#0d9488', aura: 'rgba(20,184,166,0.25)' }
];

export const Hero_LuminaSpatial = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFinish, setSelectedFinish] = useState(FINISHES[0]);
  const [activeHotspot, setActiveHotspot] = useState(HOTSPOTS[0]);
  const [cartCount, setCartCount] = useState(0);
  const [showOrderDrawer, setShowOrderDrawer] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -y * 12, ry: x * 12 });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full rounded-3xl overflow-hidden bg-neutral-950 text-white border border-neutral-800 shadow-2xl font-sans min-h-[640px] p-5 sm:p-12 flex flex-col justify-between"
    >
      {/* Dynamic ambient background glow */}
      <div
        className="absolute inset-0 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 45%, ${selectedFinish.aura} 0%, transparent 60%)`
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/20 via-transparent to-neutral-950 pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-30 flex items-center justify-between pb-4 sm:pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white text-black font-black flex items-center justify-center text-sm">
            L
          </div>
          <span className="font-bold tracking-widest text-sm uppercase">LUMINA ONE</span>
        </div>

        {/* Desktop Nav */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider text-neutral-400 uppercase">
            <a href="#optics" className="hover:text-white transition">Optics</a>
            <a href="#sensory" className="hover:text-white transition">Sensory OS</a>
            <a href="#specs" className="hover:text-white transition">Specs</a>
            <a href="#developers" className="hover:text-white transition">Developers</a>
          </nav>
        )}

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowOrderDrawer(true)}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold transition active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-neutral-300" />
            <span>Bag ({cartCount})</span>
          </button>

          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition active:scale-95 cursor-pointer flex items-center justify-center"
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
              className="absolute top-full left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-2xl border-b border-white/15 px-6 py-5 flex flex-col gap-3 shadow-2xl text-left"
            >
              <a href="#optics" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold tracking-wider uppercase text-neutral-300 hover:text-white py-1">Optics</a>
              <a href="#sensory" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold tracking-wider uppercase text-neutral-300 hover:text-white py-1">Sensory OS</a>
              <a href="#specs" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold tracking-wider uppercase text-neutral-300 hover:text-white py-1">Specs</a>
              <a href="#developers" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold tracking-wider uppercase text-neutral-300 hover:text-white py-1">Developers</a>

              <div className="pt-3 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowOrderDrawer(true);
                  }}
                  className="w-full py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider transition cursor-pointer"
                >
                  Configure & Reserve
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Center 3D Showcase & Hotspots */}
      <div className="relative z-10 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1">
        {/* Left Column: Headline and Finishes */}
        <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-neutral-300 font-mono w-fit">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>SPATIAL COMPUTING REDEFINED</span>
          </div>

          <h1 className={`${isMobile ? 'text-2xl sm:text-3xl leading-tight' : 'text-3xl sm:text-6xl leading-[1.08]'} font-black tracking-tight text-white`}>
            The Infinite <br />
            <span className="bg-gradient-to-r from-neutral-200 via-white to-neutral-500 bg-clip-text text-transparent">
              Spatial Canvas.
            </span>
          </h1>

          <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
            Seamlessly blending physical reality with digital workspace fidelity. Control with your eyes, hands, and voice.
          </p>

          {/* Colorway Switcher */}
          <div className="pt-2">
            <div className="text-xs text-neutral-400 font-semibold mb-2">FINISH: <span className="text-white">{selectedFinish.name}</span></div>
            <div className="flex items-center gap-3">
              {FINISHES.map((finish) => (
                <button
                  key={finish.id}
                  onClick={() => setSelectedFinish(finish)}
                  className={`w-8 h-8 rounded-full border-2 transition-transform cursor-pointer ${
                    selectedFinish.id === finish.id ? 'scale-110 border-white shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: finish.color }}
                  title={finish.name}
                />
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => {
                setCartCount((c) => c + 1);
                setShowOrderDrawer(true);
              }}
              className="bg-white text-neutral-950 hover:bg-neutral-200 font-bold px-6 py-3 rounded-2xl text-xs sm:text-sm flex items-center gap-2 transition active:scale-95 shadow-xl cursor-pointer"
            >
              <span>Reserve Lumina One</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-neutral-400">From $2,499 or $104/mo</span>
          </div>
        </div>

        {/* Right Column: 3D Hardware Display with Interactive Pulsing Hotspots */}
        <div className="lg:col-span-7 relative flex items-center justify-center">
          <motion.div
            animate={{
              rotateX: tilt.rx,
              rotateY: tilt.ry
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 150 }}
            className="relative w-full max-w-lg aspect-square flex items-center justify-center"
          >
            {/* High-res hardware render */}
            <img
              src="/assets/lumina-device.jpg"
              alt="Lumina Spatial Headset"
              className="w-full h-full object-contain rounded-3xl drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)] filter brightness-105"
            />

            {/* Interactive Hotspot Pins on Hardware */}
            {HOTSPOTS.map((spot) => {
              const isSelected = activeHotspot.id === spot.id;
              const Icon = spot.icon;
              return (
                <div
                  key={spot.id}
                  style={{ left: spot.x, top: spot.y }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
                >
                  <button
                    onClick={() => setActiveHotspot(spot)}
                    className="relative group p-2 cursor-pointer focus:outline-none"
                  >
                    {/* Pulsing ring */}
                    <span className="absolute inset-0 rounded-full bg-cyan-400/40 animate-ping" />
                    {/* Center dot */}
                    <span className={`relative flex items-center justify-center w-8 h-8 rounded-full border border-white text-white transition-transform ${
                      isSelected ? 'bg-cyan-500 scale-110 shadow-[0_0_15px_#06b6d4]' : 'bg-black/80 hover:scale-110'
                    }`}>
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Bottom Active Hotspot Spec Card */}
      <div className="relative z-20 pt-4 border-t border-white/10">
        <div className="bg-neutral-900/80 backdrop-blur-md border border-white/15 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-4xl mx-auto text-left shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <activeHotspot.icon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <span>{activeHotspot.title}</span>
                <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">
                  FEATURE SPEC
                </span>
              </div>
              <div className="text-xs text-neutral-400 mt-0.5 max-w-xl">
                {activeHotspot.desc}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-400 shrink-0">
            <span>Tap pins on device to inspect</span>
          </div>
        </div>
      </div>

      {/* Working Reservation Drawer Demo */}
      <AnimatePresence>
        {showOrderDrawer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-neutral-900 border border-white/20 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-left"
            >
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <h3 className="font-bold text-white text-base">Your Reservation</h3>
                <button
                  onClick={() => setShowOrderDrawer(false)}
                  className="w-7 h-7 rounded-full bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              <div className="py-5 space-y-4">
                <div className="flex gap-4 items-center bg-neutral-950 p-4 rounded-2xl border border-white/10">
                  <img src="/assets/lumina-device.jpg" alt="Lumina" className="w-16 h-16 rounded-xl object-contain bg-neutral-900" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Lumina One (512GB)</h4>
                    <p className="text-xs text-neutral-400">Finish: {selectedFinish.name}</p>
                    <p className="text-sm font-mono font-bold text-cyan-400 mt-1">$2,499.00 USD</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Free Express Worldwide Courier Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Includes Dual Solo-Knit & Dual-Loop Bands</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>30-Day No-Hassle Risk Free Guarantee</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowOrderDrawer(false);
                  alert('Thank you! Your reservation token has been confirmed.');
                }}
                className="w-full py-3 bg-white text-black font-bold text-sm rounded-xl hover:bg-neutral-200 transition"
              >
                Proceed to Secure Checkout
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero_LuminaSpatial;
