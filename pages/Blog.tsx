import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const posts = [
    {
        id: 1,
        title: "The Future of Enterprise RAG Systems",
        excerpt: "How Retrieval-Augmented Generation is solving the hallucination problem in corporate AI deployments.",
        category: "Artificial Intelligence",
        author: "Elena Rodriguez",
        date: "Oct 12, 2024",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Zero Trust Architecture: A Practical Guide",
        excerpt: "Moving beyond the buzzword. Steps to implement Zero Trust principles in your hybrid cloud environment.",
        category: "Cybersecurity",
        author: "Marcus Johnson",
        date: "Sep 28, 2024",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Optimizing Kubernetes Costs with FinOps",
        excerpt: "Strategies to reduce your AWS EKS and Azure AKS bills without compromising on performance.",
        category: "Cloud Computing",
        author: "David Miller",
        date: "Sep 15, 2024",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "The Rise of Agentic AI in HR",
        excerpt: "Automating onboarding, policy Q&A, and leave management with autonomous AI agents.",
        category: "Artificial Intelligence",
        author: "Sarah Chen",
        date: "Aug 30, 2024",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16 min-h-screen bg-slate-950 font-sans text-slate-300"
    >
      <div className="container mx-auto px-6 mb-16 text-center">
         <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6 border border-purple-500/20"
          >
            Insights & News
          </motion.div>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
          The Truverizen <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Blog</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Deep dives into AI, Cloud Strategy, and Security trends from our engineering team.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
                <motion.article 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/30 hover:shadow-xl transition-all flex flex-col h-full group"
                >
                    <div className="h-48 overflow-hidden relative">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-white border border-slate-800 flex items-center gap-1 shadow-sm">
                            <Tag size={12} className="text-indigo-400" /> {post.category}
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                            <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                            <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                        </div>
                        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors cursor-pointer">
                            {post.title}
                        </h2>
                        <p className="text-slate-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                            {post.excerpt}
                        </p>
                        <button className="text-indigo-400 font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all mt-auto group-hover:text-white">
                            Read Article <ArrowRight size={16} />
                        </button>
                    </div>
                </motion.article>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;