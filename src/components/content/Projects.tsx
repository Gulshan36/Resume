
import { portfolioData } from "@/data/portfolio";
import { FolderGit2, ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <div className="h-full flex flex-col p-8">
      <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 border-b-2 border-gray-300 pb-2 text-center">
        Projects
      </h2>

      <div className="flex-1 overflow-y-auto space-y-6 pr-2 custom-scrollbar">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="flex flex-col p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            {/* Project Image */}
            <div className="relative w-full h-32 md:h-40 mb-3 rounded-md overflow-hidden bg-gray-200">
               <img 
                 src={project.imageUrl} 
                 alt={project.title}
                 className="w-full h-full object-cover"
               />
            </div>

            <div className="flex items-center gap-2 mb-2">
              <FolderGit2 className="w-5 h-5 text-[#2c3e50]" />
              <h3 className="text-lg font-bold text-gray-800 leading-tight">{project.title}</h3>
            </div>
            
            <p className="text-sm text-gray-600 mb-3 flex-1">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-[10px] md:text-xs bg-gray-200 px-2 py-1 rounded text-gray-700 font-medium">
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-auto">
              <a 
                href={project.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-1 bg-gray-800 text-white text-xs py-2 rounded hover:bg-gray-700 transition-colors"
              >
                <FolderGit2 className="w-3 h-3" /> Source
              </a>
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-1 bg-blue-600 text-white text-xs py-2 rounded hover:bg-blue-500 transition-colors"
              >
                <ExternalLink className="w-3 h-3" /> Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
