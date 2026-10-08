import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as THREE from 'three';
import {
  Cpu,
  Terminal,
  Play,
  RotateCw,
  Sparkles,
  Check,
  Copy,
  Zap,
  Shield,
  Activity,
  Sliders,
  Code2,
  Share2,
  Layers,
  ArrowRight
} from 'lucide-react';

const PRESET_PROMPTS = [
  {
    title: 'Quant Arbitrage Bot',
    prompt: 'Synthesize low-latency triangular arbitrage strategy on Arbitrum with flash loans',
    code: `async function executeFlashArbitrage(pairA, pairB, loanAmount) {\n  const pool = await ethers.getContractAt("IAavePool", AAVE_V3);\n  const calldata = encodeArbitrageHop(pairA, pairB, loanAmount);\n  return await pool.flashLoanSimple(EXEC_ROUTER, WETH, loanAmount, calldata, 0);\n}`
  },
  {
    title: 'Neural Consensus Mesh',
    prompt: 'Generate Byzantine fault tolerant node consensus verification pipeline in Rust',
    code: `pub fn verify_state_transition(sig_block: &BlockHeader, quorum: &ValidatorSet) -> Result<bool, ConsensusError> {\n    let merkle_root = sig_block.compute_state_root();\n    quorum.validate_bls_aggregate_signature(&merkle_root)?;\n    Ok(true)\n}`
  },
  {
    title: 'Predictive Volatility Model',
    prompt: 'Compute cross-asset implied volatility surface with jump-diffusion process',
    code: `import numpy as np\ndef bsm_jump_diffusion(S, K, T, r, sigma, lambda_j, mu_j, delta_j):\n    poisson_weights = [np.exp(-lambda_j * T) * (lambda_j * T)**k / np.math.factorial(k) for k in range(12)]\n    return sum(w * black_scholes_price(S, K, T, r, sigma_k) for k, w in enumerate(poisson_weights))`
  }
];

