import React, { useState, useEffect, useRef } from 'react';
import { Send, Sparkles, Database, Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TaraDemo: React.FC = () => {
  const [messages, setMessages] = useState<Array<{role: 'user' | 'ai', text: string, steps?: string[]}>>([
    { role: 'ai', text: 'Hello. I am TARA AI. I can access your internal databases, PDFs, and SOPs securely. Ask me anything.' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [processingStep, setProcessingStep] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const demoPrompts = ["Remote Work Policy?", "Q3 Revenue Analysis", "Summarize ISO Guidelines"];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, processingStep]);

  const handlePromptClick = async (prompt: string) => {
    if (isTyping) return;
    setMessages(prev => [...prev, { role: 'user', text: prompt }]);
    setIsTyping(true);
    
    // Simulate RAG Process
    let contextSteps: string[] = [];
    let response = "";

    if (prompt.includes("Policy")) {
        contextSteps = ["Searching Knowledge Base...", "Found 'Employee_Handbook_v9.pdf'", "Extracting Section 4.2"];
        response = "According to the Employee Handbook (Section 4.2), employees are eligible for remote work up to 3 days a week after completing their probation period. Approval from the department head is required.";
    } else if (prompt.includes("Revenue")) {
        contextSteps = ["Connecting to Snowflake DB...", "Generating SQL Query...", "Executing: SELECT sum(rev) FROM sales..."];
        response = "Q3 Revenue stands at $2.4M, marking a 15% increase YoY. The North American region contributed 60% of total growth.";
    } else {
        contextSteps = ["Searching Document Store...", "Analyzing 'ISO_27001_Controls.docx'", "Summarizing key points"];
        response = "The ISO 27001 guidelines emphasize: 1. Risk Assessment, 2. Asset Management, and 3. Access Control. I've highlighted the missing compliance checks in your dashboard.";
    }

    // Playback steps
    for (const step of contextSteps) {
        setProcessingStep(step);
        await new Promise(r => setTimeout(r, 600));
    }
    setProcessingStep(null);
    
    setMessages(prev => [...prev, { role: 'ai', text: response, steps: contextSteps }]);
    setIsTyping(false);
  };

  return (
    <div className="w-full h-[320px] md:h-[380px] bg-slate-900 rounded-xl overflow-hidden flex flex-col shadow-2xl border border-slate-800 font-sans">
        {/* Header */}
        <div className="h-12 border-b border-slate-800 flex items-center px-4 justify-between bg-slate-950">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-900/50">
                    <Sparkles size={12} />
                </div>
                <span className="font-bold text-sm text-white tracking-wide">TARA AI <span className="text-slate-500 font-normal text-xs ml-1">v2.1</span></span>
            </div>
            <div className="flex gap-3">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                    <Database size={10} className="text-blue-400" /> Connected
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></div>
            </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 bg-slate-900/50 p-4 overflow-y-auto space-y-5 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent" ref={scrollRef}>
            {messages.map((msg, idx) => (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={idx} 
                    className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                    <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                        msg.role === 'user' 
                        ? 'bg-indigo-600 text-white rounded-br-none' 
                        : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
                    }`}>
                        {msg.text}
                    </div>
                    {msg.role === 'ai' && msg.steps && (
                        <div className="flex gap-2 mt-2 ml-1 flex-wrap">
                            {msg.steps.map((step, sIdx) => (
                                <span key={sIdx} className="text-[9px] text-slate-500 bg-slate-900/50 px-1.5 py-0.5 rounded border border-slate-800 flex items-center gap-1">
                                    <CheckCircle2 size={8} className="text-green-500" /> {step.split('...')[0]}
                                </span>
                            ))}
                        </div>
                    )}
                </motion.div>
            ))}
            
            <AnimatePresence>
                {processingStep && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-xs text-indigo-400 ml-2"
                    >
                        <Loader2 size={12} className="animate-spin" />
                        <span>{processingStep}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        {/* Input */}
        <div className="p-3 bg-slate-950 border-t border-slate-800">
            <div className="flex gap-2 mb-3 overflow-x-auto pb-1 scrollbar-hide">
                {demoPrompts.map((p, i) => (
                    <button key={i} onClick={() => handlePromptClick(p)} className="flex-shrink-0 px-3 py-1 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-indigo-400 text-[10px] rounded-full transition-all border border-slate-800 hover:border-indigo-500/30">
                        {p}
                    </button>
                ))}
            </div>
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <input 
                    type="text" 
                    placeholder="Ask about your enterprise data..." 
                    className="relative w-full bg-slate-900 border border-slate-800 rounded-lg py-2.5 pl-3 pr-10 text-sm text-slate-200 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600" 
                    disabled 
                />
                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md transition-colors shadow-lg shadow-indigo-900/20">
                    <Send size={12} />
                </button>
            </div>
        </div>
    </div>
  );
};

export default TaraDemo;