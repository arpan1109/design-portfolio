// export default function About() {
//   const steps = [
//     {
//       title: "Concept Development & Strategic Planning",
//       desc: " We start by understanding your video's topic, audience, and goal. This helps us create a powerful visual concept that grabs attention instantly.",
//       image: "/images/chat.png",
//     },
//     {
//       title: "Initial Sketching & Draft Design",
//       desc: "Next, we craft rough ideas, layouts, and compositions to test what works best balancing emotion, clarity, and click-worthiness.",
//       image: "/images/ideation.png",
//     },
//     {
//       title: "Final Polished Thumbnail Creation",
//       desc: "Once approved, we refine everything, lighting, color grading, typography, and details to deliver a high-performing, ready to upload thumbnail.",
//       image: "/images/creationpro.png",
//     },
//   ];

//   const problems = [
//     {
//       title: "Your content isn't getting noticed",
//       image: "/images/vid-frame.png",
//       desc: "Strong ideas can still be skipped when the thumbnail or post design does not instantly grab attention.",
//     },
//     {
//       title: "Your brand feels stuck",
//       image: "/images/chain.png", // Your new asset
//       desc: "When visuals look random or inconsistent, it becomes harder to build a clear and memorable identity online.",
//     },
//     {
//       title: "Your audience isn't connecting",
//       image: "/images/eye.png", // Your new asset
//       desc: "People notice visuals first. Better design helps your content feel more professional, clearer, and more worth exploring.",
//     },
//   ];
//   const reasons = [
//     {
//       title: "Unique Identity",
//       image: "/images/sparkles.png",
//       color: "bg-orange-950 text-orange-400 border-orange-800",
//       desc: "I will help you in making your unique identity through visuals that feel different and recognizable.",
//     },
//     {
//       title: "Clean Editing",
//       image: "/images/edit.png",
//       color: "bg-rose-950 text-rose-400 border-rose-800",
//       desc: "Sharp cutouts, dramatic lighting, smart composition, and polished Photoshop work from start to finish.",
//     },
//     {
//       title: "Niche Understanding",
//       image: "/images/target.png",
//       color: "bg-pink-950 text-pink-400 border-pink-800",
//       desc: "I can design for gaming, investigation, finance, documentary, and entertainment content styles.",
//     },
//     {
//       title: "Fast Revisions",
//       image: "/images/time.png",
//       color: "bg-fuchsia-950 text-fuchsia-400 border-fuchsia-800",
//       desc: "Quick updates, better clarity, and a clean final result that fits the channel vibe and visual style.",
//     },
//   ];

//   return (
//     <>
//       {/* Keeping id="about" so your navbar link scrolls directly here */}
//       <section
//         id="about"
//         className="py-10 md:py-15 bg-black text-white border-t border-zinc-950 scroll-mt-24"
//       >
//         <div className="max-w-7xl mx-auto px-6 font-onest">
//           <div className="flex flex-col items-center text-center mb-16 md:mb-24">
//             <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-zinc-950 border border-zinc-900 text-xs tracking-wider uppercase text-orange-500 mb-6 font-medium">
//               ↓ Process
//             </div>
//             <h2 className="text-4xl md:text-6xl font-prata tracking-tight max-w-5xl leading-tight">
//               Our Thumbnail Design process in <br />
//               <span className="text-orange-500 italic">3 Simple Steps</span>
//             </h2>

//             <p className="text-zinc-300 text-md md:text-lg max-w-lg md:max-w-2xl mt-6 leading-relaxed">
//               From idea to impact, every thumbnail crafted with purpose,
//               precision, and performance in mind.
//             </p>
//           </div>

//           {/* 3-Column Centered Layout */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {steps.map((step, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col bg-zinc-950/40 border border-zinc-900/60 rounded-3xl p-6 md:p-8 hover:border-orange-500/20 transition-all duration-500 group shadow-2xl"
//               >
//                 {/* Step Text Information */}
//                 <div className="flex flex-col items-center text-center flex-1 mb-8">
//                   <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-snug mb-4 max-w-70">
//                     {step.title}
//                   </h3>

//                   {/* Subtle horizontal division line */}
//                   <div className="w-full border-t border-zinc-900 my-1"></div>

//                   <p className="text-gray-400 text-xs md:text-sm leading-relaxed mt-3">
//                     {step.desc}
//                   </p>
//                 </div>

