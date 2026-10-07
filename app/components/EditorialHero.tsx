"use client";

import { motion } from "framer-motion";
import Hero3D from "./Hero3D";

export default function EditorialHero() {
  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-16 lg:px-24 overflow-hidden border-b border-[#E3E1D4]">
      {/* Editorial Grid Composition */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        
        {/* Left Column: Editorial Statement & Typography (Col 1-7) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start gap-6 relative z-10"
        >
          {/* Sub-Tagline */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#5C6E21]" />
            <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold text-[#5C6E21]">
              Software Engineering × Cybersecurity
            </span>
          </div>

          {/* Large Editorial Statement */}
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-[#2C2D1F]">
            I BUILD SYSTEMS.
            <br />
            <span className="font-editorial-italic font-normal text-[#373F1D]">
              I THINK ABOUT HOW THEY BREAK.
            </span>
          </h1>

          {/* Concise Description */}
          <p className="max-w-xl text-base sm:text-lg font-sans text-[#2C2D1F]/80 leading-relaxed font-normal mt-2">
            Computer science engineer focused on building secure, reliable systems and understanding the ways they fail.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button
              onClick={scrollToWork}
              className="group px-8 py-3.5 bg-[#2C2D1F] text-[#F5EEE9] text-xs uppercase font-sans tracking-[0.2em] font-semibold hover:bg-[#5C6E21] transition-all duration-300 flex items-center gap-3 cursor-pointer"
            >
              <span>EXPLORE WORK</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>

            <button
              onClick={scrollToContact}
              className="group px-8 py-3.5 border border-[#2C2D1F] text-[#2C2D1F] text-xs uppercase font-sans tracking-[0.2em] font-semibold hover:border-[#5C6E21] hover:text-[#5C6E21] transition-all duration-300 flex items-center gap-3 cursor-pointer"
            >
              <span>CONNECT</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Visual Composition with Circular Portrait + Real 3D WebGL Hero3D (Col 8-12) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] lg:min-h-[480px]"
        >
          {/* REAL 3D WebGL Architectural Knowledge Network Sculpture */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-90 scale-105">
            <Hero3D />
          </div>

          {/* Circular Portrait Image */}
          <div className="relative z-10 p-1.5 rounded-full border-[3px] border-[#5C6E21] ring-1 ring-[#E3E1D4] bg-[#F5EEE9] shadow-xl">
            <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpg"
                alt="Kavyanjali Vashishtha"
                className="w-full h-full object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Editorial Metadata Footer */}
      <div className="max-w-7xl mx-auto w-full pt-12 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans uppercase tracking-[0.25em] text-[#373F1D]/70 border-t border-[#E3E1D4]/60 gap-4">
        <div className="flex items-center gap-4">
          <span>BASED IN INDIA</span>
          <span>•</span>
          <span>SOFTWARE ENGINEERING × SECURITY</span>
        </div>
        <div className="flex items-center gap-4 font-semibold text-[#5C6E21]">
          <span>JAVA / PYTHON / SPRING BOOT</span>
        </div>
      </div>
    </section>
  );
}
