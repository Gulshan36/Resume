import { portfolioData } from "@/data/portfolio";
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, 
  FaPython, FaJava, FaPhp, FaFigma, FaGitAlt, FaGithub
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTailwindcss, SiPostgresql, SiThreedotjs, 
  SiFramer, SiJavascript, SiMongodb, SiCanva, SiMysql
} from "react-icons/si";
import { IconType } from "react-icons";

// Map string icon names to components
const iconMap: Record<string, IconType> = {
  FaHtml5,
  FaCss3Alt,
  SiJavascript,
  FaReact,
  SiNextdotjs,
  FaBootstrap,
  SiTailwindcss,
  SiThreedotjs,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  SiPostgresql,
  FaFigma,
  SiFramer,
  SiMongodb,
  SiCanva,
  FaGitAlt,
  FaGithub,
  SiMysql,
};

export function Skills() {
  // Group headings mapping
  const categories = {
    frontend: "Front-End",
    backend: "Back-End",
    design: "UI/UX Design",
    tools: "Tools & Others", // Added tools category
  };

  return (
    <div className="h-full flex flex-col p-6 md:p-8">
      <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 border-b-2 border-gray-300 pb-2 text-center">
        My Skills
      </h2>

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-8">
        {(Object.keys(categories) as Array<keyof typeof categories>).map((catKey) => {
          const categorySkills = portfolioData.skills.filter(s => s.category === catKey);
          if (categorySkills.length === 0) return null;

          return (
            <div key={catKey}>
              <h3 className="text-lg font-bold text-gray-700 mb-4">
                {categories[catKey]}
              </h3>
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {categorySkills.map((skill, index) => {
                  const Icon = iconMap[skill.icon as string];
                  return (
                    <div 
                      key={index} 
                      className="flex flex-col items-center justify-center p-3 border border-blue-400 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow aspect-square"
                    >
                      {Icon && <Icon className="w-8 h-8 md:w-10 md:h-10 text-blue-500 mb-2" />}
                      <span className="text-xs md:text-sm font-medium text-gray-700 text-center leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
