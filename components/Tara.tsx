import React, { useState } from 'react';
import { MessageSquare, Sparkles, Database, FileText, Send } from 'lucide-react';

const Tara: React.FC = () => {
  const [messages, setMessages] = useState<Array<{role: 'user' | 'ai', text: string}>>([
    { role: 'ai', text: 'Hi! I am TARA, your Truverizen AI Response Assistant. I can help with HR policies, generate SQL queries from natural language, or analyze contracts. How can I assist you today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const demoPrompts = [
    "How many employees joined last month?",
    "What is the policy for remote work?",
    "Show me Q3 sales revenue by region"
  ];

  const handlePromptClick = (prompt: string) => {
    setMessages(prev => [...prev, { role: 'user', text: prompt }]);
    setIsTyping(true);
    
    // Simulate AI response delay
    setTimeout(() => {
      let response = "";
      if (prompt.includes("employees")) {
        response = "Based on the HRMS database, 14 employees joined in the last month. Here is the breakdown: Engineering (6), Sales (4), Operations (4).";
      } else if (prompt.includes("policy")) {
        response = "According to the '2025 Employee Handbook.pdf', employees are permitted to work remotely up to 3 days a week with manager approval. Core hours are 10 AM to 4 PM.";
      } else if (prompt.includes("sales")) {
        response = "Generating SQL: `SELECT region, SUM(revenue) FROM sales WHERE quarter = 'Q3' GROUP BY region;` \n\nResult: \n- North America: $1.2M\n- EMEA: $850k\n- APAC: $920k";
      }
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section id="tara" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles size={14} /> Product Spotlight
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">TARA</span>
            </h2>
            <h3 className="text-xl text-slate-700 font-semibold mb-4">Truverizen AI Response Assistant</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              A domain-trained, continuously learning AI that accelerates decision-making. TARA understands your internal SOPs, workflows, and databases to provide instant, accurate answers.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><FileText size={20} /></div>
                <div>
                  <h4 className="text-slate-900 font-bold">Document Intelligence</h4>
                  <p className="text-sm text-slate-500">Understands SOPs across PDFs, Word, and Wikis.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-purple-50 rounded-lg text-purple-600"><Database size={20} /></div>
                <div>
                  <h4 className="text-slate-900 font-bold">Natural Language to SQL</h4>
                  <p className="text-sm text-slate-500">Converts plain English into complex database queries.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-teal-50 rounded-lg text-teal-600"><MessageSquare size={20} /></div>
                <div>
                  <h4 className="text-slate-900 font-bold">Enterprise Integration</h4>
                  <p className="text-sm text-slate-500">Seamlessly connects with ERP, CRM, and HRMS.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Chat Simulator */}
          <div className="relative">
            {/* Decorative Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-3xl blur opacity-30"></div>
            
            <div className="relative bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[500px]">
              {/* Header */}
              <div className="bg-slate-50 p-4 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                    T
                  </div>
                  <div>
                    <div className="text-slate-900 font-bold text-sm">TARA</div>
                    <div className="text-xs text-green-500 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Online
                    </div>
                  </div>
                </div>
                <div className="text-xs text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded">Beta v2.0</div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50/50">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-truAccent text-white rounded-tr-none' 
                        : 'bg-white text-slate-700 rounded-tl-none border border-slate-200'
                    }`}>
                      {msg.text.split('\n').map((line, i) => (
                        <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white rounded-2xl p-4 rounded-tl-none border border-slate-200 flex gap-1 shadow-sm">
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></span>
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-slate-200">
                <div className="mb-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {demoPrompts.map((prompt, i) => (
                    <button 
                      key={i}
                      onClick={() => handlePromptClick(prompt)}
                      className="whitespace-nowrap px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-xs text-slate-600 rounded-full transition-colors border border-slate-200"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Ask TARA about your data..." 
                    className="w-full bg-slate-50 text-slate-900 rounded-xl py-3 pl-4 pr-12 border border-slate-200 focus:outline-none focus:border-truAccent focus:ring-1 focus:ring-truAccent transition-all"
                    disabled
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-truAccent text-white rounded-lg opacity-50 cursor-not-allowed">
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tara;