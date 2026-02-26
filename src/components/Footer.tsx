import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <span className="font-serif text-lg text-white font-light">AG.</span>
          <p className="text-[10px] uppercase tracking-widest text-slate font-light">
            &copy; {new Date().getFullYear()} AG Law Chambers. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6">
          <Link
            href="#"
            className="text-[10px] uppercase tracking-widest text-slate font-light hover:text-bronze transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-[10px] uppercase tracking-widest text-slate font-light hover:text-bronze transition-colors duration-300"
          >
            Terms of Engagement
          </Link>
        </div>
      </div>
    </footer>
  );
}
