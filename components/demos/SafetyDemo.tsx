import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, ShieldCheck, Activity, Maximize, AlertOctagon } from 'lucide-react';

const SafetyDemo: React.FC = () => {
  const [hazardDetected, setHazardDetected] = useState(false);
  const [workerPos, setWorkerPos] = useState({ x: 20, y: 30 });
  const [forkliftPos, setForkliftPos] = useState({ x: 80, y: 60 });
  
  // Hazard Zone Coordinates (approx %)
  const hazardZone = { xMin: 60, xMax: 90, yMin: 20, yMax: 80 };

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate random movement for worker
      setWorkerPos(prev => {
        const newX = Math.max(5, Math.min(95, prev.x + (Math.random() * 10 - 5)));
        const newY = Math.max(5, Math.min(95, prev.y + (Math.random() * 10 - 5)));
        
        // Check collision with hazard zone
        const inZone = newX > hazardZone.xMin && newX < hazardZone.xMax && newY > hazardZone.yMin && newY < hazardZone.yMax;
        setHazardDetected(inZone);
        
        return { x: newX, y: newY };
      });

      // Simulate linear movement for forklift
      setForkliftPos(prev => {
         let newY = prev.y + 1; // Move down
         if (newY > 90) newY = 10; // Reset
         return { x: prev.x, y: newY };
      });

    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[320px] md:h-[400px] bg-slate-950 rounded-xl overflow-hidden flex flex-col border border-slate-800 shadow-2xl font-mono">
       
       {/* CCTV Header */}
       <div className="h-10 bg-black flex items-center justify-between px-3 md:px-4 border-b border-slate-800 z-20">
          <div className="flex items-center gap-2 md:gap-4">
             <div className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-red-500">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full animate-pulse"></div> REC
             </div>
             <span className="text-slate-500 text-[10px] md:text-xs truncate max-w-[100px] md:max-w-none">CAM-04 | WAREHOUSE-B</span>
          </div>
          <div className="text-[10px] md:text-xs text-slate-500">
            {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          </div>
       </div>

       {/* Viewport */}
       <div className="flex-1 relative overflow-hidden bg-[#0a0a0a]">
          {/* Floor Grid */}
          <div className="absolute inset-0 opacity-10" 
               style={{ 
                  backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
                  backgroundSize: '40px 40px',
                  perspective: '1000px',
                  transform: 'rotateX(20deg) scale(1.2)'
               }}>
          </div>

          {/* Hazard Zone */}
          <div 
            className="absolute border-2 border-dashed border-red-500/50 bg-red-500/10 flex items-center justify-center"
            style={{ 
               left: `${hazardZone.xMin}%`, 
               width: `${hazardZone.xMax - hazardZone.xMin}%`,
               top: `${hazardZone.yMin}%`, 
               height: `${hazardZone.yMax - hazardZone.yMin}%`
            }}
          >
             <span className="text-red-500/50 text-[9px] md:text-xs font-bold uppercase tracking-widest rotate-[-45deg] whitespace-nowrap">Restricted</span>
          </div>

          {/* Safe Zone (Walkway) */}
          <div className="absolute left-5 top-0 bottom-0 w-16 border-r border-dashed border-green-500/30 bg-green-500/5"></div>

          {/* Worker Entity */}
          <motion.div 
            animate={{ left: `${workerPos.x}%`, top: `${workerPos.y}%` }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="absolute w-0 h-0 flex items-center justify-center"
          >
             <div className={`relative -translate-x-1/2 -translate-y-1/2 w-8 h-12 md:w-12 md:h-16 border-2 ${hazardDetected ? 'border-red-500 bg-red-500/20' : 'border-blue-500 bg-blue-500/20'} rounded-sm flex flex-col items-center justify-between pb-1`}>
                <div className={`absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 text-[8px] md:text-[9px] font-bold px-1 py-0.5 rounded text-black ${hazardDetected ? 'bg-red-500' : 'bg-blue-500'} whitespace-nowrap`}>
                   W-42
                </div>
                {/* Corners */}
                <Maximize size={8} className={`absolute top-0 left-0 ${hazardDetected ? 'text-red-500' : 'text-blue-500'} rotate-0`} />
                <Maximize size={8} className={`absolute top-0 right-0 ${hazardDetected ? 'text-red-500' : 'text-blue-500'} rotate-90`} />
                <Maximize size={8} className={`absolute bottom-0 right-0 ${hazardDetected ? 'text-red-500' : 'text-blue-500'} rotate-180`} />
                <Maximize size={8} className={`absolute bottom-0 left-0 ${hazardDetected ? 'text-red-500' : 'text-blue-500'} rotate-[-90deg]`} />
             </div>
          </motion.div>

          {/* Forklift Entity */}
          <motion.div 
            animate={{ left: `${forkliftPos.x}%`, top: `${forkliftPos.y}%` }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="absolute w-0 h-0 flex items-center justify-center"
          >
             <div className="relative -translate-x-1/2 -translate-y-1/2 w-16 h-20 md:w-20 md:h-24 border-2 border-yellow-500 bg-yellow-500/10 rounded-sm">
                <div className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 text-[8px] md:text-[9px] font-bold px-1 py-0.5 rounded text-black bg-yellow-500 whitespace-nowrap">
                   Fork-A
                </div>
             </div>
          </motion.div>

          {/* Hazard Alert Overlay */}
          <AnimatePresence>
             {hazardDetected && (
                <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0 }}
                   className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1.5 md:px-4 md:py-2 bg-red-600 text-white rounded-lg shadow-xl flex items-center gap-2 z-30 whitespace-nowrap"
                >
                   <AlertOctagon size={16} className="animate-pulse" />
                   <span className="font-bold text-xs md:text-sm">ZONE VIOLATION</span>
                </motion.div>
             )}
          </AnimatePresence>
       </div>

       {/* Control Panel / Logs */}
       <div className="h-auto min-h-[56px] bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center px-3 py-2 sm:px-4 gap-2 sm:gap-6 z-20">
          <div className="flex-1 w-full">
             <div className="text-[9px] md:text-[10px] text-slate-500 uppercase font-bold mb-0.5 md:mb-1">Live Feed Log</div>
             <div className="text-[10px] md:text-xs font-mono text-slate-300 flex items-center gap-2 truncate">
                {hazardDetected ? (
                   <span className="text-red-400 flex items-center gap-1 truncate"><AlertTriangle size={12}/> W-42 entered Zone B</span>
                ) : (
                   <span className="text-green-400 flex items-center gap-1 truncate"><ShieldCheck size={12}/> Monitoring active</span>
                )}
             </div>
          </div>
          
          <div className="flex gap-4 border-l-0 sm:border-l border-slate-800 pl-0 sm:pl-4 w-full sm:w-auto justify-between sm:justify-start">
             <div>
                <div className="text-[9px] md:text-[10px] text-slate-500 uppercase font-bold">Conf.</div>
                <div className="text-xs md:text-sm font-bold text-blue-400">99.8%</div>
             </div>
             <div>
                <div className="text-[9px] md:text-[10px] text-slate-500 uppercase font-bold">Ping</div>
                <div className="text-xs md:text-sm font-bold text-green-400">14ms</div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default SafetyDemo;