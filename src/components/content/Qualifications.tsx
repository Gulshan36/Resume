
import { portfolioData } from "@/data/portfolio";

export function Qualifications() {
  return (
    <div className="h-full flex flex-col p-8">
      <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 border-b-2 border-gray-300 pb-2 text-center">
        Qualifications
      </h2>

      <div className="flex-1 overflow-y-auto space-y-8 pr-2 custom-scrollbar">
        {portfolioData.qualifications.map((qual, index) => (
          <div key={index} className="relative pl-6 border-l-2 border-gray-300">
            <div className="absolute -left-[9px] top-0 w-5 h-4 rounded-full bg-gray-400 border-2 border-[#fdfbf7]"></div>
            <h3 className="w-full text-left text-base md:text-lg font-bold text-gray-800">{qual.degree}</h3>
            <div className="text-gray-600 font-medium mt-1">{qual.school}</div>
            <div className="text-sm text-gray-500 italic mt-1">{qual.year}</div>
            {qual.cgpa && (
              <div className="text-sm text-gray-600 font-medium mt-1">CGPA: {qual.cgpa}</div>
            )}
            {qual.percentage && (
              <div className="text-sm text-gray-600 font-medium mt-1">Percentage: {qual.percentage}</div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-auto pt-8 text-center text-xs text-gray-400 italic">
        Academic & Professional Journey
      </div>
    </div>
  );
}
