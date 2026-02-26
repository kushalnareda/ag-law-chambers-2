"use client";

import { useState } from "react";
import SubpageLayout from "@/components/SubpageLayout";
import { CheckCircle, CaretDown } from "@phosphor-icons/react";

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SubpageLayout subtitle="Join Our Firm" title="Careers">
      <p className="text-xl text-white mb-8">
        At AG Law Chambers, we are always looking for exceptional legal minds to
        join our team.
      </p>
      <p className="mb-12">
        We offer a challenging environment where merit is rewarded and growth is
        accelerated. Please fill out the form below to apply.
      </p>

      <div className="bg-charcoal p-8 border border-white/10 max-w-2xl mx-auto">
        <h3 className="text-2xl font-serif text-white mb-6">Application Form</h3>

        {submitted ? (
          <div className="text-center py-12 fade-in">
            <CheckCircle size={64} className="text-bronze mx-auto mb-4" />
            <h4 className="text-2xl text-white font-serif mb-4">
              Application Submitted
            </h4>
            <p className="text-slate leading-relaxed">
              Your application is submitted. You will be contacted with further
              details through the provided information.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="text-[10px] uppercase tracking-widest text-bronze mb-2 block font-bold">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-bronze transition-colors text-white placeholder-white/20"
                />
              </div>
              <div className="relative">
                <label className="text-[10px] uppercase tracking-widest text-bronze mb-2 block font-bold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-bronze transition-colors text-white placeholder-white/20"
                />
              </div>
            </div>

            <div className="relative">
              <label className="text-[10px] uppercase tracking-widest text-bronze mb-2 block font-bold">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-bronze transition-colors text-white placeholder-white/20"
              />
            </div>

            <div className="relative">
              <label className="text-[10px] uppercase tracking-widest text-bronze mb-2 block font-bold">
                Position Applying For
              </label>
              <div className="relative">
                <select
                  required
                  className="w-full bg-charcoal border-b border-white/20 py-2 focus:outline-none focus:border-bronze transition-colors text-white appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a position...
                  </option>
                  <option value="Senior Associate">Senior Associate</option>
                  <option value="Associate">Associate</option>
                  <option value="Legal Intern">Legal Intern</option>
                  <option value="Paralegal">Paralegal</option>
                  <option value="Other">Other</option>
                </select>
                <CaretDown
                  size={16}
                  className="absolute right-0 top-3 text-slate pointer-events-none"
                />
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full py-4 bg-bronze text-navy text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300"
              >
                Submit Application
              </button>
            </div>
          </form>
        )}
      </div>
    </SubpageLayout>
  );
}
