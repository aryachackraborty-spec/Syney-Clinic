/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { CheckCircle, Sparkles, Shield, ShoppingBag, X, Award, Info, ChevronRight, HelpCircle } from "lucide-react";
import { SUPPLEMENT_PRODUCTS } from "../data";
import { SupplementProduct } from "../types";

interface SupplementsSectionProps {
  onPreOrderProduct: (productName: string) => void;
  isShopView?: boolean;
}

export default function SupplementsSection({ onPreOrderProduct, isShopView = false }: SupplementsSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<SupplementProduct | null>(null);

  return (
    <div className="w-full relative py-12">
      {/* Upper informational anchor banner */}
      <div className="flex flex-col md:flex-row items-center justify-between text-left bg-[#0D0D0D]/40 border border-white/5 rounded-2xl p-6.5 mb-12 gap-6 max-w-5xl mx-auto">
        <div className="flex items-start space-x-3.5">
          <div className="p-2 rounded bg-[#00E5A8]/5 border border-[#00E5A8]/20 text-[#00E5A8] shrink-0">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-sans font-bold text-sm text-white">Doctor Formulated. Clinical Grade.</h4>
            <p className="font-sans text-xs text-[#A8A8A8] mt-1 leading-relaxed">
              These are not off-the-shelf retail products designed for shelf optics. Every formulation contains active raw cellular structures chosen by a clinical specialist for true digestive pathways.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3 bg-[#050505] p-3 rounded-lg border border-white/5 font-mono text-[9.5px] uppercase tracking-wider text-white select-none">
          <Award className="w-4 h-4 text-[#00E5A8]" />
          <span>FSSAI COMPLIANT DIRECT</span>
        </div>
      </div>

      {/* Grid of Products */}
      <div id="supplements-catalog-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-8">
        {SUPPLEMENT_PRODUCTS.map((prod) => (
          <div
            key={prod.id}
            onClick={() => setSelectedProduct(prod)}
            className="group relative bg-[#0D0D0D]/60 hover:bg-[#0D0D0D]/90 border border-white/5 hover:border-[#00E5A8]/30 rounded-2xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between cursor-pointer min-h-[440px] shadow-lg hover:shadow-2xl overflow-hidden"
          >
            {/* Gloss Highlight bubble */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#00C2FF]/2 rounded-full filter blur-3xl pointer-events-none group-hover:bg-[#00C2FF]/5" />

            <div className="space-y-6">
              {/* Image Frame */}
              <div className="w-full h-48 bg-[#050505]/80 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-white/5 relative">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="h-full w-auto object-contain scale-100 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#00E5A8]/5 border border-[#00E5A8]/25 text-[#00E5A8] rounded px-2.5 py-0.5 text-[8.5px] font-mono tracking-widest uppercase">
                  ✓ ACTIVE FORMULATION
                </div>
              </div>

              {/* Title group */}
              <div className="space-y-2">
                <h3 className="font-sans font-extrabold text-lg text-white group-hover:text-[#00E5A8] transition-colors">
                  {prod.title}
                </h3>
                <p className="font-mono text-[9px] text-[#A8A8A8] uppercase tracking-widest leading-none">
                  Line // {prod.tagline}
                </p>
              </div>

              {/* Short narrative description */}
              <p className="font-sans text-xs text-[#A8A8A8] leading-relaxed line-clamp-3">
                {prod.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono">
              <span className="text-[#A8A8A8] uppercase">CATEGORY // {prod.category}</span>
              <span className="text-[#00E5A8] group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
                SCIENCE INSIGHTS
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* DETAILED SUPPLEMENT MODAL FOR SELECTION */}
      {selectedProduct && (
        <div
          id={`supplement-modal-backdrop-${selectedProduct.id}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050510]/85 backdrop-blur-md px-4 transition-all duration-300 cursor-default"
        >
          <div
            id={`supplement-modal-${selectedProduct.id}`}
            className="relative w-full max-w-xl bg-[#0D0D0D] border border-white/8 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-300"
          >
            {/* Absolute accent backdrops */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5A8]/5 rounded-full filter blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00C2FF]/5 rounded-full filter blur-2xl pointer-events-none" />

            <button
              id={`close-supplement-modal-${selectedProduct.id}`}
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-[#A8A8A8] hover:text-white hover:bg-white/5 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              
              {/* Upper identity */}
              <div className="flex items-center space-x-2">
                <div className="p-1 rounded bg-[#00E5A8]/15 text-[#00E5A8]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9px] text-[#00E5A8] uppercase tracking-widest font-bold">
                  Doctor Formulated Supplement
                </span>
              </div>

              {/* Headings and categories */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 items-center">
                <div className="sm:col-span-1 h-32 bg-[#050510] border border-white/5 rounded-xl p-2.5 flex items-center justify-center">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="sm:col-span-3 space-y-1">
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-white tracking-tight">
                    {selectedProduct.title}
                  </h3>
                  <p className="font-mono text-[9.5px] text-[#00C2FF] uppercase tracking-widest">
                    {selectedProduct.category}
                  </p>
                  <p className="font-sans text-xs text-[#A8A8A8]">
                    {selectedProduct.tagline}
                  </p>
                </div>
              </div>

              {/* Broad Narrative */}
              <p className="font-sans text-xs text-[#A8A8A8] leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Science disclosure info box */}
              <div className="bg-[#050505] border border-white/5 p-4 rounded-lg space-y-1">
                <p className="font-mono text-[9.5px] text-[#00E5A8] uppercase tracking-widest font-bold flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-[#00E5A8]" />
                  The Science Base
                </p>
                <p className="font-sans text-xs text-[#A8A8A8] pt-1">
                  {selectedProduct.science}
                </p>
              </div>

              {/* Benefits list */}
              <div className="space-y-2">
                <span className="block font-mono text-[9px] text-white tracking-widest uppercase">
                  FORMULATION OBJECTIVES & BENEFITS:
                </span>
                <ul className="grid grid-cols-1 gap-2 pt-1">
                  {selectedProduct.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs text-[#A8A8A8]">
                      <CheckCircle className="w-4 h-4 text-[#00E5A8] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action trigger row */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-white/5">
                <div className="text-left font-mono text-[9px] text-[#A8A8A8] space-y-0.5">
                  <p className="text-white font-semibold">ECOMMERCE PICTORIAL PREVIEW</p>
                  <p>Inquire directly about dispatch logistics</p>
                </div>

                <div className="flex space-x-2 w-full sm:w-auto">
                  <button
                    id={`preorder-${selectedProduct.id}`}
                    onClick={() => {
                      const name = selectedProduct.title;
                      setSelectedProduct(null);
                      onPreOrderProduct(name);
                    }}
                    className="flex-1 sm:flex-initial cursor-pointer px-5.5 py-3 rounded-lg bg-gradient-to-r from-[#00E5A8] to-[#00C2FF] text-[#050505] font-mono font-bold text-xs tracking-wider hover:opacity-95 shadow-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    PRE-ORDER NOW
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
