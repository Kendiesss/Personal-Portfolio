import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Info, Sparkles } from "lucide-react";

export default function App() {
  return (
    <div id="portfolio-app" className="min-h-screen bg-[#0b0f19] text-gray-100 flex flex-col font-sans relative">
      {/* Absolute background decoration */}
      <div className="absolute top-0 inset-x-0 h-[64rem] radial-bg-glow pointer-events-none z-0"></div>

      {/* Placeholder Mode Status Banner - Ultra small, beautiful, and informative */}
      <div
        id="placeholder-alert-banner"
        className="relative z-50 bg-[#0e1628]/90 border-b border-emerald-500/30 backdrop-blur-sm text-center py-2.5 px-4"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="h-4 w-4 text-emerald-400 shrink-0" />
          <p className="text-2xs font-semibold uppercase tracking-wider text-emerald-400 font-mono">
            Placeholder Mode Active
          </p>
          <span className="hidden sm:inline text-2xs text-gray-400 font-mono">
            — Search for brackets in <code className="text-emerald-300">src/data.ts</code> to customize instantly!
          </span>
        </div>
      </div>

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
