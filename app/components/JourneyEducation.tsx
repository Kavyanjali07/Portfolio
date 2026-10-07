"use client";

import { motion } from "framer-motion";

export default function JourneyEducation() {
  const education = [
    {
      degree: "Bachelor of Technology — Computer Science & Engineering",
      institution: "Lovely Professional University",
      period: "Aug 2023 – Present",
      score: "CGPA 7.40",
    },
    {
      degree: "Intermediate (PCM)",
      institution: "Little Scholar's Academy",
      period: "2021 – 2023",
      score: "91%",
    },
    {
      degree: "Matriculation",
      institution: "Little Scholar's Academy",
      period: "2019 – 2021",
      score: "94%",
    },
  ];

  const timeline = [
    {
      year: "2023",
      title: "FOUNDATION IN COMPUTER SCIENCE",
      desc: "Commenced B.Tech in Computer Science and Engineering at Lovely Professional University, building core data structures and object-oriented paradigms.",
    },
    {
      year: "2024",
      title: "BACKEND & SYSTEM ENGINEERING",
      desc: "Focused on Java 21, Spring Boot framework, SQL databases, and secure RESTful API design.",
    },
    {
      year: "2025",
      title: "CYBERSECURITY & NETWORK DEFENSE",
      desc: "Completed specialized cybersecurity training, built real-time Dynamic Firewall Generator, and achieved Global Rank 72 in Hack The Box CTF.",
    },
    {
      year: "2026",
      title: "KNOWLEDGENETWORK & ARCHITECTURE",
      desc: "Architected KnowledgeNetwork collaborative graph platform featuring fine-grained RBAC, JWT token rotation, and Docker containerization.",
    },
  ];

  return (
    <section className="py-24 md:py-36 px-6 md:px-16 lg:px-24 border-b border-[#E3E1D4] bg-[#F5EEE9]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left Column: Education (Col 1-6) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-12"
        >
          <div className="border-b border-[#E3E1D4] pb-6 flex items-center justify-between">
            <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold text-[#5C6E21]">
              EDUCATION
            </span>
            <span className="text-xs uppercase font-sans tracking-[0.2em] text-[#373F1D]/60">
              ACADEMIC BACKGROUND
            </span>
          </div>

          <div className="space-y-8">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="border-b border-[#E3E1D4]/60 pb-6 space-y-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#5C6E21] font-bold">
                  <span>{edu.institution}</span>
                  <span className="text-[#373F1D]/70">{edu.period}</span>
                </div>
                <h3 className="font-editorial text-2xl font-normal text-[#2C2D1F]">
                  {edu.degree}
                </h3>
                <div className="text-xs font-sans uppercase tracking-widest text-[#373F1D] font-semibold pt-1">
                  RESULT: <span className="text-[#5C6E21]">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Verified Timeline (Col 7-12) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-6 space-y-12"
        >
          <div className="border-b border-[#E3E1D4] pb-6 flex items-center justify-between">
            <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold text-[#5C6E21]">
              JOURNEY
            </span>
            <span className="text-xs uppercase font-sans tracking-[0.2em] text-[#373F1D]/60">
              ENGINEERING CHRONOLOGY
            </span>
          </div>

          <div className="space-y-8">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="grid grid-cols-1 sm:grid-cols-12 gap-4 border-b border-[#E3E1D4]/60 pb-6"
              >
                <span className="sm:col-span-3 font-editorial text-3xl font-normal text-[#5C6E21]">
                  {item.year}
                </span>
                <div className="sm:col-span-9 space-y-2">
                  <h4 className="text-xs uppercase font-sans tracking-[0.2em] font-bold text-[#2C2D1F]">
                    {item.title}
                  </h4>
                  <p className="text-xs font-sans text-[#2C2D1F]/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
