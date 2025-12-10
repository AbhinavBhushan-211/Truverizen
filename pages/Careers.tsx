import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Zap, Globe, Coffee, ArrowRight, Smile } from 'lucide-react';
import { useContact } from '../context/ContactContext';

const Careers: React.FC = () => {
  const { openContact } = useContact();

  const benefits = [
    { icon: Globe, title: "Remote-First", desc: "Work from anywhere in the world. We focus on output, not hours." },
    { icon: Zap, title: "Cutting Edge Tech", desc: "Access to the latest AI models, Cloud stacks, and hardware." },
    { icon: Coffee, title: "Wellness Budget", desc: "Monthly stipends for gym, mental health, and home office setup." },
    { icon: Smile, title: "Growth Culture", desc: "Continuous learning budget for courses, conferences, and books." },
  ];

  const positions = [
    { title: "Senior AI Engineer", dept: "Engineering", location: "Remote", type: "Full-time" },
    { title: "Cloud Solutions Architect", dept: "Cloud Ops", location: "Hybrid", type: "Full-time" },
    { title: "Frontend Developer (React)", dept: "Product", location: "Remote", type: "Contract" },
    { title: "Enterprise Sales Manager", dept: "Sales", location: "New York, US", type: "Full-time" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-12 md:pb-16 min-h-screen bg-slate-950 font-sans text-slate-300"
    >
      <div className="container mx-auto px-6 text-center mb-12 md:mb-20">
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-xs font-bold uppercase tracking-widest mb-6 border border-teal-500/20"
          >
            We are hiring!
          </motion.div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
          Build the Future with <span className="text-indigo-500">Truverizen</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Join a team of visionaries, builders, and dreamers. We are solving the hardest problems in AI and Cloud infrastructure.
        </p>
      </div>

      {/* Benefits */}
      <div className="bg-slate-900 py-16 md:py-20 mb-16 md:mb-20 border-y border-slate-800">
        <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-12 text-center text-white">Why Join Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {benefits.map((benefit, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="text-center p-6 rounded-2xl hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-800"
                    >
                        <div className="w-14 h-14 mx-auto bg-indigo-500/10 text-indigo-400 rounded-2xl flex items-center justify-center mb-4 border border-indigo-500/20">
                            <benefit.icon size={28} />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-white">{benefit.title}</h3>
                        <p className="text-slate-400 text-sm">{benefit.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>

      {/* Positions */}
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-white">Open Positions</h2>
        <div className="space-y-4">
            {positions.map((job, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col md:flex-row md:items-center justify-between bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-indigo-500/30 hover:shadow-lg transition-all group gap-4"
                >
                    <div className="mb-0">
                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-500 mt-1">
                            <span className="flex items-center gap-1"><Briefcase size={14} /> {job.dept}</span>
                            <span className="flex items-center gap-1"><Globe size={14} /> {job.location}</span>
                        </div>
                    </div>
                    <button 
                        onClick={openContact}
                        className="px-6 py-2 bg-slate-800 text-white font-bold rounded-lg border border-slate-700 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all whitespace-nowrap self-start md:self-auto"
                    >
                        Apply Now
                    </button>
                </motion.div>
            ))}
        </div>
        
        <div className="mt-12 p-8 bg-indigo-500/10 rounded-2xl text-center border border-indigo-500/20">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Don't see your role?</h3>
            <p className="text-slate-400 mb-6">We are always looking for talent. Send us your resume and we'll keep you on file.</p>
            <button onClick={openContact} className="text-indigo-400 font-bold hover:gap-2 inline-flex items-center gap-1 transition-all">
                Contact Recruiting <ArrowRight size={18} />
            </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Careers;