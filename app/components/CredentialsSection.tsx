"use client";

import { motion } from "framer-motion";

export default function CredentialsSection() {
  const credentialsByYear = [
    {
      year: "2026",
      items: [
        {
          title: "Java Certification",
          issuer: "HackerRank",
          date: "February 2026",
          id: "VERIFIED",
        },
      ],
    },
    {
      year: "2025",
      items: [
        {
          title: "Deloitte Australia — Cyber Job Simulation",
          issuer: "Forage",
          date: "May 2025",
          id: "h4mfBiWcEsqc6LcB6",
          link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_sZbzeDaJJhwnQPZ3L_1748684074744_completion_certificate.pdf",
        },
        {
          title: "Tinsel Trouble CTF Rank 72",
          issuer: "Hack The Box",
          date: "December 2025",
          id: "GLOBAL RANK 72",
        },
        {
          title: "Privacy and Security In Online Social Media",
          issuer: "NPTEL",
          date: "October 2025",
          id: "NPTEL VERIFIED",
        },
        {
          title: "Play It Safe: Manage Security Risks",
          issuer: "Google",
          date: "May 2025",
          id: "COURSERA VERIFIED",
        },
      ],
    },
  ];

  return (
    <section
      id="credentials"
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24 border-b border-[#E3E1D4] bg-[#F5EEE9]"
    >
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#E3E1D4] pb-6">
          <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-[#5C6E21]">
            05 / CREDENTIAL ARCHIVE
          </span>
          <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#373F1D]/60">
            VERIFIED EVIDENCE WALL
          </span>
        </div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="font-editorial text-4xl sm:text-6xl font-normal text-[#2C2D1F] tracking-tight">
            CREDENTIAL ARCHIVE.
          </h2>
          <p className="text-sm sm:text-base font-sans text-[#373F1D]/80 max-w-xl">
            Verified technical certifications, cyber simulations, and academic credentials organized by timeline.
          </p>
        </motion.div>

        {/* Timeline Archival Evidence Wall */}
        <div className="space-y-16 pt-4">
          {credentialsByYear.map((group) => (
            <div key={group.year} className="space-y-8">
              {/* Year Primary Anchor */}
              <div className="flex items-center gap-4 border-b border-[#E3E1D4] pb-3">
                <span className="font-editorial text-4xl sm:text-5xl font-normal text-[#5C6E21]">
                  {group.year}
                </span>
                <span className="text-xs uppercase font-sans tracking-[0.2em] font-bold text-[#373F1D]/60">
                  VERIFIED ARCHIVE RECORD
                </span>
              </div>

              {/* Items in Year */}
              <div className="space-y-6">
                {group.items.map((cred, idx) => (
                  <motion.div
                    key={cred.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="group border-b border-[#E3E1D4]/60 pb-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4"
                  >
                    <div className="space-y-1 max-w-2xl">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-bold text-[#5C6E21]">
                          {cred.issuer}
                        </span>
                        <span className="text-[10px] font-sans uppercase tracking-widest text-[#373F1D]/60">
                          {cred.id}
                        </span>
                      </div>
                      {cred.link ? (
                        <a
                          href={cred.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block font-editorial text-2xl sm:text-3xl font-normal text-[#2C2D1F] group-hover:text-[#5C6E21] group-hover:italic transition-all duration-300"
                        >
                          {cred.title} ↗
                        </a>
                      ) : (
                        <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#2C2D1F] group-hover:text-[#5C6E21] group-hover:italic transition-all duration-300">
                          {cred.title}
                        </h3>
                      )}
                    </div>

                    <div className="flex items-center gap-6">
                      <span className="text-xs font-sans uppercase tracking-widest text-[#373F1D]/70 font-medium">
                        {cred.date}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn CTA Link */}
        <div className="pt-6 flex justify-end">
          <a
            href="https://www.linkedin.com/in/kavyanjali07"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-xs uppercase font-sans tracking-[0.2em] font-bold text-[#2C2D1F] hover:text-[#5C6E21] transition-colors"
          >
            <span>VIEW ALL CREDENTIALS ON LINKEDIN</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
