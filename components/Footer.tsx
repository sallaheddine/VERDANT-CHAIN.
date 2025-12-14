import React from 'react';
import { Mail, MapPin, Link as LinkIcon, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
             <div className="flex items-center gap-2 mb-4">
               <div className="text-verdant-main font-bold text-xl">VERDANT CHAIN</div>
             </div>
             <p className="text-sm text-slate-400">
               Smarter supply chains for a sustainable future. Combating high emissions and inefficiency with AI.
             </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-verdant-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-verdant-accent transition-colors">Concept</a></li>
              <li><a href="#solutions" className="hover:text-verdant-accent transition-colors">Solution</a></li>
              <li><a href="#impact" className="hover:text-verdant-accent transition-colors">Impact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-verdant-main" />
                <a href="mailto:hello@reallygreatsite.com" className="hover:text-white">hello@reallygreatsite.com</a>
              </li>
              <li className="flex items-center gap-3">
                <LinkIcon className="w-4 h-4 text-verdant-main" />
                <a href="#" className="hover:text-white">www.reallygreatsite.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-verdant-main" />
                <span>123 Anywhere St., Any City</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-verdant-main" />
                <span>123-456-7890</span>
              </li>
            </ul>
          </div>

          {/* Project Details */}
          <div>
            <h4 className="text-white font-semibold mb-4">Project Info</h4>
            <div className="bg-slate-800 p-4 rounded-lg text-xs">
              <p className="text-verdant-accent font-semibold mb-2">ECONOVA Project</p>
              <p className="mb-2">This website was created for a school entrepreneurship class.</p>
              <div className="border-t border-slate-700 pt-2 mt-2">
                <p className="font-semibold text-slate-400">Team:</p>
                <ul className="mt-1 space-y-1 text-slate-500">
                  <li>Student Name 1</li>
                  <li>Student Name 2</li>
                  <li>Student Name 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Verdant Chain. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Profit Meets Planet</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;