/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from "react";
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Star } from "lucide-react";
import { CLINIC_INFO, IMAGES } from "../data";

interface HeroProps {
  onOpenBookModal: () => void;
  onNavigateToSupplements: () => void;
}

export default function Hero({ onOpenBookModal, onNavigateToSupplements }: HeroProps) {
  const parallaxBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxBgRef.current) return;
      
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        if (parallaxBgRef.current) {
          parallaxBgRef.current.style.transform = `scale(1.1) translate(${x * 25}px, ${y * 25}px)`;
        }
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const statsList = [
    { label: "Doctor Led", val: "Dr. Arun Maji" },
    { label: "Clinical Base", val: "20+ Years" },
    { label: "Standards", val: "Australian RACGP" },
    { label: "Military Focus", val: "Defense Veteran" }
  ];

  return (
    <section
      id="hero-section"
      className="relative min-h-screen bg-[#050505] flex items-center pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden z-10"
    >
      {/* Parallax Background DNA Graphic */}
      <div
        id="hero-parallax-bg"
        ref={parallaxBgRef}
        className="absolute inset-0 z-0 opacity-40 transition-transform duration-500 ease-out will-change-transform"
        style={{
          transform: `scale(1.1) translate(0px, 0px)`
        }}
      >
        <img
          src={IMAGES.dnaBg}
          alt="Biomedical High-tech Helix"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* Floating biomedical particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/5 w-1.5 h-1.5 rounded-full bg-[#00E5A8] opacity-30 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-[#00C2FF] opacity-20 animate-bounce" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-3 rounded-full bg-[#00E5A8]/50 rotate-45 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/5 w-2 h-2 rounded-full bg-[#00C2FF]/30 blur-xs" />
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Headline and Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Giant H1 Display */}
            <div className="space-y-4">
              <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-7.5xl leading-tight text-white tracking-tight">
                We Are The <br />
                <span className="bg-gradient-to-r from-[#00E5A8] via-[#00C2FF] to-white bg-clip-text text-transparent">
                  Performance Experts
                </span>
              </h1>
              
              <p className="font-sans text-[#A8A8A8] text-sm sm:text-base leading-relaxed max-w-xl">
                Two fields. One mission: to help you perform at your absolute best. <br />
                Science-driven longevity care for your body. Evidence-led nutrition for your cellular potential.
              </p>
            </div>

            {/* Main call to actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-book-appointment-cta"
                onClick={onOpenBookModal}
                className="cursor-pointer px-8 py-4 rounded-xl bg-gradient-to-r from-[#00E5A8] to-[#00C2FF] text-[#050505] text-xs font-mono font-extrabold tracking-widest shadow-xl shadow-[#00E5A8]/10 hover:shadow-[#00E5A8]/35 hover:scale-[1.02] active:scale-95 transition-all text-center flex items-center justify-center gap-2 group"
              >
                BOOK YOUR APPOINTMENT
                <Calendar className="w-4 h-4 text-[#050505] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                id="hero-supplements-cta"
                onClick={onNavigateToSupplements}
                className="cursor-pointer px-8 py-4 rounded-xl bg-white/2 hover:bg-white/5 border border-white/10 hover:border-white/20 text-white text-xs font-mono font-extrabold tracking-widest transition-all text-center flex items-center justify-center gap-2 group"
              >
                EXPLORE OUR SUPPLEMENTS
                <ArrowRight className="w-4 h-4 text-[#00E5A8] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Additional Credibility signals */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[10px] text-[#A8A8A8] pt-2">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00E5A8]" />
                <span>Doctor Designed & Supervised</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Star className="w-4 h-4 text-[#00C2FF] fill-[#00C2FF]" />
                <span>5-Star Google Practitioner</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="text-white font-bold">KASBA, KOLKATA</span>
              </div>
            </div>

          </div>

          {/* Floating Health Metric Widgets */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-10 lg:mt-0">
            
            {/* Visual Glass Platform */}
            <div className="relative w-full max-w-sm aspect-square rounded-full border border-white/5 bg-[#0D0D0D]/30 backdrop-blur-3xl flex items-center justify-center shadow-2xl p-6">
              
              {/* Radial speed circle layout */}
              <div className="absolute inset-8 rounded-full border border-dashed border-[#00E5A8]/15 animate-spin duration-15s" />
              <div className="absolute inset-16 rounded-full border border-[#00C2FF]/10 animate-spin" />

              {/* Central Core */}
              <div className="z-10 text-center space-y-1 bg-[#050505] border border-white/8 px-6 py-5 rounded-2xl shadow-xl">
                <p className="font-mono text-[9px] text-[#A8A8A8] tracking-widest uppercase">Clinical Status</p>
                <p className="font-sans font-extrabold text-2xl text-white">ACTIVE</p>
                <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-[#00E5A8] uppercase">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A8] animate-ping" />
                  <span>Verified Safety</span>
                </div>
              </div>

              {/* Floating stats block 1: Experience */}
              <div
                className="absolute top-4 left-6 bg-[#0D0D0D]/80 border border-white/8 backdrop-blur-xl rounded-xl p-3 shadow-lg hover:border-[#00E5A8]/45 transition-colors cursor-default"
                style={{ transform: "rotate(-4deg)" }}
              >
                <div className="font-mono text-[10px] text-[#A8A8A8]">CLINIC EXPERIENCE</div>
                <div className="font-sans font-black text-lg text-white">20+ YEARS</div>
                <div className="font-mono text-[8px] text-[#00E5A8] tracking-wide mt-0.5">SYDNEY, AUSTRALIA</div>
              </div>

              {/* Floating stats block 2: Standards */}
              <div
                className="absolute top-12 right-2 bg-[#0D0D0D]/80 border border-white/8 backdrop-blur-xl rounded-xl p-3 shadow-lg hover:border-[#00C2FF]/45 transition-colors cursor-default"
                style={{ transform: "rotate(6deg)" }}
              >
                <div className="font-mono text-[10px] text-[#A8A8A8]">FOUNDATION</div>
                <div className="font-sans font-black text-md text-white">EVIDENCE LED</div>
                <div className="font-mono text-[8px] text-[#00C2FF] tracking-wide mt-0.5">MILITARY PRECISION</div>
              </div>

              {/* Floating stats block 3: Patient load */}
              <div
                className="absolute bottom-6 left-12 bg-[#0D0D0D]/80 border border-white/8 backdrop-blur-xl rounded-xl p-3 shadow-lg hover:border-[#00E5A8]/45 transition-colors cursor-default"
                style={{ transform: "rotate(3deg)" }}
              >
                <div className="font-mono text-[10px] text-[#A8A8A8]">CAPACITY MODEL</div>
                <div className="font-sans font-black text-md text-[#00E5A8]">EXCLUSIVE</div>
                <div className="font-mono text-[8px] text-[#A8A8A8] mt-0.5">LIMITED PATIENT SLOTS</div>
              </div>

            </div>

          </div>

        </div>

        {/* Sitewide metrics bento row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20 pt-8 border-t border-white/5">
          {statsList.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#0D0D0D]/50 border border-white/5 rounded-xl p-4 hover:border-white/10 transition-colors text-left"
            >
              <p className="font-mono text-[9px] text-[#A8A8A8] tracking-widest uppercase">{stat.label}</p>
              <p className="font-sans font-extrabold text-base text-white mt-1">{stat.val}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
