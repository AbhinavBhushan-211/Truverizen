import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { useContact } from '../context/ContactContext';
import { Link } from 'react-router-dom';

const FooterLink = ({ to, children }: { to: string, children?: React.ReactNode }) => (
  <li>
    <Link to={to} className="text-slate-400 hover:text-white transition-colors block py-1">
      {children}
    </Link>
  </li>
);

const Footer: React.FC = () => {
  const { openContact } = useContact();

  return (
    <footer className="bg-slate-950 pt-20 md:pt-32 pb-10 text-slate-400 font-sans relative overflow-hidden border-t border-slate-900">

      {/* Giant Parallax Background Text */}
      <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
        <h1 className="text-[20vw] font-display font-bold text-white leading-none whitespace-nowrap">
          TRUVERIZEN
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 md:mb-24 border-b border-slate-900 pb-12 md:pb-20">

          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-4 mb-6 md:mb-8 group w-fit">
              {/* 1. Increased image from w-8 h-8 to w-14 h-14 */}
              <img src="/logo.png" alt="Truverizen" className="w-14 h-14 rounded-xl object-contain" />

              {/* 2. Increased text from text-2xl to text-3xl to match the icon */}
              <span className="font-display font-bold text-3xl text-white tracking-tight">
                Truverizen
              </span>
            </Link>

            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed text-sm">
              Architecting the intelligent enterprise with Zero Trust Security, Cloud Observability, and Generative AI.
            </p>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-4 text-sm">
              <FooterLink to="/services/cloud">Cloud Architecture</FooterLink>
              <FooterLink to="/services/ai">Generative AI</FooterLink>
              <FooterLink to="/services/security">Cybersecurity</FooterLink>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Products</h4>
            <ul className="space-y-4 text-sm">
              <FooterLink to="/products/tara">TARA AI</FooterLink>
              <FooterLink to="/products/dot-anomaly">Dot Anomaly</FooterLink>
              <FooterLink to="/products/cloud-manager">Cloud Manager</FooterLink>
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="md:col-span-4 pl-0 md:pl-12 border-l-0 md:border-l border-slate-900">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Start a Project</h4>
            <p className="text-sm mb-6 text-slate-400">Ready to modernize your infrastructure? Let's talk.</p>
            <button
              onClick={openContact}
              className="w-full py-4 bg-white text-slate-950 font-bold text-sm rounded-lg hover:bg-indigo-50 transition-colors shadow-lg shadow-white/5"
            >
              Schedule Consultation
            </button>
            <div className="mt-8 space-y-3 text-sm text-slate-400">
              <a href="mailto:sales@truverizen.ai" className="flex items-center gap-2 hover:text-white transition-colors group">
                <Mail size={14} className="text-indigo-500 group-hover:text-indigo-400" /> sales@truverizen.ai
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-indigo-500 mt-1 shrink-0" />
                <span>WeWork, 1st floor, Galaxy Business Park, Noida, UP 201309</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="text-center md:text-left">© {new Date().getFullYear()} Truverizen Technologies Pvt Ltd. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;