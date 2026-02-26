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
    <section ref={sectionRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Image with Parallax & Next/Image optimization */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-10" />
        <img
          ref={heroImgRef}
          src="/images/office/office.jpg"
          className="w-full h-[120%] object-cover object-center opacity-0 scale-110 will-change-transform"
          alt="Agrawal Law Chambers Office"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col justify-center h-full">
        <div ref={textContainerRef} className="max-w-5xl mx-auto text-center w-full mt-12">
          
          <div className="inline-flex items-center gap-4 mb-8 fade-in-up opacity-0 translate-y-4">
            <div className="h-[1px] w-8 bg-bronze/50"></div>
            <p className="text-bronze text-sm font-medium uppercase tracking-[0.3em]">
              Established 2023 — Jaipur
            </p>
            <div className="h-[1px] w-8 bg-bronze/50"></div>
          </div>

          <div className="perspective-1000 mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight">
              <span className="block overflow-hidden pb-2">
                <span className="block stagger-reveal translate-y-[100%] opacity-0 md:rotate-x-[20deg]">
                  Mastering the
                </span>
              </span>
              <span className="block overflow-hidden py-2">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-bronze via-white/90 to-bronze stagger-reveal translate-y-[100%] opacity-0 md:rotate-x-[20deg] italic pr-4">
                  Art of Law
                </span>
              </span>
            </h1>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-slate/80 font-light leading-relaxed fade-in-up opacity-0 translate-y-4">
              We provide unparalleled strategic legal counsel, navigating complex regulatory landscapes with precision, innovation, and unwavering discretion.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 fade-in-up opacity-0 translate-y-4">
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-white text-black text-sm uppercase tracking-widest font-bold overflow-hidden transition-all duration-500 hover:scale-105 rounded-none flex items-center gap-3"
            >
              <div className="absolute inset-0 bg-bronze transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Consult With Us</span>
              <ArrowRight weight="bold" className="relative z-10 transition-all duration-500 group-hover:text-white group-hover:translate-x-1" />
            </Link>
            
            <Link
              href="/practice"
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-white/70 hover:text-white transition-colors duration-300"
            >
              <span className="relative">
                Explore Expertise
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-bronze transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 fade-in-up opacity-0">
        <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-medium">Discover</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="w-full h-1/2 bg-bronze absolute top-0 left-0 animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
}
