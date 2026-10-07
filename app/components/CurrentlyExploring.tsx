"use client";

import { motion } from "framer-motion";

export default function CurrentlyExploring() {
  const explorationTopics = [
    { title: "CYBERSECURITY", status: "EXPERIMENTING", focus: "VAPT & CTF Exploitation" },
    { title: "NETWORKING", status: "LEARNING", focus: "Kernel Sockets & nftables" },
    { title: "SPRING BOOT 3", status: "BUILDING", focus: "Virtual Threads & Microservices" },
    { title: "SYSTEM DESIGN", status: "BUILDING", focus: "Zero-Trust Architecture" },
    { title: "DATA STRUCTURES", status: "LEARNING", focus: "Graph Algorithms & Optimization" },
    { title: "SECURE SOFTWARE", status: "EXPERIMENTING", focus: "Authorization Filter Chains" },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 border-b border-[#E3E1D4] bg-[#F2EEE8] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#E3E1D4] pb-6">
          <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-[#5C6E21]">
            GROWTH VECTOR
          </span>
          <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#373F1D]/60">
            CURRENTLY EXPLORING
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
            NEVER STATIC. ALWAYS BUILDING.
          </h2>
          <p className="text-sm sm:text-base font-sans text-[#373F1D]/80 max-w-xl leading-relaxed">
            An open window into current engineering experiments, technical topics under active study, and ongoing research.
          </p>
        </motion.div>

        {/* Horizontal Exploration Path Stream */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {explorationTopics.map((topic, idx) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 border border-[#E3E1D4] bg-[#F5EEE9] hover:border-[#5C6E21] transition-all duration-300 space-y-3 shadow-sm group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-bold text-[#5C6E21]">
                  [{topic.status}]
                </span>
                <span className="w-2 h-2 rounded-full bg-[#5C6E21] animate-ping" />
              </div>

              <h3 className="font-editorial text-2xl font-normal text-[#2C2D1F] group-hover:text-[#5C6E21] transition-colors">
                {topic.title}
              </h3>

              <p className="text-xs font-sans text-[#373F1D]/75 leading-relaxed">
                {topic.focus}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
