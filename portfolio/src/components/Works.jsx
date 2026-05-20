import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Mock data
const allProjects = [
  { title: "Doomsday Secret", category: "Explainer Thumbnail", image: "/images/doomsday.png" },
  { title: "I Investigated Island", category: "Documentary Thumbnail", image: "/images/process-3.png" },
  { title: "Unique Identity", category: "Branding", image: "/images/sparkles.png" },

];

export default function AllWork() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-12 font-onest">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-900 pb-8 mb-16 gap-6">
          <div>
            <Link to="/" className="text-xs text-orange-500 uppercase tracking-widest hover:underline mb-3 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-prata tracking-tight text-white mt-1">
              Selected <span className="text-orange-500 italic">Archive</span>
            </h1>
          </div>
          <p className="text-zinc-500 max-w-sm text-sm md:text-base leading-relaxed">
            A complete collection of visual designs, high-click thumbnails, and digital assets engineered for creator growth.
          </p>
        </div>

        {/* Dynamic Masonry-Style Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-zinc-950 border border-zinc-900 rounded-3xl p-4 hover:border-orange-500/30 transition-all duration-500 group cursor-pointer"
            >
              {/* Asset Box */}
              <div className="w-full aspect-video bg-zinc-900/40 rounded-2xl overflow-hidden border border-zinc-900 relative flex items-center justify-center mb-5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Info */}
              <div className="px-2 pb-2">
                <p className="text-zinc-500 text-[11px] tracking-widest uppercase mb-1">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}