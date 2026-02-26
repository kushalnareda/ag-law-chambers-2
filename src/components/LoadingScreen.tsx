"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function LoadingScreen() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const tl = gsap.timeline();

    // Initial fade in for text and line
    tl.fromTo([textRef.current, lineRef.current],
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    )
      // Hold for a moment to let the user read it
      .to({}, { duration: 0.8 })
      // Fade out everything smoothly and move overlay up
      .to([textRef.current, lineRef.current], {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
      })
      .to(overlayRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
        pointerEvents: "none",
      }, "-=0.2");

  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[9999] bg-navy flex items-center justify-center pointer-events-auto">
      <div className="flex flex-col items-center">
        <span
          ref={textRef}
          className="font-serif text-[1.6rem] md:text-3xl italic text-bronze opacity-0"
        >
          AG Law Chambers
        </span>
        <div
          ref={lineRef}
          className="w-16 h-[1px] bg-bronze/30 mt-3 opacity-0"
        />
      </div>
    </div>
  );
}
