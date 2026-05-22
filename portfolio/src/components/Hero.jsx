import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      /* THE FIX: Swapped min-h-screen for crisp, intentional padding heights */
      className="relative bg-[#030303] text-white flex flex-col items-center justify-center pt-40 pb-24 overflow-hidden"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center z-10 px-6 flex flex-col items-center justify-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-950 border border-zinc-900 text-xs tracking-wider uppercase text-zinc-400 mb-8 font-onest shadow-xl">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Available Now
        </div>

        {/* Massive Connected Typography */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-prata tracking-tight text-white mb-2 leading-[1.1]">
          Crafting
        </h1>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-prata tracking-tight leading-[1.1] mb-8">
          Instant{" "}
          <span className="bg-gradient-to-r from-amber-200 via-orange-500 to-red-500 bg-clip-text text-transparent italic font-light">
            Clicks.
          </span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg lg:text-xl font-onest text-zinc-400 max-w-xl mx-auto leading-relaxed mb-10">
          My work isn't just good-looking—it's about making visuals that pull
          people in and get real engagement.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto font-onest tracking-wider uppercase text-xs">
          
          {/* Primary Button */}
          <a
            href="#contact"
            className="w-full sm:w-auto bg-orange-400/70 font-extrabold text-black  px-8 py-4 rounded-full hover:bg-orange-600 transition-all duration-300 text-center cursor-pointer shadow-lg shadow-orange-500/10"
          >
            Get Started
          </a>
          
          {/* Secondary Button */}
          <a
            href="/works"
            className="w-full sm:w-auto bg-zinc-950 border border-zinc-900 text-orange-500 font-medium px-8 py-4 rounded-full hover:bg-zinc-700/60 hover:text-ornag-400 hover:border-orange-500 transition-all duration-300 text-center cursor-pointer"
          >
            View Portfolio
          </a>

        </div>
      </div>
    </section>
  );
}