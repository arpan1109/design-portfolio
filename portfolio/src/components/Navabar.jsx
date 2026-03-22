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
        bg-zinc-700/70 backdrop-blur-md border-b border-white/40 
        shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
      >
        {/* Logo */}
        <div className="text-sm lg:text-2xl text-white/90 tracking-wide uppercase">
          Dev creates
        </div>

        {/* Desktop Links - Hrefs preserved exactly as you wrote them */}
        <div className="hidden md:flex items-center gap-8 font-onest text-sm tracking-widest text-zinc-400">
          <a href="#home" className="hover:text-white transition-colors cursor-pointer uppercase">
            Home
          </a>
          <a href="#about" className="hover:text-white transition-colors cursor-pointer uppercase">
            About
          </a>
          <a href="#work" className="hover:text-white transition-colors cursor-pointer uppercase">
            Services
          </a>
          <a
            href="#contact"
            className="px-5 py-2 border border-zinc-800 rounded-full text-white hover:bg-white/80 hover:text-black transition-all cursor-pointer uppercase"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-sm tracking-widest uppercase hover:text-zinc-300 cursor-pointer"
          onClick={handleToggle}
        >
          {menuopen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuopen && (
        <div className="md:hidden fixed inset-0 top-18 bg-zinc-800/95 backdrop-blur-md text-white flex flex-col items-center justify-center gap-10 tracking-[0.3em] uppercase text-lg z-40 animate-fadeIn">
          <a href="#home" onClick={closeMenu} className="hover:text-zinc-400">Home</a>
          <a href="#about" onClick={closeMenu} className="hover:text-zinc-400">About</a>
          <a href="#work" onClick={closeMenu} className="hover:text-zinc-400">Services</a>
          <a href="#contact" onClick={closeMenu} className="hover:text-zinc-400  hover:bg-gray-500 border border-zinc-700 px-8 py-3 rounded-full">
            Contact
          </a>
        </div>
      )}
    </>
  );
}