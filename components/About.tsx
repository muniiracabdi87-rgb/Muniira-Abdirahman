
import React from 'react';
import { BIO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all"></div>
            <img 
              src="https://picsum.photos/seed/profile/600/600" 
              alt="Developer Profile" 
              className="relative w-full aspect-square object-cover rounded-2xl shadow-lg border border-slate-100"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Building digital bridges between ideas and users.</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {BIO}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              My journey started with a curiosity for how the web works, which evolved into a career dedicated to mastering the art of software engineering. I believe in writing code that is not only functional but also maintainable and elegant.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div>
                <h4 className="font-bold text-slate-900 text-2xl">5+</h4>
                <p className="text-slate-500 text-sm">Years Experience</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-2xl">40+</h4>
                <p className="text-slate-500 text-sm">Completed Projects</p>
              </div>
            </div>
            <a href="#skills" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all group">
              See my technical stack
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
