import { personalDetails } from "../data";
import { User, Heart, Code, Compass, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const highlights = [
    {
      icon: <Code className="h-5 w-5 text-emerald-400" />,
      title: "Clean Code Architect",
      desc: "Committed to robust architectures, high-performance optimization, and pristine structure.",
    },
    {
      icon: <Heart className="h-5 w-5 text-cyan-400" />,
      title: "User-Centric Design",
      desc: "Delivering intuitive interfaces that make technology accessible and enjoyable.",
    },
    {
      icon: <Compass className="h-5 w-5 text-indigo-400" />,
      title: "Goal-Driven Builder",
      desc: "Focusing on tangible product outcomes, elegant code bases, and high user-retention.",
    },
  ];

  return (
    <section id="about" className="py-24 border-t border-gray-900 bg-[#0c1222]/30 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div id="about-header" className="flex flex-col items-start gap-4 mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <User className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-2xs font-bold uppercase tracking-widest text-emerald-400 font-mono">
              About Me
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
            My Professional Story & Core Philosophies
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Biography Column */}
          <div id="about-biography" className="lg:col-span-7 space-y-6">
            <div className="bg-[#0e1628]/60 border border-gray-800/80 px-8 py-8 rounded-2xl relative shadow-xl overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500/80"></div>
              
              <h3 className="font-display font-bold text-xl text-white mb-4">
                Who I am
              </h3>
              
              <p id="about-description" className="text-gray-300 text-base leading-relaxed whitespace-pre-line">
                {personalDetails.shortDescription}
              </p>

              {/* Added a prompt for user reference so they know what to put there */}
              <div className="mt-6 pt-6 border-t border-gray-800/60 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              </div>
            </div>
          </div>

          {/* Highlights Column */}
          <div id="about-highlights" className="lg:col-span-5 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-gray-400 mb-2 font-mono">
              What sets me apart
            </h4>

            {highlights.map((item, index) => (
              <motion.div
                id={`about-highlight-${index}`}
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-5 rounded-xl bg-gray-900/40 border border-gray-800 hover:border-gray-700/60 transition-all duration-200"
              >
                <div className="shrink-0 p-2.5 rounded-lg bg-gray-800/80 border border-gray-700/40 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-semibold text-sm text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
