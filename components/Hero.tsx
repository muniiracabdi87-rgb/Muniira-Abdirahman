
import React from 'react';
import { DEVELOPER_NAME, DEVELOPER_TITLE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center md:text-left max-w-3xl animate-float">
          <h2 className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50/80 backdrop-blur-sm rounded-full border border-indigo-100">
            Available for new projects
          </h2>
          <h1 className="text-5xl md:text-8xl font-extrabold text-slate-900 leading-[1] mb-6 tracking-tight">
            Hi, I'm <span className="gradient-text">{DEVELOPER_NAME}</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-600 font-medium mb-10 leading-relaxed max-w-2xl">
            A {DEVELOPER_TITLE} specializing in crafting high-end digital experiences that scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <a href="#projects" className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 shadow-2xl shadow-indigo-200 transition-all hover:-translate-y-1 active:scale-95 text-center">
              View My Work
            </a>
            <a href="#about" className="px-10 py-5 bg-white/50 backdrop-blur-md text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-white transition-all hover:-translate-y-1 active:scale-95 text-center">
              About Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating Graphic Element */}
      <div className="absolute right-[10%] top-[20%] w-64 h-64 border-2 border-indigo-100 rounded-full animate-drift opacity-30 pointer-events-none hidden lg:block"></div>
    </section>
  );
};

export default Hero;
