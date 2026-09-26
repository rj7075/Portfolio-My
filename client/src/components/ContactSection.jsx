import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaCopy,
  FaClock,
} from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSdt9FLqDPkjd-DWbOAODaVC2abmVTnUI_ujinSjRZABpKjMbA/formResponse";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formBody = new FormData();
    formBody.append("entry.783140003", formData.name);
    formBody.append("entry.1563551126", formData.email);
    formBody.append("entry.407814668", formData.mobile);
    formBody.append("entry.1679191168", formData.message);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      alert("Something went wrong. Please try again or reach out directly via WhatsApp.");
    }

    setLoading(false);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rj7075yadav@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section className="py-20 relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 mb-3">
            <FaPaperPlane className="w-3 h-3 text-blue-600 dark:text-blue-400" />
            <span>Direct Communication</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>

          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Have a project idea, SaaS requirement, or full-time opportunity? Send a message below or contact me directly via WhatsApp or Email.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* FORM CARD (7 Columns) */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-8">
              Fill out the form below. I will review your requirements and respond within 24 hours.
            </p>

            {success && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 flex items-center gap-3 animate-fadeIn">
                <FaCheckCircle className="w-5 h-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <div className="text-xs sm:text-sm font-semibold">
                  Thank you! Your message was sent successfully. I will get back to you shortly.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    Your Name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    Email Address <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Mobile / WhatsApp */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  Phone / WhatsApp <span className="text-blue-600">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  Project Details or Inquiry <span className="text-blue-600">*</span>
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project scope, timeline, tech stack, or inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-y"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* CONTACT INFO SIDEBAR (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Status Card */}
            <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Open for Engagement
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white">
                Ready to collaborate on full-time roles & SaaS contracts.
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Response turnaround: typically within a few hours on business days.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Direct Contact Information
              </h4>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-center shrink-0">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <div className="flex-grow">
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Email Address</div>
                  <a
                    href="mailto:rj7075yadav@gmail.com"
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    rj7075yadav@gmail.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <FaCopy className="w-2.5 h-2.5" />
                    <span>{copiedEmail ? "Copied to clipboard!" : "Copy Email"}</span>
                  </button>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-center shrink-0">
                  <FaPhoneAlt className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Phone & WhatsApp</div>
                  <a
                    href="tel:+919838692186"
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition block"
                  >
                    +91 9838692186
                  </a>
                  <a
                    href="https://wa.me/919838692186?text=Hi%20Ranjeet,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <FaWhatsapp className="w-3 h-3 text-emerald-500" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Location</div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Gurugram, Haryana, India
                  </p>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Open for Remote & Hybrid Arrangements
                  </span>
                </div>
              </div>
            </div>

            {/* Social Network Profiles */}
            <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                Connect Across Networks
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/rj7075"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 transition group"
                >
                  <FaGithub className="w-4 h-4 text-slate-800 dark:text-slate-200 group-hover:text-blue-500" />
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ranjeet-yadav-174865211/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 transition group"
                >
                  <FaLinkedin className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
