import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#02040a] text-slate-300 p-6">
      <h1 className="text-9xl font-display font-bold text-indigo-900/50 mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-4 text-white">Page Not Found</h2>
      <p className="text-slate-500 mb-8 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button 
        onClick={() => navigate('/')}
        className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 transition-colors flex items-center gap-2 shadow-lg shadow-indigo-900/20"
      >
        <Home size={18} /> Back to Home
      </button>
    </div>
  );
};

export default NotFound;