import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowUp,
  FaHeart,
  FaDownload,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 overflow-hidden">
      {/* Subtle Ambient Backlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Bio (5 Columns) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white font-bold shadow-xs">
                <img
                  src="/mylogo.png"
                  alt="RJ"
                  className="w-6 h-6 object-contain"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>
              <span className="text-xl font-extrabold font-heading text-white tracking-tight">
                RANJEET <span className="text-blue-400">YADAV</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Full Stack Software Developer building high-performance web applications, multi-vendor SaaS platforms, and automated AI solutions with clean architecture.
            </p>

            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://github.com/rj7075"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all"
              >
                <FaGithub className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.linkedin.com/in/ranjeet-yadav-174865211/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all"
              >
                <FaLinkedin className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://wa.me/919838692186"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all"
              >
                <FaWhatsapp className="w-3.5 h-3.5" />
              </a>

              <a
                href="mailto:rj7075yadav@gmail.com"
                aria-label="Email"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all"
              >
                <FaEnvelope className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 Columns) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-slate-400 hover:text-blue-400 transition">
                  Portfolio (16+)
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-blue-400 transition">
                  About & Experience
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-blue-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Stacks (2 Columns) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Expertise
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>Next.js & React</li>
              <li>Node.js & Express</li>
              <li>MongoDB & Redis</li>
              <li>Docker & CI/CD Actions</li>
              <li>Intermediate AWS & VPS</li>
              <li>Multi-Role SaaS & APIs</li>
            </ul>
          </div>

          {/* Contact & Resume (3 Columns) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <a
                href="mailto:rj7075yadav@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition truncate"
              >
                <FaEnvelope className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="truncate">rj7075yadav@gmail.com</span>
              </a>
              <a
                href="tel:+919838692186"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition"
              >
                <FaPhoneAlt className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>+91 9838692186</span>
              </a>
              <div className="pt-2">
                <a
                  href="/resume.pdf"
                  download="Ranjeet_Yadav_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition"
                >
                  <FaDownload className="w-3 h-3 text-blue-400" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Ranjeet Yadav. Built with React, Tailwind CSS & Vite.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition group focus:outline-none"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-lg bg-slate-800 group-hover:bg-blue-600 flex items-center justify-center transition-colors">
              <FaArrowUp className="w-3 h-3 text-slate-300 group-hover:text-white" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}