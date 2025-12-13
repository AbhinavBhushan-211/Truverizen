import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import IndustryDetail from './pages/IndustryDetail';
import About from './pages/About';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';
import CloudManager from './pages/CloudManager';
import CloudManagerProduct from './pages/CloudManagerProduct';
import PlatformDashboard from './pages/PlatformDashboard';
import DotAnomaly from './pages/DotAnomaly';
import Tara from './pages/Tara';

// Context
import { ContactProvider } from './context/ContactContext';

// Scroll to top on route change wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <ContactProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Main Website Routes */}
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/services/:id" element={<MainLayout><ServiceDetail /></MainLayout>} />
          <Route path="/industries/:id" element={<MainLayout><IndustryDetail /></MainLayout>} />
          <Route path="/products/dot-anomaly" element={<MainLayout><DotAnomaly /></MainLayout>} />
          <Route path="/products/tara" element={<MainLayout><Tara /></MainLayout>} />
          <Route path="/products/cloud-manager" element={<MainLayout><CloudManagerProduct /></MainLayout>} />
          <Route path="/about" element={<MainLayout><About /></MainLayout>} />
          <Route path="/careers" element={<MainLayout><Careers /></MainLayout>} />
          <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
          <Route path="/privacy" element={<MainLayout><PrivacyPolicy /></MainLayout>} />
          <Route path="/terms" element={<MainLayout><TermsOfService /></MainLayout>} />
          <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />

          {/* Platform/Dashboard Routes (No MainLayout/Navbar) */}
          <Route path="/platform" element={<PlatformDashboard />} />
          <Route path="/platform/cloud-manager" element={<CloudManager />} />
        </Routes>
      </Router>
    </ContactProvider>
  );
};

export default App;