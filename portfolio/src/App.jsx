// THE FIX: Add "as Router" right here in the brackets
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navabar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
// import Carousel from "./components/Carousel.jsx";
import Footer from "./components/Footer.jsx";
import Works from "./components/Works.jsx";

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
                {/* <Carousel /> */}
                <About />
                <Footer />
              </>
            } 
          />
          <Route path="/work" element={<Works />} />
        </Routes>
      </div>
    </Router>
  );
}