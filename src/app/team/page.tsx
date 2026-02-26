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
  bio: string | string[];
  education: string;
}

const leader: TeamMember = {
  name: "Ashish Gausinga",
  role: "Founder",
  specialty: "Criminal Law & Litigation Strategy",
  img: "/team/ashish-gausinga.jpg",
  initials: null,
  bio: [
    "Ashish Gausinga is an alumnus of National Law University, Patiala, where he completed his B.A. LL.B., and later earned his Master's degree with specialization in Criminal Law. A backbencher in his university days who gradually developed a deep interest in the legal profession and a strong inclination toward the interpretation and understanding of law.",
    "He began his legal career at the grassroots level in trial courts, where he developed strong practical experience and a deep understanding of courtroom procedures and trial strategy. Over time, he expanded his practice to the High Court and the Supreme Court of India.",
    "He brings extensive experience and in-depth legal acumen across diverse fields of law, delivering comprehensive and strategic legal representation.",
    "Through AG Law Chambers, he is committed to providing strategic, result-oriented, and client-focused legal representation."
  ],
  education: "NLU Patiala · LL.M. Criminal Law · NET Qualified",
};

const associates: TeamMember[] = [
  {
    name: "Ikhlash Mohd.",
    role: "Senior Associate",
    specialty: "Criminal Law",
    img: "/team/ikhlash-mohd.jpg",
    initials: null,
    bio: "Ikhlash Mohd. holds a B.A. LL.B. and an LL.M., and has over three years of experience in criminal litigation before Sessions Courts and High Courts. He handles bail matters, trials, revisions and appeals with careful preparation and strong advocacy. He is known for his clear understanding of criminal procedure and evidence law.",
    education: "B.A. LL.B. · LL.M.",
  },
  {
    name: "Prapti Bagdi",
    role: "Associate",
    specialty: "Family & Consumer Law",
    img: "/team/prapti-meena.jpg",
    initials: null,
    bio: "Prapti Bagdi, a BALLB (Hons.) graduate from Manipal University Jaipur, manages family law and consumer matters. She handles matrimonial disputes, maintenance cases, child custody issues and consumer complaints. She is known for her practical approach and her ability to handle sensitive matters with clarity and care.",
    education: "Manipal University Jaipur",
  },
  {
    name: "Sanskar Meena",
    role: "Associate",
    specialty: "Contract Drafting & Commercial Agreements",
    img: "/team/sanskar-meena.jpg",
    initials: null,
    bio: "Sanskar Meena is an alumnus of National Law University, Patiala. He focuses on commercial law and contract drafting, assisting clients with preparing and reviewing agreements while also supporting litigation before High Courts and Sessions Courts. He is known for his strong research and analytical approach.",
    education: "NLU Patiala · LL.M.",
  },
  {
    name: "Navditya Lalsotia",
    role: "Associate",
    specialty: "Property & Revenue Matters",
    img: "/team/navditya_updated.jpg",
    initials: "NL",
    bio: "Navditya Lalsotia is an alumnus of NLU Patiala, holding a B.A. LL.B. (Hons.) and an LL.M. in International Law. He focuses on property and revenue matters, handling title disputes, land record issues and related civil litigation. He is known for his structured drafting and systematic approach.",
    education: "NLU Patiala · LL.M. International Law",
  },
  {
    name: "Yash Sukhwal",
    role: "Associate",
    specialty: "ADR & Corporate Governance",
    img: "/team/yash_shukla.jpg",
    initials: "YS",
    bio: "Yash Sukhwal, an alumnus of KLE Bangalore, focuses on Alternate Dispute Resolution and corporate governance. He has experience in regulatory compliance and arbitration matters, and provides practical solutions for corporate and governance-related disputes.",
    education: "KLE Bangalore",
  },
  {
    name: "Nepal Singh",
    role: "Legal Assistant",
    specialty: "Administration & Court Registry",
    img: "/team/nepal_singh_updated.png",
    initials: "NS",
    bio: "Nepal Singh manages the firm’s office administration, documentation and court registry work. He oversees case filings, record maintenance and coordination with court offices, ensuring smooth and timely handling of all procedural requirements. His efficiency and reliability make him the backbone of AG Law Chambers.",
    education: "",
  },
];

