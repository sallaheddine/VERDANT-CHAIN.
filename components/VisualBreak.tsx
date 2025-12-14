import React from 'react';

const VisualBreak: React.FC = () => {
  return (
    <section className="py-20 bg-emerald-900 relative overflow-hidden flex items-center justify-center">
      {/* Background Image Parallax Feel */}
      <img 
        src="https://picsum.photos/seed/network/1920/1080" 
        alt="Digital Connection" 
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
      />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          "Profit Meets Planet"
        </h2>
        <div className="mt-6 flex justify-center gap-4">
            <span className="px-4 py-1 rounded-full border border-verdant-accent text-verdant-accent text-sm font-mono uppercase tracking-widest">Efficiency</span>
            <span className="px-4 py-1 rounded-full border border-verdant-accent text-verdant-accent text-sm font-mono uppercase tracking-widest">Sustainability</span>
        </div>
      </div>
    </section>
  );
};

export default VisualBreak;