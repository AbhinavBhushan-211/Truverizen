import React, { useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle, Video, Activity, Flame, HardHat, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SafetyDemo: React.FC = () => {
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert = Math.random() > 0.7 ? "Zone B Violation" : null;
      if (newAlert) setAlerts(prev => [newAlert, ...prev].slice(0, 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[280px] md:h-[340px] bg-[#0F172A] rounded-xl overflow-hidden flex flex-col border border-slate-800">
       {/* Modern SaaS Header */}
       <div className="h-12 border-b border-slate-800 bg-[#0B1221] flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
             <div className="flex items-center gap-2 px-2 py-1 bg-green-500/10 rounded text-[10px] font-bold text-green-400 border border-green-500/20">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div> LIVE
             </div>
             <span className="text-slate-400 text-xs font-medium">Camera_01_Main_Floor</span>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <ShieldCheck size={12} className="text-indigo-400"/> Status: Secure
             </div>
          </div>
       </div>

       {/* Feed Area */}
       <div className="flex-1 relative bg-[#1E293B] overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          {/* Animated Object - Worker */}
          <motion.div 
            initial={{ x: 50, y: 50 }}
            animate={{ x: [50, 80, 50] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 left-1/4"
          >
             <div className="w-16 h-24 border border-green-500/50 bg-green-500/5 rounded-sm relative">
                {/* Bounding Box Corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-500"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-green-500"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-green-500"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-500"></div>
                
                {/* Label */}
                <div className="absolute -top-5 left-0 px-1.5 py-0.5 bg-green-500 text-[#0F172A] text-[9px] font-bold rounded-sm whitespace-nowrap">
                   Worker #42 (99%)
                </div>
             </div>
          </motion.div>

          {/* Scanning Overlay */}
          <motion.div 
             className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-500/0 via-indigo-500/5 to-indigo-500/0 pointer-events-none"
             animate={{ top: ['-100%', '100%'] }}
             transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
       </div>

       {/* Footer / Event Stream */}
       <div className="h-14 bg-[#0B1221] border-t border-slate-800 flex items-center px-4 gap-4 overflow-hidden">
          <div className="text-[10px] font-bold text-slate-500 uppercase shrink-0">Recent Events</div>
          <div className="flex gap-2">
             <AnimatePresence mode='popLayout'>
                {alerts.map((alert, i) => (
                   <motion.div 
                      key={`${i}-${alert}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded text-[10px] text-indigo-300 flex items-center gap-1.5"
                   >
                      <Activity size={10} /> {alert}
                   </motion.div>
                ))}
                <div className="px-2 py-1 bg-slate-800/50 border border-slate-700 rounded text-[10px] text-slate-400">System Nominal</div>
             </AnimatePresence>
          </div>
       </div>
    </div>
  );
};

export default SafetyDemo;