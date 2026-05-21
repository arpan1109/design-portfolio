import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Mock data
const allProjects = [
  { title: "Tech review", category: "Review", image: "/images/DRONE-review.png" },
  { title: "I Investigated Island", category: "Documentary Thumbnail", image: "/images/golden-island.webp" },
  { title: "Explainer", category: "Mystery", image: "/images/altman.png" },
  { title: "Self Growth", category: "Growth", image: "images/olag-remake.jpeg" },
  { title: "Unique Identity", category: "Podcast", image: "images/millionare.webp" },
  { title: "Brand Deals", category: "Branding", image: "/images/NIKE ad.webp" },
  { title: "Doomsday Secret", category: "Explainer Thumbnail", image: "/images/doomsday.webp" },
  { title: "Personal Growth", category: "Growth", image: "/images/golden-product.png" },
  { title: "Case Study", category: "Documentary", image: "images/charles.jpg" },
  { title: "AI comparison", category: "Comparison", image: "/images/ai-compare.webp" },
  { title: "Hitorical", category: "Documentary", image: "/images/Hitler-downfall-thumbnail.png" },
  { title: "Rewire Brain", category: "Self-help", image: "/images/brain.webp" },
  { title: "Technical Documentary", category: "Documentary", image: "/images/elon-evolution.png" },
  // { title: "Unique Identity", category: "Branding", image: "/images/chain.png" },
  { title: "Food Review", category: "Food review", image: "/images/burger.webp" },
  { title: "Food Review", category: "Food review", image: "images/remake.png" },
  { title: "Online Money", category: "Earning", image: "images/online-earning.png" },
  { title: "GTA V", category: "Gaming", image: "/images/gta-fails.webp" },
  { title: "Comparison", category: "Comparison", image: "images/remake2.png" },
  { title: "Case Study", category: "Documentary", image: "images/cleo-abram.png" },
  { title: "Product Growth", category: "Growth", image: "/images/transformation.webp" },
  { title: "GTA V", category: "Gaming", image: "/images/gta-car.webp" },
  { title: "Hiest", category: "Survival", image: "images/hiest-thumbnail.png" },
  { title: "Hotel compare", category: "Comparsion", image: "/images/hotel-compare.webp" },
  { title: "News", category: "Documentary", image: "/images/trump-target.png" },
  // { title: "News", category: "Documentary", image: "/images/trump-target.png" },
  { title: "Mystery", category: "Mystery", image: "/images/control.webp" },
  { title: "Hidden Feature", category: "Growth", image: "/images/gemini.webp" },
  { title: "YT Growth", category: "Growth", image: "/images/thumb-importance.webp" },
  { title: "Space Thumbnail", category: "Mystery", image: "/images/saturn.webp" },


];

export default function AllWork() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white pt-22 pb-20 px-6 md:px-12 font-onest">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-900 pb-8 mb-16 gap-6">
          <div>
            <Link to="/" className="text-xs text-orange-500 uppercase tracking-widest hover:underline mb-3 inline-block">
               Back to Home
            </Link>
            <h1 className="text-4xl pt-3 md:text-6xl font-prata tracking-tight text-white mt-1">
              Thumbnail <span className="bg-linear-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-light">Archive</span>
            </h1>
          </div>
          <p className="text-zinc-300 max-w-sm text-sm md:text-base leading-relaxed">
            A complete collection of visual designs, high-click thumbnails, and digital assets engineered for creator growth.
          </p>
        </div>

        {/* Dynamic Masonry-Style Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-zinc-950 border border-zinc-600 rounded-3xl p-4 hover:border-orange-500/30 transition-all duration-500 group cursor-pointer"
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
                <p className="text-zinc-300 text-[11px] tracking-widest uppercase mb-1">
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