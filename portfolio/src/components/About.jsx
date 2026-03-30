export default function About() {
  const processes = [
    {
      id: "01",
      title: "Discovery",
      desc: "Share your ideas to reach audience & core objectives.",
    },
    {
      id: "02",
      title: "Concept",
      desc: "Crafting initial visual directions and design boards.",
    },
    {
      id: "03",
      title: "Refinement",
      desc: "Polishing the chosen design with precision.",
    },
    {
      id: "04",
      title: "Delivery",
      desc: "Get production-ready assets within guidelines.",
    },
  ];

  const problems = [
    {
      title: "Your content isn't getting noticed",
      image: "/images/vid-frame.png", 
      desc: "Strong ideas can still be skipped when the thumbnail or post design does not instantly grab attention.",
    },
    {
      title: "Your brand feels stuck",
      image: "/images/chain.png", // Your new asset
      desc: "When visuals look random or inconsistent, it becomes harder to build a clear and memorable identity online.",
    },
    {
      title: "Your audience isn't connecting",
      image: "/images/eye.png", // Your new asset
      desc: "People notice visuals first. Better design helps your content feel more professional, clearer, and more worth exploring.",
    },
  ];
  const reasons = [
    {
      title: "Unique Identity",
      image: "/images/sparkles.png",
      color: "bg-orange-950 text-orange-400 border-orange-800",
      desc: "I will help you in making your unique identity through visuals that feel different and recognizable.",
    },
    {
      title: "Clean Editing",
      image: "/images/edit.png",
      color: "bg-rose-950 text-rose-400 border-rose-800",
      desc: "Sharp cutouts, dramatic lighting, smart composition, and polished Photoshop work from start to finish.",
    },
    {
      title: "Niche Understanding",
      image: "/images/target.png",
      color: "bg-pink-950 text-pink-400 border-pink-800",
      desc: "I can design for gaming, investigation, finance, documentary, and entertainment content styles.",
    },
    {
      title: "Fast Revisions",
      image: "/images/time.png",
      color: "bg-fuchsia-950 text-fuchsia-400 border-fuchsia-800",
      desc: "Quick updates, better clarity, and a clean final result that fits the channel vibe and visual style.",
    },
  ];

  return (
    <>
      <section id="about" className="py-20 md:py-32 bg-[#0a0a0a] text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Editorial Profile Image */}
          <div className="lg:col-span-5 max-w-md mx-auto lg:max-w-none relative group">
            {/* Aspect-[4/5] creates that tall, portrait-style crop */}
            <div className="aspect-4/5 w-full bg-zinc-900 overflow-hidden relative z-10 rounded-2xl md:rounded-3xl">
              {/* NOTE: Drop your photo into public/images/ and update this src */}
              <img
                src="/images/profile.webp"
                alt="Dev Creates"
                className="w-full h-full rounded-4xl object-cover transition-all duration-700"
              />
            </div>
            {/* Decorative offset border for depth */}
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 border border-zinc-800 z-0 hidden md:block"></div>
          </div>

          {/* Right Column: Bio & Process */}
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="text-5xl md:text-6xl font-prata mb-8 leading-tight">
              Hi, Dev this side !
            </h2>

            <p className="text-zinc-400  text-lg md:text-2xl leading-relaxed mb-16 max-w-2xl">
              I am an independent graphic designer specializing in crafting
              bold, minimalist brand identities and visual systems. My focus is
              on helping businesses communicate their core values without the
              unnecessary noise.
            </p>

            {/* Workflow Process Grid */}
            <div>
              <h3 className="text-xl md:text-4xl font-onest font-bold uppercase text-zinc-500 mb-8 border-b border-zinc-800 pb-4">
                The Process
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-10">
                {processes.map((event) => (
                  <div key={event.id} className="flex flex-col gap-3">
                    <span className="font-prata text-3xl text-zinc-500">
                      {event.id}
                    </span>
                    <h4 className="text-lg font-bold text-white tracking-wide">
                      {event.title}
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="md:py-2 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-6 font-onest">
          {/* --- SECTION 1: THE PROBLEM --- */}
          <div className="mb-24">
            <div className="mb-16">
              <h2 className="text-4xl font-prata md:text-5xl hover:text-gray-400 tracking-tight mb-4 text-white">
                The Problem
              </h2>
              <p className="text-zinc-400  md:text-xl leading-relaxed">
                Good content still gets ignored when the visuals feel weak,
                generic, or forgettable.
              </p>
            </div>

            {/* 3-Column Grid for Problems */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problems.map((item, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex items-center justify-center flex-col gap-6 group hover:border-zinc-700 transition-colors"
                >
                  {/* Placeholder for Icon/Image - matching reference style */}
                  <div className="w-[70%] flex items-center justify-center h-40 bg-zinc-800 rounded-xl overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[90%] h-[90%] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    {/* Subtle dark overlay to keep the vibe moody */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xl font-bold tracking-tight text-white">
                      {item.title}
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- SECTION 2: WHY WORK WITH ME --- */}
          <div>
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-prata  tracking-tight mb-4 text-white">
                Why Choose Me
              </h2>
              <p className="text-zinc-400 text-md leading-relaxed">
                I focus on visuals that feel clean, memorable, and made to
                represent your style in a strong way.
              </p>
            </div>

            {/* 4-Column Grid for Reasons */}
            <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-6">
              {reasons.map((item, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-5 hover:border-zinc-700 transition-colors"
                >
                  {/* Colored Icon box matching reference */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${item.color} border`}
                  >
                    {item.image}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-bold tracking-tight text-white">
                      {item.title}
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
