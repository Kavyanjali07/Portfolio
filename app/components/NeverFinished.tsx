"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ImpossibleMachine from "./ImpossibleMachine";

export default function NeverFinished() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setScrollProgress(latest);
    });
  }, [scrollYProgress]);

  const opacityEvolves = useTransform(scrollYProgress, [0.2, 0.45], [0.3, 1]);
  const opacityAdapts = useTransform(scrollYProgress, [0.45, 0.65], [0.3, 1]);
  const opacityExpands = useTransform(scrollYProgress, [0.65, 0.85], [0.3, 1]);
  const opacityFinal = useTransform(scrollYProgress, [0.75, 0.95], [0.4, 1]);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-40 px-6 md:px-16 lg:px-24 border-b border-[#E3E1D4] bg-[#F5EEE9] relative overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Technical Micro-Header */}
        <div className="flex items-center justify-between border-b border-[#E3E1D4] pb-6">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-[#5C6E21]">
              SIGNATURE MOMENT
            </span>
            <span className="text-xs font-sans text-[#373F1D]/60">•</span>
            <span className="text-[10px] font-sans uppercase tracking-widest text-[#373F1D] font-bold">
              ITERATION 07
            </span>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-sans uppercase tracking-widest font-bold">
            <span className="text-[#5C6E21] animate-pulse">● RECONFIGURING</span>
            <span className="text-[#373F1D]/60">[ INCOMPLETE ]</span>
          </div>
        </div>

        {/* Spatial Typography Editorial Composition Framing The Impossible Machine */}
        <div className="space-y-8">
          {/* Top Line of Display Typography */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-editorial text-6xl sm:text-8xl lg:text-9xl font-normal text-[#2C2D1F] tracking-tight leading-none"
          >
            THE SYSTEM IS
          </motion.h2>

          {/* Central Spatial Workspace housing The Impossible Machine 3D Kinetic Sculpture */}
          <div className="h-[420px] sm:h-[520px] md:h-[580px] w-full relative flex items-center justify-center border-y border-[#E3E1D4]/80 bg-[#F5EEE9]">
            
            {/* Technical Micro-Annotations framing the sculpture */}
            <div className="absolute top-6 left-6 text-[10px] font-sans uppercase tracking-[0.25em] text-[#373F1D]/60 font-semibold space-y-1 pointer-events-none">
              <div>SYSTEM STATE: TRANSFORMING</div>
              <div>AXIS: ASYMMETRICAL KINETIC</div>
            </div>

            <div className="absolute bottom-6 right-6 text-[10px] font-sans uppercase tracking-[0.25em] text-[#5C6E21] font-bold space-y-1 pointer-events-none text-right">
              <div>CONTINUOUS RECONFIGURATION</div>
              <div>VERSION 04 / UNFINISHED</div>
            </div>

            {/* 3D Kinetic Machine */}
            <ImpossibleMachine progress={scrollProgress} />
          </div>

          {/* Bottom Line of Display Typography */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-editorial text-6xl sm:text-8xl lg:text-9xl font-normal text-[#5C6E21] tracking-tight leading-none text-right"
          >
            NEVER FINISHED.
          </motion.h2>
        </div>

        {/* Copy Breakdown & Final Visual Emphasis */}
        <div className="pt-12 border-t border-[#E3E1D4] grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Paragraph (Col 1-8) */}
          <div className="lg:col-span-8 space-y-6">
            <p className="font-editorial text-2xl sm:text-4xl text-[#2C2D1F] leading-snug">
              Every codebase{" "}
              <motion.span style={{ opacity: opacityEvolves }} className="text-[#5C6E21] font-normal underline decoration-[#5C6E21]/40">
                evolves
              </motion.span>
              , every security boundary{" "}
              <motion.span style={{ opacity: opacityAdapts }} className="text-[#5C6E21] font-normal underline decoration-[#5C6E21]/40">
                adapts
              </motion.span>{" "}
              to new threats, and every system{" "}
              <motion.span style={{ opacity: opacityExpands }} className="text-[#5C6E21] font-normal underline decoration-[#5C6E21]/40">
                expands
              </motion.span>{" "}
              with new knowledge.
            </p>
          </div>

          {/* Special Visual Emphasis on "Still building. Still exploring." (Col 9-12) */}
          <motion.div
            style={{ opacity: opacityFinal }}
            className="lg:col-span-4 p-8 border border-[#5C6E21]/40 bg-[#E3E1D4]/40 space-y-2 text-right"
          >
            <span className="font-editorial text-3xl sm:text-4xl font-normal text-[#5C6E21] italic block">
              Still building.
            </span>
            <span className="font-editorial text-3xl sm:text-4xl font-normal text-[#373F1D] italic block">
              Still exploring.
            </span>
          </motion.div>
        </div>

        {/* Micro-Interaction Progress Bar */}
        <div className="pt-10 border-t border-[#E3E1D4] flex items-center justify-between text-xs font-sans uppercase tracking-[0.25em] text-[#373F1D]/75">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5C6E21] animate-ping" />
            <span className="font-bold text-[#5C6E21]">STATUS: STILL BUILDING</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-32 h-[2px] bg-[#E3E1D4] relative overflow-hidden">
              <div
                className="h-full bg-[#5C6E21] transition-all duration-300"
                style={{ width: `${Math.min(100, Math.max(15, scrollProgress * 100))}%` }}
              />
            </div>
            <span className="font-bold text-[#2C2D1F]">STILL EXPLORING.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
