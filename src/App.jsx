import React, { useState } from 'react';
import { 
  Header_TeamSync,
  Header_Nurap,
  Header_UntitledUI,
  Header_BlekWorld,
  Header1_PillDark, 
  Header2_SlidingPill, 
  Header3_GlowBorder, 
  Header4_MinimalLight, 
  Header5_DynamicIsland 
} from './components/headers';
import { 
  Check, 
  Copy, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Code2,
  ExternalLink
} from 'lucide-react';

const headersList = [
  {
    id: 'header-teamsync',
    name: 'TeamSync (Center Logo)',
    tag: 'New Reference 1',
    description: 'Clean white header with links on left, centered TeamSync star emblem logo, and Log In / dark pill Sign Up on right.',
    component: Header_TeamSync,
    bg: 'bg-slate-100',
  },
  {
    id: 'header-nurap',
    name: 'NURAP (Minimal Luxury Editorial)',
    tag: 'New Reference 2',
    description: 'Ultra-minimalist editorial header with two-line MANU toggle on left, spaced serif NURAP in center, and CONTACT ✉ on right.',
    component: Header_Nurap,
    bg: 'bg-[#edf1ed]',
  },
  {
    id: 'header-untitledui',
    name: 'Untitled UI (Fintech Pill)',
    tag: 'New Reference 3',
    description: 'Starburst badge logo, dropdown navigation links, and dark pill Get Started button with lightning bolt icon.',
    component: Header_UntitledUI,
    bg: 'bg-[#e3e6dc]',
  },
  {
    id: 'header-blek',
    name: 'Blek World (Curved Scoop)',
    tag: 'Curved S-Cut',
    description: 'Blek white badge logo with signature organic S-curve scoop leading into the purple "Register Now" ↗ button.',
    component: Header_BlekWorld,
    bg: 'bg-[#eceaf8]',
  },
  {
    id: 'header-sorun',
    name: 'SoRun (Floating Black Capsule)',
    tag: 'Pill Bar',
    description: 'Floating black pill, spiral swirl logo, pastel lavender active capsule, dark login, and mint-green sign up.',
    component: Header1_PillDark,
    bg: 'bg-[#ebedf0]',
  },
  {
    id: 'header-liquid',
    name: 'Liquid Sliding Pill',
    tag: 'Fluid Motion',
    description: 'Frosted glassmorphic container with fluid hover-following indicator and gradient accent badges.',
    component: Header2_SlidingPill,
    bg: 'bg-zinc-950',
  },
  {
    id: 'header-glow',
    name: 'Cyberpunk Ambient Glow',
    tag: 'Neon Border',
    description: 'Animated gradient neon border with underline sweep animation and pulsing glow buttons.',
    component: Header3_GlowBorder,
    bg: 'bg-[#060608]',
  },
  {
    id: 'header-minimal',
    name: 'Minimal Light Capsule',
    tag: 'Clean & Crisp',
    description: 'Modern white floating pill with pulsing dot indicators, crisp elevation, and inverted actions.',
    component: Header4_MinimalLight,
    bg: 'bg-slate-100',
  },
  {
    id: 'header-island',
    name: 'Dynamic Island Expandable',
    tag: 'Micro-Interactions',
    description: 'Compact island header with inline search toggle, active ping badges, and quick actions.',
    component: Header5_DynamicIsland,
    bg: 'bg-zinc-900',
  },
];

