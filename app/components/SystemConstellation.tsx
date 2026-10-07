"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface TechNode {
  id: string;
  name: string;
  category: "LANGUAGE" | "FRAMEWORK" | "SECURITY" | "TOOL" | "PLATFORM";
  symbol: string;
  usedIn: string[];
  connections: string[];
}

export default function SystemConstellation() {
  const [activeTech, setActiveTech] = useState<string | null>("java");

  const techNodes: TechNode[] = [
    {
      id: "java",
      name: "Java 21",
      category: "LANGUAGE",
      symbol: "●",
      usedIn: ["KnowledgeNetwork", "Smart Expense AI"],
      connections: ["spring-boot", "spring-security", "spring-jpa", "postgresql"],
    },
    {
      id: "python",
      name: "Python",
      category: "LANGUAGE",
      symbol: "●",
      usedIn: ["Dynamic Firewall Rule Generator"],
      connections: ["linux", "nftables", "wireshark"],
    },
    {
      id: "cpp",
      name: "C++",
      category: "LANGUAGE",
      symbol: "●",
      usedIn: ["DSA & Core Systems Optimization"],
      connections: ["linux", "dsa"],
    },
    {
      id: "spring-boot",
      name: "Spring Boot 3",
      category: "FRAMEWORK",
      symbol: "■",
      usedIn: ["KnowledgeNetwork", "Smart Expense AI"],
      connections: ["java", "spring-security", "spring-jpa", "rest-api", "docker"],
    },
    {
      id: "spring-security",
      name: "Spring Security",
      category: "SECURITY",
      symbol: "△",
      usedIn: ["KnowledgeNetwork", "Smart Expense AI"],
      connections: ["java", "spring-boot", "rest-api"],
    },
    {
      id: "spring-jpa",
      name: "Spring Data JPA",
      category: "FRAMEWORK",
      symbol: "■",
      usedIn: ["KnowledgeNetwork", "Smart Expense AI"],
      connections: ["java", "spring-boot", "postgresql"],
    },
    {
      id: "rest-api",
      name: "REST APIs",
      category: "FRAMEWORK",
      symbol: "■",
      usedIn: ["KnowledgeNetwork", "Smart Expense AI"],
      connections: ["spring-boot", "react", "swagger", "postman"],
    },
    {
      id: "react",
      name: "React",
      category: "FRAMEWORK",
      symbol: "■",
      usedIn: ["KnowledgeNetwork", "Personal Portfolio"],
      connections: ["typescript", "rest-api", "nextjs"],
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "LANGUAGE",
      symbol: "●",
      usedIn: ["KnowledgeNetwork", "Personal Portfolio"],
      connections: ["react", "nextjs"],
    },
    {
      id: "nextjs",
      name: "Next.js",
      category: "FRAMEWORK",
      symbol: "■",
      usedIn: ["Personal Portfolio"],
      connections: ["react", "typescript"],
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      category: "PLATFORM",
      symbol: "○",
      usedIn: ["KnowledgeNetwork", "Smart Expense AI"],
      connections: ["spring-jpa", "docker"],
    },
    {
      id: "linux",
      name: "Linux (nftables)",
      category: "SECURITY",
      symbol: "△",
      usedIn: ["Dynamic Firewall Rule Generator"],
      connections: ["python", "nmap", "wireshark"],
    },
    {
      id: "nmap",
      name: "Nmap",
      category: "SECURITY",
      symbol: "△",
      usedIn: ["Network VAPT & Reconnaissance"],
      connections: ["wireshark", "burp", "linux"],
    },
    {
      id: "wireshark",
      name: "Wireshark",
      category: "SECURITY",
      symbol: "△",
      usedIn: ["Packet Inspection & Audit"],
      connections: ["python", "nmap", "linux"],
    },
    {
      id: "burp",
      name: "Burp Suite",
      category: "SECURITY",
      symbol: "△",
      usedIn: ["Web VAPT & Security Audits"],
      connections: ["nmap", "metasploit", "rest-api"],
    },
    {
      id: "metasploit",
      name: "Metasploit",
      category: "SECURITY",
      symbol: "△",
      usedIn: ["Exploitation Research"],
      connections: ["burp", "nmap"],
    },
    {
      id: "docker",
      name: "Docker",
      category: "TOOL",
      symbol: "◇",
      usedIn: ["KnowledgeNetwork Containerization"],
      connections: ["spring-boot", "postgresql", "git"],
    },
    {
      id: "git",
      name: "Git & GitHub",
      category: "TOOL",
      symbol: "◇",
      usedIn: ["All Project Repositories"],
      connections: ["docker", "postman"],
    },
  ];

  const activeNodeData = techNodes.find((t) => t.id === activeTech) || techNodes[0];

  const isHighlighted = (id: string) => {
    if (!activeTech) return false;
    if (id === activeTech) return true;
    const current = techNodes.find((t) => t.id === activeTech);
    return current ? current.connections.includes(id) : false;
  };

  return (
    <section
      id="engineering"
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24 border-b border-[#E3E1D4] bg-[#E8ECE1]/60 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#E3E1D4] pb-6">
          <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-[#5C6E21]">
            03 / SYSTEMS & STACK
          </span>
          <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#373F1D]/60">
            TECHNOLOGY CONSTELLATION MAP
          </span>
        </div>

        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-2xl"
          >
            <h2 className="font-editorial text-4xl sm:text-6xl font-normal text-[#2C2D1F] tracking-tight">
              HOW I BUILD.
            </h2>
            <p className="text-sm sm:text-base font-sans text-[#373F1D]/80 leading-relaxed">
              Technologies do not exist in isolation. Hover over any node below to trace its relationships to backend architectures, security protocols, and projects.
            </p>
          </motion.div>

          {/* Subtle Legend */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-sans uppercase tracking-widest text-[#373F1D]/75 font-semibold bg-[#F5EEE9] px-4 py-2 border border-[#E3E1D4]">
            <span className="flex items-center gap-1.5"><span className="text-[#5C6E21]">●</span> LANGUAGE</span>
            <span className="flex items-center gap-1.5"><span className="text-[#373F1D]">■</span> FRAMEWORK</span>
            <span className="flex items-center gap-1.5"><span className="text-[#00443B]">△</span> SECURITY</span>
            <span className="flex items-center gap-1.5"><span className="text-[#2C2D1F]">◇</span> TOOL</span>
            <span className="flex items-center gap-1.5"><span className="text-[#5C6E21]">○</span> PLATFORM</span>
          </div>
        </div>

        {/* Constellation Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-start">
          {/* Interactive Technology Constellation Canvas (Col 1-8) */}
          <div className="lg:col-span-8 border border-[#E3E1D4] bg-[#F5EEE9] p-8 md:p-12 shadow-sm space-y-8">
            <div className="flex items-center justify-between border-b border-[#E3E1D4] pb-4">
              <span className="text-[10px] uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21]">
                INTERACTIVE ARCHITECTURAL MAP
              </span>
              <span className="text-[10px] uppercase font-sans tracking-widest text-[#373F1D]/60 font-semibold">
                HOVER TO EXPLORE CONNECTIONS
              </span>
            </div>

            {/* Nodes Constellation Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {techNodes.map((node) => {
                const highlighted = isHighlighted(node.id);
                const isSelected = activeTech === node.id;

                return (
                  <button
                    key={node.id}
                    onMouseEnter={() => setActiveTech(node.id)}
                    onClick={() => setActiveTech(node.id)}
                    className={`p-3.5 border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[90px] ${
                      isSelected
                        ? "border-[#5C6E21] bg-[#5C6E21] text-[#F5EEE9] shadow-md scale-105"
                        : highlighted
                        ? "border-[#5C6E21] bg-[#E3E1D4]/70 text-[#2C2D1F]"
                        : "border-[#E3E1D4] bg-[#F5EEE9] text-[#2C2D1F]/70 opacity-60 hover:opacity-100 hover:border-[#373F1D]"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] uppercase font-sans tracking-widest">
                      <span className={isSelected ? "text-[#F5EEE9]" : "text-[#5C6E21]"}>
                        {node.symbol}
                      </span>
                      <span className="opacity-75">{node.category}</span>
                    </div>

                    <span className="font-editorial text-lg font-normal leading-tight pt-2">
                      {node.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Connected Context Inspector Box (Col 9-12) */}
          <div className="lg:col-span-4 border border-[#E3E1D4] bg-[#F5EEE9] p-8 space-y-6 shadow-sm sticky top-28">
            <div className="border-b border-[#E3E1D4] pb-4 flex items-center justify-between">
              <span className="text-[10px] uppercase font-sans tracking-[0.25em] font-bold text-[#5C6E21]">
                SYSTEM INSPECTOR
              </span>
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#373F1D]/60 font-bold">
                {activeNodeData.symbol} {activeNodeData.category}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="font-editorial text-3xl font-normal text-[#2C2D1F]">
                {activeNodeData.name}
              </h3>
              <div className="w-10 h-[2px] bg-[#5C6E21]" />
            </div>

            {/* Used In Projects */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] uppercase font-sans tracking-[0.2em] font-bold text-[#5C6E21] block">
                IMPLEMENTED IN PROJECTS
              </span>
              <ul className="space-y-1.5 text-xs font-sans text-[#2C2D1F]">
                {activeNodeData.usedIn.map((proj) => (
                  <li key={proj} className="flex items-center gap-2">
                    <span className="text-[#5C6E21] font-bold">→</span> {proj}
                  </li>
                ))}
              </ul>
            </div>

            {/* Connected Stack Nodes */}
            <div className="space-y-2 pt-4 border-t border-[#E3E1D4]">
              <span className="text-[10px] uppercase font-sans tracking-[0.2em] font-bold text-[#5C6E21] block">
                CONNECTED STACK NODES
              </span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeNodeData.connections.map((connId) => {
                  const target = techNodes.find((t) => t.id === connId);
                  return (
                    <span
                      key={connId}
                      className="px-2 py-1 text-[10px] font-sans uppercase tracking-widest bg-[#E3E1D4]/80 text-[#373F1D] border border-[#E3E1D4] font-semibold"
                    >
                      {target ? target.name : connId}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E3E1D4] text-[10px] font-sans uppercase tracking-widest text-[#373F1D]/60">
              TECHNOLOGY → SYSTEM → PROJECT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
