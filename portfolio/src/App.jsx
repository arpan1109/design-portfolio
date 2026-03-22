import Navbar from "./components/Navabar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen selection:bg-zinc-800 selection:text-white">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Carousel />
    </div>
  );
}

export default App;
