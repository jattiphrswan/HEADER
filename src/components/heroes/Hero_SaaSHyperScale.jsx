import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Server,
  Terminal,
  Globe,
  Database,
  Cpu,
  Check,
  Copy,
  ArrowRight,
  Zap,
  Play,
  RotateCw,
  Sparkles,
  ShieldCheck,
  Activity,
  Layers,
  HardDrive,
  Menu,
  X
} from 'lucide-react';
import { useIsMobile } from './useIsMobile';

const TABS = [
  { id: 'cdn', name: 'Global Edge Network', icon: Globe },
  { id: 'compute', name: 'Serverless Functions', icon: Cpu },
  { id: 'db', name: 'Distributed Database', icon: Database }
];

export const Hero_SaaSHyperScale = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('cdn');
  const [copied, setCopied] = useState(false);
  const [reqCounter, setReqCounter] = useState(1842912);
  const [deployStep, setDeployStep] = useState('idle'); // 'idle' | 'building' | 'routing' | 'success'

  // Live counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setReqCounter((prev) => prev + Math.floor(Math.random() * 45 + 10));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const handleCopyInstall = () => {
    navigator.clipboard?.writeText('npx hyperscale deploy --prod');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTriggerDeploy = () => {
    setDeployStep('building');
    setTimeout(() => {
      setDeployStep('routing');
      setTimeout(() => {
        setDeployStep('success');
        setTimeout(() => setDeployStep('idle'), 3500);
      }, 1200);
    }, 1200);
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-slate-950 text-white border border-slate-800 shadow-2xl font-sans min-h-[640px] p-5 sm:p-12 flex flex-col justify-between">
      {/* Dynamic ambient grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf815_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 right-10 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Banner Navigation */}
      <div className="relative z-30 flex items-center justify-between pb-4 sm:pb-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-400 to-indigo-600 flex items-center justify-center font-black text-white shadow-lg shadow-sky-500/20">
            ▲
          </div>
          <span className="font-extrabold text-sm sm:text-base tracking-tight text-white">
            HYPERSCALE<span className="text-sky-400">.CLOUD</span>
          </span>
        </div>

        {/* Live Req Counter */}
        {!isMobile && (
          <div className="hidden sm:flex items-center gap-2 bg-slate-900/90 border border-slate-800 rounded-full px-3.5 py-1 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-slate-400">EDGE TRAFFIC:</span>
            <span className="text-sky-300 font-bold">{reqCounter.toLocaleString()} REQ/S</span>
          </div>
        )}

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleTriggerDeploy}
            disabled={deployStep !== 'idle'}
            className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 disabled:bg-slate-800 text-slate-950 font-bold px-3.5 sm:px-4 py-2 rounded-xl text-xs transition cursor-pointer active:scale-95 shadow-[0_0_20px_rgba(56,189,248,0.3)]"
          >
            {deployStep === 'idle' && <Zap className="w-3.5 h-3.5 fill-current" />}
            {deployStep === 'building' && <RotateCw className="w-3.5 h-3.5 animate-spin" />}
            {deployStep === 'routing' && <RotateCw className="w-3.5 h-3.5 animate-spin text-amber-400" />}
            {deployStep === 'success' && <Check className="w-3.5 h-3.5 text-emerald-950" />}
            <span>
              {deployStep === 'idle' && 'Deploy Demo'}
              {deployStep === 'building' && 'Building...'}
              {deployStep === 'routing' && 'Propagating...'}
              {deployStep === 'success' && 'Live 320 PoPs!'}
            </span>
          </button>

          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-white transition active:scale-95 cursor-pointer flex items-center justify-center"
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
              className="absolute top-full left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-6 py-5 flex flex-col gap-3 shadow-2xl text-left"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>TRAFFIC: {reqCounter.toLocaleString()} REQ/S</span>
              </div>
              <a href="#cdn" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white py-1">Edge CDN</a>
              <a href="#compute" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white py-1">Serverless Compute</a>
              <a href="#database" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white py-1">Global Database</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white py-1">Pricing</a>

              <div className="pt-3 border-t border-slate-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleTriggerDeploy();
                  }}
                  className="w-full py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition cursor-pointer"
                >
                  Deploy Demo Instantly
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center flex-1">
        {/* Left Column: Heading and Terminal install */}
        <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-xs font-mono text-sky-300 w-fit">
            <Server className="w-3.5 h-3.5 text-sky-400" />
            <span>GLOBAL ZERO-COLD-START RUNTIME</span>
          </div>

          <h1 className={`${isMobile ? 'text-2xl sm:text-3xl leading-tight' : 'text-3xl sm:text-6xl leading-[1.08]'} font-black tracking-tight text-white`}>
            Deploy Instantly to <br />
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              320 Global Edge PoPs.
            </span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg">
            Say goodbye to cold starts, server configuration, and manual CDN routing. Hyperscale runs your code within 15ms of every user on earth.
          </p>

          {/* Interactive Install Terminal */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 flex items-center justify-between gap-3 shadow-xl max-w-md">
            <div className="flex items-center gap-2 font-mono text-xs text-sky-300 overflow-x-auto">
              <span className="text-slate-500">$</span>
              <span>npx hyperscale deploy --prod</span>
            </div>
            <button
              onClick={handleCopyInstall}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition shrink-0 cursor-pointer"
              title="Copy Command"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Enterprise DDoS Guard
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-yellow-400" /> 0ms Cold Start
            </span>
            <span className="flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-sky-400" /> 99.999% SLA
            </span>
          </div>
        </div>

        {/* Right Column: Interactive Architecture Showcase */}
        <div className="lg:col-span-6 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 shadow-2xl flex flex-col justify-between min-h-[380px]">
          {/* Architecture Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-sky-500 text-slate-950 font-bold shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Tab Panes */}
          <div className="py-6 flex-1 flex flex-col justify-center">
            {activeTab === 'cdn' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                  {[
                    { city: 'Tokyo (NRT)', ping: '12ms', status: 'Optimal' },
                    { city: 'Frankfurt (FRA)', ping: '8ms', status: 'Optimal' },
                    { city: 'San Jose (SJC)', ping: '4ms', status: 'Optimal' },
                    { city: 'Sydney (SYD)', ping: '19ms', status: 'Optimal' }
                  ].map((node) => (
                    <div key={node.city} className="bg-slate-950 p-3 rounded-2xl border border-slate-800/80">
                      <div className="text-[10px] text-slate-400 font-mono">{node.city}</div>
                      <div className="text-base font-bold text-sky-400 font-mono mt-0.5">{node.ping}</div>
                      <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {node.status}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800/80 text-left">
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="text-slate-400 font-mono">Anycast Global Routing Mesh</span>
                    <span className="text-emerald-400 font-mono">320 PoPs Active</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sky-400 to-emerald-400 w-full animate-pulse" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'compute' && (
              <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 font-mono text-left text-xs space-y-2">
                <div className="text-slate-500">// handler.ts: Zero cold-start V8 isolate</div>
                <div className="text-sky-300">
                  <span className="text-purple-400">export default</span> <span className="text-amber-300">async</span> (req: Request) =&gt; &#123;
                </div>
                <div className="text-slate-300 pl-4">
                  const country = req.headers.get(<span className="text-emerald-300">"x-edge-geo"</span>);
                </div>
                <div className="text-slate-300 pl-4">
                  return <span className="text-sky-400">Response</span>.json(&#123; latency: <span className="text-emerald-300">"1.2ms"</span>, country &#125;);
                </div>
                <div className="text-sky-300">&#125;;</div>
              </div>
            )}

            {activeTab === 'db' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <div className="text-xs text-slate-400">Read Replication IOPS</div>
                  <div className="text-2xl font-bold font-mono text-white mt-1">125,000 IOPS</div>
                  <div className="text-xs text-sky-400 mt-1">Raft Consensus • Auto-Failover</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <div className="text-xs text-slate-400">Active Shards</div>
                  <div className="text-2xl font-bold font-mono text-emerald-400 mt-1">1,024 Shards</div>
                  <div className="text-xs text-slate-400 mt-1">Encrypted at rest (AES-256)</div>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-800">
            <span>Automated SSL • Free Edge SSL Certificates</span>
            <span className="font-mono text-sky-400">HTTP/3 QUIC Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero_SaaSHyperScale;
