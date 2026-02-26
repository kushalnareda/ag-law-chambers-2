"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FirmIntro() {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target") || "0");
      ScrollTrigger.create({
        trigger: counter,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(counter, {
            innerHTML: target,
            duration: 2,
            snap: { innerHTML: 1 },
            ease: "power2.out",
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="py-32 bg-navy relative">
      <div className="container mx-auto px-6 grid md:grid-cols-12 gap-16 items-start">
        <div className="md:col-span-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-bronze mb-4">
            The Firm
          </h2>
          <div className="w-full h-px bg-white/10 mb-8" />
          <div className="stats-grid grid grid-cols-2 gap-8">
            <div>
              <span
                className="block text-4xl font-serif text-white mb-1 counter"
                data-target="25"
              >
                0
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate">
                Years Experience
              </span>
            </div>
            <div>
              <span
                className="block text-4xl font-serif text-white mb-1 counter"
                data-target="150"
              >
                0
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate">
                Corporate Partners
              </span>
            </div>
          </div>
        </div>

        <div className="md:col-span-8">
          <h3 className="text-3xl md:text-5xl font-serif leading-tight mb-8 text-white/90">
            &ldquo;We do not merely interpret the law;
            <br /> we{" "}
            <span className="italic text-bronze">architect solutions</span>.&rdquo;
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-slate font-light leading-relaxed">
            <p>
              Founded on the principles of rigorous analysis and unwavering
              ethics, AG Law Chambers has established itself as a pillar of the
              legal community in New Delhi. We believe that effective
              representation requires not just knowledge of the statute, but an
              understanding of the business environment.
            </p>
            <p>
              Our firm specializes in high-stakes litigation and complex
              corporate structuring, offering a boutique experience with the
              capabilities of a large multinational practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
