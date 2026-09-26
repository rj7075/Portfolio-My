import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes, FaDownload, FaPaperPlane } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  // Handle scroll effects & progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(currentProgress);
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-blue-600 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
            ? "glass-panel shadow-sm py-3 border-b border-slate-200/80 dark:border-slate-800/80"
            : "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md py-4 border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo & Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Ranjeet Yadav Portfolio"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold border border-slate-700/60 dark:border-slate-300/60 shadow-xs group-hover:scale-105 transition-transform duration-200 overflow-hidden">
              <img
                src="/mylogo.png"
                alt="RJ Logo"
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <span className="sr-only">RJ</span>
            </div>

            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-extrabold tracking-tight font-heading text-slate-900 dark:text-white flex items-center gap-1.5">
                RANJEET <span className="text-blue-600 dark:text-blue-400">YADAV</span>
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 -mt-1 hidden sm:block">
                Full Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-150 ${isActive
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/40"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/50"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-150 focus:outline-none"
            >
              {isDark ? (
                <FaSun className="w-3.5 h-3.5 text-slate-200" />
              ) : (
                <FaMoon className="w-3.5 h-3.5 text-slate-700" />
              )}
            </button>

            {/* Quick Resume Link (Desktop) */}
            <a
              href="/ranjeet.pdf"
              download="Ranjeet_Yadav_Resume.pdf"
              className="hidden lg:flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-600 transition"
              title="Download Resume"
            >
              <FaDownload className="w-3 h-3" />
              <span>Resume</span>
            </a>

            {/* "Hire Me" CTA (Desktop) */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-sm transition-all"
            >
              <FaPaperPlane className="w-3 h-3" />
              <span>Let's Talk</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-panel border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${isActive
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 font-bold"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
                <a
                  href="/resume.pdf"
                  download="Ranjeet_Yadav_Resume.pdf"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-200"
                >
                  <FaDownload className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Download Resume (PDF)</span>
                </a>

                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-sm"
                >
                  <FaPaperPlane className="w-3.5 h-3.5" />
                  <span>Get In Touch</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
