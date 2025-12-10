import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Eye, Scale } from 'lucide-react';

const Philosophy: React.FC = () => {
  const cards = [
    {
      title: 'Trust',
      subtitle: 'Accountability',
      description: 'We build long-term partnerships rooted in integrity. Reliability isn\'t a feature; it\'s our foundation.',
      icon: Handshake,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10'
    },
    {
      title: 'Veri (Truth)',
      subtitle: 'Evidence-Based',
      description: 'Authentic solutions with demonstrable ROI. We prioritize measurable outcomes over buzzwords.',
      icon: Eye,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10'
    },
    {
      title: 'Zen',
      subtitle: 'Balance',
      description: 'Simplifying complexity. We strike the perfect balance between rapid innovation and operational stability.',
      icon: Scale, 
      color: 'text-teal-400',
      bg: 'bg-teal-500/10'
    }
  ];

  return (
    <section id="philosophy" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 items-center">
            
            {/* Header Column */}
            <div className="lg:col-span-1">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Our Ethos</div>
                <h2 className="text-4xl font-display font-bold mb-6 text-white leading-tight">
                    Built on <br/>
                    <span className="text-gradient">Principles</span>
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    The name Truverizen combines "Trust", "Veri" (truth), and "Zen". These aren't just values—they are the architectural pillars of every system we build.
                </p>
                <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
            </div>

            {/* Cards */}
            {cards.map((card, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="lg:col-span-1 h-full bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-900/20 transition-all duration-500 group relative overflow-hidden"
                >
                    <div className={`absolute top-0 right-0 w-32 h-32 ${card.bg} rounded-bl-[100px] -mr-8 -mt-8 opacity-20 group-hover:scale-150 transition-transform duration-700`}></div>
                    
                    <div className={`relative w-14 h-14 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center mb-8 shadow-sm group-hover:-translate-y-1 transition-transform border border-white/5`}>
                        <card.icon size={24} />
                    </div>
                    
                    <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${card.color}`}>
                        {card.subtitle}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{card.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                        {card.description}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;