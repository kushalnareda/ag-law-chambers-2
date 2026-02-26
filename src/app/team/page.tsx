"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ───────────────────────────────────────────────── */

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  img: string | null;
  initials: string | null;
  bio: string;
  education: string;
}

const leader: TeamMember = {
  name: "Ashish Gausinga",
  role: "Managing Director",
  specialty: "Criminal Law & Litigation Strategy",
  img: "/team/ashish-gausinga.jpg",
  initials: null,
  bio: "Alumnus of National Law University, Patiala, and holds an LL.M. in Criminal Law. He is also NET qualified, reflecting strong academic credentials alongside professional competence. As the Managing Director, he oversees litigation strategy, complex criminal matters, and institutional representations.",
  education: "NLU Patiala · LL.M. Criminal Law · NET Qualified",
};

const associates: TeamMember[] = [
  {
    name: "Ikhlash Mohd.",
    role: "Senior Associate",
    specialty: "Criminal Law",
    img: "/team/ikhlash-mohd.jpg",
    initials: null,
    bio: "Holds a B.A. LL.B. and an LL.M., with over three years of hands-on experience practicing before Sessions Courts as well as High Courts. Specializes exclusively in criminal law.",
    education: "B.A. LL.B. · LL.M.",
  },
  {
    name: "Kumar Byadwal",
    role: "Associate",
    specialty: "General Practice",
    img: "/team/kumar-byadwal.jpg",
    initials: null,
    bio: "A dedicated member of the firm's associate team, contributing to a broad range of legal matters handled by AG Law Chambers.",
    education: "",
  },
  {
    name: "Prapti Meena",
    role: "Associate",
    specialty: "Family & Consumer Law",
    img: "/team/prapti-meena.jpg",
    initials: null,
    bio: "Alumna of Manipal University Jaipur. Core areas of practice include family law disputes and consumer protection matters.",
    education: "Manipal University Jaipur",
  },
  {
    name: "Sanskar Meena",
    role: "Associate",
    specialty: "Commercial Agreements",
    img: "/team/sanskar-meena.jpg",
    initials: null,
    bio: "Alumnus of National Law University, Patiala, holding an LL.M. Focuses primarily on contract drafting and negotiation of legal documents.",
    education: "NLU Patiala · LL.M.",
  },
  {
    name: "Navditya Lalsotia",
    role: "Associate",
    specialty: "Property & Revenue",
    img: null,
    initials: "NL",
    bio: "Alumnus of National Law University, Patiala, holding an LL.M. in International Law. Regularly handles property disputes and revenue matters.",
    education: "NLU Patiala · LL.M. International Law",
  },
  {
    name: "Yash Sukhwal",
    role: "Associate",
    specialty: "ADR & Corporate",
    img: null,
    initials: "YS",
    bio: "Alumnus of KLE Bangalore. Specializes in Alternate Dispute Resolution and corporate governance. Experienced in fintech compliance.",
    education: "KLE Bangalore",
  },
];

/* ─── Component ──────────────────────────────────────────── */

