/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Link, Phone, Calendar, Menu, X, ChevronDown, Sparkles, AlertCircle } from "lucide-react";
import { PageId } from "../types";
import { CLINIC_INFO } from "../data";

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  onOpenBookModal: () => void;
}

export default function Navbar({ currentPage, setCurrentPage, onOpenBookModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home" as PageId, label: "Home" },
    { id: "about" as PageId, label: "About Us" },
    { id: "services" as PageId, label: "Services" },
    { id: "supplements" as PageId, label: "Supplements" },
    { id: "testimonials" as PageId, label: "Testimonials" },
    { id: "contact" as PageId, label: "Contact Us" },
  ];

  const handleMenuClick = (id: PageId) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/75 backdrop-blur-xl border-b border-white/8 py-3 py-1 bg-opacity-90 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div
            id="navbar-logo"
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleMenuClick("home")}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#00E5A8]/20 to-[#00C2FF]/20 border border-[#00E5A8]/30 group-hover:border-[#00E5A8] transition-all duration-300">
              <span className="font-mono text-xs text-[#00E5A8] font-bold tracking-tighter">SD</span>
              <div className="absolute inset-0 rounded-lg bg-[#00E5A8] opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-sm tracking-widest text-white group-hover:text-[#00E5A8] transition-colors duration-300">
                SYDNEY DOCTOR
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#00E5A8] uppercase">
                Biohealth Pvt Ltd
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              if (item.id === "services") {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                  >
                    <button
                      id="services-menu-tab"
                      className={`px-4 py-2 text-xs font-mono tracking-wider transition-all duration-300 rounded-md flex items-center gap-1 ${
                        currentPage === "services"
                          ? "text-[#00E5A8] bg-white/5"
                          : "text-[#A8A8A8] hover:text-white hover:bg-white/2"
                      }`}
                    >
                      SERVICES
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${megaMenuOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Mega Menu Dropdown */}
                    <div
                      id="services-mega-menu"
                      className={`absolute left-1/2 -translate-x-1/2 mt-1 w-80 bg-[#0D0D0D] border border-white/8 rounded-xl p-4 shadow-2xl backdrop-blur-2xl transition-all duration-300 origin-top ${
                        megaMenuOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"
                      }`}
                    >
                      <div className="grid grid-cols-1 gap-2">
                        <div className="pb-2 border-b border-white/5 mb-1">
                          <p className="font-mono text-[10px] text-[#A8A8A8] tracking-widest uppercase">Performance Medicine</p>
                        </div>
                        <button
                          onClick={() => handleMenuClick("services")}
                          className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-white/5 text-left transition-colors cursor-pointer group"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A8] mt-1.5 shrink-0" />
                          <div>
                            <p className="text-white text-xs font-medium group-hover:text-[#00E5A8] transition-colors">Clinic Services</p>
                            <p className="text-[10px] text-[#A8A8A8] mt-0.5">Weight, Performance, Fatigue & Hormones</p>
                          </div>
                        </button>
                        <button
                          onClick={() => handleMenuClick("supplements")}
                          className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-white/5 text-left transition-colors cursor-pointer group"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00C2FF] mt-1.5 shrink-0" />
                          <div>
                            <p className="text-white text-xs font-medium group-hover:text-[#00C2FF] transition-colors">Premium Supplements</p>
                            <p className="text-[10px] text-[#A8A8A8] mt-0.5">Doctor formulated active organic nutrition</p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleMenuClick(item.id)}
                  className={`px-4 py-2 text-xs font-mono tracking-wider transition-all duration-300 rounded-md cursor-pointer ${
                    currentPage === item.id
                      ? "text-[#00E5A8] bg-white/5 border border-white/5"
                      : "text-[#A8A8A8] hover:text-white hover:bg-white/2 border border-transparent"
                  }`}
                >
                  {item.label.toUpperCase()}
                </button>
              );
            })}
          </nav>

          {/* CTAs */}
          <div id="desktop-ctas" className="hidden lg:flex items-center space-x-4">
            <a
              id="desktop-phone-cta"
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center text-xs font-mono text-[#A8A8A8] hover:text-[#00C2FF] transition-colors duration-300"
            >
              <Phone className="w-3.5 h-3.5 text-[#00C2FF] mr-1.5" />
              {CLINIC_INFO.phoneFormatted}
            </a>
            
            <button
              id="desktop-appointment-btn"
              onClick={onOpenBookModal}
              className="relative overflow-hidden px-4.5 py-2 rounded-lg bg-gradient-to-r from-[#00E5A8] to-[#00C2FF] text-[#050505] text-xs font-mono font-bold tracking-widest shadow-lg shadow-[#00E5A8]/10 hover:shadow-[#00E5A8]/30 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                BOOK APPOINTMENT
                <Calendar className="w-3.5 h-3.5" />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden space-x-3">
            <button
              id="mobile-phone-cta-icon"
              onClick={onOpenBookModal}
              className="p-2 rounded-lg bg-white/5 border border-white/8 text-[#00E5A8]"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/8 text-white hover:text-[#00E5A8]"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed inset-y-0 right-0 z-40 w-full sm:w-80 bg-[#050505] border-l border-white/8 p-6 shadow-2xl transition-transform duration-500 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between pb-6 border-b border-white/5">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-[#00E5A8]/10 border border-[#00E5A8]/30 flex items-center justify-center">
              <span className="font-mono text-xs text-[#00E5A8] font-bold">SD</span>
            </div>
            <span className="font-sans font-bold text-xs tracking-wider text-white">SYDNEY DOCTOR</span>
          </div>
          <button
            id="close-mobile-drawer"
            onClick={() => setMobileMenuOpen(false)}
            className="p-1.5 rounded-lg text-[#A8A8A8] hover:text-white hover:bg-white/5"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col space-y-2 mt-6">
          <p className="font-mono text-[9px] text-[#A8A8A8] tracking-widest uppercase mb-2">Navigation</p>
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-${item.id}`}
              onClick={() => handleMenuClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-xs font-mono tracking-wider transition-colors ${
                currentPage === item.id
                  ? "text-[#00E5A8] bg-white/5 border border-white/5"
                  : "text-[#A8A8A8] hover:text-white hover:bg-white/2"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
          <p className="font-mono text-[9px] text-[#A8A8A8] tracking-widest uppercase mb-1">Direct Support</p>
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="flex items-center space-x-3 p-3 rounded-lg bg-white/2 border border-white/5 hover:border-[#00C2FF]/30 transition-all text-[#A8A8A8] hover:text-[#00C2FF]"
          >
            <Phone className="w-4 h-4 text-[#00C2FF]" />
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white">Call Specialist</span>
              <span className="text-xs mt-0.5">{CLINIC_INFO.phoneFormatted}</span>
            </div>
          </a>

          <button
            id="mobile-book-appointment-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBookModal();
            }}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-[#00E5A8] to-[#00C2FF] text-[#050505] font-mono text-xs font-bold tracking-widest shadow-lg shadow-[#00E5A8]/5 hover:shadow-[#00E5A8]/20 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            BOOK CONSULTATION
          </button>
        </div>
      </div>
    </header>
  );
}
