"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const OFFICE_IMAGES = [
  "/images/office-slideshow/slide-1.jpg",
  "/images/office-slideshow/slide-2.jpg",
  "/images/office-slideshow/slide-3.jpg",
  "/images/office-slideshow/slide-4.jpg",
  "/images/office-slideshow/slide-5.jpg",
  "/images/office-slideshow/slide-6.jpg",
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % OFFICE_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      gsap.to(".fade-in-up", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2
      });

      // Scroll Reveal elements
      gsap.utils.toArray(".scroll-reveal").forEach((element: any) => {
        gsap.fromTo(element,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
            }
          }
        );
      });

      // Simple Parallax for Images
      gsap.utils.toArray(".parallax-img").forEach((img: any) => {
        gsap.to(img, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-navy text-white font-light">
      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-32 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 mb-8 fade-in-up opacity-0 translate-y-8">
              <div className="h-[1px] w-8 bg-bronze/50"></div>
              <p className="text-bronze text-sm font-medium uppercase tracking-[0.3em]">
                Who We Are
              </p>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8 fade-in-up opacity-0 translate-y-8">
              Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-bronze to-white/80 italic">Excellence.</span><br />
              Defined by Results.
            </h1>
          </div>
        </div>
      </section>

      {/* The Firm Section */}
      <section className="py-20 px-6 bg-white/5 border-y border-white/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 scroll-reveal">
              <h2 className="text-3xl md:text-5xl font-serif mb-8 text-white font-light tracking-wide">The Firm</h2>
              <div className="space-y-6 text-slate font-light leading-relaxed text-lg">
                <p>
                  Ag Law Chambers is a premier law firm based in Jaipur, committed to a client-centric approach and dedicated to providing the best possible legal solutions.
                </p>
                <p>
                  Led by a team of nationally trained legal professionals, the firm works closely with clients, including prominent corporations, institutions, and private individuals, to provide tailored legal solutions across diverse fields of law.
                </p>
                <p>
                  Our expertise extends to providing legal solutions that meet the evolving needs of our clients, including but not limited to <strong className="font-medium text-white font-light">Criminal Law, Family and Writ Matters, Civil Litigation, Corporate and Commercial Law, Property Disputes, Labour and Employment Law, Intellectual Property, Taxation, Environmental Law, and Arbitration and Regulatory Compliance</strong>.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 h-[55vh] lg:h-[75vh] w-full relative overflow-hidden scroll-reveal">
              {/* Crossfade Slideshow */}
              {OFFICE_IMAGES.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Office ${i + 1}`}
                  loading="eager"
                  {...(i === 0 ? { fetchPriority: "high" } : {})}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000"
                  style={{ opacity: i === activeSlide ? 1 : 0 }}
                />
              ))}
              {/* Gradient fade edges */}
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0b1120]/70 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b1120]/70 to-transparent z-10 pointer-events-none" />
              {/* Dot indicators */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {OFFICE_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === activeSlide ? "bg-bronze w-4" : "bg-white/30" }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 px-6 bg-white/[0.02] border-y border-white/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start scroll-reveal">

            {/* Left — Label + Heading */}
            <div className="lg:col-span-4">
              <p className="text-bronze text-sm font-medium uppercase tracking-[0.3em] mb-6">Our Core</p>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight text-white font-light">
                You Are Not Alone.
              </h2>
              <div className="w-10 h-[1px] bg-bronze mt-8"></div>
            </div>

            {/* Right — Body */}
            <div className="lg:col-span-8 space-y-6 text-slate font-light leading-relaxed text-lg">
              <p>
                A legal problem can be one of the most challenging times in your life. Our firm is here to help — you are not alone. Our goal is to provide peace of mind during this difficult time, knowing that a dedicated team of advocates stands firmly by your side.
              </p>
              <p>
                Let our experienced attorneys and professional team give your case the careful attention it deserves. It is truly rewarding for us to serve our clients, and we look forward to speaking with you about how we can help you navigate your legal journey.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Break Image */}
      <section className="h-[60vh] md:h-[80vh] w-full relative overflow-hidden">
        <img
          src="/images/office/office_workspace.jpg"
          alt="Office Workspace"
          className="parallax-img w-full h-[130%] object-cover absolute top-[-15%] left-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-serif italic text-white font-light px-6 text-center max-w-4xl scroll-reveal">
            "Integrity in counsel. Ferocity in advocacy."
          </h2>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-24 px-6 text-center scroll-reveal">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-slate font-light mb-8 max-w-xl">
            Ready to discuss your legal requirements? Our team is available for confidential consultations.
          </p>
          <div className="flex gap-6">
            <Link
              href="/contact"
              className="px-8 py-4 bg-bronze text-navy text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors duration-300 flex items-center gap-3"
            >
              Contact Us <ArrowRight weight="bold" />
            </Link>
          </div>

          <div className="mt-20 pt-8 border-t border-white/10 w-full max-w-sm">
            <Link
              href="/"
              className="text-xs uppercase tracking-widest text-bronze hover:text-white font-light transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft size={14} /> Return to Homepage
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
