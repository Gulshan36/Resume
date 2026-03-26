
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageProps {
  index: number;
  isFlipped: boolean;
  zIndex: number;
  front: ReactNode;
  back: ReactNode;
  onFlip: () => void;
}

export function Page({ index, isFlipped, zIndex, front, back, onFlip }: PageProps) {
  return (
    <motion.div
      className={cn(
        "absolute top-0 w-full h-full cursor-pointer preserve-3d origin-left",
        "shadow-xl rounded-r-lg border-l border-gray-200"
      )}
      style={{ zIndex }}
      animate={{ rotateY: isFlipped ? -180 : 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
      onClick={(e) => {
        // Prevent flipping if clicking a link, button, or element with no-flip class
        const target = e.target as HTMLElement;
        if (target.closest('a, button, [class*="no-flip"]') || target.tagName === 'A' || target.tagName === 'BUTTON') {
          return;
        }
        
        const selection = window.getSelection();
        if (selection && selection.toString().length > 0) {
          return;
        }
        onFlip();
      }}
    >
      {/* Front Face */}
      <div
        className={cn(
          "absolute w-full h-full backface-hidden bg-[#fdfbf7] p-8 overflow-hidden rounded-r-lg",
          "flex flex-col border border-gray-300 pattern-paper"
        )}
      >
        {front}
      </div>

      {/* Back Face */}
      <div
        className={cn(
          "absolute w-full h-full backface-hidden bg-[#fdfbf7] p-8 overflow-hidden rounded-l-lg",
          "flex flex-col border border-gray-300 pattern-paper rotate-y-180"
        )}
        style={{ transform: "rotateY(180deg)" }}
      >
        {back}
      </div>
    </motion.div>
  );
}
