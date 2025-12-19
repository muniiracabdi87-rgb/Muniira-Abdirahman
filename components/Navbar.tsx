
import React from 'react';
import { DEVELOPER_NAME } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold tracking-tight text-slate-900">
              {DEVELOPER_NAME.split(' ')[0]}<span className="text-indigo-600">.</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-slate-600 hover:text-indigo-600 text-sm font-medium transition-colors">About</a>
            <a href="#skills" className="text-slate-600 hover:text-indigo-600 text-sm font-medium transition-colors">Skills</a>
            <a href="#projects" className="text-slate-600 hover:text-indigo-600 text-sm font-medium transition-colors">Projects</a>
            <a href="#contact" className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-all">Hire Me</a>
          </div>
          <div className="md:hidden flex items-center">
            {/* Mobile menu could go here if needed, but keeping it minimal */}
            <a href="#contact" className="text-indigo-600 font-medium text-sm">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
