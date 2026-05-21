import { useState } from "react";

export default function Navbar() {
  const [menuopen, setmenuopen] = useState(false);

  const handleToggle = () => {
    setmenuopen((prev) => !prev);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setmenuopen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 flex justify-between items-center py-6 px-6 md:px-12 
        bg-black/80 backdrop-blur-md border-b border-zinc-900 
        shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
      >
        {/* Logo */}
        <div className="text-sm lg:text-2xl text-white font-prata tracking-wide uppercase">
          Dev <span className="text-orange-500">creates</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-onest text-sm tracking-widest text-zinc-400">
          <a href="#home" className="hover:text-orange-500 transition-colors cursor-pointer uppercase">
            Home
          </a>
          <a href="#about" className="hover:text-orange-500 transition-colors cursor-pointer uppercase">
            About
          </a>
          <a href="#works" className="hover:text-orange-500 transition-colors cursor-pointer uppercase">
            Services
          </a>
          <a
            href="#contact"
            className="px-5 py-2 border border-orange-500/30 rounded-full text-orange-500 hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all cursor-pointer uppercase font-medium"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-sm tracking-widest uppercase hover:text-orange-500 cursor-pointer transition-colors"
          onClick={handleToggle}
        >
          {menuopen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuopen && (
        <div className="md:hidden fixed inset-0 top-[76px] bg-gray-800/95 backdrop-blur-md text-white flex flex-col items-center justify-center gap-10 tracking-[0.3em] uppercase text-lg z-40 animate-fadeIn">
          <a href="#home" onClick={closeMenu} className="hover:text-orange-500 transition-colors">Home</a>
          <a href="#about" onClick={closeMenu} className="hover:text-orange-500 transition-colors">About</a>
          <a href="#work" onClick={closeMenu} className="hover:text-orange-500 transition-colors">Services</a>
          <a 
            href="#contact" 
            onClick={closeMenu} 
            className="text-orange-500 border border-orange-500/40 hover:bg-orange-500 hover:text-black transition-all px-8 py-3 rounded-full"
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
}