export function App() {
  const [selectedHeaderId, setSelectedHeaderId] = useState('header-teamsync');
  const [viewMode, setViewMode] = useState('single'); // 'single' | 'all'
  const [deviceSize, setDeviceSize] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'
  const [copied, setCopied] = useState(false);

  const activeHeader = headersList.find((h) => h.id === selectedHeaderId) || headersList[0];
  const ActiveComponent = activeHeader.component;

  const handleCopyCode = () => {
    const importCode = `import { ${activeHeader.component.name} } from './components/headers';\n\n<${activeHeader.component.name} />`;
    navigator.clipboard?.writeText(importCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getContainerWidth = () => {
    if (deviceSize === 'mobile') return 'max-w-[390px]';
    if (deviceSize === 'tablet') return 'max-w-[768px]';
    return 'w-full';
  };

  return (
    <div className="min-h-screen bg-[#f3f4f8] text-slate-800 flex flex-col font-sans">
      {/* Top Banner / Studio Toolbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-3.5 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center font-bold text-sm shadow-md">
              H
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-900 leading-tight flex items-center gap-2">
                Responsive Headers Suite
                <span className="text-[11px] font-semibold bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full border border-indigo-100">
                  React + Tailwind
                </span>
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                Centralized Data: <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-600 font-mono text-[11px]">src/data/headerData.js</code>
              </p>
            </div>
          </div>

          {/* Controls: Device Viewport Switcher + Mode Switcher */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Device Viewport Toggle */}
            <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1 border border-slate-200/60">
              <button
                onClick={() => setDeviceSize('desktop')}
                title="Desktop View (Full Width)"
                className={`p-1.5 px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                  deviceSize === 'desktop'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Desktop</span>
              </button>
              <button
                onClick={() => setDeviceSize('tablet')}
                title="Tablet View (768px)"
                className={`p-1.5 px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                  deviceSize === 'tablet'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tablet</span>
              </button>
              <button
                onClick={() => setDeviceSize('mobile')}
                title="Mobile View (390px)"
                className={`p-1.5 px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                  deviceSize === 'mobile'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>

            {/* Mode Switcher */}
            <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1 border border-slate-200/60">
              <button
                onClick={() => setViewMode('single')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  viewMode === 'single'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Single Header
              </button>
              <button
                onClick={() => setViewMode('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  viewMode === 'all'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                View All ({headersList.length})
              </button>
            </div>

            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 bg-black hover:bg-slate-800 text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition shadow-sm active:scale-95 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>
        </div>

        {/* Header Variation Pills Selector */}
        {viewMode === 'single' && (
          <div className="max-w-7xl mx-auto mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {headersList.map((header) => {
              const isSelected = selectedHeaderId === header.id;
              return (
                <button
                  key={header.id}
                  onClick={() => setSelectedHeaderId(header.id)}
                  className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-black text-white shadow-md shadow-black/10 scale-[1.02]'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  <span>{header.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {header.tag}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Main Content Area - Just the Responsive Headers, No Hero Section */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-8 flex flex-col gap-8">
        {viewMode === 'single' ? (
          <div className="flex flex-col gap-6">
            {/* Header Stage Canvas with simulated device viewport */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden transition-all">
              {/* Header Canvas */}
              <div className={`p-4 sm:p-12 transition-colors duration-300 min-h-[160px] flex items-center justify-center ${activeHeader.bg}`}>
                <div className={`transition-all duration-300 mx-auto ${getContainerWidth()}`}>
                  <ActiveComponent />
                </div>
              </div>

              {/* Information Bar */}
              <div className="p-6 bg-white border-t border-slate-100 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-slate-900">
                      {activeHeader.name}
                    </h2>
                    <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-emerald-100 text-emerald-800">
                      {activeHeader.tag}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 uppercase">
                      Device Viewport: {deviceSize}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                    {activeHeader.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full lg:w-auto">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono text-slate-700 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-indigo-500" />
                    <span>src/components/headers/{activeHeader.component.name}.jsx</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* View All Headers Side-by-Side */
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">All {headersList.length} Responsive Headers</h2>
                <p className="text-sm text-slate-600">
                  Showing all headers for viewport: <span className="font-semibold uppercase text-indigo-600">{deviceSize}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {headersList.map((header, idx) => {
                const Component = header.component;
                return (
                  <div key={header.id} className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
                    <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-sm font-bold text-slate-900">{header.name}</span>
                        <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-200 text-slate-700">
                          {header.tag}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 font-mono">
                        {header.component.name}.jsx
                      </span>
                    </div>

                    <div className={`p-4 sm:p-10 ${header.bg}`}>
                      <div className={`transition-all duration-300 mx-auto ${getContainerWidth()}`}>
                        <Component />
                      </div>
                    </div>

                    <div className="px-6 py-3 bg-white border-t border-slate-100 text-xs text-slate-600">
                      {header.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 border-t border-slate-200 bg-white text-center text-xs text-slate-500">
        Responsive Header Collection • Built with React & Tailwind CSS • Ready for production
      </footer>
    </div>
  );
}

export default App;
