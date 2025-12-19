
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-slate-600 max-w-xl">
              A collection of hand-picked projects that demonstrate my ability to solve complex problems and deliver high-quality code.
            </p>
          </div>
          <a href="#!" className="text-indigo-600 font-semibold hover:underline flex items-center gap-2">
            View Archive
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center gap-4">
                  <a href="#!" className="text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors">Live Demo</a>
                  <a href="#!" className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Interested in collaboration?</h3>
          <p className="text-indigo-100 mb-8 max-w-lg mx-auto">I'm currently open to full-time roles and high-impact freelance opportunities.</p>
          <a href="#contact" className="inline-block px-10 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:bg-slate-50 transition-all">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
