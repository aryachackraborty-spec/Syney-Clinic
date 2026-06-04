/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award, ShieldCheck, Calendar, BookOpen, Star, FileText } from "lucide-react";
import { CLINIC_INFO, IMAGES, TIMELINE_EVENTS } from "../data";
import { PageId } from "../types";

interface DoctorSpotlightProps {
  onNavigateToAbout: () => void;
}

export default function DoctorSpotlight({ onNavigateToAbout }: DoctorSpotlightProps) {
  const quickSpecs = [
    { title: "Physical Performance Optimisation" },
    { title: "Metabolic Health & Weight Management" },
    { title: "Sexual Health & Hormonal Function" },
    { title: "Fatigue, Energy & Recovery Management" },
    { title: "Sports Injury Assessment & Management" }
  ];

  return (
    <section id="doctor-spotlight-section" className="bg-[#050505] py-24 relative z-10 overflow-hidden border-t border-white/5">
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-[#00E5A8]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center md:text-left space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-white/2 border border-white/8 px-3 py-1 rounded-full font-mono text-[9px] text-[#00E5A8] uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-[#00E5A8]" />
            <span>Pioneer in Performance Medicine</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Meet Dr. Arun Maji
          </h2>
          <p className="font-mono text-[10px] text-[#00C2FF] uppercase tracking-widest font-semibold">
            Founder & CEO, Sydney Doctor Biohealth Pvt Ltd
          </p>
        </div>

        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Image & Floating badges */}
          <div className="lg:col-span-5 relative group">
            
            {/* Glowing Accent Ring behind the image */}
            <div className="absolute inset-2 -z-10 rounded-2xl bg-gradient-to-tr from-[#00E5A8] to-[#00C2FF] opacity-10 blur-xl group-hover:opacity-25 transition-opacity duration-500" />
            
            {/* Image Outer Case */}
            <div className="relative rounded-2xl overflow-hidden border border-white/8 bg-[#0D0D0D] p-3 shadow-2xl">
              <img
                src={IMAGES.drArunMaji}
                alt="Dr. Arun Maji, Performance Medicine Specialist"
                className="w-full h-auto aspect-[3/4] object-cover rounded-xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4.5 rounded-xl bg-[#0D0D0D]/90 backdrop-blur-md border border-white/8">
                <div className="flex items-center space-x-1.5 text-xs text-[#00E5A8] font-mono">
                  <Star className="w-3.5 h-3.5 fill-[#00E5A8]" />
                  <span>RACGP SPECIALTY TRAINER</span>
                </div>
                <p className="font-sans font-extrabold text-lg text-white mt-1">Dr. Arun Maji</p>
                <p className="font-mono text-[9px] text-[#A8A8A8] uppercase tracking-widest">MD // 20+ Yrs Sydney Practice</p>
              </div>
            </div>

            {/* Top-Right Credential badge */}
            <div className="absolute -top-4 -right-4 bg-[#050505] border border-[#00E5A8]/50 text-white rounded-lg px-4 py-2 text-center shadow-2xl skew-x-3">
              <span className="block font-sans font-extrabold text-lg text-[#00E5A8]">20+ Yrs</span>
              <span className="block font-mono text-[8px] uppercase tracking-widest text-[#A8A8A8]">GLOBAL CARE</span>
            </div>

          </div>

          {/* Right Block: Bio, Specs & Short Timeline */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <p className="font-sans text-sm sm:text-base text-[#A8A8A8] leading-relaxed">
              Dr. Arun Maji is one of India's leading performance medicine specialists, bringing over two decades of clinical expertise from Sydney, Australia to Kolkata. His approach combines rigorous scientific methodology with deep clinical empathy — treating not just symptoms, but the whole person.
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#A8A8A8] leading-relaxed">
              A former military doctor in both India and Australia, a RACGP Specialty Trainer in Queensland, and the author of multiple clinical books on metabolic pathways, Dr. Maji's credentials place him in a rare category of practitioner. His specialisation in physical, metabolic, and sexual health makes Sydney Doctor a destination for those who refuse to accept ordinary standards.
            </p>

            {/* Core Specializations Check list */}
            <div className="space-y-3 bg-[#0D0D0D]/50 border border-white/5 rounded-xl p-5">
              <p className="font-mono text-[9px] text-[#00E5A8] tracking-widest uppercase font-bold">
                Clinical Focus Areas
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {quickSpecs.map((spec, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-[#A8A8A8]">
                    <ShieldCheck className="w-4 h-4 text-[#00E5A8] shrink-0" />
                    <span>{spec.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Timeline Preview */}
            <div className="space-y-4">
              <p className="font-mono text-[9px] text-white tracking-widest uppercase">
                Milestone Foundations
              </p>
              <div className="space-y-3.5 font-sans text-xs">
                {TIMELINE_EVENTS.slice(0, 3).map((event, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="font-mono text-[10px] text-[#00C2FF] bg-[#00C2FF]/10 border border-[#00C2FF]/20 rounded px-2 py-0.5 shrink-0 mt-0.5">
                      {event.year}
                    </span>
                    <div>
                      <h4 className="font-bold text-white tracking-wide">{event.title}</h4>
                      <p className="text-[#A8A8A8] mt-0.5 text-[11px] leading-relaxed">{event.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-3">
              <button
                id="view-full-doctor-profile-btn"
                onClick={onNavigateToAbout}
                className="cursor-pointer inline-flex items-center space-x-1.5 text-xs font-mono text-[#00E5A8] hover:text-[#00C2FF] transition-all bg-white/2 hover:bg-white/5 border border-white/8 px-6 py-3 rounded-xl"
              >
                <span>READ FULL CLINICAL BIO</span>
                <BookOpen className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
