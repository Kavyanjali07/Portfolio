"use client";

import { motion } from "framer-motion";
import Hero3D from "./Hero3D";

export default function SecuritySection() {
  const pillars = [
    {
      title: "NETWORK",
      subtitle: "TRAFFIC & PROTOCOLS",
      desc: "Deep packet inspection, Wireshark traffic auditing, socket analysis, and protocol security verification across local and distributed networks.",
    },
    {
      title: "DEFENSE",
      subtitle: "AUTOMATION & HARDENING",
      desc: "Automated threat response, nftables rule generation, zero-trust backend authorization, and boundary-level validation.",
    },
    {
      title: "OFFENSE",
      subtitle: "THREAT MODELING & CTF",
      desc: "Ethical exploitation techniques, vulnerability analysis (VAPT), privilege escalation research, and competitive CTF problem solving.",
    },
    {
      title: "SYSTEMS",
      subtitle: "OS & KERNEL BOUNDARIES",
      desc: "Understanding system call interfaces, process memory isolation, Linux environment hardening, and secure runtime execution constraints.",
    },
  ];

  return (
    <section
      id="security"
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24 border-b border-[#373F1D] bg-[#2C2D1F] text-[#F5EEE9] relative overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#373F1D] pb-6">
          <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-[#5C6E21]">
            04 / SECURITY & RESILIENCE
          </span>
          <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#E3E1D4]/60">
            ZERO-TRUST BOUNDARIES
          </span>
        </div>

        {/* Large Editorial Statement + 3D System Security Mode Background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F5EEE9] tracking-tight leading-[1.05]">
              SECURITY IS A<br />
              <span className="font-editorial-italic text-[#5C6E21]">
                DESIGN CONSTRAINT.
              </span>
            </h2>
            <p className="text-base sm:text-lg font-sans text-[#E3E1D4]/85 max-w-2xl leading-relaxed">
              Security should not be an afterthought retrofitted onto software. It is a foundational constraint defined during initial system architecture.
            </p>
          </motion.div>

          {/* Security Mode 3D System Sculpture Visual */}
          <div className="lg:col-span-5 h-[320px] md:h-[400px] relative flex items-center justify-center border border-[#373F1D] bg-[#373F1D]/20">
            <Hero3D mode="security" />
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 pt-6">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 md:p-10 border border-[#373F1D] bg-[#373F1D]/40 hover:border-[#5C6E21] transition-colors duration-300 space-y-6"
            >
              <div className="flex items-center justify-between border-b border-[#373F1D] pb-4 text-xs font-sans uppercase tracking-[0.2em] text-[#5C6E21] font-bold">
                <span>0{idx + 1} / {p.title}</span>
                <span className="text-[#E3E1D4]/60">{p.subtitle}</span>
              </div>

              <h3 className="font-editorial text-3xl font-normal text-[#F5EEE9]">
                {p.title}
              </h3>

              <p className="text-sm font-sans text-[#E3E1D4]/85 leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
