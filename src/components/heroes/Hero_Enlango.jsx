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
  ArrowRight
} from 'lucide-react';

export const Hero_Enlango = () => {
  // Interactive skills toggles
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
      <header className="px-6 sm:px-12 py-5 flex items-center justify-between border-b border-slate-100">
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

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600">
          <a href="#courses" className="hover:text-slate-900 px-3 py-1 transition">Courses</a>
          <span className="text-slate-300">•</span>
          <a href="#about" className="hover:text-slate-900 px-3 py-1 transition">About</a>
          <span className="text-slate-300">•</span>
          <a href="#pricing" className="hover:text-slate-900 px-3 py-1 transition">Pricing</a>
          <span className="text-slate-300">•</span>
          <a href="#contact" className="hover:text-slate-900 px-3 py-1 transition">Contact</a>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition cursor-pointer">
            Login
          </button>
          <button
            onClick={() => setShowSignupModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition shadow-md shadow-blue-500/20 active:scale-95 cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Main Hero Container */}
      <div className="px-6 sm:px-12 pt-8 sm:pt-14 pb-14 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Human Typography & Authentic Editorial Feel */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* TrustPilot Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-700 shadow-xs mb-6">
              <div className="w-4 h-4 rounded bg-emerald-500 text-white flex items-center justify-center text-[10px]">
                ★
              </div>
              <span><strong>4.9</strong> on TrustPilot</span>
            </div>

            {/* Headline with Inline Avatar Pill and Italic Serif Accent Word */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12]">
              Connect with <br />
              the{' '}
              {/* Inline Avatar Pill matching screenshot */}
              <span className="inline-flex items-center align-middle bg-slate-100 rounded-full px-1.5 py-1 -mt-1 mx-1 border border-slate-200">
                <span className="flex -space-x-1.5 sm:-space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
                    alt="Student"
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                    alt="Student"
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
                    alt="Student"
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                  />
                </span>
              </span>{' '}
              <span className="font-editorial-italic font-normal text-blue-600 text-3xl sm:text-5xl lg:text-6xl underline decoration-blue-200 underline-offset-4">
                World
              </span> <br />
              Through Words
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed font-normal">
              Learn to express yourself confidently and open doors to new opportunities everywhere.
            </p>

            {/* CTA Button */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setShowSignupModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-full transition shadow-lg shadow-blue-500/25 active:scale-95 cursor-pointer"
              >
                Get Started - For Free!
              </button>
            </div>

            {/* Bottom 3 Authentic Metrics */}
            <div className="mt-14 pt-8 border-t border-slate-100 grid grid-cols-3 gap-6 w-full max-w-md">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">100%</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">12+</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">100K+</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Active Students</div>
              </div>
            </div>
          </div>

          {/* Right Column: Warm Human Photography with Layered Interactive Badges */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg">
              {/* Main Student Portrait Image */}
              <div className="relative rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[3/4]">
                <img
                  src="/assets/enlango-student.jpg"
                  alt="Student smiling with laptop"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating Badge 1 (Top Right): Group Courses / One-to-One Session */}
              <div className="absolute top-8 -right-2 sm:-right-4 flex flex-col gap-2 z-20">
                <button
                  onClick={() => setCourseType('group')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold shadow-lg backdrop-blur-md transition-all cursor-pointer ${
                    courseType === 'group'
                      ? 'bg-white text-slate-900 border border-blue-500/30 ring-2 ring-blue-500/20'
                      : 'bg-white/90 text-slate-600 hover:bg-white'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>Group Courses</span>
                </button>

                <button
                  onClick={() => setCourseType('one-to-one')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold shadow-lg backdrop-blur-md transition-all cursor-pointer ${
                    courseType === 'one-to-one'
                      ? 'bg-white text-slate-900 border border-blue-500/30 ring-2 ring-blue-500/20'
                      : 'bg-white/90 text-slate-600 hover:bg-white'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>One-to-One Session</span>
                </button>
              </div>

              {/* Floating Badge 2 (Center Left): 50+ Global Language Support */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute top-1/3 left-0 sm:-left-8 bg-blue-600 text-white p-3.5 sm:p-5 rounded-2xl shadow-xl z-20 text-left max-w-[130px] sm:max-w-[150px]"
              >
                <div className="text-xl sm:text-3xl font-extrabold tracking-tight">50+</div>
                <div className="text-[10px] sm:text-xs text-blue-100 font-medium leading-tight mt-1">
                  Global Language Support
                </div>
              </motion.div>

              {/* Floating Badge 3 (Middle Bottom): Add Your Skills with interactive chip toggles */}
              <div className="absolute bottom-12 left-0 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-100 p-3 sm:p-4 rounded-2xl shadow-xl z-20 text-left max-w-[280px]">
                <span className="text-xs font-bold text-slate-900 block mb-1.5">Add your skills</span>
                <div className="flex flex-wrap gap-1">
                  {['Listening', 'Reading', 'Speaking'].map((skill) => {
                    const isSelected = activeSkills.includes(skill);
                    return (
                      <button
                        key={skill}
                        onClick={() => toggleSkill(skill)}
                        className={`text-[11px] sm:text-xs px-2.5 py-1 rounded-full font-medium transition cursor-pointer flex items-center gap-1 ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200/60'
                        }`}
                      >
                        {isSelected ? (
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        ) : (
                          <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-500" />
                        )}
                        <span>{skill}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Floating Badge 4 (Bottom Right): 1500+ free Lessons */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-3 right-0 sm:-right-6 bg-blue-600 text-white p-3.5 sm:p-5 rounded-2xl shadow-xl z-20 text-left max-w-[140px] sm:max-w-[160px]"
              >
                <div className="text-xl sm:text-3xl font-extrabold tracking-tight">1500+</div>
                <div className="text-[10px] sm:text-xs text-blue-100 font-medium leading-tight mt-1">
                  free Lessons for Student
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
                  className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center"
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
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition shadow-md"
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
