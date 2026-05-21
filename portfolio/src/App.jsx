// THE FIX: Add "as Router" right here in the brackets
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navabar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
// import Mar from "./components/About.jsx";

import Footer from "./components/Footer.jsx";
import Works from "./components/Works.jsx";
import Marquee from "./components/Marquee.jsx";

export default function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen selection:bg-orange-500 selection:text-black">
        <Navbar />
        
        <Routes>
          <Route 
            path="/" 
            element = {
              <>
                <Hero />
                <Marquee/>
                <About />
                <Footer />
              </>
            } 
          />
          <Route path="/works" element={<Works />} />
        </Routes>
      </div>
    </Router>
  );
}