import React from 'react';

const TrustedBy: React.FC = () => {
  const logos = [
    "AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Docker", "Python", 
    "TensorFlow", "SentinelOne", "CrowdStrike", "Splunk", "PostgreSQL"
  ];

  return (
    <section className="py-12 bg-slate-950 border-b border-slate-800">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
          Powered by World-Class Technology
        </p>
      </div>

      <div 
        className="relative w-full inline-flex flex-nowrap overflow-hidden"
        style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_li]:max-w-none animate-infinite-scroll">
          {logos.map((logo, idx) => (
            <li key={idx} className="text-3xl font-display font-bold text-slate-600 select-none whitespace-nowrap">
              {logo}
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_li]:max-w-none animate-infinite-scroll" aria-hidden="true">
          {logos.map((logo, idx) => (
            <li key={`dup-${idx}`} className="text-3xl font-display font-bold text-slate-600 select-none whitespace-nowrap">
              {logo}
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;