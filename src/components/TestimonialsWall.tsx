/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Star, MessageSquare, Quote, ArrowLeft, ArrowRight, TrendingUp } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";
import { Testimonial } from "../types";

interface TestimonialsWallProps {
  isPageMode?: boolean; // If true, show the full grid of all 10 reviews. If false, show the auto-playing carousel.
}

export default function TestimonialsWall({ isPageMode = false }: TestimonialsWallProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval for homepage slider mode
  useEffect(() => {
    if (isPageMode) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPageMode]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const activeReview = TESTIMONIALS_DATA[currentIndex];

  return (
    <div className="w-full relative py-12">
      {/* Dynamic Google Score Banner */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left bg-[#0D0D0D]/50 border border-white/5 rounded-2xl p-6 mb-12 max-w-4xl mx-auto gap-4">
        <div className="flex items-center space-x-4">
          <div className="bg-white/2 border border-white/10 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg text-white">
            G
          </div>
          <div>
            <div className="flex items-center space-x-1 justify-center sm:justify-start">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-[#00E5A8] text-[#00E5A8]" />
              ))}
            </div>
            <p className="text-white text-xs font-mono tracking-wider mt-1 uppercase">Google Rating: 5.0 / 5.0</p>
          </div>
        </div>

        <div className="font-mono text-[10px] text-[#A8A8A8] text-center sm:text-right space-y-0.5">
          <p className="text-white font-bold uppercase">10 Real Patient Chronicles</p>
          <p>Verified clinical progress. Science-driven outcomes.</p>
        </div>
      </div>

      {!isPageMode ? (
        /* ================= CAROUSEL SLIDER MODE (Homepage) ================= */
        <div id="homepage-testimonials-slider" className="max-w-4xl mx-auto relative px-4 sm:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0D0D0D] to-[#050505] border border-white/8 rounded-2xl p-8 sm:p-12 min-h-[300px] flex flex-col justify-between shadow-2xl transition-all duration-300">
            
            {/* Absolute Watermark quotes */}
            <Quote className="absolute right-8 top-8 w-16 h-16 text-white/5 pointer-events-none" />

            <div className="space-y-6">
              {/* Category and star rating */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-4">
                <div className="flex items-center space-x-1.5 bg-[#00E5A8]/5 border border-[#00E5A8]/15 rounded px-2.5 py-1 text-[9px] font-mono text-[#00E5A8] uppercase tracking-wider">
                  <TrendingUp className="w-3 h-3 text-[#00E5A8]" />
                  <span>{activeReview.category}</span>
                </div>
                <div className="flex items-center space-x-0.5">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#00E5A8] text-[#00E5A8]" />
                  ))}
                </div>
              </div>

              {/* Patient Pull Quote - visually bold display */}
              <h3 className="font-sans font-bold text-lg sm:text-xl text-white leading-relaxed text-left tracking-wide italic">
                "{activeReview.pullQuote}"
              </h3>

              {/* Complete testimonial narrative */}
              <p className="font-sans text-xs text-[#A8A8A8] leading-relaxed text-justify opacity-80">
                {activeReview.expandedQuote}
              </p>
            </div>

            {/* Author details */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <p className="font-sans font-extrabold text-sm text-white">{activeReview.name}</p>
                <p className="font-mono text-[9px] text-[#A8A8A8] uppercase tracking-wider mt-0.5">
                  Location // {activeReview.location}, West Bengal
                </p>
              </div>

              {/* Carousel Arrows */}
              <div className="flex items-center space-x-2">
                <button
                  id="prev-testimonial-btn"
                  onClick={handlePrev}
                  className="p-2 rounded-lg bg-white/2 hover:bg-white/5 border border-white/10 hover:border-white/20 text-white transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  id="next-testimonial-btn"
                  onClick={handleNext}
                  className="p-2 rounded-lg bg-white/2 hover:bg-white/5 border border-white/10 hover:border-white/20 text-white transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-1.5 mt-6">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? "w-6 bg-[#00E5A8]" : "w-1.5 bg-white/15"
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        /* ================= FULL WALL GRID MODE (Testimonials Page) ================= */
        <div id="credentials-testimonials-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-8">
          {TESTIMONIALS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#0D0D0D]/50 border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-[#00E5A8]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left relative"
            >
              {/* Highlight background lines */}
              <Quote className="absolute right-6 top-6 w-12 h-12 text-white/2" />

              <div className="space-y-4">
                {/* Header detail */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/5">
                  <div>
                    <p className="font-sans font-bold text-sm text-white">{rev.name}</p>
                    <p className="font-mono text-[9px] text-[#A8A8A8] tracking-widest uppercase mt-0.5">
                      {rev.location} // REVIEWED
                    </p>
                  </div>
                  <div className="flex items-center space-x-0.5 shrink-0">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#00E5A8] text-[#00E5A8]" />
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="inline-block bg-[#00C2FF]/10 text-[#00C2FF] border border-[#00C2FF]/20 px-2.5 py-0.5 rounded font-mono text-[8px] uppercase tracking-widest mb-1">
                    {rev.category}
                  </div>
                  <p className="font-sans text-xs text-white leading-relaxed font-semibold italic">
                    "{rev.pullQuote}"
                  </p>
                  <p className="font-sans text-xs text-[#A8A8A8] leading-relaxed opacity-90 text-justify">
                    {rev.expandedQuote}
                  </p>
                </div>
              </div>

              {rev.resultSummary && (
                <div className="mt-6 pt-4 border-t border-white/5 bg-white/2 p-3.5 rounded-lg space-y-1">
                  <span className="block font-mono text-[8px] text-[#00E5A8] uppercase tracking-widest">
                    METRIC OUTCOME // SUCCESS REPORT:
                  </span>
                  <p className="font-sans text-[11px] text-white/90">{rev.resultSummary}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
