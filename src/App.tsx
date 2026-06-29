import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-[#09090B]">
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Education/>
      <Projects/>
    </div>
  );
}

export default App;