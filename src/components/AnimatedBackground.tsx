/**
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from "react";
import { PageId } from "../types";

interface AnimatedBackgroundProps {
  currentPage: PageId;
}

export default function AnimatedBackground({ currentPage }: AnimatedBackgroundProps) {
  // Memoized randomized floater parameters to prevent re-generation on state changes
  const floatersArray = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      left: `${(i * 7 + 3) % 100}%`,
      top: `${(i * 13 + 7) % 100}%`,
      size: `${12 + (i % 4) * 8}px`,
      delay: `${i * 0.4}s`,
      duration: `${12 + (i % 3) * 6}s`,
    }));
  }, []);

  const bioNodes = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      left: `${(i * 12 + 15) % 100}%`,
      top: `${(i * 17 + 23) % 100}%`,
      scale: 0.8 + (i % 2) * 0.4,
      delay: `${i * 0.6}s`,
      duration: `${8 + (i % 2) * 4}s`,
      code: [
        "FIELD 01_MED",
        "BIO_ID: 981.3",
        "CELL_SPD // 60hz",
        "OPTI_LVL // high",
        "LATENCY // 0ms",
        "MATRIX_OK // true",
        "DR_ARUN_MAJI",
        "AUS // LONGEVITY",
      ][i % 8],
    }));
  }, []);

  const molecularNodes = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      left: `${(i * 9 + 8) % 100}%`,
      top: `${(i * 11 + 19) % 100}%`,
      size: `${8 + (i % 3) * 5}px`,
      color: i % 2 === 0 ? "rgba(0, 229, 168, 0.4)" : "rgba(0, 194, 255, 0.4)",
      delay: `${i * 0.5}s`,
      duration: `${10 + (i % 4) * 4}s`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Dynamic Keyframe Injection for Ultra-smooth Hardware Accelerated Animations */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(20px) rotate(0deg); opacity: 0; }
          10% { opacity: 0.25; }
          90% { opacity: 0.25; }
          100% { transform: translateY(-120px) rotate(360deg); opacity: 0; }
        }
        @keyframes cellularGlow {
          0%, 100% { transform: scale(1) translate3d(0,0,0); opacity: 0.08; filter: blur(40px); }
          50% { transform: scale(1.15) translate3d(15px, -15px, 0); opacity: 0.16; filter: blur(55px); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes verticalDrift {
          0%, 100% { transform: translateY(0) translate3d(0,0,0); opacity: 0.12; }
          50% { transform: translateY(-40px) translate3d(0,0,0); opacity: 0.25; }
        }
        @keyframes ekgPulse {
          0% { transform: scale(0.6); opacity: 0; }
          10% { opacity: 0.35; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes molecularOrbital {
          0% { transform: rotate(0deg) translateX(40px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
        }
        @keyframes gridZoom {
          0% { background-size: 40px 40px; }
          50% { background-size: 44px 44px; }
          100% { background-size: 40px 40px; }
        }
        @keyframes transmitGlow {
          0%, 100% { transform: scale(0.9); opacity: 0.15; }
          50% { transform: scale(1.1); opacity: 0.35; }
        }
        @keyframes radarSweep {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .anim-float-up {
          animation: floatUp infinite linear;
          will-change: transform, opacity;
        }
        .anim-cellular-glow {
          animation: cellularGlow infinite ease-in-out;
          will-change: transform, opacity;
        }
        .anim-scanline {
          animation: scanline 16s infinite linear;
          will-change: transform;
        }
        .anim-vertical-drift {
          animation: verticalDrift infinite ease-in-out;
          will-change: transform, opacity;
        }
        .anim-ekg-pulse {
          animation: ekgPulse infinite cubic-bezier(0.1, 0.8, 0.3, 1);
          will-change: transform, opacity;
        }
        .anim-molecular-orbital {
          animation: molecularOrbital infinite linear;
          will-change: transform;
        }
        .anim-transmit-glow {
          animation: transmitGlow infinite ease-in-out;
          will-change: transform, opacity;
        }
        .anim-radar-sweep {
          animation: radarSweep 25s infinite linear;
          transform-origin: center;
          will-change: transform;
        }
      `}</style>

      {/* BACKGROUND GRAPHICS ACCORDING TO ACTIVE PAGE */}

      {/* ====================================================
          1. HOME PAGE VIEW: Cellular Metric Flow
          ==================================================== */}
      {currentPage === "home" && (
        <div className="absolute inset-0 z-0">
          {/* Glowing Ambient Core 1 - Deep Emerald Green */}
          <div
            className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-[#00E5A8]/3 anim-cellular-glow"
            style={{ animationDuration: "18s" }}
          />
          {/* Glowing Ambient Core 2 - Performance Cyan */}
          <div
            className="absolute -bottom-[20%] -right-[10%] w-[55vw] h-[55vw] rounded-full bg-[#00C2FF]/3 anim-cellular-glow"
            style={{ animationDuration: "24s", animationDelay: "2s" }}
          />

          {/* Micro digital grids */}
          <div 
            className="absolute inset-0 opacity-12"
            style={{
              backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }}
          />

          {/* Floating Bio Nodes */}
          {bioNodes.map((node, i) => (
            <div
              key={`bio-${i}`}
              className="absolute font-mono text-[9px] text-[#00E5A8]/15 tracking-widest hidden md:block"
              style={{
                left: node.left,
                top: node.top,
                animation: `verticalDrift ${node.duration} infinite ease-in-out`,
                animationDelay: node.delay,
              }}
            >
              <div className="flex items-center space-x-1">
                <span className="w-1 h-1 rounded-full bg-[#00E5A8]/30 animate-pulse" />
                <span>{node.code}</span>
              </div>
            </div>
          ))}

          {/* Drifting floaters resembling micronized cell receptors */}
          {floatersArray.map((fl, i) => (
            <div
              key={`home-fl-${i}`}
              className="absolute rounded-full border border-[#00E5A8]/10 bg-[#00E5A8]/5 anim-float-up"
              style={{
                left: fl.left,
                top: fl.top,
                width: fl.size,
                height: fl.size,
                animationDuration: fl.duration,
                animationDelay: fl.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* ====================================================
          2. ABOUT US VIEW: Military-Precision Line & Standards
          ==================================================== */}
      {currentPage === "about" && (
        <div className="absolute inset-0 z-0">
          {/* Calibration ambient lights */}
          <div
            className="absolute top-[30%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#00C2FF]/2 anim-cellular-glow"
            style={{ animationDuration: "20s" }}
          />
          <div
            className="absolute bottom-[20%] left-[50%] w-[45vw] h-[45vw] rounded-full bg-white/1 anim-cellular-glow"
            style={{ animationDuration: "16s", animationDelay: "3s" }}
          />

          {/* Horizontal Precision Laser Scanline */}
          <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E5A8]/15 to-transparent anim-scanline" />

          {/* Vertical structured grid coordinates */}
          <div className="absolute inset-y-0 left-12 w-[1px] bg-white/4 hidden md:block" />
          <div className="absolute inset-y-0 right-14 w-[1px] bg-white/4 hidden md:block" />
          
          <div className="absolute top-24 left-4 font-mono text-[8px] text-[#A8A8A8]/20 tracking-wider vertical-text hidden lg:block uppercase space-y-4">
            <p>RACGP SPECIALTY STANDARDS // CERT_AUDIT</p>
            <p>SYDNEY DOCTOR SYSTEMS_OFFICER // SYDNEY_AUS</p>
          </div>

          {/* Minimal coordinate targets */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`ab-target-${i}`}
              className="absolute w-8 h-8 opacity-15 hidden md:block"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i * 13) % 60}%`,
              }}
            >
              <div className="w-1.5 h-1.5 bg-[#00C2FF] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="w-full h-full border border-white/5 rounded-full animate-ping" style={{ animationDuration: "4s", animationDelay: `${i * 0.7}s` }} />
            </div>
          ))}

          {/* Military standard floating ticks */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`tick-${i}`}
              className="absolute w-4 h-1 border-t border-b border-white/10 hidden sm:block"
              style={{
                left: `${(i * 12 + 5) % 100}%`,
                top: `${(i * 9 + 15) % 100}%`,
                animation: `verticalDrift ${10 + (i % 3) * 4}s infinite ease-in-out`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* ====================================================
          3. SERVICES VIEW: Concurring Scans & Pulsing Waves
          ==================================================== */}
      {currentPage === "services" && (
        <div className="absolute inset-0 z-0">
          {/* Pulsing core in coordinates */}
          <div
            className="absolute top-[40%] right-[15%] w-[48vw] h-[48vw] rounded-full bg-[#00E5A8]/2.5 anim-cellular-glow"
            style={{ animationDuration: "22s" }}
          />

          {/* Concurring EKG Heartbeat Pulsing Rings */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
            <div className="w-56 h-56 rounded-full border border-[#00E5A8]/10 mb-20 anim-ekg-pulse" style={{ animationDuration: "5s" }} />
            <div className="w-56 h-56 rounded-full border border-[#00C2FF]/10 mb-20 absolute anim-ekg-pulse" style={{ animationDuration: "5s", animationDelay: "1.8s" }} />
            <div className="w-56 h-56 rounded-full border border-white/4 mb-20 absolute anim-ekg-pulse" style={{ animationDuration: "5s", animationDelay: "3.6s" }} />
          </div>

          {/* Technical horizontal grid */}
          <div 
            className="absolute inset-0 opacity-8"
            style={{
              backgroundImage: "linear-gradient(rgba(0, 229, 168, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 168, 0.04) 1px, transparent 1px)",
              backgroundSize: "30px 30px"
            }}
          />

          {/* Micro measurement crosshairs */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={`cross-svc-${i}`}
              className="absolute w-12 h-12 flex items-center justify-center opacity-20 hidden md:flex"
              style={{
                left: i % 2 === 0 ? "8%" : "88%",
                top: i < 2 ? "25%" : "70%",
              }}
            >
              <div className="w-4 h-[1px] bg-[#00E5A8]" />
              <div className="h-4 w-[1px] bg-[#00E5A8] absolute" />
              <span className="absolute font-mono text-[7px] text-[#00E5A8] mt-8">SCANL_PT_0{i+1}</span>
            </div>
          ))}
        </div>
      )}

      {/* ====================================================
          4. SUPPLEMENTS VIEW: Molecular Bonds & Active Orbs
          ==================================================== */}
      {currentPage === "supplements" && (
        <div className="absolute inset-0 z-0">
          {/* Ambient active compound background spheres */}
          <div
            className="absolute top-[20%] left-[10%] w-[52vw] h-[52vw] rounded-full bg-[#00C2FF]/3 anim-cellular-glow"
            style={{ animationDuration: "25s" }}
          />
          <div
            className="absolute bottom-[10%] right-[15%] w-[45vw] h-[45vw] rounded-full bg-[#00E5A8]/3 anim-cellular-glow"
            style={{ animationDuration: "18s", animationDelay: "1.5s" }}
          />

          {/* Floating atom rings / orbits */}
          {molecularNodes.map((node, i) => (
            <div
              key={`mol-${i}`}
              className="absolute rounded-full anim-vertical-drift"
              style={{
                left: node.left,
                top: node.top,
                animationDuration: node.duration,
                animationDelay: node.delay,
              }}
            >
              {/* Outer orbit tracing */}
              <div 
                className="rounded-full border border-white/5 flex items-center justify-center anim-molecular-orbital"
                style={{
                  width: `${parseInt(node.size) * 4}px`,
                  height: `${parseInt(node.size) * 4}px`,
                  animationDuration: `${parseInt(node.duration) * 0.8}s`
                }}
              >
                {/* Nucleus dot */}
                <div 
                  className="rounded-full absolute" 
                  style={{
                    width: `${parseInt(node.size) * 0.4}px`,
                    height: `${parseInt(node.size) * 0.4}px`,
                    backgroundColor: node.color,
                    boxShadow: `0 0 10px ${node.color}`
                  }}
                />
                {/* Electron dot */}
                <div 
                  className="w-1.5 h-1.5 rounded-full absolute"
                  style={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0 0 8px #ffffff",
                    transform: "translateX(20px)"
                  }}
                />
              </div>
            </div>
          ))}

          {/* Upward rising active cellular nutrients */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`nutr-${i}`}
              className="absolute rounded-full anim-float-up"
              style={{
                left: `${(i * 5 + 6) % 100}%`,
                top: `${(i * 12 + i) % 100}%`,
                width: i % 2 === 0 ? "5px" : "3px",
                height: i % 2 === 0 ? "5px" : "3px",
                backgroundColor: i % 3 === 0 ? "#00E5A8" : i % 3 === 1 ? "#00C2FF" : "rgba(255, 255, 255, 0.4)",
                animationDuration: `${8 + (i % 4) * 3}s`,
                animationDelay: `${i * 0.3}s`,
                opacity: 0.15,
                boxShadow: i % 2 === 0 ? `0 0 6px ${i % 3 === 0 ? "#00E5A8" : "#00C2FF"}` : "none",
              }}
            />
          ))}
        </div>
      )}

      {/* ====================================================
          5. TESTIMONIALS VIEW: Constellation Net & Ripples
          ==================================================== */}
      {currentPage === "testimonials" && (
        <div className="absolute inset-0 z-0">
          {/* Subtle warm feedback cloud background */}
          <div
            className="absolute top-[30%] left-[25%] w-[48vw] h-[48vw] rounded-full bg-[#00E5A8]/2 anim-cellular-glow"
            style={{ animationDuration: "28s" }}
          />

          {/* Interactive Net Matrix */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1.5px)",
              backgroundSize: "40px 40px"
            }}
          />

          {/* Slow transmitting beacons representing reviews */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={`beac-${i}`}
              className="absolute flex items-center justify-center anim-transmit-glow"
              style={{
                left: `${15 + i * 18 + (i % 2) * 5}%`,
                top: `${20 + (i * 14) % 65}%`,
                animationDuration: `${5 + i * 1.5}s`,
              }}
            >
              <div className="w-3 h-3 bg-[#00E5A8]/20 border border-[#00E5A8]/80 rounded-full animate-ping" style={{ animationDuration: "3s" }} />
              <div className="w-1.5 h-1.5 bg-[#00E5A8] rounded-full absolute" />
              {/* Star aura indicator */}
              <div className="w-12 h-12 border border-white/3 rounded-full absolute animate-spin" style={{ animationDuration: "12s" }} />
            </div>
          ))}

          {/* Decorative floating feedback signals */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={`trans-code-${i}`}
              className="absolute font-mono text-[8px] text-[#00C2FF]/12 hidden md:block"
              style={{
                left: `${(i * 11 + 9) % 100}%`,
                top: `${(i * 8 + 32) % 100}%`,
                animation: `verticalDrift ${12 + (i % 3) * 5}s infinite ease-in-out`,
                animationDelay: `${i * 0.7}s`,
              }}
            >
              ★ TRANSMISSION_RCVD // 5_STAR // 00{i+1}
            </div>
          ))}
        </div>
      )}

      {/* ====================================================
          6. CONTACT VIEW: Target Matrices & Radar Scopes
          ==================================================== */}
      {currentPage === "contact" && (
        <div className="absolute inset-0 z-0">
          {/* Subtle ambient light tracking */}
          <div
            className="absolute top-[35%] left-[30%] w-[50vw] h-[50vw] rounded-full bg-[#00C2FF]/2 anim-cellular-glow"
            style={{ animationDuration: "20s" }}
          />

          {/* Radar Sweep Background Component */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 border border-white/5 rounded-full flex items-center justify-center opacity-25">
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#00E5A8]/20 to-transparent anim-radar-sweep" />
            <div className="w-72 h-72 border border-white/5 rounded-full" />
            <div className="w-48 h-48 border border-[#00E5A8]/5 rounded-full" />
            <div className="w-24 h-24 border border-white/5 rounded-full" />
          </div>

          <div className="absolute -top-24 -right-24 w-96 h-96 border border-white/5 rounded-full flex items-center justify-center opacity-20">
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#00C2FF]/20 to-transparent anim-radar-sweep" />
            <div className="w-72 h-72 border border-[#00C2FF]/10 rounded-full" />
          </div>

          {/* Moving coordinates */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={`coord-${i}`}
              className="absolute font-mono text-[8px] text-white/10 p-2 border border-white/3 rounded bg-[#0D0D0D]/20 hidden sm:block"
              style={{
                left: i % 2 === 0 ? "10%" : "80%",
                top: i < 2 ? "20%" : "75%",
                animation: `verticalDrift ${15 + i * 4}s infinite ease-in-out`,
                animationDelay: `${i * 1.1}s`,
              }}
            >
              <p className="text-[#00E5A8]">EST_LINK_PT_0{i+1}</p>
              <p className="text-[7px]">LAT: {(-33.8688 - i * 0.13).toFixed(4)}</p>
              <p className="text-[7px]">LON: {(151.2093 + i * 0.35).toFixed(4)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
