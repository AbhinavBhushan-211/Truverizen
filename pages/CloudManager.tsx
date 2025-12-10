import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, RefreshCw, Server, Activity, 
  Database, Cloud, AlertCircle, BarChart3, 
  CheckCircle2, Settings
} from 'lucide-react';
import { motion } from 'framer-motion';

const CloudManager: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col bg-slate-950 text-slate-300 overflow-hidden font-sans">
      {/* Tool Header */}
      <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/platform')}
            className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="h-6 w-px bg-slate-800"></div>
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
                <Cloud size={18} />
             </div>
             <span className="font-bold text-lg tracking-tight text-white">Cloud Manager</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 text-green-400 rounded-full text-xs font-mono border border-green-500/20">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              SYSTEM HEALTHY
           </div>
           <button className="p-2 text-slate-400 hover:text-white">
              <RefreshCw size={18} />
           </button>
           <button className="p-2 text-slate-400 hover:text-white">
              <Settings size={18} />
           </button>
        </div>
      </header>

      {/* Main Tool Area */}
      <div className="flex-1 flex overflow-hidden">
         {/* Side Panel */}
         <aside className="w-64 bg-slate-900 border-r border-slate-800 hidden md:flex flex-col">
            <div className="p-4">
               <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Clusters</div>
               <nav className="space-y-1">
                  <button className="w-full text-left px-3 py-2 bg-blue-500/10 text-blue-400 rounded border-l-2 border-blue-500 font-medium text-sm flex items-center gap-2">
                     <Server size={16} /> Production (AWS)
                  </button>
                  <button className="w-full text-left px-3 py-2 text-slate-400 hover:bg-slate-800 hover:text-white rounded text-sm flex items-center gap-2 transition-colors">
                     <Server size={16} /> Staging (GCP)
                  </button>
                  <button className="w-full text-left px-3 py-2 text-slate-400 hover:bg-slate-800 hover:text-white rounded text-sm flex items-center gap-2 transition-colors">
                     <Database size={16} /> DB Cluster Primary
                  </button>
               </nav>
            </div>
         </aside>

         {/* Dashboard Grid */}
         <main className="flex-1 overflow-y-auto p-6 bg-slate-950">
            {/* Top Metrics */}
            <div className="grid grid-cols-4 gap-4 mb-6">
               <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-sm">
                  <div className="text-slate-500 text-xs uppercase font-bold mb-2">Total Nodes</div>
                  <div className="flex items-end gap-2">
                     <span className="text-2xl font-mono font-bold text-white">45</span>
                     <span className="text-green-400 text-xs mb-1 flex items-center"><CheckCircle2 size={12} className="mr-1"/> All Online</span>
                  </div>
               </div>
               <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-sm">
                  <div className="text-slate-500 text-xs uppercase font-bold mb-2">CPU Utilization</div>
                  <div className="flex items-end gap-2">
                     <span className="text-2xl font-mono font-bold text-white">42%</span>
                     <div className="h-1.5 w-16 bg-slate-800 rounded-full mb-2 overflow-hidden">
                        <div className="h-full bg-blue-500 w-[42%]"></div>
                     </div>
                  </div>
               </div>
               <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-sm">
                  <div className="text-slate-500 text-xs uppercase font-bold mb-2">Memory Usage</div>
                  <div className="flex items-end gap-2">
                     <span className="text-2xl font-mono font-bold text-white">68%</span>
                     <div className="h-1.5 w-16 bg-slate-800 rounded-full mb-2 overflow-hidden">
                        <div className="h-full bg-purple-500 w-[68%]"></div>
                     </div>
                  </div>
               </div>
               <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-sm">
                  <div className="text-slate-500 text-xs uppercase font-bold mb-2">Active Alerts</div>
                  <div className="flex items-end gap-2">
                     <span className="text-2xl font-mono font-bold text-white">0</span>
                     <span className="text-slate-400 text-xs mb-1">Last 24h: 3</span>
                  </div>
               </div>
            </div>

            {/* Main Graphs Area */}
            <div className="grid lg:grid-cols-3 gap-6 mb-6">
               <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                     <h3 className="font-bold flex items-center gap-2 text-white"><Activity size={18} className="text-blue-500"/> Network Traffic</h3>
                     <select className="bg-slate-950 border border-slate-800 text-xs rounded px-2 py-1 text-slate-400">
                        <option>Last 1 Hour</option>
                        <option>Last 24 Hours</option>
                     </select>
                  </div>
                  
                  {/* CSS Simulation of a Chart */}
                  <div className="h-64 flex items-end gap-1 border-b border-l border-slate-800 p-2 relative">
                     {/* Horizontal Grid Lines */}
                     <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                        <div className="border-t border-slate-800 w-full"></div>
                        <div className="border-t border-slate-800 w-full"></div>
                        <div className="border-t border-slate-800 w-full"></div>
                        <div className="border-t border-slate-800 w-full"></div>
                        <div className="border-t border-slate-800 w-full"></div>
                     </div>

                     {[...Array(40)].map((_, i) => {
                        const height = Math.floor(Math.random() * 80) + 10;
                        return (
                           <motion.div 
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{ duration: 0.5, delay: i * 0.02 }}
                              className="flex-1 bg-blue-500/80 hover:bg-blue-400 rounded-t-sm"
                           />
                        )
                     })}
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
                     <span>10:00</span>
                     <span>10:15</span>
                     <span>10:30</span>
                     <span>10:45</span>
                     <span>11:00</span>
                  </div>
               </div>

               <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm">
                  <h3 className="font-bold mb-4 flex items-center gap-2 text-white"><AlertCircle size={18} className="text-orange-500"/> Recent Logs</h3>
                  <div className="space-y-3">
                     {[1,2,3,4,5].map((_, i) => (
                        <div key={i} className="text-xs font-mono p-2 bg-slate-950 rounded border border-slate-800">
                           <span className="text-slate-500">[10:{45-i}:23]</span>{' '}
                           <span className={i === 2 ? 'text-orange-400 font-semibold' : 'text-blue-400'}>
                              {i === 2 ? 'WARN: Latency spike detected' : 'INFO: Pod scaled successfully'}
                           </span>
                        </div>
                     ))}
                  </div>
                  <button className="w-full mt-4 py-2 bg-slate-800 hover:bg-slate-700 rounded text-sm font-medium transition-colors text-slate-300">
                     View All Logs
                  </button>
               </div>
            </div>

             <div className="grid md:grid-cols-2 gap-6">
                 <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 shadow-sm">
                     <h3 className="font-bold mb-4 flex items-center gap-2 text-white"><BarChart3 size={18} /> Request Volume</h3>
                     <div className="h-32 flex items-center justify-center text-slate-500 text-sm bg-slate-950 rounded border border-dashed border-slate-800">
                        Visualization Component Loaded
                     </div>
                 </div>
                 <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 shadow-sm">
                     <h3 className="font-bold mb-4 flex items-center gap-2 text-white"><Database size={18} /> Disk I/O</h3>
                     <div className="h-32 flex items-center justify-center text-slate-500 text-sm bg-slate-950 rounded border border-dashed border-slate-800">
                        Visualization Component Loaded
                     </div>
                 </div>
             </div>
         </main>
      </div>
    </div>
  );
};

export default CloudManager;