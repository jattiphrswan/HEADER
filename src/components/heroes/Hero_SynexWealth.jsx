import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  TrendingUp,
  Search,
  Bell,
  Calendar,
  ChevronDown,
  Layers,
  ArrowUpRight,
  Globe,
  Wallet,
  Zap,
  Sliders,
  CheckCircle2,
  BarChart3,
  Shield,
  Smartphone,
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';

// Timeframe sample datasets for the dynamic bar chart
const TIMEFRAME_DATA = {
  '1H': {
    total: '$ 345,398.34',
    change: '+0.42%',
    bars: [30, 42, 48, 35, 55, 60, 52, 68, 75, 70, 80, 85, 78, 88, 92, 85, 90, 95, 88, 92, 86, 94, 98, 92, 88, 95, 90, 96]
  },
  '1D': {
    total: '$ 347,820.12',
    change: '+2.15%',
    bars: [45, 52, 50, 65, 70, 58, 62, 75, 82, 78, 65, 70, 85, 90, 88, 76, 82, 94, 89, 91, 85, 96, 92, 88, 90, 97, 93, 99]
  },
  '1W': {
    total: '$ 345,398.34',
    change: '+6.04%',
    bars: [25, 38, 45, 55, 48, 62, 70, 65, 75, 82, 88, 72, 79, 85, 92, 88, 80, 85, 92, 95, 89, 94, 90, 98, 94, 91, 96, 100]
  },
  '1M': {
    total: '$ 328,110.50',
    change: '+14.8%',
    bars: [20, 25, 32, 40, 48, 42, 55, 60, 58, 68, 72, 78, 85, 80, 84, 90, 86, 82, 89, 94, 90, 93, 88, 95, 92, 98, 95, 100]
  },
  'ALL': {
    total: '$ 412,900.00',
    change: '+84.2%',
    bars: [15, 20, 28, 35, 42, 50, 45, 60, 68, 74, 80, 85, 78, 88, 92, 86, 94, 90, 95, 99, 92, 96, 98, 94, 97, 100, 96, 100]
  }
};

