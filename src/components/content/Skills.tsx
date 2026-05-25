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

// Color based on proficiency level
function getLevelColor(level: number): string {
  if (level >= 90) return "bg-emerald-500";
  if (level >= 75) return "bg-blue-500";
  if (level >= 60) return "bg-amber-500";
  return "bg-red-400";
}

function getLevelLabel(level: number): string {
  if (level >= 90) return "Expert";
  if (level >= 75) return "Advanced";
  if (level >= 60) return "Intermediate";
  return "Beginner";
}

export function Skills() {
  const categories = {
    frontend: "Front-End",
    backend: "Back-End",
    design: "UI/UX Design",
    tools: "Tools & Others",
  };

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2 text-center">
        My Skills
      </h2>

      <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar space-y-5">
        {(Object.keys(categories) as Array<keyof typeof categories>).map((catKey) => {
          const categorySkills = portfolioData.skills.filter(s => s.category === catKey);
          if (categorySkills.length === 0) return null;

          return (
            <div key={catKey}>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
                {categories[catKey]}
              </h3>
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {categorySkills.map((skill, index) => {
                  const Icon = iconMap[skill.icon as string];
                  const barColor = getLevelColor(skill.level);
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center p-2 md:p-3 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 group"
                    >
                      {/* Icon */}
                      {Icon && (
                        <Icon className="w-7 h-7 md:w-9 md:h-9 text-blue-500 mb-1.5 group-hover:scale-110 transition-transform duration-200" />
                      )}

                      {/* Skill Name */}
                      <span className="text-[10px] md:text-xs font-semibold text-gray-700 text-center leading-tight mb-2">
                        {skill.name}
                      </span>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                        <div
                          className={`h-1.5 rounded-full ${barColor} transition-all duration-700`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      {/* Level Label */}
                      <span className={`text-[8px] mt-1 font-medium ${barColor.replace("bg-", "text-")}`}>
                        {getLevelLabel(skill.level)} · {skill.level}%
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
