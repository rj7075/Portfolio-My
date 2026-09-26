import React, { useState } from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaPuzzlePiece,
  FaRobot,
  FaCogs,
  FaShieldAlt,
  FaCheckCircle,
  FaUserShield,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiStripe,
  SiGit,
  SiPostman,
  SiNginx,
  SiLinux,
  SiVercel,
  SiDocker,
  SiRedis,
  SiGithubactions,
  SiAmazonwebservices,
} from "react-icons/si";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const skillGroups = [
    {
      id: "frontend",
      title: "Frontend Engineering",
      icon: FaCode,
      skills: [
        { name: "React.js", icon: SiReact, tag: "Expert" },
        { name: "Next.js (App & SSR)", icon: SiNextdotjs, tag: "Advanced" },
        { name: "TypeScript", icon: SiTypescript, tag: "Advanced" },
        { name: "JavaScript (ES6+)", icon: SiJavascript, tag: "Expert" },
        { name: "Tailwind CSS", icon: SiTailwindcss, tag: "Expert" },
        { name: "Responsive UI/UX", icon: FaCheckCircle, tag: "Expert" },
      ],
      desc: "Creating pixel-perfect, accessible, and high-performance responsive interfaces with modular component architecture.",
    },
    {
      id: "backend",
      title: "Backend & System APIs",
      icon: FaServer,
      skills: [
        { name: "Node.js", icon: SiNodedotjs, tag: "Expert" },
        { name: "Express.js", icon: SiExpress, tag: "Expert" },
        { name: "RESTful API Design", icon: FaNetworkWired, tag: "Expert" },
        { name: "JWT & Cookie Auth", icon: FaShieldAlt, tag: "Advanced" },
        { name: "Role-Based RBAC", icon: FaUserShield, tag: "Advanced" },
        { name: "Middleware & Validation", icon: FaCheckCircle, tag: "Advanced" },
      ],
      desc: "Architecting high-throughput REST APIs, robust authentication layers, and reliable data validation engines.",
    },
    {
      id: "database",
      title: "Databases & Storage",
      icon: FaDatabase,
      skills: [
        { name: "MongoDB & Mongoose", icon: SiMongodb, tag: "Advanced" },
        { name: "Redis In-Memory Cache", icon: SiRedis, tag: "Advanced" },
        { name: "MySQL & Relational SQL", icon: SiMysql, tag: "Advanced" },
        { name: "Schema Architecture", icon: FaDatabase, tag: "Advanced" },
        { name: "Indexing & Query Tuning", icon: FaCheckCircle, tag: "Advanced" },
      ],
      desc: "Designing resilient schema structures, in-memory caching with Redis, and optimized database queries.",
    },
    {
      id: "saas",
      title: "SaaS & Integrations",
      icon: FaPuzzlePiece,
      skills: [
        { name: "Cashfree KYC Verification", icon: FaCheckCircle, tag: "Production" },
        { name: "Payment Gateways (Stripe & Razorpay)", icon: SiStripe, tag: "Production" },
        { name: "Multi-Role Dashboards", icon: FaUserShield, tag: "Production" },
        { name: "Lead & CRM Pipelines", icon: FaCheckCircle, tag: "Production" },
      ],
      desc: "Building multi-vendor portals with automated identity verification, payment handling, and real-time lead analytics.",
    },
    {
      id: "ai",
      title: "AI & Workflow Automation",
      icon: FaRobot,
      skills: [
        { name: "AI Conversational Bots", icon: FaRobot, tag: "Advanced" },
        { name: "Document Generation", icon: FaCheckCircle, tag: "Advanced" },
        { name: "Webhook Pipelines", icon: FaNetworkWired, tag: "Advanced" },
        { name: "Social Post Automation", icon: FaRobot, tag: "Production" },
      ],
      desc: "Integrating modern LLM workflows, automated business document creation, and CRM webhook dispatchers.",
    },
    {
      id: "devops",
      title: "DevOps, Cloud & Version Control",
      icon: FaCogs,
      skills: [
        { name: "Docker Containerization", icon: SiDocker, tag: "Advanced" },
        { name: "CI/CD & GitHub Actions", icon: SiGithubactions, tag: "Advanced" },
        { name: "Intermediate AWS (EC2, S3)", icon: SiAmazonwebservices, tag: "Intermediate" },
        { name: "Git & Version Control", icon: SiGit, tag: "Expert" },
        { name: "Nginx Reverse Proxy", icon: SiNginx, tag: "Advanced" },
        { name: "Linux VPS Deployment", icon: SiLinux, tag: "Advanced" },
        { name: "Postman API Testing", icon: SiPostman, tag: "Expert" },
        { name: "Vercel & Hostinger", icon: SiVercel, tag: "Expert" },
      ],
      desc: "Docker containerization, automated CI/CD deployment pipelines with GitHub Actions, intermediate AWS cloud, and version control.",
    },
  ];

  const filteredGroups =
    activeTab === "all"
      ? skillGroups
      : skillGroups.filter((g) => g.id === activeTab);

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 mb-3">
            <FaCode className="w-3 h-3 text-blue-600 dark:text-blue-400" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="text-blue-600 dark:text-blue-400">Expertise</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Built and deployed real-world full stack applications with end-to-end ownership—handling everything from intuitive interfaces to backend systems, third-party integrations, and scalable VPS hosting.
          </p>

          {/* Filter Pills - Calm Monochrome with Blue Active */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "all"
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              All Domains
            </button>
            {skillGroups.map((g) => (
              <button
                key={g.id}
                onClick={() => setActiveTab(g.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === g.id
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {g.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards - Uniform Calm Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.id}
                className="glass-card rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-slate-200/70 dark:border-slate-700/60 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white">
                      {group.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                    {group.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, idx) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
                        >
                          {SkillIcon && <SkillIcon className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />}
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* System Architecture Callout Card - Calm Slate with Blue Accent */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                <FaUserShield className="w-3.5 h-3.5" />
                <span>Enterprise Architecture Specialization</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
                Multi-Role Portals & Isolated Dashboard Systems
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Proven track record designing multi-role architectures with distinct access layers for Super Admin, Admin, Vendors, and End Users. Implemented with role-based JWT auth, real-time analytics, automated Cashfree KYC approval pipelines, and granular data privacy.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 w-full lg:w-auto shrink-0">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-center">
                <div className="text-xs font-bold text-slate-900 dark:text-white">Super Admin</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Platform Control</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-center">
                <div className="text-xs font-bold text-slate-900 dark:text-white">Admin</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Approvals & CMS</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-center">
                <div className="text-xs font-bold text-slate-900 dark:text-white">Vendor</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">KYC & Inventory</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-center">
                <div className="text-xs font-bold text-slate-900 dark:text-white">User</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Bookings & Search</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
