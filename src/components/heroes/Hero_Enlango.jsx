import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  Check,
  Plus,
  BookOpen,
  Globe2,
  Users,
  Sparkles,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { useIsMobile } from './useIsMobile';

export const Hero_Enlango = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSkills, setActiveSkills] = useState(['Listening', 'Speaking']);
  const [courseType, setCourseType] = useState('group'); // 'group' | 'one-to-one'
  const [showSignupModal, setShowSignupModal] = useState(false);

  const toggleSkill = (skill) => {
    setActiveSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-white text-slate-900 border border-slate-200/80 shadow-2xl font-jakarta">
      {/* Top Navigation Bar */}
      <header className="relative z-30 px-5 sm:px-12 py-4 sm:py-5 flex items-center justify-between border-b border-slate-100">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer group">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white">
            <div className="grid grid-cols-2 gap-0.5">
              <span className="w-1.5 h-1.5 bg-white rounded-xs" />
              <span className="w-1.5 h-1.5 bg-blue-200 rounded-xs" />
              <span className="w-1.5 h-1.5 bg-blue-200 rounded-xs" />
              <span className="w-1.5 h-1.5 bg-white rounded-xs" />
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            enlango
          </span>
        </div>

        {/* Desktop Nav Links */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600">
            <a href="#courses" className="hover:text-slate-900 px-3 py-1 transition">Courses</a>
            <span className="text-slate-300">•</span>
            <a href="#about" className="hover:text-slate-900 px-3 py-1 transition">About</a>
            <span className="text-slate-300">•</span>
            <a href="#pricing" className="hover:text-slate-900 px-3 py-1 transition">Pricing</a>
            <span className="text-slate-300">•</span>
            <a href="#contact" className="hover:text-slate-900 px-3 py-1 transition">Contact</a>
          </nav>
        )}

        {/* Right CTA / Mobile Toggle */}
        <div className="flex items-center gap-3">
          {!isMobile && (
            <>
              <button className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition cursor-pointer">
                Login
              </button>
              <button
                onClick={() => setShowSignupModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition shadow-md shadow-blue-500/20 active:scale-95 cursor-pointer"
              >
                Get Started
              </button>
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
              className="absolute top-full left-0 right-0 z-40 bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-6 py-5 flex flex-col gap-3 shadow-2xl text-left"
            >
              <a href="#courses" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-slate-700 hover:text-blue-600 py-1">Courses</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-slate-700 hover:text-blue-600 py-1">About</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-slate-700 hover:text-blue-600 py-1">Pricing</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-slate-700 hover:text-blue-600 py-1">Contact</a>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowSignupModal(true);
                  }}
                  className="w-full py-2.5 rounded-full bg-blue-600 text-white font-bold text-xs shadow-md transition cursor-pointer"
                >
                  Get Started Free
                </button>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2 rounded-full border border-slate-200 text-slate-700 font-semibold text-xs transition cursor-pointer"
                >
                  Login to Account
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Hero Container */}
      <div className="px-5 sm:px-12 pt-6 sm:pt-14 pb-10 sm:pb-14 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Human Typography & Authentic Editorial Feel */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* TrustPilot Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-slate-200 bg-white text-[11px] sm:text-xs font-semibold text-slate-700 shadow-xs mb-4 sm:mb-6">
              <div className="w-4 h-4 rounded bg-emerald-500 text-white flex items-center justify-center text-[10px]">
                ★
              </div>
              <span><strong>4.9</strong> on TrustPilot</span>
            </div>

            {/* Headline with Inline Avatar Pill and Italic Serif Accent Word */}
            <h1 className={`${isMobile ? 'text-2xl sm:text-3xl leading-tight' : 'text-3xl sm:text-5xl lg:text-6xl leading-[1.12]'} font-extrabold tracking-tight text-slate-950`}>
              Connect with <br />
              the{' '}
              {/* Inline Avatar Pill matching screenshot */}
              <span className="inline-flex items-center align-middle bg-slate-100 rounded-full px-1.5 py-0.5 sm:py-1 -mt-1 mx-1 border border-slate-200">
                <span className="flex -space-x-1.5 sm:-space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
                    alt="Student"
                    className="w-5 h-5 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                    alt="Student"
                    className="w-5 h-5 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
                    alt="Student"
                    className="w-5 h-5 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                  />
                </span>
              </span>{' '}
              <span className="font-editorial-italic font-normal text-blue-600 underline decoration-blue-200 underline-offset-4">
                World
              </span> <br />
              Through Words
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-6 text-xs sm:text-base text-slate-600 max-w-lg leading-relaxed font-normal">
              Learn to express yourself confidently and open doors to new opportunities everywhere.
            </p>

            {/* CTA Button */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setShowSignupModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition shadow-lg shadow-blue-500/25 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Interactive Skills Toggles matching screenshot */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-100 w-full">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-800">
                  Select Focus Skills (Interactive):
                </span>
                <span className="text-[11px] text-blue-600 font-semibold">
                  {activeSkills.length} selected
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Listening', 'Reading', 'Speaking', 'Grammar', 'Vocabulary'].map((skill) => {
                  const isSelected = activeSkills.includes(skill);
                  return (
                    <button
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {isSelected ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                      <span>{skill}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Human Student Photo */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Background Blob */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/80 via-indigo-50 to-amber-50 rounded-3xl -rotate-1 transform scale-95" />

            {/* Main Visual Card */}
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white max-w-md w-full">
              <img
                src="/assets/enlango-student.jpg"
                alt="Student learning language"
                className="w-full h-auto aspect-4/5 object-cover object-top"
              />

              {/* Floating Review Card Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                    A1
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Elementary to Fluent</div>
                    <div className="text-[11px] text-slate-500">12-week verified roadmap</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-emerald-600">98% Success</div>
                  <div className="text-[10px] text-slate-400">CEFR Certified</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {showSignupModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-left border border-slate-100"
            >
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-lg">Start Free Language Trial</h3>
                <button
                  onClick={() => setShowSignupModal(false)}
                  className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="py-4 space-y-3">
                <p className="text-xs text-slate-600">
                  Select your learning focus to tailor your first 3 complimentary 1-on-1 native speaker sessions.
                </p>
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-xs text-blue-900">
                  <strong>Active Skill Focus:</strong> {activeSkills.join(', ') || 'General Fluency'}
                </div>
              </div>

              <button
                onClick={() => {
                  setShowSignupModal(false);
                  alert('Welcome to Enlango! Check your inbox for your trial login.');
                }}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition shadow-md cursor-pointer text-xs"
              >
                Claim Free Trial
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero_Enlango;
