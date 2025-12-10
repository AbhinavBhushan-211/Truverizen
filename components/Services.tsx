import React from 'react';
import { Cloud, Cpu, Shield, ArrowUpRight, CheckCircle2, Globe, Lock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-32 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 md:mb-20 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6 text-white">
            Our Core <span className="text-indigo-400">Capabilities</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Our capabilities span the entire digital lifecycle, engineered for resilience and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto] md:auto-rows-[340px]">
          
          {/* Card 1: Cloud (Large) */}
          <Link to="/services/cloud" className="md:col-span-2 row-span-1 group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-900/20 transition-all duration-500 shadow-lg min-h-[300px]">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
             
             {/* Visual Background Element - Right Side */}
             <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none hidden md:flex items-center justify-center">
                <Globe size={300} strokeWidth={0.5} className="text-indigo-500 translate-x-12" />
             </div>

             <div className="p-8 md:p-10 h-full flex flex-col justify-between relative z-10">
                <div className="flex justify-between items-start">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
                       <Cloud size={24} className="md:w-[28px] md:h-[28px]" />
                    </div>
                    <div className="text-slate-600 group-hover:text-indigo-400 transition-colors">
                       <ArrowUpRight size={24} />
                    </div>
                </div>
                
                <div className="max-w-md">
                   <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Cloud Services</h3>
                   <p className="text-indigo-400 text-sm font-medium mb-4">Migration, Modernization & Management</p>
                   
                   <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                        <CheckCircle2 size={16} className="text-indigo-500" /> Scalable cloud architecture
                      </li>
                      <li className="flex items-center gap-2 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                        <CheckCircle2 size={16} className="text-indigo-500" /> Serverless migration
                      </li>
                      <li className="flex items-center gap-2 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                        <CheckCircle2 size={16} className="text-indigo-500" /> FinOps optimization
                      </li>
                   </ul>
                </div>
             </div>
          </Link>

          {/* Card 2: AI (Vertical) */}
          <Link to="/services/ai" className="md:col-span-1 md:row-span-2 group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-500 shadow-lg min-h-[400px] md:min-h-0">
             <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
             
             {/* Visual Background Element - Bottom */}
             <div className="absolute -bottom-10 -right-10 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity pointer-events-none">
                <Cpu size={240} strokeWidth={0.5} className="text-purple-500" />
             </div>

             <div className="p-8 md:p-10 h-full flex flex-col relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
                   <Zap size={24} className="md:w-[28px] md:h-[28px]" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Generative AI</h3>
                <p className="text-purple-400 text-sm font-medium mb-6">Automating Workflows, Enhancing Decisions</p>
                
                <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                      <CheckCircle2 size={16} className="text-purple-500" /> Custom RAG pipelines
                    </li>
                    <li className="flex items-center gap-2 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                      <CheckCircle2 size={16} className="text-purple-500" /> Autonomous agents
                    </li>
                    <li className="flex items-center gap-2 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                      <CheckCircle2 size={16} className="text-purple-500" /> Workflow automation
                    </li>
                </ul>
                
                {/* Abstract Data Flow Visual */}
                <div className="mt-auto flex gap-1 items-end h-16 opacity-30 group-hover:opacity-60 transition-opacity">
                   {[...Array(6)].map((_,i) => (
                      <div 
                        key={i} 
                        className="w-full bg-purple-500/50 rounded-t-sm"
                        style={{ height: `${[40, 70, 30, 80, 50, 60][i]}%` }}
                      ></div>
                   ))}
                </div>
             </div>
          </Link>

          {/* Card 3: Security (Expanded to col-span-2 to fill grid) */}
          <Link to="/services/security" className="md:col-span-2 row-span-1 group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 hover:border-teal-500/30 hover:shadow-2xl hover:shadow-teal-900/20 transition-all duration-500 shadow-lg min-h-[300px]">
             <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
             
             {/* Visual Background Element - Right Side */}
             <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none hidden md:flex items-center justify-center">
                <Lock size={280} strokeWidth={0.5} className="text-teal-500 translate-x-12" />
             </div>

             <div className="p-8 md:p-10 h-full flex flex-col justify-between relative z-10">
               <div className="flex justify-between items-start">
                   <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6 border border-teal-500/20">
                      <Shield size={24} className="md:w-[28px] md:h-[28px]" />
                   </div>
                   <div className="text-slate-600 group-hover:text-teal-400 transition-colors">
                       <ArrowUpRight size={24} />
                    </div>
               </div>
               
               <div className="max-w-md">
                  <h3 className="text-xl md:text-xl font-bold text-white mb-1">Cybersecurity</h3>
                  <p className="text-teal-400 text-sm font-medium mb-4">Zero-Trust Resilience</p>
                  
                  <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                        <CheckCircle2 size={16} className="text-teal-500" /> Threat detection & prevention
                      </li>
                      <li className="flex items-center gap-2 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                        <CheckCircle2 size={16} className="text-teal-500" /> Identity protection
                      </li>
                      <li className="flex items-center gap-2 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                        <CheckCircle2 size={16} className="text-teal-500" /> Continuous compliance
                      </li>
                   </ul>
               </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Services;