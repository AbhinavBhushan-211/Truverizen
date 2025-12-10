import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Truverizen's Safety AI reduced our incident response time by 90%. The proactive alerts for PPE compliance have been a game changer for our factory floors.",
      author: "Rajesh Kumar",
      role: "Plant Head",
      company: "Apex Manufacturing Ltd.",
      logo: "https://logo.clearbit.com/apex.com" // Placeholder or generic
    },
    {
      quote: "The Cloud Manager dashboard gave us visibility we never had before. We cut our AWS spend by 25% in the first month using their cost intelligence tools.",
      author: "Sarah Jenkins",
      role: "CTO",
      company: "FinTech Solutions Inc.",
      logo: "https://logo.clearbit.com/stripe.com" // Placeholder
    },
    {
      quote: "TARA AI has transformed our HR operations. Employees get instant answers to policy questions, freeing up our team to focus on strategic initiatives.",
      author: "Amit Patel",
      role: "VP of Human Resources",
      company: "Global Tech Services",
      logo: "https://logo.clearbit.com/infosys.com" // Placeholder
    }
  ];

  return (
    <section className="py-20 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Trusted by Industry Leaders</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            See how forward-thinking enterprises are transforming their operations with our AI and Cloud solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-800 relative group hover:-translate-y-1 transition-transform duration-300"
            >
              <Quote className="absolute top-6 right-6 text-indigo-500/20 group-hover:text-indigo-500/40 transition-colors" size={40} />
              
              <div className="mb-6 relative z-10">
                <p className="text-slate-300 italic leading-relaxed">"{item.quote}"</p>
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-400 border border-slate-700">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{item.author}</div>
                  <div className="text-xs text-slate-500">{item.role}</div>
                  <div className="text-xs font-semibold text-indigo-400 mt-0.5">{item.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;