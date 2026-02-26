import Link from "next/link";

const featured = [
  {
    name: "Ashish Gausinga",
    role: "Managing Director",
    img: "/team/ashish-gausinga.jpg",
  },
  {
    name: "Ikhlash Mohd.",
    role: "Senior Associate – Criminal Law",
    img: "/team/ikhlash-mohd.jpg",
  },
  {
    name: "Kumar Byadwal",
    role: "Associate",
    img: "/team/kumar-byadwal.jpg",
  },
];

export default function TeamPreview() {
  return (
    <section className="py-32 bg-navy">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-bronze mb-4">
            Leadership
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">Our Team</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((p) => (
            <Link key={p.name} href="/team" className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-bronze/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  src={p.img}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                  alt={p.name}
                />
              </div>
              <h4 className="text-2xl font-serif text-white">{p.name}</h4>
              <p className="text-xs uppercase tracking-widest text-bronze mt-1">
                {p.role}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/team"
            className="text-xs uppercase tracking-widest text-slate hover:text-white border-b border-transparent hover:border-white pb-1 transition-all"
          >
            View Full Team →
          </Link>
        </div>
      </div>
    </section>
  );
}
