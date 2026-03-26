import { portfolioData } from "@/data/portfolio";
import { FaBuilding, FaLink, FaLinkedin } from "react-icons/fa";

export function Internship() {
  return (
    <div className="h-full flex flex-col p-8">
      <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 border-b-2 border-gray-300 pb-2 text-center">
        Work Experience
      </h2>

      <div className="flex-1 overflow-y-auto space-y-6 pr-2 custom-scrollbar">
        {portfolioData.internships.map((internship, index) => (
          <div
            key={index}
            className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm p-4 relative"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <FaBuilding className="text-gray-500" />
                  {internship.company}
                </h3>
                <div className="text-base font-semibold text-gray-600 mt-1">
                  {internship.role}
                </div>
              </div>
              <div className="flex gap-3">
                {internship.link && (
                  <a
                    href={internship.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Company Website"
                  >
                    <FaLink size={18} />
                  </a>
                )}
                {internship.socialMediaLink && (
                  <a
                    href={internship.socialMediaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => e.stopPropagation()}
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin size={18} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-gray-700 mt-3 leading-relaxed">
              {internship.project}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-8 text-center text-xs text-gray-400 italic">
        Professional Journey
      </div>
    </div>
  );
}