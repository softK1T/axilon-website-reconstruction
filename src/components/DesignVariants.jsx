import React, { useState } from 'react';
import { ArrowRight, Layout, Zap, Leaf, Crown, Box } from 'lucide-react';

const DesignVariants = () => {
  const [activeVariant, setActiveVariant] = useState('brutalist');

  const variants = {
    brutalist: {
      name: "Brutalist / Industrial",
      icon: <Box />,
      wrapper: "bg-stone-300 font-mono p-4 min-h-screen text-black",
      nav: "border-4 border-black p-4 bg-yellow-400 mb-8 flex justify-between items-center font-black uppercase tracking-tighter",
      hero: "border-4 border-black bg-white p-8 md:p-16 mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
      heroTitle: "text-5xl md:text-8xl font-black uppercase leading-none mb-6",
      heroText: "text-xl font-bold uppercase border-l-4 border-black pl-4",
      cardGrid: "grid grid-cols-1 md:grid-cols-2 gap-8",
      card: "bg-white border-4 border-black p-6 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer",
      button: "bg-black text-white px-8 py-4 font-bold uppercase hover:bg-yellow-400 hover:text-black transition-colors"
    },
    minimal: {
      name: "Swiss Minimal",
      icon: <Layout />,
      wrapper: "bg-white font-sans text-gray-900 min-h-screen",
      nav: "px-8 py-8 flex justify-between items-center border-b border-gray-100",
      hero: "px-8 py-32 max-w-5xl mx-auto",
      heroTitle: "text-5xl md:text-7xl font-light tracking-tight mb-8 leading-tight",
      heroText: "text-lg text-gray-500 max-w-md ml-auto",
      cardGrid: "grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-gray-100",
      card: "p-12 border-b border-r border-gray-100 hover:bg-gray-50 transition-colors group cursor-pointer",
      button: "text-sm font-semibold tracking-widest uppercase border-b border-black pb-1 hover:border-gray-400 transition-colors"
    },
    eco: {
      name: "Eco Urban",
      icon: <Leaf />,
      wrapper: "bg-[#F5F7F5] font-sans text-[#2C3E2D] min-h-screen",
      nav: "px-6 py-6 flex justify-between items-center max-w-7xl mx-auto",
      hero: "px-6 py-24 max-w-7xl mx-auto bg-[#E8EDE9] rounded-[3rem] mb-12 relative overflow-hidden",
      heroTitle: "text-5xl md:text-6xl font-serif font-medium mb-6 text-[#1A261B]",
      heroText: "text-xl text-[#4A5D4B] max-w-2xl font-light",
      cardGrid: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6",
      card: "bg-white p-8 rounded-3xl hover:shadow-xl hover:shadow-[#2C3E2D]/5 transition-all cursor-pointer border border-[#E8EDE9]",
      button: "bg-[#2C3E2D] text-[#F5F7F5] px-6 py-3 rounded-full font-medium hover:bg-[#1A261B] transition-colors"
    },
    tech: {
      name: "High-Tech / BIM",
      icon: <Zap />,
      wrapper: "bg-slate-950 font-sans text-blue-100 min-h-screen relative overflow-hidden",
      nav: "px-8 py-6 flex justify-between items-center border-b border-blue-900/30 backdrop-blur-md sticky top-0 z-10",
      hero: "px-8 py-32 max-w-7xl mx-auto relative",
      heroTitle: "text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-8",
      heroText: "text-xl text-blue-300/80 max-w-2xl border-l-2 border-cyan-500/50 pl-6",
      cardGrid: "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-8",
      card: "bg-slate-900/50 border border-blue-800/30 p-8 backdrop-blur hover:border-cyan-400/50 hover:bg-blue-900/20 transition-all cursor-pointer group relative overflow-hidden",
      button: "bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all"
    },
    editorial: {
      name: "Editorial Premium",
      icon: <Crown />,
      wrapper: "bg-[#FAF9F6] font-serif text-[#1C1C1C] min-h-screen",
      nav: "px-12 py-8 flex justify-between items-center border-b border-[#1C1C1C]/10",
      hero: "px-12 py-32 text-center border-b border-[#1C1C1C]/10 mb-0",
      heroTitle: "text-6xl md:text-8xl italic mb-8 font-light",
      heroText: "text-xl text-[#1C1C1C]/70 max-w-xl mx-auto font-sans",
      cardGrid: "grid grid-cols-1 md:grid-cols-3 divide-x divide-[#1C1C1C]/10 border-b border-[#1C1C1C]/10",
      card: "p-16 hover:bg-white transition-colors cursor-pointer text-center",
      button: "border border-[#1C1C1C] px-10 py-4 text-sm font-sans tracking-widest hover:bg-[#1C1C1C] hover:text-white transition-colors"
    }
  };

  const current = variants[activeVariant];

  const jobs = [
    { title: "Architectural Lead", loc: "Warszawa" },
    { title: "BIM Specialist", loc: "Lodz" },
    { title: "Senior Engineer", loc: "Krakow" }
  ];

  return (
    <div className={current.wrapper}>
      {/* Variant Switcher */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur shadow-2xl rounded-full p-2 flex gap-2 z-50 border border-gray-200">
        {Object.entries(variants).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActiveVariant(key)}
            className={`p-3 rounded-full transition-all duration-300 group relative ${
              activeVariant === key 
                ? 'bg-black text-white shadow-lg scale-110' 
                : 'text-gray-500 hover:bg-gray-100'
            }`}
            title={value.name}
          >
            {value.icon}
            <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {value.name}
            </span>
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      <nav className={current.nav}>
        <div className="text-2xl font-bold">AXILON</div>
        <div className="hidden md:flex gap-8 text-sm opacity-60">
          <span>PROJECTS</span>
          <span>STUDIO</span>
          <span>CAREERS</span>
        </div>
      </nav>

      <div className={current.hero}>
        <h1 className={current.heroTitle}>
          Building the <br/>Future
        </h1>
        <p className={current.heroText}>
          We are a leading architectural firm shaping the skylines of tomorrow. Join our team of visionaries.
        </p>
        <div className="mt-8">
           <button className={current.button}>Explore Roles</button>
        </div>
      </div>

      <div className={current.cardGrid}>
        {jobs.map((job, i) => (
          <div key={i} className={current.card}>
            <div className="flex justify-between items-start mb-4 opacity-50 text-sm">
              <span>0{i + 1}</span>
              <span>{job.loc}</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">{job.title}</h3>
            <div className="flex items-center gap-2 opacity-60 text-sm">
              <span>View Details</span>
              <ArrowRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignVariants;
