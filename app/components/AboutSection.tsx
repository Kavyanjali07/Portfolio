"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  const principles = [
    {
      title: "BUILD",
      sub: "ENGINEERING",
      desc: "Design systems that are reliable, maintainable, and useful in real-world environments.",
    },
    {
      title: "BREAK",
      sub: "ANALYSIS",
      desc: "Question assumptions, audit logic, and deeply understand how software and networks fail.",
    },
    {
      title: "SECURE",
      sub: "CONSTRAINT",
      desc: "Treat security as a fundamental design constraint rather than an afterthought.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24 border-b border-[#E3E1D4] bg-[#F5EEE9]"
    >
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#E3E1D4] pb-6">
          <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold text-[#5C6E21]">
            01 / ABOUT
          </span>
          <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#373F1D]/60">
            PHILOSOPHY & FOCUS
          </span>
        </div>

        {/* Asymmetric Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Title Column (Col 1-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#2C2D1F]">
              BUILD.
              <br />
              BREAK.
              <br />
              <span className="font-editorial-italic text-[#5C6E21]">
                UNDERSTAND.
              </span>
            </h2>
            <div className="w-16 h-[2px] bg-[#5C6E21]" />
          </motion.div>

          {/* Right Narrative Column (Col 6-12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8 font-sans text-[#2C2D1F]/85 text-base sm:text-lg leading-relaxed"
          >
            <p className="font-medium text-[#2C2D1F]">
              I am a Computer Science and Engineering student at Lovely Professional University focused on backend software engineering and cybersecurity.
            </p>
            <p>
              My interest lies at the intersection of creation and resilience. I enjoy understanding systems from both sides: how they are built with clean code and robust architecture, and how they fail under unexpected inputs, misconfigurations, or targeted exploitation.
            </p>
            <p>
              Whether engineering scalable backend services in Java and Spring Boot, analyzing network traffic with Wireshark and nftables, or solving CTF challenges on Hack The Box, my goal remains consistent: shipping practical, high-assurance software that survives contact with reality.
            </p>

            <div className="pt-4 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase font-sans tracking-[0.2em] font-semibold text-[#5C6E21]">
              <span>• BACKEND ENGINEERING</span>
              <span>• SECURE SYSTEMS</span>
              <span>• NETWORK DEFENSE</span>
              <span>• PROBLEM SOLVING</span>
            </div>
          </motion.div>
        </div>

        {/* 3 Core Principles Grid */}
        <div className="pt-12 border-t border-[#E3E1D4]">
          <span className="block text-xs uppercase font-sans tracking-[0.3em] font-semibold text-[#5C6E21] mb-12">
            DESIGN PRINCIPLES
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {principles.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-4 p-8 border border-[#E3E1D4] bg-[#E3E1D4]/20 hover:border-[#5C6E21] transition-colors duration-300"
              >
                <div className="flex items-center justify-between text-xs font-sans uppercase tracking-[0.2em] text-[#5C6E21] font-semibold">
                  <span>0{idx + 1}</span>
                  <span>{p.sub}</span>
                </div>
                <h3 className="font-editorial text-3xl font-normal text-[#2C2D1F]">
                  {p.title}
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
