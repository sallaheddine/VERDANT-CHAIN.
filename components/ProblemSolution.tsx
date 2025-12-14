import React from 'react';
import { AlertTriangle, XCircle, CloudFog, CheckCircle2, TrendingUp, PieChart, Search } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Problem Column */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-red-50 rounded-lg text-red-500">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">The Problem</h3>
            </div>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <CloudFog className="w-6 h-6 text-red-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800">High Emissions</h4>
                  <p className="text-slate-600 text-sm mt-1">Industrial supply chains are major contributors to global carbon footprints, often unchecked.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <XCircle className="w-6 h-6 text-red-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800">Inefficient Logistics</h4>
                  <p className="text-slate-600 text-sm mt-1">Poor route planning and resource management lead to wasted fuel and time.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Search className="w-6 h-6 text-red-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800">Lack of Tools</h4>
                  <p className="text-slate-600 text-sm mt-1">Companies lack profitable tools to accurately track and manage their environmental impact.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Solution Column */}
          <div className="bg-verdant-dark p-8 rounded-2xl shadow-xl text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-verdant-main opacity-10 blur-3xl rounded-full"></div>

            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="p-3 bg-verdant-main/20 rounded-lg text-verdant-accent">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">The Solution</h3>
            </div>
            
            <ul className="space-y-6 relative z-10">
              <li className="flex items-start gap-4">
                <div className="p-1 bg-verdant-accent/20 rounded">
                  <TrendingUp className="w-5 h-5 text-verdant-accent mt-0.5 shrink-0" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">AI-Powered Analysis</h4>
                  <p className="text-gray-300 text-sm mt-1">Advanced algorithms optimize routes and resources to minimize waste automatically.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-1 bg-verdant-accent/20 rounded">
                  <Search className="w-5 h-5 text-verdant-accent mt-0.5 shrink-0" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Carbon Footprint Tracking</h4>
                  <p className="text-gray-300 text-sm mt-1">Real-time monitoring of emissions across the entire supply chain network.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-1 bg-verdant-accent/20 rounded">
                  <PieChart className="w-5 h-5 text-verdant-accent mt-0.5 shrink-0" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">ESG Reporting</h4>
                  <p className="text-gray-300 text-sm mt-1">Automated emission reduction insights and compliance reporting for stakeholders.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;