export default function Hero() {
  return (
    <section id="home" className="relative h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center overflow-hidden">

      {/* Massive Typography - NOW USING PRATA */}
      <div className="text-center z-10 px-4">
        <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-prata leading-none tracking-tight">
          VISUAL
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-[11rem] font-prata italic leading-none text-zinc-500 pr-4 md:pr-12">
          NARRATIVES.
        </h1>
      </div>

      {/* Bottom Explore Button & Scroll Line */}
      <div className="absolute bottom-1 flex flex-col items-center gap-6">
        <button className="border border-zinc-600 rounded-sm font-onest font-bold hover:border-white hover:bg-white/30 transition-all duration-300 px-8 py-3 text-xs tracking-[0.2em] uppercase">
        <a href="#work">
          Explore Work
        </a>
        </button>
        
        {/* Fading Scroll Line */}
        <div className="w-px h-18 bg-linear-to-b from-zinc-500 to-transparent"></div>
      </div>
    </section>
  );
}