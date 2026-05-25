
"use client";

import { useState, useEffect, useCallback } from "react";
import { Page } from "./Page";
import { Cover } from "./content/Cover";
import { Intro } from "./content/Intro";
import { Qualifications } from "./content/Qualifications";
import { Skills } from "./content/Skills";
import { Projects } from "./content/Projects";
import { Internship } from "./content/Internship";
import { About } from "./content/About";
import { BackCover } from "./content/BackCover";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Page section labels for the indicator
const PAGE_LABELS = ["Cover", "About Me", "Education", "Skills", "Projects", "Experience", "Contact", "End"];

export function Book() {
  const [flippedIndex, setFlippedIndex] = useState<number>(-1);
  const [zBoostIndex, setZBoostIndex] = useState<number | null>(null);

  const pages = [
    { front: <Cover />, back: <Intro /> },
    { front: <Qualifications />, back: <Skills /> },
    { front: <Projects />, back: <Internship /> },
    { front: <About />, back: <BackCover /> },
  ];

  // Use functional update so we don't need flippedIndex in deps
  const handleFlip = useCallback((index: number) => {
    setZBoostIndex(index);
    setFlippedIndex(prev => {
      if (index <= prev) return index - 1;
      return index;
    });
    setTimeout(() => setZBoostIndex(null), 750);
  }, []);

  // Go to next spread
  const goForward = useCallback(() => {
    setFlippedIndex(prev => {
      if (prev < pages.length - 1) {
        setZBoostIndex(prev + 1);
        setTimeout(() => setZBoostIndex(null), 750);
        return prev + 1;
      }
      return prev;
    });
  }, [pages.length]);

  // Go to previous spread
  const goBack = useCallback(() => {
    setFlippedIndex(prev => {
      if (prev >= 0) {
        setZBoostIndex(prev);
        setTimeout(() => setZBoostIndex(null), 750);
        return prev - 1;
      }
      return prev;
    });
  }, []);

  // Navigate directly to a view (dot click)
  const navigateTo = useCallback((targetFlipIndex: number) => {
    setFlippedIndex(targetFlipIndex);
    setZBoostIndex(null);
  }, []);

  // ⌨️ Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input/textarea
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        goForward();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goBack();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goForward, goBack]);

  const isCover = flippedIndex === -1;
  const isEnd = flippedIndex === pages.length - 1;

  // Current "view" index for dots (0 = cover, pages.length = back cover)
  const currentView = flippedIndex + 1; // 0 to pages.length
  const totalViews = pages.length + 1;

  return (
    <>
      {/* ────────── Book Container ────────── */}
      <div
        className={cn(
          "relative perspective-1000 mx-auto my-4 md:my-8 transition-transform duration-700 ease-in-out",
          "w-95 md:w-125 h-137.5 md:h-175",
          isEnd ? "md:translate-x-full" : (!isCover && "md:translate-x-1/2")
        )}
      >
        <div className="relative w-full h-full preserve-3d">
          {pages.map((page, index) => {
            const isFlipped = index <= flippedIndex;
            let zIndex = 0;

            if (index === zBoostIndex) {
              zIndex = 100;
            } else if (isFlipped) {
              zIndex = index;
            } else {
              zIndex = pages.length - index;
            }

            /**
             * Only 2 faces should receive pointer events at any time:
             *  - isLeftActive:  this page is flipped → its BACK FACE is the LEFT visible page
             *  - isRightActive: this is the next unflipped page → its FRONT FACE is the RIGHT visible page
             *
             * All other faces get pointer-events:none so they can't intercept
             * clicks meant for links/buttons in the active page content.
             */
            const isLeftActive = index === flippedIndex;
            const isRightActive = index === flippedIndex + 1;

            return (
              <Page
                key={index}
                index={index}
                isFlipped={isFlipped}
                zIndex={zIndex}
                front={page.front}
                back={page.back}
                onFlip={() => handleFlip(index)}
                isLeftActive={isLeftActive}
                isRightActive={isRightActive}
              />
            );
          })}
        </div>
      </div>

      {/* ────────── Navigation Controls ────────── */}
      <div className="flex flex-col items-center gap-3 mt-1">
        {/* Section Label */}
        <span className="text-xs text-gray-500 font-serif italic tracking-wide h-4">
          {PAGE_LABELS[currentView] ?? ""}
        </span>

        {/* Arrows + Dots */}
        <div className="flex items-center gap-3">
          {/* ← Prev Button */}
          <button
            onClick={goBack}
            disabled={isCover}
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-200",
              isCover
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-gray-400 text-gray-600 hover:bg-gray-100 hover:border-gray-600 active:scale-95"
            )}
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Page Dots */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalViews }).map((_, i) => (
              <button
                key={i}
                onClick={() => navigateTo(i - 1)}
                className={cn(
                  "rounded-full transition-all duration-300",
                  i === currentView
                    ? "w-5 h-2 bg-gray-700"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-500"
                )}
                aria-label={`Go to ${PAGE_LABELS[i]}`}
              />
            ))}
          </div>

          {/* → Next Button */}
          <button
            onClick={goForward}
            disabled={isEnd}
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-200",
              isEnd
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-gray-400 text-gray-600 hover:bg-gray-100 hover:border-gray-600 active:scale-95"
            )}
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Keyboard hint */}
        <p className="text-[10px] text-gray-400 font-serif italic">
          Click pages or use ← → arrow keys to navigate
        </p>
      </div>
    </>
  );
}
