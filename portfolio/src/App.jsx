// THE FIX: Add "as Router" right here in the brackets
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Works from "./pages/Works";

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
                <Carousel />
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