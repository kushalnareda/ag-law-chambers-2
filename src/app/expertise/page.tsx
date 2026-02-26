"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const areas = [
  {
    title: "Criminal Law",
    desc: "Strong legal representation in criminal defense, prosecution and trial matters.",
    img: "/images/practice-areas/Criminal law.png",
  },
  {
    title: "White Collar Crimes",
    desc: "Strategic defense in financial fraud, corruption and economic offence cases.",
    img: "/images/practice-areas/White collar crimes.png",
  },
  {
    title: "Matrimonial Matters",
    desc: "Effective legal solutions in divorce, custody, maintenance and family disputes.",
    img: "/images/practice-areas/Matrimonial.png",
  },
  {
    title: "Service & Labour Law",
    desc: "Representation in employment disputes, disciplinary actions and labour proceedings.",
    img: "/images/practice-areas/Labour and service.png",
  },
  {
    title: "Constitutional Law",
    desc: "Protecting fundamental rights through writ petitions and constitutional remedies.",
    img: "/images/practice-areas/Constitutional.png",
  },
  {
    title: "Cyber & Technical Law",
    desc: "Legal assistance in cybercrime, digital evidence and technology-related disputes.",
    img: "/images/practice-areas/Cyber and technical law.png",
  },
  {
    title: "Consumer Law",
    desc: "Safeguarding consumer rights against unfair trade practices and service deficiencies.",
    img: "/images/practice-areas/Consumer law.png",
  },
  {
    title: "Civil & Contractual Matters",
    desc: "Representation in property disputes, recovery suits and contractual enforcement.",
    img: "/images/practice-areas/Civil Law.png",
  },
  {
    title: "Company Matters",
    desc: "Advisory and litigation in corporate governance and shareholder disputes.",
    img: "/images/practice-areas/Company Law.png",
  },
  {
    title: "Banking & Finance",
    desc: "Handling financial disputes, loan recovery and regulatory proceedings.",
    img: "/images/practice-areas/Banking and Finance.png",
  },
  {
    title: "Taxation",
    desc: "Representation in direct and indirect tax disputes and compliance matters.",
    img: "/images/practice-areas/Taxation Law.png",
  },
  {
    title: "Sports Law",
    desc: "Legal advisory in athlete contracts, disciplinary actions and regulatory issues.",
    img: "/images/practice-areas/Sports Law.png",
  }
];

export default function PracticePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      gsap.to(".fade-in-up", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
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

      // Practice Area Cards Stagger
      gsap.fromTo(".practice-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".practice-grid",
            start: "top 80%",
          }
        }
      );

      // Mobile color transition on scroll
      const mm = gsap.matchMedia();
      mm.add("(max-width: 768px)", () => {
        gsap.utils.toArray(".grayscale").forEach((img: any) => {
          ScrollTrigger.create({
            trigger: img,
            start: "top 60%",
            end: "bottom 40%",
            toggleClass: { targets: img, className: "!grayscale-0" },
          });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-navy text-white font-light selection:bg-bronze selection:text-navy">
      {/* Practice Areas Grid */}
      <section className="pt-40 pb-24 md:pt-52 md:pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bronze/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 scroll-reveal gap-8">
            <div>
              <p className="text-bronze text-sm font-medium uppercase tracking-[0.3em] mb-4">Core Competencies</p>
              <h2 className="text-4xl md:text-6xl font-serif">Practice Areas</h2>
            </div>
            <p className="text-slate font-light max-w-sm">
              Explore our primary areas of focus where we have built a legacy of authoritative precedent and success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 practice-grid">
            {areas.map((area, index) => (
              <div
                key={area.title}
                className="group flex flex-col bg-white/5 border border-white/10 hover:border-bronze/50 transition-all duration-500 overflow-hidden practice-card opacity-0"
              >
                {/* Image Section */}
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={area.img}
                    alt={area.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Number Overlay */}
                  <div className="absolute top-6 right-6 text-white/20 font-serif text-4xl group-hover:text-bronze/40 transition-colors duration-500 select-none">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl text-white font-medium font-serif mb-4 group-hover:text-bronze transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-slate font-light leading-relaxed text-base">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-24 px-6 bg-bronze text-navy scroll-reveal">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Require Specialized Counsel?</h2>
            <p className="text-navy/80 text-lg">
              Engage with our senior partners to formulate a decisive strategy tailored to your specific legal challenges.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto flex flex-col items-center md:items-end gap-6">
            <Link
              href="/contact"
              className="px-10 py-5 bg-navy text-white font-light text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-navy transition-all duration-300 flex items-center justify-center gap-3 w-full md:w-auto"
            >
              Consult With Us <ArrowRight weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
