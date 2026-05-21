import React from "react";

export default function Marquee() {
  const row1 = [
    "/images/doomsday.webp",
    "/images/charles.jpg",
    "/images/cleo-abram.png",
    "/images/altman.png",
    "/images/gta-car.webp",
    "/images/burger.webp",
    "/images/brain.webp",
    "/images/trump-target.png",
  ];
  
  const row2 = [
    "/images/olag-remake.jpeg",
    "/images/remake.jpg",
    "/images/ai-compare.webp",
    "/images/millionare.webp",
    "/images/gta-car.webp",
    "/images/online-earning.png",
    "/images/elon-evolution.png",
    "/images/hiest-thumbnail.png",
    "/images/gta-fails.webp",
    "/images/golden-island.webp",
  ];
  
  const row3 = [
    "/images/golden-product.png",
    "/images/remake2.png",
    "/images/Hitler-downfall-thumbnail.png",
    "/images/hotel-compare.webp",
    "/images/paisa.webp",
    "/images/gemini.webp",
    "/images/thumb-importance.webp",
  ];

  return (
    <section className="bg-[#030303] py-16 overflow-hidden flex flex-col gap-4 md:gap-6">
      
      {/* ================= ROW 1: MOVING LEFT ================= */}
      <div className="relative w-full flex overflow-x-hidden pointer-events-none">
        <div className="flex gap-4 md:gap-6 animate-marquee whitespace-nowrap will-change-transform">
          {row1.concat(row1).map((src, index) => (
            <div
              key={index}
              /* Cleaned up to match standard numeric scaling across all layers */
              className="w-65 sm:w-90 md:w-105 aspect-video bg-zinc-950 border border-zinc-900/60 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex-shrink-0"
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
              className="w-65 sm:w-90 md:w-105 aspect-video bg-zinc-950 border border-zinc-900/60 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex-shrink-0"
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

      {/* ================= ROW 3: MOVING LEFT ================= */}
      <div className="relative w-full flex overflow-x-hidden pointer-events-none">
        <div className="flex gap-4 md:gap-6 animate-marquee whitespace-nowrap will-change-transform">
          {row3.concat(row3).map((src, index) => (
            <div
              key={index}
              className="w-65 sm:w-90 md:w-105 aspect-video bg-zinc-950 border border-zinc-900/60 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex-shrink-0"
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