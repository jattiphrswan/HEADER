import React, { useEffect } from 'react';
import { X, ChevronRight } from 'lucide-react';

/**
 * Reusable off-canvas Mobile Side Slider Drawer
 * Smooth slide-in from right with backdrop blur overlay
 */
export const MobileSideDrawer = ({
  isOpen,
  onClose,
  brand,
  navigation = [],
  actions = null,
  activeId,
  onSelect,
  theme = 'dark', // 'dark' | 'light'
}) => {
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isLight = theme === 'light';

  return (
    <div className="fixed inset-0 z-[9999] flex justify-end">
      {/* Backdrop with fade-in */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        aria-hidden="true"
      />

      {/* Side Slider Panel */}
      <aside 
        className={`relative z-10 w-[320px] sm:w-[380px] max-w-[85vw] h-full flex flex-col justify-between p-6 shadow-2xl transition-transform duration-300 ease-out animate-in slide-in-from-right ${
          isLight 
            ? 'bg-white text-zinc-900 border-l border-zinc-200' 
            : 'bg-[#111114] text-white border-l border-neutral-800'
        }`}
        aria-label="Mobile Navigation Drawer"
      >
        {/* Top: Brand & Close Button */}
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-zinc-200/10">
            <div className="flex items-center gap-2">
              {brand}
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                isLight 
                  ? 'hover:bg-zinc-100 text-zinc-600 hover:text-black' 
                  : 'hover:bg-neutral-800 text-neutral-400 hover:text-white'
              }`}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col gap-1.5" aria-label="Mobile Links">
            {navigation.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    if (onSelect) onSelect(item);
                    onClose();
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                    isActive
                      ? isLight 
                        ? 'bg-zinc-100 text-black' 
                        : 'bg-white/10 text-white'
                      : isLight
                        ? 'text-zinc-600 hover:text-black hover:bg-zinc-50'
                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                    {item.badge && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold">
                        {item.badge}
                      </span>
                    )}
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom: Auth Actions */}
        {actions && (
          <div className="pt-6 border-t border-zinc-200/10 flex flex-col gap-3">
            {actions}
          </div>
        )}
      </aside>
    </div>
  );
};

export default MobileSideDrawer;
