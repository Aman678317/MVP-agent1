import React, { useState, useEffect } from 'react';
import { 
  Sparkles, BarChart3, Mail, Users, ArrowRight, 
  CheckCircle2, Globe, MessageSquare, LayoutDashboard,
  Search, Send, Settings, LogOut, Menu, X, Plus, Bot
} from 'lucide-react';

// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://mvp-agent1-1.onrender.com';

function App() {
  const [view, setView] = useState('landing'); // 'landing' or 'dashboard'
  const [activeTab, setActiveTab] = useState('research');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [backendStatus, setBackendStatus] = useState('checking');

  // Check backend connection on mount
  useEffect(() => {
    const checkConnection = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/`);
        if (res.ok) setBackendStatus('online');
        else setBackendStatus('offline');
      } catch (err) {
        setBackendStatus('offline');
      }
    };
    checkConnection();
  }, []);

  // Feature: Research AI
  const [searchQuery, setSearchQuery] = useState('');
  const [researchData, setResearchData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleResearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/research/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery })
      });
      const data = await res.json();
      setResearchData(data.insights);
    } catch (err) {
      alert("Research failed. Ensure backend is running!");
    }
    setLoading(false);
  };

  if (view === 'landing') {
    return (
      <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold uppercase tracking-wider">AgenticMarketer</span>
            </div>
            <button 
              onClick={() => setView('dashboard')}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-all"
            >
              Open Dashboard
            </button>
          </div>
        </nav>

        <main className="pt-40 pb-20 text-center px-4">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            AI Agents That Grow Your Business
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Automate market research, lead generation, and outbound marketing with our suite of autonomous AI agents.
          </p>
          <button 
            onClick={() => setView('dashboard')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-2 mx-auto"
          >
            Get Started Free <ArrowRight className="w-5 h-5" />
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-950 text-white overflow-hidden">
      {/* Sidebar */}
      <aside className={`bg-slate-900 border-r border-white/10 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'} flex flex-col`}>
        <div className="p-6 flex items-center gap-3 border-b border-white/5">
          <Sparkles className="w-8 h-8 text-blue-500 flex-shrink-0" />
          {isSidebarOpen && <span className="font-bold text-lg">AI Marketer</span>}
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <SidebarItem icon={<LayoutDashboard />} label="Dashboard" active={activeTab === 'dash'} onClick={() => setActiveTab('dash')} isOpen={isSidebarOpen} />
          <SidebarItem icon={<Search />} label="Research AI" active={activeTab === 'research'} onClick={() => setActiveTab('research')} isOpen={isSidebarOpen} />
          <SidebarItem icon={<Mail />} label="Email Marketing" active={activeTab === 'email'} onClick={() => setActiveTab('email')} isOpen={isSidebarOpen} />
          <SidebarItem icon={<Users />} label="Leads" active={activeTab === 'leads'} onClick={() => setActiveTab('leads')} isOpen={isSidebarOpen} />
          <SidebarItem icon={<Bot />} label="AI Call Bot" active={activeTab === 'callbot'} onClick={() => setActiveTab('callbot')} isOpen={isSidebarOpen} />
        </nav>

        <div className="p-4 border-t border-white/5">
          <button onClick={() => setView('landing')} className="flex items-center gap-3 p-3 w-full hover:bg-red-500/10 text-slate-400 hover:text-red-400 rounded-lg transition-all">
            <LogOut className="w-5 h-5" />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <header className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold capitalize">{activeTab} Agent</h2>
          <div className="flex items-center gap-4">
            <div className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 border ${
              backendStatus === 'online' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
              backendStatus === 'offline' ? 'bg-red-500/10 border-red-500/20 text-red-400' :
              'bg-slate-500/10 border-slate-500/20 text-slate-400'
            }`}>
              <div className={`w-2 h-2 rounded-full animate-pulse ${
                backendStatus === 'online' ? 'bg-green-500' :
                backendStatus === 'offline' ? 'bg-red-500' :
                'bg-slate-500'
              }`}></div>
              Backend: {backendStatus}
            </div>
            <div className="w-10 h-10 bg-slate-800 rounded-full border border-white/10"></div>
          </div>
        </header>

        {activeTab === 'research' && (
          <div className="max-w-4xl animate-fade-in">
            <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 mb-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-500" />
                Autonomous Research Agent
              </h3>
              <form onSubmit={handleResearch} className="flex gap-4">
                <input 
                  type="text" 
                  placeholder="What industry or competitor should I research?"
                  className="flex-1 bg-slate-950 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all"
                >
                  {loading ? 'Analyzing...' : 'Generate Insights'}
                </button>
              </form>
            </div>

            {researchData && (
              <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 shadow-xl animate-fade-in">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-blue-400">
                  <BarChart3 className="w-5 h-5" />
                  AI Generated Market Insights
                </h4>
                <div className="prose prose-invert max-w-none text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {researchData}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab !== 'research' && (
          <div className="flex flex-col items-center justify-center h-64 text-slate-500 border-2 border-dashed border-white/5 rounded-3xl">
            <Bot className="w-16 h-16 mb-4 opacity-20" />
            <p className="text-lg">This module is coming soon...</p>
          </div>
        )}
      </main>
    </div>
  );
}

function SidebarItem({ icon, label, active, onClick, isOpen }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-3 p-3 w-full rounded-lg transition-all ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
    >
      {React.cloneElement(icon, { className: 'w-5 h-5 flex-shrink-0' })}
      {isOpen && <span className="font-medium">{label}</span>}
    </button>
  );
}

export default App;
