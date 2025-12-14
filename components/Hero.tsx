import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-verdant-dark">
      {/* Background Effects - Simulating the "nodes" and "chain" from the poster */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-verdant-main rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
      </div>
      
      {/* Abstract Grid/Network Overlay */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{
             backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
             backgroundSize: '40px 40px'
           }}>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 animate-fade-in-up">
          <Globe className="w-4 h-4 text-verdant-accent" />
          <span className="text-verdant-accent text-sm font-medium tracking-wide uppercase">Profit Meets Planet</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
          Smarter Supply Chains. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-verdant-accent to-emerald-400">
            Cleaner World.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
          Smarter supply chains for a sustainable future. We leverage AI to help businesses reduce CO₂ emissions while enhancing efficiency.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact"
            className="px-8 py-4 bg-verdant-main hover:bg-emerald-500 text-white rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-emerald-900/50 flex items-center gap-2"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#about"
            className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;