import { portfolioData } from "@/data/portfolio";
import { FaDownload, FaEnvelope } from "react-icons/fa";

export function Intro() {
  return (
    <div className="h-full flex flex-col p-4 md:p-8 justify-center items-center text-center">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-4 md:mb-6 border-b-2 border-gray-300 pb-2">
        About Me
      </h2>
      
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg mb-4 md:mb-6 mx-auto">
        <img 
          src={portfolioData.personal.photo} 
          alt={portfolioData.personal.name}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-base md:text-lg text-gray-700 italic mb-6 leading-relaxed">
        "{portfolioData.personal.bio}"
      </p>

      <div className="mt-7 text-left w-full space-y-2 text-xs md:text-sm text-gray-600">
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
      {/* Contact & CV Buttons */}
      <div className="mt-7 flex gap-4 mb-6 w-full justify-center">
        <a 
          href={portfolioData.personal.cvUrl} 
          download
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full text-xs md:text-sm hover:bg-gray-700 transition-colors shadow-sm"
        >
          <FaDownload size={14} /> Download CV
        </a>
        <a 
          href={`mailto:${portfolioData.personal.email}`}
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-2 bg-[#c5a059] text-white px-4 py-2 rounded-full text-xs md:text-sm hover:bg-[#b08d4b] transition-colors shadow-sm"
        >
          <FaEnvelope size={14} /> Contact Me
        </a>
      </div>
    </div>
  );
}
