import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scan, Zap, Layers, Cpu, Eye, AlertTriangle, 
  CheckCircle2, Server, ArrowRight, ShieldCheck, 
  Box, Maximize2, GitBranch, Database, Activity
} from 'lucide-react';
import SafetyDemo from '../components/demos/SafetyDemo';
import { useContact } from '../context/ContactContext';
import { useNavigate } from 'react-router-dom';

const DotAnomaly: React.FC = () => {
  const { openContact } = useContact();
  const navigate = useNavigate();

  const faqs = [
    {
      q: "How does the 'Reference Memory Bank' work?",
      a: "Unlike traditional AI that needs thousands of defect images, Dot Anomaly learns from 'normal' (defect-free) samples. It creates a database of feature embeddings. During inspection, it retrieves and compares patches against this Golden Reference to find deviations."
    },
    {
      q: "What is the difference between Global and Local matching?",
      a: "Our Hierarchical Engine first uses Global Filtering to find the most similar reference images roughly. Then, Local Matching compares specific micro-patches within those references. This cascade approach ensures sub-millisecond speed without sacrificing pixel-level accuracy."
    },
    {
      q: "Can it run on edge devices?",
      a: "Yes. Dot Anomaly is designed with a lightweight inference pipeline optimized for edge servers (On-Premise). It processes video locally to ensure <20ms latency and data security, independent of internet connectivity."
    },
    {
      q: "What hardware is required?",
      a: "For 20-50 cameras, we recommend a standard server (8-core CPU, 16GB RAM). For high-speed defect detection, a GPU-accelerated edge gateway is recommended for optimal frame rates."
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-950 font-sans text-slate-300">
      
      {/* --- HERO SECTION --- */}
      <div className="container mx-auto px-6 mb-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6 border border-orange-500/20"
            >
              <Eye size={14} /> Visual Intelligence Platform
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white leading-tight">
              Dot <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Anomaly</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-medium mb-6">
              Precision Defect Detection & Factory Safety Automation
            </p>
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
              A retrieval-based computer vision engine that detects anomalies in sub-milliseconds. 
              From real-time fire safety to microscopic defect detection, Dot Anomaly sees what humans miss.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={openContact}
                className="px-8 py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-500 transition-all flex items-center gap-2 shadow-lg shadow-orange-900/30"
              >
                Schedule Demo <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth'})}
                className="px-8 py-4 bg-slate-900 text-slate-300 font-bold rounded-xl border border-slate-800 hover:bg-slate-800 transition-all"
              >
                How It Works
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-[100px] opacity-60"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-[100px] opacity-60"></div>
                
                {/* The Video Simulation */}
                <div className="relative z-10 shadow-2xl shadow-orange-900/20 rounded-2xl overflow-hidden border border-slate-800">
                  <SafetyDemo />
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur text-slate-200 p-3 rounded-lg border border-slate-800 flex justify-between items-center text-xs shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-mono text-green-400">LIVE INFERENCE: 14ms</span>
                    </div>
                    <div className="font-mono text-slate-500">MODEL: Patch-Retrieval-v2</div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- OVERVIEW / PROBLEM-SOLUTION --- */}
      <section className="bg-slate-900 py-20 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">Why Traditional Vision Fails</h2>
            <p className="text-slate-400 text-lg">
              Conventional QA systems require thousands of "defect" images to train. 
              In the real world, anomalies are rare and unpredictable. Dot Anomaly solves this with 
              <span className="font-bold text-orange-500"> Reference-Based Retrieval</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20"><GitBranch size={24}/></div>
              <h3 className="text-xl font-bold text-white mb-3">Patch-Based Retrieval</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Instead of simple classification, we break images into micro-patches and compare them against a "Golden Reference" memory bank.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-orange-500/30 transition-all">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 mb-6 border border-orange-500/20"><Layers size={24}/></div>
              <h3 className="text-xl font-bold text-white mb-3">Hierarchical Search</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A two-stage pipeline: Global Filtering to find similar references, then Local Matching to pinpoint sub-millimeter defects.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-green-500/30 transition-all">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 mb-6 border border-green-500/20"><Zap size={24}/></div>
              <h3 className="text-xl font-bold text-white mb-3">Sub-Millisecond Speed</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Optimized indexing structures allow for real-time inference even on standard hardware, suitable for high-speed conveyor belts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS (ARCHITECTURE) --- */}
      <section id="architecture" className="py-24 relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16">
            <span className="text-orange-400 font-bold tracking-widest text-sm uppercase">System Architecture</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 text-white">The Architecture of Truth</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center font-bold text-slate-400 bg-slate-900 shrink-0 group-hover:border-orange-500/50 group-hover:text-orange-400 transition-colors">1</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Reference Memory Bank</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    A database built from "normal" (defect-free) samples. Each image is divided into sub-regions (patches) and feature embeddings are extracted and stored.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 group">
                 <div className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center font-bold text-slate-400 bg-slate-900 shrink-0 group-hover:border-orange-500/50 group-hover:text-orange-400 transition-colors">2</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Hierarchical Retrieval Engine</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    <strong>Global Filtering:</strong> Selects candidate references most similar to the test image.<br/>
                    <strong>Local Matching:</strong> Compares small localized patches only within those candidates to save compute.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 group">
                 <div className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center font-bold text-slate-400 bg-slate-900 shrink-0 group-hover:border-orange-500/50 group-hover:text-orange-400 transition-colors">3</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Anomaly Scoring & Heatmaps</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Deviations are aggregated into a score map. Anomalies are visualized as heatmaps over the original image for instant explainability and manual review.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Representation of Architecture - Keep Dark for contrast */}
            <div className="bg-slate-900 p-8 rounded-3xl border border-white/5 flex flex-col justify-center items-center relative shadow-2xl">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Cpu size={180} className="text-white"/>
               </div>
               
               <div className="space-y-4 w-full max-w-sm relative z-10">
                  <div className="bg-slate-950 p-4 rounded-xl border border-white/10 text-center flex items-center justify-between">
                    <div className="text-left">
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest">Input Stream</div>
                        <div className="font-bold text-white">Camera Feed</div>
                    </div>
                    <Server size={20} className="text-orange-400" />
                  </div>
                  
                  <div className="flex justify-center"><ArrowRight className="rotate-90 text-slate-600"/></div>
                  
                  <div className="bg-slate-950 p-6 rounded-xl border-2 border-orange-500/50 text-center shadow-[0_0_30px_rgba(249,115,22,0.15)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent"></div>
                    <div className="text-lg font-bold text-white mb-3 relative z-10">Inference Core</div>
                    <div className="space-y-2 relative z-10">
                       <div className="flex justify-between text-xs bg-slate-900 p-2 rounded border border-slate-800">
                          <span className="text-slate-400">Feature Extraction</span>
                          <span className="text-green-400">PyTorch</span>
                       </div>
                       <div className="flex justify-between text-xs bg-slate-900 p-2 rounded border border-slate-800">
                          <span className="text-slate-400">Patch Matching</span>
                          <span className="text-blue-400">FAISS</span>
                       </div>
                    </div>
                  </div>

                  <div className="flex justify-center"><ArrowRight className="rotate-90 text-slate-600"/></div>
                  
                   <div className="bg-slate-950 p-4 rounded-xl border border-white/10 text-center flex justify-between items-center">
                    <div className="text-left">
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest">Output</div>
                        <div className="font-bold text-white">Heatmap Overlay</div>
                    </div>
                    <Activity className="text-green-400" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- USE CASES --- */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white">Dual Operation Modes</h2>
              <p className="text-slate-400 mt-4">One platform, multiple industrial applications.</p>
           </div>

           <div className="grid md:grid-cols-2 gap-8">
              {/* Use Case 1: Safety */}
              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-red-500/30 transition-all group shadow-sm hover:shadow-lg">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-xs font-bold uppercase mb-6 border border-red-500/20">
                    <AlertTriangle size={14} /> Safety Mode
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-4">Real-Time Hazard Detection</h3>
                 <p className="text-slate-400 mb-6 text-sm">
                    Continuous monitoring of high-risk zones using live camera feeds.
                 </p>
                 <ul className="space-y-4">
                    <li className="flex gap-3">
                       <CheckCircle2 className="text-red-500 shrink-0" size={20} />
                       <span className="text-slate-300 text-sm"><strong>Fire & Smoke:</strong> Instant detection before thermal sensors trigger.</span>
                    </li>
                    <li className="flex gap-3">
                       <CheckCircle2 className="text-red-500 shrink-0" size={20} />
                       <span className="text-slate-300 text-sm"><strong>PPE Compliance:</strong> Auto-check for helmets, vests, and gloves.</span>
                    </li>
                    <li className="flex gap-3">
                       <CheckCircle2 className="text-red-500 shrink-0" size={20} />
                       <span className="text-slate-300 text-sm"><strong>Zone Intrusion:</strong> Detect personnel entering restricted operational areas.</span>
                    </li>
                 </ul>
              </div>

              {/* Use Case 2: Quality */}
              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/30 transition-all group shadow-sm hover:shadow-lg">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-bold uppercase mb-6 border border-blue-500/20">
                    <Scan size={14} /> Quality Mode
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-4">Semi-Automatic Inspection</h3>
                 <p className="text-slate-400 mb-6 text-sm">
                    High-precision analysis of static images for QA and R&D.
                 </p>
                 <ul className="space-y-4">
                    <li className="flex gap-3">
                       <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                       <span className="text-slate-300 text-sm"><strong>Surface Defects:</strong> Identify scratches, dents, and coating errors.</span>
                    </li>
                    <li className="flex gap-3">
                       <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                       <span className="text-slate-300 text-sm"><strong>Assembly Verification:</strong> Detect missing components or misalignment.</span>
                    </li>
                    <li className="flex gap-3">
                       <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                       <span className="text-slate-300 text-sm"><strong>Lab Research:</strong> High-res analysis for validation and testing.</span>
                    </li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* --- TECH SPECS --- */}
      <section id="tech-specs" className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-4">Technical Specifications</h2>
              <p className="text-slate-400 text-sm">
                Built on a modular architecture designed for edge deployment and cloud scalability.
              </p>
            </div>
            <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-white mb-2 flex items-center gap-2"><Maximize2 size={16} className="text-slate-500"/> Interface</h4>
                <p className="text-sm text-slate-400">Multi-page Dashboard (CustomTkinter/Web), Interactive Metrics</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2 flex items-center gap-2"><Cpu size={16} className="text-slate-500"/> Core Compute</h4>
                <p className="text-sm text-slate-400">PyTorch, NumPy, Optimized Retrieval Engine</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2 flex items-center gap-2"><Box size={16} className="text-slate-500"/> Image Proc</h4>
                <p className="text-sm text-slate-400">OpenCV, Pillow, Adaptive Thresholding</p>
              </div>
               <div>
                <h4 className="font-bold text-white mb-2 flex items-center gap-2"><Server size={16} className="text-slate-500"/> Deployment</h4>
                <p className="text-sm text-slate-400">On-Prem Edge Server (Docker), Cloud Backup</p>
              </div>
               <div>
                <h4 className="font-bold text-white mb-2 flex items-center gap-2"><ShieldCheck size={16} className="text-slate-500"/> Accuracy</h4>
                <p className="text-sm text-slate-400">99.0% on Standard Datasets (MVTec)</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2 flex items-center gap-2"><Zap size={16} className="text-slate-500"/> Latency</h4>
                <p className="text-sm text-slate-400">&lt; 20ms per frame (Hardware Dependent)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-20 bg-slate-950">
         <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
               {faqs.map((item, idx) => (
                  <div key={idx} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-sm">
                     <h3 className="text-lg font-bold text-white mb-2">{item.q}</h3>
                     <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- CTA --- */}
      <section className="bg-slate-900 py-16 text-center relative overflow-hidden border-t border-slate-800">
         <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600 rounded-full blur-[100px] opacity-20"></div>
         <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-6">Ready to automate your safety protocols?</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
               Deploy Dot Anomaly in your facility today. Enhance safety and quality with the power of visual intelligence.
            </p>
            <div className="flex justify-center gap-4">
               <button onClick={openContact} className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-colors shadow-lg hover:shadow-orange-900/50">
                  Request Full Demo
               </button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default DotAnomaly;