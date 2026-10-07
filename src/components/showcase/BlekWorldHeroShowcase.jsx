import React from 'react';
import Header_BlekWorld from '../headers/Header_BlekWorld';
import { ArrowUpRight, Sparkles, Globe2, ShieldCheck, Zap } from 'lucide-react';

/**
 * Full Hero Section Showcase matching the context of the reference screenshot
 */
export const BlekWorldHeroShowcase = () => {
  return (
    <div className="w-full max-w-6xl mx-auto rounded-[32px] overflow-hidden shadow-2xl border border-neutral-800 bg-[#4f46e5] text-white">
      {/* Header Docked at the top */}
      <Header_BlekWorld />

      {/* Hero Banner Content Below */}
      <div className="relative px-6 sm:px-12 pt-8 sm:pt-14 pb-12 sm:pb-20 overflow-hidden">
        {/* Ambient background decoration */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 top-0 w-80 h-80 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="md:col-span-7 flex flex-col gap-4 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-indigo-100 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Next Gen Cultural Movement</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
              Empowering Creative Minds Worldwide.
            </h2>

            <p className="text-indigo-100/90 text-sm sm:text-base leading-relaxed max-w-xl">
              Connecting global initiatives, transparent statistics, and progressive creators through one decentralized ecosystem.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#register"
                className="inline-flex items-center gap-2 bg-white text-indigo-900 font-bold px-6 py-3 rounded-2xl hover:bg-indigo-50 transition shadow-lg hover:scale-105 active:scale-95"
              >
                <span>Join Initiative</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-6 text-xs text-indigo-200">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" /> Verified
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-yellow-300" /> 10k+ Members
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual matching the screenshot aesthetic */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 flex items-center justify-center p-2 group">
              {/* Patterned decorative avatar representation */}
              <div className="w-full h-full rounded-2xl bg-indigo-950/40 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 border border-white/10">
                {/* Cultural Pattern Motif representing the patterned headwrap in the reference */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-emerald-500 p-1 shadow-xl mb-3 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center text-white">
                    <Globe2 className="w-12 h-12 text-amber-300" />
                  </div>
                </div>
                <span className="text-white font-bold text-base">Blek World Summit</span>
                <span className="text-xs text-indigo-200 mt-1">2026 Edition • Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlekWorldHeroShowcase;
