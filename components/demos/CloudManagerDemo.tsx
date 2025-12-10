import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Server, Cloud, LayoutGrid, Settings, Bell, Search, Database, Globe } from 'lucide-react';

const CloudManagerDemo: React.FC = () => {
  // Generate random data for the chart
  const generateChartData = () => {
    const points = [];
    for (let i = 0; i < 20; i++) {
      points.push(30 + Math.random() * 40);
    }
    return points;
  };
  
  const points = generateChartData();
  const pathData = `M0,${100 - points[0]} ` + points.map((p, i) => `L${(i / (points.length - 1)) * 100},${100 - p}`).join(' ');

  return (
    <div className="w-full h-[320px] md:h-[400px] bg-slate-950 rounded-xl overflow-hidden flex border border-slate-800 shadow-2xl font-sans select-none text-slate-300">
       {/* Sidebar - Hidden on Mobile */}
       <div className="hidden md:flex w-14 bg-slate-900 border-r border-slate-800 flex-col items-center py-4 gap-6 z-10">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-900/50">
             <Cloud size={16} />
          </div>
          <div className="flex flex-col gap-4 mt-2">
             <div className="p-2 bg-slate-800 text-blue-400 rounded-lg"><LayoutGrid size={18} /></div>
             <div className="p-2 text-slate-500 hover:text-slate-300"><Server size={18} /></div>
             <div className="p-2 text-slate-500 hover:text-slate-300"><Database size={18} /></div>
             <div className="p-2 text-slate-500 hover:text-slate-300"><Globe size={18} /></div>
          </div>
          <div className="mt-auto p-2 text-slate-500 hover:text-slate-300"><Settings size={18} /></div>
       </div>

       {/* Main Content */}
       <div className="flex-1 flex flex-col bg-slate-950 min-w-0">
          {/* Header */}
          <div className="h-14 border-b border-slate-800 flex items-center justify-between px-4 md:px-6 bg-slate-900/50">
             <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-slate-400 overflow-hidden whitespace-nowrap">
                <span className="font-semibold text-white truncate">Dashboard</span>
                <span className="text-slate-600">/</span>
                <span className="truncate">Prod Cluster</span>
             </div>
             <div className="flex items-center gap-3 md:gap-4 shrink-0">
                <Search size={16} className="text-slate-500 hidden sm:block" />
                <div className="relative">
                   <Bell size={16} className="text-slate-500" />
                   <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                </div>
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px] font-bold border border-indigo-500/30">JS</div>
             </div>
          </div>

          <div className="p-4 md:p-6 overflow-hidden flex flex-col gap-4 md:gap-6">
             {/* Stats Row - Responsive Grid */}
             <div className="grid grid-cols-3 gap-2 md:gap-4">
                <div className="bg-slate-900 p-3 md:p-4 rounded-xl border border-slate-800 relative overflow-hidden group">
                   <div className="hidden sm:block absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity"><Activity size={40} /></div>
                   <div className="text-[9px] md:text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1 truncate">Total Req</div>
                   <div className="text-lg md:text-2xl font-bold text-white mb-1">2.4M</div>
                   <div className="text-[9px] md:text-[10px] text-green-400 flex items-center gap-1">↑ 12%</div>
                </div>
                <div className="bg-slate-900 p-3 md:p-4 rounded-xl border border-slate-800 relative overflow-hidden group">
                   <div className="hidden sm:block absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity"><Server size={40} /></div>
                   <div className="text-[9px] md:text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1 truncate">Latency</div>
                   <div className="text-lg md:text-2xl font-bold text-white mb-1">42ms</div>
                   <div className="text-[9px] md:text-[10px] text-blue-400 flex items-center gap-1">− 5ms</div>
                </div>
                <div className="bg-slate-900 p-3 md:p-4 rounded-xl border border-slate-800 relative overflow-hidden group">
                   <div className="hidden sm:block absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity"><Database size={40} /></div>
                   <div className="text-[9px] md:text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1 truncate">Errors</div>
                   <div className="text-lg md:text-2xl font-bold text-white mb-1">0.02%</div>
                   <div className="text-[9px] md:text-[10px] text-green-400 flex items-center gap-1">Stable</div>
                </div>
             </div>

             {/* Main Chart Area */}
             <div className="flex-1 bg-slate-900 rounded-xl border border-slate-800 p-3 md:p-4 flex flex-col relative overflow-hidden min-h-0">
                <div className="flex justify-between items-center mb-2 md:mb-4 z-10">
                   <h3 className="text-xs font-bold text-slate-300">Traffic</h3>
                   <div className="flex gap-2">
                      <div className="flex items-center gap-1.5 text-[9px] md:text-[10px]">
                         <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div> <span className="text-slate-500">In</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[9px] md:text-[10px]">
                         <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-500"></div> <span className="text-slate-500">Out</span>
                      </div>
                   </div>
                </div>
                
                {/* SVG Chart */}
                <div className="flex-1 relative">
                   <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                         <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                         </linearGradient>
                      </defs>
                      <line x1="0" y1="25" x2="100" y2="25" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="2" />
                      <line x1="0" y1="50" x2="100" y2="50" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="2" />
                      <line x1="0" y1="75" x2="100" y2="75" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="2" />
                      
                      <path d={`${pathData} L100,100 L0,100 Z`} fill="url(#gradient)" />
                      <path d={pathData} fill="none" stroke="#3b82f6" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                   </svg>
                   
                   <motion.div 
                      className="absolute top-0 bottom-0 w-px bg-white/20 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                      animate={{ left: ['0%', '100%'] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                   />
                </div>
             </div>

             {/* Bottom Table Mock - Hidden on very small screens or abbreviated */}
             <div className="h-16 md:h-20 bg-slate-900 rounded-xl border border-slate-800 p-2 md:p-3 overflow-hidden">
                <table className="w-full text-left">
                   <thead>
                      <tr className="text-[9px] md:text-[10px] text-slate-500 border-b border-slate-800">
                         <th className="pb-1 md:pb-2 font-medium">Service</th>
                         <th className="pb-1 md:pb-2 font-medium hidden sm:table-cell">Status</th>
                         <th className="pb-1 md:pb-2 font-medium">CPU</th>
                      </tr>
                   </thead>
                   <tbody className="text-[9px] md:text-[10px] text-slate-300">
                      <tr>
                         <td className="pt-1 md:pt-2 truncate max-w-[80px] sm:max-w-none">api-gateway</td>
                         <td className="pt-1 md:pt-2 hidden sm:table-cell"><span className="text-green-400">● OK</span></td>
                         <td className="pt-1 md:pt-2">45%</td>
                      </tr>
                      <tr>
                         <td className="pt-1 md:pt-2 text-slate-500 truncate max-w-[80px] sm:max-w-none">auth-svc</td>
                         <td className="pt-1 md:pt-2 hidden sm:table-cell"><span className="text-green-400">● OK</span></td>
                         <td className="pt-1 md:pt-2 text-slate-500">12%</td>
                      </tr>
                   </tbody>
                </table>
             </div>
          </div>
       </div>
    </div>
  );
};

export default CloudManagerDemo;