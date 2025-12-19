
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Core Competencies</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            I leverage these industry-standard technologies to turn visions into functional reality.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {SKILLS.map((skill, index) => (
            <div 
              key={skill.name} 
              className="p-8 bg-white/70 backdrop-blur-sm rounded-3xl border border-slate-100 hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-300 flex flex-col items-center justify-center group hover:-translate-y-2 cursor-default"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform shadow-sm">
                {skill.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-lg">{skill.name}</h3>
              <p className="text-xs text-indigo-500 mt-2 font-bold uppercase tracking-widest">{skill.category}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#projects" className="inline-flex items-center gap-3 px-10 py-4 bg-white/80 backdrop-blur-sm text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-white transition-all shadow-sm group">
            Check out what I've built
            <svg className="w-5 h-5 text-indigo-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
