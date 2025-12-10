import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useContact } from '../context/ContactContext';
import { NavItem } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  
  const navigate = useNavigate();
  const location = useLocation();
  const { openContact } = useContact();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStructure: NavItem[] = [
    { label: 'About Us', href: '/about', type: 'link' },
    { 
      label: 'Services', 
      type: 'dropdown',
      items: [
        { label: 'Cloud Services', href: '/services/cloud', desc: 'Migration & Modernization' },
        { label: 'Generative AI', href: '/services/ai', desc: 'RAG & Agentic Platforms' },
        { label: 'Cybersecurity', href: '/services/security', desc: 'Zero-Trust & SOC' }
      ]
    },
    { 
      label: 'Products', 
      type: 'dropdown',
      href: '/#products',
      items: [
        { label: 'TARA AI', href: '/products/tara', desc: 'Knowledge Base Assistant' },
        { label: 'Cloud Manager', href: '/products/cloud-manager', desc: 'Unified Observability' },
        { label: 'Factory Safety', href: '/#products', desc: 'Vision AI & Compliance' }
      ]
    },
    { 
      label: 'Industries', 
      type: 'dropdown',
      items: [
        { label: 'BFSI', href: '/industries/bfsi' },
        { label: 'Healthcare', href: '/industries/healthcare' },
        { label: 'Manufacturing', href: '/industries/manufacturing' },
        { label: 'Retail', href: '/industries/retail' },
        { label: 'Public Sector', href: '/industries/public-sector' }
      ]
    },
  ];

  const handleNavigation = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const elementId = href.split('#')[1];
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(elementId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled || location.pathname !== '/' 
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
      onMouseLeave={() => setHoveredNav(null)}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => navigate('/')} className="flex items-center gap-3 group z-50 relative">
          <img src="/logo.png" alt="Truverizen" className="w-8 h-8" />
          
          <div className="flex flex-col items-start">
            <span className="font-display font-bold text-lg tracking-tight leading-none text-white group-hover:text-indigo-400 transition-colors">Truverizen</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-semibold">Technologies</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navStructure.map((item) => (
            <div 
              key={item.label} 
              className="relative group h-full py-2"
              onMouseEnter={() => setHoveredNav(item.label)}
            >
              <button
                onClick={() => item.type === 'link' && item.href && handleNavigation(item.href)}
                className={`text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                  isScrolled || location.pathname !== '/' 
                    ? 'text-slate-300 hover:text-white' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {item.type === 'dropdown' && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 opacity-60" />}
              </button>

              {/* Enhanced Dropdown */}
              <AnimatePresence>
                {item.type === 'dropdown' && hoveredNav === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72"
                  >
                    <div className="bg-slate-900 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-800 ring-1 ring-black/50 p-2 overflow-hidden">
                      {item.items?.map((subItem, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavigation(subItem.href)}
                          className="w-full text-left p-3 rounded-xl hover:bg-slate-800 transition-all group/item relative overflow-hidden"
                        >
                          <div className="font-bold text-slate-200 text-sm flex items-center justify-between z-10 relative group-hover/item:text-white">
                            {subItem.label}
                            <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-indigo-400" />
                          </div>
                          {subItem.desc && (
                            <div className="text-[11px] text-slate-500 mt-0.5 leading-snug z-10 relative pr-4 group-hover/item:text-slate-400">{subItem.desc}</div>
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          
          <div className="h-5 w-px bg-slate-800"></div>

          <button 
            onClick={openContact}
            className="px-5 py-2.5 text-sm font-bold rounded-full transition-all hover:-translate-y-0.5 shadow-lg bg-white text-slate-950 hover:bg-indigo-50 hover:shadow-indigo-500/20"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 shadow-xl overflow-hidden fixed w-full z-40 top-[70px]"
          >
            <div className="flex flex-col p-6 space-y-6 max-h-[85vh] overflow-y-auto">
              {navStructure.map((item) => (
                <div key={item.label} className="space-y-3">
                  {item.type === 'link' ? (
                     <button
                        onClick={() => item.href && handleNavigation(item.href)}
                        className="text-left text-lg font-bold text-white hover:text-indigo-400 block"
                      >
                        {item.label}
                      </button>
                  ) : (
                    <>
                      <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{item.label}</div>
                      <div className="pl-0 grid gap-3">
                        {item.items?.map((subItem, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleNavigation(subItem.href)}
                            className="block text-left text-base font-medium text-slate-400 hover:text-white"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
              
              <hr className="border-slate-800" />
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openContact();
                }}
                className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-900/30"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;