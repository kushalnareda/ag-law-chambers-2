"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-32 bg-cream text-navy relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10">
        {/* Left — Info */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-navy">
            Get in Touch
          </h2>
          <p className="text-navy/50 mb-12 max-w-sm font-light">
            Strict confidentiality is maintained for all inquiries.
          </p>

          <div className="space-y-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-2">
                Main Branch
              </p>
              <p className="text-base text-navy/80 leading-relaxed">
                Chamber no. 427, Sun N Moon Chambers,
                <br />
                Gopalbari, Jaipur - 302001
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-2">
                Jagatpura Office
              </p>
              <p className="text-base text-navy/80 leading-relaxed">
                House No. 42, Swaroop Vihar, Lane no. 06,
                <br />
                Jagatpura, Jaipur - 302017
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-2">
                Contact
              </p>
              <p className="text-base text-navy/80 leading-relaxed">
                +91-9166024694, +91-6376576371
                <br />
                aglawchambers26@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-6"
          >
            {submitted ? (
              <div className="py-16 text-center">
                <p className="text-bronze text-xl font-serif italic mb-2">
                  Thank you.
                </p>
                <p className="text-navy/50 text-sm font-light">
                  We will be in touch shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-navy/15 py-4 focus:outline-none focus:border-bronze transition-colors duration-300 text-navy placeholder-navy/30"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-navy/15 py-4 focus:outline-none focus:border-bronze transition-colors duration-300 text-navy placeholder-navy/30"
                  />
                </div>
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-navy/15 py-4 focus:outline-none focus:border-bronze transition-colors duration-300 text-navy/50">
                    <option>Select Practice Area</option>
                    <option>Corporate</option>
                    <option>Litigation</option>
                    <option>Real Estate</option>
                    <option>Family Law</option>
                    <option>Criminal Law</option>
                  </select>
                </div>
                <div className="relative">
                  <textarea
                    rows={2}
                    placeholder="Message"
                    className="w-full bg-transparent border-b border-navy/15 py-4 focus:outline-none focus:border-bronze transition-colors duration-300 text-navy placeholder-navy/30 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-10 py-4 bg-navy text-cream text-xs font-bold uppercase tracking-widest hover:bg-bronze hover:text-navy transition-colors duration-300 mt-4"
                >
                  Submit Inquiry
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
