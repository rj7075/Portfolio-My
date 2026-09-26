import React, { useState } from "react";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaCheck } from "react-icons/fa";
import { experienceTimeline } from "../data/skillsData";

export default function ExperienceSection() {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? experienceTimeline
      : experienceTimeline.filter((item) => item.type === filter);

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 mb-3">
            <FaBriefcase className="w-3 h-3 text-blue-600 dark:text-blue-400" />
            <span>Career Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Experience & <span className="text-blue-600 dark:text-blue-400">Education</span>
          </h2>

          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            My professional journey building production web software and academic background in Information Technology.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setFilter("all")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === "all"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setFilter("work")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                filter === "work"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <FaBriefcase className="w-3 h-3" />
              <span>Work Experience</span>
            </button>
            <button
              onClick={() => setFilter("education")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                filter === "education"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <FaGraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 md:ml-32 space-y-10">
          {filteredItems.map((item, index) => {
            const isWork = item.type === "work";
            return (
              <div key={index} className="relative pl-6 sm:pl-8 group">
                {/* Timeline Icon Marker */}
                <div
                  className="absolute -left-[17px] top-1 w-8 h-8 rounded-full flex items-center justify-center border-4 border-slate-50 dark:border-slate-950 bg-blue-600 text-white shadow-xs"
                >
                  {isWork ? (
                    <FaBriefcase className="w-3 h-3" />
                  ) : (
                    <FaGraduationCap className="w-3.5 h-3.5" />
                  )}
                </div>

                {/* Card Container */}
                <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80">
                          {isWork ? "Work Experience" : "Education"}
                        </span>
                        {item.current && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 border border-slate-200/80 dark:border-slate-700/80">
                            Present
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white mt-1.5">
                        {item.role}
                      </h3>
                      <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {item.organization}
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-start sm:items-end gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 shrink-0">
                      <div className="inline-flex items-center gap-1.5">
                        <FaCalendarAlt className="w-3 h-3 text-slate-400" />
                        <span>{item.period}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5">
                        <FaMapMarkerAlt className="w-3 h-3 text-slate-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="space-y-2 mb-4">
                      {item.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <FaCheck className="w-3 h-3 text-blue-600 dark:text-blue-400 mt-1 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack pills */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap gap-1.5">
                      {item.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
