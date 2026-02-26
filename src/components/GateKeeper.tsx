"use client";

import { useState, useEffect } from "react";

export default function GateKeeper({ children }: { children: React.ReactNode }) {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem("disclaimer_accepted_final");
        if (accepted) {
            setShowContent(true);
        }

        const handleAccept = () => {
            // Small delay just to let the disclaimer fade out start before rendering main content
            setTimeout(() => setShowContent(true), 100);
        };

        window.addEventListener("disclaimerAccepted", handleAccept);
        return () => window.removeEventListener("disclaimerAccepted", handleAccept);
    }, []);

    if (!showContent) return null;

    return <>{children}</>;
}
