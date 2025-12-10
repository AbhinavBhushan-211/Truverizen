import React from 'react';
import { 
  Search, Bell, User, LayoutGrid, Clock, HelpCircle, 
  FolderOpen, Settings, ChevronRight, FileText, 
  Cpu, Copy, ScanLine, Layers
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PlatformDashboard: React.FC = () => {
  const navigate = useNavigate();

  const applications = [
    {
      title: "AI Court Index File",
      description: "Automatically index and organize court documents with AI-powered analysis",
      stats: [
        { label: "Processed", value: "1,245" },
        { label: "Accuracy", value: "98.5%" }
      ],
      icon: FileText,
      status: "Active",
      action: "Open Application",
      path: "/platform/doc-index" // Placeholder path
    },
    {
      title: "OCR Processing",
      description: "Extract text from scanned documents and images with high accuracy",
      stats: [
        { label: "Documents", value: "832" },
        { label: "Languages", value: "12" }
      ],
      icon: ScanLine,
      status: "Coming Soon",
      action: "Coming Soon",
      path: "#"
    },
    {
      title: "Master Deduplication",
      description: "Advanced data deduplication with configurable matching criteria and filters",
      stats: [],
      icon: Copy,
      status: "Active",
      action: "Open Application",
      path: "#"
    },
    {
      title: "Entity Extraction",
      description: "Extract key entities like names, dates, and locations from documents",
      stats: [],
      icon: Cpu,
      status: "Coming Soon",
      action: "Coming Soon",
      path: "#"
    },
    {
      title: "Cloud Manager",
      description: "Unified monitoring for modern infrastructure. Real-time visibility and metrics.",
      stats: [
          { label: "Nodes", value: "45" },
          { label: "Alerts", value: "0" }
      ],
      icon: Layers,
      status: "Active",
      action: "Open Dashboard",
      path: "/platform/cloud-manager"
    }
  ];

  return (
    <div className="flex h-screen bg-slate-950 text-slate-300 font-sans">
      {/* Sidebar */}
      <aside className="w-20 bg-slate-900 border-r border-slate-800 flex flex-col items-center py-6 gap-8 z-20">
        <button onClick={() => navigate('/')} className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-900/50 hover:scale-105 transition-transform">
           <LayoutGrid size={20} />
        </button>

        <nav className="flex flex-col gap-6 w-full items-center">
            <button className="p-3 text-slate-400 hover:text-indigo-400 hover:bg-slate-800 rounded-xl transition-colors relative group">
                <FolderOpen size={24} />
                <span className="absolute left-full ml-4 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 border border-slate-700">Projects</span>
            </button>
            <button className="p-3 text-indigo-400 bg-slate-800 rounded-xl transition-colors">
                <LayoutGrid size={24} />
            </button>
            <button className="p-3 text-slate-400 hover:text-indigo-400 hover:bg-slate-800 rounded-xl transition-colors">
                <Clock size={24} />
            </button>
            <button className="p-3 text-slate-400 hover:text-indigo-400 hover:bg-slate-800 rounded-xl transition-colors">
                <User size={24} />
            </button>
        </nav>

        <div className="mt-auto flex flex-col gap-6">
            <button className="p-3 text-slate-400 hover:text-indigo-400">
                <HelpCircle size={24} />
            </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">
            <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold text-white">Truverizen Platform</h1>
            </div>

            <div className="flex items-center gap-6">
                <div className="relative">
                    <Bell size={20} className="text-slate-400 hover:text-white cursor-pointer" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">3</span>
                </div>
                <div className="flex items-center gap-3 pl-6 border-l border-slate-800">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-sm border border-indigo-500/30">AU</div>
                    <span className="font-medium text-sm text-white">Admin User</span>
                </div>
            </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-8 bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                    <h2 className="text-3xl font-bold text-white mb-2">Applications</h2>
                    <p className="text-slate-400">Select an application to get started</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {applications.map((app, idx) => (
                        <div key={idx} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:shadow-lg hover:border-slate-700 transition-all flex flex-col">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300">
                                        <app.icon size={24} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white">{app.title}</h3>
                                </div>
                                {app.status === "Coming Soon" && (
                                    <span className="px-3 py-1 bg-slate-800 text-slate-500 text-xs font-bold rounded-full uppercase tracking-wide border border-slate-700">Coming Soon</span>
                                )}
                            </div>

                            <p className="text-slate-400 mb-8 flex-1 leading-relaxed">
                                {app.description}
                            </p>

                            {app.stats.length > 0 && (
                                <div className="flex gap-12 mb-8 border-t border-slate-800 pt-6">
                                    {app.stats.map((stat, i) => (
                                        <div key={i}>
                                            <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">{stat.label}</div>
                                            <div className="text-xl font-bold text-white">{stat.value}</div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <button 
                                onClick={() => app.path !== '#' && navigate(app.path)}
                                disabled={app.status === "Coming Soon"}
                                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                                    app.status === "Coming Soon" 
                                    ? "bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-700" 
                                    : "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-900/20"
                                }`}
                            >
                                {app.action} {app.status === "Active" && <ChevronRight size={16} />}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
      </div>
      
      {/* Floating AI Assistant for Dashboard */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-30 shadow-indigo-900/50">
        <Cpu size={24} />
      </button>
    </div>
  );
};

export default PlatformDashboard;