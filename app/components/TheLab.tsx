"use client";

import { motion } from "framer-motion";

export default function TheLab() {
  const workbenchCategories = [
    {
      category: "SECURITY & AUDITING",
      num: "01",
      tools: [
        { name: "Nmap", role: "Network Discovery & Port Auditing" },
        { name: "Burp Suite", role: "Web Application VAPT & Proxy Interception" },
        { name: "Metasploit", role: "Exploitation Research & Payload Analysis" },
        { name: "Wireshark", role: "Deep Packet Inspection & Socket Analysis" },
        { name: "Linux", role: "Kernel Hardening, nftables & Shell Scripting" },
      ],
    },
    {
      category: "BACKEND ARCHITECTURE",
      num: "02",
      tools: [
        { name: "Spring Boot 3", role: "RESTful Service Framework & Dependency Injection" },
        { name: "Spring Security", role: "Custom Filter Chains, JWT & OAuth2 Isolation" },
        { name: "Spring Data JPA", role: "Hibernate ORM, Transaction Management & Optimistic Locking" },
        { name: "Java 21", role: "Virtual Threads, Pattern Matching & Core OOP" },
        { name: "REST APIs", role: "Contract First OpenAPI Specs & DTO Mapping" },
      ],
    },
    {
      category: "INFRA & WORKBENCH",
      num: "03",
      tools: [
        { name: "Docker", role: "Multi-Stage Containerization & Service Orchestration" },
        { name: "Postman", role: "API Integration Testing & Automated Collections" },
        { name: "Flyway", role: "Versioned Relational Database Migrations" },
        { name: "Git & GitHub", role: "Distributed Version Control & Collaborative Workflows" },
        { name: "Swagger / OpenAPI", role: "Interactive API Documentation & Schema Contracts" },
      ],
    },
  ];

  return (
    <section
      id="engineering"
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24 border-b border-[#E3E1D4] bg-[#E8ECE1]/50 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#E3E1D4] pb-6">
          <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-[#5C6E21]">
            05 / THE LAB
          </span>
          <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#373F1D]/60">
            ENGINEER&apos;S WORKBENCH
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
            THE LAB.
          </h2>
          <p className="text-sm sm:text-base font-sans text-[#373F1D]/80 max-w-xl leading-relaxed">
            An open inventory of practical security tools, backend frameworks, and infrastructure utilities used on my daily workbench.
          </p>
        </motion.div>

        {/* Workbench Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-6">
          {workbenchCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-[#E3E1D4] bg-[#F5EEE9] p-8 space-y-6 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#E3E1D4] pb-4 text-xs font-sans uppercase tracking-[0.2em] font-bold text-[#5C6E21]">
                  <span>{cat.num} / {cat.category}</span>
                  <span className="text-[10px] text-[#373F1D]/60">[ VERIFIED ]</span>
                </div>

                <ul className="space-y-4">
                  {cat.tools.map((t) => (
                    <li
                      key={t.name}
                      className="group border-b border-[#E3E1D4]/50 pb-3 space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-editorial text-2xl font-normal text-[#2C2D1F] group-hover:text-[#5C6E21] group-hover:italic transition-all duration-300">
                          {t.name}
                        </span>
                        <span className="text-[10px] font-sans text-[#5C6E21] opacity-0 group-hover:opacity-100 transition-opacity">
                          ACTIVE
                        </span>
                      </div>
                      <p className="text-xs font-sans text-[#373F1D]/75 leading-tight">
                        {t.role}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#E3E1D4] text-[10px] font-sans uppercase tracking-widest text-[#373F1D]/60 font-semibold">
                WORKBENCH MODULE {cat.num}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
