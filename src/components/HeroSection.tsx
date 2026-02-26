"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroImgRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.to(heroImgRef.current, {
        scale: 1,
        opacity: 0.7,
        duration: 2,
        ease: "power2.inOut",
      })
        .to(".stagger-reveal", {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          rotationX: 0,
          transformOrigin: "0% 50% -50",
        }, "-=1.5")
        .to(".fade-in-up", {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
        }, "-=0.8");

      // Parallax Effect
      gsap.to(heroImgRef.current, {
        yPercent: 15,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Subtle floating animation for text container
      gsap.to(textContainerRef.current, {
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen min-h-[850px] w-full flex items-center justify-center overflow-hidden bg-black pt-24 pb-12">
      {/* Background Image with Parallax & Next/Image optimization */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/70 to-navy/95 z-10" />
        <img
          ref={heroImgRef}
          src="/images/office/hero-image-2.jpg"
          className="w-full h-[120%] object-cover object-center opacity-0 scale-110 will-change-transform"
          alt="AG Law Chambers Office"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col justify-center h-full pb-32">
        <div ref={textContainerRef} className="max-w-5xl mx-auto text-center w-full">

          <div className="inline-flex items-center gap-4 mb-8 fade-in-up opacity-0 translate-y-4">
            <div className="h-[1px] w-8 bg-bronze/50"></div>
            <p className="text-bronze text-lg font-medium uppercase tracking-[0.3em]">
              Welcome to
            </p>
            <div className="h-[1px] w-8 bg-bronze/50"></div>
          </div>

          <div className="perspective-1000 mb-6 drop-shadow-2xl">
            <h1 className="flex flex-col items-center justify-center font-serif leading-tight">
              <span className="block overflow-hidden pb-4">
                <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-medium uppercase text-white drop-shadow-xl stagger-reveal translate-y-[100%] opacity-0 md:rotate-x-[20deg] tracking-tight whitespace-normal sm:whitespace-nowrap text-center">
                  AG Law Chambers
                </span>
              </span>
              <span className="block overflow-hidden pt-4 pb-8 -mb-6">
                <span className="block text-xl md:text-2xl lg:text-3xl italic uppercase text-bronze drop-shadow-lg stagger-reveal translate-y-[100%] opacity-0 md:rotate-x-[20deg] text-center">
                  Advocates & Legal Consultants
                </span>
              </span>
            </h1>
          </div>

          <div className="max-w-2xl mx-auto mb-16">
            <p className="text-lg md:text-xl text-slate font-normal leading-relaxed fade-in-up opacity-0 translate-y-4">
              Your trusted partner for effective solutions to all your legal problems.
            </p>
          </div>

          <div className="relative z-30 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 fade-in-up opacity-0 translate-y-4">
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-white text-black text-sm uppercase tracking-widest font-bold overflow-hidden transition-all duration-500 hover:scale-105 rounded-none flex items-center justify-center gap-3 w-full sm:w-auto min-w-[220px]"
            >
              <div className="absolute inset-0 bg-bronze transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white font-light">Consult With Us</span>
              <ArrowRight weight="bold" className="relative z-10 transition-all duration-500 group-hover:text-white font-light group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 fade-in-up opacity-0">
        <span className="text-[10px] text-white font-light uppercase tracking-[0.2em] font-medium">Discover</span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <div className="w-full h-1/2 bg-bronze absolute top-0 left-0 animate-scroll-down"></div>
        </div>
      </div>
    </section >
  );
}
