"use client";

import { motion } from "framer-motion";
import Hero3D from "./Hero3D";

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-[#373F1D] text-[#F5EEE9] pt-24 md:pt-36 pb-12 px-6 md:px-16 lg:px-24 border-t border-[#5C6E21] transition-colors duration-500 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#5C6E21]/50 pb-6">
          <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-[#5C6E21]">
            06 / CONTACT & COLLABORATION
          </span>
          <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#E3E1D4]/60">
            FIELD LOG END
          </span>
        </div>

        {/* Hero Contact Heading + Converging 3D System Sculpture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] text-[#F5EEE9]">
              THE NEXT SYSTEM
              <br />
              <span className="font-editorial-italic text-[#5C6E21]">
                COULD BE YOURS.
              </span>
            </h2>
            <p className="font-editorial text-2xl sm:text-3xl text-[#E3E1D4]/80 italic">
              LET&apos;S BUILD IT.
            </p>
          </motion.div>

          <div className="lg:col-span-5 h-[280px] md:h-[360px] relative flex items-center justify-center border border-[#5C6E21]/40 bg-[#2C2D1F]/30">
            <Hero3D mode="contact" />
          </div>
        </div>

        {/* Direct Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-[#5C6E21]/50">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-3 p-8 border border-[#5C6E21]/40 bg-[#2C2D1F]/50 hover:border-[#5C6E21] transition-colors"
          >
            <span className="text-[10px] uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21]">
              PRIMARY EMAIL
            </span>
            <a
              href="mailto:kavyanjalivashishtha@gmail.com"
              className="block font-sans text-base sm:text-lg font-semibold text-[#F5EEE9] hover:text-[#5C6E21] transition-colors break-all"
            >
              kavyanjalivashishtha@gmail.com
            </a>
            <span className="text-xs font-sans uppercase tracking-widest text-[#E3E1D4]/70 block pt-2">
              SEND AN INQUIRY →
            </span>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-3 p-8 border border-[#5C6E21]/40 bg-[#2C2D1F]/50 hover:border-[#5C6E21] transition-colors"
          >
            <span className="text-[10px] uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21]">
              PROFESSIONAL NETWORK
            </span>
            <a
              href="https://www.linkedin.com/in/kavyanjali07"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-sans text-base sm:text-lg font-semibold text-[#F5EEE9] hover:text-[#5C6E21] transition-colors"
            >
              linkedin.com/in/kavyanjali07
            </a>
            <span className="text-xs font-sans uppercase tracking-widest text-[#E3E1D4]/70 block pt-2">
              CONNECT ON LINKEDIN →
            </span>
          </motion.div>

          {/* GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-3 p-8 border border-[#5C6E21]/40 bg-[#2C2D1F]/50 hover:border-[#5C6E21] transition-colors"
          >
            <span className="text-[10px] uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21]">
              SOURCE CODE
            </span>
            <a
              href="https://github.com/Kavyanjali07"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-sans text-base sm:text-lg font-semibold text-[#F5EEE9] hover:text-[#5C6E21] transition-colors"
            >
              github.com/Kavyanjali07
            </a>
            <span className="text-xs font-sans uppercase tracking-widest text-[#E3E1D4]/70 block pt-2">
              EXPLORE REPOSITORIES →
            </span>
          </motion.div>
        </div>

        {/* Minimal Editorial Footer */}
        <div className="pt-16 border-t border-[#5C6E21]/50 flex flex-col md:flex-row items-center justify-between text-xs font-sans uppercase tracking-[0.2em] text-[#E3E1D4]/70 gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="font-editorial text-lg font-normal text-[#F5EEE9] tracking-tight">
              KAVYANJALI VASHISHTHA
            </span>
            <span className="hidden sm:inline">•</span>
            <span>SOFTWARE ENGINEERING × CYBERSECURITY</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Kavyanjali07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#5C6E21] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kavyanjali07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#5C6E21] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:kavyanjalivashishtha@gmail.com"
              className="hover:text-[#5C6E21] transition-colors"
            >
              Email
            </a>
            <span>•</span>
            <span>© {currentYear}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
