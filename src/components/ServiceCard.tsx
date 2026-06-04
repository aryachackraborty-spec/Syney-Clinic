/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle, Sparkles, X, Heart, ShieldAlert, Award, ChevronRight } from "lucide-react";
import { Service } from "../types";

interface ServiceCardProps {
  key?: string | number;
  service: Service;
  index: number;
  onSelectService: (serviceName: string) => void;
}

export default function ServiceCard({ service, index, onSelectService }: ServiceCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  // Custom icons based on service ID to give unique high-end visual cues
  const getServiceIcon = (id: string) => {
    switch (id) {
      case "weight-management":
        return <div className="text-[#00E5A8] text-xs font-mono font-bold font-semibold uppercase">// METABOLIC BASE</div>;
      case "sexual-performance":
        return <div className="text-[#00C2FF] text-xs font-mono font-bold font-semibold uppercase">// HORMONAL REG</div>;
      case "fatigue-management":
        return <div className="text-[#00E5A8] text-xs font-mono font-bold font-semibold uppercase">// ENERGY MITO</div>;
      case "physical-performance":
        return <div className="text-white text-xs font-mono font-bold font-semibold uppercase">// PEAK OUTPUT</div>;
      case "sports-injury":
        return <div className="text-[#00C2FF] text-xs font-mono font-bold font-semibold uppercase">// KINETIC HEAL</div>;
      default:
        return <div className="text-[#00E5A8] text-xs font-mono">// BIO HEALTH</div>;
    }
  };

  return (
    <>
      <div
        id={`service-card-${service.id}`}
        onClick={() => setModalOpen(true)}
        className="group relative bg-[#0D0D0D]/50 hover:bg-[#0D0D0D]/90 border border-white/5 hover:border-[#00E5A8]/30 rounded-2xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between cursor-pointer min-h-[300px] shadow-lg hover:shadow-2xl overflow-hidden"
      >
        {/* Glow particle background for hover feedback */}
        <div className="absolute -top-1/4 -right-1/4 w-36 h-36 bg-[#00E5A8]/5 rounded-full filter blur-xl group-hover:bg-[#00E5A8]/10 transition-colors pointer-events-none" />

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            {getServiceIcon(service.id)}
            <div className="w-8 h-8 rounded-lg bg-white/2 border border-white/10 flex items-center justify-center group-hover:border-[#00E5A8] transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#00E5A8] transition-colors" />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-sans font-extrabold text-lg sm:text-xl text-white group-hover:text-[#00E5A8] transition-colors tracking-tight">
              {service.title}
            </h3>
            <p className="font-mono text-[9px] text-[#00C2FF] uppercase tracking-wider">
              {service.subtitle}
            </p>
          </div>

          <p className="font-sans text-xs text-[#A8A8A8] leading-relaxed line-clamp-3">
            {service.body}
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono">
          <span className="text-[#A8A8A8]">0{index + 1} // PROTOCOL</span>
          <span className="text-[#00E5A8] group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
            VIEW DETAILS
            <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* DEDICATED EXTENSIVELY DETAILED MODAL OVERLAY */}
      {modalOpen && (
        <div
          id={`service-modal-backdrop-${service.id}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050510]/85 backdrop-blur-md px-4 transition-all duration-300 cursor-default"
        >
          <div
            id={`service-modal-${service.id}`}
            className="relative w-full max-w-xl bg-[#0D0D0D] border border-white/8 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-300"
          >
            {/* Absolute accent filters */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5A8]/5 rounded-full filter blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00C2FF]/5 rounded-full filter blur-2xl pointer-events-none" />

            <button
              id={`close-service-modal-${service.id}`}
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-[#A8A8A8] hover:text-white hover:bg-white/5 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              
              {/* Category tag */}
              <div className="flex items-center space-x-2">
                <div className="p-1 rounded bg-[#00E5A8]/10 text-[#00E5A8]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9px] text-[#00E5A8] uppercase tracking-widest font-bold">
                  Clinical Science Unit
                </span>
              </div>

              {/* Title headlines */}
              <div>
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {service.title}
                </h3>
                <p className="font-mono text-[9.5px] text-[#00C2FF] uppercase tracking-widest mt-1">
                  {service.subtitle}
                </p>
              </div>

              {/* Broad Narrative */}
              <p className="font-sans text-xs sm:text-sm text-[#A8A8A8] leading-relaxed text-justify">
                {service.body}
              </p>

              {/* Assessments/Biomarkers Area */}
              <div className="space-y-3 bg-[#050505] border border-white/5 p-5 rounded-lg">
                <span className="block font-mono text-[9px] text-[#00E5A8] uppercase tracking-widest font-bold">
                  CRITICAL BIOMARKERS & TESTS DETECTED:
                </span>
                <ul className="grid grid-cols-1 gap-2.5 pt-1.5">
                  {service.assessments.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs text-[#A8A8A8]">
                      <CheckCircle className="w-4 h-4 text-[#00E5A8] shrink-0 mt-0.5" />
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action trigger row */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="text-left font-mono text-[9px] text-[#A8A8A8] uppercase tracking-wider space-y-0.5">
                  <p className="text-white font-semibold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#00E5A8]" />
                    Dr. Arun Maji Led
                  </p>
                  <p>In-Depth diagnostic timelines</p>
                </div>

                <button
                  id={`modal-cta-${service.id}`}
                  onClick={() => {
                    setModalOpen(false);
                    onSelectService(service.id);
                  }}
                  className="w-full sm:w-auto cursor-pointer px-6 py-3 rounded-lg bg-gradient-to-r from-[#00E5A8] to-[#00C2FF] text-[#050505] font-mono font-bold text-xs tracking-wider hover:opacity-95 shadow-xl transition-all"
                >
                  {service.ctaText.toUpperCase()}
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
