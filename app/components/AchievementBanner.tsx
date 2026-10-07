"use client";

import { motion } from "framer-motion";

export default function AchievementBanner() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 border-b border-[#E3E1D4] bg-[#E3E1D4]/25">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side Large Number 72 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-baseline gap-4"
        >
          <span className="font-editorial text-7xl sm:text-9xl lg:text-[12rem] font-normal leading-none text-[#2C2D1F]">
            72
          </span>
          <div className="space-y-1">
            <span className="block text-xs uppercase font-sans tracking-[0.3em] font-bold text-[#5C6E21]">
              GLOBAL CTF RANK
            </span>
            <span className="block font-editorial text-xl sm:text-2xl italic text-[#373F1D]">
              Hack The Box
            </span>
          </div>
        </motion.div>

        {/* Right Side Editorial Description */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl space-y-6 lg:border-l lg:border-[#E3E1D4] lg:pl-12"
        >
          <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21] block">
            FEATURED COMPETITION ACHIEVEMENT
          </span>

          <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#2C2D1F]">
            Tinsel Trouble Global CTF
          </h3>

          <p className="text-base font-sans text-[#2C2D1F]/80 leading-relaxed">
            Achieved Global Rank 72 competing in an international cybersecurity Capture The Flag competition on Hack The Box as part of a university team, solving complex challenges across web security, reverse engineering, cryptography, and network analysis.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs font-sans uppercase tracking-widest text-[#373F1D]/70 font-semibold">
            <span>HACK THE BOX</span>
            <span>•</span>
            <span>UNIVERSITY TEAM</span>
            <span>•</span>
            <span>GLOBAL RANK 72</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
