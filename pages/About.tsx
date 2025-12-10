import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Heart, ArrowRight, Zap, Database, Globe, Network, Cpu, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  const capabilities = [
    {
      title: "Data Engineering & Governance",
      desc: "End-to-end ETL/ELT pipelines, automated quality controls, and optimized data models for analytics.",
      icon: Database,
      color: "text-blue-400",
      bg: "bg-blue-500/10"
    },
    {
      title: "Advanced AI Orchestration",
      desc: "Leveraging OpenAI, Claude, and Gemini with Agentic AI frameworks (LangGraph, CrewAI) for complex workflows.",
      icon: Cpu,
      color: "text-purple-400",
      bg: "bg-purple-500/10"
    },
    {
      title: "Seamless Integration",
      desc: "Pre-built enterprise connectors for ERP, CRM, and HRMS systems to eliminate data silos.",
      icon: Network,
      color: "text-teal-400",
      bg: "bg-teal-500/10"
    },
    {
      title: "Flexible Deployment",
      desc: "Cloud-native, On-premises, or Hybrid deployment models tailored to business security constraints.",
      icon: Layers,
      color: "text-orange-400",
      bg: "bg-orange-500/10"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-12 md:pb-16 min-h-screen bg-slate-950 font-sans text-slate-300"
    >
      {/* Hero Section */}
      <div className="container mx-auto px-6 mb-16 md:mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-500/20"
          >
            Our Story
          </motion.div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white leading-tight">
            Intelligent Automation at <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Enterprise Scale</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10">
            Truverizen empowers enterprises to automate, optimize, and scale using Data, AI, and Machine Learning. We bridge the gap between fragmented manual processes and the intelligent future of work.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-slate-900 py-16 md:py-24 mb-16 md:mb-24 border-y border-slate-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="space-y-6">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 shrink-0 border border-blue-500/20 mb-4">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-display font-bold text-white">Our Mission</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              To empower enterprises to automate, optimize, and scale their operations through trusted Data, AI, and Machine Learning solutions that drive measurable business impact.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 shrink-0 border border-purple-500/20 mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-2xl font-display font-bold text-white">Our Vision</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              To become the standard for <strong>Trusted, Scalable AI</strong>, where intelligent automation and data-driven decision-making create lasting competitive advantages for businesses worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Core Capabilities */}
      <div className="container mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">What We Do</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We provide end-to-end intelligent automation across the entire data lifecycle, engineered for resilience and speed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all group"
            >
              <div className={`w-12 h-12 ${cap.bg} ${cap.color} rounded-xl flex items-center justify-center mb-6 border border-white/5`}>
                <cap.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 py-20 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Why Truverizen?</h2>
              <p className="text-slate-400 mb-8 text-lg">
                We solve the "last mile" problem of Enterprise AI. We don't just build models; we build resilient data backbones that fit your specific business constraints.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1 p-2 bg-green-500/10 rounded-lg text-green-400 h-fit"><Zap size={20} /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Proven Scale</h4>
                    <p className="text-slate-400 text-sm">Our solutions are designed to automate 40–60% of workflows, drastically cutting operational costs.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 p-2 bg-blue-500/10 rounded-lg text-blue-400 h-fit"><Globe size={20} /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Real-Time Visibility</h4>
                    <p className="text-slate-400 text-sm">We replace slow decision cycles with real-time analytics and predictive insights.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 p-2 bg-orange-500/10 rounded-lg text-orange-400 h-fit"><Layers size={20} /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Measurable ROI</h4>
                    <p className="text-slate-400 text-sm">We focus on tangible outcomes—reduced cycle times, increased accuracy, and enhanced operational efficiency.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full"></div>
              <div className="relative bg-slate-950 border border-slate-800 p-8 rounded-3xl shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6">Industries We Support</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Finance & Accounting', 'Human Resources', 'Legal & Compliance', 'Sales & Marketing', 'Operations', 'Customer Support'].map((ind, i) => (
                    <div key={i} className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-300 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                      {ind}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-6 py-24">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden border border-slate-800 shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <Heart className="w-12 h-12 text-pink-500 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Join Our Team</h2>
            <p className="text-slate-400 mb-8 text-base md:text-lg">
              We are accelerating the AI journey for enterprises globally. If you are passionate about building the future of intelligent automation, we want to hear from you.
            </p>
            <button 
              onClick={() => navigate('/careers')}
              className="px-8 py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-indigo-50 transition-colors inline-flex items-center gap-2"
            >
              View Open Positions <ArrowRight size={18} />
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] opacity-60"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;