import React from "react";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle, FaCheck } from "react-icons/fa";

export default function ProjectCard({ project, onSelect }) {
  return (
    <div className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:border-slate-400 dark:hover:border-slate-700 transition-all duration-200">
      {/* Thumbnail Container */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Ambient Dark Wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

        {/* Category & Featured Badge - Calm & Unified */}
        <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
          <span className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-lg bg-slate-900/80 text-slate-200 border border-slate-700/60 backdrop-blur-md shadow-xs">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-lg bg-blue-600/90 text-white backdrop-blur-md shadow-xs">
              Featured
            </span>
          )}
        </div>

        {/* Quick View Button overlay on hover */}
        {onSelect && (
          <button
            onClick={() => onSelect(project)}
            className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-slate-900/80 text-slate-200 hover:text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-150 shadow-xs"
            title="View Details"
            aria-label="View project details"
          >
            <FaInfoCircle className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Title */}
          <h3
            onClick={() => onSelect && onSelect(project)}
            className="text-lg font-bold font-heading text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1 cursor-pointer"
            title={project.title}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Key Feature Highlights */}
          {project.features && project.features.length > 0 && (
            <div className="mt-3.5 space-y-1">
              {project.features.slice(0, 2).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium truncate">
                  <FaCheck className="w-2.5 h-2.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="truncate">{feat}</span>
                </div>
              ))}
            </div>
          )}

          {/* Technologies Stack Tags */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech, index) => (
                <span
                  key={index}
                  className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="text-[11px] font-medium px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          )}
        </div>

        {/* CTA Actions */}
        <div className="mt-5 pt-4 border-t border-slate-200/70 dark:border-slate-800/70 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.demoUrl && project.demoUrl !== "#" ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <span>{project.category.includes("AI") ? "Try AI Live" : "Live Demo"}</span>
                <FaExternalLinkAlt className="w-2.5 h-2.5" />
              </a>
            ) : (
              <span className="text-xs text-slate-400 italic">Production Platform</span>
            )}

            {project.codeUrl && project.codeUrl !== "#" && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <FaGithub className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}
          </div>

          {onSelect && (
            <button
              onClick={() => onSelect(project)}
              className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Details →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}