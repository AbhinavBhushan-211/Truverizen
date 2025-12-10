import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

const TaraDemo: React.FC = () => {
  const [messages, setMessages] = useState<Array<{role: 'user' | 'ai', text: string}>>([
    { role: 'ai', text: 'Hello. I can query your internal databases or analyze documents. How can I assist?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const demoPrompts = ["Remote Policy?", "Q3 Revenue"];

  const handlePromptClick = (prompt: string) => {
    setMessages(prev => [...prev, { role: 'user', text: prompt }]);
    setIsTyping(true);
    
    setTimeout(() => {
      let response = "";
      if (prompt.includes("Policy")) response = "Employees may work remotely 3 days/week. (Source: Handbook v2)";
      else response = "Q3 Revenue: $1.2M. Growth: +15%.";
      
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="w-full h-[280px] md:h-[340px] bg-white rounded-xl overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-white">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-200">
                    <Sparkles size={12} />
                </div>
                <span className="font-bold text-sm text-slate-800">TARA</span>
            </div>
            <div className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] rounded font-medium">Enterprise</div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 bg-slate-50 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed shadow-sm ${
                        msg.role === 'user' 
                        ? 'bg-indigo-600 text-white rounded-br-none' 
                        : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none'
                    }`}>
                        {msg.text}
                    </div>
                </div>
            ))}
            {isTyping && (
                <div className="flex justify-start">
                    <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-slate-200 shadow-sm flex gap-1">
                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></span>
                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                    </div>
                </div>
            )}
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-slate-100">
            <div className="flex gap-2 mb-2">
                {demoPrompts.map((p, i) => (
                    <button key={i} onClick={() => handlePromptClick(p)} className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-600 text-[10px] rounded-full transition-colors border border-slate-200">
                        {p}
                    </button>
                ))}
            </div>
            <div className="relative">
                <input type="text" placeholder="Ask anything..." className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 pl-3 pr-8 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all" disabled />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 bg-indigo-600 text-white rounded-md opacity-50"><Send size={10} /></button>
            </div>
        </div>
    </div>
  );
};

export default TaraDemo;