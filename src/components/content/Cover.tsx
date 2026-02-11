
import { portfolioData } from "@/data/portfolio";

export function Cover() {
  return (
    <div className="h-full w-full bg-[#2c3e50] flex items-center justify-center p-8 md:p-12 relative overflow-hidden">
      {/* Background Texture Simulation */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>

      {/* Book Border Frame */}
      <div className="border-[6px] border-double border-[#c5a059] p-2 h-full w-full rounded-lg relative z-10 flex flex-col items-center justify-between shadow-[inset_0_0_40px_rgba(0,0,0,0.4)] bg-[#2c3e50]">
        
        {/* Top Ornaments */}
        <div className="w-full flex justify-between px-4 pt-4 opacity-80">
          <span className="text-[#c5a059] text-2xl font-serif">✦</span>
          <span className="text-[#c5a059] text-2xl font-serif">✦</span>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-8 flex flex-col items-center max-w-lg mx-auto">
          <div className="space-y-4">
             <p className="text-[#c5a059] text-sm md:text-base font-serif italic tracking-widest uppercase opacity-90 border-b border-[#c5a059] inline-block pb-2 px-6">
              The Professional Journey Of
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#c5a059] tracking-wider leading-tight drop-shadow-md">
              {portfolioData.personal.name}
            </h1>
          </div>

          <div className="w-16 md:w-24 h-1 bg-[#c5a059] mx-auto rounded-full opacity-80"></div>

          <div className="space-y-2">
            <h2 className="text-lg md:text-2xl font-light text-[#e0c996] tracking-[0.2em] uppercase">
              {portfolioData.personal.role}
            </h2>
            <p className="text-xs md:text-sm text-[#c5a059] opacity-70 italic font-serif">
              Crafting Digital Experiences
            </p>
          </div>
        </div>

        {/* Bottom Details / Edition Mark */}
        <div className="w-full flex flex-col items-center pb-6 space-y-2">
          <div className="w-full flex items-center justify-center gap-4 opacity-60">
             <div className="h-[1px] w-12 bg-[#c5a059]"></div>
             <span className="text-[#c5a059] text-xs uppercase tracking-widest font-semibold">Vol. 1</span>
             <div className="h-[1px] w-12 bg-[#c5a059]"></div>
          </div>
          <div className="text-[#c5a059] text-[10px] md:text-xs uppercase opacity-50 tracking-widest">
            Est. 2022 — Present
          </div>
        </div>

      </div>
    </div>
  );
}
