import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaDownload, FaCheck } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiDocker } from "react-icons/si";

export default function Hero() {
  const highlights = [
    "Build scalable SaaS platforms with isolated multi-role dashboards",
    "Implement Cashfree KYC verification, JWT auth & secure REST APIs",
    "High-speed data caching with Redis & resilient database architectures",
    "Docker containerization, CI/CD with GitHub Actions & Intermediate AWS",
    "Deploy full-stack applications on Linux VPS with Nginx reverse proxy",
  ];

  const stats = [
    { value: "16+", label: "Completed Projects" },
    { value: "1.5+", label: "Years Experience" },
    { value: "Multi-Role", label: "SaaS Dashboards" },
    { value: "100%", label: "End-to-End Ownership" },
  ];

  return (
    <section className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Calm, Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-blue-600/5 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT COLUMN: HERO CONTENT */}
          <div className="w-full lg:w-7/12 text-center lg:text-left">
            {/* Status Pill - Calm & Executive */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>Available for Full-time Roles & SaaS Projects</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Ranjeet Yadav</span>
            </h1>

            {/* Subtitle */}
            <h2 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700 dark:text-slate-300 font-heading">
              Full Stack Software Developer
            </h2>

            {/* Narrative Description */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I design and engineer scalable web applications with a focus on performance, clean architecture, and seamless user experience. Specialized in multi-vendor platforms, booking ecosystems, and AI-powered workflow automations.
            </p>

            {/* Core Capability Checklist */}
            <div className="mt-6 space-y-2.5 text-left max-w-xl mx-auto lg:mx-0">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 mt-1 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-sm transition-all"
              >
                <span>Explore Projects</span>
                <FaArrowRight className="w-3 h-3" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 bg-white/70 dark:bg-slate-900/70 transition-all"
              >
                <span>Get In Touch</span>
              </Link>

              <a
                href="/resume.pdf"
                download="Ranjeet_Yadav_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
              >
                <FaDownload className="w-3 h-3" />
                <span>Resume</span>
              </a>
            </div>

            {/* Quick Stats Grid - Calm Monochrome */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50">
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: HERO PROFILE VISUAL */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-80 md:w-96 lg:w-[420px] aspect-[4/5]">
              {/* Subtle Ambient Backlight */}
              <div className="absolute -inset-2 bg-blue-600/5 dark:bg-blue-400/5 rounded-3xl blur-lg pointer-events-none" />

              {/* Main Avatar Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl glass-card">
                <img
                  src="/Ranjeet-Yadav3.jpg"
                  alt="Ranjeet Yadav - Full Stack Software Developer"
                  className="w-full h-full object-cover object-center"
                />

                {/* Subtle wash over bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 flex items-center justify-between text-white shadow-md">
                  <div>
                    <div className="text-xs font-bold font-heading text-white">Ranjeet Yadav</div>
                    <div className="text-[11px] text-slate-400">Software Engineer @ Asset Sense</div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                    Active
                  </span>
                </div>
              </div>

              {/* Floating Tech Badges - Clean Monochrome Glass */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 p-2 sm:p-2.5 rounded-xl glass-panel shadow-md border border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                <SiReact className="w-4 h-4 text-blue-500" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">React.js</span>
              </div>

              <div className="absolute top-1/4 -right-3 sm:-right-5 p-2 sm:p-2.5 rounded-xl glass-panel shadow-md border border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                <SiNextdotjs className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Next.js SSR</span>
              </div>

              <div className="absolute bottom-24 -left-3 sm:-left-5 p-2 sm:p-2.5 rounded-xl glass-panel shadow-md border border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                <SiNodedotjs className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Node.js</span>
              </div>

              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 p-2 sm:p-2.5 rounded-xl glass-panel shadow-md border border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                <SiDocker className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Docker</span>
              </div>

              <div className="absolute -bottom-3 right-6 p-2 sm:p-2.5 rounded-xl glass-panel shadow-md border border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                <SiMongodb className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}