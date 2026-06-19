import { educationList } from "../data";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-gray-900 bg-[#0c1222]/20 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div id="education-header" className="flex flex-col items-start gap-4 mb-20 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
            <GraduationCap className="h-3.5 w-3.5 text-cyan-400" />
            <span className="text-2xs font-bold uppercase tracking-widest text-cyan-400 font-mono">
              Education
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
            Academic Background & Certifications
          </h2>
        </div>

        {/* Dynamic Education Layout */}
        <div id="education-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu, index) => (
            <div
              id={`education-card-${edu.id}`}
              key={edu.id}
              className="group relative bg-[#0e1628]/40 border border-gray-800/80 hover:border-cyan-500/30 p-8 rounded-2xl shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Highlight Background Flare */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all duration-300"></div>

              <div id={`education-${index}-heading`} className="space-y-4">
                {/* Academic Icon */}
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform duration-300">
                  <Award className="h-6 w-6" />
                </div>

                <div className="space-y-2">
                  <h3 id={`education-${index}-degree`} className="font-display font-bold text-lg md:text-xl text-white group-hover:text-cyan-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p id={`education-${index}-school`} className="font-display text-sm text-gray-300">
                    {edu.schoolName}
                  </p>
                </div>
              </div>

              {/* Graduation date footer bar */}
              <div id={`education-${index}-footer`} className="mt-8 pt-4 border-t border-gray-800/80 flex justify-between items-center text-xs text-gray-400 font-mono">
                <span className="uppercase tracking-wider">Completion Year:</span>
                <span id={`education-${index}-year`} className="flex items-center gap-1.5 px-3 py-1 bg-gray-900 border border-gray-800/80 rounded-full text-white font-semibold">
                  <Calendar className="h-3.5 w-3.5 text-gray-500" />
                  {edu.graduationYear}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