const partners: TeamMember[] = [
  {
    name: "Aman Singh",
    role: "Managing Partner",
    specialty: "",
    img: "/team/aman_singh.png",
    initials: "AS",
    bio: [
      "An alumnus of National Law University, Patiala, where he completed his BALLB (Hons.), and holds an LL.M. in Cyber Law from Hidayatullah National Law University, Raipur. He specializes in cybercrime, digital evidence, and matters under PMLA, ED, and the Prevention of Corruption Act. Combining technical expertise with strong courtroom experience, he handles complex criminal and regulatory cases with clarity, precision, and strategic insight.",
      "He leads the firm’s litigation practice across district courts throughout Rajasthan and regularly appears before the Hon’ble Rajasthan High Court."
    ],
    education: "NLU Patiala · HNLU Raipur · LL.M. Cyber Law",
  },
];

const alumni: TeamMember[] = [
  {
    name: "Kumar Byadwal",
    role: "",
    specialty: "",
    img: "/team/kumar-byadwal.jpg",
    initials: null,
    bio: "A dedicated former associate of the firm, contributing to a broad range of legal matters handled by AG Law Chambers.",
    education: "",
  },
  {
    name: "Rohit Kumar",
    role: "",
    specialty: "",
    img: "/team/rohit_kumar_new.png",
    initials: null,
    bio: "A valued former member of our team whose contributions have left a lasting positive impact.",
    education: "",
  },
  {
    name: "Nitish Kumar Joshi",
    role: "",
    specialty: "",
    img: "/team/nitesh_kumar.jpg",
    initials: null,
    bio: "A valued former member of our team whose contributions have left a lasting positive impact.",
    education: "",
  },
  {
    name: "Nikita Soni",
    role: "",
    specialty: "",
    img: "/team/nikita_joshi2.jpg",
    initials: null,
    bio: "A valued former member of our team whose contributions have left a lasting positive impact.",
    education: "",
  }
];

/* ─── Component ──────────────────────────────────────────── */

