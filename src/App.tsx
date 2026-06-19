import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="portfolio-app" className="min-h-screen bg-[#0b0f19] text-gray-100 flex flex-col font-sans relative">
      {/* Absolute background decoration */}
      <div className="absolute top-0 inset-x-0 h-[64rem] radial-bg-glow pointer-events-none z-0"></div>

      {/* Navigation Header */}
      <Navbar />

      {/* Structured Sections */}
      <main className="flex-grow">
        {/* Landing Section */}
        <Hero />
        
        {/* Bio Story Section */}
        <About />
        
        {/* Work Timeline Section */}
        <Experience />
        
        {/* Academics Section */}
        <Education />
        
        {/* Expertise Section */}
        <Skills />
        
        {/* Curated Grid Section */}
        <Projects />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
