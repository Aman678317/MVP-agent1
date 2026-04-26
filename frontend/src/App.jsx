import React, { useState } from 'react';
import { Sparkles, BarChart3, Mail, Users, ArrowRight, CheckCircle2, Globe, MessageSquare } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');

  const features = [
    {
      title: "AI Market Research",
      description: "Analyze competitors and market trends in seconds using advanced Gemini AI models.",
      icon: <Globe className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Lead Generation",
      description: "Identify and capture high-quality leads across social platforms and search engines.",
      icon: <Users className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Automated Campaigns",
      description: "Generate and schedule personalized email and social media campaigns effortlessly.",
      icon: <Mail className="w-6 h-6 text-pink-500" />
    },
    {
      title: "Performance Analytics",
      description: "Track your ROI and campaign performance with real-time AI-driven insights.",
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                AgenticMarketer
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all shadow-lg shadow-blue-500/20">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Next-Gen AI Marketing is Here</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 leading-tight">
            Supercharge Your Marketing <br className="hidden md:block" />
            With <span className="text-blue-500">Autonomous AI Agents</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            The first all-in-one marketing SaaS that researches, captures leads, and runs your campaigns while you sleep.
          </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button 
              onClick={async () => {
                let baseUrl = import.meta.env.VITE_API_BASE_URL;
                // If it's empty, looks like a local path, or is missing, use the hardcoded Render URL
                if (!baseUrl || baseUrl === '/' || baseUrl.includes('vercel.app')) {
                  baseUrl = 'https://mvp-agent1-1.onrender.com';
                }
                
                try {
                  console.log(`Attempting to connect to: ${baseUrl}/`);
                  const res = await fetch(`${baseUrl}/`);
                  if (!res.ok) throw new Error(`Server returned status ${res.status}`);
                  const data = await res.json();
                  alert(`✅ SUCCESS!\nConnected to: ${baseUrl}\nStatus: ${data.status}`);
                } catch (err) {
                  alert(`❌ CONNECTION FAILED\nURL used: ${baseUrl}\nError: ${err.message}\n\nHint: Ensure your Render backend is awake!`);
                }
              }}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 group"
            >
              Test Backend Connection
            </button>
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 group">
              Launch Your First Agent
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Abstract Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full -z-10"></div>
            <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="bg-slate-950 rounded-xl overflow-hidden aspect-video flex items-center justify-center border border-white/5 shadow-2xl">
                <div className="text-slate-500 flex flex-col items-center gap-4">
                  <BarChart3 className="w-16 h-16 opacity-20" />
                  <p className="text-sm font-mono opacity-40 uppercase tracking-widest">Dashboard Loading...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-slate-400">Everything you need to automate your entire marketing stack.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <p className="text-slate-500 text-sm uppercase tracking-widest mb-8">Trusted by innovators at</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale contrast-125">
             <span className="text-2xl font-bold">REACH</span>
             <span className="text-2xl font-bold">SCALE</span>
             <span className="text-2xl font-bold">AGENCY</span>
             <span className="text-2xl font-bold">GROWTH</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden px-8 py-16 md:p-16 bg-gradient-to-br from-blue-600 to-purple-700 text-center">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-blue-900/50 rounded-full blur-3xl"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
              Ready to automate your marketing?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto relative z-10">
              Join 500+ businesses using AgenticMarketer to scale their outbound and inbound operations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <input 
                type="email" 
                placeholder="Enter your work email"
                className="w-full sm:w-80 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                Start Free Trial
              </button>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-100/80 relative z-10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span className="font-bold text-slate-300">AgenticMarketer</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-sm text-slate-600 text-center">
            &copy; 2026 AgenticMarketer AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
