"use client";

import { motion } from "framer-motion";
import Hero3D from "./Hero3D";

export default function AchievementBanner() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-[#2C2D1F] text-[#F5EEE9] border-y border-[#373F1D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left 3D System Node Visualization (Col 1-5) */}
        <div className="lg:col-span-5 h-[260px] md:h-[320px] relative flex items-center justify-center border border-[#373F1D] bg-[#373F1D]/20">
          <Hero3D mode="security" />
        </div>

        {/* Right Achievement Narrative (Col 6-12) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#5C6E21]" />
            <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-[#5C6E21]">
              GLOBAL COMPETITIVE ACHIEVEMENT
            </span>
          </div>

          <div className="flex items-baseline gap-6">
            <span className="font-editorial text-7xl sm:text-9xl font-normal text-[#5C6E21] leading-none">
              72
            </span>
            <div>
              <h3 className="font-editorial text-3xl sm:text-5xl font-normal text-[#F5EEE9] leading-tight">
                GLOBAL RANK
              </h3>
              <p className="text-xs sm:text-sm font-sans uppercase tracking-[0.2em] text-[#E3E1D4]/70">
                HACK THE BOX — TINSEL TROUBLE CTF (DECEMBER 2025)
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base font-sans text-[#E3E1D4]/85 leading-relaxed max-w-xl">
            Ranked 72nd globally among international security researchers in Hack The Box&apos;s holiday Capture The Flag competition, solving web exploitation, cryptography, and reverse engineering challenges.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-sans uppercase tracking-widest text-[#5C6E21] font-semibold">
            <span>• WEB EXPLOITATION</span>
            <span>• CRYPTOGRAPHY</span>
            <span>• REVERSE ENGINEERING</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
