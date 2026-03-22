import React, { useState } from 'react';

export default function Carousel() {
  // --- CAROUSEL DATA ---
  // Replace the 'image' paths once you have them in public/images/
  // Replace placeholders with 'src="/images/your-design.webp"' later.
  const projects = [
    { id: 1, title: 'Aura Skincare', category: 'Brand Identity', image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1600&h=900&auto=format&fit=crop' },
    { id: 2, title: 'Vanguard Typeface', category: 'Typography', image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1600&h=900&auto=format&fit=crop' },
    { id: 3, title: 'Studio X - Rebrand', category: 'Creative Direction', image: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1600&h=900&auto=format&fit=crop' },
  ];

  // --- CAROUSEL SLIDER STATE ---
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  // --- MODAL STATE ---
  const [selectedImage, setSelectedImage] = useState(null);

  // Helper function to open the modal
  const openModal = (image) => {
    setSelectedImage(image);
    // Optional: Stop the page from scrolling while modal is open
    document.body.style.overflow = 'hidden';
  };

  // Helper function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
    // Optional: Restore page scrolling
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 font-onest">
        
        {/* Simplified Header - Controls are removed from here */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-prata mb-4">Selected Works</h2>
          <p className="text-zinc-400 max-w-md">
            A curated look at my most recent design systems and visual identities.
          </p>
        </div>

        {/* --- CAROUSEL VIEWPORT (Relative Container for controls) --- */}
        <div className="group relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl">
          
          {/* 1. THE MOVING TRACK */}
          <div 
            className="flex w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project) => (
              <div key={project.id} className="w-full h-full shrink-0 relative group/slide">
                
                {/* --- The Image / Clickable Modal Trigger --- */}
                <div 
                  onClick={() => openModal(project.image)}
                  className="w-full h-full cursor-zoom-in relative overflow-hidden"
                >
                  {/* NOTE: Using temporary Unsplash images for testing, swap to <img /> later */}
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover/slide:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  {/* Subtle hover overlay hint */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/slide:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-sm tracking-widest uppercase bg-black/70 px-6 py-3 rounded-full border border-zinc-700">
                      View full screen
                    </span>
                  </div>
                </div>
                
                {/* Text Overlay (Bottom Left) */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none">
                  <p className="text-zinc-300 text-xs md:text-sm tracking-[0.3em] uppercase mb-3">
                    {project.category}
                  </p>
                  <h3 className="text-3xl md:text-5xl font-prata">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* 2. OVERLAY CONTROLS (MIDDLE OF IMAGE) */}
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black/40 border border-zinc-700 text-white flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all cursor-pointer opacity-0 group-hover:opacity-100 z-10"
          >
            ←
          </button>
          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black/40 border border-zinc-700 text-white flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all cursor-pointer opacity-0 group-hover:opacity-100 z-10"
          >
            →
          </button>
        </div>

        {/* Progress Indicators (Optional but nice UX) */}
        <div className="flex justify-center gap-3 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
                currentIndex === index ? 'w-16 bg-white' : 'w-6 bg-zinc-800 hover:bg-zinc-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 animate-fadeIn"
          onClick={closeModal} // Click backdrop to close
        >
          {/* Close Button (Top Right) */}
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-red-500 text-4xl font-light cursor-pointer transition-colors"
          >
            ✕
          </button>
          
          {/* Prevent clicks on the image from closing the modal */}
          <div 
            className="relative max-w-full max-h-full rounded-2xl overflow-hidden shadow-2xl border border-zinc-800"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* NOTE: Swap to <img src={selectedImage} /> later */}
            <div 
              className="w-[90vw] aspect-video bg-cover bg-center rounded-2xl"
              style={{ backgroundImage: `url(${selectedImage})` }}
            />
          </div>
        </div>
      )}
    </section>
  );
}