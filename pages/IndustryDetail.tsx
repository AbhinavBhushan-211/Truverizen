import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { industryDetails } from '../data/content';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const IndustryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const industry = id ? industryDetails[id] : undefined;

  useEffect(() => {
    if (!industry) {
      navigate('/');
    }
    window.scrollTo(0, 0);
  }, [industry, navigate]);

  if (!industry) return null;

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
          className="grid lg:grid-cols-2 gap-12 mb-20 items-center"
        >
          <div>
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-teal-500/10 text-teal-400 text-xs font-bold uppercase tracking-widest border border-teal-500/20">
              Industry Focus
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">{industry.name}</h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              {industry.description}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {industry.metrics.map((metric, idx) => (
                <div key={idx} className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-indigo-500/30 hover:shadow-md transition-all">
                  <div className="text-3xl font-bold text-indigo-400 mb-1">{metric.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide font-bold">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full blur-[80px] -mr-10 -mt-10 opacity-20"></div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 relative z-10">
              <AlertTriangle className="text-orange-500" /> Key Challenges We Solve
            </h3>
            <ul className="space-y-4 relative z-10">
              {industry.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-center gap-4 p-4 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></div>
                  <span className="text-slate-300 font-medium">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Capabilities</h2>
            <div className="h-1 w-20 bg-indigo-600 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {industry.solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/30 hover:-translate-y-1 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm border border-indigo-500/20">
                <sol.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{sol.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {sol.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryDetail;