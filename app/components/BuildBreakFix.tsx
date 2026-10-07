"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function BuildBreakFix() {
  const [stage, setStage] = useState<"build" | "break" | "fix">("build");

  return (
    <section className="py-24 md:py-36 px-6 md:px-16 lg:px-24 border-b border-[#E3E1D4] bg-[#F5EEE9]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#E3E1D4] pb-6">
          <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-[#5C6E21]">
            SIGNATURE METHODOLOGY
          </span>
          <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#373F1D]/60">
            BUILD → BREAK → FIX
          </span>
        </div>

        {/* Section Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-4"
          >
            <h2 className="font-editorial text-4xl sm:text-6xl font-normal text-[#2C2D1F] tracking-tight">
              EVERY SYSTEM HAS A FAILURE MODE.
              <br />
              <span className="font-editorial-italic text-[#5C6E21]">
                THEN YOU FIX IT.
              </span>
            </h2>
            <p className="text-sm sm:text-base font-sans text-[#373F1D]/80 max-w-xl leading-relaxed">
              True engineering resilience isn&apos;t pretending failure never happens—it&apos;s understanding exactly how systems break and designing them to recover.
            </p>
          </motion.div>

          {/* Interactive State Switcher */}
          <div className="lg:col-span-4 flex items-center justify-start lg:justify-end gap-2 text-xs font-sans uppercase tracking-[0.2em] font-bold">
            <button
              onClick={() => setStage("build")}
              className={`px-5 py-2.5 border transition-all cursor-pointer ${
                stage === "build"
                  ? "border-[#5C6E21] bg-[#5C6E21] text-[#F5EEE9]"
                  : "border-[#E3E1D4] bg-[#E3E1D4]/40 text-[#2C2D1F]"
              }`}
            >
              01 BUILD
            </button>
            <button
              onClick={() => setStage("break")}
              className={`px-5 py-2.5 border transition-all cursor-pointer ${
                stage === "break"
                  ? "border-[#373F1D] bg-[#373F1D] text-[#F5EEE9]"
                  : "border-[#E3E1D4] bg-[#E3E1D4]/40 text-[#2C2D1F]"
              }`}
            >
              02 BREAK
            </button>
            <button
              onClick={() => setStage("fix")}
              className={`px-5 py-2.5 border transition-all cursor-pointer ${
                stage === "fix"
                  ? "border-[#2C2D1F] bg-[#2C2D1F] text-[#F5EEE9]"
                  : "border-[#E3E1D4] bg-[#E3E1D4]/40 text-[#2C2D1F]"
              }`}
            >
              03 FIX
            </button>
          </div>
        </div>

        {/* Interactive Visualization Board */}
        <div className="border border-[#E3E1D4] bg-[#E3E1D4]/30 p-8 md:p-14 space-y-8 relative overflow-hidden shadow-sm">
          <div className="flex items-center justify-between border-b border-[#E3E1D4] pb-4">
            <span className="text-[10px] uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21]">
              CASE STUDY: KNOWLEDGENETWORK AUTH MIGRATION
            </span>
            <span
              className={`text-[10px] font-sans uppercase tracking-widest font-bold ${
                stage === "build"
                  ? "text-[#5C6E21]"
                  : stage === "break"
                  ? "text-red-700"
                  : "text-[#373F1D]"
              }`}
            >
              STATE: {stage === "build" ? "INITIALIZED" : stage === "break" ? "SECURITY DISRUPTION" : "RESILIENT RESTORATION"}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[220px]">
            {/* Stage Description Column (Col 1-7) */}
            <div className="lg:col-span-7 space-y-4">
              {stage === "build" && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-3"
                >
                  <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21] block">
                    01 / BUILD STAGE
                  </span>
                  <h3 className="font-editorial text-3xl font-normal text-[#2C2D1F]">
                    Authentication & Verification Pipeline Initialized
                  </h3>
                  <p className="text-sm font-sans text-[#2C2D1F]/85 leading-relaxed">
                    Spring Security authentication pipeline configured with JWT tokens, password hashing, and email verification checks upon registration.
                  </p>
                </motion.div>
              )}

              {stage === "break" && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-3"
                >
                  <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-red-700 block">
                    02 / BREAK STAGE
                  </span>
                  <h3 className="font-editorial text-3xl font-normal text-[#2C2D1F]">
                    Schema Migration Exposes Verification State
                  </h3>
                  <p className="text-sm font-sans text-[#2C2D1F]/85 leading-relaxed">
                    During database schema migration, existing accounts defaulted to an unverified state while the login filter exposed account state before password validation, causing authentication lockouts.
                  </p>
                </motion.div>
              )}

              {stage === "fix" && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-3"
                >
                  <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21] block">
                    03 / FIX STAGE
                  </span>
                  <h3 className="font-editorial text-3xl font-normal text-[#2C2D1F]">
                    Flow Redesigned with HTTP 403 Security Boundaries
                  </h3>
                  <p className="text-sm font-sans text-[#2C2D1F]/85 leading-relaxed">
                    Reordered authentication filter chain so password verification occurs before account state evaluation, returning a structured HTTP 403 authorization payload prompting inline verification.
                  </p>
                </motion.div>
              )}
            </div>

            {/* Architecture Node Visual Column (Col 8-12) */}
            <div className="lg:col-span-5 border border-[#E3E1D4] bg-[#F5EEE9] p-6 space-y-4">
              <span className="text-[10px] font-sans uppercase tracking-widest font-bold text-[#5C6E21] block">
                FILTER CHAIN STATE
              </span>

              <div className="space-y-2 text-xs font-sans">
                <div
                  className={`p-3 border transition-colors ${
                    stage === "build"
                      ? "border-[#5C6E21] bg-[#5C6E21]/10 text-[#2C2D1F]"
                      : stage === "break"
                      ? "border-red-500 bg-red-50 text-red-900"
                      : "border-[#373F1D] bg-[#373F1D] text-[#F5EEE9]"
                  }`}
                >
                  1. Password Authentication Filter
                </div>
                <div className="text-center text-xs font-bold text-[#5C6E21]">↓</div>
                <div
                  className={`p-3 border transition-colors ${
                    stage === "build"
                      ? "border-[#E3E1D4] bg-[#F5EEE9]"
                      : stage === "break"
                      ? "border-red-500 bg-red-100 text-red-900 line-through"
                      : "border-[#5C6E21] bg-[#5C6E21] text-[#F5EEE9]"
                  }`}
                >
                  2. Account Verification & HTTP 403 Handler
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
