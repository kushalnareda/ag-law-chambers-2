"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LoadingScreen() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(barRef.current, {
      x: "0%",
      duration: 1,
      ease: "power2.inOut",
    }).to(overlayRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "power4.inOut",
      delay: 0.2,
    });
  }, []);

  return (
    <div ref={overlayRef} className="loader-overlay">
      <div className="flex flex-col items-center">
        <span className="font-serif text-3xl italic text-bronze mb-2">
          AG Law Chambers
        </span>
        <div className="w-24 h-px bg-white/20 relative overflow-hidden">
          <div
            ref={barRef}
            className="absolute inset-0 bg-bronze w-full h-full -translate-x-full"
          />
        </div>
      </div>
    </div>
  );
}
