import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Database, Shield, Zap, Users, 
  MessageSquare, ChevronDown, CheckCircle2, 
  ArrowRight, Sparkles, Brain, Lock, Server
} from 'lucide-react';
import TaraDemo from '../components/demos/TaraDemo';
import { useContact } from '../context/ContactContext';

const Tara: React.FC = () => {
  const { openContact } = useContact();
  const [activeTab, setActiveTab] = useState<'docs' | 'sql'>('docs');

  const faqs = [
    {
      q: "How does TARA ensure data security?",
      a: "TARA operates on a Zero-Trust architecture. For database queries, it enforces read-only access policies and respects your existing row-level security. For documents, it adheres to enterprise access controls, ensuring users only see information they are authorized to view."
    },
    {
      q: "Which databases does TARA support?",
      a: "TARA's Natural Language to SQL engine natively supports MySQL, PostgreSQL, and SQL Server. Custom connectors can be built for other ODBC-compliant data warehouses."
    },
    {
      q: "Can TARA handle complex technical documentation?",
      a: "Yes. TARA is domain-aware. It ingests technical SOPs, API documentation, and engineering wikis, understanding context and terminology to provide precise troubleshooting steps and code snippets."
    },
    {
      q: "Does TARA learn over time?",
      a: "Absolutely. TARA features continuous learning capabilities. As you update your knowledge base or provide feedback on responses, the model refines its understanding to maintain high accuracy."
    }
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
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-500/20"
            >
              <Sparkles size={14} /> Enterprise AI Assistant
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white leading-[1.1]">
              Your Enterprise <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Brain, Unlocked.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-xl">
              TARA (Truverizen AI Response Assistant) bridges the gap between your data and your decision-makers. Transform static PDFs and complex SQL databases into instant, conversational insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={openContact}
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-indigo-600 transition-all flex items-center gap-2 shadow-lg border border-slate-800"
              >
                Schedule Demo <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth'})}
                className="px-8 py-4 bg-slate-800 text-slate-300 font-bold rounded-xl border border-slate-700 hover:bg-slate-700 transition-all shadow-sm"
              >
                Explore Features
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-2xl blur-2xl opacity-60"></div>
                <div className="relative z-10">
                   <TaraDemo />
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Value Prop / Dual Engines --- */}
      <section id="capabilities" className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
              Two Engines. <span className="text-indigo-400">One Interface.</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Most AI tools handle either documents or data. TARA unifies both. Whether it's an HR policy in a PDF or sales figures in a SQL database, TARA retrieves it instantly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Engine 1: Docs */}
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 hover:border-indigo-500/30 transition-all group shadow-sm hover:shadow-lg">
               <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors border border-indigo-500/20">
                  <FileText size={28} />
               </div>
               <h3 className="text-2xl font-bold text-white mb-4">Knowledge Base Engine</h3>
               <p className="text-slate-400 mb-6 leading-relaxed">
                  Domain-aware retrieval from unstructured data. TARA ingests your SOPs, FAQs, and Policies, enabling natural language queries against complex documents.
               </p>
               <ul className="space-y-3">
                  <li className="flex gap-3 text-sm text-slate-300">
                     <CheckCircle2 className="text-indigo-500 shrink-0" size={18} />
                     <span>Multi-format support (PDF, Docx, Spreadsheets)</span>
                  </li>
                  <li className="flex gap-3 text-sm text-slate-300">
                     <CheckCircle2 className="text-indigo-500 shrink-0" size={18} />
                     <span>Contextual generation using business terminology</span>
                  </li>
                  <li className="flex gap-3 text-sm text-slate-300">
                     <CheckCircle2 className="text-indigo-500 shrink-0" size={18} />
                     <span>Continuous learning via knowledge updates</span>
                  </li>
               </ul>
            </div>

            {/* Engine 2: SQL */}
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 hover:border-purple-500/30 transition-all group shadow-sm hover:shadow-lg">
               <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors border border-purple-500/20">
                  <Database size={28} />
               </div>
               <h3 className="text-2xl font-bold text-white mb-4">Database Engine (NL2SQL)</h3>
               <p className="text-slate-400 mb-6 leading-relaxed">
                  Turn plain English into secure SQL. Empower non-technical users to generate reports and summaries from MySQL, PostgreSQL, and SQL Server without writing code.
               </p>
               <ul className="space-y-3">
                  <li className="flex gap-3 text-sm text-slate-300">
                     <CheckCircle2 className="text-purple-500 shrink-0" size={18} />
                     <span>Instant SQL generation & execution</span>
                  </li>
                  <li className="flex gap-3 text-sm text-slate-300">
                     <CheckCircle2 className="text-purple-500 shrink-0" size={18} />
                     <span>Formatted results and chart generation</span>
                  </li>
                  <li className="flex gap-3 text-sm text-slate-300">
                     <CheckCircle2 className="text-purple-500 shrink-0" size={18} />
                     <span>Read-only enforcement for data security</span>
                  </li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- Use Cases --- */}
      <section className="py-24 bg-slate-950">
         <div className="container mx-auto px-6">
            <div className="mb-16">
               <h2 className="text-3xl font-bold text-white mb-4">Built for Every Department</h2>
               <p className="text-slate-400">Enhancing productivity across the entire organization.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {/* HR */}
               <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:bg-slate-800 transition-colors shadow-sm">
                  <Users className="text-blue-500 mb-4" size={32} />
                  <h3 className="text-lg font-bold text-white mb-2">Human Resources</h3>
                  <p className="text-sm text-slate-400 mb-4">
                     Policy guidance and employee self-service.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-2">
                     <li>• Resolve HR queries instantly</li>
                     <li>• Automate onboarding FAQs</li>
                     <li>• 24/7 internal support</li>
                  </ul>
               </div>

               {/* Customer Support */}
               <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:bg-slate-800 transition-colors shadow-sm">
                  <MessageSquare className="text-indigo-500 mb-4" size={32} />
                  <h3 className="text-lg font-bold text-white mb-2">Customer Support</h3>
                  <p className="text-sm text-slate-400 mb-4">
                     Instant, 24/7 assistance and triage.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-2">
                     <li>• Automate triage & answers</li>
                     <li>• Integrate with CRM systems</li>
                     <li>• Product info retrieval</li>
                  </ul>
               </div>

               {/* Technical */}
               <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:bg-slate-800 transition-colors shadow-sm">
                  <Server className="text-green-500 mb-4" size={32} />
                  <h3 className="text-lg font-bold text-white mb-2">IT & Engineering</h3>
                  <p className="text-sm text-slate-400 mb-4">
                     Instant engineering and IT insights.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-2">
                     <li>• Troubleshoot steps from docs</li>
                     <li>• Surface code snippets</li>
                     <li>• Incident support assistance</li>
                  </ul>
               </div>

               {/* Management */}
               <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:bg-slate-800 transition-colors shadow-sm">
                  <Zap className="text-orange-500 mb-4" size={32} />
                  <h3 className="text-lg font-bold text-white mb-2">Management & Sales</h3>
                  <p className="text-sm text-slate-400 mb-4">
                     Operational and product support.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-2">
                     <li>• Decision summaries</li>
                     <li>• Up-to-date sales data</li>
                     <li>• Reduce time-to-info</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* --- Technical Highlights --- */}
      <section className="py-20 bg-slate-900 border-y border-white/5">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
               <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-white mb-6">Enterprise-Grade Security</h2>
                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400 h-fit"><Shield size={24} /></div>
                        <div>
                           <h4 className="text-white font-bold mb-1">Zero-Trust Architecture</h4>
                           <p className="text-slate-400 text-sm">TARA respects your existing data permissions. It cannot access or reveal data that the querying user is not authorized to see.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400 h-fit"><Lock size={24} /></div>
                        <div>
                           <h4 className="text-white font-bold mb-1">Secure SQL Generation</h4>
                           <p className="text-slate-400 text-sm">Database queries are executed in a strictly read-only environment to prevent data modification or injection risks.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400 h-fit"><Brain size={24} /></div>
                        <div>
                           <h4 className="text-white font-bold mb-1">Domain Adaptation</h4>
                           <p className="text-slate-400 text-sm">TARA is fine-tuned on your specific industry terminology, ensuring high accuracy even with complex technical jargon.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="md:w-1/2">
                  <div className="bg-[#0B1221] p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600 rounded-full blur-[80px] opacity-20"></div>
                     <h3 className="text-xl font-bold text-white mb-6">Integration Ecosystem</h3>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/5 rounded-xl text-center border border-white/5">
                           <div className="text-slate-300 font-bold">Databases</div>
                           <div className="text-xs text-slate-500 mt-1">MySQL, PostgreSQL, SQL Server</div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl text-center border border-white/5">
                           <div className="text-slate-300 font-bold">Documents</div>
                           <div className="text-xs text-slate-500 mt-1">PDF, Word, Excel, Wiki</div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl text-center border border-white/5">
                           <div className="text-slate-300 font-bold">Platforms</div>
                           <div className="text-xs text-slate-500 mt-1">Slack, MS Teams, Web</div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl text-center border border-white/5">
                           <div className="text-slate-300 font-bold">Auth</div>
                           <div className="text-xs text-slate-500 mt-1">SSO, LDAP, OAuth2</div>
                        </div>
                     </div>
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
      <section className="py-24 relative overflow-hidden bg-slate-900">
         <div className="absolute inset-0 bg-indigo-900/10"></div>
         <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready to unlock your data?</h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
               Leverage trusted AI expertise for accelerated efficiency. Deploy TARA in your secure environment today.
            </p>
            <button 
               onClick={openContact}
               className="px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_50px_rgba(79,70,229,0.5)] transition-all"
            >
               Get Started with TARA
            </button>
         </div>
      </section>

    </div>
  );
};

export default Tara;