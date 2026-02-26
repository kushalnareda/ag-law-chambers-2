"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IntegritySection() {
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
        <section ref={containerRef} className="h-[60vh] md:h-[80vh] w-full relative overflow-hidden">
            <img
                src="/images/office/office_workspace.jpg"
                alt="Office Workspace"
                className="parallax-img w-full h-[130%] object-cover absolute top-[-15%] left-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-3xl md:text-4xl font-serif text-white font-normal px-8 text-center max-w-5xl scroll-reveal leading-[1.8] tracking-wide opacity-0 drop-shadow-lg flex flex-col items-center">
                    <span>"विधि केवल नियम नहीं, बल्कि धर्म का जीवंत स्वरूप है</span>
                    <span>— जो अन्याय के अंधकार में प्रकाश बनकर खड़ा होता है।"</span>
                </h2>
            </div>
        </section>
    );
}
