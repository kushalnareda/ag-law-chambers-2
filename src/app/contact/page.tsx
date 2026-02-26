"use client";

import { useState } from "react";
import SubpageLayout from "@/components/SubpageLayout";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SubpageLayout subtitle="Get in Touch" title="Contact Us">
      <div className="grid md:grid-cols-2 gap-16 max-w-none">
        <div>
          <p className="text-white font-light text-lg mb-6">
            We welcome the opportunity to discuss your legal needs. Please reach
            out to schedule a consultation.
          </p>
          <div className="space-y-12 mt-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-3">
                Main Branch
              </p>
              <p className="text-lg text-white font-light leading-relaxed">
                Chamber no. 427, Sun N Moon Chambers,
                <br />
                Gopalbari, Jaipur - 302001
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-3">
                Jagatpura Office
              </p>
              <p className="text-lg text-white font-light leading-relaxed">
                House No. 42, Swaroop Vihar, Lane no. 06,
                <br />
                Jagatpura, Jaipur - 302017
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-3">
                Contact
              </p>
              <p className="text-lg text-white font-light leading-relaxed">
                +91-9166024694, +91-6376576371
                <br />
                aglawchambers26@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="bg-charcoal p-8 border border-white/10">
          <h3 className="text-2xl font-serif text-white font-light mb-6">Send an Inquiry</h3>

          {submitted ? (
            <p className="text-bronze text-xl font-serif italic">
              Thank you. We will be in touch shortly.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-6"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 px-4 focus:outline-none focus:border-bronze focus:bg-white/5 transition-colors placeholder-white/30 text-white font-light"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 px-4 focus:outline-none focus:border-bronze focus:bg-white/5 transition-colors placeholder-white/30 text-white font-light"
                />
              </div>
              <div className="relative">
                <textarea
                  rows={3}
                  placeholder="How can we help?"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 px-4 focus:outline-none focus:border-bronze focus:bg-white/5 transition-colors placeholder-white/30 text-white font-light resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-bronze text-navy text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </SubpageLayout>
  );
}
