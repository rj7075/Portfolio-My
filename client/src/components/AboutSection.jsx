import React from "react";
import { Link } from "react-router-dom";
import {
  FaDownload,
  FaPaperPlane,
  FaCheckCircle,
  FaBolt,
  FaShieldAlt,
  FaLayerGroup,
  FaRobot,
} from "react-icons/fa";

export default function AboutSection() {
  const skills = [
    "React.js",
    "Next.js (SSR & App)",
    "TypeScript",
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "Docker Containerization",
    "Redis (Caching)",
    "MongoDB",
    "MySQL",
    "Tailwind CSS",
    "Intermediate AWS (EC2, S3)",
    "CI/CD & GitHub Actions",
    "Version Control (Git/GitHub)",
    "Data Structures & Algorithms",
    "Object-Oriented Design (OOPs)",
    "System Design & RBAC",
    "Cashfree KYC Verification",
    "Stripe & Razorpay",
    "AI Chatbots & Automations",
    "Nginx Reverse Proxy",
    "Linux VPS Hosting",
    "Postman",
  ];

  const pillars = [
    {
      icon: FaLayerGroup,
      title: "Full Lifecycle Ownership",
      desc: "Taking projects from blank canvas to production—UI design, backend logic, DB schemas, third-party integrations, and cloud deployment.",
    },
    {
      icon: FaBolt,
      title: "Speed & Scalability",
      desc: "Architecting high-performance web systems using Server-Side Rendering (SSR), optimized queries, and responsive interfaces.",
    },
    {
      icon: FaShieldAlt,
      title: "Security & Role Protection",
      desc: "Implementing secure JWT authentication, HTTP-only cookies, automated KYC verification, and granular RBAC permissions.",
    },
    {
      icon: FaRobot,
      title: "AI & Workflow Automation",
      desc: "Building intelligent chatbots and automated document generation pipelines that reduce repetitive business tasks.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 mb-3">
            <FaCheckCircle className="w-3 h-3 text-blue-600 dark:text-blue-400" />
            <span>Developer Profile</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>

          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            A software engineer committed to writing clean code, building reliable software architectures, and delivering real business value.
          </p>
        </div>

        {/* Main 2-Column Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
          {/* LEFT: Image */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="relative w-72 sm:w-80 md:w-88 aspect-[3/4]">
              {/* Decorative Background Rings */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-transparent rounded-3xl blur-xl" />
              <div className="absolute inset-0 bg-blue-600/10 rounded-2xl transform rotate-2" />

              {/* Main Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-900">
                <img
                  src="/ranjeet.png"
                  alt="Ranjeet Yadav - Full Stack Software Developer"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 text-white">
                  <div className="text-xs font-bold font-heading">Ranjeet Yadav</div>
                  <div className="text-[11px] text-blue-400">B.Tech IT (AKGEC) · Full Stack Engineer</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Content Narrative */}
          <div className="w-full lg:w-7/12 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mb-4">
              Passionate Full Stack Developer Crafting High-Impact Digital Solutions
            </h3>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              With 1.5+ years of dedicated professional software engineering experience, I specialize in architecting responsive, high-performance web applications and multi-tenant SaaS platforms.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Currently engineering full-stack platforms at Asset Sense Private Limited, I build multi-role platforms featuring Super Admin, Admin, and Vendor dashboards, automated Cashfree KYC workflows, payment gateway integrations, and AI workflow automations.
            </p>

            {/* Skills Badges Cloud */}
            <div className="mb-8">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 text-center lg:text-left">
                Core Competencies & Technologies
              </h4>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume & Contact Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="/resume.pdf"
                download="Ranjeet_Yadav_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-sm transition-all"
              >
                <FaDownload className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition-all"
              >
                <FaPaperPlane className="w-3.5 h-3.5" />
                <span>Contact Me</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold font-heading text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}