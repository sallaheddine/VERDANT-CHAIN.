import React from 'react';

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Environmental Impact</h2>
          <p className="text-xl text-slate-600 mb-16">
            We are proving that sustainability is a smart business strategy.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-verdant-main mb-2">20%</div>
              <div className="text-lg font-semibold text-slate-800">Lower Emissions</div>
              <p className="text-slate-500 text-sm mt-2">Target reduction in first year</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-blue-600 mb-2">15%</div>
              <div className="text-lg font-semibold text-slate-800">Higher Efficiency</div>
              <p className="text-slate-500 text-sm mt-2">Optimized logistics flow</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-emerald-700 mb-2">$</div>
              <div className="text-lg font-semibold text-slate-800">Cost Savings</div>
              <p className="text-slate-500 text-sm mt-2">Sustainability that saves money</p>
            </div>
          </div>
          
          <div className="mt-16 bg-verdant-dark rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
             {/* Abstract lines */}
            <svg className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 Q 50 50 100 100" stroke="white" strokeWidth="1" fill="none" />
               <path d="M0 80 Q 50 30 100 80" stroke="white" strokeWidth="1" fill="none" />
            </svg>
            
            <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Ready to optimize?</h3>
                <p className="mb-8 text-gray-300">Join the movement for smarter supply chains.</p>
                <a href="#contact" className="inline-block bg-verdant-accent text-verdant-dark font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
                    Contact Us
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;