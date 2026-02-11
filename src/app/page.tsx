
"use client";

import { Book } from "@/components/Book";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center -mt-5 pattern-paper overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/10 to-transparent"></div>
      
      <motion.div
        initial={{ x: "-100vw", y: "-100vh", opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
        className="w-full flex flex-col items-center"
      >
        <Book />
        <div className="mt-8 text-sm text-gray-600 font-serif italic opacity-70">
          Click on the pages to flip through the portfolio
        </div>
      </motion.div>
    </main>
  );
}
