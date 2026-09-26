import React from "react";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaLayerGroup,
  FaServer,
  FaRobot,
  FaCloudUploadAlt,
  FaMobileAlt,
  FaRocket,
} from "react-icons/fa";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Full-Stack Web Applications",
      icon: FaLaptopCode,
      turnaround: "Fast Delivery",
      description:
        "End-to-end custom web applications built with React, Next.js, and Node.js. Engineered for speed, responsive interactivity, and long-term maintainability.",
      deliverables: [
        "Component-driven React & Next.js frontend",
        "Robust Node.js & Express.js backend APIs",
        "Mobile-first responsive styling with Tailwind",
        "Cross-browser testing & performance audit",
      ],
    },
    {
      title: "SaaS & Multi-Tenant Platforms",
      icon: FaLayerGroup,
      turnaround: "Production Grade",
      description:
        "Enterprise-ready SaaS architectures with isolated dashboards for Super Admins, Admins, Vendors, and End Users. Complete with KYC and payment processing.",
      deliverables: [
        "Multi-role RBAC authorization & portals",
        "Cashfree automated KYC verification",
        "Stripe & Razorpay payment gateway integration",
        "Real-time CRM lead pipelines & order tracking",
      ],
    },
    {
      title: "RESTful API & Database Architecture",
      icon: FaServer,
      turnaround: "High Reliability",
      description:
        "High-throughput, secure backend infrastructure. Clean API contracts, Redis in-memory caching, rate limiting, and resilient MongoDB/MySQL schema design.",
      deliverables: [
        "RESTful API design with JWT & Cookie auth",
        "Redis in-memory caching & session management",
        "MongoDB / MySQL schema modeling & indexing",
        "Comprehensive Postman API documentation",
      ],
    },
    {
      title: "AI Solutions & Workflow Automation",
      icon: FaRobot,
      turnaround: "High Impact",
      description:
        "Integrate cutting-edge AI capabilities into your business workflows. From intelligent customer support chatbots to automated document generation.",
      deliverables: [
        "Custom conversational AI chatbots & webhooks",
        "Dynamic document & contract PDF generators",
        "Lead enrichment & automated response workflows",
        "Seamless CRM and third-party API hookups",
      ],
    },
    {
      title: "DevOps, Docker & Cloud Deployment",
      icon: FaCloudUploadAlt,
      turnaround: "Zero Downtime",
      description:
        "Taking full-stack applications to live production. Docker containerization, automated CI/CD with GitHub Actions, intermediate AWS (EC2/S3), and Linux VPS with Nginx.",
      deliverables: [
        "Docker containerization & multi-stage builds",
        "Automated CI/CD pipelines via GitHub Actions",
        "Intermediate AWS cloud setup (EC2, S3, IAM)",
        "Nginx reverse proxy, custom domain & SSL setup",
      ],
    },
    {
      title: "UI/UX Engineering & SEO Optimization",
      icon: FaMobileAlt,
      turnaround: "Pixel Perfect",
      description:
        "Clean, calm interfaces designed to convert. Optimized for Core Web Vitals, Google SEO ranking, and accessibility.",
      deliverables: [
        "Next.js Server-Side Rendering (SSR) for SEO",
        "Structured Schema metadata & Open Graph tags",
        "Smooth micro-interactions & dark mode",
        "Lighthouse 90+ speed & accessibility scores",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Scope",
      desc: "Deep-dive into business requirements, feature specs, target user personas, and architectural roadmap.",
    },
    {
      step: "02",
      title: "Architecture & Schema",
      desc: "Designing database models, API contracts, RBAC permissions, and UI component wireframes.",
    },
    {
      step: "03",
      title: "Full-Stack Development",
      desc: "Iterative development with clean, typed code, integrating frontend, backend, and external APIs.",
    },
    {
      step: "04",
      title: "Testing & Security Audit",
      desc: "Thorough functional testing, validation, mobile responsiveness checks, and security hardening.",
    },
    {
      step: "05",
      title: "Deployment & Support",
      desc: "VPS Nginx deployment, domain routing, SSL installation, and post-launch performance monitoring.",
    },
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 mb-3">
            <FaRocket className="w-3 h-3 text-blue-600 dark:text-blue-400" />
            <span>Full Stack Services</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Services & <span className="text-blue-600 dark:text-blue-400">Solutions</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            I offer end-to-end software development services to turn ideas into robust, production-grade web applications and high-conversion platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* Engineering Methodology Section - Calm Monochrome */}
        <div className="mt-12 mb-20 p-8 sm:p-12 rounded-3xl glass-panel border border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">
              My 5-Step Engineering Workflow
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              A structured, transparent development lifecycle that guarantees high quality, timely delivery, and zero surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xl sm:text-2xl font-extrabold font-heading text-slate-400 dark:text-slate-500">
                    {item.step}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold font-heading text-slate-900 dark:text-white mt-2 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner - Sleek Calm Slate Container */}
        <div className="rounded-3xl p-8 sm:p-12 bg-slate-900 dark:bg-slate-900/90 border border-slate-800 text-white text-center shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-3">
            Have a project in mind or need a full-stack engineer?
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-xs sm:text-sm mb-8 leading-relaxed">
            Whether you need a multi-vendor SaaS platform, an AI integration, or an end-to-end web system, let's connect and make it happen.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-blue-600 text-white hover:bg-blue-500 shadow-sm transition-all"
            >
              Start Your Project
            </Link>
            <a
              href="https://wa.me/919838692186"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
            >
              Quick WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
