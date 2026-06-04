/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { X, Mail, ShieldAlert, Sparkles, CheckCircle } from "lucide-react";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // Check local session so we don't bombard them if they already closed it
    const dismissed = sessionStorage.getItem("sd_exit_intent_dismissed");
    if (dismissed === "true") {
      setHasShown(true);
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (hasShown) return;
      
      // y-coordinate close to 0 is the navigation boundary
      if (e.clientY < 20) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("sd_exit_intent_dismissed", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate save
    console.log("Newsletter / Exit Intent captured:", email);
    setIsSubscribed(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      id="exit-intent-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050510]/90 backdrop-blur-md px-4 transition-all duration-300 pointer-events-auto"
    >
      <div
        id="exit-intent-box"
        className="relative w-full max-w-md bg-[#0D0D0D] border border-[#00E5A8]/20 rounded-2xl p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-500 overflow-hidden"
      >
        {/* Absolute decorative accent circles */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#00E5A8]/5 rounded-full filter blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#00C2FF]/5 rounded-full filter blur-2xl pointer-events-none" />

        <button
          id="close-exit-intent"
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 rounded-md text-[#A8A8A8] hover:text-white hover:bg-white/5 transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubscribed ? (
          <form id="exit-newsletter-form" onSubmit={handleSubscribe} className="space-y-4">
            <div className="flex items-center space-x-2 text-[#00E5A8]">
              <ShieldAlert className="w-5 h-5 animate-bounce" />
              <span className="font-mono text-[9px] tracking-widest uppercase font-bold">
                Performance Reserve Alert
              </span>
            </div>

            <div>
              <h3 className="font-sans text-lg font-bold text-white tracking-tight">
                Don't Leave Your Biology Unchecked
              </h3>
              <p className="font-sans text-xs text-[#A8A8A8] mt-1.5 leading-relaxed">
                Join our private medical circle. Get Dr. Arun Maji's weekly blueprint on metabolic efficiency, peptide science, and high-performance longevity protocols.
              </p>
            </div>

            <div className="bg-white/2 border border-white/5 p-3 rounded-lg text-left">
              <p className="font-mono text-[9px] text-[#00E5A8] tracking-widest uppercase mb-1">FREE BONUSES INCLUDED</p>
              <p className="font-sans text-[11px] text-[#A8A8A8]">
                ✓ "Iron & Ferritin Fatigue Baseline" PDF guide <br />
                ✓ Priority consultation reservation access bypass code
              </p>
            </div>

            <div className="space-y-3 pt-1">
              <input
                type="email"
                required
                placeholder="Enter elite email e.g., dr@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/2 border border-white/8 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E5A8] transition-colors font-sans"
              />

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-[#00E5A8] hover:bg-[#00E5A8]/90 text-[#050505] font-mono font-bold text-xs tracking-widest transition-all cursor-pointer shadow-lg shadow-[#00E5A8]/10 hover:shadow-[#00E5A8]/25"
              >
                SECURE FREE ACCREDITATION
              </button>
            </div>

            <div className="text-center font-mono text-[8px] text-[#A8A8A8]">
              NO SPAM. SYDNEY DOCTOR VALUE TRUTHS ONLY. DISMISS ANYTIME.
            </div>
          </form>
        ) : (
          <div id="exit-subscribed-success" className="text-center py-6 space-y-4 animate-in fade-in duration-500">
            <div className="mx-auto w-10 h-10 rounded-full bg-[#00E5A8]/10 text-[#00E5A8] flex items-center justify-center">
              <CheckCircle className="w-5 h-5" />
            </div>

            <div className="space-y-1">
              <h4 className="font-sans text-md font-extrabold text-white uppercase tracking-widest">
                Blueprint Sent
              </h4>
              <p className="font-mono text-[9px] text-[#00E5A8] uppercase tracking-wide">
                CYBERNETICS PIPELINE LOADED
              </p>
            </div>

            <p className="font-sans text-xs text-[#A8A8A8] leading-relaxed max-w-xs mx-auto">
              Your cellular blueprint and entry bypass codes are routed securely to <span className="text-white font-semibold">{email}</span>. Look out for Dr. Maji's correspondence.
            </p>

            <button
              onClick={handleClose}
              className="mt-2 px-5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#A8A8A8] hover:text-white font-mono text-[10px] transition-all cursor-pointer"
            >
              RETURN TO BROWSER
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
