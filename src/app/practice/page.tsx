import SubpageLayout from "@/components/SubpageLayout";

const areas = [
  {
    title: "Corporate & Commercial",
    desc: "We handle the full lifecycle of a business, from incorporation to insolvency.",
    items: [
      "Mergers & Acquisitions (M&A)",
      "Private Equity & Venture Capital",
      "Joint Ventures & Strategic Alliances",
      "Corporate Governance & Compliance",
    ],
  },
  {
    title: "Dispute Resolution",
    desc: "Aggressive representation in courts and tribunals across India.",
    items: [
      "Supreme Court & High Court Litigation",
      "International Commercial Arbitration",
      "White Collar Crime Defense",
      "Insolvency & Bankruptcy Code (IBC)",
    ],
  },
  {
    title: "Real Estate & Infrastructure",
    desc: "Navigating the complex land laws and RERA regulations.",
    items: [
      "Conveyancing & Title Search",
      "Construction Contracts (FIDIC)",
      "RERA Compliance & Litigation",
      "Lease & License Agreements",
    ],
  },
  {
    title: "Intellectual Property",
    desc: "Protecting innovation and creative assets.",
    items: [
      "Trademark Registration & Prosecution",
      "Copyright Infringement Litigation",
      "Patent Filing & Advisory",
      "Technology Transfer Agreements",
    ],
  },
];

export default function PracticePage() {
  return (
    <SubpageLayout subtitle="Our Capabilities" title="Practice Areas & Expertise">
      {/* Expertise Intro */}
      <div className="mb-16 border-b border-white/10 pb-12">
        <p className="text-xl text-white mb-8">
          We don&apos;t just know the law; we understand the industry.
        </p>
        <p className="mb-6">
          In a rapidly evolving legal environment, specialization is key.
          However, we believe that true expertise comes from the ability to
          connect the dots across different domains of law. A corporate merger
          often has tax implications; a real estate deal may invite environmental
          litigation.
        </p>
        <p className="mb-6">
          Our cross-functional teams ensure that no angle is left unchecked. We
          pride ourselves on:
        </p>
        <ul className="list-disc pl-5 space-y-4 text-white/90">
          <li>
            <strong>Strategic Foresight:</strong> Anticipating legal hurdles
            before they become roadblocks.
          </li>
          <li>
            <strong>Commercial Awareness:</strong> Structuring deals that make
            business sense.
          </li>
          <li>
            <strong>Regulatory Mastery:</strong> Deep relationships and
            understanding of regulatory bodies like SEBI, RBI, and CCI.
          </li>
        </ul>
      </div>

      {/* Practice Areas Grid */}
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
        {areas.map((area) => (
          <div key={area.title}>
            <h3 className="text-2xl text-bronze font-serif mb-4">{area.title}</h3>
            <p className="mb-4 text-sm">{area.desc}</p>
            <ul className="space-y-2 text-sm border-l border-white/10 pl-4">
              {area.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SubpageLayout>
  );
}
