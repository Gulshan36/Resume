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
  /** This page is the LEFT active page — its BACK FACE is visible */
  isLeftActive: boolean;
  /** This page is the RIGHT active page — its FRONT FACE is visible */
  isRightActive: boolean;
}

export function Page({
  isFlipped,
  zIndex,
  front,
  back,
  onFlip,
  isLeftActive,
  isRightActive,
}: PageProps) {
  return (
    /**
     * motion.div is pointer-events:none by default.
     * Only the ACTIVE visible face overrides this with pointer-events:auto.
     * This prevents hidden/background pages from intercepting clicks.
     */
    <motion.div
      className={cn(
        "absolute top-0 w-full h-full preserve-3d origin-left",
        "shadow-xl rounded-r-lg border-l border-gray-200"
      )}
      style={{ zIndex, pointerEvents: "none" }}
      animate={{ rotateY: isFlipped ? -180 : 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
    >
      {/* ══════════════════════════════════════
          FRONT FACE
          Interactive ONLY when this is the RIGHT active page.
      ══════════════════════════════════════ */}
      <div
        className="absolute w-full h-full backface-hidden bg-paper overflow-hidden rounded-r-lg flex flex-col border border-gray-300 pattern-paper"
        style={{ pointerEvents: isRightActive ? "auto" : "none" }}
      >
        {/* Flip zone — right edge strip triggers page flip */}
        {isRightActive && (
          <button
            aria-label="Flip to next page"
            onClick={onFlip}
            className="absolute top-0 right-0 h-full w-14 z-20 cursor-pointer group focus:outline-none"
            style={{ pointerEvents: "auto" }}
          >
            {/* Hover indicator */}
            <span className="absolute right-1.5 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
              <span className="block w-0.5 h-8 bg-gray-500 rounded-full mx-auto" />
              <span className="block w-0.5 h-5 bg-gray-400 rounded-full mx-auto" />
            </span>
          </button>
        )}

        {/* Page content */}
        <div className="relative w-full h-full p-8" style={{ pointerEvents: "auto" }}>
          {front}
        </div>
      </div>

      {/* ══════════════════════════════════════
          BACK FACE
          Interactive ONLY when this is the LEFT active page.
      ══════════════════════════════════════ */}
      <div
        className="absolute w-full h-full backface-hidden bg-paper overflow-hidden rounded-l-lg flex flex-col border border-gray-300 pattern-paper"
        style={{
          transform: "rotateY(180deg)",
          pointerEvents: isLeftActive ? "auto" : "none",
        }}
      >
        {/* Flip zone — left edge strip flips page back */}
        {isLeftActive && (
          <button
            aria-label="Flip back to previous page"
            onClick={onFlip}
            className="absolute top-0 left-0 h-full w-14 z-20 cursor-pointer group focus:outline-none"
            style={{ pointerEvents: "auto" }}
          >
            {/* Hover indicator */}
            <span className="absolute left-1.5 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
              <span className="block w-0.5 h-8 bg-gray-500 rounded-full mx-auto" />
              <span className="block w-0.5 h-5 bg-gray-400 rounded-full mx-auto" />
            </span>
          </button>
        )}

        {/* Page content */}
        <div className="relative w-full h-full p-8" style={{ pointerEvents: "auto" }}>
          {back}
        </div>
      </div>
    </motion.div>
  );
}
