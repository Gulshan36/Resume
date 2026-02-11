
"use client";

import { useState, useEffect } from "react";
import { Page } from "./Page";
import { Cover } from "./content/Cover";
// ... content imports
import { Intro } from "./content/Intro";
import { Qualifications } from "./content/Qualifications";
import { Skills } from "./content/Skills";
import { Projects } from "./content/Projects";
import { About } from "./content/About";

import { cn } from "@/lib/utils";

export function Book() {
  const [flippedIndex, setFlippedIndex] = useState<number>(-1);
  const [zBoostIndex, setZBoostIndex] = useState<number | null>(null);

  const pages = [
    { front: <Cover />, back: <Intro /> },
    { front: <Qualifications />, back: <Skills /> },
    { front: <Projects />, back: <About /> },
  ];

  // Intro animation interaction logic removed for simplicity as per updates

  const handleFlip = (index: number) => {
    // Determine which page is effectively moving (the one changing state)
    // If going forward (Index > Flipped), we are flipping "Index".
    // If going backward (Index <= Flipped), we are flipping "Index"?? No.
    // Wait.
    // If current Flipped is -1. Click 0. moving page is 0.
    // If current Flipped is 0. Click 0. moving page is 0 (flipping back).
    
    // We are clicking "index". That IS the page we are interacting with.
    // So "index" is always the one that flips?
    // Not necessarily. 
    // If I click the LEFT stack (index <= flippedIndex), I flip THAT page back to right.
    // If I click the RIGHT stack (index > flippedIndex), I flip THAT page to left.
    // Correct.
    
    const movingPage = index;
    setZBoostIndex(movingPage);
    
    if (index <= flippedIndex) {
      setFlippedIndex(index - 1);
    } else {
      setFlippedIndex(index);
    }

    // Clear boost after animation
    setTimeout(() => {
      setZBoostIndex(null);
    }, 750);
  };

  // Calculate center shift:
  // Closed (Index -1): Translate 0
  // End (Index pages.length-1): Translate 100% (or specific value)
  // Open (Middle): Translate 50%
  // We use CSS transform for smooth sliding.
  
  const isCover = flippedIndex === -1;
  const isEnd = flippedIndex === pages.length - 1;
  
  // Logic: 
  // If Cover: Center Content (No Shift)
  // If Open: Shift Right to center the spine (50%)
  // If End: Shift Right more?? No, if end, we want Back Cover centered. Back cover is on LEFT of spine.
  // So we need to shift spine to Right by 100%?
  // Let's stick to simple "Center Spine when Open" for now as per user request.
  
  return (
    <div 
      className={cn(
        "relative perspective-1000 mx-auto my-6 md:my-10 transition-transform duration-700 ease-in-out",
        "w-[380px] md:w-[500px] h-[550px] md:h-[700px]",
        isEnd ? "md:translate-x-[100%]" : (!isCover && "md:translate-x-[50%]")
      )}
    >
      <div className="relative w-full h-full preserve-3d">
        {pages.map((page, index) => {
           // We want the pages to stack properly.
           // When NOT flipped (right side): 
           // Index 0 is bottom? No, Index 0 is Front Cover. It should be on TOP.
           // So for right stack: Z = (total - index).
           // When FLIPPED (left side):
           // Index 0 is on BOTTOM (under Index 1). 
           // Wait, if I flip Cover (0) to left, then flip Intro (1) to left.
           // Intro sits ON TOP of Cover. So Higher Index = Higher Z.
           
           const isFlipped = index <= flippedIndex;
           let zIndex = 0;
           
           if (index === zBoostIndex) {
             zIndex = 100; // Always top during animation
           } else if (isFlipped) {
             zIndex = index;
           } else {
             zIndex = pages.length - index;
           }

           return (
             <Page
               key={index}
               index={index}
               isFlipped={isFlipped}
               zIndex={zIndex}
               front={page.front}
               back={page.back}
               onFlip={() => handleFlip(index)}
             />
           );
        })}
      </div>
      
      {/* Book Cover / Spine Simulation when closed? */}
      {/* Optional: Add a subtle shadow or desk texture behind */}
    </div>
  );
}
