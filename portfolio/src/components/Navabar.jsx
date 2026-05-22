// import { useState } from "react";

// export default function Navbar() {
//   const [menuopen, setmenuopen] = useState(false);

//   const handleToggle = () => {
//     setmenuopen((prev) => !prev);
//   };

//   // Function to close the menu when a link is clicked
//   const closeMenu = () => {
//     setmenuopen(false);
//   };

//   return (
//     <>
//       <nav
//         className="fixed top-0 w-full z-50 flex justify-between items-center py-6 px-6 md:px-12
//         bg-black/80 backdrop-blur-md border-b border-zinc-900
//         shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
//       >
//         {/* Logo */}
//         <div className="text-sm lg:text-2xl text-white font-prata tracking-wide uppercase">
//           Dev <span className="text-orange-500">creates</span>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center gap-8 font-onest text-sm tracking-widest text-zinc-400">
//           <a href="#home" className="hover:text-orange-500 transition-colors cursor-pointer uppercase">
//             Home
//           </a>
//           <a href="#about" className="hover:text-orange-500 transition-colors cursor-pointer uppercase">
//             About
//           </a>
//           <a href="#works" className="hover:text-orange-500 transition-colors cursor-pointer uppercase">
//             Services
//           </a>
//           <a
//             href="#contact"
//             className="px-5 py-2 border border-orange-500/30 rounded-full text-orange-500 hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all cursor-pointer uppercase font-medium"
//           >
//             Contact
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white text-sm tracking-widest uppercase hover:text-orange-500 cursor-pointer transition-colors"
//           onClick={handleToggle}
//         >
//           {menuopen ? "Close" : "Menu"}
//         </button>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       {menuopen && (
//         <div className="md:hidden fixed inset-0 top-[76px] bg-gray-800/95 backdrop-blur-md text-white flex flex-col items-center justify-center gap-10 tracking-[0.3em] uppercase text-lg z-40 animate-fadeIn">
//           <a href="#home" onClick={closeMenu} className="hover:text-orange-500 transition-colors">Home</a>
//           <a href="#about" onClick={closeMenu} className="hover:text-orange-500 transition-colors">About</a>
//           <a href="#work" onClick={closeMenu} className="hover:text-orange-500 transition-colors">Services</a>
//           <a
//             href="#contact"
//             onClick={closeMenu}
//             className="text-orange-500 border border-orange-500/40 hover:bg-orange-500 hover:text-black transition-all px-8 py-3 rounded-full"
//           >
//             Contact
//           </a>
//         </div>
//       )}
//     </>
//   );
// }

import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const [menuopen, setmenuopen] = useState(false);
  const location = useLocation(); // Tracks the active route path

  // THE FIX 1: If the user is on the /works page, return null to completely hide the navbar
  if (location.pathname === "/works") {
    return null;
  }

  const handleToggle = () => {
    setmenuopen((prev) => !prev);
  };

  const closeMenu = () => {
    setmenuopen(false);
  };

  // THE FIX 2: Helper function to determine link rendering behavior
  const renderNavLink = (id, label) => {
    // If we are already on the homepage, use standard hash scrolling anchors
    if (location.pathname === "/") {
      return (
        <a
          href={`#${id}`}
          className="hover:text-orange-500 transition-colors cursor-pointer uppercase"
        >
          {label}
        </a>
      );
    }
    // If we are on an external page (like /works), route back to homepage with the hash attached
    return (
      <Link
        to={`/#${id}`}
        className="hover:text-orange-500 transition-colors cursor-pointer uppercase"
      >
        {label}
      </Link>
    );
  };

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 flex justify-between items-center py-6 px-6 md:px-12 
        bg-black/80 backdrop-blur-md border-b border-zinc-900 
        shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
      >
        {/* Logo - Wrap in Link so clicking it always takes you to the absolute root home page */}
        <Link
          to="/"
          className="text-sm lg:text-2xl text-white font-prata tracking-wide uppercase cursor-pointer"
        >
          Dev <span className="text-orange-500">creates</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-onest text-sm tracking-widest text-zinc-400">
          {renderNavLink("home", "Home")}
          {renderNavLink("about", "About")}
          {renderNavLink("services", "Services")}

          {/* Contact Pill handles its own conditional routing logic */}
          {location.pathname === "/" ? (
            <a
              href="#contact"
              className="px-5 py-2 border border-orange-500/30 rounded-full text-orange-500 hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all cursor-pointer uppercase font-medium"
            >
              Contact
            </a>
          ) : (
            <Link
              to="/#contact"
              className="px-5 py-2 border border-orange-500/30 rounded-full text-orange-500 hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all cursor-pointer uppercase font-medium"
            >
              Contact
            </Link>
          )}
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
        <div className="md:hidden fixed inset-0 top-19 bg-black/95 backdrop-blur-md text-white flex flex-col items-center justify-center gap-6 tracking-[0.3em] uppercase text-lg z-40 animate-fadeIn delay-75 ease-in">
          {location.pathname === "/" ? (
            <>
              <a
                href="#home"
                onClick={closeMenu}
                className="hover:text-orange-500 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={closeMenu}
                className="hover:text-orange-500 transition-colors"
              >
                About
              </a>

              {/* THE FIX: Changed from <a> to <Link> to stop the hard page refresh */}
              <Link
                to="/works"
                onClick={closeMenu}
                className="hover:text-orange-500 transition-colors"
              >
                Services
              </Link>

              <a
                href="#contact"
                onClick={closeMenu}
                className="text-orange-500 border border-orange-500/40 hover:bg-orange-500 hover:text-black transition-all px-8 py-3 rounded-full"
              >
                Contact
              </a>
            </>
          ) : (
            <>
              <Link
                to="/#home"
                onClick={closeMenu}
                className="hover:text-orange-500 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/#about"
                onClick={closeMenu}
                className="hover:text-orange-500 transition-colors"
              >
                About
              </Link>
              <Link
                to="/works"
                onClick={closeMenu}
                className="hover:text-orange-500 transition-colors"
              >
                Services
              </Link>
              <Link
                to="/#contact"
                onClick={closeMenu}
                className="text-orange-500 border border-orange-500/40 hover:bg-orange-500 hover:text-black transition-all px-8 py-3 rounded-full"
              >
                Contact
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
}
