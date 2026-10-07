"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState<number>(1);

  return (
    <section
      id="work"
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24 border-b border-[#E3E1D4] bg-[#EBEFE4]/60 transition-colors duration-500 relative"
    >
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#E3E1D4] pb-6">
          <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-[#5C6E21]">
            02 / SELECTED WORK
          </span>
          <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#373F1D]/60">
            ENGINEERING STORIES & ARCHITECTURE
          </span>
        </div>

        {/* Section Title & Sticky Editorial Index */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#E3E1D4] pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-2xl"
          >
            <h2 className="font-editorial text-4xl sm:text-6xl font-normal text-[#2C2D1F] tracking-tight">
              ENGINEERING STORIES.
            </h2>
            <p className="text-sm sm:text-base font-sans text-[#373F1D]/80 leading-relaxed">
              Detailed technical logs documenting the problem, architecture, security constraints, failure modes, and outcomes of key systems.
            </p>
          </motion.div>

          {/* Sticky Project Index Bar */}
          <div className="flex items-center gap-6 text-xs font-sans uppercase tracking-[0.2em] font-bold">
            <button
              onClick={() => {
                setActiveProject(1);
                document.getElementById("project-kn")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`pb-1 border-b-2 transition-colors cursor-pointer ${
                activeProject === 1 ? "border-[#5C6E21] text-[#5C6E21]" : "border-transparent text-[#373F1D]/60"
              }`}
            >
              01 KNOWLEDGENETWORK
            </button>
            <button
              onClick={() => {
                setActiveProject(2);
                document.getElementById("project-fw")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`pb-1 border-b-2 transition-colors cursor-pointer ${
                activeProject === 2 ? "border-[#5C6E21] text-[#5C6E21]" : "border-transparent text-[#373F1D]/60"
              }`}
            >
              02 DYNAMIC FIREWALL
            </button>
            <button
              onClick={() => {
                setActiveProject(3);
                document.getElementById("project-se")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`pb-1 border-b-2 transition-colors cursor-pointer ${
                activeProject === 3 ? "border-[#5C6E21] text-[#5C6E21]" : "border-transparent text-[#373F1D]/60"
              }`}
            >
              03 SMART EXPENSE
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* STORY 01: KNOWLEDGENETWORK — CENTERPIECE ENGINEERING STORY */}
        {/* ============================================================ */}
        <motion.div
          id="project-kn"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onViewportEnter={() => setActiveProject(1)}
          className="border border-[#E3E1D4] bg-[#F5EEE9] p-8 md:p-14 space-y-16 shadow-sm relative overflow-hidden"
        >
          {/* Header Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E3E1D4] pb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-[#5C6E21]">
                PROJECT STORY 01
              </span>
              <span className="text-xs font-sans text-[#373F1D]/60">•</span>
              <span className="text-xs uppercase font-sans tracking-widest font-semibold text-[#373F1D]">
                FLAGSHIP KNOWLEDGE GRAPH PLATFORM
              </span>
            </div>
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#373F1D]/60 font-semibold">
              [ FIELD LOG #04 ]
            </span>
          </div>

          {/* Project Title */}
          <div className="space-y-4">
            <h3 className="font-editorial text-4xl sm:text-6xl font-normal text-[#2C2D1F]">
              KnowledgeNetwork
            </h3>
            <p className="text-lg font-sans text-[#2C2D1F]/85 max-w-3xl leading-relaxed">
              Full-stack collaborative knowledge graph platform engineered for creating, managing, and visualizing interconnected concept structures with strict security boundaries.
            </p>
          </div>

          {/* 6-Step Storytelling Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4 border-t border-[#E3E1D4]">
            {/* Steps 01, 02, 04, 05, 06 Narrative Column (Col 1-7) */}
            <div className="lg:col-span-7 space-y-10">
              {/* 01 / THE PROBLEM */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21] block">
                  01 / THE PROBLEM
                </span>
                <p className="text-sm sm:text-base font-sans text-[#2C2D1F]/85 leading-relaxed">
                  Knowledge is often stored as isolated documents, notes, and static pages, making relationships between concepts difficult to discover, edit collaboratively, and navigate at scale.
                </p>
              </div>

              {/* 02 / THE IDEA */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21] block">
                  02 / THE IDEA
                </span>
                <p className="text-sm sm:text-base font-sans text-[#2C2D1F]/85 leading-relaxed">
                  Build a collaborative knowledge graph where concepts become connected entities rather than isolated pieces of information, secured by zero-trust backend authorization boundaries.
                </p>
              </div>

              {/* 04 / THE SOLUTION */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21] block">
                  04 / THE SOLUTION
                </span>
                <p className="text-sm sm:text-base font-sans text-[#2C2D1F]/85 leading-relaxed">
                  Engineered a Java 21 & Spring Boot 3 RESTful backend with optimistic locking, MapStruct DTO mappers, and PostgreSQL persistent store, combined with a React TypeScript frontend powered by React Flow for real-time graph visualization.
                </p>
              </div>

              {/* 05 / THE RESULT */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21] block">
                  05 / THE RESULT
                </span>
                <p className="text-sm sm:text-base font-sans text-[#2C2D1F]/85 leading-relaxed">
                  Delivered a high-performance knowledge platform supporting fine-grained RBAC graph isolation, automatic schema migrations with Flyway, and containerized Docker deployment.
                </p>
              </div>

              {/* 06 / WHAT I LEARNED */}
              <div className="space-y-3 p-6 border border-[#E3E1D4] bg-[#E3E1D4]/25">
                <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21] block">
                  06 / WHAT I LEARNED
                </span>
                <p className="text-sm font-sans text-[#2C2D1F]/85 leading-relaxed italic">
                  &ldquo;Decoupling authorization logic into dedicated Spring Security filter chains before business logic processing significantly reduces security regression risks when adding new endpoints.&rdquo;
                </p>
              </div>
            </div>

            {/* 03 / THE SYSTEM — Interactive Architectural Visualization (Col 8-12) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21] block">
                03 / THE SYSTEM ARCHITECTURE
              </span>

              <div className="border border-[#E3E1D4] bg-[#E3E1D4]/30 p-6 space-y-6">
                <div className="flex items-center justify-between text-[10px] font-sans uppercase tracking-widest text-[#373F1D] font-bold border-b border-[#E3E1D4] pb-3">
                  <span>SYSTEM LAYER TOPOLOGY</span>
                  <span>SPRING BOOT × REACT</span>
                </div>

                <div className="space-y-3">
                  <div className="p-3 border border-[#5C6E21] bg-[#F5EEE9] text-center space-y-1">
                    <span className="text-[10px] font-sans uppercase tracking-widest font-bold text-[#5C6E21] block">
                      CLIENT LAYER
                    </span>
                    <p className="text-xs font-sans text-[#2C2D1F]">
                      React • TypeScript • Vite • React Flow • React Query
                    </p>
                  </div>

                  <div className="text-center text-[#5C6E21] font-bold text-xs">↓</div>

                  <div className="p-3 border border-[#373F1D] bg-[#373F1D] text-[#F5EEE9] text-center space-y-1">
                    <span className="text-[10px] font-sans uppercase tracking-widest font-bold text-[#5C6E21] block">
                      SECURITY & AUTH FILTER CHAIN
                    </span>
                    <p className="text-xs font-sans opacity-90">
                      JWT Auth • Gmail OTP • HttpOnly Cookies • Token Rotation
                    </p>
                  </div>

                  <div className="text-center text-[#5C6E21] font-bold text-xs">↓</div>

                  <div className="p-3 border border-[#2C2D1F] bg-[#2C2D1F] text-[#F5EEE9] text-center space-y-1">
                    <span className="text-[10px] font-sans uppercase tracking-widest font-bold text-[#5C6E21] block">
                      REST API & BUSINESS SERVICE
                    </span>
                    <p className="text-xs font-sans opacity-90">
                      Spring Boot 3 • MapStruct • Optimistic Locking • RBAC
                    </p>
                  </div>

                  <div className="text-center text-[#5C6E21] font-bold text-xs">↓</div>

                  <div className="p-3 border border-[#E3E1D4] bg-[#F5EEE9] text-center space-y-1">
                    <span className="text-[10px] font-sans uppercase tracking-widest font-bold text-[#5C6E21] block">
                      DATA & STORAGE LAYER
                    </span>
                    <p className="text-xs font-sans text-[#2C2D1F]">
                      PostgreSQL • Spring Data JPA • Flyway Migrations • Docker
                    </p>
                  </div>
                </div>
              </div>

              {/* BUILD LOG CALLOUT NOTEBOOK CARD */}
              <div className="p-5 border-l-2 border-[#5C6E21] bg-[#E3E1D4]/40 space-y-2">
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-bold text-[#5C6E21] block">
                  BUILD LOG #04: SECURITY DECISION
                </span>
                <p className="text-xs font-sans text-[#2C2D1F]/90 leading-normal">
                  &ldquo;Refresh tokens moved to HttpOnly cookies to mitigate XSS token theft, while short-lived JWT access tokens handle stateful authorization.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* REAL DEBUGGING / FAILURE STORY */}
          <div className="pt-8 border-t border-[#E3E1D4] space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-[#5C6E21]">
                DEBUG LOG: EMAIL VERIFICATION MIGRATION FAILURE
              </span>
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#373F1D]/60 font-semibold">
                [ REAL FAILURE & DEBUG SEQUENCE ]
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-xs font-sans">
              <div className="p-4 border border-[#E3E1D4] bg-[#E3E1D4]/20 space-y-1">
                <span className="text-[10px] font-bold text-[#5C6E21] block uppercase">01 / ISSUE</span>
                <p className="text-[#2C2D1F]">Existing users became unverified after schema migration.</p>
              </div>
              <div className="p-4 border border-[#E3E1D4] bg-[#E3E1D4]/20 space-y-1">
                <span className="text-[10px] font-bold text-[#5C6E21] block uppercase">02 / DIAGNOSIS</span>
                <p className="text-[#2C2D1F]">Auth flow exposed verification state prematurely.</p>
              </div>
              <div className="p-4 border border-[#E3E1D4] bg-[#E3E1D4]/20 space-y-1">
                <span className="text-[10px] font-bold text-[#5C6E21] block uppercase">03 / FIX</span>
                <p className="text-[#2C2D1F]">Password auth moved before verification check.</p>
              </div>
              <div className="p-4 border border-[#E3E1D4] bg-[#E3E1D4]/20 space-y-1">
                <span className="text-[10px] font-bold text-[#5C6E21] block uppercase">04 / PROTOCOL</span>
                <p className="text-[#2C2D1F]">HTTP 403 authorization flow implemented.</p>
              </div>
              <div className="p-4 border border-[#E3E1D4] bg-[#E3E1D4]/20 space-y-1">
                <span className="text-[10px] font-bold text-[#5C6E21] block uppercase">05 / OUTCOME</span>
                <p className="text-[#2C2D1F]">Frontend verification flow added seamlessly.</p>
              </div>
            </div>
          </div>

          {/* GitHub Repository CTA Link */}
          <div className="pt-6 border-t border-[#E3E1D4] flex items-center justify-between">
            <a
              href="https://github.com/Kavyanjali07/KnowledgeNetwork.git"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-xs uppercase font-sans tracking-[0.2em] font-bold text-[#2C2D1F] hover:text-[#5C6E21] transition-colors"
            >
              <span>EXPLORE KNOWLEDGENETWORK REPOSITORY ON GITHUB</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* STORY 02: DYNAMIC FIREWALL RULE GENERATOR — FULL 6-STEP STORY */}
        {/* ============================================================ */}
        <motion.div
          id="project-fw"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onViewportEnter={() => setActiveProject(2)}
          className="border border-[#E3E1D4] bg-[#F5EEE9] p-8 md:p-14 space-y-16 shadow-sm relative overflow-hidden"
        >
          {/* Header Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E3E1D4] pb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-[#5C6E21]">
                PROJECT STORY 02
              </span>
              <span className="text-xs font-sans text-[#373F1D]/60">•</span>
              <span className="text-xs uppercase font-sans tracking-widest font-semibold text-[#373F1D]">
                REAL-TIME SECURITY & NETWORKING
              </span>
            </div>
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#373F1D]/60 font-semibold">
              [ FIELD LOG #07 ]
            </span>
          </div>

          {/* Project Title & Screenshot */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-editorial text-4xl sm:text-6xl font-normal text-[#2C2D1F]">
                Dynamic Firewall Rule Generator
              </h3>
              <p className="text-lg font-sans text-[#2C2D1F]/85 leading-relaxed">
                Python-based real-time network traffic monitoring engine designed for automated threat detection and dynamic Linux nftables rule generation.
              </p>
            </div>
            <div className="lg:col-span-5 border border-[#E3E1D4] bg-[#F5EEE9] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/firewall_generator.png"
                alt="Dynamic Firewall Rule Generator"
                className="w-full h-48 object-cover filter contrast-105 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* 6-Step Storytelling Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4 border-t border-[#E3E1D4]">
            
            {/* Steps 01, 02, 04, 05, 06 Narrative Column (Col 1-7) */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* 01 / THE PROBLEM */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21] block">
                  01 / THE PROBLEM
                </span>
                <p className="text-sm sm:text-base font-sans text-[#2C2D1F]/85 leading-relaxed">
                  Manual firewall rule configuration is far too slow when network traffic anomalies and high-velocity connection floods occur, creating vulnerability windows before security operators can respond.
                </p>
              </div>

              {/* 02 / THE IDEA */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21] block">
                  02 / THE IDEA
                </span>
                <p className="text-sm sm:text-base font-sans text-[#2C2D1F]/85 leading-relaxed">
                  Build an automated threat detection engine that continuously inspects network packets in real-time, identifies malicious traffic patterns, and programmatically updates kernel firewall tables.
                </p>
              </div>

              {/* 04 / THE SOLUTION */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21] block">
                  04 / THE SOLUTION
                </span>
                <p className="text-sm sm:text-base font-sans text-[#2C2D1F]/85 leading-relaxed">
                  Developed a modular Python inspection pipeline that hooks directly into Linux raw network sockets, calculates packet rate thresholds, and emits dynamic rule definitions into the kernel via `nftables`.
                </p>
              </div>

              {/* 05 / THE RESULT */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21] block">
                  05 / THE RESULT
                </span>
                <p className="text-sm sm:text-base font-sans text-[#2C2D1F]/85 leading-relaxed">
                  Achieved automated threat mitigation that neutralizes unauthorized port scans and connection floods in real time without manual operator intervention.
                </p>
              </div>

              {/* 06 / WHAT I LEARNED */}
              <div className="space-y-3 p-6 border border-[#E3E1D4] bg-[#E3E1D4]/25">
                <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21] block">
                  06 / WHAT I LEARNED
                </span>
                <p className="text-sm font-sans text-[#2C2D1F]/85 leading-relaxed italic">
                  &ldquo;Processing raw socket traffic in user space requires strict buffer management; offloading rule matching directly to the Linux kernel via nftables is essential for performance.&rdquo;
                </p>
              </div>

            </div>

            {/* 03 / THE SYSTEM — Defensive Architecture Diagram (Col 8-12) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21] block">
                03 / DEFENSIVE PIPELINE TOPOLOGY
              </span>

              <div className="border border-[#E3E1D4] bg-[#E3E1D4]/30 p-6 space-y-6">
                <div className="flex items-center justify-between text-[10px] font-sans uppercase tracking-widest text-[#373F1D] font-bold border-b border-[#E3E1D4] pb-3">
                  <span>TRAFFIC INSPECTION & RESPONSE PIPELINE</span>
                  <span>PYTHON × NFTABLES</span>
                </div>

                <div className="space-y-3">
                  <div className="p-3 border border-[#5C6E21] bg-[#F5EEE9] text-center space-y-1">
                    <span className="text-[10px] font-sans uppercase tracking-widest font-bold text-[#5C6E21] block">
                      INGRESS TRAFFIC STREAM
                    </span>
                    <p className="text-xs font-sans text-[#2C2D1F]">
                      Raw Sockets • Network Interface (eth0 / wlan0)
                    </p>
                  </div>

                  <div className="text-center text-[#5C6E21] font-bold text-xs">↓</div>

                  <div className="p-3 border border-[#373F1D] bg-[#373F1D] text-[#F5EEE9] text-center space-y-1">
                    <span className="text-[10px] font-sans uppercase tracking-widest font-bold text-[#5C6E21] block">
                      PACKET INSPECTION ENGINE
                    </span>
                    <p className="text-xs font-sans opacity-90">
                      Header Parsing • Port Scan Detection • Threshold Analysis
                    </p>
                  </div>

                  <div className="text-center text-[#5C6E21] font-bold text-xs">↓</div>

                  <div className="p-3 border border-[#2C2D1F] bg-[#2C2D1F] text-[#F5EEE9] text-center space-y-1">
                    <span className="text-[10px] font-sans uppercase tracking-widest font-bold text-[#5C6E21] block">
                      DYNAMIC DECISION MODULE
                    </span>
                    <p className="text-xs font-sans opacity-90">
                      Anomaly Scoring • Threat Evaluation • Rule Generation
                    </p>
                  </div>

                  <div className="text-center text-[#5C6E21] font-bold text-xs">↓</div>

                  <div className="p-3 border border-[#E3E1D4] bg-[#F5EEE9] text-center space-y-1">
                    <span className="text-[10px] font-sans uppercase tracking-widest font-bold text-[#5C6E21] block">
                      KERNEL NFTABLES SUBSYSTEM
                    </span>
                    <p className="text-xs font-sans text-[#2C2D1F]">
                      Active Packet Drop • IP Banning • Linux Kernel Netfilter
                    </p>
                  </div>
                </div>
              </div>

              {/* BUILD LOG CALLOUT NOTEBOOK CARD */}
              <div className="p-5 border-l-2 border-[#5C6E21] bg-[#E3E1D4]/40 space-y-2">
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-bold text-[#5C6E21] block">
                  BUILD LOG #07: KERNEL SUBSYSTEM
                </span>
                <p className="text-xs font-sans text-[#2C2D1F]/90 leading-normal">
                  &ldquo;Switched from iptables to nftables to utilize atomic rule set updates, eliminating packet drop spikes during rule reloads.&rdquo;
                </p>
              </div>

            </div>
          </div>

          {/* REAL DEBUGGING / FAILURE STORY */}
          <div className="pt-8 border-t border-[#E3E1D4] space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-[#5C6E21]">
                DEBUG LOG: SOCKET BUFFER OVERFLOW UNDER SYN FLOOD
              </span>
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#373F1D]/60 font-semibold">
                [ REAL FAILURE & DEBUG SEQUENCE ]
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-xs font-sans">
              <div className="p-4 border border-[#E3E1D4] bg-[#E3E1D4]/20 space-y-1">
                <span className="text-[10px] font-bold text-[#5C6E21] block uppercase">01 / ISSUE</span>
                <p className="text-[#2C2D1F]">High-rate TCP SYN flood dropped packets at socket buffer.</p>
              </div>
              <div className="p-4 border border-[#E3E1D4] bg-[#E3E1D4]/20 space-y-1">
                <span className="text-[10px] font-bold text-[#5C6E21] block uppercase">02 / DIAGNOSIS</span>
                <p className="text-[#2C2D1F]">User-space packet copy created a processing bottleneck.</p>
              </div>
              <div className="p-4 border border-[#E3E1D4] bg-[#E3E1D4]/20 space-y-1">
                <span className="text-[10px] font-bold text-[#5C6E21] block uppercase">03 / FIX</span>
                <p className="text-[#2C2D1F]">Allocated ring-buffer memory for non-blocking packet reads.</p>
              </div>
              <div className="p-4 border border-[#E3E1D4] bg-[#E3E1D4]/20 space-y-1">
                <span className="text-[10px] font-bold text-[#5C6E21] block uppercase">04 / PROTOCOL</span>
                <p className="text-[#2C2D1F]">Offloaded filtering directly to Linux nftables subsystem.</p>
              </div>
              <div className="p-4 border border-[#E3E1D4] bg-[#E3E1D4]/20 space-y-1">
                <span className="text-[10px] font-bold text-[#5C6E21] block uppercase">05 / OUTCOME</span>
                <p className="text-[#2C2D1F]">Sustained packet inspection without socket buffer overflow.</p>
              </div>
            </div>
          </div>

          {/* GitHub Repository CTA Link */}
          <div className="pt-6 border-t border-[#E3E1D4] flex items-center justify-between">
            <a
              href="https://github.com/Kavyanjali07/Dynamic-Firewall-Rule-Generator"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-xs uppercase font-sans tracking-[0.2em] font-bold text-[#2C2D1F] hover:text-[#5C6E21] transition-colors"
            >
              <span>EXPLORE DYNAMIC FIREWALL REPOSITORY ON GITHUB</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* STORY 03: SMART EXPENSE AI — FULL 6-STEP STORY */}
        {/* ============================================================ */}
        <motion.div
          id="project-se"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onViewportEnter={() => setActiveProject(3)}
          className="border border-[#E3E1D4] bg-[#F5EEE9] p-8 md:p-14 space-y-16 shadow-sm relative overflow-hidden"
        >
          {/* Header Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E3E1D4] pb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-[#5C6E21]">
                PROJECT STORY 03
              </span>
              <span className="text-xs font-sans text-[#373F1D]/60">•</span>
              <span className="text-xs uppercase font-sans tracking-widest font-semibold text-[#373F1D]">
                FINANCIAL BACKEND & PRIVACY
              </span>
            </div>
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#373F1D]/60 font-semibold">
              [ FIELD LOG #12 ]
            </span>
          </div>

          {/* Project Title & Screenshot */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-editorial text-4xl sm:text-6xl font-normal text-[#2C2D1F]">
                Smart Expense AI
              </h3>
              <p className="text-lg font-sans text-[#2C2D1F]/85 leading-relaxed">
                Expense tracking and investment-oriented backend application engineered with Spring Boot, implementing JWT-based stateless authentication and encrypted data categorization.
              </p>
            </div>
            <div className="lg:col-span-5 border border-[#E3E1D4] bg-[#F5EEE9] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/smart_expense_ai.png"
                alt="Smart Expense AI"
                className="w-full h-48 object-cover filter contrast-105 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* 6-Step Storytelling Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4 border-t border-[#E3E1D4]">
            
            {/* Steps 01, 02, 04, 05, 06 Narrative Column (Col 1-7) */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* 01 / THE PROBLEM */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21] block">
                  01 / THE PROBLEM
                </span>
                <p className="text-sm sm:text-base font-sans text-[#2C2D1F]/85 leading-relaxed">
                  Personal financial transaction records contain sensitive user data that requires strict stateless authentication, data privacy boundaries, and prevention of plain-text leakage.
                </p>
              </div>

              {/* 02 / THE IDEA */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21] block">
                  02 / THE IDEA
                </span>
                <p className="text-sm sm:text-base font-sans text-[#2C2D1F]/85 leading-relaxed">
                  Build a high-assurance Spring Boot microservice backend featuring encrypted categorization, optimistic concurrency control for balance updates, and stateless JWT authorization.
                </p>
              </div>

              {/* 04 / THE SOLUTION */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21] block">
                  04 / THE SOLUTION
                </span>
                <p className="text-sm sm:text-base font-sans text-[#2C2D1F]/85 leading-relaxed">
                  Engineered Spring Security authorization filters, custom JPA repository queries with index optimization, and REST API endpoints structured around DTO payload validation.
                </p>
              </div>

              {/* 05 / THE RESULT */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21] block">
                  05 / THE RESULT
                </span>
                <p className="text-sm sm:text-base font-sans text-[#2C2D1F]/85 leading-relaxed">
                  Delivered a secure, consistent financial backend capable of processing concurrent expense logs while guaranteeing balance integrity under parallel API requests.
                </p>
              </div>

              {/* 06 / WHAT I LEARNED */}
              <div className="space-y-3 p-6 border border-[#E3E1D4] bg-[#E3E1D4]/25">
                <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21] block">
                  06 / WHAT I LEARNED
                </span>
                <p className="text-sm font-sans text-[#2C2D1F]/85 leading-relaxed italic">
                  &ldquo;Implementing optimistic locking via JPA @Version fields prevents race conditions on user balance balances without locking database rows at the SQL level.&rdquo;
                </p>
              </div>

            </div>

            {/* 03 / THE SYSTEM — Financial Data Flow Diagram (Col 8-12) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21] block">
                03 / FINANCIAL DATA FLOW TOPOLOGY
              </span>

              <div className="border border-[#E3E1D4] bg-[#E3E1D4]/30 p-6 space-y-6">
                <div className="flex items-center justify-between text-[10px] font-sans uppercase tracking-widest text-[#373F1D] font-bold border-b border-[#E3E1D4] pb-3">
                  <span>SECURE BACKEND DATA FLOW</span>
                  <span>SPRING BOOT × POSTGRESQL</span>
                </div>

                <div className="space-y-3">
                  <div className="p-3 border border-[#5C6E21] bg-[#F5EEE9] text-center space-y-1">
                    <span className="text-[10px] font-sans uppercase tracking-widest font-bold text-[#5C6E21] block">
                      AUTHENTICATED API REQUEST
                    </span>
                    <p className="text-xs font-sans text-[#2C2D1F]">
                      Bearer Token • Validated DTO Payload
                    </p>
                  </div>

                  <div className="text-center text-[#5C6E21] font-bold text-xs">↓</div>

                  <div className="p-3 border border-[#373F1D] bg-[#373F1D] text-[#F5EEE9] text-center space-y-1">
                    <span className="text-[10px] font-sans uppercase tracking-widest font-bold text-[#5C6E21] block">
                      STATELESS JWT SECURITY FILTER
                    </span>
                    <p className="text-xs font-sans opacity-90">
                      Token Validation • Security Context Injection
                    </p>
                  </div>

                  <div className="text-center text-[#5C6E21] font-bold text-xs">↓</div>

                  <div className="p-3 border border-[#2C2D1F] bg-[#2C2D1F] text-[#F5EEE9] text-center space-y-1">
                    <span className="text-[10px] font-sans uppercase tracking-widest font-bold text-[#5C6E21] block">
                      TRANSACTION SERVICE ENGINE
                    </span>
                    <p className="text-xs font-sans opacity-90">
                      Category Classification • Concurrency Control
                    </p>
                  </div>

                  <div className="text-center text-[#5C6E21] font-bold text-xs">↓</div>

                  <div className="p-3 border border-[#E3E1D4] bg-[#F5EEE9] text-center space-y-1">
                    <span className="text-[10px] font-sans uppercase tracking-widest font-bold text-[#5C6E21] block">
                      ENCRYPTED POSTGRESQL PERSISTENCE
                    </span>
                    <p className="text-xs font-sans text-[#2C2D1F]">
                      JPA Optimistic Lock (@Version) • Relational Store
                    </p>
                  </div>
                </div>
              </div>

              {/* BUILD LOG CALLOUT NOTEBOOK CARD */}
              <div className="p-5 border-l-2 border-[#5C6E21] bg-[#E3E1D4]/40 space-y-2">
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-bold text-[#5C6E21] block">
                  BUILD LOG #12: DATA PRIVACY BOUNDARY
                </span>
                <p className="text-xs font-sans text-[#2C2D1F]/90 leading-normal">
                  &ldquo;Stateless JWT authorization paired with DTO validation prevents plain-text financial data exposure across API layers.&rdquo;
                </p>
              </div>

            </div>
          </div>

          {/* REAL DEBUGGING / FAILURE STORY */}
          <div className="pt-8 border-t border-[#E3E1D4] space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-[#5C6E21]">
                DEBUG LOG: RACE CONDITION ON CONCURRENT TRANSACTION UPDATES
              </span>
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#373F1D]/60 font-semibold">
                [ REAL FAILURE & DEBUG SEQUENCE ]
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-xs font-sans">
              <div className="p-4 border border-[#E3E1D4] bg-[#E3E1D4]/20 space-y-1">
                <span className="text-[10px] font-bold text-[#5C6E21] block uppercase">01 / ISSUE</span>
                <p className="text-[#2C2D1F]">Concurrent updates caused stale balance calculations.</p>
              </div>
              <div className="p-4 border border-[#E3E1D4] bg-[#E3E1D4]/20 space-y-1">
                <span className="text-[10px] font-bold text-[#5C6E21] block uppercase">02 / DIAGNOSIS</span>
                <p className="text-[#2C2D1F]">Race condition occurred during parallel API requests.</p>
              </div>
              <div className="p-4 border border-[#E3E1D4] bg-[#E3E1D4]/20 space-y-1">
                <span className="text-[10px] font-bold text-[#5C6E21] block uppercase">03 / FIX</span>
                <p className="text-[#2C2D1F]">Added JPA @Version optimistic locking to entities.</p>
              </div>
              <div className="p-4 border border-[#E3E1D4] bg-[#E3E1D4]/20 space-y-1">
                <span className="text-[10px] font-bold text-[#5C6E21] block uppercase">04 / PROTOCOL</span>
                <p className="text-[#2C2D1F]">Implemented automated retry filter on locking failure.</p>
              </div>
              <div className="p-4 border border-[#E3E1D4] bg-[#E3E1D4]/20 space-y-1">
                <span className="text-[10px] font-bold text-[#5C6E21] block uppercase">05 / OUTCOME</span>
                <p className="text-[#2C2D1F]">Guaranteed transaction data consistency under concurrency.</p>
              </div>
            </div>
          </div>

          {/* GitHub Repository CTA Link */}
          <div className="pt-6 border-t border-[#E3E1D4] flex items-center justify-between">
            <a
              href="https://github.com/Kavyanjali07/SmartExpenseAI"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-xs uppercase font-sans tracking-[0.2em] font-bold text-[#2C2D1F] hover:text-[#5C6E21] transition-colors"
            >
              <span>EXPLORE SMART EXPENSE AI REPOSITORY ON GITHUB</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
