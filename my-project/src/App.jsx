import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Testimonials from "./Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
    </div>
  );
}

export default App;
