"use client";

import { motion } from "framer-motion";

export default function EngineeringSection() {
  const categories = [
    {
      title: "LANGUAGES",
      num: "01",
      tools: ["Java", "Python", "C++"],
    },
    {
      title: "SECURITY & NETWORKING",
      num: "02",
      tools: ["Nmap", "Wireshark", "Burp Suite", "Metasploit", "Linux"],
    },
    {
      title: "FRAMEWORKS",
      num: "03",
      tools: [
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "Next.js",
        "REST APIs",
      ],
    },
    {
      title: "DEV TOOLS & INFRA",
      num: "04",
      tools: ["Git", "GitHub", "Docker", "Postman", "Swagger / OpenAPI"],
    },
  ];

  return (
    <section
      id="engineering"
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24 border-b border-[#E3E1D4] bg-[#F5EEE9]"
    >
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#E3E1D4] pb-6">
          <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold text-[#5C6E21]">
            03 / ENGINEERING
          </span>
          <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#373F1D]/60">
            TECHNICAL TOOLKIT
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
            THE TOOLS I THINK WITH.
          </h2>
          <p className="text-sm sm:text-base font-sans text-[#373F1D]/80 max-w-xl">
            A restrained selection of core technologies, security frameworks, and backend tools used in production development and vulnerability analysis.
          </p>
        </motion.div>

        {/* Editorial Typography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pt-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border-t border-[#E3E1D4] pt-8 space-y-6"
            >
              <div className="flex items-center justify-between text-xs font-sans uppercase tracking-[0.25em] text-[#5C6E21] font-bold">
                <span>{cat.num} / {cat.title}</span>
              </div>

              {/* Tools Editorial List */}
              <ul className="space-y-3">
                {cat.tools.map((tool) => (
                  <li
                    key={tool}
                    className="group flex items-center justify-between border-b border-[#E3E1D4]/40 pb-2.5"
                  >
                    <span className="font-editorial text-2xl sm:text-3xl font-normal text-[#2C2D1F] group-hover:text-[#5C6E21] group-hover:italic transition-all duration-300">
                      {tool}
                    </span>
                    <span className="text-xs uppercase font-sans tracking-widest text-[#373F1D]/50 opacity-0 group-hover:opacity-100 transition-opacity">
                      VERIFIED
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
