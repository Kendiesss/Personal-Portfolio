import { useState, useEffect } from "react";
import { personalDetails } from "../data";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav
      id="navbar"
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0f19]/85 backdrop-blur-md border-b border-gray-800/40 py-4 shadow-lg"
          : "bg-[#0b0f19]/45 backdrop-blur-sm py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo/Name */}
        <a
          id="nav-logo"
          href="#"
          className="font-display font-bold text-lg tracking-tight text-white hover:text-emerald-400 transition-colors"
        >
          {personalDetails.name}
          <span className="text-emerald-400">.</span>
        </a>

        {/* Desktop Links */}
        <div id="nav-desktop-links" className="hidden md:flex align-middle items-center space-x-8">
          {navLinks.map((link) => (
            <a
              id={`nav-link-${link.name.toLowerCase()}`}
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            id="nav-cta-contact"
            href={`mailto:${personalDetails.email}`}
            className="flex items-center gap-1.5 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 rounded-full text-xs font-semibold tracking-wide text-emerald-400 uppercase transition-all duration-200"
          >
            Get In Touch
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="nav-mobile-hamburger"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Links Drawer */}
      {isOpen && (
        <div
          id="nav-mobile-drawer"
          className="md:hidden absolute top-full left-0 right-0 bg-[#0d1324] border-b border-gray-800/80 shadow-2xl transition-all duration-300"
        >
          <div className="flex flex-col space-y-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                id={`nav-mobile-link-${link.name.toLowerCase()}`}
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-300 hover:text-emerald-400 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
            <a
              id="nav-mobile-cta"
              href={`mailto:${personalDetails.email}`}
              onClick={() => setIsOpen(false)}
              className="block text-center px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 rounded-lg text-sm font-semibold text-white tracking-wide transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
