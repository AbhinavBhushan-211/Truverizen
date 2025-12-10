import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, LucideIcon, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductSpotlightProps {
  id: string;
  badge: string;
  title: string;
  titleHighlight: string;
  titleHighlightColor: string;
  subtitle: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    bgColor: string;
  }[];
  demoComponent: React.ReactNode;
  align?: 'left' | 'right';
  linkTo?: string;
  contentOnly?: boolean;
}

const ProductSpotlight: React.FC<ProductSpotlightProps> = ({
  id,
  badge,
  title,
  titleHighlight,
  titleHighlightColor,
  subtitle,
  description,
  features,
  demoComponent,
  align = 'left',
  linkTo,
  contentOnly = false
}) => {
  const navigate = useNavigate();

  const Content = (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${align === 'right' ? 'lg:grid-flow-dense' : ''}`}>
      
      {/* Text Content */}
      <div className={`${align === 'right' ? 'lg:col-start-2' : ''} flex flex-col items-start text-left w-full order-2 lg:order-1`}>
        <motion.div
          key={id}
          initial={{ opacity: 0, x: align === 'left' ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Sparkles size={10} /> {badge}
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 leading-tight text-white">
              {title} <span className={titleHighlightColor}>{titleHighlight}</span>
            </h2>

            {/* Subtitle */}
            <h3 className="text-lg font-semibold mb-3 text-slate-300">
              {subtitle}
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-xl text-sm md:text-base">
              {description}
            </p>

            {/* Features Grid */}
            <div className="grid gap-3 md:gap-4 mb-8 w-full">
              {features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-4 p-3 md:p-4 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 transition-colors w-full shadow-sm"
                >
                  <div className={`p-2 rounded-lg shrink-0 ${feature.bgColor} ${feature.color}`}>
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{feature.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            {linkTo && (
                <button 
                    onClick={() => navigate(linkTo)}
                    className="group flex items-center gap-2 text-indigo-400 font-bold border-b border-indigo-400 pb-1 hover:text-indigo-300 transition-colors text-sm md:text-base"
                >
                    Explore {titleHighlight} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            )}
        </motion.div>
      </div>

      {/* Visual / Demo */}
      <div className={`w-full order-1 lg:order-2 ${align === 'right' ? 'lg:col-start-1' : ''} mb-8 lg:mb-0`}>
         <motion.div
            key={`${id}-demo`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl p-1 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-800 shadow-xl"
         >
            <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] -z-10 rounded-full"></div>
            <div className="rounded-xl overflow-hidden bg-slate-950 relative">
               {/* Scan Line Effect overlay on the demo (subtle for dark mode) */}
               <div className="absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[size:100%_4px]"></div>
               {demoComponent}
            </div>
         </motion.div>
      </div>
    </div>
  );

  if (contentOnly) {
    return <div className="relative z-10 w-full">{Content}</div>;
  }

  return (
    <section id={id} className="py-12 md:py-20 bg-slate-950 overflow-hidden relative border-t border-slate-900">
      <div className="container mx-auto px-6 relative z-10">
        {Content}
      </div>
    </section>
  );
};

export default ProductSpotlight;