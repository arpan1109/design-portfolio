import React from 'react';

// For now, we will use placeholder colors instead of images.
// Later, you will map your projects.json data here!
const dummyProjects = [
  { id: 1, title: 'Project 1', color: 'bg-zinc-800' },
  { id: 2, title: 'Project 2', color: 'bg-zinc-700' },
  { id: 3, title: 'Project 3', color: 'bg-zinc-800' },
  { id: 4, title: 'Project 4', color: 'bg-zinc-700' },
  { id: 5, title: 'Project 5', color: 'bg-zinc-800' },
];

export default function Marquee() {
  return (
    <section className="py-4 bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <h2 className="text-4xl font-prata md:text-5xl  tracking-wide">
          Recent Works
        </h2>
        <p className="text-zinc-200 font-onest text-sm md:text-xl max-w-lg">
          My recent works across different styles and niches.
        </p>
      </div>

      {/* The Marquee Container */}
      <div className="relative flex overflow-hidden group">
        
        {/* Track 1 */}
        <div className="flex animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap">
          {dummyProjects.map((project) => (
            <div 
              key={`track1-${project.id}`} 
              className={`w-80 h-48 md:w-md md:h-64 mx-4 rounded-xl flex items-center justify-center ${project.color} transition-transform duration-300 hover:scale-95 cursor-pointer`}
            >
              {/* Replace this text with an <img /> tag later */}
              <span className="text-zinc-500 font-mono text-sm">{project.title}</span>
            </div>
          ))}
        </div>

        {/* Track 2 (The Duplicate for seamless looping) */}
        <div className="flex animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap absolute top-0 left-full">
          {dummyProjects.map((project) => (
            <div 
              key={`track2-${project.id}`} 
              className={`w-80 h-48 md:w-md md:h-64 mx-4 rounded-xl flex items-center justify-center ${project.color} transition-transform duration-300 hover:scale-95 cursor-pointer`}
            >
              <span className="text-zinc-500 font-mono text-sm">{project.title}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}