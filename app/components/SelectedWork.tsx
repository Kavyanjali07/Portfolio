"use client";

import { motion } from "framer-motion";

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24 border-b border-[#E3E1D4] bg-[#F5EEE9]"
    >
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#E3E1D4] pb-6">
          <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold text-[#5C6E21]">
            02 / SELECTED WORK
          </span>
          <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#373F1D]/60">
            CASE STUDIES & SYSTEMS
          </span>
        </div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="font-editorial text-4xl sm:text-6xl font-normal text-[#2C2D1F] tracking-tight">
            THINGS I&apos;VE BUILT.
          </h2>
          <p className="text-sm sm:text-base font-sans text-[#373F1D]/80 max-w-xl">
            Selected software engineering and security projects built with precision, reliability, and security as foundational constraints.
          </p>
        </motion.div>

        {/* 1. FLAGSHIP PROJECT — KNOWLEDGENETWORK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-[#E3E1D4] bg-[#E3E1D4]/15 p-8 md:p-14 space-y-12 relative overflow-hidden"
        >
          {/* Top Label */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E3E1D4] pb-6">
            <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-[#5C6E21]">
              FLAGSHIP PROJECT
            </span>
            <span className="text-xs uppercase font-sans tracking-[0.2em] text-[#373F1D]/70 font-semibold">
              FULL-STACK KNOWLEDGE GRAPH PLATFORM
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-8">
              <h3 className="font-editorial text-3xl sm:text-5xl font-normal text-[#2C2D1F]">
                KnowledgeNetwork
              </h3>

              <p className="text-base sm:text-lg font-sans text-[#2C2D1F]/85 leading-relaxed">
                A full-stack collaborative knowledge graph platform engineered for creating, managing, and visualizing interconnected concepts and domain relationships with high security and real-time responsiveness.
              </p>

              {/* Security Highlights */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase font-sans tracking-[0.2em] font-bold text-[#5C6E21] block">
                  SECURITY & AUTHORIZATION BOUNDARIES
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-sans text-[#2C2D1F]/80">
                  <li className="flex items-center gap-2">
                    <span className="text-[#5C6E21]">✓</span> JWT & HttpOnly Refresh Tokens
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#5C6E21]">✓</span> Gmail OTP Verification
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#5C6E21]">✓</span> Token Rotation Protocol
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#5C6E21]">✓</span> Fine-Grained RBAC & Isolation
                  </li>
                </ul>
              </div>

              {/* Tech Stack Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#E3E1D4]">
                <div>
                  <span className="text-[10px] uppercase font-sans tracking-[0.2em] font-bold text-[#373F1D] block mb-2">
                    BACKEND
                  </span>
                  <p className="text-xs font-sans text-[#2C2D1F]/80 leading-normal">
                    Java 21, Spring Boot 3.x, Spring Security, Spring Data JPA, PostgreSQL, Flyway, MapStruct, REST APIs
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-sans tracking-[0.2em] font-bold text-[#373F1D] block mb-2">
                    FRONTEND
                  </span>
                  <p className="text-xs font-sans text-[#2C2D1F]/80 leading-normal">
                    React, TypeScript, Vite, React Query, React Flow, Axios, Tailwind CSS
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-sans tracking-[0.2em] font-bold text-[#373F1D] block mb-2">
                    ARCHITECTURE
                  </span>
                  <p className="text-xs font-sans text-[#2C2D1F]/80 leading-normal">
                    Docker, OpenAPI/Swagger, Optimistic Locking, Validation
                  </p>
                </div>
              </div>
            </div>

            {/* Right Abstract Knowledge Graph Diagram */}
            <div className="lg:col-span-5 border border-[#E3E1D4] bg-[#F5EEE9] p-6 flex flex-col items-center justify-center min-h-[300px] relative">
              <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#5C6E21] font-bold mb-4">
                KNOWLEDGE GRAPH TOPOLOGY
              </span>

              {/* Styled Abstract SVG Knowledge Graph */}
              <svg
                viewBox="0 0 400 300"
                className="w-full h-auto max-h-[260px] text-[#5C6E21]"
              >
                {/* Connecting Edges */}
                <line x1="200" y1="150" x2="100" y2="80" stroke="#E3E1D4" strokeWidth="1.5" />
                <line x1="200" y1="150" x2="300" y2="90" stroke="#E3E1D4" strokeWidth="1.5" />
                <line x1="200" y1="150" x2="120" y2="230" stroke="#E3E1D4" strokeWidth="1.5" />
                <line x1="200" y1="150" x2="280" y2="220" stroke="#E3E1D4" strokeWidth="1.5" />
                <line x1="100" y1="80" x2="300" y2="90" stroke="#5C6E21" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="120" y1="230" x2="280" y2="220" stroke="#5C6E21" strokeWidth="1" strokeDasharray="3 3" />

                {/* Central Node */}
                <circle cx="200" cy="150" r="28" fill="#373F1D" />
                <text x="200" y="154" textAnchor="middle" fill="#F5EEE9" fontSize="10" fontFamily="sans-serif" fontWeight="bold">
                  CORE
                </text>

                {/* Connected Nodes */}
                <circle cx="100" cy="80" r="18" fill="#5C6E21" />
                <text x="100" y="83" textAnchor="middle" fill="#F5EEE9" fontSize="8" fontFamily="sans-serif">
                  AUTH
                </text>

                <circle cx="300" cy="90" r="20" fill="#5C6E21" />
                <text x="300" y="93" textAnchor="middle" fill="#F5EEE9" fontSize="8" fontFamily="sans-serif">
                  GRAPH
                </text>

                <circle cx="120" cy="230" r="16" fill="#2C2D1F" />
                <text x="120" y="233" textAnchor="middle" fill="#F5EEE9" fontSize="7" fontFamily="sans-serif">
                  RBAC
                </text>

                <circle cx="280" cy="220" r="18" fill="#373F1D" />
                <text x="280" y="223" textAnchor="middle" fill="#F5EEE9" fontSize="8" fontFamily="sans-serif">
                  API
                </text>
              </svg>

              <div className="mt-4 flex items-center justify-between w-full text-[10px] font-sans uppercase tracking-widest text-[#373F1D]/70">
                <span>VERIFIED SYSTEM ARCHITECTURE</span>
                <span>SPRING BOOT × REACT</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2 & 3. SECONDARY PROJECTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project 2: Dynamic Firewall Rule Generator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-[#E3E1D4] bg-[#E3E1D4]/15 p-8 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#E3E1D4] pb-4">
                <span className="text-[10px] uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21]">
                  SECURITY & NETWORKING
                </span>
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#373F1D]/70">
                  REAL-TIME AUTOMATION
                </span>
              </div>

              {/* Image Screenshot if present */}
              <div className="w-full h-48 border border-[#E3E1D4] bg-[#F5EEE9] overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/projects/firewall_generator.png"
                  alt="Dynamic Firewall Rule Generator"
                  className="w-full h-full object-cover filter contrast-105 hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#2C2D1F]">
                Dynamic Firewall Rule Generator
              </h3>

              <p className="text-sm font-sans text-[#2C2D1F]/80 leading-relaxed">
                Python-based real-time network traffic monitoring engine for automated threat detection and dynamic nftables firewall rule generation to neutralize high-velocity network attacks in milliseconds.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Python", "nftables", "Packet Inspection", "Anomaly Detection", "Linux Kernel"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] font-sans uppercase tracking-widest bg-[#E3E1D4]/60 text-[#373F1D] border border-[#E3E1D4]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E3E1D4] flex items-center justify-between">
              <a
                href="https://github.com/Kavyanjali07/Dynamic-Firewall-Rule-Generator"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-xs uppercase font-sans tracking-[0.2em] font-semibold text-[#2C2D1F] hover:text-[#5C6E21] transition-colors"
              >
                <span>VIEW REPOSITORY</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>

          {/* Project 3: Smart Expense AI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-[#E3E1D4] bg-[#E3E1D4]/15 p-8 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#E3E1D4] pb-4">
                <span className="text-[10px] uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21]">
                  BACKEND SYSTEMS
                </span>
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#373F1D]/70">
                  FINANCIAL BACKEND
                </span>
              </div>

              {/* Image Screenshot if present */}
              <div className="w-full h-48 border border-[#E3E1D4] bg-[#F5EEE9] overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/projects/smart_expense_ai.png"
                  alt="Smart Expense AI"
                  className="w-full h-full object-cover filter contrast-105 hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#2C2D1F]">
                Smart Expense AI
              </h3>

              <p className="text-sm font-sans text-[#2C2D1F]/80 leading-relaxed">
                Expense tracking and investment-oriented backend application engineered with Spring Boot, implementing JWT-based stateless authentication and encrypted data categorization.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Spring Boot", "Java", "JWT Auth", "REST APIs", "PostgreSQL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] font-sans uppercase tracking-widest bg-[#E3E1D4]/60 text-[#373F1D] border border-[#E3E1D4]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E3E1D4] flex items-center justify-between">
              <a
                href="https://github.com/Kavyanjali07/SmartExpenseAI"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-xs uppercase font-sans tracking-[0.2em] font-semibold text-[#2C2D1F] hover:text-[#5C6E21] transition-colors"
              >
                <span>VIEW REPOSITORY</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
