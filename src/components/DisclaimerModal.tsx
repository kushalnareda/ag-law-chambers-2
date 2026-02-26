"use client";

import { useState, useEffect } from "react";

export default function DisclaimerModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("disclaimer_accepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("disclaimer_accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-500">
      <div className="bg-navy border border-white/10 max-w-xl w-full p-8 shadow-2xl relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-bronze" />

        <h2 className="font-serif text-3xl mb-6 text-white">Disclaimer</h2>

        <div className="prose prose-sm prose-invert mb-8 text-slate font-light leading-relaxed max-h-[50vh] overflow-y-auto">
          <p className="mb-4">
            Per the rules of the <strong>Bar Council of India</strong>, we are not
            permitted to solicit work or advertise. By clicking &quot;I Agree&quot;,
            you acknowledge:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              You wish to gain more information about AG Law Chambers for your own
              knowledge.
            </li>
            <li>
              There has been no advertisement, personal communication, solicitation,
              invitation, or inducement of any sort whatsoever from us.
            </li>
            <li>The information provided herein is not legal advice.</li>
          </ul>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-white/10">
          <button
            onClick={() => setVisible(false)}
            className="text-xs uppercase tracking-widest text-slate hover:text-white transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-bronze hover:text-navy hover:border-bronze transition-all text-xs font-bold uppercase tracking-widest"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
}
