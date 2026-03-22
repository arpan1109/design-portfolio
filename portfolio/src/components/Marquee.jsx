
import React from 'react';
import projects from '../data/projects.json';

export default function Marquee() {
  return (
    <section className="py-16 bg-[#0a0a0a] text-white overflow-hidden border-b border-zinc-900">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 font-onest">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Moving showcase
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-sm leading-relaxed">
          A quick look at my work across different styles and niches.
        </p>
      </div>

      {/* The Wrapper */}
      <div className="relative flex overflow-hidden group select-none">
        
        {/* We use [...projects, ...projects] to double the list.
            This creates a single long line that never 'runs out' of images.
        */}
        <div className="flex flex-nowrap gap-8 animate-marquee group-hover:[animation-play-state:paused]">
          
          {[...projects, ...projects].map((project, index) => (
            <div 
              key={`${project.id}-${index}`} 
              /* 'flex-none' is CRITICAL. It stops the browser from squishing the images.
                 'w-[28rem]' ensures they stay at the thumbnail size you want.
              */
              className="flex-none w-72 h-40 md:w-md md:h-64 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 transition-all duration-500 hover:scale-95 cursor-pointer relative group/item"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-80 group-hover/item:opacity-100 transition-opacity"
                loading="lazy"
              />
              
              {/* Title Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity flex items-end p-6">
                <div className="transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 mb-1 font-onest">
                    {project.category}
                  </p>
                  <span className="text-sm tracking-widest uppercase font-bold font-onest">
                    {project.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}