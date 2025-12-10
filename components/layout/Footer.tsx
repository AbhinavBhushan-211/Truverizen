import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#02040a] pt-20 pb-10 border-t border-white/5 text-slate-400 font-sans">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 text-white font-display font-bold text-xl">
              Truverizen
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
              Architecting the intelligent enterprise with Zero Trust Security, Cloud Observability, and Generative AI.
            </p>
            <div className="flex gap-4">
              <SocialIcon Icon={Linkedin} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Github} />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Platform</h4>
            <ul className="space-y-2 text-sm">
               <li><Link to="/products/dot-anomaly" className="hover:text-indigo-400 transition-colors">Dot Anomaly</Link></li>
               <li><Link to="/products/tara" className="hover:text-indigo-400 transition-colors">TARA AI</Link></li>
               <li><Link to="/products/cloud-manager" className="hover:text-indigo-400 transition-colors">Cloud Manager</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4 text-sm">Company</h4>
             <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About</Link></li>
                <li><Link to="/careers" className="hover:text-indigo-400 transition-colors">Careers</Link></li>
                <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy</Link></li>
             </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
           <p>© {new Date().getFullYear()} Truverizen Technologies. All rights reserved.</p>
           <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/privacy">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon }: { Icon: any }) => (
   <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-colors">
      <Icon size={18} />
   </a>
)

export default Footer;