import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Industries from '../components/Industries';
import ProductShowcase from '../components/ProductShowcase';
import Philosophy from '../components/Philosophy';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      {/* TrustedBy section hidden as requested */}
      <Philosophy />
      <Services />
      
      {/* Unified Product Spotlight Section with TARA, Cloud Manager, and Safety AI */}
      <ProductShowcase />
      
      <Industries />
    </motion.div>
  );
};

export default Home;