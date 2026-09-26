import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaRocket } from "react-icons/fa";
import { projects } from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const featuredList = projects.filter((p) => p.featured);

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/80 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 mb-3">
              <FaRocket className="w-3 h-3 text-blue-600 dark:text-blue-400" />
              <span>Flagship Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
              Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Production-ready multi-tenant SaaS platforms, role-based dashboards, and AI solutions engineered with end-to-end architecture.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/70 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-all group shrink-0"
          >
            <span>Explore All 16+ Projects</span>
            <FaArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuredList.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl glass-panel text-center flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-200 dark:border-slate-800">
          <div className="text-left">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
              Looking for a custom web or SaaS application?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              From authentication & payment gateways to role dashboards and AI automations.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-sm transition-all shrink-0"
          >
            Let's Discuss Your Project
          </Link>
        </div>
      </div>

      {/* Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
