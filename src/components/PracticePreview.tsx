"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

const practices = [
  {
    num: "01",
    title: "Corporate Law",
    desc: "Mergers, acquisitions, and regulatory compliance for domestic and international entities.",
  },
  {
    num: "02",
    title: "Dispute Resolution",
    desc: "Representation in civil and criminal matters before the Supreme Court and High Courts.",
  },
  {
    num: "03",
    title: "Real Estate",
    desc: "Due diligence, conveyance deeds, and RERA litigation for developers and investors.",
  },
];

export default function PracticePreview() {
  return (
    <section className="py-32 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-white font-light">Expertise</h2>
          <Link
            href="/expertise"
            className="text-xs uppercase tracking-widest text-slate font-light hover:text-white font-light border-b border-transparent hover:border-white pb-1 transition-all"
          >
            View All Areas
          </Link>
        </div>

        <div className="border-t border-white/10">
          {practices.map((p) => (
            <div
              key={p.num}
              className="group border-b border-white/10 py-12 cursor-pointer transition-colors hover:bg-white/5"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                <div className="flex items-baseline gap-6 md:w-1/3">
                  <span className="text-xs font-mono text-bronze">{p.num}</span>
                  <h3 className="text-3xl font-serif text-slate font-light group-hover:text-white font-light group-hover:italic transition-all">
                    {p.title}
                  </h3>
                </div>
                <p className="text-sm text-slate font-light md:w-1/3 opacity-50 group-hover:opacity-100 transition-opacity">
                  {p.desc}
                </p>
                <div className="md:w-12 flex justify-end">
                  <ArrowRight
                    size={24}
                    className="text-bronze opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
