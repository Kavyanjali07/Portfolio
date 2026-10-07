"use client";

import { motion } from "framer-motion";

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-[#F5EEE9] pt-24 md:pt-36 pb-12 px-6 md:px-16 lg:px-24 border-t border-[#E3E1D4]"
    >
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#E3E1D4] pb-6">
          <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold text-[#5C6E21]">
            06 / CONTACT
          </span>
          <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#373F1D]/60">
            GET IN TOUCH
          </span>
        </div>

        {/* Hero Contact Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-4xl"
        >
          <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] text-[#2C2D1F]">
            HAVE SOMETHING
            <br />
            <span className="font-editorial-italic text-[#5C6E21]">
              WORTH BUILDING?
            </span>
          </h2>
          <p className="font-editorial text-2xl sm:text-3xl text-[#373F1D]/80 italic">
            LET&apos;S TALK.
          </p>
        </motion.div>

        {/* Direct Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-[#E3E1D4]">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-3 p-8 border border-[#E3E1D4] bg-[#E3E1D4]/20 hover:border-[#5C6E21] transition-colors"
          >
            <span className="text-[10px] uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21]">
              PRIMARY EMAIL
            </span>
            <a
              href="mailto:kavyanjalivashishtha@gmail.com"
              className="block font-sans text-base sm:text-lg font-semibold text-[#2C2D1F] hover:text-[#5C6E21] transition-colors break-all"
            >
              kavyanjalivashishtha@gmail.com
            </a>
            <span className="text-xs font-sans uppercase tracking-widest text-[#373F1D]/60 block pt-2">
              SEND AN INQUIRY →
            </span>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-3 p-8 border border-[#E3E1D4] bg-[#E3E1D4]/20 hover:border-[#5C6E21] transition-colors"
          >
            <span className="text-[10px] uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21]">
              PROFESSIONAL NETWORK
            </span>
            <a
              href="https://www.linkedin.com/in/kavyanjali07"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-sans text-base sm:text-lg font-semibold text-[#2C2D1F] hover:text-[#5C6E21] transition-colors"
            >
              linkedin.com/in/kavyanjali07
            </a>
            <span className="text-xs font-sans uppercase tracking-widest text-[#373F1D]/60 block pt-2">
              CONNECT ON LINKEDIN →
            </span>
          </motion.div>

          {/* GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-3 p-8 border border-[#E3E1D4] bg-[#E3E1D4]/20 hover:border-[#5C6E21] transition-colors"
          >
            <span className="text-[10px] uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21]">
              SOURCE CODE
            </span>
            <a
              href="https://github.com/Kavyanjali07"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-sans text-base sm:text-lg font-semibold text-[#2C2D1F] hover:text-[#5C6E21] transition-colors"
            >
              github.com/Kavyanjali07
            </a>
            <span className="text-xs font-sans uppercase tracking-widest text-[#373F1D]/60 block pt-2">
              EXPLORE REPOSITORIES →
            </span>
          </motion.div>
        </div>

        {/* Minimal Editorial Footer */}
        <div className="pt-16 border-t border-[#E3E1D4] flex flex-col md:flex-row items-center justify-between text-xs font-sans uppercase tracking-[0.2em] text-[#373F1D]/70 gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="font-editorial text-lg font-normal text-[#2C2D1F] tracking-tight">
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
