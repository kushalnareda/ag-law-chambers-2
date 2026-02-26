"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Legal Advisory & Consultation",
        desc: "Providing strategic insights across diverse legal matters to safeguard individual and corporate interests.",
        img: "/images/services/Legal Advisory & Consultation.png",
    },
    {
        title: "Litigation & Court Representation",
        desc: "Vigorous trial advocacy and dispute representation across various legal forums and courts.",
        img: "/images/services/Litigation & Court Representation.png",
    },
    {
        title: "Legal Drafting – Contracts, Wills, MOUs & Agreements",
        desc: "Meticulous documentation formatting for agreements, testamentary dispositions, and critical business MOUs.",
        img: "/images/services/Legal Drafting – Contracts, Wills, MOUs & Agreements.png",
    },
    {
        title: "Dispute Resolution & Settlement",
        desc: "Constructive negotiations and alternative dispute settlement mechanisms for swift and fair resolution.",
        img: "/images/services/Dispute Resolution & Settlement.png",
    },
    {
        title: "Compliance & Regulatory Assistance",
        desc: "Ensuring holistic alignment with current regulatory frameworks, mitigating institutional legal risks.",
        img: "/images/services/Compliance & Regulatory Assistance.png",
    },
];

export default function ServicesPage() {
    const containerRef = useRef<HTMLDivElement>(null);

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

            // Cards Stagger
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
        <div ref={containerRef} className="min-h-screen bg-navy text-white font-light selection:bg-bronze selection:text-navy">
            {/* Services Grid */}
            <section className="pt-40 pb-24 md:pt-52 md:pb-32 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bronze/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 scroll-reveal gap-8">
                        <div>
                            <p className="text-bronze text-sm font-medium uppercase tracking-[0.3em] mb-4">What We Do</p>
                            <h2 className="text-4xl md:text-6xl font-serif">Our Services</h2>
                        </div>
                        <p className="text-slate font-light max-w-lg">
                            A trusted place for all your legal needs. Reliable and comprehensive legal services tailored to your needs. From advice to representation, we offer clear guidance and practical solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 services-grid">
                        {services.map((service, index) => (
                            <div
                                key={service.title}
                                className="group flex flex-col bg-white/5 border border-white/10 hover:border-bronze/50 transition-all duration-500 overflow-hidden service-card opacity-0"
                            >
                                {/* Image Section */}
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={service.img}
                                        alt={service.title}
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
                                        {service.title}
                                    </h3>
                                    <p className="text-slate font-light leading-relaxed text-base">
                                        {service.desc}
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
                        <h2 className="text-4xl md:text-5xl font-serif mb-6">Need Legal Intelligence?</h2>
                        <p className="text-navy/80 text-lg">
                            Contact us today to explore how our specialized suite of services can secure your objectives.
                        </p>
                    </div>
                    <div className="shrink-0 w-full md:w-auto flex flex-col items-center md:items-end gap-6">
                        <Link
                            href="/contact"
                            className="px-10 py-5 bg-navy text-white font-light text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-navy transition-all duration-300 flex items-center justify-center gap-3 w-full md:w-auto"
                        >
                            Contact Us <ArrowRight weight="bold" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
