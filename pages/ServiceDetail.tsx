import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { serviceDetails } from '../data/content';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useContact } from '../context/ContactContext';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = id ? serviceDetails[id] : undefined;
  const { openContact } = useContact();

  useEffect(() => {
    if (!service) {
      navigate('/');
    }
    window.scrollTo(0, 0);
  }, [service, navigate]);

  if (!service) return null;

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-950 font-sans text-slate-300">
      <div className="container mx-auto px-6">
        <button 
          onClick={() => navigate('/')} 
          className="mb-8 flex items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors font-medium"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-500/20">
            Service Deep Dive
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-white">{service.title}</h1>
          <p className="text-xl md:text-2xl text-slate-400 font-medium mb-8">{service.tagline}</p>
          <p className="text-lg text-slate-500 max-w-3xl leading-relaxed border-l-4 border-indigo-500 pl-6">
            {service.description}
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {service.capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/30 hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
                <cap.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{cap.title}</h3>
              <ul className="space-y-3">
                {cap.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                    <CheckCircle2 size={16} className="mt-1 text-teal-500 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        {service.techStack && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-white">Technologies We Master</h3>
            <div className="flex flex-wrap gap-4">
              {service.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-6 py-3 bg-slate-900 rounded-full text-slate-300 font-semibold border border-slate-800 hover:border-indigo-500 hover:text-indigo-400 transition-all cursor-default shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl shadow-indigo-900/20">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your {service.title.toLowerCase()}?</h2>
            <button 
              onClick={openContact}
              className="px-8 py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-indigo-50 transition-colors inline-flex items-center gap-2 shadow-lg transform hover:scale-105 active:scale-95 duration-200"
            >
              Get a Free Consultation <ChevronRight size={18} />
            </button>
          </div>
          {/* Decorative background pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;