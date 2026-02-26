"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const featured = [
  {
    name: "Ashish Gausinga",
    role: "Founder",
    img: "/team/ashish-gausinga.jpg",
  },
  {
    name: "Aman Singh",
    role: "Partner",
    img: "/team/aman_singh.png",
  },
  {
    name: "Ikhlash Mohd.",
    role: "Senior Associate – Criminal Law",
    img: "/team/ikhlash-mohd.jpg",
  },
];

export default function TeamPreview() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    <section ref={containerRef} className="py-32 bg-navy">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-sm font-bold uppercase tracking-widest text-bronze mb-4">
            Leadership
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white font-light">Our Team</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {featured.map((p) => (
            <Link key={p.name} href="/team" className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-bronze/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  src={p.img}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                  alt={p.name}
                />
              </div>
              <h4 className="text-2xl font-serif text-white font-light">{p.name}</h4>
              <p className="text-xs uppercase tracking-widest text-bronze mt-1">
                {p.role}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/team"
            className="text-xs uppercase tracking-widest text-slate font-light hover:text-white font-light border-b border-transparent hover:border-white pb-1 transition-all"
          >
            View Full Team →
          </Link>
        </div>
      </div>
    </section>
  );
}
