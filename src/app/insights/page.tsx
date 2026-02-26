import SubpageLayout from "@/components/SubpageLayout";

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
      <p className="text-xl text-white mb-12">
        Analysis and commentary on the latest legal developments in India.
      </p>

      <div className="space-y-8">
        {articles.map((a) => (
          <div
            key={a.title}
            className="border border-white/10 p-8 hover:bg-white/5 transition-colors cursor-pointer group"
          >
            <span className="text-bronze text-xs font-bold uppercase tracking-widest">
              {a.category} &bull; {a.date}
            </span>
            <h3 className="text-2xl font-serif text-white mt-2 mb-4 group-hover:text-bronze transition-colors">
              {a.title}
            </h3>
            <p className="text-sm opacity-70">{a.excerpt}</p>
          </div>
        ))}
      </div>
    </SubpageLayout>
  );
}
