"use client";

import { portfolioData } from "@/data/portfolio";
import { FaDownload, FaEnvelope } from "react-icons/fa";

export function Intro() {
  return (
    <div className="h-full flex flex-col p-4 md:p-8 justify-center items-center text-center">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-4 md:mb-6 border-b-2 border-gray-300 pb-2">
        About Me
      </h2>

      {/* Profile Photo */}
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg mb-4 md:mb-6 mx-auto">
        <img
          src={portfolioData.personal.photo}
          alt={portfolioData.personal.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bio */}
      <p className="text-base md:text-lg text-gray-700 italic mb-6 leading-relaxed">
        &ldquo;{portfolioData.personal.bio}&rdquo;
      </p>

      {/* Contact Details */}
      <div className="mt-2 text-left w-full space-y-2 text-xs md:text-sm text-gray-600">
        <div className="flex justify-between border-b border-dashed border-gray-300 pb-1">
          <span className="font-semibold">Phone:</span>
          <span>{portfolioData.personal.phone}</span>
        </div>
        <div className="flex justify-between border-b border-dashed border-gray-300 pb-1">
          <span className="font-semibold">Email:</span>
          <span>{portfolioData.personal.email}</span>
        </div>
        <div className="flex justify-between border-b border-dashed border-gray-300 pb-1">
          <span className="font-semibold">Location:</span>
          <span>{portfolioData.personal.location}</span>
        </div>
      </div>

      {/* Action Buttons — using <a> tags so the browser handles them natively */}
      <div className="mt-7 flex gap-4 w-full justify-center">
        {/* ── Download CV ── */}
        <a
          href={portfolioData.personal.cvUrl}
          download="Gulshan_Kumar.pdf"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full text-xs md:text-sm hover:bg-gray-700 active:scale-95 transition-all shadow-sm cursor-pointer select-none"
        >
          <FaDownload size={14} className="pointer-events-none shrink-0" />
          <span className="pointer-events-none">Download CV</span>
        </a>

        {/* ── Contact Me ── */}
        <a
          href={`mailto:${portfolioData.personal.email}`}
          target="_blank"
          rel="noopener noreferrer"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-2 bg-[#c5a059] text-white px-4 py-2 rounded-full text-xs md:text-sm hover:bg-[#b08d4b] active:scale-95 transition-all shadow-sm cursor-pointer select-none"
        >
          <FaEnvelope size={14} className="pointer-events-none shrink-0" />
          <span className="pointer-events-none">Contact Me</span>
        </a>
      </div>
    </div>
  );
}
