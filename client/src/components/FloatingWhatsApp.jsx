import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick Contact" className="fixed bottom-6 right-6 z-40 group">
      <a
        href="https://wa.me/919838692186?text=Hi%20Ranjeet,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Message to Ranjeet Yadav"
        className="flex items-center gap-2 p-3 sm:px-4 sm:py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-black/15 transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none"
      >
        <FaWhatsapp className="w-6 h-6 shrink-0" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