export const Hero_CyberGridAI = () => {
  const mountRef = useRef(null);
  const [selectedModel, setSelectedModel] = useState('Gemini 2.5 Ultra');
  const [activePrompt, setActivePrompt] = useState(PRESET_PROMPTS[0].prompt);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedOutput, setGeneratedOutput] = useState(PRESET_PROMPTS[0].code);
  const [copied, setCopied] = useState(false);
  const [wireframeColor, setWireframeColor] = useState('#06b6d4'); // Cyan, purple, green
  const [tpsCounter, setTpsCounter] = useState(3840);
  const [temperature, setTemperature] = useState(0.4);

  // Three.js interactive 3D WebGL Neural Mesh
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Create 3D Icosahedron Wireframe & Particles
    const geometry = new THREE.IcosahedronGeometry(1.6, 3);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(wireframeColor),
      wireframe: true,
      transparent: true,
      opacity: 0.28
    });
    const sphere = new THREE.Mesh(geometry, wireframeMat);
    scene.add(sphere);

    // Glowing vertices points
    const pointsMat = new THREE.PointsMaterial({
      color: new THREE.Color(wireframeColor),
      size: 0.045,
      transparent: true,
      opacity: 0.85
    });
    const pointsMesh = new THREE.Points(geometry, pointsMat);
    scene.add(pointsMesh);

    // Outer subtle ring
    const ringGeo = new THREE.TorusGeometry(2.3, 0.015, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(wireframeColor),
      transparent: true,
      opacity: 0.2
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    let animationId;
    let mouseX = 0;
    let mouseY = 0;

    const onPointerMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width - 0.5) * 1.5;
      mouseY = ((e.clientY - rect.top) / height - 0.5) * 1.5;
    };
    window.addEventListener('pointermove', onPointerMove);

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      sphere.rotation.y += 0.003;
      sphere.rotation.x += 0.002;
      pointsMesh.rotation.y = sphere.rotation.y;
      pointsMesh.rotation.x = sphere.rotation.x;
      ring.rotation.z += 0.002;

      // React to pointer
      sphere.rotation.y += (mouseX - sphere.rotation.y * 0.1) * 0.05;
      sphere.rotation.x += (mouseY - sphere.rotation.x * 0.1) * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      wireframeMat.dispose();
      pointsMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, [wireframeColor]);

  // Live TPS fluctuation
  useEffect(() => {
    const timer = setInterval(() => {
      setTpsCounter((prev) => prev + Math.floor(Math.random() * 20 - 9));
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  const handleRunInference = () => {
    setIsGenerating(true);
    setGeneratedOutput('// Neural inference compiling...');
    setTimeout(() => {
      const match = PRESET_PROMPTS.find((p) => p.prompt === activePrompt) || PRESET_PROMPTS[0];
      setGeneratedOutput(match.code);
      setIsGenerating(false);
    }, 850);
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText(generatedOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-[#07090e] border border-cyan-500/20 text-neutral-100 shadow-[0_20px_70px_rgba(6,182,212,0.15)] font-sans">
      {/* Background Cyber Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d408_1px,transparent_1px),linear-gradient(to_bottom,#06b6d408_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Banner Navigation */}
      <div className="relative z-10 px-6 sm:px-10 py-4 flex items-center justify-between border-b border-cyan-500/15 bg-neutral-950/60 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <Cpu className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <span className="font-mono text-sm font-bold tracking-wider text-white">
              CYBERGRID<span className="text-cyan-400">.AI</span>
            </span>
            <span className="ml-2 text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">
              v4.2-NEURAL
            </span>
          </div>
        </div>

        {/* Live Cluster Metrics */}
        <div className="hidden md:flex items-center gap-6 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-neutral-400">STATUS:</span>
            <span className="text-emerald-400 font-semibold">99.99% ONLINE</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-neutral-400">THROUGHPUT:</span>
            <span className="text-cyan-300 font-semibold">{tpsCounter.toLocaleString()} TOKENS/S</span>
          </div>
        </div>

        {/* Theme Accent Picker */}
        <div className="flex items-center gap-1.5 bg-neutral-900 border border-white/10 rounded-full px-2.5 py-1">
          {[
            { id: '#06b6d4', label: 'Cyan' },
            { id: '#a855f7', label: 'Purple' },
            { id: '#10b981', label: 'Emerald' }
          ].map((c) => (
            <button
              key={c.id}
              onClick={() => setWireframeColor(c.id)}
              className="w-3.5 h-3.5 rounded-full transition-transform hover:scale-125"
              style={{ backgroundColor: c.id }}
              title={c.label}
            />
          ))}
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="relative z-10 px-6 sm:px-12 pt-8 pb-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Heading, Model Selector & Prompt Terminal */}
        <div className="lg:col-span-7 flex flex-col gap-5 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 w-fit">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>DECENTRALIZED HIGH-PERFORMANCE INFERENCE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-[1.12]">
            Sub-Millisecond AI. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Engineered For Production.
            </span>
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl">
            Stream, execute, and monitor deep neural networks with hardware-accelerated WebGL telemetry, deterministic consensus, and instant API dispatch.
          </p>

          {/* Model Selection Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {['Gemini 2.5 Ultra', 'Claude 3.7 Sonnet', 'DeepSeek V3', 'Llama 4 Quantized'].map((model) => (
              <button
                key={model}
                onClick={() => setSelectedModel(model)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition cursor-pointer ${
                  selectedModel === model
                    ? 'bg-cyan-500 text-neutral-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'bg-neutral-900/80 text-neutral-400 border border-white/10 hover:text-white'
                }`}
              >
                {model}
              </button>
            ))}
          </div>

          {/* Interactive Live Inference Box */}
          <div className="bg-neutral-950/90 border border-cyan-500/25 rounded-2xl p-4 shadow-xl space-y-3">
            <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-white/10 pb-2">
              <span className="flex items-center gap-1.5 font-mono text-cyan-300">
                <Terminal className="w-3.5 h-3.5" />
                neural_repl://{selectedModel.toLowerCase().replace(/\s+/g, '-')}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-neutral-500">Temp: {temperature}</span>
                <input
                  type="range"
                  min="0.1"
                  max="1.0"
                  step="0.1"
                  value={temperature}
                  onChange={(e) => setTemperature(parseFloat(e.target.value))}
                  className="w-16 accent-cyan-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Prompt presets */}
            <div className="flex flex-wrap gap-1.5">
              {PRESET_PROMPTS.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActivePrompt(p.prompt);
                    setGeneratedOutput(p.code);
                  }}
                  className={`text-[11px] px-2.5 py-1 rounded-lg border transition ${
                    activePrompt === p.prompt
                      ? 'bg-cyan-950/80 border-cyan-500/50 text-cyan-200'
                      : 'bg-neutral-900 border-white/5 text-neutral-400 hover:text-white'
                  }`}
                >
                  ⚡ {p.title}
                </button>
              ))}
            </div>

            {/* Input field */}
            <div className="flex gap-2">
              <input
                type="text"
                value={activePrompt}
                onChange={(e) => setActivePrompt(e.target.value)}
                placeholder="Enter prompt or query..."
                className="flex-1 bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
              />
              <button
                onClick={handleRunInference}
                disabled={isGenerating}
                className="bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer disabled:opacity-50"
              >
                {isGenerating ? (
                  <RotateCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-current" />
                )}
                <span>Run</span>
              </button>
            </div>

            {/* Stream Output */}
            <div className="relative bg-neutral-900/90 rounded-xl p-3 border border-white/10 font-mono text-[11px] text-cyan-200/90 overflow-x-auto max-h-36">
              <button
                onClick={handleCopy}
                className="absolute right-2 top-2 p-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg text-xs"
                title="Copy Code"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <pre className="whitespace-pre-wrap">{generatedOutput}</pre>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 3D WebGL Three.js Sphere & Telemetry HUD */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
          {/* Three.js canvas mount */}
          <div
            ref={mountRef}
            className="w-full h-80 sm:h-96 relative flex items-center justify-center cursor-grab active:cursor-grabbing"
            title="Drag to rotate Three.js 3D Neural Sphere"
          />

          {/* Floating Telemetry Badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute -top-2 -left-2 bg-neutral-900/90 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-3 shadow-xl text-left"
          >
            <div className="text-[10px] font-mono text-neutral-400">EDGE LATENCY</div>
            <div className="text-lg font-mono font-bold text-white flex items-center gap-1">
              <span>1.24 ms</span>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1 rounded">Tokyo</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute bottom-4 right-2 bg-neutral-900/90 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-3 shadow-xl text-left"
          >
            <div className="text-[10px] font-mono text-neutral-400">CONCURRENCY</div>
            <div className="text-lg font-mono font-bold text-cyan-300 flex items-center gap-1">
              <span>50,000 req/s</span>
              <Zap className="w-3.5 h-3.5 text-yellow-400 fill-current" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero_CyberGridAI;