export const Hero_SynexWealth = () => {
  // Video / Scrubber Player States (as seen in bottom player bar of reference image)
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(28); // percentage 0-100
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Interactive Dashboard States
  const [selectedTimeframe, setSelectedTimeframe] = useState('1W');
  const [activeAsset, setActiveAsset] = useState('eth');
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [showLaunchModal, setShowLaunchModal] = useState(false);
  const [hoveredBarIndex, setHoveredBarIndex] = useState(null);

  // 3D Card Tilt on Mouse Move
  const [cardTilt, setCardTilt] = useState({ rotateX: 0, rotateY: 0 });
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  // Scrubber animation loop when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.4));
    }, 150);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Mouse tilt effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Smooth tilt angles
    const rotateY = (x / (rect.width / 2)) * 5;
    const rotateX = -(y / (rect.height / 2)) * 5;
    setCardTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setCardTilt({ rotateX: 0, rotateY: 0 });
  };

  const currentDataset = TIMEFRAME_DATA[selectedTimeframe];

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl border border-neutral-800/80 bg-neutral-950 font-sans text-neutral-100 ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none' : 'min-h-[820px]'
      }`}
    >
      {/* 1. Cinematic Nordic Landscape Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: "url('/assets/synex-landscape.jpg')",
        }}
      >
        {/* Ambient atmospheric gradients & overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-900/40 to-neutral-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-100/10 via-transparent to-black/60" />
      </div>

      {/* 2. Top Safari / Arc Browser Chrome (Exact browser mockup match) */}
      <div className="relative z-20 bg-neutral-900/90 backdrop-blur-md border-b border-white/10 px-4 py-2.5 flex items-center justify-between text-xs text-neutral-400">
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/90 hover:opacity-80 transition cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-amber-500/90 hover:opacity-80 transition cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/90 hover:opacity-80 transition cursor-pointer" />
          <div className="hidden sm:flex items-center gap-1.5 ml-4 text-neutral-500">
            <ChevronRight className="w-3.5 h-3.5 rotate-180 cursor-pointer hover:text-white" />
            <ChevronRight className="w-3.5 h-3.5 cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Address bar pill */}
        <div className="flex items-center gap-2 bg-neutral-950/70 hover:bg-neutral-950 border border-white/10 rounded-full px-5 py-1 text-[11px] text-neutral-300 transition-colors w-full max-w-xs sm:max-w-md justify-center shadow-inner cursor-pointer">
          <Shield className="w-3 h-3 text-emerald-400" />
          <span className="font-mono text-neutral-200">synex.xyz</span>
          <span className="text-neutral-500">/home</span>
        </div>

        {/* Browser utility actions */}
        <div className="flex items-center gap-3">
          <span className="hidden md:inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-medium border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Live Preview
          </span>
          <button 
            onClick={() => setIsFullscreen(!isFullscreen)} 
            className="text-neutral-400 hover:text-white transition p-1"
            title="Toggle Showcase Window"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* 3. Synex Inner Web Header */}
      <div className="relative z-20 px-6 sm:px-12 py-5 flex items-center justify-between border-b border-white/5 bg-white/5 backdrop-blur-sm">
        {/* Synex Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <span className="text-2xl font-black tracking-tight text-white font-sans group-hover:text-emerald-400 transition-colors">
            synex
          </span>
        </div>

        {/* Central Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-[12px] font-semibold tracking-wider text-neutral-200 uppercase">
          {['DASHBOARD', 'ASSETS', 'ANALYTICS', 'MARKETS'].map((item) => (
            <button
              key={item}
              onClick={() => setActiveNav(item)}
              className={`hover:text-white transition cursor-pointer relative py-1 ${
                activeNav === item ? 'text-white' : 'text-neutral-400'
              }`}
            >
              {item}
              {activeNav === item && (
                <motion.div
                  layoutId="synex-nav-active"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full shadow-[0_0_8px_white]"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right CTA Area */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white transition cursor-pointer">
            <Globe className="w-3.5 h-3.5 text-neutral-400" />
            <span>English</span>
          </button>

          <button
            onClick={() => setShowLaunchModal(true)}
            className="flex items-center gap-2 bg-white text-neutral-950 hover:bg-neutral-100 font-bold text-xs px-4 py-2 rounded-full transition-transform active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.25)] cursor-pointer"
          >
            <div className="w-3 h-3 rounded-full bg-neutral-950 flex items-center justify-center text-white text-[8px]">
              ▶
            </div>
            <span>Launch app</span>
          </button>
        </div>
      </div>

      {/* 4. Hero Content Header (Typography + Subtitle) */}
      <div className="relative z-10 pt-10 sm:pt-14 pb-6 px-6 sm:px-12 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-medium tracking-widest text-neutral-300 uppercase mb-4"
        >
          <Sparkles className="w-3 h-3 text-emerald-400" />
          <span>Finance Reimagined</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
        >
          <span className="text-neutral-400/90 font-light">A New Standard</span>
          <br />
          <span className="bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
            in Wealth Management
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 text-sm sm:text-base text-neutral-300/80 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Take full control of your assets with a unified platform for investing,
          tracking, and growing your portfolio in real time.
        </motion.p>
      </div>

      {/* 5. 3D Floating Dashboard Showcase (Interactive Card) */}
      <div 
        className="relative z-20 px-4 sm:px-10 pb-28 perspective-[1200px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          ref={cardRef}
          animate={{
            rotateX: cardTilt.rotateX,
            rotateY: cardTilt.rotateY,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 120 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative max-w-5xl mx-auto rounded-3xl bg-neutral-900/80 backdrop-blur-2xl border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden transition-shadow hover:shadow-[0_35px_80px_-15px_rgba(0,0,0,0.9)]"
        >
          {/* Glass reflection gloss highlight */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
            {/* Left Sidebar: "Analytica" Menu */}
            <div className="md:col-span-3 bg-neutral-950/60 p-5 border-r border-white/10 flex flex-col justify-between">
              <div>
                {/* Brand label */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-emerald-400 to-cyan-500 flex items-center justify-center text-neutral-950 text-[10px] font-black">
                    A
                  </div>
                  <span className="text-xs font-bold text-neutral-200 tracking-wide uppercase">
                    Analytica
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono ml-auto">Top Staking Assets</span>
                </div>

                {/* Quick Search */}
                <div className="relative mb-5">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-neutral-500" />
                  <input
                    type="text"
                    readOnly
                    value="Search"
                    className="w-full bg-neutral-900/80 border border-white/10 rounded-xl pl-8 pr-8 py-1.5 text-xs text-neutral-400 cursor-pointer"
                  />
                  <span className="absolute right-2.5 top-2 text-[10px] text-neutral-500 font-mono">⌘K</span>
                </div>

                {/* Navigation tree */}
                <div className="space-y-1 text-xs">
                  <button className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-white/10 text-white font-medium">
                    <span className="flex items-center gap-2">
                      <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
                      Dashboard
                    </span>
                    <span className="text-[10px] bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-300 font-bold">2</span>
                  </button>

                  <button className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition">
                    <span className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5" />
                      Analytics Subsections
                    </span>
                  </button>

                  <button className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition">
                    <span className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5" />
                      Sales List
                    </span>
                  </button>

                  {/* Expandable Goals */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between px-3 py-1 text-neutral-400 font-medium">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neutral-500" />
                        Goals
                      </span>
                      <ChevronDown className="w-3 h-3 text-neutral-500" />
                    </div>
                    <div className="ml-6 pl-2 border-l border-white/10 space-y-1 mt-1 text-[11px] text-neutral-500">
                      <div className="text-neutral-400 hover:text-white cursor-pointer py-0.5">Monthly Targets</div>
                      <div className="text-neutral-400 hover:text-white cursor-pointer py-0.5">Quarterly Goals</div>
                      <div className="text-neutral-400 hover:text-white cursor-pointer py-0.5">Yearly Projections</div>
                      <div className="text-emerald-400/90 py-0.5 font-medium">Annual Revenue</div>
                      <div className="text-neutral-400 hover:text-white cursor-pointer py-0.5">Company Growth</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom user profile */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs">
                    RR
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white text-[11px]">Ronald Richards</div>
                    <div className="text-[10px] text-neutral-500">@Ronald903 • PRO</div>
                  </div>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
              </div>
            </div>

            {/* Main Center Dashboard: Capital Under Control & Live Frequency Chart */}
            <div className="md:col-span-9 p-6 flex flex-col justify-between bg-neutral-900/40">
              {/* Top toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-emerald-400" />
                    Capital Under Control
                  </span>
                </div>

                {/* Date & timeframe selector */}
                <div className="flex items-center gap-2 text-xs">
                  <div className="flex items-center gap-1.5 bg-neutral-950/60 border border-white/10 rounded-xl px-3 py-1 text-neutral-300">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    <span className="text-[11px]">Oct 1 - Nov 30, 2026</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 bg-neutral-950/60 border border-white/10 rounded-xl px-3 py-1 text-neutral-300 text-[11px]">
                    <span>Sat, 18 June</span>
                  </div>
                  <button className="p-1.5 rounded-xl bg-neutral-950/60 border border-white/10 text-neutral-400 hover:text-white">
                    <Bell className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Metric Hero Row */}
              <div className="py-4 flex flex-wrap items-baseline justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
                      {currentDataset.total}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      <TrendingUp className="w-3 h-3" />
                      {currentDataset.change}
                    </span>
                    <span className="hidden sm:inline text-xs text-neutral-500 bg-neutral-800/60 px-2 py-0.5 rounded font-mono">
                      +$248,348.00
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    vs previous period $345,398.34 • Feb-Mar 2026
                  </p>
                </div>

                {/* Interactive Timeframe Toggle (1H, 1D, 1W, 1M, ALL) */}
                <div className="flex items-center gap-1 bg-neutral-950/80 p-1 rounded-xl border border-white/10">
                  {['1H', '1D', '1W', '1M', 'ALL'].map((tf) => (
                    <button
                      key={tf}
                      onClick={() => setSelectedTimeframe(tf)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        selectedTimeframe === tf
                          ? 'bg-white text-neutral-950 shadow-md scale-105'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {tf}
                    </button>
                  ))}
                </div>
              </div>

              {/* Crypto Assets Pill Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2">
                {[
                  { id: 'eth', name: 'Ethereum', val: '$28,500', change: '+2.48%', icon: 'Ξ' },
                  { id: 'btc', name: 'Bitcoin', val: '$35,200', change: '+4.12%', icon: '₿' },
                  { id: 'usdt', name: 'Tether', val: '$24,300', change: '+0.01%', icon: '₮' }
                ].map((asset) => (
                  <button
                    key={asset.id}
                    onClick={() => setActiveAsset(asset.id)}
                    className={`flex items-center justify-between p-3 rounded-2xl border transition-all text-left cursor-pointer ${
                      activeAsset === asset.id
                        ? 'bg-white/10 border-emerald-400/50 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                        : 'bg-neutral-950/40 border-white/5 hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-neutral-800 flex items-center justify-center text-xs font-bold text-white">
                        {asset.icon}
                      </div>
                      <div>
                        <div className="text-[11px] text-neutral-400">{asset.name}</div>
                        <div className="text-xs font-bold text-white font-mono">{asset.val}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                      {asset.change}
                    </span>
                  </button>
                ))}
              </div>

              {/* Dynamic Animated Frequency Bar Chart (28 bars) */}
              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="flex items-end justify-between h-28 gap-1 px-1">
                  {currentDataset.bars.map((val, idx) => {
                    const isHovered = hoveredBarIndex === idx;
                    return (
                      <div
                        key={idx}
                        onMouseEnter={() => setHoveredBarIndex(idx)}
                        onMouseLeave={() => setHoveredBarIndex(null)}
                        className="relative flex-1 flex flex-col items-center justify-end h-full group cursor-pointer"
                      >
                        {/* Hover Tooltip */}
                        {isHovered && (
                          <div className="absolute -top-7 bg-white text-neutral-950 text-[10px] font-bold px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap z-30 pointer-events-none">
                            ${(val * 3500).toLocaleString()}
                          </div>
                        )}
                        <motion.div
                          initial={{ height: 10 }}
                          animate={{ height: `${val}%` }}
                          transition={{ duration: 0.5, delay: idx * 0.01 }}
                          className={`w-full max-w-[12px] rounded-t-sm transition-colors ${
                            idx % 4 === 0
                              ? 'bg-emerald-400 group-hover:bg-emerald-300'
                              : 'bg-white/20 group-hover:bg-white/50'
                          } ${isHovered ? '!bg-white shadow-[0_0_10px_white]' : ''}`}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Timeline Axis Labels */}
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 mt-2 border-t border-white/10 pt-1.5">
                  <span>Monday, DEC 1 2026</span>
                  <span>TUESDAY, DEC 2 2026</span>
                  <span>Wednesday, DEC 3 2026</span>
                  <span className="hidden sm:inline">FRIDAY, DEC 5 2026</span>
                </div>
              </div>

              {/* Explore Footer Hint */}
              <div className="mt-3 flex items-center justify-center text-[11px] text-neutral-400 gap-1.5 pt-2">
                <Sparkles className="w-3 h-3 text-emerald-400 animate-pulse" />
                <span>+ Scroll to explore full multi-asset yield matrix</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 6. Working Video / Timeline Player Control Bar (Matching Bottom of Screenshot) */}
      <div className="absolute bottom-4 left-4 right-4 sm:left-10 sm:right-10 z-30">
        <div className="bg-neutral-900/85 backdrop-blur-xl border border-white/20 rounded-2xl px-4 sm:px-6 py-3 flex items-center gap-3 sm:gap-5 shadow-2xl">
          {/* Play / Pause Toggle */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full bg-white text-neutral-950 flex items-center justify-center hover:bg-neutral-200 transition-transform active:scale-95 shadow-md cursor-pointer shrink-0"
            title={isPlaying ? 'Pause Presentation' : 'Play Presentation'}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-current text-neutral-950" />
            ) : (
              <Play className="w-4 h-4 fill-current text-neutral-950 ml-0.5" />
            )}
          </button>

          {/* Volume Toggle */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="w-10 h-10 rounded-full bg-neutral-800/80 hover:bg-neutral-800 text-white flex items-center justify-center transition active:scale-95 border border-white/10 cursor-pointer shrink-0"
            title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-rose-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-emerald-400" />
            )}
          </button>

          {/* Interactive Scrub Timeline Bar */}
          <div className="flex-1 flex items-center gap-3">
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickPos = (e.clientX - rect.left) / rect.width;
                setProgress(Math.max(0, Math.min(100, clickPos * 100)));
              }}
              className="relative flex-1 h-3 bg-neutral-800 rounded-full overflow-hidden cursor-pointer group"
            >
              {/* Progress fill */}
              <div
                className="h-full bg-gradient-to-r from-rose-500 via-emerald-400 to-cyan-400 rounded-full relative transition-[width] duration-75"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-md group-hover:scale-125 transition-transform" />
              </div>
            </div>

            {/* Time Stamp */}
            <span className="text-[11px] font-mono text-neutral-400 whitespace-nowrap hidden sm:inline">
              00:{Math.floor((progress / 100) * 60).toString().padStart(2, '0')} / 01:00
            </span>
          </div>

          {/* Reset button */}
          <button
            onClick={() => setProgress(0)}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800/80 transition"
            title="Restart Reel"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 7. Interactive "Launch App" Modal Demo */}
      <AnimatePresence>
        {showLaunchModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-neutral-900 border border-white/20 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-left"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                    S
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Synex Wealth Console</h3>
                    <p className="text-xs text-neutral-400">Institutional Onboarding v4.2</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowLaunchModal(false)}
                  className="w-7 h-7 rounded-full bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              <div className="py-6 space-y-4">
                <div className="bg-neutral-950 p-4 rounded-2xl border border-white/10">
                  <div className="text-xs text-neutral-400">Connected Wallet Portfolio</div>
                  <div className="text-2xl font-bold font-mono text-white mt-1">$ 345,398.34 USD</div>
                  <div className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    +6.04% 7-day average APY
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-neutral-800 text-neutral-400">
                    <span>Protocol Gas Strategy</span>
                    <span className="text-white font-mono">Ultra Low (EIP-4844)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-800 text-neutral-400">
                    <span>Cold Storage Custody</span>
                    <span className="text-emerald-400 font-mono">Multi-Sig Hardware Secured</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-800 text-neutral-400">
                    <span>Audit Status</span>
                    <span className="text-cyan-400 font-mono">Verified by Trail of Bits</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowLaunchModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-white text-neutral-950 font-bold text-xs hover:bg-neutral-200 transition"
                >
                  Enter Staking Vault
                </button>
                <button
                  onClick={() => setShowLaunchModal(false)}
                  className="px-4 py-2.5 rounded-xl bg-neutral-800 text-white font-semibold text-xs hover:bg-neutral-700 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero_SynexWealth;
