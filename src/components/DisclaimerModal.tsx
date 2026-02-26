"use client";

import { useState, useEffect } from "react";

export default function DisclaimerModal() {
  const [visible, setVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Instant check - no timeout
    const accepted = localStorage.getItem("disclaimer_accepted_final");
    if (!accepted) {
      setVisible(true);
      document.body.style.overflow = "hidden"; // Prevent scrolling
    }
  }, []);

  const closeModal = (accept: boolean) => {
    if (accept) {
      localStorage.setItem("disclaimer_accepted_final", "true");
      window.dispatchEvent(new Event("disclaimerAccepted"));
    }
    setExiting(true);
    // Wait for the fade out transition to complete before unmounting
    setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = ""; // Restore scrolling
    }, 700);
  };

  if (!isMounted || !visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-navy pointer-events-auto transition-all duration-700 ease-in-out ${exiting ? "opacity-0 invisible" : "opacity-100 visible" }`}
    >
      <div className={`bg-navy border border-white/20 max-w-2xl w-full p-10 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative transition-transform duration-700 ease-in-out ${exiting ? "scale-95" : "scale-100" }`}>

        {/* Top Gold Accent Line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-bronze opacity-80" />

        <h2 className="font-serif text-4xl mb-8 text-white font-light tracking-wide">Disclaimer</h2>

        <div className="prose prose-sm prose-invert mb-10 text-slate font-light leading-relaxed max-h-[60vh] overflow-y-auto">
          <p className="mb-6 text-[15px] text-white font-light">
            As per the rules of the <strong className="font-medium text-white font-light">Bar Council of India</strong>, we are not permitted to solicit work and advertise. By clicking on the <strong className="font-medium text-white font-light">"I AGREE"</strong> button below, you acknowledge the following:
          </p>
          <ul className="list-disc pl-5 space-y-4 text-[15px] text-white font-light">
            <li className="pl-2">
              there has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website;
            </li>
            <li className="pl-2">
              you wish to gain more information about us for your own information and use;
            </li>
            <li className="pl-2">
              the information about us is provided to you on your specific request and any information obtained or materials downloaded from this website is completely at your own volition and any transmission, receipt or use of this site does not create any lawyer-client relationship; and that
            </li>
            <li className="pl-2">
              we are not liable for any consequence of any action taken by you relying on the material / information provided on this website.
            </li>
          </ul>
          <p className="mt-6 text-[15px] text-white font-light">
            If you have any legal issues, you, in all cases, must seek independent legal advice.
          </p>
          <p className="mt-4 text-[15px] text-white font-light">
            We use cookies to enhance your experience. By continuing to visit this website you agree to our use of cookies.
          </p>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-white/10">
          <button
            onClick={() => closeModal(false)}
            className="text-xs font-medium uppercase tracking-[0.15em] text-white font-light hover:text-white font-light transition-colors duration-300"
          >
            DECLINE
          </button>
          <button
            onClick={() => closeModal(true)}
            className="px-8 py-3.5 bg-white/5 border border-white/10 hover:bg-bronze hover:text-navy hover:border-bronze transition-colors duration-300 text-xs font-bold uppercase tracking-[0.15em] text-white font-light"
          >
            I AGREE
          </button>
        </div>
      </div>
    </div>
  );
}
