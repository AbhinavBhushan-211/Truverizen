import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Stethoscope, ShoppingBag, Factory, Landmark, ArrowRight } from 'lucide-react';

const industries = [
  {
    id: "bfsi",
    name: "BFSI",
    desc: "Fraud detection, KYC/AML processing, and credit risk scoring.",
    icon: Landmark,
    color: "text-yellow-500"
  },
  {
    id: "healthcare",
    name: "Healthcare",
    desc: "Clinical decision support and patient journey optimization.",
    icon: Stethoscope,
    color: "text-red-500"
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    desc: "Predictive maintenance and automated quality inspection.",
    icon: Factory,
    color: "text-orange-500"
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    desc: "Demand forecasting, smart returns, and dynamic pricing.",
    icon: ShoppingBag,
    color: "text-pink-500"
  },
  {
    id: "public-sector",
    name: "Public Sector",
    desc: "Citizen service automation and document digitization.",
    icon: Building2,
    color: "text-blue-500"
  }
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-16 md:py-24 bg-slate-950 relative">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Industries We Transform</h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
                    Our solutions are tailored to meet the unique challenges of highly regulated and complex sectors.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries.map((ind, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-indigo-500/30 transition-all overflow-hidden"
                    >
                        <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity ${ind.color}`}>
                            <ind.icon size={100} />
                        </div>
                        
                        <div className={`w-12 h-12 rounded-lg bg-slate-950 flex items-center justify-center mb-6 border border-slate-800 ${ind.color}`}>
                            <ind.icon size={24} />
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3">{ind.name}</h3>
                        <p className="text-slate-400 mb-6 text-sm leading-relaxed">{ind.desc}</p>
                        
                        <Link to={`/industries/${ind.id}`} className="inline-flex items-center text-sm font-semibold text-indigo-400 hover:text-white transition-colors">
                            Explore Solutions <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Industries;