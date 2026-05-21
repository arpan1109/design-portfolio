
// import React from 'react';
// import projects from '../data/projects.json';

// export default function Marquee() {
//   return (
//     <section className="py-8 bg-[#0a0a0a] text-white overflow-hidden border-b border-zinc-900">
      
//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col py-2 md:flex-row md:items-end justify-between gap-4 font-onest">
//         <h2 className="text-4xl md:text-5xl p-3 font-bold tracking-tight">
//           Moving <span className='bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-light'>Showcase</span>
//         </h2>
//         <p className="text-zinc-400 text-sm md:text-base max-w-sm leading-relaxed">
//           A quick look at my work across different styles and niches.
//         </p>
//       </div>

//       {/* The Wrapper */}
//       <div className="relative flex overflow-hidden group select-none">
        
//         {/* We use [...projects, ...projects] to double the list.
//             This creates a single long line that never 'runs out' of images.
//         */}
//         <div className="flex flex-nowrap gap-8 animate-marquee group-hover:[animation-play-state:paused]">
          
//           {[...projects, ...projects].map((project, index) => (
//             <div 
//               key={`${project.id}-${index}`} 
//               /* 'flex-none' is CRITICAL. It stops the browser from squishing the images.
//                  'w-[28rem]' ensures they stay at the thumbnail size you want.
//               */
//               className="flex-none w-72 h-40 md:w-md md:h-64 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 transition-all duration-500 hover:scale-95 cursor-pointer relative group/item"
//             >
//               <img 
//                 src={project.image} 
//                 alt={project.title} 
//                 className="w-full h-full object-cover opacity-80 group-hover/item:opacity-100 transition-opacity"
//                 loading="lazy"
//               />
              
//               {/* Title Overlay */}
//               <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity flex items-end p-6">
//                 <div className="transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300">
//                   <p className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 mb-1 font-onest">
//                     {project.category}
//                   </p>
//                   <span className="text-sm tracking-widest uppercase font-bold font-onest">
//                     {project.title}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
          
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";

export default function Marquee() {
  // Array of your thumbnail assets to feed into the loops
  const row1 = [
    "/images/doomsday.png",
    "/images/charles.png",
    "/images/cleo-abram.png",
    "/images/altman.png",
    "/images/gta-car.webp",
    "/images/burger.webp",
    "/images/brain.webp",
    "/images/trump-target.png",
    "/images/golden-product.png",
    "/images/remake2.png",
    "/images/Hitler-downfall-thumbnail.png",
    "/images/hotel-compare.webp",
    "/images/paisa.webp",
  ];

  const row2 = [
    "/images/olag-remake.jpeg",
    "/images/remake.jpg",
    "/images/ai-compare.webp",
    "/images/millionare.webp",
    "/images/online-earning.png",
    "/images/elon-evolution.png",
    "/images/hiest-thumbnail.png",
    "/images/gemini.webp",
    "/images/thumb-importance.webp",
    "/images/gta-fails.webp",
    "/images/golden-island.webp",
    "/images/doomsday.png",
  ];

  return (
    <section className="bg-[#030303] py-12 overflow-hidden flex flex-col gap-4 md:gap-6">
      
      {/* ================= ROW 1: MOVING LEFT ================= */}
      <div className="relative w-full flex overflow-x-hidden pointer-events-none">
        {/* We duplicate the map loop inside the row container to create a perfect, gapless infinite visual scroll */}
        <div className="flex gap-4 md:gap-6 animate-marquee whitespace-nowrap will-change-transform">
          {row1.concat(row1).map((src, index) => (
            <div 
              key={index} 
              className="w-[260px] sm:w-[360px] md:w-[420px] aspect-video bg-zinc-950 border border-zinc-900/60 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex-shrink-0"
            >
              <img 
                src={src} 
                alt="Showcase Thumbnail" 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ================= ROW 2: MOVING RIGHT (REVERSE) ================= */}
      <div className="relative w-full flex overflow-x-hidden pointer-events-none">
        <div className="flex gap-4 md:gap-6 animate-marquee-reverse whitespace-nowrap will-change-transform">
          {row2.concat(row2).map((src, index) => (
            <div 
              key={index} 
              className="w-[260px] sm:w-[360px] md:w-[420px] aspect-video bg-zinc-950 border border-zinc-900/60 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex-shrink-0"
            >
              <img 
                src={src} 
                alt="Showcase Thumbnail" 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}