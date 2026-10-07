import React, { useState } from 'react';
import { Mail, X } from 'lucide-react';
import { nurapHeaderData } from '../../data/headerData';

export const Header_Nurap = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { brand, menuLabel, contact, navigation } = nurapHeaderData;

  return (
    <header className="w-full bg-[#edf1ed] text-zinc-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <nav 
          className="relative py-5 flex items-center justify-between border-b border-zinc-300/70"
          aria-label="Nurap Luxury Navigation"
        >
          {/* Left: Two-line Minimalist Hamburger + MANU */}
          <div className="flex-1 flex justify-start">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="group flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-widest text-zinc-800 hover:text-black uppercase cursor-pointer py-1"
              aria-label="Toggle Menu"
            >
              {menuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <div className="flex flex-col gap-[4px] w-4.5 sm:w-5">
                  <span className="w-full h-[1.5px] bg-zinc-900 transition-all duration-300 group-hover:w-3/4" />
                  <span className="w-full h-[1.5px] bg-zinc-900 transition-all duration-300 group-hover:w-full" />
                </div>
              )}
              <span className="select-none font-medium">{menuLabel}</span>
            </button>
          </div>

          {/* Center: NURAP Serif Brand */}
          <div className="flex-1 text-center">
            <a 
              href={brand.href} 
              className="font-serif text-xl sm:text-2xl font-normal tracking-[0.25em] sm:tracking-[0.3em] text-zinc-950 uppercase hover:opacity-80 transition-opacity"
            >
              {brand.name}
            </a>
          </div>

          {/* Right: CONTACT with Mail Icon */}
          <div className="flex-1 flex justify-end">
            <a
              href={contact.href}
              className="group flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-zinc-800 hover:text-black uppercase transition-colors py-1"
            >
              <span className="font-medium select-none">{contact.label}</span>
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-800 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </nav>
      </div>

      {/* Editorial Expandable Menu Drawer */}
      {menuOpen && (
        <div className="bg-[#edf1ed] border-b border-zinc-300/80 px-6 sm:px-12 py-8 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center sm:text-left">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-semibold block mb-3">
                Index
              </span>
              <ul className="flex flex-col gap-2">
                {navigation.slice(0, 3).map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-serif text-lg text-zinc-800 hover:text-black hover:italic transition-all"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-semibold block mb-3">
                Atelier
              </span>
              <ul className="flex flex-col gap-2">
                {navigation.slice(3).map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-serif text-lg text-zinc-800 hover:text-black hover:italic transition-all"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2 md:col-span-1 border-t sm:border-t-0 border-zinc-200/60 pt-4 sm:pt-0">
              <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-semibold block mb-3">
                Direct Inquiry
              </span>
              <p className="text-xs text-zinc-600 leading-relaxed font-sans mb-3">
                For private appointments and curated commissions worldwide.
              </p>
              <a
                href="#inquire"
                className="inline-block text-xs font-semibold tracking-widest uppercase border-b border-zinc-900 pb-0.5 text-zinc-900 hover:text-zinc-600"
              >
                Inquire With Studio &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header_Nurap;
