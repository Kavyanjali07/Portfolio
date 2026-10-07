"use client";

import { motion } from "framer-motion";

interface InterludeProps {
  statement: string;
  sub?: string;
}

export default function TypographicInterlude({
  statement,
  sub = "FIELD JOURNAL OBSERVATION",
}: InterludeProps) {
  return (
    <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 border-b border-[#E3E1D4] bg-[#F5EEE9]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-4">
        <span className="text-[10px] font-sans uppercase tracking-[0.3em] font-bold text-[#5C6E21]">
          [ {sub} ]
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal text-[#2C2D1F] tracking-tight max-w-4xl leading-tight"
        >
          &ldquo;{statement}&rdquo;
        </motion.h2>
      </div>
    </section>
  );
}
