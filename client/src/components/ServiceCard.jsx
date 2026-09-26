import React from "react";
import { FaCheck } from "react-icons/fa";

export default function ServiceCard({ service, onInquire }) {
  const Icon = service.icon;

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between h-full group">
      <div>
        {/* Uniform Calm Icon Container */}
        <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-center mb-5 transition-colors group-hover:border-blue-500/40">
          {Icon && <Icon className="w-5 h-5" />}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Deliverables Checklist */}
        {service.deliverables && service.deliverables.length > 0 && (
          <div className="space-y-2 mb-6">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Deliverables:
            </h4>
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                <FaCheck className="w-2.5 h-2.5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action / Inquiry link */}
      <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800/70 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
          {service.turnaround || "Standard Project"}
        </span>

        {onInquire ? (
          <button
            onClick={() => onInquire(service)}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Inquire Now →
          </button>
        ) : (
          <a
            href="/contact"
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Get Started →
          </a>
        )}
      </div>
    </div>
  );
}