export default function TeamPage() {
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

      // Team cards stagger per grid
      gsap.utils.toArray(".team-grid").forEach((grid: any) => {
        const cards = grid.querySelectorAll(".team-card");
        gsap.fromTo(cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: grid,
              start: "top 80%",
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
    <div ref={containerRef} className="min-h-screen bg-navy text-white font-light selection:bg-bronze selection:text-navy">
      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bronze/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 mb-8 fade-in-up opacity-0 translate-y-8">
              <div className="h-[1px] w-8 bg-bronze/50"></div>
              <p className="text-bronze text-sm font-medium uppercase tracking-[0.3em]">
                The Minds Behind the Firm
              </p>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8 fade-in-up opacity-0 translate-y-8 tracking-tight">
              Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-bronze to-white/80 italic">Virtuosos.</span><br className="hidden md:block" />
              Strategic Thinkers.
            </h1>
          </div>
        </div>
      </section>

      {/* Managing Director Section */}
      <section className="py-20 md:py-32 px-6 bg-white/[0.02] border-y border-white/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">

            <div className="lg:col-span-5 relative group scroll-reveal">
              <div className="aspect-square md:aspect-[3/4] overflow-hidden border border-white/10 relative w-full max-w-lg mx-auto lg:max-w-none">
                <img
                  src={leader.img!}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-navy/20 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0"></div>
              </div>
            </div>

            <div className="lg:col-span-7 scroll-reveal">
              <h2 className="text-4xl md:text-6xl font-serif text-white font-light mb-2 tracking-wide">{leader.name}</h2>
              <p className="text-bronze text-sm uppercase tracking-widest font-medium mb-10">{leader.role}</p>

              <div className="space-y-6 text-slate font-light leading-relaxed text-lg mb-10">
                {Array.isArray(leader.bio)
                  ? leader.bio.map((p, i) => <p key={i}>{p}</p>)
                  : <p>{leader.bio}</p>}
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* Aman Singh — Managing Partner Section */}
      <section className="py-20 md:py-32 px-6 border-t border-white/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">

            <div className="lg:col-span-7 order-2 lg:order-1 scroll-reveal">
              <h2 className="text-4xl md:text-6xl font-serif text-white font-light mb-2 tracking-wide">{partners[0].name}</h2>
              <p className="text-bronze text-sm uppercase tracking-widest font-medium mb-10">{partners[0].role}</p>

              <div className="space-y-6 text-slate font-light leading-relaxed text-lg mb-10">
                {Array.isArray(partners[0].bio)
                  ? partners[0].bio.map((p, i) => <p key={i}>{p}</p>)
                  : <p>{partners[0].bio}</p>}
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 relative group scroll-reveal">
              <div className="aspect-square md:aspect-[3/4] overflow-hidden border border-white/10 relative w-full max-w-lg mx-auto lg:max-w-none">
                <img
                  src={partners[0].img!}
                  alt={partners[0].name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-navy/20 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0"></div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Associates Grid */}
      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto">
          <div className="mb-20 scroll-reveal">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">Meet Our Dynamic Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 team-grid">
            {associates.map((a) => (
              <div key={a.name} className="team-card group cursor-default opacity-0">
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
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy via-[#131A2A] to-navy relative overflow-hidden">
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
                      <span className="text-6xl font-serif text-bronze/60 group-hover:text-bronze/50 transition-colors duration-500 relative z-10">
                        {a.initials}
                      </span>
                    </div>
                  )}

                  {/* Removed bio overlay from here */}
                </div>

                {/* Name & role */}
                <h4 className="text-xl font-serif text-white font-light group-hover:text-bronze transition-colors duration-300">
                  {a.name}
                </h4>
                {a.role && (
                  <p className="text-[10px] uppercase tracking-widest text-bronze mt-1">
                    {a.role}
                  </p>
                )}

                {/* Specialty tag */}
                {a.specialty && (
                  <div className="mt-3">
                    <span className="inline-block px-3 py-1 border border-white/10 text-slate font-light text-[10px] uppercase tracking-widest group-hover:border-bronze/30 group-hover:text-bronze transition-colors duration-300">
                      {a.specialty}
                    </span>
                  </div>
                )}

                {/* Bio explicitly rendered below image */}
                <div className="text-sm text-slate font-light leading-relaxed space-y-3 mt-5 pb-6">
                  {Array.isArray(a.bio)
                    ? a.bio.map((p, i) => <p key={i}>{p}</p>)
                    : <p>{a.bio}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars of Our Journey Section */}
      <section className="py-24 md:py-32 px-6 border-t border-white/20">
        <div className="container mx-auto">
          <div className="mb-20 scroll-reveal flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight max-w-lg">Pillars of Our Journey</h2>
            <p className="text-lg text-slate font-light max-w-2xl leading-relaxed">
              At AG Law Chambers, every journey we’ve taken has been shaped by the talented professionals who have walked alongside us. Though they are pursuing new paths and achieving great success, their impact is still felt within our walls.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 team-grid">
            {alumni.map((a) => (
              <div key={a.name} className="team-card group cursor-default opacity-0">
                {/* Photo / Placeholder */}
                <div className="aspect-[3/4] overflow-hidden mb-6 relative bg-charcoal">
                  {a.img ? (
                    <>
                      <img
                        src={a.img}
                        alt={a.name}
                        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-bronze/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy via-[#131A2A] to-navy relative overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(184,158,114,0.3) 35px, rgba(184,158,114,0.3) 36px)",
                        }}
                      />
                      <div className="absolute inset-4 border border-white/[0.06]" />
                      <span className="text-6xl font-serif text-bronze/60 group-hover:text-bronze/50 transition-colors duration-500 relative z-10">
                        {a.initials}
                      </span>
                    </div>
                  )}

                </div>

                {/* Name & role */}
                <h4 className="text-xl font-serif text-white font-light group-hover:text-bronze transition-colors duration-300">
                  {a.name}
                </h4>
                {a.role && (
                  <p className="text-[10px] uppercase tracking-widest text-bronze mt-1">
                    {a.role}
                  </p>
                )}

                {/* Specialty tag (only show if it exists) */}
                {a.specialty && (
                  <div className="mt-3">
                    <span className="inline-block px-3 py-1 border border-white/10 text-slate font-light text-[10px] uppercase tracking-widest group-hover:border-bronze/30 group-hover:text-bronze transition-colors duration-300">
                      {a.specialty}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-24 px-6 bg-bronze text-navy scroll-reveal">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Work With Us</h2>
            <p className="text-navy/80 text-lg">
              We are always looking for exceptional legal minds to join our practice. Explore career opportunities or reach out directly.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <Link
              href="/careers"
              className="px-8 py-5 border border-navy/20 hover:border-navy text-navy text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              Careers <ArrowRight weight="bold" />
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 bg-navy text-white font-light text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-navy transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto mt-4 sm:mt-0"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
