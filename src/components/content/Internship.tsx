import { portfolioData } from "@/data/portfolio";
import { FaBuilding, FaLink, FaLinkedin, FaClock } from "react-icons/fa";
import { Briefcase } from "lucide-react";

export function Internship() {
  const hasInternships = portfolioData.internships.length > 0;

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2 text-center">
        Work Experience
      </h2>

      {hasInternships ? (
        /* ── Real Data ── */
        <div className="flex-1 overflow-y-auto space-y-4 pr-1 custom-scrollbar">
          {portfolioData.internships.map((internship, index) => (
            <div
              key={index}
              className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow"
            >
              {/* Company + Links Row */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-800 flex items-center gap-2">
                    <FaBuilding className="text-gray-400 shrink-0" />
                    {internship.company}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 mt-0.5">
                    {internship.role}
                  </p>
                  {internship.duration && (
                    <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                      <FaClock className="w-3 h-3" />
                      {internship.duration}
                    </p>
                  )}
                </div>

                {/* External Links */}
                <div className="flex gap-3 shrink-0 mt-1">
                  {internship.link && (
                    <a
                      href={internship.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      onPointerDown={(e) => e.stopPropagation()}
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Company Website"
                    >
                      <FaLink size={16} />
                    </a>
                  )}
                  {internship.socialMediaLink && (
                    <a
                      href={internship.socialMediaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      onPointerDown={(e) => e.stopPropagation()}
                      onClick={(e) => e.stopPropagation()}
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-sm text-gray-600 mt-3 leading-relaxed border-l-2 border-blue-200 pl-3">
                {internship.project}
              </p>
            </div>
          ))}
        </div>
      ) : (
        /* ── Empty State ── */
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-5">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
            <Briefcase className="w-8 h-8 text-gray-400" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">
              Actively Seeking Opportunities
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              I&apos;m a final-year B.Tech student looking for internship and
              full-time roles in web development. Open to collaborate!
            </p>
          </div>

          <a
            href={`mailto:${portfolioData.personal.email}?subject=Internship Opportunity`}
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 bg-[#2c3e50] text-white text-sm px-5 py-2.5 rounded-full hover:bg-[#3d5166] transition-colors shadow-sm"
          >
            <Briefcase className="w-4 h-4" /> Let&apos;s Connect
          </a>

          <div className="flex flex-col gap-1 text-xs text-gray-400 border border-dashed border-gray-200 rounded-lg px-4 py-3 w-full max-w-xs">
            <span className="font-medium text-gray-500">Looking for:</span>
            {["Frontend / Full Stack Roles", "React · Next.js · Node.js", "Remote & On-site (India)"].map(tag => (
              <span key={tag} className="text-gray-500">• {tag}</span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-auto pt-4 text-center text-[10px] text-gray-400 italic">
        Professional Journey
      </div>
    </div>
  );
}
