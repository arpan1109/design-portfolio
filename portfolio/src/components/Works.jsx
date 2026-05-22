import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

// Mock data
const allProjects = [
  {
    title: "Tech review",
    category: "Review",
    image: "/images/DRONE-review.png",
  },
  {
    title: "I Investigated Island",
    category: "Documentary",
    image: "/images/golden-island.webp",
  },
  { title: "Explainer", category: "Mystery", image: "/images/altman.png" },
  {
    title: "Self Growth",
    category: "Growth",
    image: "images/olag-remake.jpeg",
  },
  {
    title: "Editing",
    category: "Growth",
    image: "/images/thumbnail editing.png",
  },
  {
    title: "Unique Identity",
    category: "Podcast",
    image: "images/millionare.webp",
  },
  { title: "Airbnb", category: "Earning", image: "images/remake.jpg" },
  { title: "Case Study", category: "Documentary", image: "images/charles.jpg" },
  // { title: "Brand Deals", category: "Branding", image: "/images/NIKE ad.webp" },
  { title: "Space", category: "Mystery", image: "/images/black hole.png" },
  {
    title: "Doomsday Secret",
    category: "Explainer Thumbnail",
    image: "/images/doomsday.webp",
  },
  // { title: "GTA V", category: "Gaming", image: "/images/gta-car.webp" },
  {
    title: "Personal Growth",
    category: "Growth",
    image: "/images/golden-product.png",
  },
  { title: "Explainer", category: "Grwoth", image: "/images/charles-2.png" },
  {
    title: "AI comparison",
    category: "Comparison",
    image: "/images/ai-compare.webp",
  },
  {
    title: "Hitorical",
    category: "Documentary",
    image: "/images/Hitler-downfall-thumbnail.png",
  },
  { title: "Rewire Brain", category: "Self-help", image: "/images/brain.webp" },
  {
    title: "Technical Documentary",
    category: "Documentary",
    image: "/images/elon-evolution.png",
  },
  {
    title: "Lifestyle",
    category: "Mystery",
    image: "/images/Secret serum.png",
  },
  // { title: "Unique Identity", category: "Branding", image: "/images/chain.png" },
  {
    title: "Food Review",
    category: "Food review",
    image: "/images/burger.webp",
  },
  // {
  //   title: "Online Money",
  //   category: "Earning",
  //   image: "images/online-earning.png",
  // },
  { title: "GTA V", category: "Gaming", image: "/images/gta-fails.webp" },
  { title: "Comparison", category: "Comparison", image: "images/remake2.png" },
  {
    title: "Case Study",
    category: "Documentary",
    image: "images/cleo-abram.png",
  },
  // {
  //   title: "Product Growth",
  //   category: "Growth",
  //   image: "/images/transformation.webp",
  // },
  { title: "Hiest", category: "Survival", image: "images/hiest-thumbnail.png" },
  { title: "News", category: "Documentary", image: "/images/trump-target.png" },
  // { title: "News", category: "Documentary", image: "/images/trump-target.png" },
  { title: "Mystery", category: "Mystery", image: "/images/control.webp" },
  { title: "Hidden Feature", category: "Growth", image: "/images/gemini.webp" },
  // {
  //   title: "YT Growth",
  //   category: "Growth",
  //   image: "/images/thumb-importance.webp",
  // },
  {
    title: "Space Thumbnail",
    category: "Mystery",
    image: "/images/saturn.webp",
  },
];

export default function AllWork() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="min-h-screen bg-black text-white pt-5 pb-20 px-4 sm:px-6 md:px-12 font-onest">
        <div className="max-w-7xl mx-auto">
          {/* Header Block */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-900 pb-1 mb-5 gap-6">
            <div>
              <Link
                to="/"
                className="text-xs text-orange-500  p-2 uppercase tracking-widest hover:underline rounded-3xl border-red-500 border-2 mb-3 inline-block"
              >
                ← Back to Home
              </Link>
              <h1 className="text-4xl pt-1 md:text-6xl font-prata tracking-tight text-white mt-1">
                Thumbnail{" "}
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-light">
                  Archive
                </span>
              </h1>
            </div>
            <p className="text-zinc-500 max-w-sm text-sm md:text-base leading-relaxed">
              A complete collection of visual designs, high-click thumbnails,
              and digital assets engineered for creator growth.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {allProjects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col bg-zinc-950/60 border border-zinc-900 rounded-2xl sm:rounded-3xl p-0 sm:p-5 hover:border-orange-500/30 transition-all duration-500 group cursor-pointer shadow-xl overflow-hidden"
              >
                <div className="w-full aspect-video bg-zinc-900/40 sm:rounded-2xl overflow-hidden sm:border border-zinc-900 relative flex items-center justify-center sm:mb-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 sm:p-0 flex flex-col flex-1 justify-between">
                  <div>
                    <p className="text-zinc-500 text-[9px] sm:text-[11px] tracking-wider uppercase mb-0.5 sm:mb-1 truncate">
                      {project.category}
                    </p>
                    <h3 className="text-xs sm:text-lg md:text-xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
