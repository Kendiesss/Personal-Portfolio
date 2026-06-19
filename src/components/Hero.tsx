import { personalDetails } from "../data";
import { Github, Linkedin, Mail, ArrowRight, Star } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background ambient glowing shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370d_1px,transparent_1px),linear-gradient(to_bottom,#1f29370d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left column (Text content) */}
        <div id="hero-content" className="lg:col-span-7 flex flex-col items-start space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
          >
            <Star className="h-4 w-4 text-emerald-400 fill-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono">
              Available for Opportunities
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h2 className="font-display text-lg font-medium text-gray-400 tracking-wide">
              Hello, I am
            </h2>
            <h1 id="hero-name" className="font-display font-extrabold text-5xl md:text-6xl text-white tracking-tight">
              {personalDetails.name}
            </h1>
            <p id="hero-role" className="font-display font-bold text-2xl md:text-3xl text-gradient">
              {personalDetails.role}
            </p>
          </motion.div>

          <motion.p
            id="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg max-w-xl leading-relaxed"
          >
            {personalDetails.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col text-sm text-gray-400 space-y-1.5 border-l-2 border-emerald-500/40 pl-4 py-1"
          >
            <span className="font-mono text-xs text-emerald-400">CONNECT DIRECTLY:</span>
            <span id="hero-email" className="font-medium text-white select-all">{personalDetails.email}</span>
          </motion.div>

          {/* Prominent High-Converting Call to Action Button Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <a
              id="hero-cta-github"
              href={personalDetails.gitHubUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-800 hover:bg-gray-700/80 border border-gray-700 text-sm font-semibold tracking-wide rounded-xl text-white shadow-xl hover:shadow-gray-900/50 transition-all duration-200"
            >
              <Github className="h-5 w-5" />
              GitHub Profile
            </a>
            <a
              id="hero-cta-linkedin"
              href={personalDetails.linkedInUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 border border-emerald-400/20 text-sm font-semibold tracking-wide rounded-xl text-white shadow-xl hover:shadow-emerald-950/20 transition-all duration-200"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn Profile
            </a>
            <a
              id="hero-cta-email"
              href={`mailto:${personalDetails.email}`}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent hover:bg-gray-800/30 border border-gray-800 hover:border-gray-700 text-sm font-semibold tracking-wide rounded-xl text-gray-300 hover:text-white transition-all duration-200"
            >
              <Mail className="h-5 w-5" />
              Send Email
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Right column (Headshot placeholder & Abstract graphics) */}
        <div id="hero-graphic" className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Ambient backdrop glow */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-3xl blur-md opacity-30 animate-pulse-slow"></div>

            {/* Frame container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl bg-[#0e1628] border border-gray-800 px-8 py-8 flex flex-col justify-between overflow-hidden shadow-2xl">
              {/* Card visual elements */}
              <div className="flex justify-between items-center">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
                </div>
                <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">headshot_placeholder.svg</span>
              </div>

              {/* Headshot SVG placeholder inside elegant badge frame */}
              <div className="my-auto flex flex-col justify-center items-center space-y-4">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center relative overflow-hidden group">
                  {personalDetails.profileImageUrl && !personalDetails.profileImageUrl.startsWith("[") ? (
                    <img
                      src={personalDetails.profileImageUrl}
                      alt={personalDetails.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        // Fallback indicator
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const errDiv = document.createElement("div");
                          errDiv.className = "absolute inset-0 bg-[#0e1628] flex flex-col items-center justify-center text-red-400 font-mono text-center px-4 text-2xs";
                          errDiv.innerText = "Error loading headshot image";
                          parent.appendChild(errDiv);
                        }
                      }}
                    />
                  ) : (
                    <>
                      {/* Decorative headshot grid overlay */}
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
                      
                      {/* Human shape stylized shadow SVG */}
                      <svg
                        className="w-20 h-20 md:w-26 md:h-26 text-emerald-400/60"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </>
                  )}
                </div>
                <div className="text-center">
                  <h3 className="font-display font-medium text-sm text-gray-300">
                    {personalDetails.profileImageUrl && !personalDetails.profileImageUrl.startsWith("[") 
                      ? "Profile Image Active" 
                      : "[YOUR_HEADSHOT_OR_AVATAR]"}
                  </h3>
                  <p className="font-mono text-2xs text-gray-500 uppercase tracking-wider mt-1">
                    {personalDetails.profileImageUrl && !personalDetails.profileImageUrl.startsWith("[") 
                      ? "Successfully loaded" 
                      : "Replace this SVG frame with your real picture URL later"}
                  </p>
                </div>
              </div>

              {/* Bottom tag info */}
              <div className="flex justify-between items-center border-t border-gray-800/80 pt-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="font-mono text-2xs text-emerald-400 uppercase tracking-wider">online</span>
                </div>
                <span className="font-mono text-2xs text-gray-500">2026-06-18</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
