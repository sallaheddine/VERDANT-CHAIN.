import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProblemSolution from './components/ProblemSolution';
import Impact from './components/Impact';
import VisualBreak from './components/VisualBreak';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-verdant-accent selection:text-verdant-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProblemSolution />
        <VisualBreak />
        <Impact />
      </main>
      <Footer />
    </div>
  );
}