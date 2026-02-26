"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export default function OurFirmSection() {
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
        <section ref={containerRef} className="py-20 px-6 bg-white/5 border-y border-white/20">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="order-2 lg:order-1 scroll-reveal">
                        <h2 className="text-3xl md:text-5xl font-serif mb-8 text-white font-light tracking-wide">About AG Law Chambers</h2>
                        <div className="space-y-6 text-slate font-light leading-relaxed text-lg">
                            <p>
                                Ag Law Chambers is a premier law firm based in Jaipur, committed to a client-centric approach and dedicated to providing the best possible legal solutions.
                            </p>
                            <p>
                                Led by a team of nationally trained legal professionals, the firm works closely with clients, including prominent corporations, institutions, and private individuals, to provide tailored legal solutions across diverse fields of law.
                            </p>
                            <p>
                                We provide comprehensive legal consultation and strong courtroom representation across a wide range of practice areas. Our team advises clients at every stage — from initial legal strategy and documentation to full representation before Trial Courts, Tribunals, Hon'ble High Courts, and The Hon'ble Supreme Court of India.
                            </p>
                            <div className="mt-10 pt-6">
                                <Link
                                    href="/expertise"
                                    className="group relative px-8 py-4 bg-transparent border border-bronze text-white text-sm uppercase tracking-widest font-bold overflow-hidden transition-all duration-500 rounded-none inline-flex items-center justify-center gap-3"
                                >
                                    <div className="absolute inset-0 bg-bronze transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
                                    <span className="relative z-10 transition-colors duration-500 group-hover:text-navy">View Our Expertise</span>
                                    <ArrowRight weight="bold" className="relative z-10 transition-all duration-500 group-hover:text-navy group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 h-[55vh] lg:h-[75vh] w-full relative overflow-hidden scroll-reveal shadow-2xl group cursor-pointer">
                        <img
                            src="/images/office/office_main_room_v2_compressed.jpg"
                            alt="About AG Law Chambers"
                            className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        {/* Gradient fade edges */}
                        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0b1120]/30 to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b1120]/30 to-transparent z-10 pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}
