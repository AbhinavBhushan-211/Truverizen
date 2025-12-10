import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Server, Cloud } from 'lucide-react';

const CloudManagerDemo: React.FC = () => {
  return (
    <div className="w-full h-[280px] md:h-[340px] bg-[#0F172A] rounded-xl overflow-hidden flex flex-col border border-slate-800 shadow-2xl">
       <div className="h-12 border-b border-slate-800 bg-[#0B1221] flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
             <Cloud size={14} className="text-blue-400" />
             <span className="text-xs font-bold text-white">Cloud Manager</span>
          </div>
       </div>

       <div className="p-4 space-y-4">
          <div className="grid grid-cols-3 gap-3">
             <div className="bg-[#1E293B] p-3 rounded-lg border border-slate-700">
                <div className="text-[9px] text-slate-400 uppercase font-bold mb-1">Nodes</div>
                <div className="text-lg font-bold text-white font-mono">45</div>
             </div>
             <div className="bg-[#1E293B] p-3 rounded-lg border border-slate-700">
                <div className="text-[9px] text-slate-400 uppercase font-bold mb-1">Load</div>
                <div className="text-lg font-bold text-blue-400 font-mono">42%</div>
             </div>
             <div className="bg-[#1E293B] p-3 rounded-lg border border-slate-700">
                <div className="text-[9px] text-slate-400 uppercase font-bold mb-1">Health</div>
                <div className="text-lg font-bold text-green-400 font-mono">100%</div>
             </div>
          </div>

          <div className="bg-[#1E293B] rounded-lg border border-slate-700 p-3 h-32 flex items-end gap-1 relative overflow-hidden">
             <div className="absolute top-3 left-3 text-[9px] text-slate-400 font-bold">Network Traffic (GB/s)</div>
             {[...Array(24)].map((_, i) => (
                <motion.div 
                   key={i}
                   initial={{ height: '10%' }}
                   animate={{ height: `${Math.random() * 60 + 20}%` }}
                   transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
                   className="flex-1 bg-blue-500 rounded-t-[2px] opacity-80 hover:opacity-100 hover:bg-blue-400 transition-colors"
                />
             ))}
          </div>
       </div>
    </div>
  );
};

export default CloudManagerDemo;