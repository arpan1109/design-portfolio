import Navbar from "./components/Navabar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
// import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import  Works  from "./components/Works";

export default function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen selection:bg-orange-500 selection:text-black">
        <Navbar />
        
        <Routes>
          {/* Main Landing Page Route */}
          <Route 
            path="/" 
            element={
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