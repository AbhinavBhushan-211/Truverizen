import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-slate-950">
      
      {/* --- Ambient Background Dark Mode --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         {/* Top Right Aurora */}
         <div className="absolute -top-[20%] -right-[10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-indigo-500/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse-glow"></div>
         {/* Bottom Left Glow */}
         <div className="absolute -bottom-[20%] -left-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-500/20 rounded-full blur-[80px] md:blur-[120px]"></div>
         
         {/* Subtle Grid */}
         <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
         
         {/* Badge */}
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-6 md:mb-8 shadow-lg shadow-indigo-500/10"
         >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-medium text-slate-300 tracking-wide">Next Gen Architecture v3.0</span>
         </motion.div>

         {/* Headline */}
         <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-6 md:mb-8 text-white"
         >
            Securing the <br/>
            <span className="text-gradient">Intelligent Future</span>
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
            className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-24 w-full sm:w-auto px-6 sm:px-0"
         >
            <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth'})} className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-900/40 flex items-center justify-center gap-2 group w-full sm:w-auto text-sm md:text-base">
               Products & Solutions <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </button>
         </motion.div>

         {/* 3D Floating Elements Visual */}
         <div className="relative w-full max-w-4xl h-[300px] md:h-[400px] perspective-[1000px]">
             {/* Central Card */}
             <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[60%] aspect-video bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-20 overflow-hidden flex flex-col"
             >
                <div className="h-8 md:h-10 border-b border-slate-800 bg-slate-900/50 flex items-center px-4 gap-2">
                   <div className="flex gap-1.5"><div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-slate-700"></div><div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-slate-700"></div></div>
                </div>
                <div className="flex-1 p-4 md:p-6 relative">
                   <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent"></div>
                   <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/20 shrink-0">
                         <Shield size={20} className="md:w-6 md:h-6" />
                      </div>
                      <div>
                         <div className="text-xs md:text-sm text-white font-bold">Zero Trust Core</div>
                         <div className="text-[10px] md:text-xs text-green-400 font-semibold">System Secure</div>
                      </div>
                   </div>
                   <div className="space-y-2 md:space-y-3">
                      <div className="h-1.5 md:h-2 w-full bg-slate-800 rounded-full overflow-hidden"><div className="h-full w-3/4 bg-indigo-500 rounded-full"></div></div>
                      <div className="h-1.5 md:h-2 w-2/3 bg-slate-800 rounded-full"></div>
                      <div className="h-1.5 md:h-2 w-5/6 bg-slate-800 rounded-full"></div>
                   </div>
                </div>
             </motion.div>

             {/* Floating Badge Left */}
             <motion.div 
                animate={{ y: [0, 15, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[10%] md:top-[20%] left-0 md:left-[10%] p-3 md:p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl shadow-xl z-30 flex items-center gap-3 scale-90 md:scale-100 origin-left"
             >
                <div className="p-1.5 md:p-2 bg-teal-500/20 rounded-lg text-teal-400"><Globe size={16} className="md:w-[18px] md:h-[18px]"/></div>
                <div className="hidden sm:block">
                   <div className="text-[10px] text-slate-500">Network</div>
                   <div className="text-xs md:text-sm font-bold text-white">Global Edge</div>
                </div>
             </motion.div>

             {/* Floating Badge Right */}
             <motion.div 
                animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-[20%] md:bottom-[30%] right-0 md:right-[10%] p-3 md:p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl shadow-xl z-10 flex items-center gap-3 scale-90 md:scale-100 origin-right"
             >
                <div className="p-1.5 md:p-2 bg-purple-500/20 rounded-lg text-purple-400"><Zap size={16} className="md:w-[18px] md:h-[18px]"/></div>
                <div className="hidden sm:block">
                   <div className="text-[10px] text-slate-500">Latency</div>
                   <div className="text-xs md:text-sm font-bold text-white">12ms</div>
                </div>
             </motion.div>
         </div>

      </div>
    </section>
  );
};

export default Hero;