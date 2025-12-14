import React, { useState, useEffect } from 'react';
import { Link, Leaf } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-verdant-dark/95 backdrop-blur-sm py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-verdant-accent p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Link className="w-6 h-6 text-verdant-dark" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl tracking-tight leading-none">VERDANT</span>
            <span className="text-verdant-accent font-light text-sm tracking-widest leading-none">CHAIN</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Concept</a>
          <a href="#solutions" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Solutions</a>
          <a href="#impact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Impact</a>
          <a 
            href="#contact"
            className="bg-white text-verdant-dark px-5 py-2 rounded-full font-semibold text-sm hover:bg-verdant-accent transition-colors"
          >
            Request Demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;