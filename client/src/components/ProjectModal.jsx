import React, { useEffect } from "react";
import { FaTimes, FaExternalLinkAlt, FaGithub, FaCheck, FaLayerGroup } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    // Prevent background scrolling when modal is open
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-y-auto z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
          aria-label="Close project modal"
        >
          <FaTimes className="w-4 h-4" />
        </button>

        {/* Modal Header & Hero Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Badges on image */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider bg-slate-900/90 text-slate-200 border border-slate-700">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-600/90 text-white">
                  Featured Project
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {project.demoUrl && project.demoUrl !== "#" && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-sm transition-all"
                >
                  <span>Live Demo</span>
                  <FaExternalLinkAlt className="w-3 h-3" />
                </a>
              )}
              {project.codeUrl && project.codeUrl !== "#" && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 shadow-sm transition-all"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">
              {project.title}
            </h2>
            {project.tagline && (
              <p className="mt-1 text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400">
                {project.tagline}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Overview & Architecture
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
                <FaCheck className="text-blue-600 dark:text-blue-400" />
                Key Features & Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          {project.technologies && project.technologies.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
                <FaLayerGroup className="text-slate-500 dark:text-slate-400" />
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Project Identifier: <code className="font-mono text-slate-700 dark:text-slate-300">{project.id || project.title.toLowerCase().replace(/\s+/g, "-")}</code>
            </span>

            <div className="flex items-center gap-3">
              {project.demoUrl && project.demoUrl !== "#" && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-sm transition-all"
                >
                  <span>Launch Live Demo</span>
                  <FaExternalLinkAlt className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
