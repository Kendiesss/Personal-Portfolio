import { technicalSkills, softSkills } from "../data";
import { Laptop, MessagesSquare, Check } from "lucide-react";
import { motion } from "motion/react";

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-gray-900 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div id="skills-header" className="flex flex-col items-start gap-4 mb-20 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <Laptop className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-2xs font-bold uppercase tracking-widest text-emerald-400 font-mono">
              Core Expertise
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
            Skills & Abilities Overview
          </h2>
        </div>

        {/* Categories Grid (Technical VS Soft Skills) */}
        <div id="skills-grid" className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Subcategory 1: Technical & Programming Languages */}
          <div
            id="tech-skills-panel"
            className="bg-[#0e1628]/40 border border-gray-800/85 rounded-2xl p-8 shadow-xl relative overflow-hidden flex flex-col h-full"
          >
            {/* Ambient emerald background highlight */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/5 rounded-full blur-3xl"></div>

            <div className="flex items-center gap-3 mb-6 border-b border-gray-800/80 pb-4">
              <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 shrink-0">
                <Laptop className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  Technical & Programming Languages
                </h3>
                <p className="text-xs text-gray-400">Core technologies, frameworks & runtimes</p>
              </div>
            </div>

            {/* Badges Grid */}
            <div id="tech-skills-badges" className="flex flex-wrap gap-2.5 my-auto">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  id={`tech-skill-badge-${index}`}
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-gray-950 hover:bg-gray-900 border border-gray-800/80 hover:border-emerald-500/30 rounded-xl text-sm text-gray-100 font-mono font-medium shadow-sm transition-all duration-200"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Subcategory 2: Soft Skills & Profesional Attributes */}
          <div
            id="soft-skills-panel"
            className="bg-[#0e1628]/40 border border-gray-800/85 rounded-2xl p-8 shadow-xl relative overflow-hidden flex flex-col h-full"
          >
            {/* Ambient cyan background highlight */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/5 rounded-full blur-3xl"></div>

            <div className="flex items-center gap-3 mb-6 border-b border-gray-800/80 pb-4">
              <div className="p-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-400 shrink-0">
                <MessagesSquare className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  Interpersonal & Soft Skills
                </h3>
                <p className="text-xs text-gray-400">Professional attributes & collaboration strengths</p>
              </div>
            </div>

            {/* List with styled checks */}
            <div id="soft-skills-items" className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto">
              {softSkills.map((skill, index) => (
                <motion.div
                  id={`soft-skill-item-${index}`}
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 bg-gray-950/45 border border-gray-900 rounded-xl"
                >
                  <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 shrink-0">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-xs font-semibold text-gray-200 tracking-wide font-sans">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
