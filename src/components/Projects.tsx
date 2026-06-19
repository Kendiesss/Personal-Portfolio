import { projectsList } from "../data";
import { Code2, ArrowUpRight, FolderGit2 } from "lucide-react";
import { motion } from "motion/react";

// Helper component to render placeholder or real images dynamically
function ProjectImage({ url, title, tags }: { url: string; title: string; tags: string[] }) {
  const isPlaceholderKey = url.startsWith("[");

  if (isPlaceholderKey) {
    // If it is a placeholder key like [PROJECT_PREVIEW_IMAGE_URL_1], 
    // render a stunning, high-contrast mock code terminal representation as a visual preview.
    return (
      <div className="w-full h-48 bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex flex-col justify-between p-4 relative overflow-hidden group select-none">
        {/* Geometric aesthetic pattern background */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1.5px,transparent_1.5px)] [background-size:16px_16px]"></div>
        
        {/* Terminal Header */}
        <div className="flex justify-between items-center relative z-10">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40"></div>
          </div>
          <span className="font-mono text-4xs text-gray-400 font-semibold tracking-wider uppercase">mockup_preview.sh</span>
        </div>

        {/* Central visual decoration */}
        <div className="my-auto flex flex-col items-center justify-center text-center space-y-2 relative z-10">
          <FolderGit2 className="h-10 w-10 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
          <div className="space-y-0.5">
            <h4 className="font-mono text-3xs font-semibold text-gray-300 max-w-[200px] truncate">{title}</h4>
            <p className="font-mono text-4xs text-emerald-400/70 uppercase tracking-widest">{tags.join(" | ")}</p>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="flex justify-between items-center relative z-10 border-t border-gray-800/60 pt-2 font-mono text-4xs text-gray-500">
          <span>{url}</span>
          <span>READY</span>
        </div>
      </div>
    );
  }

  // Otherwise, render the user-specified image safely with referrer policy
  return (
    <div className="w-full h-48 overflow-hidden relative group">
      <img
        src={url}
        alt={title}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        onError={(e) => {
          // Fallback if image fails to load
          e.currentTarget.style.display = "none";
          const parent = e.currentTarget.parentElement;
          if (parent) {
            const fallbackDiv = document.createElement("div");
            fallbackDiv.className = "absolute inset-0 bg-gray-900 flex items-center justify-center text-gray-500 font-mono text-xs";
            fallbackDiv.innerText = "Error loading image";
            parent.appendChild(fallbackDiv);
          }
        }}
      />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-gray-900 bg-[#0c1222]/10 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div id="projects-header" className="flex flex-col items-start gap-4 mb-20 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <Code2 className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-2xs font-bold uppercase tracking-widest text-emerald-400 font-mono">
              Web Creations
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
            Curated Web Projects Portfolio
          </h2>
        </div>

        {/* Projects Grid */}
        <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <div
              id={`project-card-${project.id}`}
              key={project.id}
              className="group bg-[#0e1628]/45 border border-gray-800 overflow-hidden rounded-2xl hover:border-gray-700/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Dynamic Image / Code Terminal preview renderer */}
              <ProjectImage url={project.previewImageUrl} title={project.title} tags={project.tags} />

              {/* Card Body */}
              <div id={`project-${index}-body`} className="p-6 flex flex-col justify-between flex-grow space-y-6">
                <div className="space-y-3.5">
                  {/* Tech item badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-gray-900 border border-gray-800 rounded text-4xs font-mono font-medium text-emerald-400 tracking-wider uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 id={`project-${index}-title`} className="font-display font-bold text-lg text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  <p id={`project-${index}-desc`} className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Footer link trigger element */}
                <div id={`project-${index}-footer`} className="pt-4 border-t border-gray-800/80 flex items-center justify-between">
                  {/* Info Tag */}
                  <span className="font-mono text-4xs text-gray-500 uppercase tracking-wide truncate max-w-[120px]">
                    {project.projectLink}
                  </span>

                  {/* Redirect Anchor */}
                  <a
                    id={`project-link-anchor-${index}`}
                    href={project.projectLink}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    View Project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
