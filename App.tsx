
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';
import { DEVELOPER_NAME } from './constants';
import { useReveal } from './hooks/useReveal';

const App: React.FC = () => {
  const revealContainerRef = useReveal();

  return (
    <div className="relative min-h-screen selection:bg-indigo-100">
      {/* Persistent Animated Background */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200/30 rounded-full blur-[120px] animate-drift"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-purple-200/30 rounded-full blur-[120px] animate-drift-slow"></div>
        <div className="absolute top-[30%] right-[15%] w-[25%] h-[25%] bg-blue-100/20 rounded-full blur-[100px] animate-drift"></div>
      </div>

      <Navbar />
      
      <div ref={revealContainerRef}>
        <main>
          <Hero />
          <div className="reveal"><About /></div>
          <div className="reveal"><Skills /></div>
          <div className="reveal"><Projects /></div>
          <div className="reveal"><Contact /></div>
        </main>
      </div>
      
      <footer className="bg-slate-900 border-t border-white/5 py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} {DEVELOPER_NAME}. Crafted with React, Tailwind & Gemini AI.
          </p>
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;
