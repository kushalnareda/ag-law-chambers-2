"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our Services" },
  { href: "/team", label: "Team" },
  { href: "/expertise", label: "Practice Areas" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-500 ease-out ${scrolled ? "bg-navy/95 backdrop-blur-lg py-4 shadow-lg shadow-black/10" : "py-6"}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col group cursor-default z-50 relative">
            <span className="text-base font-serif tracking-tight text-white font-medium group-hover:text-bronze transition-colors duration-300">
              AG
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-widest transition-colors duration-300 relative ${isActive(link.href) ? "text-bronze font-normal" : "text-slate font-normal hover:text-white"}`}
              >
                {link.label}
                {/* Active indicator dot */}
                {isActive(link.href) && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-bronze" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`px-6 py-2 border rounded-sm text-xs uppercase tracking-widest font-medium transition-all duration-300 ${isActive("/contact") ? "bg-bronze text-navy border-bronze" : "border-white/20 hover:bg-white hover:text-navy hover:border-white"}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden z-50 relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute left-0 w-full h-px bg-white transition-all duration-300 ${menuOpen ? "top-1/2 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1/2 w-full h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 w-full h-px bg-white transition-all duration-300 ${menuOpen ? "top-1/2 -rotate-45" : "top-full"}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-navy/98 z-30 md:hidden flex flex-col justify-center items-center gap-6 transition-all duration-500 ease-out ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-3xl font-serif transition-all duration-300 ${isActive(link.href) ? "text-bronze" : "text-white font-normal hover:text-bronze"}`}
            style={{
              transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: menuOpen ? 1 : 0,
            }}
          >
            {link.label}
          </Link>
        ))}
        <div
          className="mt-4"
          style={{
            transitionDelay: menuOpen ? `${navLinks.length * 60}ms` : "0ms",
            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            opacity: menuOpen ? 1 : 0,
            transition: "all 0.3s ease",
          }}
        >
          <Link
            href="/contact"
            className="text-sm uppercase tracking-widest text-bronze border border-bronze px-8 py-3 hover:bg-bronze hover:text-navy transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
