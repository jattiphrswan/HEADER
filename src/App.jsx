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
  Hero_FirstTransport,
  Hero_NorwegianCruise,
  Hero_SunEco,
  Hero_PrimadonaRealEstate,
  Hero_StylecraftDesign,
  Hero_Enlango,
  Hero_FinBusiness,
  Hero_Dreamflux,
  Hero_SynexWealth,
  Hero_CyberGridAI,
  Hero_AuraCreative,
  Hero_LuminaSpatial,
  Hero_SaaSHyperScale
} from './components/heroes';
import { 
  Check, 
  Copy, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Code2,
  Sparkles,
  Layers,
  LayoutTemplate,
  Flame,
  ExternalLink,
  SlidersHorizontal,
  Zap,
  Info,
  Type
} from 'lucide-react';

const heroesList = [
  {
    id: 'hero-firsttransport',
    name: 'First Transport (Logistics & Haulage)',
    tag: 'Haulage Logistics',
    highlight: 'Truck & Highway',
    font: 'Plus Jakarta Sans (Bold Grotesque)',
    colorScheme: 'Open Highway Green & Deep Dark',
    description: 'High-impact heavy haulage transport hero with white semi-trailer truck highway backdrop, bold typography, dispatch modal, and Australian logistics metrics.',
    component: Hero_FirstTransport,
    libraries: ['Motion', 'Lucide React', 'Tailwind CSS'],
    interactivity: 'Contact Us / Learn More triggers, dispatch category picker, fleet availability status.'
  },
  {
    id: 'hero-norwegiancruise',
    name: 'Norwegian Cruise (Luxury Ocean)',
    tag: 'Luxury Travel',
    highlight: 'Aerial Ocean Ship',
    font: 'Playfair Display Italic + Plus Jakarta Sans',
    colorScheme: 'Deep Ocean Azure & Frosted Mist',
    description: 'Breathtaking ocean voyage hero with aerial top-down cruise ship backdrop, elegant serif italic headline, interactive video reel modal, and stateroom booking drawer.',
    component: Hero_NorwegianCruise,
    libraries: ['Motion', 'Lucide React', 'Tailwind CSS'],
    interactivity: 'Interactive pulsing Play button opening 4K voyage video reel, stateroom class booking drawer, animated scroll cue.'
  },
  {
    id: 'hero-suneco',
    name: 'SunEco (Clean Future Energy)',
    tag: 'Clean Energy',
    highlight: '3D Eco Diorama',
    font: 'Plus Jakarta Sans (Crisp Modern)',
    colorScheme: 'Fresh Eco Mint & Clean Sage',
    description: 'Clean energy transition hero featuring 3D miniature eco-village landscape diorama with wind turbines and solar panels, plus interactive 25-year solar savings calculator.',
    component: Hero_SunEco,
    libraries: ['Motion', 'Lucide React', 'Tailwind CSS'],
    interactivity: 'Interactive electric bill slider ($80-$800/mo) calculating 25-year grid savings live, free site survey modal.'
  },
  {
    id: 'hero-primadona',
    name: 'Primadona (Luxury Architecture)',
    tag: 'Real Estate Villa',
    highlight: 'Twilight Glass Villa',
    font: 'Plus Jakarta Sans Bold',
    colorScheme: 'Twilight Blue Hour & Warm Interior Gold',
    description: 'Prestigious architecture hero with evening illuminated glass villa backdrop, interactive glassmorphic property filter bar (Location, Price, Type), and viewing scheduler.',
    component: Hero_PrimadonaRealEstate,
    libraries: ['Motion', 'Lucide React', 'Tailwind CSS'],
    interactivity: 'Interactive location dropdown, price budget input, property type filter, and private villa tour scheduler.'
  },
  {
    id: 'hero-stylecraft',
    name: 'Stylecraft Design (Minimalist Furniture)',
    tag: 'Interior Design',
    highlight: 'Curved Frame & Sofa',
    font: 'Syne Display + Plus Jakarta Sans',
    colorScheme: 'Charcoal Velvet & Warm Oak',
    description: 'Bespoke Scandinavian interior hero with signature curved outer frame, matte dark living room aesthetic, coral action button, and live upholstery fabric customizer.',
    component: Hero_StylecraftDesign,
    libraries: ['Motion', 'Lucide React', 'Tailwind CSS'],
    interactivity: 'Interactive upholstery color swatches (Charcoal, Oatmeal, Forest), Explore More modal, free fabric sample box order.'
  },
  {
    id: 'hero-enlango',
    name: 'Enlango (Language Learning)',
    tag: 'EdTech Editorial',
    highlight: 'Human Student Photo',
    font: 'Playfair Display Italic + Plus Jakarta Sans',
    colorScheme: 'Royal Blue (#2563eb) & Crisp White',
    description: 'Human-crafted language platform with inline avatar pill inside headline, elegant blue italic serif typography, TrustPilot badge, and interactive skill chips.',
    component: Hero_Enlango,
    libraries: ['Motion', 'Lucide React', 'Tailwind CSS', 'Google Fonts'],
    interactivity: 'Clickable skill badges (+ Listening, + Reading, + Speaking), Group vs 1-to-1 session toggle, and free trial registration modal.'
  },
  {
    id: 'hero-finbusiness',
    name: 'FinApp (Business Multi-Currency)',
    tag: 'Fintech SaaS',
    highlight: 'Currency Calculator',
    font: 'Plus Jakarta Sans (Geometric Humanist)',
    colorScheme: 'High-Contrast Monochrome & Slate',
    description: 'Clean business banking hero with multi-currency conversion calculator, real mid-market exchange rates, and interactive bar chart with tooltip hover.',
    component: Hero_FinBusiness,
    libraries: ['Motion', 'Lucide React', 'Tailwind CSS', 'Google Fonts'],
    interactivity: 'Interactive send amount calculator, currency dropdown (AUD, EUR, GBP, JPY), live exchange rate math, and hoverable chart bars.'
  },
  {
    id: 'hero-dreamflux',
    name: 'Dreamflux.ai (Generative Visuals)',
    tag: 'Creative AI',
    highlight: 'Masonry Artwork Grid',
    font: 'Syne (Editorial Modern) + Plus Jakarta Sans',
    colorScheme: 'Modern Minimalist Pure White & Black',
    description: 'Ultra-clean creative visual platform hero with architectural editorial masonry artwork grid, interactive prompt remixer, and lightbox detail modal.',
    component: Hero_Dreamflux,
    libraries: ['Motion', 'Lucide React', 'Tailwind CSS', 'Google Fonts'],
    interactivity: 'Click any artwork in the masonry grid to open lightbox modal with full prompt metadata, quick prompt generation input field.'
  },
  {
    id: 'hero-synex',
    name: 'Synex Wealth Management',
    tag: 'Wealth & 3D Glass',
    highlight: 'Nordic 3D Landscape',
    font: 'Plus Jakarta Sans + Monospace',
    colorScheme: 'Cinematic Fjord & Frosted Dark Slate',
    description: 'Immersive wealth management hero with 3D perspective dashboard, interactive timeframe frequency bar chart, crypto asset selector, and bottom video player scrubber.',
    component: Hero_SynexWealth,
    libraries: ['Motion', 'HTML5 Canvas', 'Tailwind CSS', 'Lucide React'],
    interactivity: 'Play/Pause video timeline scrubber, click timeframes (1D, 1W, 1M, ALL), crypto asset pills, 3D mouse tilt, and Launch App modal.'
  },
  {
    id: 'hero-cybergrid',
    name: 'CyberGrid AI Neural Mesh',
    tag: 'WebGL 3D Tech',
    highlight: 'Three.js 3D WebGL',
    font: 'Space Grotesk + JetBrains Mono',
    colorScheme: 'Deep Space Obsidian & Cyan Neon',
    description: 'Dark sci-fi generative AI platform featuring a live interactive Three.js 3D rotating neural mesh with glowing vertices, prompt REPL code streamer, and live telemetry HUD.',
    component: Hero_CyberGridAI,
    libraries: ['Three.js (WebGL)', 'Motion', 'Tailwind CSS', 'Lucide React'],
    interactivity: 'Drag to rotate 3D mesh, switch AI models, adjust temperature slider, run live code inference, and switch wireframe colors.'
  },
  {
    id: 'hero-aura',
    name: 'Aura Creative Studio',
    tag: 'Creative Studio Bento',
    highlight: 'Physics + Confetti',
    font: 'Outfit + Plus Jakarta Sans',
    colorScheme: 'Dynamic Gradient Morpher',
    description: 'Dynamic design studio hero with draggable physics bento cards, real canvas-confetti particle blast, color theme morpher, and sound reactive audio waveform.',
    component: Hero_AuraCreative,
    libraries: ['Motion (Drag Physics)', 'Canvas-Confetti', 'Tailwind CSS', 'Lucide React'],
    interactivity: 'Drag stickers anywhere on screen, click Confetti Cannon or Join VIP for celebratory particles, toggle sound wave, switch theme palette.'
  },
  {
    id: 'hero-lumina',
    name: 'Lumina Spatial Hardware',
    tag: 'Spatial Hardware',
    highlight: '3D Hotspots',
    font: 'Instrument Serif & Space Grotesk',
    colorScheme: 'Titanium & Ambient Radial Teal',
    description: 'Spatial computing hardware showcase with mouse 3D depth tilt, pulsing interactive hardware pins revealing spec modals, finish colorway switcher, and checkout drawer.',
    component: Hero_LuminaSpatial,
    libraries: ['Motion', '3D Perspective Tilt', 'Tailwind CSS', 'Lucide React'],
    interactivity: 'Tilt device with cursor, click pins on the headset (Optics, M4 Neural Core, Audio), switch finish colors, test Reserve Lumina drawer.'
  },
  {
    id: 'hero-hyperscale',
    name: 'HyperScale Cloud & Dev Platform',
    tag: 'Cloud Infrastructure',
    highlight: 'Live Ticker + Pipeline',
    font: 'Plus Jakarta Sans + Monospace',
    colorScheme: 'Midnight Slate & Electric Sky Blue',
    description: 'Developer infrastructure hero with live global requests/sec counter, interactive 3-step zero-downtime deployment simulator, and edge topology ping map.',
    component: Hero_SaaSHyperScale,
    libraries: ['Motion', 'Live Animated Ticker', 'Tailwind CSS', 'Lucide React'],
    interactivity: 'Click "Deploy Demo" for live multi-step deployment animation, switch architecture tabs (CDN, Compute, Database), copy CLI install command.'
  }
];

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
  const [activeTab, setActiveTab] = useState('heroes'); // 'heroes' | 'headers' | 'pair'
  const [selectedHeroId, setSelectedHeroId] = useState('hero-firsttransport');
  const [selectedHeaderId, setSelectedHeaderId] = useState('header-deepersignals');
  const [viewMode, setViewMode] = useState('single'); // 'single' | 'all'
  const [deviceSize, setDeviceSize] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'
  const [copied, setCopied] = useState(false);

  const activeHero = heroesList.find((h) => h.id === selectedHeroId) || heroesList[0];
  const ActiveHeroComponent = activeHero.component;

  const activeHeader = headersList.find((h) => h.id === selectedHeaderId) || headersList[0];
  const ActiveHeaderComponent = activeHeader.component;

  const isForcedMobile = deviceSize === 'mobile';

  const handleCopyCode = () => {
    let code = '';
    if (activeTab === 'heroes') {
      code = `import { ${activeHero.component.name} } from './components/heroes';\n\n// Typography: ${activeHero.font}\n// Color Scheme: ${activeHero.colorScheme}\n<${activeHero.component.name} />`;
    } else {
      code = `import { ${activeHeader.component.name} } from './components/headers';\n\n<${activeHeader.component.name} />`;
    }
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getContainerWidth = () => {
    if (deviceSize === 'mobile') return 'max-w-[400px]';
    if (deviceSize === 'tablet') return 'max-w-[768px]';
    return 'w-full';
  };

  return (
    <div className="min-h-screen bg-[#0e1117] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Banner / Studio Toolbar */}
      <header className="sticky top-0 z-50 bg-[#161b26]/95 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-3.5 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Brand & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-rose-500 text-white flex items-center justify-center font-black text-base shadow-lg shadow-blue-500/20">
              ⚡
            </div>
            <div>
              <h1 className="text-base font-extrabold text-white leading-tight flex items-center gap-2">
                Responsive Hero & Header Studio
                <span className="text-[11px] font-bold bg-blue-500/20 text-blue-300 px-2.5 py-0.5 rounded-full border border-blue-500/30">
                  {heroesList.length} Heroes • Human Design • Custom Fonts
                </span>
              </h1>
              <p className="text-xs text-slate-400 font-medium">
                Real Human Aesthetics • Working Micro-Interactions • Fully Responsive
              </p>
            </div>
          </div>

          {/* Main Studio Navigation Switcher */}
          <div className="flex items-center bg-black/40 p-1.5 rounded-2xl border border-white/10 shadow-inner">
            <button
              onClick={() => {
                setActiveTab('heroes');
                setViewMode('single');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'heroes'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hero Sections ({heroesList.length})</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('headers');
                setViewMode('single');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'headers'
                  ? 'bg-white text-neutral-900 shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutTemplate className="w-3.5 h-3.5" />
              <span>Headers Library ({headersList.length})</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('pair');
                setViewMode('single');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'pair'
                  ? 'bg-gradient-to-r from-purple-500 to-rose-500 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Pair Studio</span>
            </button>
          </div>

          {/* Controls: Device Viewport Switcher + Copy Code */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Device Viewport Toggle */}
            <div className="bg-black/40 p-1 rounded-xl flex items-center gap-1 border border-white/10">
              <button
                onClick={() => setDeviceSize('desktop')}
                title="Desktop View (Full Width)"
                className={`p-1.5 px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                  deviceSize === 'desktop'
                    ? 'bg-white/20 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
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
                    ? 'bg-white/20 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tablet</span>
              </button>
              <button
                onClick={() => setDeviceSize('mobile')}
                title="Mobile View (400px)"
                className={`p-1.5 px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                  deviceSize === 'mobile'
                    ? 'bg-white/20 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>

            {/* Mode Switcher */}
            {activeTab !== 'pair' && (
              <div className="bg-black/40 p-1 rounded-xl flex items-center gap-1 border border-white/10">
                <button
                  onClick={() => setViewMode('single')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                    viewMode === 'single'
                      ? 'bg-white/20 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Single
                </button>
                <button
                  onClick={() => setViewMode('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                    viewMode === 'all'
                      ? 'bg-white/20 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  View All
                </button>
              </div>
            )}

            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl transition shadow-lg shadow-blue-500/20 active:scale-95 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied JSX!' : 'Copy Code'}</span>
            </button>
          </div>
        </div>

        {/* Tab-Specific Sub-Nav Pills */}
        {activeTab === 'heroes' && viewMode === 'single' && (
          <div className="max-w-7xl mx-auto mt-3 pt-3 border-t border-white/10 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {heroesList.map((hero) => {
              const isSelected = selectedHeroId === hero.id;
              return (
                <button
                  key={hero.id}
                  onClick={() => setSelectedHeroId(hero.id)}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                      : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-white/10'
                  }`}
                >
                  <span>{hero.name}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                      isSelected
                        ? 'bg-white text-blue-900'
                        : 'bg-white/10 text-blue-300'
                    }`}
                  >
                    {hero.highlight}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {activeTab === 'headers' && viewMode === 'single' && (
          <div className="max-w-7xl mx-auto mt-3 pt-3 border-t border-white/10 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {headersList.map((header) => {
              const isSelected = selectedHeaderId === header.id;
              return (
                <button
                  key={header.id}
                  onClick={() => setSelectedHeaderId(header.id)}
                  className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-white text-black shadow-md scale-105'
                      : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border border-white/10'
                  }`}
                >
                  <span>{header.name}</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full font-bold bg-white/10 text-slate-300">
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
        {/* TAB 1: HEROES SHOWCASE */}
        {activeTab === 'heroes' && (
          viewMode === 'single' ? (
            <div className="flex flex-col gap-6">
              {/* Human Typography & Color Metadata Banner */}
              <div className="bg-[#161b26] border border-white/10 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl font-extrabold text-white">
                      {activeHero.name}
                    </h2>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {activeHero.tag}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {activeHero.highlight}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1.5 max-w-3xl leading-relaxed">
                    {activeHero.description}
                  </p>
                </div>

                {/* Typography and Colors Specs */}
                <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                    <Type className="w-3.5 h-3.5 text-blue-400" />
                    <span>Font: <strong className="text-white">{activeHero.font}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <span>Colors: {activeHero.colorScheme}</span>
                  </div>
                </div>
              </div>

              {/* Working Interactivity Hint */}
              <div className="bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 border border-blue-500/20 rounded-2xl p-3 flex items-center gap-3 text-xs text-blue-200">
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                </div>
                <span>
                  <strong>Interactive Real Human Elements:</strong> {activeHero.interactivity}
                </span>
              </div>

              {/* The Hero Preview Container */}
              <div className="w-full flex justify-center">
                <div className={`transition-all duration-300 w-full ${getContainerWidth()}`}>
                  <ActiveHeroComponent />
                </div>
              </div>
            </div>
          ) : (
            /* View All Heroes Side-by-Side */
            <div className="flex flex-col gap-14">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-white">All {heroesList.length} Responsive Hero Sections</h2>
                  <p className="text-sm text-slate-400">
                    Crafted with distinct human typography, authentic color palettes, and working micro-interactions.
                  </p>
                </div>
              </div>

              {heroesList.map((hero, idx) => {
                const HeroComp = hero.component;
                return (
                  <div key={hero.id} className="bg-[#161b26] border border-white/10 rounded-3xl p-6 shadow-2xl space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-xl bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <div>
                          <h3 className="text-lg font-bold text-white">{hero.name}</h3>
                          <p className="text-xs text-slate-400">{hero.font} • {hero.colorScheme}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {hero.libraries.map((lib) => (
                          <span key={lib} className="text-[10px] font-mono bg-black/60 text-blue-300 px-2 py-0.5 rounded border border-white/10">
                            {lib}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`mx-auto ${getContainerWidth()}`}>
                      <HeroComp />
                    </div>
                  </div>
                );
              })}
            </div>
          )
        )}

        {/* TAB 2: HEADERS LIBRARY */}
        {activeTab === 'headers' && (
          viewMode === 'single' ? (
            <div className="flex flex-col gap-6">
              <div className="bg-[#161b26] border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-white">{activeHeader.name}</h2>
                    <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-emerald-500/20 text-emerald-300">
                      {activeHeader.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 max-w-2xl">{activeHeader.description}</p>
                </div>

                <div className="bg-slate-900 border border-white/10 rounded-xl px-3 py-1.5 text-xs font-mono text-slate-300 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span>src/components/headers/{activeHeader.component.name}.jsx</span>
                </div>
              </div>

              {/* Header preview container */}
              <div className="bg-[#161b26] rounded-3xl border border-white/10 p-6 sm:p-12 overflow-hidden shadow-2xl">
                <div className={`p-4 sm:p-10 rounded-2xl ${activeHeader.bg} flex items-center justify-center`}>
                  <div className={`transition-all duration-300 mx-auto ${getContainerWidth()}`}>
                    <ActiveHeaderComponent forcedMobile={isForcedMobile} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {headersList.map((header, idx) => {
                const Component = header.component;
                return (
                  <div key={header.id} className="bg-[#161b26] rounded-3xl border border-white/10 shadow-md overflow-hidden">
                    <div className="px-6 py-3 bg-slate-900 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-xs font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-sm font-bold text-white">{header.name}</span>
                        <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-white/10 text-slate-300">
                          {header.tag}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 font-mono">
                        {header.component.name}.jsx
                      </span>
                    </div>

                    <div className={`p-4 sm:p-10 ${header.bg}`}>
                      <div className={`transition-all duration-300 mx-auto ${getContainerWidth()}`}>
                        <Component forcedMobile={isForcedMobile} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )
        )}

        {/* TAB 3: PAIR STUDIO */}
        {activeTab === 'pair' && (
          <div className="flex flex-col gap-6">
            <div className="bg-[#161b26] border border-white/10 rounded-2xl p-5 shadow-xl flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-purple-400" />
                  Pair Any Header with Any Hero Section
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Test layouts, visual contrast, brand alignments, and responsive composition.
                </p>
              </div>

              {/* Selectors */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Select Header */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400 font-semibold">Header:</span>
                  <select
                    value={selectedHeaderId}
                    onChange={(e) => setSelectedHeaderId(e.target.value)}
                    className="bg-slate-900 border border-white/20 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-blue-400 cursor-pointer"
                  >
                    {headersList.map((h) => (
                      <option key={h.id} value={h.id}>
                        {h.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Select Hero */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400 font-semibold">Hero:</span>
                  <select
                    value={selectedHeroId}
                    onChange={(e) => setSelectedHeroId(e.target.value)}
                    className="bg-slate-900 border border-white/20 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-blue-400 cursor-pointer"
                  >
                    {heroesList.map((h) => (
                      <option key={h.id} value={h.id}>
                        {h.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Combined Mockup Container */}
            <div className={`mx-auto w-full ${getContainerWidth()} flex flex-col gap-4`}>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <ActiveHeaderComponent forcedMobile={isForcedMobile} />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ActiveHeroComponent />
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto py-8 border-t border-white/10 bg-[#161b26] text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 gap-4">
          <span>Human-Crafted Hero & Header Collection • React 19, Motion, Three.js & Tailwind CSS</span>
          <span className="text-blue-400 font-mono">13 Interactive Heroes • 23 Responsive Headers</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
