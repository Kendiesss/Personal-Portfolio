import { experiences } from "../data";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-gray-900 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div id="experience-header" className="flex flex-col items-start gap-4 mb-20 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <Briefcase className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-2xs font-bold uppercase tracking-widest text-emerald-400 font-mono">
              Work History
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
            Professional Work Experience
          </h2>
        </div>

        {/* Timeline Layout */}
        <div id="experience-timeline" className="relative border-l border-gray-800 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div id={`experience-entry-${exp.id}`} key={exp.id} className="relative pl-8 md:pl-10 group">
              {/* Timeline marker icon/bullet */}
              <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-gray-900 border-2 border-gray-800 flex items-center justify-center group-hover:border-emerald-500 transition-all duration-300">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-600 group-hover:bg-emerald-400 transition-colors duration-300"></div>
              </div>

              {/* Experience Card */}
              <div className="bg-[#0e1628]/40 border border-gray-800/80 p-6 md:p-8 rounded-2xl hover:border-gray-700/60 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                {/* Horizontal line indicator */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:via-emerald-500/40 transition-all duration-500"></div>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  {/* Job and Company details */}
                  <div className="space-y-1">
                    <h3 id={`experience-${index}-title`} className="font-display font-bold text-xl text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                      {exp.jobTitle}
                    </h3>
                    <p id={`experience-${index}-company`} className="font-display font-semibold text-sm text-gray-300">
                      {exp.companyName}
                    </p>
                  </div>

                  {/* Duration */}
                  <div id={`experience-${index}-duration`} className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gray-900/60 border border-gray-800 rounded-full font-mono text-xs text-gray-400 shrink-0 select-none">
                    <Calendar className="h-3.5 w-3.5 text-gray-500" />
                    {exp.duration}
                  </div>
                </div>

                {/* Job Achievements / Bullet points */}
                <ul id={`experience-${index}-responsibilities`} className="space-y-3.5">
                  {exp.responsibilities.map((bullet, idx) => (
                    <li
                      id={`experience-${index}-responsibility-${idx}`}
                      key={idx}
                      className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed"
                    >
                      <ChevronRight className="h-4.5 w-4.5 text-emerald-400 shrink-0 mt-0.5 opacity-80" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
