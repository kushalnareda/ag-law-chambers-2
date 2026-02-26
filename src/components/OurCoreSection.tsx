"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurCoreSection() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
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
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 md:py-32 px-6 bg-white/[0.02] border-y border-white/20">
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
    );
}
