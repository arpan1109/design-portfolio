import { useState } from "react";

export default function Navbar() {
  const [menuopen, setmenuopen] = useState(false);

  const handleToggle = () => {
    setmenuopen(prev => !prev);
  };

  return (
    <>
      <nav className="absolute bg-zinc-600/40 top-0 w-full z-50 flex justify-between items-center py-8 px-6 md:px-12">
        {/* Logo */}
        <div className="text-sm lg:text-2xl text-white/90 tracking-widest uppercase">
          Dev creates
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-3 text-sm tracking-[0.2em] uppercase text-zinc-400">
          {["Work", "About", "Services", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-white border-2 p-2 rounded-md border-white/20 hover:bg-white/20 cursor-pointer transition-colors duration-300"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-sm tracking-widest uppercase hover:text-zinc-300"
          onClick={handleToggle}
        >
          {menuopen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuopen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-zinc-800/95 backdrop-blur-md text-white flex flex-col items-center gap-6 py-6 tracking-widest uppercase text-sm z-40">
          {["Work", "About", "Services", "Contact"].map((item) => (
            <p
              key={item}
              className="hover:text-zinc-300 cursor-pointer"
              onClick={() => setmenuopen(false)} 
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </>
  );
}