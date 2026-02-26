import Link from "next/link";
import Footer from "./Footer";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

interface SubpageLayoutProps {
  subtitle: string;
  title: string;
  children: React.ReactNode;
}

export default function SubpageLayout({ subtitle, title, children }: SubpageLayoutProps) {
  return (
    <>
      <div className="min-h-screen pt-32 pb-20 fade-in bg-navy">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-16 border-b border-white/10 pb-8">
            <p className="text-bronze text-xs font-bold uppercase tracking-widest mb-4">
              {subtitle}
            </p>
            <h1 className="text-4xl md:text-6xl font-serif text-white font-light">{title}</h1>
          </div>

          {/* Content */}
          <div className="text-slate font-light leading-relaxed max-w-4xl">
            {children}
          </div>

          {/* Back Button */}
          <div className="mt-16 pt-16 border-t border-white/10">
            <Link
              href="/"
              className="text-xs uppercase tracking-widest text-bronze hover:text-white font-light transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
