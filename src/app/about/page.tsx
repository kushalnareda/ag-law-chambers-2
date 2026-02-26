import SubpageLayout from "@/components/SubpageLayout";

export default function AboutPage() {
  return (
    <SubpageLayout subtitle="Who We Are" title="About Us">
      <p className="text-xl text-white mb-8">
        Our firm is a multidisciplinary law practice driven by academic
        excellence, courtroom experience, and a results-oriented approach.
      </p>
      <p className="mb-6">
        Led by a strong team of nationally trained legal professionals, we
        provide comprehensive legal solutions across criminal law, civil
        disputes, family law, property matters, commercial drafting, ADR, and
        corporate governance.
      </p>
      <p className="mb-6">
        We combine rigorous legal research with practical litigation strategy to
        serve individuals, businesses, and institutions with integrity and
        precision.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-white/10">
        <div>
          <h4 className="text-white text-lg font-serif mb-2">Our Mission</h4>
          <p className="text-sm">
            To provide legally sound, commercially viable, and ethically grounded
            solutions that empower our clients to achieve their objectives.
          </p>
        </div>
        <div>
          <h4 className="text-white text-lg font-serif mb-2">Our Vision</h4>
          <p className="text-sm">
            To be the most trusted legal partner for businesses and individuals
            navigating the Indian legal landscape.
          </p>
        </div>
      </div>
    </SubpageLayout>
  );
}
