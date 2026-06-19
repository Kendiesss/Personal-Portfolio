import { personalDetails } from "../data";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-[#060912] border-t border-gray-900 py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-8 relative z-10">
        
        {/* Left Column (Brand, Signature, details) */}
        <div id="footer-branding" className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-display font-black text-base text-white tracking-wider uppercase">
              {personalDetails.name}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          </div>
          <p id="footer-tagline" className="text-xs text-gray-500 max-w-sm leading-relaxed">
            Beautifully designed personal portfolio template. Ready for production, search and replace the placeholders.
          </p>
        </div>

        {/* Right Column (Social Icons, scroll to top trigger) */}
        <div id="footer-interactions" className="flex flex-col sm:flex-row sm:items-center gap-6">
          {/* Social Icons row */}
          <div id="footer-social-row" className="flex items-center gap-4">
            <a
              id="footer-social-github"
              href={personalDetails.gitHubUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="w-9 h-9 rounded-xl bg-gray-950 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-700 hover:bg-gray-900 transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="h-4.5 w-4.5" />
            </a>
            <a
              id="footer-social-linkedin"
              href={personalDetails.linkedInUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="w-9 h-9 rounded-xl bg-gray-950 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-700 hover:bg-gray-900 transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
            <a
              id="footer-social-email"
              href={`mailto:${personalDetails.email}`}
              className="w-9 h-9 rounded-xl bg-gray-950 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-700 hover:bg-gray-900 transition-all duration-200"
              aria-label="Send Email"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
          </div>

          {/* Button back to top */}
          <button
            id="footer-btn-top"
            onClick={scrollToTop}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-gray-950 hover:bg-gray-950/80 hover:text-white border border-gray-800 hover:border-gray-700 rounded-xl text-xs font-semibold text-gray-400 transition-colors cursor-pointer select-none"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-8 pt-8 border-t border-gray-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-4xs text-gray-600 font-mono uppercase tracking-widest relative z-10">
        <span>© {currentYear} {personalDetails.name}. All rights reserved.</span>
        <span>Crafted with template placeholder indicators</span>
      </div>
    </footer>
  );
}
