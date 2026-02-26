"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { ArrowRight } from "@phosphor-icons/react";

const articles = [
  {
    category: "Corporate Law",
    date: "Oct 2023",
    title: "The Digital Personal Data Protection Act, 2023: A Compliance Guide",
    excerpt:
      "An overview of the key obligations for data fiduciaries and the implications for Indian startups.",
  },
  {
    category: "Real Estate",
    date: "Sep 2023",
    title: "Supreme Court on Homebuyer Rights in Insolvency",
    excerpt:
      "Analyzing the recent judgment solidifying the status of homebuyers as financial creditors.",
  },
  {
    category: "Arbitration",
    date: "Aug 2023",
    title: "Enforceability of Unstamped Arbitration Agreements",
    excerpt:
      "A deep dive into the recent constitutional bench referral and its impact on pending arbitrations.",
  },
];

export default function InsightsPage() {
  return (
    <SubpageLayout subtitle="Legal Updates" title="Insights">
      <p className="text-xl text-white font-light mb-12">
        Analysis and commentary on the latest legal developments in India.
      </p>

      <div className="space-y-8">
        {articles.map((a) => (
          <div
            key={a.title}
            className="border border-white/20 bg-white/5 p-8 hover:bg-white/10 hover:border-bronze/50 transition-colors duration-300 cursor-pointer group flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >
            <div className="md:w-3/4">
              <span className="text-bronze text-xs font-bold uppercase tracking-widest">
                {a.category} &bull; {a.date}
              </span>
              <h3 className="text-2xl font-serif text-white font-light mt-2 mb-4 group-hover:text-bronze transition-colors">
                {a.title}
              </h3>
              <p className="text-sm opacity-70">{a.excerpt}</p>
            </div>
            <div className="md:w-1/4 flex justify-start md:justify-end items-center mt-4 md:mt-0">
              <span className="text-xs font-bold uppercase tracking-widest text-bronze mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Read Article</span>
              <ArrowRight size={20} className="text-bronze opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>
    </SubpageLayout>
  );
}
