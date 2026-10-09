import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  Eye,
  Sliders,
  Maximize2,
  Copy,
  Check,
  Zap,
  Menu,
  X
} from 'lucide-react';
import { useIsMobile } from './useIsMobile';

const GALLERY_ITEMS = [
  {
    id: 'chair',
    title: 'Sculptural Cobalt Armchair',
    prompt: 'Architectural cobalt blue armchair, minimalist brutalist gallery space, dramatic side sunlight',
    src: '/assets/dreamflux-chair.jpg',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'puppy',
    title: 'Fluffy Golden Retriever Pup',
    prompt: 'Macro photography of golden puppy nestled in heavy knit oatmeal blanket, soft morning light',
    src: '/assets/dreamflux-puppy.jpg',
    aspect: 'aspect-square'
  },
  {
    id: 'cosmetics',
    title: 'Aura Skincare Vessel',
    prompt: 'Matte glass cosmetic jar with natural oak lid on travertine stone, organic branch shadow',
    src: '/assets/dreamflux-cosmetics.jpg',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'portrait',
    title: 'Luminous Editorial Portrait',
    prompt: 'Cinematic beauty portrait, natural skin texture, gentle ambient pastel illumination',
    src: '/assets/dreamflux-portrait.jpg',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'lamp',
    title: 'Brass Luminaire & Clock',
    prompt: 'Curved brass reading lamp, vintage olive clock on oak nightstand, morning leaf shadows',
    src: '/assets/dreamflux-lamp.jpg',
    aspect: 'aspect-[3/4]'
  }
];

export const Hero_Dreamflux = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [promptText, setPromptText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showGalleryModal, setShowGalleryModal] = useState(false);

  const handleCreate = (e) => {
    e.preventDefault();
    if (!promptText) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setSelectedItem(GALLERY_ITEMS[1]); // open preview
    }, 1200);
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-white text-slate-900 border border-slate-200/80 shadow-2xl font-syne">
      {/* Top Header */}
      <header className="relative z-30 px-5 sm:px-12 py-4 sm:py-5 flex items-center justify-between border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-slate-950 flex items-center justify-center text-white font-black text-sm">
            ⚡
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-950 font-syne">
            Dreamflux<span className="text-slate-400">.ai</span>
          </span>
        </div>

        {/* Desktop Links */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600 font-jakarta">
            <a href="#home" className="text-slate-950 font-bold">Home</a>
            <a href="#features" className="hover:text-slate-950 transition">Features</a>
            <a href="#pricing" className="hover:text-slate-950 transition">Pricing</a>
            <a href="#gallery" className="hover:text-slate-950 transition">Gallery</a>
            <a href="#community" className="hover:text-slate-950 transition">Community</a>
          </nav>
        )}

        {/* Right CTA / Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {!isMobile && (
            <>
              <button className="border border-slate-200 hover:border-slate-400 text-slate-800 text-xs font-bold px-3.5 sm:px-5 py-2 rounded-full transition font-jakarta cursor-pointer">
                Sign In
              </button>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-950 text-white flex items-center justify-center text-xs font-bold font-mono">
                DF
              </div>
            </>
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
              className="absolute top-full left-0 right-0 z-40 bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-6 py-5 flex flex-col gap-3 shadow-2xl text-left font-jakarta"
            >
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-slate-900 py-1">Home</a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-slate-600 hover:text-slate-900 py-1">Features</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-slate-600 hover:text-slate-900 py-1">Pricing</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-slate-600 hover:text-slate-900 py-1">Gallery</a>
              <a href="#community" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-slate-600 hover:text-slate-900 py-1">Community</a>

              <div className="pt-3 border-t border-slate-100 flex gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowGalleryModal(true);
                  }}
                  className="flex-1 py-2.5 rounded-full bg-slate-950 text-white font-bold text-xs transition cursor-pointer"
                >
                  Start Creating
                </button>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-full border border-slate-200 text-slate-700 font-bold text-xs transition cursor-pointer"
                >
                  Sign In
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Grid Content */}
      <div className="px-5 sm:px-12 py-6 sm:py-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Human Editorial Typography */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <h1 className={`${isMobile ? 'text-2xl sm:text-3xl leading-tight' : 'text-3xl sm:text-5xl lg:text-6xl leading-[1.1]'} font-extrabold tracking-tight text-slate-950 font-syne`}>
            Turn Your Ideas <br />
            into Stunning <br />
            Visuals with AI
          </h1>

          <p className="mt-4 sm:mt-6 text-xs sm:text-base text-slate-600 max-w-lg leading-relaxed font-jakarta">
            Describe anything you imagine, and let our AI bring it to life in breathtaking, high-quality images.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 font-jakarta">
            <button
              onClick={() => setShowGalleryModal(true)}
              className="bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl transition shadow-md active:scale-95 cursor-pointer"
            >
              Start Creating
            </button>
            <button
              onClick={() => setShowGalleryModal(true)}
              className="border border-slate-200 hover:bg-slate-50 text-slate-900 font-bold text-xs sm:text-sm px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl transition active:scale-95 cursor-pointer"
            >
              Explore Gallery
            </button>
          </div>

          {/* Interactive Quick Prompt Generator Field */}
          <form onSubmit={handleCreate} className="mt-6 sm:mt-8 w-full max-w-md bg-slate-50 border border-slate-200 rounded-2xl p-2 flex gap-2 font-jakarta">
            <input
              type="text"
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder="e.g. Sculptural cobalt blue velvet armchair..."
              className="flex-1 bg-transparent px-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              disabled={isGenerating}
              className="bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2 rounded-xl transition cursor-pointer disabled:opacity-50"
            >
              {isGenerating ? 'Dreaming...' : 'Generate'}
            </button>
          </form>

          {/* Social Proof */}
          <div className="mt-6 sm:mt-8 flex items-center gap-3 font-jakarta">
            <div className="flex -space-x-2 shrink-0">
              {[
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
              ].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Creator"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="text-left">
              <span className="font-extrabold text-slate-900 text-xs sm:text-sm">4.8k+</span>
              <span className="text-slate-500 text-[11px] sm:text-xs ml-1 font-medium">
                creators generating daily
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Masonry Artwork Gallery */}
        <div className="lg:col-span-6 relative">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 items-start">
            {/* Column 1 */}
            <div className="space-y-3 sm:space-y-4">
              {GALLERY_ITEMS.slice(0, 3).map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedItem(item)}
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-100 group cursor-pointer bg-slate-100"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 sm:p-4 flex flex-col justify-end text-left text-white">
                    <span className="text-xs font-bold font-syne">{item.title}</span>
                    <span className="text-[10px] text-slate-300 font-jakarta line-clamp-1">{item.prompt}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-8">
              {GALLERY_ITEMS.slice(3).map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedItem(item)}
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-100 group cursor-pointer bg-slate-100"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 sm:p-4 flex flex-col justify-end text-left text-white">
                    <span className="text-xs font-bold font-syne">{item.title}</span>
                    <span className="text-[10px] text-slate-300 font-jakarta line-clamp-1">{item.prompt}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm font-jakarta">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl text-left"
            >
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-base">{selectedItem.title}</h3>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 hover:text-black flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="py-4">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="w-full h-64 object-cover rounded-2xl mb-3 shadow-md"
                />
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Prompt Metadata:
                  </span>
                  <p className="text-xs text-slate-700 italic">"{selectedItem.prompt}"</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setPromptText(selectedItem.prompt);
                    setSelectedItem(null);
                  }}
                  className="flex-1 py-2.5 bg-slate-950 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition cursor-pointer"
                >
                  Remix This Prompt
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero_Dreamflux;
