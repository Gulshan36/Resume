"use client";

import { useEffect, useState } from "react";
import { Book } from "@/components/Book";
import { motion } from "framer-motion";

export default function Home() {
  const [scale, setScale] = useState(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateScale = () => {
      // Check if it's mobile portrait (where our CSS rotates the screen)
      const isMobilePortrait = window.matchMedia("(orientation: portrait) and (max-width: 768px)").matches;
      
      const availableWidth = isMobilePortrait ? window.innerHeight : window.innerWidth;
      const availableHeight = isMobilePortrait ? window.innerWidth : window.innerHeight;

      // Mobile book demands approx 800px width and ~600px height for fully visible padding
      const isMobile = window.innerWidth <= 768;
      const requiredWidth = isMobile ? 800 : 1100;
      const requiredHeight = isMobile ? 570 : 800;

      const scaleW = availableWidth / requiredWidth;
      const scaleH = availableHeight / requiredHeight;
      
      setScale(Math.min(1, scaleW, scaleH));
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <main className="min-h-[100vh] w-full flex flex-col items-center justify-center -mt-5 pattern-paper overflow-hidden relative force-landscape">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/10 to-transparent"></div>
      <motion.div
        initial={{ x: "-100vw", y: "-100vh", opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
        className="w-full flex flex-col items-center"
        style={{ transform: isClient ? `scale(${scale})` : 'scale(1)' }}
      >
        <Book />
        <div className="mt-8 text-sm md:text-base text-gray-600 font-serif italic opacity-70">
          Click on the pages to flip through the portfolio
        </div>
      </motion.div>
    </main>
  );
}
