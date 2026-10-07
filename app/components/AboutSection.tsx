"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  const principles = [
    {
      title: "BUILD",
      sub: "ENGINEERING",
      statement: "I like turning ideas into working systems.",
      desc: "Design software that is reliable, maintainable, and useful in real-world environments.",
    },
    {
      title: "BREAK",
      sub: "ANALYSIS",
      statement: "I want to understand where those systems fail.",
      desc: "Question assumptions, audit logic, and deeply analyze failure modes under unexpected conditions.",
    },
    {
      title: "UNDERSTAND",
      sub: "INTERNALS",
      statement: "I care about what happens underneath the interface.",
      desc: "Analyze protocol behavior, memory constraints, and runtime execution down to the OS kernel level.",
    },
    {
      title: "SECURE",
      sub: "CONSTRAINT",
      statement: "I treat security as part of engineering, not a final layer.",
      desc: "Integrate fine-grained authorization, token rotation, and zero-trust boundaries into initial architecture.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24 border-b border-[#E3E1D4] bg-[#E3E1D4]/30 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#E3E1D4] pb-6">
          <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-[#5C6E21]">
            01 / HOW I THINK
          </span>
          <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#373F1D]/60">
            ENGINEERING MANIFESTO
          </span>
        </div>

        {/* Split-Screen Editorial Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Huge Statement (Col 1-6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 lg:sticky lg:top-28"
          >
            <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21] block">
              ENGINEERING PHILOSOPHY
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl font-normal leading-[1.08] text-[#2C2D1F] tracking-tight">
              I LIKE UNDERSTANDING
              <br />
              <span className="font-editorial-italic text-[#5C6E21]">
                WHAT HAPPENS UNDERNEATH.
              </span>
            </h2>
            <div className="w-16 h-[2px] bg-[#5C6E21]" />
            <p className="text-sm sm:text-base font-sans text-[#373F1D]/80 leading-relaxed max-w-md">
              Computer Science and Engineering student at Lovely Professional University focused on backend software engineering, zero-trust protocols, and cybersecurity.
            </p>
          </motion.div>

          {/* Right Narrative Manifesto Column (Col 7-12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 space-y-8 font-sans text-[#2C2D1F]/85 text-base sm:text-lg leading-relaxed"
          >
            <p className="font-medium text-[#2C2D1F] border-l-2 border-[#5C6E21] pl-6 py-1">
              My interest lies at the intersection of creation and resilience. I enjoy understanding systems from both sides: how they are built with clean code and robust architecture, and how they fail under unexpected inputs or targeted exploitation.
            </p>
            <p>
              Whether engineering scalable backend microservices in Java 21 and Spring Boot 3, analyzing network traffic with Wireshark and Linux nftables, or solving CTF challenges on Hack The Box, my goal remains consistent: shipping high-assurance software that survives contact with reality.
            </p>

            <div className="pt-4 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase font-sans tracking-[0.2em] font-bold text-[#5C6E21]">
              <span>• BACKEND ENGINEERING</span>
              <span>• SECURE SYSTEMS</span>
              <span>• NETWORK DEFENSE</span>
            </div>
          </motion.div>
        </div>

        {/* 4 Core Principles Grid */}
        <div className="pt-12 border-t border-[#E3E1D4]">
          <div className="flex items-center justify-between mb-12">
            <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-[#5C6E21]">
              FOUR MINDSET PILLARS
            </span>
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#373F1D]/60">
              [ MANIFESTO FIELD NOTES ]
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {principles.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-4 p-8 border border-[#E3E1D4] bg-[#F5EEE9]/90 hover:border-[#5C6E21] transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center justify-between text-xs font-sans uppercase tracking-[0.2em] text-[#5C6E21] font-bold">
                  <span>0{idx + 1} / {p.title}</span>
                  <span className="text-[#373F1D]/60">{p.sub}</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#2C2D1F]">
                  &ldquo;{p.statement}&rdquo;
                </h3>
                <p className="text-sm text-[#2C2D1F]/80 font-sans leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
