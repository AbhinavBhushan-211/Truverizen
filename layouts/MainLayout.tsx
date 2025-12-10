import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-950 text-slate-300 overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ContactModal />
    </div>
  );
};

export default MainLayout;