import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Globe, Server, Cpu, Activity, Lock, Search, Code2, Database } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-950">
      
      {/* --- Rich Dynamic Background --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
          {/* Moving Grid Floor */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)] opacity-30 animate-grid-move" style={{ transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) scale(2)' }}></div>
          
          {/* Ambient Glows */}
          <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[20%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000"></div>
          
          {/* Floating Particles/Stars */}
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#818cf8 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
         
         {/* Badge */}
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 backdrop-blur-md mb-6 md:mb-8 shadow-[0_0_20px_rgba(99,102,241,0.2)] group cursor-default hover:border-indigo-500/60 transition-colors"
         >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-semibold text-indigo-200 tracking-wide">Next Gen Architecture v3.0</span>
         </motion.div>

         {/* Headline */}
         <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-6 md:mb-8 text-white drop-shadow-2xl"
         >
            Securing the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 animate-aurora bg-[length:200%_auto]">Intelligent Future</span>
         </motion.h1>

         {/* Subheadline */}
         <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mb-8 md:mb-12 font-light leading-relaxed px-4"
         >
            Truverizen unifies Cloud Observability, Generative AI, and Zero Trust Security into a single, cohesive enterprise platform.
         </motion.p>

         {/* CTAs */}
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-20 md:mb-24 w-full sm:w-auto px-6 sm:px-0 relative z-20"
         >
            <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth'})} className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:shadow-[0_0_50px_rgba(79,70,229,0.6)] flex items-center justify-center gap-2 group w-full sm:w-auto text-sm md:text-base transform hover:scale-105">
               Products & Solutions <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </button>
         </motion.div>

         {/* --- COMPLEX VISUALIZATION STAGE --- */}
         <div className="relative w-full max-w-6xl h-[500px] md:h-[600px] perspective-[2000px] pointer-events-none select-none mt-10">
             
             {/* Floating Code Snippets Background Layer */}
             <motion.div 
               animate={{ y: [0, -20, 0] }} 
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="absolute top-10 left-[10%] opacity-20 hidden md:block"
             >
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 font-mono text-[10px] text-green-400 shadow-lg backdrop-blur-sm">
                   <div>{`> initializing_core_modules...`}</div>
                   <div>{`> loading_security_policies... OK`}</div>
                   <div>{`> connecting_to_edge_nodes... 45ms`}</div>
                </div>
             </motion.div>

             <motion.div 
               animate={{ y: [0, 30, 0] }} 
               transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
               className="absolute bottom-20 right-[10%] opacity-20 hidden md:block"
             >
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 font-mono text-[10px] text-blue-400 shadow-lg backdrop-blur-sm">
                   <div className="flex gap-2"><span className="text-purple-400">const</span> <span className="text-white">secure</span> = <span className="text-yellow-400">true</span>;</div>
                   <div className="flex gap-2"><span className="text-purple-400">await</span> <span className="text-blue-300">TARA</span>.<span className="text-yellow-300">optimize()</span>;</div>
                </div>
             </motion.div>

             {/* Connection Lines (SVG) */}
             <svg className="absolute inset-0 w-full h-full z-0 opacity-60">
                <defs>
                   <linearGradient id="lineGradientLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="transparent" />
                      <stop offset="50%" stopColor="#2dd4bf" /> {/* Teal */}
                      <stop offset="100%" stopColor="transparent" />
                   </linearGradient>
                   <linearGradient id="lineGradientRight" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="transparent" />
                      <stop offset="50%" stopColor="#a855f7" /> {/* Purple */}
                      <stop offset="100%" stopColor="transparent" />
                   </linearGradient>
                </defs>
                
                {/* Left Line */}
                <motion.path 
                   d="M 50% 50% C 35% 50%, 25% 40%, 15% 25%" 
                   stroke="url(#lineGradientLeft)" 
                   strokeWidth="2"
                   fill="none"
                   strokeDasharray="10 10"
                   animate={{ strokeDashoffset: [100, 0] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                 {/* Right Line */}
                <motion.path 
                   d="M 50% 50% C 65% 50%, 75% 60%, 85% 75%" 
                   stroke="url(#lineGradientRight)" 
                   strokeWidth="2"
                   fill="none"
                   strokeDasharray="10 10"
                   animate={{ strokeDashoffset: [0, 100] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
             </svg>

             {/* --- CENTRAL DASHBOARD (Enhanced) --- */}
             <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-[700px] bg-slate-900/90 backdrop-blur-2xl border border-slate-700/50 rounded-2xl shadow-[0_0_80px_rgba(99,102,241,0.15)] z-20 overflow-hidden flex flex-col ring-1 ring-white/10"
             >
                {/* Dashboard Window Header */}
                <div className="h-12 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between px-4">
                   <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                         <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                      </div>
                      <div className="h-4 w-px bg-slate-700 mx-1"></div>
                      <div className="flex items-center gap-2 px-2 py-1 bg-slate-800 rounded text-[10px] font-mono text-slate-400">
                        <Lock size={10} /> tru_guard_core.exe
                      </div>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="text-[10px] text-slate-500 font-mono">CPU: 12%</div>
                      <div className="text-[10px] text-slate-500 font-mono">MEM: 4.2GB</div>
                      <div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/10 rounded-full border border-green-500/20">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-[10px] font-bold text-green-500 tracking-wide">SECURE</span>
                      </div>
                   </div>
                </div>

                {/* Dashboard Content Grid */}
                <div className="p-6 grid grid-cols-12 gap-6 relative">
                   {/* Grid Background pattern inside card */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none z-0"></div>

                   {/* Left Col: Shield Visualizer */}
                   <div className="col-span-12 md:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-950/80 rounded-xl border border-slate-800 relative group overflow-hidden z-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent"></div>
                      <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                          {/* Animated Rings */}
                          <motion.div 
                              animate={{ rotate: 360 }}
                              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                              className="absolute inset-0 border border-dashed border-indigo-500/30 rounded-full"
                          />
                          <motion.div 
                              animate={{ rotate: -360 }}
                              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                              className="absolute inset-2 border border-dotted border-purple-500/30 rounded-full"
                          />
                          {/* Center Shield */}
                          <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-xl animate-pulse"></div>
                          <Shield size={48} className="text-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.6)] z-10" />
                          
                          {/* Scanning Radar Effect */}
                          <motion.div 
                             className="absolute inset-0 bg-gradient-to-t from-transparent via-indigo-400/10 to-transparent w-full h-1/2 bottom-1/2 origin-bottom animate-spin-slow"
                             style={{ borderBottom: '1px solid rgba(99,102,241,0.2)' }}
                          />
                      </div>
                      <h3 className="text-base font-bold text-white">Zero Trust Core</h3>
                      <p className="text-[10px] text-slate-400 mt-1 font-mono bg-slate-900 px-2 py-1 rounded border border-slate-800">
                        Identity: Verified
                      </p>
                   </div>

                   {/* Right Col: Metrics & Charts */}
                   <div className="col-span-12 md:col-span-7 flex flex-col gap-4 z-10">
                      {/* Metric 1: Threat Analysis */}
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                         <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1"><Search size={10}/> Threat Detection</span>
                            <span className="text-[10px] font-mono text-indigo-400">0 DETECTED</span>
                         </div>
                         <div className="h-8 flex items-end gap-1 opacity-80">
                            {[20, 45, 10, 30, 50, 25, 60, 40, 15, 5].map((h, i) => (
                               <motion.div 
                                  key={i}
                                  initial={{ height: '10%' }}
                                  animate={{ height: `${h}%` }}
                                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                                  className="flex-1 bg-indigo-500/60 rounded-t-[1px]"
                               />
                            ))}
                         </div>
                      </div>

                      {/* Metric 2: Encryption Status */}
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                         <div className="flex justify-between items-center mb-2">
                             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1"><Lock size={10}/> Encryption Level</span>
                             <span className="text-[10px] font-mono text-green-400">AES-256-GCM</span>
                         </div>
                         <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                             <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1 }}
                                className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
                             />
                         </div>
                      </div>

                      {/* Mini Log Console */}
                      <div className="flex-1 bg-black/40 rounded-lg border border-slate-800 p-2 font-mono text-[9px] text-slate-400 overflow-hidden relative">
                         <div className="absolute top-0 right-0 p-1 opacity-30"><Code2 size={12}/></div>
                         <div className="space-y-1">
                            <div className="flex gap-2"><span className="text-blue-500">INFO</span> <span>System initialized at 10:42:01</span></div>
                            <div className="flex gap-2"><span className="text-purple-500">NET</span> <span>Handshake successful (4ms)</span></div>
                            <div className="flex gap-2"><span className="text-green-500">OK</span> <span>Policy 802.1x applied</span></div>
                            <motion.div 
                               animate={{ opacity: [0, 1, 0] }}
                               transition={{ duration: 1, repeat: Infinity }}
                               className="w-2 h-3 bg-indigo-500 mt-1"
                            />
                         </div>
                      </div>
                   </div>
                </div>
             </motion.div>

             {/* --- ORBITAL SATELLITES --- */}

             {/* Satellite 1: Global Edge (Top Left) */}
             <motion.div 
                animate={{ y: [0, 15, 0], x: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[5%] md:left-[0%] lg:-left-[5%] z-30"
             >
                <div className="bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-teal-500/30 shadow-[0_0_30px_rgba(20,184,166,0.15)] flex items-center gap-4 w-56 group hover:scale-105 transition-transform">
                   <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20 shadow-inner">
                      <Globe size={20} className="animate-pulse" />
                   </div>
                   <div>
                      <div className="text-[10px] text-teal-200 font-bold uppercase tracking-wider mb-0.5">Network</div>
                      <div className="text-sm font-bold text-white">Global Edge</div>
                      <div className="flex gap-1 mt-1">
                         <span className="h-1 w-1 rounded-full bg-teal-400"></span>
                         <span className="h-1 w-1 rounded-full bg-teal-400"></span>
                         <span className="h-1 w-1 rounded-full bg-teal-400"></span>
                         <span className="h-1 w-1 rounded-full bg-slate-700"></span>
                      </div>
                   </div>
                </div>
             </motion.div>

             {/* Satellite 2: AI Co-Pilot (Bottom Right) */}
             <motion.div 
                animate={{ y: [0, -20, 0], x: [0, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[10%] right-[5%] md:right-[0%] lg:-right-[5%] z-30"
             >
                <div className="bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)] flex items-center gap-4 w-56 group hover:scale-105 transition-transform">
                   <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20 shadow-inner">
                      <Cpu size={20} className="animate-[spin_4s_linear_infinite]" />
                   </div>
                   <div>
                      <div className="text-[10px] text-purple-200 font-bold uppercase tracking-wider mb-0.5">Intelligence</div>
                      <div className="text-sm font-bold text-white">TARA AI Engine</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-1">Processing...</div>
                   </div>
                </div>
             </motion.div>

             {/* Satellite 3: Database/Sync (Top Right - Small) */}
             <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[20%] right-[10%] z-10 hidden md:flex"
             >
                <div className="px-3 py-1.5 bg-slate-900/60 backdrop-blur border border-slate-700 rounded-full flex items-center gap-2 shadow-lg">
                   <Database size={12} className="text-blue-400" />
                   <span className="text-[10px] font-mono text-blue-100">Syncing DB shards...</span>
                </div>
             </motion.div>

             {/* Satellite 4: Activity/Status (Bottom Left - Small) */}
             <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute bottom-[20%] left-[10%] z-10 hidden md:flex"
             >
                <div className="px-3 py-1.5 bg-slate-900/60 backdrop-blur border border-slate-700 rounded-full flex items-center gap-2 shadow-lg">
                   <Activity size={12} className="text-green-400" />
                   <span className="text-[10px] font-mono text-green-100">System Optimal</span>
                </div>
             </motion.div>

         </div>

      </div>
    </section>
  );
};

export default Hero;