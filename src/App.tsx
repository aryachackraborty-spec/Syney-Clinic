/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import {
  Activity,
  Phone,
  Mail,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronRight,
  Star,
  Award,
  ShieldCheck,
  Sparkles,
  Clock,
  ArrowRight,
  Smartphone,
  Heart,
  TrendingUp,
  X,
  Menu,
  ArrowUp,
  CheckCircle,
  Check,
  FileText,
  Users,
  Shield,
  Dumbbell
} from "lucide-react";

import { PageId } from "./types";
import { CLINIC_INFO, SERVICES_DATA, TRUST_POINTS, PERFORMANCE_JOURNEY, FAQS, IMAGES } from "./data";

// Sub-components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ServiceCard from "./components/ServiceCard";
import ThreeMastersAndIdentity from "./components/ThreeMastersAndIdentity";
import DoctorSpotlight from "./components/DoctorSpotlight";
import TestimonialsWall from "./components/TestimonialsWall";
import SupplementsSection from "./components/SupplementsSection";
import ContactForm from "./components/ContactForm";
import LeadCaptureModal from "./components/LeadCaptureModal";
import ExitIntentPopup from "./components/ExitIntentPopup";
import SchemaMarkup from "./components/SchemaMarkup";
import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>("general");
  
  // Accordion state for FAQs
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // States to track expansion of experience cards
  const [isMedicineExpanded, setIsMedicineExpanded] = useState(false);
  const [isSupplementsExpanded, setIsSupplementsExpanded] = useState(false);

  const handleMedicineMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  // Auto scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleOpenBookModal = (serviceId: string = "general") => {
    setSelectedServiceForModal(serviceId);
    setIsBookModalOpen(true);
  };

  const handleWhatsAppInstant = () => {
    const text = encodeURIComponent("Hello Sydney Doctor Biohealth, I would like to schedule an elite performance baseline inquiry.");
    window.open(`https://wa.me/916289921810?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00E5A8]/30 selection:text-white flex flex-col justify-between overflow-x-hidden antialiased">
      {/* Schema SEO Injector */}
      <SchemaMarkup />

      {/* Dynamic Page-Specific High Performance Background Animations */}
      <AnimatedBackground currentPage={currentPage} />

      {/* Sitewide Fixed CRO Components */}
      <ExitIntentPopup />

      {/* Floating Sticky Actions Bar (Single Cohesive WhatsApp CTA Icon) */}
      <div id="sticky-cro-sidebar" className="fixed bottom-6 right-6 z-40 pointer-events-auto">
        <button
          id="sticky-whatsapp-btn"
          onClick={handleWhatsAppInstant}
          className="relative w-14 h-14 rounded-full bg-[#00E5A8] text-[#050505] shadow-[0_4px_24px_rgba(0,229,168,0.45)] flex items-center justify-center hover:scale-110 active:scale-95 hover:bg-[#00ffd0] transition-all duration-300 cursor-pointer group"
          title="Direct WhatsApp Liaison"
        >
          {/* Continuous premium pulsing backdrop ring */}
          <span className="absolute -inset-1.5 rounded-full bg-[#00E5A8]/25 animate-ping pointer-events-none" />
          
          <svg className="w-7 h-7 fill-current transition-transform duration-300 group-hover:rotate-12 relative z-10" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.482.002 9.944-4.461 9.947-9.943.001-2.656-1.03-5.153-2.903-7.029-1.871-1.873-4.363-2.904-7.017-2.905-5.485 0-9.948 4.462-9.95 9.944-.002 1.914.5 3.774 1.455 5.39l-.991 3.616 3.755-.984zm8.683-5.992c-.224-.112-1.325-.654-1.53-.728-.205-.074-.354-.112-.502.112-.149.224-.577.728-.707.878-.13.15-.26.168-.485.056-.224-.112-.949-.35-1.808-1.116-.667-.595-1.119-1.33-1.25-1.553-.13-.224-.014-.346.098-.458.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374.075-.15.037-.281-.019-.393-.056-.112-.502-1.21-.688-1.656-.181-.435-.363-.377-.502-.384-.13-.007-.279-.007-.428-.007-.15 0-.394.056-.601.281-.205.224-.783.766-.783 1.87s.803 2.17 1.156 2.64c.354.468 1.58 2.413 3.827 3.385.534.232.951.371 1.275.474.536.171 1.024.147 1.41.09.43-.063 1.325-.541 1.512-1.063.187-.523.187-.972.13-1.063-.056-.092-.205-.149-.43-.262z"/>
          </svg>
        </button>
      </div>

      {/* Global Navbar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenBookModal={() => handleOpenBookModal("general")}
      />

      {/* MAIN RENDER ENGINE */}
      <main className="flex-grow z-10 w-full">
        
        {/* ====================================================
            PAGE 1: HOME PAGE VIEW
            ==================================================== */}
        {currentPage === "home" && (
          <div id="home-view-wrapper" className="animate-in fade-in duration-700">
            {/* Cinematic Hero */}
            <Hero
              onOpenBookModal={() => handleOpenBookModal("general")}
              onNavigateToSupplements={() => setCurrentPage("supplements")}
            />

            {/* Section 2 — TWO VERTICALS (What We Do Cards) */}
            <section id="two-verticals-split" className="py-24 bg-[#050505] relative z-10 border-t border-white/5 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                  <span className="font-mono text-[9px] text-[#00E5A8] uppercase tracking-widest bg-white/2 border border-white/8 px-3 py-1 rounded-full font-bold">
                    // Operational Expertise
                  </span>
                  <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                    Our Two Fields of Expertise
                  </h2>
                  <p className="font-sans text-xs text-[#A8A8A8] max-w-xl mx-auto">
                    Sydney Doctor Biohealth operates two distinct clinical-grade divisions focused on restoring baseline human power.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  
                  {/* Left Column Card: Performance Medicine */}
                  <div
                    id="expertise-medicine-card"
                    onMouseMove={handleMedicineMouseMove}
                    onClick={() => setIsMedicineExpanded(!isMedicineExpanded)}
                    className="group relative overflow-hidden bg-[#0D0D0D] border border-white/5 hover:border-[#00E5A8]/45 rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] flex flex-col justify-between text-left shadow-xl hover:shadow-[0_0_30px_rgba(0,229,168,0.2)] cursor-pointer select-none"
                  >
                    {/* Premium Radial Shimmer Overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-0"
                      style={{
                        background: "radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(0, 229, 168, 0.10), transparent 80%)",
                      }}
                    />

                    <div className="space-y-6 relative z-10 w-full">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-[#00E5A8] tracking-widest font-bold">FIELD 01 // MEDICAL PRACTICE</span>
                        <div className="w-2 h-2 rounded-full bg-[#00E5A8] animate-pulse" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-sans font-extrabold text-2xl text-white group-hover:text-[#00E5A8] transition-colors">
                          Performance Medicine Clinic
                        </h3>
                        <p className="font-sans text-xs text-[#A8A8A8] leading-relaxed">
                          Our clinic is built around the science of how your body performs. Under the direct supervision of Dr. Arun Maji, every consultation is structured, evidence-based, and results-driven. We assess your physiology, identify the real cause of your condition, and create a personalised protocol — not a generic prescription.
                        </p>
                      </div>

                      <div className="space-y-2.5 pt-2 border-t border-white/5">
                        <p className="font-mono text-[9px] text-[#A8A8A8] tracking-widest uppercase mb-1">CLINICAL TREATMENT DEPOTS:</p>
                        {SERVICES_DATA.slice(0, 4).map((service, i) => (
                          <div key={i} className="flex items-center space-x-2 text-xs text-[#A8A8A8]">
                            <Check className="w-3.5 h-3.5 text-[#00E5A8]" />
                            <span>{service.shorthand}</span>
                          </div>
                        ))}
                      </div>

                      {/* Expandable Clinical Sub-details */}
                      <div 
                        className="transition-all duration-500 ease-in-out overflow-hidden"
                        style={{
                          maxHeight: isMedicineExpanded ? '600px' : '0px',
                          opacity: isMedicineExpanded ? 1 : 0,
                          marginTop: isMedicineExpanded ? '1.5rem' : '0px',
                          paddingTop: isMedicineExpanded ? '1.5rem' : '0px',
                          borderTop: isMedicineExpanded ? '1px solid rgba(255,255,255,0.08)' : 'none'
                        }}
                      >
                        <p className={`font-mono text-[9px] text-[#00E5A8] tracking-widest uppercase mb-3 transition-all duration-500 transform ${
                          isMedicineExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                        }`}>// CLINICAL METHOD DEPTH</p>
                        <div className="space-y-4">
                          <div 
                            className={`space-y-1 transition-all duration-500 ease-out transform ${
                              isMedicineExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                            style={{ transitionDelay: isMedicineExpanded ? '100ms' : '0ms' }}
                          >
                            <h4 className="text-xs font-semibold text-white flex items-center space-x-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5A8]" />
                              <span>01 // Biological Screening Matrix</span>
                            </h4>
                            <p className="text-[11px] text-[#A8A8A8] pl-3 leading-relaxed">
                              Deep diagnostic testing of over 45 critical biomarkers including metabolic rates, dynamic hormones, thyroid ratios, and inflammation limits (hs-CRP, Homocysteine).
                            </p>
                          </div>
                          <div 
                            className={`space-y-1 transition-all duration-500 ease-out transform ${
                              isMedicineExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                            style={{ transitionDelay: isMedicineExpanded ? '200ms' : '0ms' }}
                          >
                            <h4 className="text-xs font-semibold text-white flex items-center space-x-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5A8]" />
                              <span>02 // Cellular Optimization Protocols</span>
                            </h4>
                            <p className="text-[11px] text-[#A8A8A8] pl-3 leading-relaxed">
                              Scientifically tailored clinical pathways focusing on mitochondrial output, metabolic speed control, and dynamic cellular repairs.
                            </p>
                          </div>
                          <div 
                            className={`space-y-1 transition-all duration-500 ease-out transform ${
                              isMedicineExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                            style={{ transitionDelay: isMedicineExpanded ? '300ms' : '0ms' }}
                          >
                            <h4 className="text-xs font-semibold text-white flex items-center space-x-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5A8]" />
                              <span>03 // Direct Physician Review Metrics</span>
                            </h4>
                            <p className="text-[11px] text-[#A8A8A8] pl-3 leading-relaxed">
                              Continuous evaluation supervised directly by Dr. Arun Maji, ensuring safety parameters align with Australian longevity guidance.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Interactive Trigger Indicator */}
                      <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/5 group-hover:border-[#00E5A8]/20 transition-colors">
                        <span className="font-mono text-[9px] text-[#A8A8A8] group-hover:text-white transition-colors uppercase tracking-wider">
                          {isMedicineExpanded ? "Click to collapse clinical depth" : "Click to expand clinical depth"}
                        </span>
                        <ChevronDown className={`w-3.5 h-3.5 text-[#00E5A8] transition-transform duration-300 ${isMedicineExpanded ? "rotate-180" : ""}`} />
                      </div>
                    </div>

                    <button
                      id="home-field-medicine-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentPage("services");
                      }}
                      className="cursor-pointer w-full mt-8 py-3 rounded-xl bg-white/2 hover:bg-white/5 border border-white/10 hover:border-white/20 text-white text-xs font-mono font-bold tracking-widest transition-all relative z-10"
                    >
                      EXPLORE CLINIC DEPARTMENTS →
                    </button>
                  </div>

                  {/* Right Column Card: Nutrition / Supplements */}
                  <div
                    id="expertise-supplements-card"
                    onClick={() => setIsSupplementsExpanded(!isSupplementsExpanded)}
                    className="group relative bg-[#0D0D0D] border border-white/5 hover:border-[#00C2FF]/45 rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] flex flex-col justify-between text-left shadow-xl hover:shadow-[0_0_30px_rgba(0,194,255,0.2)] cursor-pointer select-none"
                  >
                    <div className="space-y-6 w-full">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-[#00C2FF] tracking-widest font-bold">FIELD 02 // MOLECULAR HEALTH</span>
                        <div className="w-2 h-2 rounded-full bg-[#00C2FF]" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-sans font-extrabold text-2xl text-white group-hover:text-[#00C2FF] transition-colors">
                          Health & Performance Supplements
                        </h3>
                        <p className="font-sans text-xs text-[#A8A8A8] leading-relaxed">
                          Our supplement line is designed by a doctor, not a marketing team. Every formulation is evidence-led, safety-tested, and targeted at measurable outcomes. These are not off-the-shelf retail products — they are clinical-grade tools for people who demand real results.
                        </p>
                      </div>

                      <div className="space-y-2.5 pt-2 border-t border-white/5">
                        <p className="font-mono text-[9px] text-[#A8A8A8] tracking-widest uppercase mb-1">STANDARD FORMULATION DEPOTS:</p>
                        {[
                          "Men's & Women's Vitality Support",
                          "Performance Stamina Cellular Support",
                          "Cardiovascular Heart & Cognitive Support",
                          "Clinical Grade Bioavailable Multivitamins"
                        ].map((supp, i) => (
                          <div key={i} className="flex items-center space-x-2 text-xs text-[#A8A8A8]">
                            <Check className="w-3.5 h-3.5 text-[#00C2FF]" />
                            <span>{supp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Expandable Molecular Sub-details */}
                      <div 
                        className="transition-all duration-500 ease-in-out overflow-hidden"
                        style={{
                          maxHeight: isSupplementsExpanded ? '600px' : '0px',
                          opacity: isSupplementsExpanded ? 1 : 0,
                          marginTop: isSupplementsExpanded ? '1.5rem' : '0px',
                          paddingTop: isSupplementsExpanded ? '1.5rem' : '0px',
                          borderTop: isSupplementsExpanded ? '1px solid rgba(255,255,255,0.08)' : 'none'
                        }}
                      >
                        <p className={`font-mono text-[9px] text-[#00C2FF] tracking-widest uppercase mb-3 transition-all duration-500 transform ${
                          isSupplementsExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                        }`}>// MOLECULAR SPECIFICATION DETAILS</p>
                        <div className="space-y-4">
                          <div 
                            className={`space-y-1 transition-all duration-500 ease-out transform ${
                              isSupplementsExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                            style={{ transitionDelay: isSupplementsExpanded ? '100ms' : '0ms' }}
                          >
                            <h4 className="text-xs font-semibold text-white flex items-center space-x-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF]" />
                              <span>01 // Synergistic Bioavailability</span>
                            </h4>
                            <p className="text-[11px] text-[#A8A8A8] pl-3 leading-relaxed">
                              Ingredients are structured in exact bio-equivalent ratios. No cheap oxides or chemical synthetic binders; optimal cellular target absorption speed is guaranteed.
                            </p>
                          </div>
                          <div 
                            className={`space-y-1 transition-all duration-500 ease-out transform ${
                              isSupplementsExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                            style={{ transitionDelay: isSupplementsExpanded ? '200ms' : '0ms' }}
                          >
                            <h4 className="text-xs font-semibold text-white flex items-center space-x-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF]" />
                              <span>02 // Certified Batch Auditing</span>
                            </h4>
                            <p className="text-[11px] text-[#A8A8A8] pl-3 leading-relaxed">
                              Cooked carefully in certified local environments. Every batch is fully lab-tested to verify composition potency, absolute wellness safety, and pure concentration bounds.
                            </p>
                          </div>
                          <div 
                            className={`space-y-1 transition-all duration-500 ease-out transform ${
                              isSupplementsExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                            style={{ transitionDelay: isSupplementsExpanded ? '300ms' : '0ms' }}
                          >
                            <h4 className="text-xs font-semibold text-white flex items-center space-x-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF]" />
                              <span>03 // Therapeutic Molecule Delivery</span>
                            </h4>
                            <p className="text-[11px] text-[#A8A8A8] pl-3 leading-relaxed">
                              Bespoke micronized delivery vesicles designed to survive standard digestion pathways intact, ensuring higher cellular receptor bio-retention.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Interactive Trigger Indicator */}
                      <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/5 group-hover:border-[#00C2FF]/20 transition-colors">
                        <span className="font-mono text-[9px] text-[#A8A8A8] group-hover:text-white transition-colors uppercase tracking-wider">
                          {isSupplementsExpanded ? "Click to collapse molecular detail" : "Click to expand molecular detail"}
                        </span>
                        <ChevronDown className={`w-3.5 h-3.5 text-[#00C2FF] transition-transform duration-300 ${isSupplementsExpanded ? "rotate-180" : ""}`} />
                      </div>
                    </div>

                    <button
                      id="home-field-supplements-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentPage("supplements");
                      }}
                      className="cursor-pointer w-full mt-8 py-3 rounded-xl bg-gradient-to-r from-[#00C2FF] to-[#00E5A8] text-[#050505] text-xs font-mono font-bold tracking-widest transition-all shadow-md hover:opacity-90 relative z-10"
                    >
                      BROWSE PREMIUM CATALOGUE →
                    </button>
                  </div>

                </div>
              </div>
            </section>

            {/* Three Masters of Safety & Our Identity Sections inside modular component */}
            <ThreeMastersAndIdentity />

            {/* Dr. Arun Maji Founder Intro Section */}
            <DoctorSpotlight onNavigateToAbout={() => setCurrentPage("about")} />

            {/* Why Sydney Doctor - 8 Trust Points Grid */}
            <section id="why-sydney-doctor-home" className="py-24 bg-[#0D0D0D]/40 relative z-10 border-t border-white/5 text-left">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center space-y-4 mb-16">
                  <div className="inline-flex items-center space-x-1.5 bg-white/2 border border-white/8 px-3 py-1 rounded-full font-mono text-[9px] text-[#00C2FF] uppercase tracking-widest">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00C2FF]" />
                    <span>Global Standard Benchmarks</span>
                  </div>
                  <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                    Why Choose Sydney Doctor?
                  </h2>
                  <p className="font-sans text-xs text-[#A8A8A8] max-w-xl mx-auto">
                    Eight rigorous commitments we hold ourselves to, separating our performance practice from standard localized clinics.
                  </p>
                </div>

                {/* 8 Trust Points cards */}
                <div id="trust-points-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {TRUST_POINTS.map((tp, i) => (
                    <div
                      key={i}
                      className="bg-[#0D0D0D]/90 border border-white/5 hover:border-[#00E5A8]/30 hover:shadow-[0_0_25px_rgba(0,229,168,0.15)] p-5 rounded-xl space-y-3 hover:-translate-y-1 transition-all duration-300 shadow-md text-left"
                    >
                      <div className="w-8 h-8 rounded bg-[#00E5A8]/5 border border-[#00E5A8]/20 flex items-center justify-center text-[#00E5A8] font-mono text-[10px] font-bold">
                        0{i+1}
                      </div>

                      <div className="space-y-1">
                        <h4 className="font-sans font-bold text-sm text-white">{tp.title}</h4>
                        <p className="font-sans text-xs text-[#A8A8A8] leading-relaxed">{tp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* Performance Journey Step vertical layout */}
            <section id="performance-journey-timeline" className="py-24 bg-[#050505] relative z-10 border-t border-white/5 text-left">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center space-y-4 mb-20">
                  <span className="font-mono text-[9px] text-[#00E5A8] uppercase tracking-widest bg-white/2 border border-white/8 px-3 py-1 rounded-full font-bold">
                    // Progression Method
                  </span>
                  <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                    Your Performance Journey
                  </h2>
                  <p className="font-sans text-xs text-[#A8A8A8] max-w-xl mx-auto">
                    We track biological baseline levels step-by-step. Discover how Sydney Doctor structures your optimal health cycle.
                  </p>
                </div>

                {/* Performance progression flow rows with side step counters */}
                <div className="relative border-l border-white/8 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-12">
                  {PERFORMANCE_JOURNEY.map((pt, i) => (
                    <div key={i} className="relative space-y-2 group">
                      
                      {/* Step Indicator absolute badge */}
                      <div className="absolute -left-[54px] sm:-left-[70px] top-1.5 w-10 h-10 rounded-full bg-[#050505] border border-white/8 text-[#A8A8A8] group-hover:border-[#00E5A8] group-hover:text-[#00E5A8] font-mono text-xs font-bold flex items-center justify-center transition-colors">
                        {pt.step}
                      </div>

                      <div className="space-y-1 text-left">
                        <span className="block font-mono text-[9px] text-[#00C2FF] uppercase tracking-wider font-semibold">
                          STAGE {pt.step} // {pt.name}
                        </span>
                        <h3 className="font-sans font-bold text-lg text-white leading-tight">
                          {pt.title}
                        </h3>
                        <p className="font-sans text-xs text-[#A8A8A8] leading-relaxed max-w-xl">
                          {pt.desc}
                        </p>
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* Patient Testimonials Slide view */}
            <section id="testimonials-teaser-home" className="py-24 bg-[#0D0D0D]/40 relative z-10 border-t border-white/5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                  <span className="font-mono text-[9px] text-[#00E5A8] uppercase tracking-widest bg-white/2 border border-white/8 px-3 py-1 rounded-full font-bold">
                    // Clinical Transformations
                  </span>
                  <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                    Patient Transmissions
                  </h2>
                  <p className="font-sans text-xs text-[#A8A8A8] max-w-xl mx-auto">
                    Real, verified accounts of Kolkata partners returning their bodies to maximum power floors.
                  </p>
                </div>

                {/* Auto Playing Carousel */}
                <TestimonialsWall isPageMode={false} />

                {/* Read more button leading directly to Testimonials view */}
                <div className="text-center mt-10">
                  <button
                    id="homepage-view-testimonials-btn"
                    onClick={() => setCurrentPage("testimonials")}
                    className="cursor-pointer inline-flex items-center space-x-1.5 text-xs font-mono text-[#00E5A8] hover:text-[#00C2FF] transition-all bg-white/2 hover:bg-white/5 border border-white/8 px-6 py-3 rounded-xl"
                  >
                    <span>BROWSE ALL 10 CHRONICLES</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </section>

            {/* Massive Trust FAQs Section */}
            <section id="homepage-faqs" className="py-24 bg-[#050505] relative z-10 border-t border-white/5 text-left">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center space-y-4 mb-16">
                  <span className="font-mono text-[9px] text-[#00C2FF] uppercase tracking-widest bg-white/2 border border-white/8 px-3 py-1 rounded-full font-bold">
                    // Clinical Inquiries
                  </span>
                  <h2 className="font-sans font-extrabold text-3xl text-white tracking-tight">
                    Frequently Asked Questions
                  </h2>
                  <p className="font-sans text-xs text-[#A8A8A8] max-w-xl mx-auto">
                    Clear answers explaining the Performance Medicine system we operate.
                  </p>
                </div>

                <div id="faq-accordion-rows" className="space-y-4.5">
                  {FAQS.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="bg-[#0D0D0D]/70 border border-white/5 rounded-xl overflow-hidden transition-all duration-300"
                      >
                        <button
                          onClick={() => setActiveFaq(isOpen ? null : idx)}
                          className="w-full text-left p-5 flex items-center justify-between text-white font-sans text-sm font-bold tracking-wide focus:outline-none cursor-pointer"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown className={`w-4 h-4 text-[#00E5A8] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                        
                        <div
                          className={`transition-all duration-500 overflow-hidden ${
                            isOpen ? "max-h-48 border-t border-white/5 p-5 text-xs leading-relaxed text-[#A8A8A8] text-justify" : "max-h-0"
                          }`}
                        >
                          {faq.a}
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </section>

            {/* Massive Convert Appointment CTA Block */}
            <section id="home-cta-hero-block" className="py-28 bg-[#0D0D0D] relative z-10 border-t border-white/5 overflow-hidden text-center">
              {/* Massive ambient lighting */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00E5A8]/5 via-transparent to-transparent pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="inline-flex items-center space-x-1.5 bg-[#00E5A8]/5 border border-[#00E5A8]/15 px-3 py-1 rounded-full font-mono text-[9px] text-[#00E5A8] uppercase tracking-widest font-extrabold">
                  <Star className="w-3 h-3 fill-[#00E5A8]" />
                  <span>Reserve Consultation Now</span>
                </div>

                <div className="space-y-3">
                  <h2 className="font-display font-extrabold text-3xl sm:text-4.5xl text-white tracking-tight leading-tight">
                    Your Performance Starts With <br />
                    A Single Appointment.
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-[#A8A8A8] leading-relaxed max-w-xl mx-auto">
                    Limited consultation slots available. Dr. Maji's clinical schedule fills quickly. Secure your slot and take the first step towards a body that performs the way it should.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <button
                    id="homepage-cta-block-action"
                    onClick={() => handleOpenBookModal("general")}
                    className="cursor-pointer w-full sm:w-auto px-8 py-4.5 rounded-xl bg-gradient-to-r from-[#00E5A8] to-[#00C2FF] text-[#050505] font-mono font-black text-xs tracking-widest shadow-xl shadow-[#00E5A8]/15 hover:shadow-[#00E5A8]/30 transition-all text-center"
                  >
                    SECURE MY APPOINTMENT NOW →
                  </button>

                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="w-full sm:w-auto px-8 py-4 bg-white/2 hover:bg-white/5 border border-white/10 hover:border-white/20 text-white font-mono font-bold text-xs tracking-widest rounded-xl transition-all block text-center"
                  >
                    CALL CLINIC: {CLINIC_INFO.phone}
                  </a>
                </div>

                <p className="font-mono text-[9px] text-[#A8A8A8] tracking-wider">
                  CLINIC DIRECT DEPOSIT FOR RESERVATIONS: KASBA ROAD, KOLKATA
                </p>
              </div>
            </section>

          </div>
        )}

        {/* ====================================================
            PAGE 2: ABOUT US PAGE VIEW
            ==================================================== */}
        {currentPage === "about" && (
          <div id="about-us-view-wrapper" className="animate-in fade-in duration-500 py-24 text-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
              
              {/* Header Hero */}
              <div className="space-y-6 max-w-3xl">
                <span className="font-mono text-[10px] text-[#00E5A8] uppercase tracking-widest font-bold">// Our Story & Mission</span>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
                  Built on Science. <br />
                  Driven by Purpose. <br />
                  Committed to You.
                </h1>
                <p className="font-sans text-sm sm:text-base text-[#A8A8A8] leading-relaxed">
                  Sydney Doctor Biohealth was founded on a simple but radical belief: that every person deserves access to the same level of care that elite athletes and international patients receive. Structured. Evidence-based. Uncompromising.
                </p>
              </div>

              {/* Section 2: Mission Statement */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-white/5 items-center">
                <div className="space-y-4">
                  <h2 className="font-display font-extrabold text-2.5xl text-white">Our Mission</h2>
                  <p className="font-sans text-xs sm:text-sm text-[#A8A8A8] leading-relaxed text-justify">
                    We exist to close the gap between what most people accept about their health and what is actually possible. Too many people are told "your results are normal" when they feel anything but normal. Too many are given generic advice when they need personalised protocols. Too many settle for a body that underperforms.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="font-sans text-xs sm:text-sm text-[#A8A8A8] leading-relaxed text-justify">
                    Sydney Doctor Biohealth was established to change that — in Kolkata, in India, and beyond. Through performance medicine consulting and clinically-formulated supplements, we restore function, energy, and confidence to people who have the ambition to demand more from themselves.
                  </p>
                </div>
              </div>

              {/* Section 3: Founder Deep Profile */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 border-t border-white/5">
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative rounded-xl overflow-hidden border border-white/5 bg-[#0D0D0D] p-3 shadow-xl">
                    <img
                      src={IMAGES.drArunMaji}
                      alt="Dr. Arun Maji"
                      className="w-full h-auto aspect-square object-cover rounded-lg filter grayscale"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Credentials snapshot box */}
                  <div className="bg-[#0D0D0D]/50 border border-white/5 p-5 rounded-lg space-y-3">
                    <h4 className="font-mono text-[9px] text-[#00E5A8] uppercase tracking-widest font-extrabold">CREDENTIALS SNAPSHOT</h4>
                    <ul className="space-y-2 font-mono text-[10px] text-[#A8A8A8]">
                      <li className="flex items-center space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#00E5A8]" />
                        <span>20+ Years Clinical Practice (Sydney, Aust)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#00E5A8]" />
                        <span>Military Medical Officer, India-Australia</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#00E5A8]" />
                        <span>RACGP Specialty Trainer, Queensland</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#00E5A8]" />
                        <span>Author of Multiple Clinical Books</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-1">
                    <span className="font-mono text-[#00E5A8] text-[10px] uppercase tracking-widest font-bold">FOUNDER PROFILE</span>
                    <h2 className="font-sans font-black text-2.5xl sm:text-3.5xl text-white">Dr. Arun Maji</h2>
                    <p className="font-mono text-xs text-[#00C2FF] font-semibold">Founder, CEO & Performance Medicine Specialist</p>
                  </div>

                  <div className="space-y-4 font-sans text-xs sm:text-sm text-[#A8A8A8] leading-relaxed text-justify">
                    <p>
                      Dr. Arun Maji brings a rare combination of international clinical experience, military discipline, and scientific rigour to the practice of performance medicine.
                    </p>
                    <p>
                      Over a career spanning more than two decades, Dr. Maji practised as a clinician in Sydney, Australia — one of the world's most demanding healthcare environments — before bringing that expertise back to Kolkata. His time in Sydney shaped his approach to medicine: structured, measurable, outcome-focused, and always evidence-led.
                    </p>
                    <p>
                      He has served as a medical officer in the Indian and Australian military, an experience that instilled in him the foundational belief that the human body, when properly assessed and supported, is capable of extraordinary things. He also served as a RACGP (Royal Australian College of General Practitioners) Specialty Trainer in Queensland, mentoring the next generation of general practitioners in evidence-based care.
                    </p>
                    <p>
                      Dr. Maji is also a published medical author, with multiple clinical books to his name — a testament to his commitment to advancing the science of performance health.
                    </p>
                    <p className="p-4 rounded bg-[#0D0D0D]/40 border-l-2 border-[#00E5A8] text-white/90">
                      "At Sydney Doctor Biohealth, he leads every consultation personally. He does not delegate diagnosis. He does not outsource clinical decision-making. He treats each patient as a case study deserving of full clinical attention."
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4: Three-Pillar Governing Council */}
              <div className="pt-16 border-t border-white/5 space-y-12 text-left">
                <div className="space-y-2">
                  <span className="font-mono text-[9px] text-[#00C2FF] uppercase tracking-widest font-bold">OPERATIONAL STRUCTURE</span>
                  <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white">Our Governing Council</h2>
                  <p className="font-sans text-xs text-[#A8A8A8] max-w-lg leading-relaxed">
                    Sydney Doctor Biohealth operates under a structured three-pillar leadership model. Every decision passes through the lens of Science, Discipline, and Safety.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  {[
                    { role: "CEO & Founder", pillar: "Science", desc: "Provides the clinical vision, scientific framework, and evidence standards that underpin each diagnostic test, clinic guidance, and product compound formulated." },
                    { role: "Operation Manager", pillar: "Discipline", desc: "Oversees daily clinic operations, appointment allocation pipelines, and product fulfillment systems, matching premium client experience." },
                    { role: "Regulatory Compliance Specialist", pillar: "Safety", desc: "Guarantees strict compliance with Indian and Australian pharmaceutical safety frameworks, benchmarking baseline products to international audits." }
                  ].map((council, cIdx) => (
                    <div key={cIdx} className="bg-[#0D0D0D] border border-white/5 p-6 rounded-xl space-y-3">
                      <span className="font-mono text-[9px] text-[#00E5A8] uppercase tracking-widest">PILLAR // {council.pillar}</span>
                      <h4 className="font-sans font-bold text-sm text-white">{council.role}</h4>
                      <p className="font-sans text-xs text-[#A8A8A8] leading-relaxed">{council.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 5: Matrix Comparison Chart (What others do vs what we do) */}
              <div className="pt-16 border-t border-white/5 space-y-12">
                <div className="space-y-1">
                  <span className="font-mono text-[#00C2FF] text-[9px] uppercase tracking-widest font-bold">// Paradigm Matrix</span>
                  <h2 className="font-sans font-extrabold text-2xl text-white">The Sydney Doctor Difference</h2>
                </div>

                {/* Mobile View: Vertical Comparison Cards */}
                <div className="block md:hidden space-y-6">
                  {[
                    { other: "Generic protocols and prescriptions for everyone.", we: "Personalised, deep cellular baseline diagnostic assessment for each patient." },
                    { other: "Supplements designed by commercial marketing teams.", we: "Formulations designed directly by an internationally experienced medical doctor." },
                    { other: "Push massive volume, rushing through patients like a factory.", we: "Limited capacity care, guaranteeing deeper clinical minutes per consultation." },
                    { other: "Treat symptoms reactively using local generic templates.", we: "Identify and resolve metabolic and dynamic hormonal root causes actively." },
                    { other: "Basic low-standard regulatory adherence.", we: "Benchmark operations against high-tier Australian general medicine and longevity guidelines." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-[#0D0D0D]/70 border border-white/5 rounded-xl p-5 space-y-4 hover:border-[#00E5A8]/20 transition-all duration-300">
                      <div className="space-y-1.5 pb-3 border-b border-white/5 text-left">
                        <span className="text-[9px] font-mono text-red-500/80 uppercase tracking-widest block font-bold">❌ What Others Do</span>
                        <p className="text-xs text-[#A8A8A8] leading-relaxed">{item.other}</p>
                      </div>
                      <div className="space-y-1.5 text-left">
                        <span className="text-[9px] font-mono text-[#00E5A8] uppercase tracking-widest block font-bold">✓ What We Do</span>
                        <p className="text-xs text-white font-semibold leading-relaxed">{item.we}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Laptop/Desktop View: Authentic Matrix Table */}
                <div className="hidden md:block overflow-x-auto rounded-xl border border-white/8">
                  <table className="w-full min-w-[500px] border-collapse bg-[#0D0D0D]/50 text-left font-sans text-xs leading-relaxed">
                    <thead>
                      <tr className="border-b border-white/8 bg-white/2">
                        <th className="p-4 font-mono text-[10px] text-[#A8A8A8] uppercase tracking-widest w-1/2">WHAT OTHERS DO</th>
                        <th className="p-4 font-mono text-[10px] text-[#00E5A8] uppercase tracking-widest w-1/2">WHAT WE DO</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        { other: "Generic protocols and prescriptions for everyone.", we: "Personalised, deep cellular baseline diagnostic assessment for each patient." },
                        { other: "Supplements designed by commercial marketing teams.", we: "Formulations designed directly by an internationally experienced medical doctor." },
                        { other: "Push massive volume, rushing through patients like a factory.", we: "Limited capacity care, guaranteeing deeper clinical minutes per consultation." },
                        { other: "Treat symptoms reactively using local generic templates.", we: "Identify and resolve metabolic and dynamic hormonal root causes actively." },
                        { other: "Basic low-standard regulatory adherence.", we: "Benchmark operations against high-tier Australian general medicine and longevity guidelines." }
                      ].map((item, idx) => (
                        <tr key={idx} className="hover:bg-white/2 transition-colors">
                          <td className="p-4 text-[#A8A8A8] border-r border-white/5">{item.other}</td>
                          <td className="p-4 text-white font-semibold flex items-center space-x-2">
                            <span className="text-[#00E5A8] font-bold">✓</span>
                            <span>{item.we}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 6: CTA Block */}
              <div className="pt-16 border-t border-white/5">
                <div className="bg-[#0D0D0D] border border-white/5 p-8 sm:p-12 rounded-2xl text-center space-y-6">
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    Ready to Experience the Sydney Doctor Difference?
                  </h2>
                  <p className="font-sans text-xs text-[#A8A8A8] max-w-lg mx-auto">
                    Your first consultation is an in-depth, structured case audit—not a brief, unverified chat. Please secure your console slot in advance.
                  </p>
                  <div>
                    <button
                      id="about-view-book-btn"
                      onClick={() => handleOpenBookModal("general")}
                      className="cursor-pointer px-8 py-4 rounded-xl bg-gradient-to-r from-[#00E5A8] to-[#00C2FF] text-[#050505] font-mono font-bold text-xs tracking-widest transition-all hover:scale-[1.02]"
                    >
                      BOOK YOUR EXPERT APPOINTMENT NOW
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ====================================================
            PAGE 3: SERVICES PAGE VIEW
            ==================================================== */}
        {currentPage === "services" && (
          <div id="services-view-wrapper" className="animate-in fade-in duration-500 py-24 text-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
              
              {/* Header Hero */}
              <div className="space-y-4 max-w-3xl">
                <span className="font-mono text-[10px] text-[#00E5A8] uppercase tracking-widest font-bold">// Clinical Programs</span>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
                  Two Fields. Unlimited Potential.
                </h1>
                <p className="font-sans text-sm text-[#A8A8A8] leading-relaxed">
                  Whether you need comprehensive cellular clinical intervention or scientifically calibrated organic supplementation, Sydney Doctor Biohealth delivers doctor-led protocols for the performance-focused individual.
                </p>
              </div>

              {/* Clinic Services Headline */}
              <div className="pt-12 border-t border-white/5 space-y-4">
                <h2 className="font-sans font-black text-2.5xl text-white">Performance Medicine Clinic</h2>
                <p className="font-sans text-xs text-[#A8A8A8] max-w-2xl leading-relaxed">
                  Our clinic is not a walk-in centre. It is a structured, appointment-based performance medicine practice led directly by Dr. Arun Maji. Each consultation is a deep clinical evaluation — thorough, evidence-based, and targeted at your specific goals and challenges.
                </p>
              </div>

              {/* Grid of the 5 Services */}
              <div id="services-page-expanded-cards" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICES_DATA.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                    onSelectService={(id) => handleOpenBookModal(id)}
                  />
                ))}
              </div>

              {/* Supplements Page Redirection Block */}
              <div className="pt-16 border-t border-white/5">
                <div className="bg-[#0D0D0D]/50 border border-white/5 rounded-2xl p-6.5 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 text-left">
                    <h3 className="font-sans font-bold text-lg text-white">Looking for Doctor Formulated Supplements?</h3>
                    <p className="font-sans text-xs text-[#A8A8A8] max-w-xl">
                      Explore our clinical-grade active organic multivitamin and vitality formulas, designed for maximum absorption rates under high standards.
                    </p>
                  </div>
                  <button
                    id="services-to-supplements-btn"
                    onClick={() => setCurrentPage("supplements")}
                    className="cursor-pointer font-mono font-bold text-xs tracking-widest text-[#00E5A8] whitespace-nowrap bg-white/2 hover:bg-white/5 border border-white/10 px-6 py-3 rounded-xl transition-all"
                  >
                    EXPLORE SUPPLS LINES →
                  </button>
                </div>
              </div>

              {/* Section 4: General Consultation CTA */}
              <div className="pt-14 text-center space-y-6">
                <h2 className="font-display font-extrabold text-2xl text-white">Not Sure Which Service Is Right for You?</h2>
                <p className="font-sans text-xs text-[#A8A8A8] max-w-md mx-auto leading-relaxed">
                  Book a baseline session and allow Dr. Maji to evaluate your situation in full. Every diagnostic journey starts with an extensive in-depth clinical conversation.
                </p>
                <div>
                  <button
                    id="services-general-appoint-btn"
                    onClick={() => handleOpenBookModal("general")}
                    className="cursor-pointer px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00E5A8] to-[#00C2FF] text-[#050505] font-mono font-bold text-xs tracking-widest hover:scale-[1.02] transition-transform shadow-xl"
                  >
                    BOOK YOUR INITIAL EVALUATION
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ====================================================
            PAGE 4: SUPPLEMENTS PAGE VIEW
            ==================================================== */}
        {currentPage === "supplements" && (
          <div id="supplements-shop-view-wrapper" className="animate-in fade-in duration-500 py-24 text-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
              
              {/* Header Hero */}
              <div className="space-y-4 max-w-3xl">
                <span className="font-mono text-[10px] text-[#00E5A8] uppercase tracking-widest font-bold">// Science-grade Wellness</span>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
                  Two Fields. <br />
                  One Standard: Absolute Quality.
                </h1>
                <p className="font-sans text-sm text-[#A8A8A8] leading-relaxed">
                  Sydney Doctor supplement range was built on one principle: if we would not prescribe it in active Australian care, we would not sell it. Every product formula is doctor-designed, evidence-validated, and produced under strict local drug compliance rules.
                </p>
              </div>

              {/* Supplements Section Component embedding dynamic cards and preorder flow */}
              <SupplementsSection
                onPreOrderProduct={(name) => handleOpenBookModal(`Supplement: ${name}`)}
                isShopView={true}
              />

              {/* CTA section */}
              <div className="pt-12 text-center space-y-6 max-w-2xl mx-auto">
                <p className="font-sans text-xs text-[#A8A8A8] leading-relaxed">
                  * Note: Pre-orders are catalogued securely. Since we maintain low manufacturing batches to ensure absolute active cellular molecule consistency, our clinical desk will contact you regarding delivery windows and batch reservations.
                </p>
                <div>
                  <button
                    id="supplements-special-consult-btn"
                    onClick={() => handleOpenBookModal("supplements")}
                    className="cursor-pointer px-8 py-3.5 bg-[#0D0D0D] hover:bg-[#0D0D0D]/90 border border-white/8 rounded-xl font-mono text-xs text-[#00E5A8] tracking-widest transition-transform hover:scale-[1.02]"
                  >
                    TALK TO A NUTRITION AUDITOR
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ====================================================
            PAGE 5: TESTIMONIALS PAGE VIEW
            ==================================================== */}
        {currentPage === "testimonials" && (
          <div id="testimonials-full-view-wrapper" className="animate-in fade-in duration-500 py-24 text-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
              
              {/* Header Hero */}
              <div className="space-y-4 max-w-3xl">
                <span className="font-mono text-[10px] text-[#00E5A8] uppercase tracking-widest font-bold">// Real Clinical Successes</span>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
                  Real People. <br />
                  Real Science. <br />
                  Real Results.
                </h1>
                <p className="font-sans text-sm text-[#A8A8A8] leading-relaxed">
                  We do not promise quick fitness miracles. We deliver measured metabolic outcomes, guided by science. Discover the chronicles of 10 real patients who stopped guessing and secured actual progress.
                </p>
              </div>

              {/* Priyanka expanded story card */}
              <div className="bg-[#0D0D0D] border border-white/8 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#00E5A8]/5 rounded-full filter blur-3xl pointer-events-none" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
                  <div className="lg:col-span-8 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-[9px] bg-[#00E5A8]/10 text-[#00E5A8] border border-[#00E5A8]/20 rounded px-2.5 py-0.5 font-bold uppercase">
                        Featured Transformation Case Study
                      </span>
                      <span className="font-mono text-[9px] text-[#A8A8A8]">PATIENT // PRIYANKA, KOLKATA</span>
                    </div>

                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight italic leading-relaxed">
                      "I thought I was simply unfit. Tests revealed low iron, B12, and D. Once resolved with the right clinical protocol, everything changed. Don't train blindly. Train guided by science."
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#A8A8A8] leading-relaxed text-justify opacity-85">
                      "I thought I was simply unfit. Five minutes into any training session, I was already breathless and exhausted. I had accepted it as my normal. Through Sydney Doctor's health education and diagnostic approach, I learned to consider what was happening inside my body — not just on the surface. Tests revealed low iron, low Vitamin B12, and low Vitamin D. Once those deficiencies were identified and corrected with the right clinical protocol, everything changed. I now train for forty minutes with complete ease. Don't train blindly."
                    </p>

                    <div className="pt-2 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                      <div>
                        <span className="block text-[#00C2FF] text-[10px] tracking-widest font-bold">METRIC OUTCOME</span>
                        <p className="text-white mt-1">Corrected 3 major clinical deficiencies; full returned physical exercise endurance.</p>
                      </div>
                      <div>
                        <span className="block text-[#00E5A8] text-[10px] tracking-widest font-bold">ESSENTIAL LESSON</span>
                        <p className="text-white mt-1">Always audit root molecular blockages before attributing poor performance to effort.</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-[#050510] border border-white/5 p-6 rounded-xl space-y-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#00E5A8]/10 text-[#00E5A8] flex items-center justify-center mx-auto">
                      <Star className="w-6 h-6 fill-[#00E5A8]" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-white text-md">Case Approved</h4>
                      <p className="font-mono text-[9px] text-[#A8A8A8] uppercase mt-0.5">Clinical Protocol Completed</p>
                    </div>
                    <p className="font-sans text-[11px] text-[#A8A8A8] leading-relaxed">
                      "Priyanka's narrative shows exactly how hidden physiological parameters drag down ambition."
                    </p>
                  </div>
                </div>
              </div>

              {/* Science corner educational trust */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-white/5 items-center">
                <div className="space-y-4">
                  <h3 className="font-sans font-bold text-xl text-white">Why Science-Guided Health Works</h3>
                  <p className="font-sans text-xs text-[#A8A8A8] leading-relaxed text-justify">
                    Priyanka's story is not unique — it is the norm. Most people who struggle with fatigue, weight gain, low libido, or declining performance are not failing due to lack of willpower. They are dealing with diagnosable, treatable clinical conditions that are simply going undetected.
                  </p>
                </div>
                <div className="space-y-4 font-sans text-xs text-[#A8A8A8] leading-relaxed text-justify">
                  <p>
                    Low iron leads to poor oxygen delivery — resulting in breathlessness, fatigue, and reduced exercise capacity. Low Vitamin B12 impairs nerve function and energy metabolism. Low Vitamin D affects mood, immunity, muscle function, and hormonal balance.
                  </p>
                  <p className="font-mono text-[10px] text-white font-semibold">
                    These require clinical diagnostics and solution paradigms—not generic gym memberships or motivational wellness slogans.
                  </p>
                </div>
              </div>

              {/* Full Wall of all 10 Testimonials Grid */}
              <div className="pt-16 border-t border-white/5 space-y-12">
                <div>
                  <h2 className="font-sans font-extrabold text-2xl text-white">All Patient Chronicles</h2>
                  <p className="font-sans text-xs text-[#A8A8A8] mt-1">
                    Discover full details of all 10 real Google patient reviews. Names and ratings are preserved.
                  </p>
                </div>

                <TestimonialsWall isPageMode={true} />
              </div>

              {/* Contact redirection block */}
              <div className="pt-16 border-t border-white/5">
                <div className="bg-[#0D0D0D] border border-white/5 p-8 rounded-xl text-center space-y-4">
                  <h3 className="font-sans font-bold text-xl text-white">Your Story Deserves to Be Written</h3>
                  <p className="font-sans text-xs text-[#A8A8A8] max-w-md mx-auto">
                    Every transformation at Sydney Doctor begins with one key decision: choosing molecular science over guesswork. Book your consultation today.
                  </p>
                  <button
                    id="testimonials-bottom-book-btn"
                    onClick={() => handleOpenBookModal("general")}
                    className="cursor-pointer px-6 py-3.5 rounded-lg bg-[#00E5A8] text-[#050505] font-mono font-bold text-xs tracking-wider hover:opacity-95"
                  >
                    START MY CHRONICLE DIRECTLY
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ====================================================
            PAGE 6: CONTACT PAGE VIEW
            ==================================================== */}
        {currentPage === "contact" && (
          <div id="contact-us-view-wrapper" className="animate-in fade-in duration-500 py-24 text-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
              
              {/* Header Hero */}
              <div className="space-y-4 max-w-3xl">
                <span className="font-mono text-[10px] text-[#00E5A8] uppercase tracking-widest font-bold">// Strategic Coordination</span>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
                  Let's Begin Your <br />
                  Performance Journey.
                </h1>
                <p className="font-sans text-sm text-[#A8A8A8] leading-relaxed">
                  Whether you are ready to book a diagnostic consultation, have questions about our active supplement range, or want to know if Sydney Doctor matches your target goals — we are listening.
                </p>
              </div>

              {/* Embedded contact layout + mock map panels */}
              <ContactForm />

            </div>
          </div>
        )}

      </main>

      {/* Global Book Appointment Modal */}
      <LeadCaptureModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        defaultService={selectedServiceForModal}
      />

      {/* Global Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
