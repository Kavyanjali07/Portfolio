"use client";

import { motion } from "framer-motion";

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
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24 border-b border-[#E3E1D4] bg-[#F5EEE9]"
    >
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#E3E1D4] pb-6">
          <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold text-[#5C6E21]">
            04 / SECURITY
          </span>
          <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#373F1D]/60">
            SYSTEM RESILIENCE
          </span>
        </div>

        {/* Large Editorial Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-[#2C2D1F] tracking-tight leading-[1.05]">
            SECURITY IS A<br />
            <span className="font-editorial-italic text-[#5C6E21]">
              DESIGN CONSTRAINT.
            </span>
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#2C2D1F]/80 max-w-2xl leading-relaxed">
            Security should not be an afterthought retrofitted onto software. It is a foundational constraint defined during initial system architecture.
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 pt-6">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 md:p-10 border border-[#E3E1D4] bg-[#E3E1D4]/20 hover:border-[#5C6E21] transition-colors duration-300 space-y-6"
            >
              <div className="flex items-center justify-between border-b border-[#E3E1D4] pb-4 text-xs font-sans uppercase tracking-[0.2em] text-[#5C6E21] font-bold">
                <span>0{idx + 1} / {p.title}</span>
                <span className="text-[#373F1D]/70">{p.subtitle}</span>
              </div>

              <h3 className="font-editorial text-3xl font-normal text-[#2C2D1F]">
                {p.title}
              </h3>

              <p className="text-sm font-sans text-[#2C2D1F]/80 leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
