import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  Palette,
  Music,
  Heart,
  Volume2,
  VolumeX,
  Play,
  Pause,
  ArrowUpRight,
  Star,
  Flame,
  CheckCircle2,
  Send,
  Layers,
  Smile,
  MousePointer2,
  Menu,
  X
} from 'lucide-react';
import { useIsMobile } from './useIsMobile';

const PALETTES = [
  {
    id: 'sunset',
    name: 'Sunset Coral',
    bg: 'from-amber-600 via-rose-600 to-indigo-900',
    accent: 'bg-rose-500',
    border: 'border-rose-400/30',
    textGradient: 'from-amber-200 via-rose-200 to-white'
  },
  {
    id: 'hyper',
    name: 'Hyper Violet',
    bg: 'from-purple-900 via-indigo-900 to-slate-950',
    accent: 'bg-purple-500',
    border: 'border-purple-400/30',
    textGradient: 'from-purple-200 via-indigo-200 to-white'
  },
  {
    id: 'emerald',
    name: 'Cyber Mint',
    bg: 'from-emerald-900 via-teal-900 to-slate-950',
    accent: 'bg-emerald-500',
    border: 'border-emerald-400/30',
    textGradient: 'from-emerald-200 via-teal-200 to-white'
  }
];

export const Hero_AuraCreative = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [selectedPalette, setSelectedPalette] = useState(PALETTES[0]);
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [likesCount, setLikesCount] = useState(2480);
  const [isLiked, setIsLiked] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRef = useRef(null);

  // Trigger confetti burst
  const handleTriggerConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { x, y },
      colors: ['#f43f5e', '#ec4899', '#8b5cf6', '#3b82f6', '#10b981', '#f59e0b']
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailInput) return;
    setIsSubscribed(true);
    handleTriggerConfetti(e);
  };

  const handleLike = () => {
    if (!isLiked) {
      setLikesCount((prev) => prev + 1);
      setIsLiked(true);
    } else {
      setLikesCount((prev) => prev - 1);
      setIsLiked(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-3xl overflow-hidden text-white shadow-2xl border border-white/10 transition-all duration-700 bg-gradient-to-br ${selectedPalette.bg} font-sans min-h-[640px] flex flex-col justify-between p-4 sm:p-12`}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose-500/20 rounded-full blur-[90px] pointer-events-none" />

      {/* Top Header Navigation */}
      <div className="relative z-20 flex items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-white/15">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center font-black text-lg sm:text-xl shadow-lg">
            ✦
          </div>
          <div>
            <span className="font-extrabold text-base sm:text-lg tracking-tight">AURA STUDIO</span>
            <span className="block text-[10px] sm:text-[11px] text-white/70">Creative Design Engineering</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-white/80">
            <a href="#work" className="hover:text-white transition">Selected Works</a>
            <a href="#capabilities" className="hover:text-white transition">Capabilities</a>
            <a href="#lab" className="hover:text-white transition">Spatial Lab</a>
            <a href="#pricing" className="hover:text-white transition">Retainers</a>
          </nav>
        )}

        <div className="flex items-center gap-2">
          {/* Dynamic Palette Switcher */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-black/30 backdrop-blur-md p-1 sm:p-1.5 rounded-full border border-white/20 overflow-x-auto">
            <Palette className="w-3.5 h-3.5 text-white/70 ml-1.5 hidden sm:block" />
            {PALETTES.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPalette(p)}
                className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                  selectedPalette.id === p.id
                    ? 'bg-white text-neutral-900 shadow-md'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger Toggle Button */}
          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/15 hover:bg-white/25 text-white transition active:scale-95 cursor-pointer flex items-center justify-center border border-white/20"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative z-30 mb-4 bg-black/85 backdrop-blur-2xl border border-white/20 rounded-2xl p-5 flex flex-col gap-3 shadow-2xl text-left"
          >
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold text-white hover:text-amber-300 py-1">Selected Works</a>
            <a href="#capabilities" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-white/80 hover:text-white py-1">Capabilities</a>
            <a href="#lab" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-white/80 hover:text-white py-1">Spatial Lab</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-white/80 hover:text-white py-1">Retainers</a>

            <div className="pt-3 border-t border-white/15 flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  containerRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2.5 rounded-xl bg-white text-neutral-950 font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-lg active:scale-95 text-center"
              >
                Launch Studio Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center Main Stage */}
      <div className="relative z-10 py-6 sm:py-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[11px] sm:text-xs font-semibold mb-4 sm:mb-6 shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-spin" />
          <span>Interactive Spatial Playground</span>
        </motion.div>

        {/* Dynamic Gradient Title */}
        <h1 className={`${isMobile ? 'text-2xl sm:text-3xl leading-tight' : 'text-3xl sm:text-6xl md:text-7xl leading-[1.05]'} font-black tracking-tight drop-shadow-sm`}>
          Crafting Digital Brands <br />
          <span className={`bg-gradient-to-r ${selectedPalette.textGradient} bg-clip-text text-transparent underline decoration-white/20`}>
            That Defy Expectations.
          </span>
        </h1>

        <p className="mt-6 text-sm sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed font-medium">
          A design-led creative laboratory building animated interfaces, interactive 3D WebGL experiences, and next-gen brand ecosystems.
        </p>

        {/* Working CTA Box with real Confetti */}
        <div className="mt-8 w-full max-w-md">
          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="flex gap-2 bg-black/40 backdrop-blur-md p-2 rounded-2xl border border-white/20 shadow-2xl">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter email for VIP access..."
                className="flex-1 bg-transparent px-3 text-xs sm:text-sm text-white placeholder-white/50 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-neutral-950 hover:bg-neutral-100 font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-xl flex items-center gap-1.5 transition active:scale-95 shadow-md cursor-pointer shrink-0"
              >
                <span>Join VIP</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white text-neutral-900 font-bold p-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-2xl text-sm"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>You're in! Welcome to Aura Early Access.</span>
            </motion.div>
          )}
        </div>

        {/* Social Proof */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-white/80">
          <div className="flex items-center gap-1">
            <div className="flex -space-x-2">
              {['https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces'
              ].map((img, i) => (
                <img key={i} src={img} alt="User avatar" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <span className="font-semibold ml-2">Over 1,200 founders registered</span>
          </div>

          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="font-bold ml-1">4.9 / 5.0 Rating</span>
          </div>
        </div>
      </div>

      {/* Physics-Enabled Draggable Bento Widgets (Interactive Floating Elements) */}
      <div className="relative z-20 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
        {/* Draggable Widget 1: Live Audio Frequency Synthesizer */}
        <motion.div
          drag
          dragConstraints={containerRef}
          whileDrag={{ scale: 1.05, zIndex: 40 }}
          whileHover={{ y: -3 }}
          className="bg-black/40 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl cursor-grab active:cursor-grabbing text-left group"
        >
          <div className="flex items-center justify-between text-xs text-white/70 mb-2">
            <span className="flex items-center gap-1.5 font-semibold text-white">
              <Music className="w-3.5 h-3.5 text-pink-400" />
              Soundscape Waveform
            </span>
            <button
              onClick={() => setIsPlayingSound(!isPlayingSound)}
              className="p-1 rounded bg-white/10 hover:bg-white/20 text-white"
            >
              {isPlayingSound ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
          </div>

          {/* Animated Waveform bars */}
          <div className="flex items-end gap-1 h-8 px-1">
            {[40, 75, 55, 95, 30, 85, 60, 90, 45, 80, 65, 100, 50, 70, 90, 40].map((h, i) => (
              <motion.div
                key={i}
                animate={{
                  height: isPlayingSound ? [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`] : `${h * 0.3}%`
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  delay: i * 0.05
                }}
                className="flex-1 bg-gradient-to-t from-pink-500 to-indigo-300 rounded-full"
              />
            ))}
          </div>
          <div className="flex items-center justify-between text-[10px] text-white/60 mt-2">
            <span>Ambient Binaural 432Hz</span>
            <span className="text-pink-300 font-mono">DRAG ME 🖐</span>
          </div>
        </motion.div>

        {/* Draggable Widget 2: Working Like Counter & Heart Burst */}
        <motion.div
          drag
          dragConstraints={containerRef}
          whileDrag={{ scale: 1.05, zIndex: 40 }}
          whileHover={{ y: -3 }}
          className="bg-black/40 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl cursor-grab active:cursor-grabbing text-left flex items-center justify-between group"
        >
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-white/70 block">
              Community Appreciation
            </span>
            <span className="text-2xl font-black font-mono text-white mt-1 block">
              {likesCount.toLocaleString()}
            </span>
            <span className="text-[10px] text-emerald-300 flex items-center gap-1">
              <Flame className="w-3 h-3" /> Trending on ProductHunt #1
            </span>
          </div>

          <button
            onClick={handleLike}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-90 ${
              isLiked ? 'bg-rose-500 text-white shadow-rose-500/50' : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        </motion.div>

        {/* Draggable Widget 3: Live Interactive Confetti Burst Button */}
        <motion.div
          drag
          dragConstraints={containerRef}
          whileDrag={{ scale: 1.05, zIndex: 40 }}
          whileHover={{ y: -3 }}
          onClick={handleTriggerConfetti}
          className="bg-black/40 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl cursor-pointer active:scale-95 text-left flex flex-col justify-between group hover:border-white/40 transition"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              Confetti Cannon
            </span>
            <span className="text-[10px] bg-yellow-400 text-neutral-950 font-bold px-1.5 py-0.5 rounded">
              CLICK ME!
            </span>
          </div>
          <p className="text-[11px] text-white/70 mt-1">
            Tap anywhere on this card to blast celebratory particle confetti across the viewport!
          </p>
          <div className="text-[10px] text-white/50 text-right mt-1 font-mono">
            canvas-confetti engine
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero_AuraCreative;
