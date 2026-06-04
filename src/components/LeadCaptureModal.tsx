/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, Calendar, Sparkles, CheckCircle, Smartphone } from "lucide-react";
import { CLINIC_INFO } from "../data";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function LeadCaptureModal({ isOpen, onClose, defaultService = "general" }: LeadCaptureModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
    preferredDate: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);

    // Map service name list key to readable labels
    const serviceLabel = servicesOption.find(o => o.value === formData.service)?.label || formData.service;

    // Construct highly structured biological checkup request message
    const messageBody = `Hello Sydney Doctor Biohealth, I would like to book an appointment:

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not specified"}
*Desired Service:* ${serviceLabel}
*Preferred Date:* ${formData.preferredDate || "Any available slot"}
*Symptoms/Notes:* ${formData.notes || "None specified"}`;

    const text = encodeURIComponent(messageBody);
    const whatsappUrl = `https://wa.me/916289921810?text=${text}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(whatsappUrl, "_blank");
    }, 1000);
  };

  const servicesOption = [
    { value: "general", label: "General Performance Assessment" },
    { value: "weight", label: "Medical Weight Management" },
    { value: "sexual", label: "Sexual Performance & Hormonal Health" },
    { value: "fatigue", label: "Fatigue & Energy Optimisation" },
    { value: "physical", label: "Physical Performance Optimisation" },
    { value: "injury", label: "Sports Injury Assessment" },
    { value: "supplements", label: "Custom Supplement Inquiry" },
  ];

  return (
    <div
      id="lead-capture-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050510]/85 backdrop-blur-md px-4 transition-all duration-300 pointer-events-auto"
    >
      <div
        id="lead-capture-modal-container"
        className="relative w-full max-w-lg bg-[#0D0D0D] border border-white/8 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 transition-transform transform scale-100 animate-in fade-in zoom-in-95 duration-500"
      >
        {/* Glow dots */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5A8]/5 rounded-full filter blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00C2FF]/5 rounded-full filter blur-2xl pointer-events-none" />

        <button
          id="close-lead-modal"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[#A8A8A8] hover:text-white hover:bg-white/5 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <form id="appointment-booking-form" onSubmit={handleSubmit} className="space-y-5">
            <div className="flex items-center space-x-2">
              <div className="p-1 rounded bg-[#00E5A8]/10 text-[#00E5A8]">
                <Sparkles className="w-4 h-4 animate-pulse" />
              </div>
              <span className="font-mono text-[9px] text-[#00E5A8] uppercase tracking-widest font-semibold">
                Priority Booking Suite
              </span>
            </div>

            <div>
              <h3 className="font-sans text-xl font-bold text-white tracking-tight">
                Schedule Cellular Diagnostics
              </h3>
              <p className="font-sans text-xs text-[#A8A8A8] mt-1 z-10 relative">
                Secure your performance medicine console. Dr. Maji personally structures each evaluation.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div>
                <label className="block font-mono text-[9px] text-[#A8A8A8] uppercase tracking-widest mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Vikram Sen"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/2 border border-white/8 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#00E5A8] transition-colors font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[9px] text-[#A8A8A8] uppercase tracking-widest mb-1.5">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g., 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/2 border border-white/8 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#00E5A8] transition-colors font-sans"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[9px] text-[#A8A8A8] uppercase tracking-widest mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g., vikram@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/2 border border-white/8 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#00C2FF] transition-colors font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[9px] text-[#A8A8A8] uppercase tracking-widest mb-1.5">
                    Service Line Desired
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#0D0D0D] border border-white/8 rounded-lg px-3 py-2 text-xs text-[#A8A8A8] focus:outline-none focus:border-[#00E5A8] focus:text-white transition-all font-sans"
                  >
                    {servicesOption.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-mono text-[9px] text-[#A8A8A8] uppercase tracking-widest mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-white/2 border border-white/8 rounded-lg px-3.5 py-1.5 text-xs text-[#A8A8A8] focus:outline-none focus:border-[#00C2FF] transition-colors font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[9px] text-[#A8A8A8] uppercase tracking-widest mb-1.5">
                  Brief Medical Focus or Note (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Share details on symptoms or objectives..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-white/2 border border-white/8 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#00E5A8] transition-colors font-sans resize-none"
                />
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto flex-1 cursor-pointer py-3 rounded-lg bg-gradient-to-r from-[#00E5A8] to-[#00C2FF] text-[#050505] font-mono font-bold text-xs tracking-wider hover:scale-[1.02] shadow-xl hover:shadow-[#00E5A8]/20 transition-all flex items-center justify-center gap-1.5"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-[#050505] border-t-transparent animate-spin" />
                    RECORDING CODES...
                  </>
                ) : (
                  <>
                    CONFIRM APPOINTMENT
                    <Calendar className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
              
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex items-center justify-center gap-1.5 w-full sm:w-auto font-mono text-[10px] text-white/50 hover:text-[#00C2FF] transition-colors"
              >
                <Smartphone className="w-3.5 h-3.5 text-[#00C2FF]" />
                OR CALL DIRECT: {CLINIC_INFO.phone}
              </a>
            </div>
          </form>
        ) : (
          <div id="booking-success-message" className="py-8 text-center space-y-4 animate-in fade-in duration-500">
            <div className="mx-auto w-12 h-12 rounded-full bg-[#00E5A8]/10 text-[#00E5A8] flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>
            
            <div className="space-y-1">
              <h3 className="font-sans text-lg font-bold text-white tracking-widest uppercase">
                Inquiry Logged
              </h3>
              <p className="font-mono text-[10px] text-[#00E5A8] uppercase tracking-wider">
                STATUS: ENVELOPE SECURED
              </p>
            </div>

            <p className="font-sans text-xs text-[#A8A8A8] max-w-sm mx-auto leading-relaxed">
              Acceptance confirmed. Dr. Arun Maji's operational assistant will contact you at{" "}
              <strong className="text-white">{formData.phone}</strong> within 1 clinical business day to lock in your exact time.
            </p>

            <button
              onClick={() => {
                setIsSuccess(false);
                setFormData({ name: "", phone: "", email: "", service: "general", preferredDate: "", notes: "" });
                onClose();
              }}
              className="mt-4 px-6 py-2 rounded-lg bg-white/5 border border-white/8 hover:bg-white/10 text-[#A8A8A8] hover:text-white font-mono text-xs transition-colors cursor-pointer"
            >
              DISMISS PREVIEW
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
