/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Award, ShieldCheck, Dumbbell, Sparkles, AlertTriangle, Fingerprint } from "lucide-react";

export default function ThreeMastersAndIdentity() {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  const pillars = [
    {
      title: "Science",
      tagline: "WE DO NOT GUESS",
      icon: <Fingerprint className="w-5 h-5 text-[#00E5A8]" />,
      desc: "Every protocol, every formulation, and every physiological recommendation is built on rigorous peer-reviewed science and two decades of clinical practice. If it cannot be measured, it cannot be trusted.",
      glowColor: "rgba(0, 229, 168, 0.2)"
    },
    {
      title: "Discipline",
      tagline: "RESULTS ARE COMMITTED",
      icon: <Dumbbell className="w-5 h-5 text-white" />,
      desc: "Results do not happen overnight. We build structured, step-by-step protocols that demand consistency and reward absolute commitment. Discipline is not a passing mood — it is a system we help you construct.",
      glowColor: "rgba(255, 255, 255, 0.15)"
    },
    {
      title: "Safety",
      tagline: "YOUR HEALTH IS SECURE",
      icon: <ShieldCheck className="w-5 h-5 text-[#00C2FF]" />,
      desc: "Your health is not an experiment. Everything at Sydney Doctor operates under strict clinical regulatory and global standards. We hold ourselves to international benchmarks because anything less is unacceptable.",
      glowColor: "rgba(0, 194, 255, 0.2)"
    }
  ];

  const pillarsIdentity = [
    {
      title: "PREMIUM",
      subtitle: "The Standard You Receive.",
      desc: "At Sydney Doctor, premium is not a pricing tier — it is a daily commitment to delivering the highest caliber of medical expertise, customized support tracks, and pure clinical-grade supplements at every touchpoint.",
      tag: "01 // COMFORT"
    },
    {
      title: "AUTHORITY",
      subtitle: "The Science You Seek.",
      desc: "With over 20 years of active general and performance medicine practice, international credentials, and clinical authorship, Dr. Arun Maji brings genuine clinical authority to each consultation and product formulation.",
      tag: "02 // STATUS"
    },
    {
      title: "EXCLUSIVE",
      subtitle: "The Class You Belong To.",
      desc: "We operate on a limited-capacity schedule by design. Fewer patients means deeper dialogue, more targeted diagnostic audits, and superior outcomes. Authentic world-class healthcare cannot be mass-produced.",
      tag: "03 // RESERVATION"
    }
  ];

  return (
    <section id="brand-values-section" className="bg-[#050505] py-24 relative z-10 overflow-hidden border-t border-white/5">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00E5A8]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#00C2FF]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= THREE MASTERS SECTION ================= */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-white/2 border border-white/8 px-3 py-1 rounded-full font-mono text-[9px] text-[#00E5A8] uppercase tracking-widest">
            <Sparkles className="w-3 h-3 text-[#00E5A8]" />
            <span>Guiding Ideals</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Our Three Masters
          </h2>
          <p className="font-sans text-xs text-[#A8A8A8] max-w-xl mx-auto">
            The values that anchor every diagnostic test, medical guidance, and pharmaceutical compound formulation at Sydney Doctor Biohealth.
          </p>
        </div>

        {/* Pillars Grid */}
        <div id="three-masters-pillars" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {pillars.map((pillar, idx) => {
            const isActive = activePillar === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setActivePillar(idx)}
                onMouseLeave={() => setActivePillar(null)}
                className={`relative rounded-xl border p-8 bg-[#0D0D0D]/40 backdrop-blur-md transition-all duration-500 cursor-default flex flex-col justify-between ${
                  isActive
                    ? "border-[#00E5A8] -translate-y-2 shadow-2xl"
                    : "border-white/8"
                }`}
                style={{
                  boxShadow: isActive ? `0 10px 40px ${pillar.glowColor}` : "none"
                }}
              >
                {/* Glowing Tall Pillar Accent Bar */}
                <div
                  className={`absolute top-0 right-0 w-1 rounded-tr-xl rounded-br-xl transition-all duration-500 ${
                    isActive ? "h-full bg-gradient-to-b from-[#00E5A8] to-[#00C2FF]" : "h-12 bg-white/10"
                  }`}
                />

                <div className="space-y-6">
                  {/* Icon Spot */}
                  <div className="w-10 h-10 rounded-lg bg-white/2 border border-white/10 flex items-center justify-center">
                    {pillar.icon}
                  </div>

                  <div className="space-y-2">
                    <p className="font-mono text-[8px] text-[#A8A8A8] tracking-widest">{pillar.tagline}</p>
                    <h3 className="font-sans font-bold text-xl text-white tracking-wide">{pillar.title}</h3>
                  </div>

                  <p className="font-sans text-xs text-[#A8A8A8] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#A8A8A8]">PILLAR // 0{idx + 1}</span>
                  <span className={isActive ? "text-[#00E5A8]" : "text-[#A8A8A8]"}>INTEGRATED</span>
                </div>
              </div>
            );
          })}
        </div>


        {/* ================= OUR IDENTITY SECTION ================= */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-white/2 border border-white/8 px-3 py-1 rounded-full font-mono text-[9px] text-[#00C2FF] uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-[#00C2FF]" />
            <span>Core Pillars</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Our Identity
          </h2>
          <p className="font-sans text-xs text-[#A8A8A8] max-w-xl mx-auto">
            These three operational standards define the exclusive, clinical-grade level of luxury we offer to the Kolkata elite.
          </p>
        </div>

        {/* Identity Cards Grid */}
        <div id="identity-pillars-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillarsIdentity.map((ident, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-b from-[#111111] to-[#0D0D0D] border border-white/5 hover:border-[#00E5A8]/30 hover:shadow-[0_0_25px_rgba(0,229,168,0.15)] rounded-xl p-8 hover:-translate-y-1.5 transition-all duration-300 text-left"
            >
              <div className="absolute top-4 right-4 font-mono text-[9px] text-white/20 group-hover:text-[#00C2FF] transition-colors">
                {ident.tag}
              </div>

              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="font-sans font-black text-lg tracking-wider text-white group-hover:text-[#00E5A8] transition-colors">
                    {ident.title}
                  </h3>
                  <p className="font-mono text-[9px] text-[#00E5A8] uppercase tracking-wider mt-0.5">
                    {ident.subtitle}
                  </p>
                </div>

                <p className="font-sans text-xs text-[#A8A8A8] leading-relaxed pt-2">
                  {ident.desc}
                </p>
              </div>

              {/* absolute subtle visual anchor line */}
              <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-[#00E5A8]/20 transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
