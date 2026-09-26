import React, { useState, useMemo } from "react";
import { FaSearch, FaFilter, FaRocket, FaTimes, FaLayerGroup } from "react-icons/fa";
import { projects, categories } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  // Filtered projects based on category and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        (project.technologies &&
          project.technologies.some((t) => t.toLowerCase().includes(q))) ||
        (project.features &&
          project.features.some((f) => f.toLowerCase().includes(q)));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 mb-3">
            <FaRocket className="w-3 h-3 text-blue-600 dark:text-blue-400" />
            <span>Showcase & Work</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            A comprehensive catalog of real-world SaaS platforms, multi-role marketplaces, healthcare tools, and AI automations I have built and deployed.
          </p>
        </div>

        {/* Filter & Search Bar Toolbar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-grow max-w-md">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by title, tech stack (Next.js, MongoDB, KYC)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  aria-label="Clear search"
                >
                  <FaTimes className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Results Count Pill */}
            <div className="flex items-center justify-between md:justify-end gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <span>
                Showing <strong className="text-slate-900 dark:text-white">{filteredProjects.length}</strong> of {projects.length} projects
              </span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass-panel rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
            <FaLayerGroup className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
              No matching projects found
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-md mx-auto">
              We couldn't find any projects matching "{searchQuery}". Try searching for different keywords like "React", "Next.js", "Node.js", or clear filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-6 px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
