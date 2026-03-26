import { portfolioData } from "@/data/portfolio";

export function BackCover() {
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
        <div className="text-center space-y-8 flex flex-col items-center max-w-lg mx-auto px-2">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#c5a059] tracking-wider leading-tight drop-shadow-md">
              Thank You
            </h1>
            <p className="text-[#e0c996] text-sm md:text-base font-serif italic tracking-wide opacity-90">
              For exploring my professional journey.
            </p>
          </div>

          <div className="w-16 md:w-24 h-1 bg-[#c5a059] mx-auto rounded-full opacity-80"></div>
          
          <div className="space-y-4 pt-2">
            <p className="text-sm md:text-base font-light text-[#e0c996] tracking-wide leading-relaxed px-4">
              Let's connect and build something amazing together. I am always open to new opportunities and collaborations.
            </p>
            <div className="flex gap-4 justify-center pt-2">
              <a 
                href={`mailto:${portfolioData.personal.email}`} 
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
                className="text-[#c5a059] hover:text-[#2c3e50] hover:bg-[#c5a059] text-xs md:text-sm uppercase tracking-widest border border-[#c5a059] rounded px-6 py-2 transition-all duration-300"
              >
                Say Hello
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Details / Edition Mark */}
        <div className="w-full flex flex-col items-center pb-6 space-y-2">
          <div className="w-full flex items-center justify-center gap-4 opacity-60">
             <div className="h-[1px] w-12 bg-[#c5a059]"></div>
             <span className="text-[#c5a059] text-xs uppercase tracking-widest font-semibold">The End</span>
             <div className="h-[1px] w-12 bg-[#c5a059]"></div>
          </div>
          <div className="text-[#c5a059] text-[10px] md:text-xs uppercase opacity-50 tracking-widest">
            {portfolioData.personal.name} © {new Date().getFullYear()}
          </div>
        </div>

      </div>
    </div>
  );
}