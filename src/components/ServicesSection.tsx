"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Legal Advisory & Consultation",
        img: "/images/services/Legal Advisory & Consultation.png"
    },
    {
        title: "Litigation & Court Representation",
        img: "/images/services/Litigation & Court Representation.png"
    },
    {
        title: "Legal Drafting – Contracts, Wills, MOUs & Agreements",
        img: "/images/services/Legal Drafting – Contracts, Wills, MOUs & Agreements.png"
    },
    {
        title: "Dispute Resolution & Settlement",
        img: "/images/services/Dispute Resolution & Settlement.png"
    },
    {
        title: "Compliance & Regulatory Assistance",
        img: "/images/services/Compliance & Regulatory Assistance.png"
    },
];

export default function ServicesSection() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".service-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".services-grid",
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
        <section ref={containerRef} className="py-24 md:py-32 px-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <p className="text-bronze text-sm font-medium uppercase tracking-[0.3em] mb-4 text-center md:text-left">What We Do</p>
                        <h2 className="text-4xl md:text-6xl font-serif text-white font-light text-center md:text-left">Services We Provide</h2>
                    </div>
                    <p className="text-slate font-light max-w-lg text-center md:text-left">
                        A trusted place for all your legal needs. Reliable and comprehensive legal services tailored to your needs. From advice to representation, we offer clear guidance and practical solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 services-grid">
                    {services.slice(0, 3).map((service, index) => (
                        <Link
                            href="/services"
                            key={index}
                            className="group flex flex-col overflow-hidden border border-white/10 service-card opacity-0 bg-white/5 cursor-pointer hover:border-bronze/50 transition-colors duration-500"
                        >
                            {/* Image */}
                            <div className="h-56 overflow-hidden">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-all duration-700 grayscale hover:grayscale-0"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col justify-start flex-grow">
                                <h3 className="text-2xl text-white font-medium font-serif group-hover:text-bronze transition-colors duration-300">
                                    {service.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <Link
                        href="/services"
                        className="group flex items-center gap-3 text-white border border-white/20 px-8 py-4 hover:border-bronze hover:text-bronze transition-all duration-300 uppercase tracking-widest text-xs font-bold"
                    >
                        View All Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
