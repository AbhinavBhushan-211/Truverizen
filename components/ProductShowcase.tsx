import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductSpotlight from './ProductSpotlight';
import TaraDemo from './demos/TaraDemo';
import CloudManagerDemo from './demos/CloudManagerDemo';
import SafetyDemo from './demos/SafetyDemo';
import { productData } from '../data/products';

const ProductShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const demoComponents: Record<string, React.ReactNode> = {
    'tara': <TaraDemo />,
    'cloud-manager': <CloudManagerDemo />,
    'dot-anomaly': <SafetyDemo />
  };

  const activeProduct = productData[activeIndex];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % productData.length);
    }, 8000); 
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section 
        id="products"
        className="py-16 md:py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-6 relative z-10">
         
         <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-white">
                Intelligence Suite
            </h2>

            {/* Tabs - Scrollable on Mobile */}
            <div className="w-full overflow-x-auto pb-4 mb-2 scrollbar-hide flex justify-start md:justify-center">
                <div className="inline-flex p-1 rounded-full bg-slate-900 border border-slate-800 shadow-sm whitespace-nowrap">
                    {productData.map((product, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`relative px-5 md:px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                                activeIndex === idx 
                                ? 'text-white' 
                                : 'text-slate-500 hover:text-slate-400'
                            }`}
                        >
                            {product.titleHighlight}
                            {activeIndex === idx && (
                                <motion.div 
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-slate-800 rounded-full border border-slate-700"
                                    style={{ zIndex: -1 }}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>
         </div>

         <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                >
                    <ProductSpotlight 
                        {...activeProduct} 
                        contentOnly={true} 
                        demoComponent={demoComponents[activeProduct.id]}
                    />
                </motion.div>
            </AnimatePresence>
         </div>
      </div>
    </section>
  );
};

export default ProductShowcase;