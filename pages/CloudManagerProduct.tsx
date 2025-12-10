import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, Server, Activity, Zap, Shield, 
  GitBranch, Database, LayoutGrid, Bell, 
  Slack, ArrowRight, CheckCircle2, Search,
  Cpu, BarChart3, Lock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CloudManagerDemo from '../components/demos/CloudManagerDemo';
import { useContact } from '../context/ContactContext';

const CloudManagerProduct: React.FC = () => {
  const { openContact } = useContact();
  const navigate = useNavigate();

  const features = [
    {
      title: "Pull-Based Collection",
      desc: "Efficient, scalable metric scraping model (Prometheus-style) that ensures high reliability without overloading your services.",
      icon: ArrowRight
    },
    {
      title: "PromQL Engine",
      desc: "Leverage a powerful query engine for flexible, complex time-series analysis and multidimensional data slicing.",
      icon: Search
    },
    {
      title: "Dynamic Discovery",
      desc: "Automatically detects services across Kubernetes clusters and AWS EC2 instances—no manual configuration required.",
      icon: Zap
    }
  ];

  const alerts = [
    { label: "Team-based Routing", desc: "Directs alerts to specific owners to reduce noise." },
    { label: "Smart Thresholds", desc: "Anomaly-based rules for unexpected behavior." },
    { label: "Multi-Channel", desc: "Seamless integration with Slack, Teams, and Email." }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-950 font-sans text-slate-300">
      
      {/* --- Hero Section --- */}
      <div className="container mx-auto px-6 mb-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/20"
            >
              <Activity size={14} /> Unified Observability
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white leading-[1.1]">
              Unified Monitoring for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Modern Infrastructure</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
              Gain single-pane visibility across multi-cloud and on-prem environments. Cloud Manager consolidates metrics, logs, and traces to accelerate troubleshooting and ensure SLA compliance.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/platform/cloud-manager')}
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all flex items-center gap-2 shadow-lg shadow-blue-900/30"
              >
                Launch Console <ArrowRight size={18} />
              </button>
              <button 
                onClick={openContact}
                className="px-8 py-4 bg-slate-900 text-slate-300 font-bold rounded-xl border border-slate-800 hover:bg-slate-800 transition-all shadow-sm"
              >
                Book a Demo
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-2xl blur-2xl opacity-60"></div>
                <div className="relative z-10">
                   <CloudManagerDemo />
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Value Prop Grid --- */}
      <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">What Cloud Manager Brings</h2>
              <p className="text-slate-400">Centralized, real-time monitoring for hybrid and multi-cloud operations.</p>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all hover:shadow-md">
                 <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                    <Cloud size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">Multi-Cloud Support</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">
                    Unified visibility across AWS, Azure, and Google Cloud, plus Kubernetes clusters, all in one interface.
                 </p>
              </div>
              <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all hover:shadow-md">
                 <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6 border border-cyan-500/20">
                    <Activity size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">Real-time Visibility</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">
                    Accelerate troubleshooting and root cause analysis with high-cardinality metrics streamed in real-time.
                 </p>
              </div>
              <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all hover:shadow-md">
                 <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
                    <Shield size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">SLA Compliance</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">
                    Automated reporting and drift detection to ensure your infrastructure meets rigorous service standards.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* --- Architecture Section --- */}
      <section className="py-24 relative overflow-hidden bg-slate-950">
         <div className="absolute inset-0 bg-blue-900/10"></div>
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                     Under the Hood: <br/> <span className="text-blue-400">Architecture & Features</span>
                  </h2>
                  <p className="text-slate-400 mb-8">
                     Built for scale using a pull-based metrics model and a multi-dimensional data structure, enabling rich labeling and high-cardinality querying.
                  </p>
                  
                  <div className="space-y-6">
                     {features.map((feat, idx) => (
                        <div key={idx} className="flex gap-4">
                           <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 border border-blue-500/20">
                              <feat.icon size={18} />
                           </div>
                           <div>
                              <h4 className="text-white font-bold mb-1">{feat.title}</h4>
                              <p className="text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               
               <div className="lg:w-1/2">
                  <div className="bg-[#0B1221] p-8 rounded-3xl border border-white/10 relative shadow-2xl">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-[80px] opacity-20"></div>
                     <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">System Architecture</h3>
                     
                     <div className="space-y-4">
                        {/* Diagrammatic Elements - Keeping Dark for Contrast against dark section */}
                        <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                           <div className="p-2 bg-orange-500/20 text-orange-400 rounded-lg"><Server size={20}/></div>
                           <div className="flex-1">
                              <div className="text-xs text-slate-400">Source</div>
                              <div className="text-sm font-bold text-white">Kubernetes / EC2 / Bare Metal</div>
                           </div>
                           <div className="px-2 py-1 bg-slate-900 rounded text-[10px] text-slate-500">Exporters</div>
                        </div>

                        <div className="flex justify-center"><div className="h-6 w-0.5 bg-slate-700"></div></div>

                        <div className="flex items-center gap-4 p-4 bg-blue-900/20 rounded-xl border border-blue-500/30">
                           <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg"><Activity size={20}/></div>
                           <div className="flex-1">
                              <div className="text-xs text-blue-300">Ingestion</div>
                              <div className="text-sm font-bold text-white">Cloud Manager Core</div>
                           </div>
                           <div className="px-2 py-1 bg-blue-950 rounded text-[10px] text-blue-300">Scraper</div>
                        </div>

                         <div className="flex justify-center"><div className="h-6 w-0.5 bg-slate-700"></div></div>

                         <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 text-center">
                               <Database size={20} className="mx-auto text-purple-400 mb-2"/>
                               <div className="text-xs font-bold text-white">TSDB Storage</div>
                            </div>
                             <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 text-center">
                               <Bell size={20} className="mx-auto text-green-400 mb-2"/>
                               <div className="text-xs font-bold text-white">Alert Manager</div>
                            </div>
                         </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Alerting & Collaboration --- */}
      <section className="py-20 bg-slate-950">
         <div className="container mx-auto px-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-lg">
               <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="md:w-1/2">
                     <h2 className="text-3xl font-bold text-white mb-6">Alerting & Collaboration</h2>
                     <p className="text-slate-400 mb-8">
                        Route smarter alerts, reduce noise, and speed up incident response. Cloud Manager integrates directly with your team's workflow.
                     </p>
                     <div className="grid gap-4">
                        {alerts.map((item, i) => (
                           <div key={i} className="flex items-center gap-3 p-3 bg-slate-950 rounded-lg border border-slate-800">
                              <CheckCircle2 size={16} className="text-green-500"/>
                              <div className="text-sm text-slate-300">
                                 <span className="font-bold text-white">{item.label}:</span> {item.desc}
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                     <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full"></div>
                        <div className="relative bg-slate-950 border border-slate-800 rounded-2xl p-6 w-72 shadow-2xl">
                           <div className="flex items-center gap-3 mb-4 border-b border-slate-800 pb-4">
                              <div className="bg-red-500/10 p-2 rounded-lg"><Bell size={20} className="text-red-500"/></div>
                              <div>
                                 <div className="text-xs text-red-500 font-bold uppercase">Critical Alert</div>
                                 <div className="text-white text-sm font-bold">{`Latency Spike > 500ms`}</div>
                              </div>
                           </div>
                           <div className="space-y-3">
                              <div className="flex items-center gap-2 text-xs text-slate-400">
                                 <Server size={12} /> Service: payment-gateway
                              </div>
                              <div className="flex items-center gap-2 text-xs text-slate-400">
                                 <Clock size={12} /> Duration: 2m 14s
                              </div>
                           </div>
                           <div className="mt-4 pt-4 border-t border-slate-800 flex gap-2">
                              <div className="w-8 h-8 rounded bg-[#4A154B] flex items-center justify-center text-white"><Slack size={14}/></div>
                              <div className="flex-1 bg-slate-900 rounded flex items-center px-3 text-xs text-slate-400 border border-slate-800">Sending to #ops-oncall...</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 relative overflow-hidden text-center bg-slate-900">
         <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-display font-bold text-white mb-6">Infuse Agility with Enterprise Standards</h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
               Balance rapid adaptation with consistent performance. Start monitoring your infrastructure in minutes.
            </p>
            <button 
               onClick={() => navigate('/platform/cloud-manager')}
               className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] transition-all"
            >
               Get Started for Free
            </button>
         </div>
      </section>

    </div>
  );
};

// Helper for icon
const Clock = ({ size }: { size: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default CloudManagerProduct;