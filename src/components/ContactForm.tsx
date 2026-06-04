/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, Send, Sparkles, AlertTriangle } from "lucide-react";
import { CLINIC_INFO } from "../data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "appointment",
    message: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.consent) return;

    setIsSubmitting(true);
    
    // Construct highly structured physiological enquiry text
    const messageBody = `Hello Sydney Doctor Biohealth, I would like to submit a clinical enquiry:

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not specified"}
*Inquiry Category:* ${formData.subject}
*Clinical Context:* ${formData.message}`;

    const text = encodeURIComponent(messageBody);
    const whatsappUrl = `https://wa.me/916289921810?text=${text}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(whatsappUrl, "_blank");
    }, 1000);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hello Sydney Doctor Biohealth, I would like to inquire about an appointment or longevity services.`);
    window.open(`https://wa.me/916289921810?text=${text}`, "_blank");
  };

  return (
    <div className="w-full relative py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
        
        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span- così lg:col-span-5 space-y-6 text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-1.5 bg-white/2 border border-white/8 px-3 py-1 rounded-full font-mono text-[9px] text-[#00E5A8] uppercase tracking-widest">
              <Sparkles className="w-3 h-3 text-[#00E5A8]" />
              <span>Reach Us</span>
            </div>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Kolkata Headquarters
            </h2>
            <p className="font-sans text-xs text-[#A8A8A8] leading-relaxed">
              Drop by our premium diagnostic longevity suite or contact our clinicians directly for scheduling.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {/* Primary Clinic Card */}
            <div className="bg-[#0D0D0D]/40 border border-white/5 p-5 rounded-xl space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#00E5A8]" />
                <span className="font-mono text-[9px] text-[#00E5A8] tracking-widest uppercase font-bold">
                  Clinical Suite Address
                </span>
              </div>
              <p className="font-sans text-xs text-white leading-relaxed">
                <strong>{CLINIC_INFO.name}</strong> <br />
                {CLINIC_INFO.clinicAddress.line1}, {CLINIC_INFO.clinicAddress.line2}, <br />
                {CLINIC_INFO.clinicAddress.city} — {CLINIC_INFO.clinicAddress.pincode}
              </p>
              <p className="font-sans text-[11px] text-[#A8A8A8]">
                📍 Landmark: Near Kasba Rajdanga High School
              </p>
            </div>

            {/* Corporate HQ */}
            <div className="bg-[#0D0D0D]/40 border border-white/5 p-5 rounded-xl space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#00C2FF]" />
                <span className="font-mono text-[9px] text-[#00C2FF] tracking-widest uppercase font-bold">
                  Corporate Office (Admin)
                </span>
              </div>
              <p className="font-sans text-xs text-white/90 leading-relaxed">
                {CLINIC_INFO.officeAddress.full}
              </p>
              <p className="font-mono text-[9px] text-[#A8A8A8]">
                CIN: {CLINIC_INFO.cin}
              </p>
            </div>

            {/* Instant Communication channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="bg-[#0D0D0D]/50 border border-white/8 hover:border-[#00C2FF]/30 p-4 rounded-xl text-left transition-all block group"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="w-4 h-4 text-[#00C2FF] group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-[9px] text-white tracking-wider uppercase font-semibold">
                    Call Direct
                  </span>
                </div>
                <p className="font-sans text-xs text-white/90 font-bold leading-none">{CLINIC_INFO.phoneFormatted}</p>
                <p className="font-mono text-[8px] text-[#A8A8A8] mt-1">AVAILABLE 10AM - 6PM</p>
              </a>

              <button
                onClick={handleWhatsApp}
                className="bg-[#0D0D0D]/50 border border-[#00E5A8]/15 hover:border-[#00E5A8]/50 p-4 rounded-xl text-left transition-all cursor-pointer group"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#00E5A8] animate-ping" />
                  <span className="font-mono text-[9px] text-[#00E5A8] tracking-wider uppercase font-extrabold">
                    WhatsApp Chat
                  </span>
                </div>
                <p className="font-sans text-xs text-white/95 font-black leading-none">CONNECT INSTANTLY</p>
                <p className="font-mono text-[8.5px] text-[#A8A8A8] mt-1">SECURE ENCRYP CONSOLE</p>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Advanced Messaging Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#0D0D0D]/60 border border-white/8 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5A8]/3 rounded-full filter blur-2xl pointer-events-none" />

            {!isSuccess ? (
              <form id="contact-extended-query-form" onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-white tracking-tight">
                    Send Us a Message
                  </h3>
                  <p className="font-sans text-xs text-[#A8A8A8] mt-1">
                    Complete the secure biomedical request. All inquiries undergo high clinical isolation values.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Subject Line Dropdown */}
                  <div>
                    <label className="block font-mono text-[9px] text-[#A8A8A8] uppercase tracking-widest mb-1.5 font-bold">
                      Focus Category Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#0D0D0D] border border-white/8 rounded-lg px-3.5 py-2.5 text-xs text-[#A8A8A8] focus:outline-none focus:border-[#00E5A8] focus:text-white transition-all font-sans"
                    >
                      <option value="appointment">Register General Appointment</option>
                      <option value="weight">Inquire: Medical Weight Management</option>
                      <option value="sexual">Inquire: Sexual Performance & Hormonal Health</option>
                      <option value="fatigue">Inquire: Fatigue & Energy Optimisation</option>
                      <option value="supplement">Supplement Pre-Order Dispatch</option>
                      <option value="general">General Corporate Inquiry</option>
                      <option value="media">Media / PR / Author Query</option>
                    </select>
                  </div>

                  {/* Name field */}
                  <div>
                    <label className="block font-mono text-[9px] text-[#A8A8A8] uppercase tracking-widest mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Sourav Ganguly"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/2 border border-white/8 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E5A8] transition-colors font-sans"
                    />
                  </div>

                  {/* Contact Methods row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[9px] text-[#A8A8A8] uppercase tracking-widest mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g., 91XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/2 border border-white/8 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E5A8] transition-colors font-sans"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[9px] text-[#A8A8A8] uppercase tracking-widest mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g., athlete@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/2 border border-white/8 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#00C2FF] transition-colors font-sans"
                      />
                    </div>
                  </div>

                  {/* Message prompt */}
                  <div>
                    <label className="block font-mono text-[9px] text-[#A8A8A8] uppercase tracking-widest mb-1.5 font-bold">
                      Message (Minimum 2-3 sentences of physiological context, symptoms etc.) *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="e.g., Stated low energy baseline past 8 months. Breathlessness after lifting or running. Need diagnostic advice on Vitamin D3, B12, or iron status..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/2 border border-white/8 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E5A8] transition-colors font-sans resize-none"
                    />
                  </div>

                  {/* Consent toggle */}
                  <div className="flex items-start space-x-2.5 pt-1 text-left select-none">
                    <input
                      type="checkbox"
                      id="form-consent-box"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="w-4 h-4 rounded border-white/8 bg-white/2 focus:ring-[#00E5A8] border mt-0.5"
                    />
                    <label htmlFor="form-consent-box" className="font-sans text-[11px] text-[#A8A8A8] leading-tight cursor-pointer">
                      I authorize Sydney Doctor Biohealth to process my physiological references and contact me via Phone, Email or WhatsApp regarding metabolic and performance programs.
                    </label>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="cursor-pointer w-full py-3.5 rounded-lg bg-gradient-to-r from-[#00E5A8] to-[#00C2FF] text-[#050505] font-mono font-bold text-xs tracking-wider hover:opacity-95 shadow-xl hover:shadow-[#00E5A8]/10 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 rounded-full border-2 border-[#050505] border-t-transparent animate-spin" />
                        SYNCHRONIZING SECURE ENVELOPE...
                      </>
                    ) : (
                      <>
                        SEND SECURE MESSAGE
                        <Send className="w-4 h-4 ml-0.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div id="contact-success-state" className="py-12 text-center space-y-4 animate-in fade-in duration-500">
                <div className="mx-auto w-12 h-12 rounded-full bg-[#00E5A8]/15 text-[#00E5A8] flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 animate-pulse" />
                </div>
                
                <div className="space-y-1">
                  <h4 className="font-sans text-lg font-bold text-white tracking-widest uppercase">
                    Transmission Sealed
                  </h4>
                  <p className="font-mono text-[9px] text-[#00E5A8] uppercase tracking-wide">
                    STATUS: SECURE PIPELINE ONLINE
                  </p>
                </div>

                <p className="font-sans text-xs text-[#A8A8A8] max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your clinical request regarding <strong className="text-white">{formData.subject}</strong> is catalogued.
                  A senior medical representative of Dr. Arun Maji will call you within 24 clinical credit hours.
                </p>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({ name: "", email: "", phone: "", subject: "appointment", message: "", consent: false });
                  }}
                  className="mt-4 px-6 py-2 rounded-lg bg-white/5 border border-white/8 hover:bg-white/10 text-white font-mono text-xs transition-colors cursor-pointer"
                >
                  SEND ANOTHER ENVELOPE
                </button>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Embedded Maps Row */}
      <div className="mt-16 pt-8 border-t border-white/5 text-left max-w-7xl mx-auto space-y-6">
        <div>
          <h3 className="font-sans font-bold text-xl text-white">Find Our Kasba Diagnostic Clinic</h3>
          <p className="font-sans text-xs text-[#A8A8A8] mt-1 leading-relaxed">
            Our state-of-the-art facility is located directly on Rajdanga Main Road, Kolkata. Secure private multi-car parking space is standard for elite performance patients.
          </p>
        </div>

        {/* Dynamic Mock Map Element with complete visual details */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/8 bg-[#0D0D10] shadow-2xl flex items-center justify-center">
          
          {/* Aesthetic abstract grid matching Kolkata Rajdanga Kasba parameters */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00E5A8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          
          {/* High-fidelity mock map vectors */}
          <div className="relative text-center p-8 space-y-4 max-w-md z-10">
            <div className="mx-auto w-10 h-10 rounded-full bg-[#00E5A8]/10 flex items-center justify-center text-[#00E5A8]">
              <MapPin className="w-5 h-5 animate-bounce" />
            </div>
            
            <div className="space-y-1 bg-[#050505]/95 border border-white/8 p-5.5 rounded-xl">
              <p className="font-mono text-[9px] text-[#00C2FF] uppercase tracking-widest">MAP INJECTOR PLATFORM</p>
              <h4 className="font-sans font-bold text-xs text-white uppercase mt-1">Sydney Doctor Biohealth Kasba Complex</h4>
              <p className="font-sans text-[11px] text-[#A8A8A8] mt-1.5 leading-relaxed">
                Building 7, Plot 3, 3088 Rajdanga Main Road, Kasba, Kolkata 700107 <br />
                Coordinates: 22.5126° N, 88.3969° E
              </p>
              <div className="pt-3 flex justify-center space-x-2">
                <a
                  href="https://maps.google.com/?q=3088+Rajdanga+Main+Road+Kasba+Kolkata+700107"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 bg-[#00E5A8] text-[#050505] rounded font-mono text-[9px] font-extrabold hover:scale-105 transition-all text-center"
                >
                  LAUNCH GOOGLE MAPS DIRECT
                </a>
              </div>
            </div>
          </div>

          {/* Abstract styled watermarks depicting maps lines */}
          <div className="absolute left-1/4 top-1/3 w-0.5 h-48 bg-[#00E5A8]/5 rotate-45" />
          <div className="absolute right-1/4 bottom-1/4 w-0.5 h-60 bg-[#00C2FF]/5 -rotate-12" />
          <div className="absolute top-1/2 left-10 right-10 h-[1px] bg-white/3" />
        </div>
      </div>
    </div>
  );
}
