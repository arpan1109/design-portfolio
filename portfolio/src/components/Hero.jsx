export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[50vh] bg-black text-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Massive Typography - NOW USING PRATA */}
      <div className="text-center z-10 px-4">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-prata leading-none tracking-tight">
          Crafting
        </h1>
        <h1 className="text-4xl md:text-3xl lg:text-4xl font-prata italic leading-none text-zinc-500 pr-4 md:pr-12">
          Instant clicks
        </h1>
        <p className="text-3xl md:text-2xl lg:text-2xl font-onest  leading-none text-white pr-4 md:pr-12">
          Elevate your content with strategic designs built to dominate the
          feed.
        </p>
      </div>

      {/* Bottom Explore Button & Scroll Line */}
      <div className="absolute bottom-1 flex flex-row items-center gap-6">
        <button className="border border-zinc-600 rounded-sm font-onest font-bold hover:border-white hover:bg-white/30 transition-all duration-300 px-8 py-3 text-xs tracking-[0.2em] uppercase">
          <a href="#work">Get Started</a>
        </button>
        <button className="border border-zinc-600 rounded-sm font-onest font-bold hover:border-white hover:bg-white/30 transition-all duration-300 px-8 py-3 text-xs tracking-[0.2em] uppercase">
          <a href="#work">Explore Work</a>
        </button>

        {/* Fading Scroll Line */}
      </div>
      <div className="w-px h-18 bg-linear-to-b from-zinc-500 to-transparent"></div>
    </section>
  );
}
