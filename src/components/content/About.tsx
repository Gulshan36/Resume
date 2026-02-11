
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Twitter } from "lucide-react";

export function About() {
  return (
    <div className="h-full flex flex-col p-8 justify-center items-center text-center">
      <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 border-b-2 border-gray-300 pb-2">
        Get In Touch
      </h2>

      <p className="text-lg text-gray-700 mb-12 leading-relaxed">
        {portfolioData.about.description}
      </p>

      <div className="flex gap-6 justify-center mb-12">
        <a 
          href={portfolioData.about.social.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
        >
          <Github className="w-6 h-6" />
        </a>
        <a 
          href={portfolioData.about.social.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a 
          href={portfolioData.about.social.twitter} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-300 transition-colors"
        >
          <Twitter className="w-6 h-6" />
        </a>
      </div>

      <div className="mt-auto text-sm text-gray-400">
        © {new Date().getFullYear()} {portfolioData.personal.name}. All Rights Reserved.
      </div>
    </div>
  );
}
