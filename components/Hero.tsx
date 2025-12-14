import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Shield, Zap, Cloud, PlayCircle, Lock, Activity, Search, Globe, Database, Server, Cpu, Box } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Mouse position for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate normalized mouse position (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  // --- Interactive Canvas Effect ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    const particleCount = 100; // Increased count for density
    const connectionDistance = 180;
    const mouseDistance = 250;
    
    // Mouse tracker for canvas
    let mouse = { x: -1000, y: -1000 };

    const handleCanvasMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    };

    const initParticles = () => {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 2 + 0.5
            });
        }
    };

    const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;

            // Bounce off edges
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            // Mouse interaction
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouseDistance) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (mouseDistance - distance) / mouseDistance;
                // Attraction
                p.vx += forceDirectionX * force * 0.08;
                p.vy += forceDirectionY * force * 0.08;
            }

            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99, 102, 241, ${0.4})`; // Indigo-500
            ctx.fill();

            // Connect particles
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx2 = p.x - p2.x;
                const dy2 = p.y - p2.y;
                const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

                if (dist2 < connectionDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.12 - dist2 / connectionDistance * 0.12})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }

            // Connect to mouse
            if (distance < mouseDistance) {
                 ctx.beginPath();
                 ctx.strokeStyle = `rgba(168, 85, 247, ${0.25 - distance / mouseDistance * 0.25})`; // Purple connection
                 ctx.lineWidth = 1;
                 ctx.moveTo(p.x, p.y);
                 ctx.lineTo(mouse.x, mouse.y);
                 ctx.stroke();
            }
        });

        animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleCanvasMouseMove);
    
    resizeCanvas();
    draw();

    return () => {
        window.removeEventListener('resize', resizeCanvas);
        window.removeEventListener('mousemove', handleCanvasMouseMove);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-slate-950 selection:bg-indigo-500/30 perspective-[2000px]"
    >
      
      {/* --- Interactive Background Canvas --- */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-50 pointer-events-none"
      />

      {/* --- Ambient Background Effects --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
          {/* Large Gradient Glows */}
          <div className="absolute top-[-20%] left-[10%] w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-indigo-600/10 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen opacity-40 animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[10%] w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen opacity-40 animate-pulse delay-1000"></div>
          
          {/* Animated Grid Floor */}
          <div 
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_100%)] opacity-20" 
            style={{ transform: 'perspective(1000px) rotateX(60deg) translateY(0) scale(3)' }}
          ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full flex flex-col items-center">
         
         {/* --- Hero Text (Top Half) --- */}
         <div className="text-center max-w-5xl mx-auto mb-12 lg:mb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-slate-900/80 border border-indigo-500/30 backdrop-blur-md mb-6 md:mb-8 shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:border-indigo-500/60 transition-colors"
            >
                <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                <span className="text-[10px] md:text-xs font-bold text-indigo-200 tracking-wide uppercase">Next Gen Architecture v3.0</span>
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-6 md:mb-8 text-white drop-shadow-2xl"
            >
                Securing the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 animate-aurora">Intelligent Future</span>
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed font-light px-2"
            >
                Truverizen unifies Cloud Observability, Generative AI, and Zero Trust Security into a single, cohesive enterprise platform.
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
                <button 
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth'})}
                    className="w-full sm:w-auto px-8 py-3.5 md:px-10 md:py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-indigo-50 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
                >
                    Services <ArrowRight size={18} />
                </button>
                <button 
                    onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth'})}
                    className="w-full sm:w-auto px-8 py-3.5 md:px-10 md:py-4 bg-slate-900/60 text-white font-bold rounded-xl border border-slate-700 hover:bg-slate-800 hover:border-slate-500 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                    <Box size={18} /> Products
                </button>
            </motion.div>
         </div>

         {/* --- 3D Interactive Dashboard (Bottom Half) --- */}
         <motion.div 
            style={{ 
                rotateX, 
                rotateY,
                transformStyle: "preserve-3d"
            }}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.2 }}
            className="relative w-full max-w-7xl mx-auto h-auto min-h-[500px] md:h-[650px] perspective-[1000px] group"
         >
             {/* Orbital Ring Background */}
             <div className="absolute inset-0 border border-indigo-500/10 rounded-full scale-[1.2] rotate-[60deg] animate-spin-slow pointer-events-none hidden md:block"></div>
             <div className="absolute inset-0 border border-purple-500/10 rounded-full scale-[1.4] -rotate-[30deg] animate-spin-slow pointer-events-none hidden md:block" style={{ animationDirection: 'reverse' }}></div>

             {/* Central Glass Card */}
             {/* Note: Use relative positioning on mobile to allow content to flow naturally, absolute on desktop for 3D effect */}
             <div className="relative md:absolute inset-x-0 top-0 bottom-0 bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col ring-1 ring-white/5 transform-style-3d">
                
                {/* Dashboard Header */}
                <div className="h-14 md:h-16 bg-slate-950/60 border-b border-white/5 flex items-center justify-between px-4 md:px-8 transform-style-3d translate-z-[20px] shrink-0">
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="flex gap-2 md:gap-2.5">
                            <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                            <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                            <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
                        </div>
                        <div className="h-5 md:h-6 w-px bg-white/10"></div>
                        <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm font-mono text-slate-400">
                            <Lock size={12} className="text-indigo-400 md:w-[14px] md:h-[14px]"/> <span className="truncate max-w-[120px] md:max-w-none">tru_platform_core.exe</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm font-mono text-slate-400">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></span> <span className="hidden sm:inline">SYSTEM OPTIMAL</span><span className="sm:hidden">OK</span>
                        </div>
                        <div className="hidden sm:block">LATENCY: 12ms</div>
                    </div>
                </div>

                {/* Dashboard Body Grid */}
                <div className="flex-1 p-4 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 relative overflow-hidden">
                     {/* Background Grid Pattern inside card */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

                    {/* Left Column: Security (Shield) */}
                    <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-4 md:gap-6 transform-style-3d md:translate-z-[30px]">
                        <div className="flex-1 bg-slate-950/50 border border-white/5 rounded-xl md:rounded-2xl p-6 md:p-8 relative overflow-hidden group/card hover:border-indigo-500/30 transition-colors min-h-[250px] md:min-h-0">
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover/card:opacity-10 transition-opacity"><Shield size={80} className="md:w-[100px] md:h-[100px]" /></div>
                            <h3 className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 md:mb-6 flex items-center gap-2"><Shield size={14} className="md:w-[16px] md:h-[16px]" /> Zero Trust Core</h3>
                            <div className="relative h-32 md:h-48 flex items-center justify-center">
                                {/* Rotating Rings */}
                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full border border-dashed border-indigo-500/30"></motion.div>
                                <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute w-20 h-20 md:w-28 md:h-28 rounded-full border border-dotted border-purple-500/30"></motion.div>
                                <Shield size={32} className="text-indigo-400 drop-shadow-[0_0_20px_rgba(99,102,241,0.6)] md:w-[48px] md:h-[48px]" />
                            </div>
                            <div className="text-center mt-2 md:mt-4 space-y-0.5 md:space-y-1">
                                <div className="text-2xl md:text-3xl font-bold text-white">100%</div>
                                <div className="text-xs md:text-sm text-indigo-300 font-medium">Identity Verified</div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column: Cloud Stats */}
                    <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-4 md:gap-6 transform-style-3d md:translate-z-[40px]">
                         <div className="bg-slate-950/50 border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 flex items-center justify-between hover:border-blue-500/30 transition-colors">
                             <div>
                                 <div className="text-[10px] md:text-xs text-slate-500 uppercase font-bold mb-1">Total Active Nodes</div>
                                 <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">1,240</div>
                             </div>
                             <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/10 rounded-lg md:rounded-xl flex items-center justify-center text-blue-400 border border-blue-500/20">
                                <Server size={20} className="md:w-[24px] md:h-[24px]" />
                             </div>
                         </div>
                         <div className="flex-1 bg-slate-950/50 border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 relative overflow-hidden hover:border-blue-500/30 transition-colors min-h-[200px] md:min-h-0">
                             <div className="text-[10px] md:text-xs text-slate-500 uppercase font-bold mb-4 md:mb-6 flex items-center gap-2"><Activity size={14} className="md:w-[16px] md:h-[16px]" /> Live Traffic</div>
                             <div className="h-32 md:h-40 flex items-end gap-1.5 pb-2">
                                 {[...Array(16)].map((_, i) => (
                                     <motion.div 
                                        key={i}
                                        initial={{ height: '20%' }}
                                        animate={{ height: [`${Math.random() * 80 + 10}%`, `${Math.random() * 80 + 10}%`] }}
                                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
                                        className="flex-1 bg-gradient-to-t from-blue-600/80 to-blue-400/80 rounded-t-sm hover:from-blue-500 hover:to-blue-300 transition-colors"
                                     />
                                 ))}
                             </div>
                         </div>
                    </div>

                    {/* Right Column: AI Activity */}
                    <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-4 md:gap-6 transform-style-3d md:translate-z-[50px]">
                        <div className="flex-1 bg-slate-950/50 border border-white/5 rounded-xl md:rounded-2xl p-6 md:p-8 relative overflow-hidden hover:border-purple-500/30 transition-colors min-h-[250px] md:min-h-0">
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover/card:opacity-10 transition-opacity"><Cpu size={80} className="md:w-[100px] md:h-[100px]" /></div>
                            <h3 className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 md:mb-6 flex items-center gap-2"><Zap size={14} className="md:w-[16px] md:h-[16px]" /> AI Processing</h3>
                            <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                                <div className="text-[10px] md:text-xs font-mono text-purple-300 p-2 md:p-3 bg-purple-500/10 rounded-lg border border-purple-500/20 truncate">
                                    &gt; analyzing_datasets...
                                </div>
                                <div className="text-[10px] md:text-xs font-mono text-purple-300 p-2 md:p-3 bg-purple-500/10 rounded-lg border border-purple-500/20 truncate">
                                    &gt; generating_insights...
                                </div>
                                <div className="text-[10px] md:text-xs font-mono text-green-400 p-2 md:p-3 bg-green-500/10 rounded-lg border border-green-500/20 truncate">
                                    &gt; optimized_output: READY
                                </div>
                            </div>
                            <div className="flex justify-between items-end border-t border-white/5 pt-3 md:pt-4 mt-auto">
                                <div>
                                    <div className="text-2xl md:text-3xl font-bold text-white">99.9%</div>
                                    <div className="text-[10px] md:text-xs text-purple-300 font-medium">Model Accuracy</div>
                                </div>
                                <Activity className="text-purple-500 animate-pulse w-6 h-6 md:w-8 md:h-8" />
                            </div>
                        </div>
                    </div>

                </div>
             </div>

             {/* --- Floating Satellites (Parallax) --- */}
             {/* Hidden on mobile to save space and reduce clutter */}
             <motion.div 
                style={{ z: 60 }}
                className="absolute -top-12 -right-16 md:right-0 hidden md:flex bg-slate-800/90 backdrop-blur-md p-4 pr-6 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] items-center gap-4 transform-style-3d translate-z-[80px]"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             >
                 <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 border border-green-500/30"><Database size={24} /></div>
                 <div>
                     <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">DB Sync</div>
                     <div className="text-lg font-bold text-white">Complete</div>
                 </div>
             </motion.div>

             <motion.div 
                style={{ z: 70 }}
                className="absolute -bottom-8 -left-8 md:left-0 hidden md:flex bg-slate-800/90 backdrop-blur-md p-4 pr-6 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] items-center gap-4 transform-style-3d translate-z-[100px]"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             >
                 <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 border border-blue-500/30"><Cloud size={24} /></div>
                 <div>
                     <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">Cloud Status</div>
                     <div className="text-lg font-bold text-white">Healthy</div>
                 </div>
             </motion.div>

         </motion.div>

      </div>
    </section>
  );
};

export default Hero;