//                 {/* Card Canvas for Artwork */}
//                 <div className="w-full aspect-square bg-zinc-950 rounded-2xl border border-zinc-900 overflow-hidden relative flex items-center justify-center p-4">
//                   <img
//                     src={step.image}
//                     alt={step.title}
//                     className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="services" className="md:py-2 bg-[#0a0a0a] text-white">
//         <div className="max-w-7xl mx-auto px-6 font-onest">
//           {/* --- SECTION 1: THE PROBLEM --- */}
//           <div className="mb-24">
//             <div className="mb-16">
//               <h2 className="text-4xl font-prata md:text-5xl hover:text-gray-400 tracking-tight mb-4 text-white">
//                 The{" "}
//                 <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-light py-2">
//                   Process
//                 </span>
//               </h2>

//               <p className="text-zinc-400  md:text-xl leading-relaxed">
//                 Good content still gets ignored when the visuals feel weak,
//                 generic, or forgettable.
//               </p>
//             </div>

//             {/* 3-Column Grid for Problems */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {problems.map((item, index) => (
//                 <div
//                   key={index}
//                   className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex items-center justify-center flex-col gap-6 group hover:border-zinc-700 transition-colors"
//                 >
//                   {/* Placeholder for Icon/Image - matching reference style */}
//                   <div className="w-[70%] flex items-center justify-center h-40 bg-zinc-800 rounded-xl overflow-hidden relative">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-[90%] h-[90%] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
//                     />
//                     {/* Subtle dark overlay to keep the vibe moody */}
//                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
//                   </div>

//                   <div className="space-y-3">
//                     <h4 className="text-xl font-bold tracking-tight text-white">
//                       {item.title}
//                     </h4>
//                     <p className="text-zinc-400 text-sm leading-relaxed">
//                       {item.desc}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* --- SECTION 2: WHY WORK WITH ME --- */}
//           <div>
//             <div className="mb-16">
//               <h2 className="text-3xl md:text-5xl font-prata  tracking-tight mb-4 text-white">
//                 Why Choose Me
//               </h2>
//               <p className="text-zinc-400 text-md leading-relaxed">
//                 I focus on visuals that feel clean, memorable, and made to
//                 represent your style in a strong way.
//               </p>
//             </div>

//             {/* 4-Column Grid for Reasons */}
//             {/* --- SECTION 2: WHY CHOOSE ME --- */}
//             <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-6">
//               {reasons.map((item, index) => (
//                 <div
//                   key={index}
//                   className="bg-black border border-zinc-800 rounded-2xl p-6 flex flex-col gap-5 hover:border-zinc-700 transition-all duration-300 group"
//                 >
//                   <div className="w-14 h-14 flex items-center justify-center overflow-hidden">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       /* 'w-full h-full' makes your custom icon/bg fill the whole 14x14 space */
//                       className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <h4 className="text-lg font-bold tracking-tight text-white">
//                       {item.title}
//                     </h4>
//                     <p className="text-zinc-400 text-sm leading-relaxed">
//                       {item.desc}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import React from "react";

