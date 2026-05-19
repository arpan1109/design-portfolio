import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#030303] text-white flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Ambient Radial Glow (Matches the inspiration site's vibe) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center z-10 px-6 flex flex-col items-center justify-center flex-1">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs tracking-wider uppercase text-zinc-400 mb-8 font-onest">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Available Now
        </div>

        {/* Massive Connected Typography */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-prata tracking-tight text-white mb-2 leading-[1.1]">
          Crafting
        </h1>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-prata tracking-tight leading-[1.1] mb-6">
          Instant{" "}
          <span
            className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent italic font-light"
          >
            Clicks.
          </span>
        </h1>

        {/* Description - Increased line-height with leading-relaxed */}
        <p className="text-base md:text-lg lg:text-xl font-onest text-zinc-400 max-w-xl mx-auto leading-relaxed mb-10">
          My work isn't just good-looking—it's about making visuals that pull
          people in and get real engagement.
        </p>

        {/* Dynamic Action Buttons */}
        <div className="flex flex-row sm:flex-row items-center justify-center gap-4 w-full sm:w-auto font-onest">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-orange-600 hover:bg-yellow-700 text-white font-semibold rounded-full px-8 py-4 text-sm transition-all duration-300 shadow-lg shadow-indigo-600/20 text-center"
          >
            Get Started
          </a>
          <a
            href="#work"
            className="w-full sm:w-auto bg-zinc-500/50 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-400 text-zinc-300 hover:text-white rounded-full px-8 py-4 text-sm transition-all duration-300 text-center"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
