import React, { useState } from 'react';
import { 
  Header_DeeperSignals,
  Header_Gencio,
  Header_LotusPill,
  Header_Connect,
  Header_EstateLand,
  Header_FundBux,
  Header_FinanDox,
  Header_Auralytica,
  Header_DataPress,
  Header_Shoes,
  Header_Nexum,
  Header_Healance,
  Header_Mathim,
  Header_EasyWeek,
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
  Code2
} from 'lucide-react';

const headersList = [
  {
    id: 'header-deepersignals',
    name: 'Deeper Signals (Magenta Gradient)',
    tag: 'Latest 1',
    description: 'Vibrant crimson/magenta gradient header with 3D wireframe polyhedral gem logo, white Contact ↗ pill, and clean navigation.',
    component: Header_DeeperSignals,
    bg: 'bg-gradient-to-r from-rose-900 via-pink-900 to-rose-950',
  },
  {
    id: 'header-gencio',
    name: 'GENCiO (Announcement + Bold Bar)',
    tag: 'Latest 2',
    description: 'Dual-tier header with top purple announcement carousel bar and white main bar featuring bold uppercase links, email, and red Get Quote button.',
    component: Header_Gencio,
    bg: 'bg-slate-100',
  },
  {
    id: 'header-lotuspill',
    name: 'Lotus (Skeuomorphic Capsule Pill)',
    tag: 'Latest 3',
    description: 'Coral lotus emblem with floating dark skeuomorphic pill bar, inset embossed Feature tab, and circular 4-square app grid button.',
    component: Header_LotusPill,
    bg: 'bg-slate-200',
  },
  {
    id: 'header-connect',
    name: 'Connect. (Modern E-Commerce)',
    tag: 'Latest 4',
    description: 'Minimal e-commerce header with orange dot brand logo, wide spaced navigation, and quick search, account, wishlist, and cart action icons.',
    component: Header_Connect,
    bg: 'bg-white',
  },
  {
    id: 'header-estateland',
    name: 'Estate Land (Sky Blue Real Estate)',
    tag: 'Real Estate',
    description: 'Symmetrical real estate layout on soft sky blue with cursive script logo, active teal underline, and balanced navigation.',
    component: Header_EstateLand,
    bg: 'bg-[#d2e8f4]',
  },
  {
    id: 'header-fundbux',
    name: 'FundBux (Charity Foundation)',
    tag: 'Charity',
    description: 'Dual-tier non-profit header with top contact utility bar, colorful raising hands emblem, active red tab, and golden Donate button.',
    component: Header_FundBux,
    bg: 'bg-white',
  },
  {
    id: 'header-finandox',
    name: 'FinanDox. (Corporate Ribbon)',
    tag: 'Corporate',
    description: 'Corporate dual-tier header: top navy bar with contact details and Get A Quote pill, plus bottom vibrant terracotta orange navigation ribbon.',
    component: Header_FinanDox,
    bg: 'bg-[#09111c]',
  },
  {
    id: 'header-auralytica',
    name: 'AURALYTICA (Enterprise AI)',
    tag: 'AI Dark',
    description: 'Futuristic enterprise AI dark header with centered diamond matrix emblem, symmetrical navigation links, and Watch Demo pill.',
    component: Header_Auralytica,
    bg: 'bg-[#0a0a0d]',
  },
  {
    id: 'header-datapress',
    name: 'DataPress. (Angled Ribbon)',
    tag: 'Data Science',
    description: 'Data science header with royal blue angled trapezoid top ribbon, geometric nodes emblem, and boxed Get A Quote button with arrow square.',
    component: Header_DataPress,
    bg: 'bg-slate-100',
  },
  {
    id: 'header-shoes',
    name: 'SHOES (Sneaker Brand)',
    tag: 'E-Commerce',
    description: 'Minimalist sneaker brand header with high-top shoe silhouette logo, black pill active Home tab, and search/cart buttons.',
    component: Header_Shoes,
    bg: 'bg-white',
  },
  {
    id: 'header-nexum',
    name: 'NEXUM™ (Agency Dark Bar)',
    tag: 'Agency',
    description: 'Dark slate bar with bold uppercase NEXUM™ typography, wide-spaced nav links, and white pill "Get in touch" with arrow.',
    component: Header_Nexum,
    bg: 'bg-[#0f1013]',
  },
  {
    id: 'header-healance',
    name: 'Healance (Frosted Wellness)',
    tag: 'Wellness',
    description: 'Translucent glassmorphic header on outdoor nature backdrop with 4-square cross emblem and dual pill buttons.',
    component: Header_Healance,
    bg: 'bg-gradient-to-r from-stone-800 via-neutral-800 to-zinc-800',
  },
  {
    id: 'header-mathim',
    name: 'MATHIM (EdTech Ribbon)',
    tag: 'EdTech',
    description: 'Pastel mint gradient header with checkmark MATHIM logo and signature angled polygon "Join Today!" ribbon button.',
    component: Header_Mathim,
    bg: 'bg-[#edf7f1]',
  },
  {
    id: 'header-easyweek',
    name: 'EasyWeek (Octopus Pill)',
    tag: 'SaaS Pill',
    description: 'Floating black rounded bar with line-art octopus emblem, vibrant green "Why EasyWeek" highlight, and white Sign up pill.',
    component: Header_EasyWeek,
    bg: 'bg-slate-200',
  },
  {
    id: 'header-teamsync',
    name: 'TeamSync (Center Logo)',
    tag: 'Team Sync',
    description: 'Clean white header with links on left, centered TeamSync star emblem logo, and Log In / dark pill Sign Up on right.',
    component: Header_TeamSync,
    bg: 'bg-slate-100',
  },
  {
    id: 'header-nurap',
    name: 'NURAP (Luxury Editorial)',
    tag: 'Editorial',
    description: 'Ultra-minimalist editorial header with two-line MANU toggle on left, spaced serif NURAP in center, and CONTACT ✉ on right.',
    component: Header_Nurap,
    bg: 'bg-[#edf1ed]',
  },
  {
    id: 'header-untitledui',
    name: 'Untitled UI (Fintech Pill)',
    tag: 'Fintech',
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
  const [selectedHeaderId, setSelectedHeaderId] = useState('header-deepersignals');
  const [viewMode, setViewMode] = useState('single'); // 'single' | 'all'
  const [deviceSize, setDeviceSize] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'
  const [copied, setCopied] = useState(false);

  const activeHeader = headersList.find((h) => h.id === selectedHeaderId) || headersList[0];
  const ActiveComponent = activeHeader.component;

  const isForcedMobile = deviceSize === 'mobile';

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
                  {headersList.length} Headers • React + Tailwind
                </span>
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                Side Slider Drawer On Mobile • Shared Data: <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-600 font-mono text-[11px]">src/data/headerData.js</code>
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
                <span className="hidden sm:inline">Mobile (Side Slider)</span>
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

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-8 flex flex-col gap-8">
        {viewMode === 'single' ? (
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden transition-all">
              <div className={`p-4 sm:p-12 transition-colors duration-300 min-h-[160px] flex items-center justify-center ${activeHeader.bg}`}>
                <div className={`transition-all duration-300 mx-auto ${getContainerWidth()}`}>
                  <ActiveComponent forcedMobile={isForcedMobile} />
                </div>
              </div>

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
                        <Component forcedMobile={isForcedMobile} />
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
        Responsive Header Collection • Built with React & Tailwind CSS • 23 Production Headers Ready
      </footer>
    </div>
  );
}

export default App;
