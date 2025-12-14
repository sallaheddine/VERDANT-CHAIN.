import React from 'react';
import { Cpu, Leaf, BarChart3 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Future of Logistics</h2>
          <div className="w-20 h-1 bg-verdant-main mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-verdant-dark">AI-Powered Sustainability Software</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              Verdant Chain isn't just a tracking tool; it's an intelligent engine for change. 
              Our software helps businesses bridge the gap between profitability and environmental responsibility.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              By analyzing deep supply chain data, we identify hidden inefficiencies that drive up costs and carbon output, 
              providing actionable insights to combat high emissions.
            </p>
            
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-100">
              <div className="text-center">
                <div className="bg-emerald-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-verdant-main">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold text-slate-700">AI Analysis</span>
              </div>
              <div className="text-center">
                <div className="bg-emerald-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-verdant-main">
                  <Leaf className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Eco-Focus</span>
              </div>
              <div className="text-center">
                <div className="bg-emerald-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-verdant-main">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Reporting</span>
              </div>
            </div>
          </div>

          <div className="relative">
             {/* Decorative Image/Visual */}
             <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-xl relative z-10">
                <img 
                  src="https://picsum.photos/seed/techgrid/800/800" 
                  alt="Supply Chain Data Visualization" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-verdant-dark/80 to-transparent flex items-end p-8">
                  <p className="text-white font-medium text-lg">"Sustainability that saves money."</p>
                </div>
             </div>
             {/* Decorative backdrop */}
             <div className="absolute -top-4 -right-4 w-full h-full border-2 border-verdant-main rounded-2xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;