export default function About() {
  const steps = [
    {
      title: "Concept Development & Strategic Planning",
      desc: "We start by understanding your video's topic, audience, and goal. This helps us create a powerful visual concept that grabs attention instantly.",
      image: "/images/chat.png",
    },
    {
      title: "Initial Sketching & Draft Design",
      desc: "Next, we craft rough ideas, layouts, and compositions to test what works best balancing emotion, clarity, and click-worthiness.",
      image: "/images/ideation.png",
    },
    {
      title: "Final Polished Thumbnail Creation",
      desc: "Once approved, we refine everything, lighting, color grading, typography, and details to deliver a high-performing, ready to upload thumbnail.",
      image: "/images/creation.png",
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
      image: "/images/chain.png",
      desc: "When visuals look random or inconsistent, it becomes harder to build a clear and memorable identity online.",
    },
    {
      title: "Your audience isn't connecting",
      image: "/images/eye.png",
      desc: "People notice visuals first. Better design helps your content feel more professional, clearer, and more worth exploring.",
    },
  ];

  const reasons = [
    {
      title: "Unique Identity",
      image: "/images/sparkles.png",
      desc: "I will help you in making your unique identity through visuals that feel different and recognizable.",
    },
    {
      title: "Clean Editing",
      image: "/images/edit.png",
      desc: "Sharp cutouts, dramatic lighting, smart composition, and polished Photoshop work from start to finish.",
    },
    {
      title: "Niche Understanding",
      image: "/images/target.png",
      desc: "I can design for gaming, investigation, finance, documentary, and entertainment content styles.",
    },
    {
      title: "Fast Revisions",
      image: "/images/time.png",
      desc: "Quick updates, better clarity, and a clean final result that fits the channel vibe and visual style.",
    },
  ];

  return (
    <>
      <section
        id="about"
        className="py-16 md:py-24 bg-black text-white border-t border-zinc-950 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-6 font-onest">
          {/* Centered Pill & Header Block */}
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-zinc-950 border border-zinc-900 text-xs tracking-wider uppercase text-orange-500 mb-6 font-medium">
              ↓ Process
            </div>
            <h2 className="text-4xl md:text-6xl font-prata tracking-tight max-w-5xl leading-tight">
              Our Thumbnail Design process in <br />
              <span className="text-orange-500 italic">3 Simple Steps</span>
            </h2>

            <p className="text-zinc-400 text-sm md:text-lg max-w-lg md:max-w-2xl mt-6 leading-relaxed font-light">
              From idea to impact, every thumbnail crafted with purpose,
              precision, and performance in mind.
            </p>
          </div>

          {/* Flexible Mobile Row / Fixed Desktop Grid Wrapper */}
          <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scrollbar-none pb-6 -mx-6 px-6 md:mx-0 md:px-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col min-w-[85vw] md:min-w-0 bg-zinc-950/40 border border-zinc-900/60 rounded-3xl p-6 md:p-8 hover:border-orange-500/20 transition-all duration-500 group shadow-2xl snap-center"
              >
                {/* Step Text Information */}
                <div className="flex flex-col items-center text-center flex-1 mb-8">
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-snug mb-4 max-w-70">
                    {step.title}
                  </h3>

                  {/* Subtle horizontal division line */}
                  <div className="w-full border-t border-zinc-900 my-1"></div>

                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mt-3 font-light">
                    {step.desc}
                  </p>
                </div>

                {/* Card Canvas for Artwork */}
                <div className="w-full aspect-square bg-zinc-950 rounded-2xl border border-zinc-900 overflow-hidden relative flex items-center justify-center p-4">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="services" className="py-16 md:py-24 bg-black border-t border-zinc-950 text-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 font-onest">
          
          {/* --- THE PROBLEM --- */}
          <div className="mb-24">
            <div className="mb-16">
              <h2 className="text-4xl font-prata md:text-5xl tracking-tight mb-4 text-white">
                The{" "}
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-light py-2">
                  Problem
                </span>
              </h2>

              <p className="text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed">
                Good content still gets ignored when the visuals feel weak,
                generic, or forgettable.
              </p>
            </div>

            {/* 3-Column Grid for Problems */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problems.map((item, index) => (
                <div
                  key={index}
                  className="bg-zinc-950/40 border border-zinc-900/60 rounded-3xl p-8 flex items-center justify-center flex-col gap-6 group hover:border-zinc-800 transition-colors shadow-xl"
                >
                  <div className="w-[85%] flex items-center justify-center h-40 bg-zinc-950 border border-zinc-900/40 rounded-xl overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[90%] h-[90%] object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  </div>

                  <div className="space-y-3 text-center">
                    <h4 className="text-xl font-bold tracking-tight text-white">
                      {item.title}
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- WHY CHOOSE ME --- */}
          <div>
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-prata tracking-tight mb-4 text-white">
                Why <span className="text-orange-500">Choose Me</span>
              </h2>
              <p className="text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed">
                I focus on visuals that feel clean, memorable, and made to
                represent your style in a strong way.
              </p>
            </div>

            {/* 4-Column Grid for Reasons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {reasons.map((item, index) => (
                <div
                  key={index}
                  className="bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 flex flex-col gap-5 hover:border-orange-500/20 transition-all duration-300 group shadow-lg"
                >
                  {/* Clean Icon Wrapper */}
                  <div className="w-14 h-14 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-bold tracking-tight text-white group-hover:text-orange-500 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light">
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