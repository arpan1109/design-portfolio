export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[50vh] bg-black text-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Massive Typography - NOW USING PRATA */}
      <div className="text-center z-10 px-4 py-3">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-prata leading-none tracking-tight ">
          Crafting
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-prata italic leading-1 text-zinc-400 pr-4 md:pr-12">
          Instant clicks
        </h1>
        <p className="text-xl md:text-2xl lg:text-2xl font-onest  leading-none text-white pr-4 md:pr-12">
          Elevate your content with the designs built to dominate the feed.
        </p>
      </div>

      {/* Bottom Explore Button & Scroll Line */}
      <div className="absolute bottom-1 flex flex-row max-w-[20vw] items-center gap-4">
        <button className="border border-zinc-600 rounded-lg  font-onest font-bold hover:border-white hover:bg-white/30 transition-all duration-300 px-8 py-3 text-xs tracking-[0.2em] uppercase">
          <a href="#work">Get Started</a>
        </button>
        <button className="border border-zinc-600 rounded-lg  font-onest font-bold hover:border-white hover:bg-white/30 transition-all duration-300 px-8 py-3 text-xs tracking-[0.2em] uppercase">
          <a href="#work">Explore Work</a>
        </button>
      </div>
    </section>
  );
}