export default function TeamPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Page header line reveals
      gsap.to(".team-line-reveal", {
        y: "0%",
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.to(".team-reveal-fade", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
      });

      // Leader hero entrance
      if (heroRef.current) {
        gsap.from(heroRef.current, {
          opacity: 0,
          y: 60,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }

      // Associate cards stagger
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".team-card");
        gsap.from(cards, {
          opacity: 0,
          y: 80,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }

      // CTA entrance
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  /* ─── Render ─────────────────────────────────────────── */

  return (
    <section ref={sectionRef}>
      {/* ===== PAGE HEADER ===== */}
      <div className="min-h-[50vh] flex items-end pb-16 pt-32 bg-navy relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl">
            <p className="text-bronze text-xs font-bold uppercase tracking-[0.2em] mb-6 team-reveal-fade opacity-0">
              The Minds Behind the Firm
            </p>
            <div className="line-wrapper mb-2">
              <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] team-line-reveal translate-y-full">
                Our Team
              </h1>
            </div>
            <div className="line-wrapper max-w-2xl mt-6">
              <p className="text-lg text-slate font-light leading-relaxed team-line-reveal translate-y-full">
                A collective of nationally trained legal professionals, united
                by academic excellence and a commitment to strategic advocacy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MANAGING DIRECTOR HERO ===== */}
      <div className="py-24 bg-navy border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-bronze text-xs font-bold uppercase tracking-widest mb-12">
              Leadership
            </p>

            <div
              ref={heroRef}
              className="grid md:grid-cols-12 gap-0 border border-white/10 overflow-hidden"
            >
              {/* Photo */}
              <div className="md:col-span-5 relative group">
                <div className="aspect-[3/4] md:aspect-auto md:h-full overflow-hidden">
                  <img
                    src={leader.img!}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="md:col-span-7 p-10 md:p-16 flex flex-col justify-center bg-charcoal/30">
                <p className="text-xs uppercase tracking-widest text-bronze mb-4 font-bold">
                  {leader.role}
                </p>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                  {leader.name}
                </h2>
                <div className="w-16 h-px bg-bronze/50 mb-6" />
                <p className="text-slate font-light leading-relaxed mb-6">
                  {leader.bio}
                </p>
                {leader.education && (
                  <p className="text-xs text-bronze/70 uppercase tracking-widest mb-8">
                    {leader.education}
                  </p>
                )}
                <div>
                  <span className="inline-block px-4 py-1.5 border border-bronze/30 text-bronze text-[10px] uppercase tracking-widest">
                    {leader.specialty}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== ASSOCIATES GRID ===== */}
      <div className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-4">
              <h3 className="text-2xl font-serif text-bronze">Associates</h3>
              <span className="text-xs text-slate uppercase tracking-widest">
                {associates.length} Members
              </span>
            </div>

            <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {associates.map((a) => (
                <div key={a.name} className="team-card group cursor-default">
                  {/* Photo / Placeholder */}
                  <div className="aspect-[3/4] overflow-hidden mb-6 relative bg-charcoal">
                    {a.img ? (
                      <>
                        <img
                          src={a.img}
                          alt={a.name}
                          className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        {/* Bronze tint on hover */}
                        <div className="absolute inset-0 bg-bronze/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy via-charcoal to-navy relative overflow-hidden">
                        {/* Diagonal stripe pattern */}
                        <div
                          className="absolute inset-0 opacity-[0.03]"
                          style={{
                            backgroundImage:
                              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(184,158,114,0.3) 35px, rgba(184,158,114,0.3) 36px)",
                          }}
                        />
                        {/* Inner border frame */}
                        <div className="absolute inset-4 border border-white/[0.06]" />
                        {/* Initials */}
                        <span className="text-6xl font-serif text-bronze/30 group-hover:text-bronze/50 transition-colors duration-500 relative z-10">
                          {a.initials}
                        </span>
                      </div>
                    )}

                    {/* Bio overlay on hover */}
                    <div className="absolute inset-0 bg-navy/90 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                      <p className="text-sm text-slate font-light leading-relaxed">
                        {a.bio}
                      </p>
                    </div>
                  </div>

                  {/* Name & role */}
                  <h4 className="text-xl font-serif text-white group-hover:text-bronze transition-colors duration-300">
                    {a.name}
                  </h4>
                  <p className="text-[10px] uppercase tracking-widest text-bronze/70 mt-1">
                    {a.role}
                  </p>

                  {/* Specialty tag */}
                  <div className="mt-3">
                    <span className="inline-block px-3 py-1 border border-white/10 text-slate text-[10px] uppercase tracking-widest group-hover:border-bronze/30 group-hover:text-bronze transition-colors duration-300">
                      {a.specialty}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM CTA ===== */}
      <div className="py-24 bg-charcoal border-t border-white/10">
        <div className="container mx-auto px-6">
          <div ref={ctaRef} className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Work With Us
            </h3>
            <p className="text-slate font-light mb-10 max-w-lg mx-auto">
              We are always looking for exceptional legal minds to join our
              practice. Explore career opportunities or reach out directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/careers"
                className="btn-hover inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-sm uppercase tracking-widest font-medium text-white"
              >
                Join Our Team <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-bronze text-navy text-sm uppercase tracking-widest font-bold hover:bg-white transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BACK LINK + FOOTER ===== */}
      <div className="bg-navy">
        <div className="container mx-auto px-6">
          <div className="py-16 border-t border-white/10">
            <Link
              href="/"
              className="text-xs uppercase tracking-widest text-bronze hover:text-white transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
