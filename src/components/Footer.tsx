/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, Award, ShieldCheck, Heart, ArrowUp } from "lucide-react";
import { PageId } from "../types";
import { CLINIC_INFO } from "../data";

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNav = (id: PageId) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="global-footer" className="bg-[#050505] border-t border-white/8 relative z-10 pt-20 pb-10 overflow-hidden">
      {/* Decorative gradient glowing spots */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#00E5A8]/5 rounded-full filter blur-3xl -z-10 pointer-events-none" />
      <div className="absolute left-0 bottom-1/2 w-60 h-60 bg-[#00C2FF]/5 rounded-full filter blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          
          {/* Column 1: Info and Tagline */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-lg bg-[#00E5A8]/10 border border-[#00E5A8]/20 flex items-center justify-center">
                <span className="font-mono text-xs text-[#00E5A8] font-bold">SD</span>
              </div>
              <div>
                <span className="font-sans font-extrabold text-xs tracking-wider text-white">SYDNEY DOCTOR</span>
                <span className="block font-mono text-[8px] tracking-widest text-[#00E5A8] uppercase">
                  Biohealth Pvt Ltd
                </span>
              </div>
            </div>
            
            <p className="font-sans text-[#A8A8A8] text-xs leading-relaxed max-w-xs">
              "Stay with Science. Stay with Us." <br />
              India's premier clinic focused on Performance Medicine, longevity metrics, and doctor-formulated organic cellular supplements.
            </p>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 bg-white/2 border border-white/5 px-2.5 py-1 rounded text-[10px] text-[#00E5A8] font-mono">
                <Award className="w-3 h-3 text-[#00E5A8] mr-1" />
                Australian Standards
              </div>
              <div className="flex items-center space-x-1 bg-white/2 border border-white/5 px-2.5 py-1 rounded text-[10px] text-[#00C2FF] font-mono">
                <ShieldCheck className="w-3 h-3 text-[#00C2FF] mr-1" />
                Evidence-Led
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-mono text-[10px] text-white tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { id: "home" as PageId, label: "Home" },
                { id: "about" as PageId, label: "About Us" },
                { id: "services" as PageId, label: "Clinic Services" },
                { id: "supplements" as PageId, label: "Organic Supplements" },
                { id: "testimonials" as PageId, label: "Patient Transformations" },
                { id: "contact" as PageId, label: "Contact Clinic" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="text-[#A8A8A8] hover:text-[#00E5A8] text-xs font-mono transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    // {item.label.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Clinic Location */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-mono text-[10px] text-[#00E5A8] tracking-widest uppercase">Primary Clinic</h4>
            <div className="flex items-start space-x-3 text-xs">
              <MapPin className="w-4 h-4 text-[#00E5A8] shrink-0 mt-0.5" />
              <div className="text-[#A8A8A8] leading-relaxed">
                <p className="text-white font-medium">{CLINIC_INFO.clinicAddress.line1}</p>
                <p className="mt-1">{CLINIC_INFO.clinicAddress.line2}</p>
                <p>{CLINIC_INFO.clinicAddress.city} — {CLINIC_INFO.clinicAddress.pincode}</p>
              </div>
            </div>
            
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center space-x-3 text-xs text-[#A8A8A8] hover:text-white transition-colors group"
            >
              <Phone className="w-4 h-4 text-[#00E5A8] group-hover:scale-110 transition-transform" />
              <span>{CLINIC_INFO.phoneFormatted}</span>
            </a>

            <a
              href={`mailto:${CLINIC_INFO.email}`}
              className="flex items-center space-x-3 text-xs text-[#A8A8A8] hover:text-white transition-colors group break-all"
            >
              <Mail className="w-4 h-4 text-[#00C2FF] group-hover:scale-110 transition-transform" />
              <span>{CLINIC_INFO.email}</span>
            </a>
          </div>

          {/* Column 4: Corporate Office */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-mono text-[10px] text-[#00C2FF] tracking-widest uppercase font-semibold">Corporate HQ</h4>
            <div className="flex items-start space-x-3 text-xs">
              <MapPin className="w-4 h-4 text-[#00C2FF] shrink-0 mt-0.5" />
              <div className="text-[#A8A8A8] leading-relaxed">
                <p className="text-white font-medium">{CLINIC_INFO.officeAddress.line1}</p>
                <p className="mt-1">{CLINIC_INFO.officeAddress.line2}</p>
                <p>{CLINIC_INFO.officeAddress.city} — {CLINIC_INFO.officeAddress.pincode}</p>
              </div>
            </div>
            <div className="pt-2 border-t border-white/5 text-[10px] font-mono text-[#A8A8A8]">
              <span className="block text-white">CIN:</span>
              <span className="tracking-wide">{CLINIC_INFO.cin}</span>
            </div>
          </div>

        </div>

        {/* Medical Liability Disclaimer Section (Mandatory for Dr Practice and local rules) */}
        <div className="py-7 border-b border-white/5 text-[10px] font-sans text-[#A8A8A8] leading-relaxed text-justify">
          <span className="font-mono text-[#00C2FF] font-semibold tracking-wider uppercase mr-1.5 block md:inline">
            CRITICAL MEDICAL DISCLAIMER:
          </span>
          This web application operates strictly as a digital interface. The medical guidelines, nutritional formulas, test parameters, and services listed are for academic validation and information-focused patient reference only. Sydney Doctor Biohealth Pvt Ltd does not deliver diagnostic evaluations or direct therapeutic recipes via virtual internet messages. Formal medicine, diagnosis, and active clinical protocols are managed exclusively by Dr. Arun Maji during deep on-site in-person sessions at our Kasba clinic. If you suffer from sudden pain or acute cardiovascular emergencies, call regional hospital services immediately.
        </div>

        {/* Copyright, Back to Top, and Socials */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#A8A8A8] space-y-4 md:space-y-0">
          <div className="flex items-center space-x-1.5 font-mono text-[10px]">
            <span>© 2026</span>
            <span className="text-white font-semibold">Sydney Doctor Biohealth Pvt Ltd.</span>
            <span>All Rights Reserved.</span>
          </div>

          <div className="flex items-center space-x-6 text-[10px] font-mono">
            <button className="hover:text-[#00E5A8] cursor-pointer">PRIVACY POLICY</button>
            <button className="hover:text-[#00E5A8] cursor-pointer">TERMS & CONDITIONS</button>
            <button className="hover:text-[#00E5A8] cursor-pointer">DISCLAIMER</button>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/5 hover:border-[#00E5A8]/40 hover:text-white text-[10px] font-mono transition-all group"
          >
            TOP
            <ArrowUp className="w-3 h-3 text-[#00E5A8] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
