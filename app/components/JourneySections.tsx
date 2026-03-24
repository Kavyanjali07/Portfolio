"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// DarkVeil removed from certificates section as requested
import DarkVeil from "./DarkVeil";
import MagicBento from "./MagicBento";

// --- Sub-components ---

function SectionHeader({ title, icon, color }: { title: string, icon: string, color: string }) {
    return (
        <motion.div
            className="flex items-center gap-6 mb-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className={`w-16 h-16 rounded-2xl bg-${color}-500/10 border border-${color}-500/20 flex items-center justify-center text-4xl shadow-inner relative overflow-hidden group`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                {icon}
            </div>
            <div className="space-y-1">
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">{title}</h3>
                <div className={`h-1 w-20 bg-gradient-to-r from-${color}-500 to-transparent rounded-full`} />
            </div>
        </motion.div>
    );
}

const allVariants: any = {
    tiltFlip: {
        offscreen: { opacity: 0, x: -100, y: -50, rotateX: 45, rotateY: -20, scale: 0.9, filter: "blur(10px)" },
        onscreen: { opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0, scale: 1, filter: "blur(0px)", transition: { type: "spring", damping: 15, stiffness: 60, duration: 1.5 } }
    },
    haloExpand: {
        offscreen: { opacity: 0, scale: 0.5, filter: "blur(40px)" },
        onscreen: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { type: "spring", damping: 25, stiffness: 40, duration: 2 } }
    },
    stackSlide: {
        offscreen: { opacity: 0, x: 300, skewX: -10, scale: 0.95 },
        onscreen: { opacity: 1, x: 0, skewX: 0, scale: 1, transition: { type: "spring", damping: 20, stiffness: 50, duration: 1.2 } }
    },
    unrollCascade: {
        offscreen: { opacity: 0, y: 150, scaleY: 0, originY: 0 },
        onscreen: { opacity: 1, y: 0, scaleY: 1, transition: { type: "spring", damping: 18, stiffness: 45, duration: 1.8 } }
    },
    spotlightZoom: {
        offscreen: { opacity: 0, scale: 1.3, filter: "brightness(0.2) blur(10px)" },
        onscreen: { opacity: 1, scale: 1, filter: "brightness(1) blur(0px)", transition: { duration: 1.5, ease: "easeOut" } }
    },
    scatterEffect: {
        offscreen: { opacity: 0 },
        onscreen: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
    },
    dualSide: {
        offscreen: { opacity: 0 },
        onscreen: { opacity: 1 }
    }
};

const scatterChildVariants: any = {
    offscreen: (i: number) => ({
        opacity: 0,
        x: parseFloat((Math.sin(i * 1.5) * 300).toFixed(2)),
        y: parseFloat((Math.cos(i * 1.5) * 300).toFixed(2)),
        rotate: i * 45,
        scale: 0.5,
        filter: "blur(10px)"
    }),
    onscreen: {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { type: "spring" as const, damping: 12, stiffness: 80 }
    }
};

function SectionWrapper({ children, id, title, icon, color = "cyan", variantType = "tiltFlip" }: { children: React.ReactNode, id: string, title: string, icon: string, color?: string, variantType?: string }) {
    const variants = allVariants[variantType] || allVariants.tiltFlip;

    return (
        <motion.section
            id={id}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={variants}
            className="w-full max-w-6xl mx-auto py-32 px-8 relative"
        >
            {/* Connection Node Upper */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-cyan-500/30 bg-cyan-500/20 backdrop-blur-sm z-20 hidden md:block shadow-[0_0_10px_rgba(6,182,212,0.3)]" />
            
            <SectionHeader title={title} icon={icon} color={color} />
            
            {variantType === 'dualSide' ? (
                <div className="relative mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div 
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, type: "spring", damping: 15 }}
                        className="relative p-1 rounded-[3rem] bg-white/[0.08] dark:bg-slate-900/40 border border-white/20 backdrop-blur-2xl shadow-xl overflow-hidden"
                    >
                        <div className="p-8 md:p-10 relative z-10">
                            {Array.isArray(children) ? children[0] : children}
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, type: "spring", damping: 15 }}
                        className="relative p-1 rounded-[3rem] bg-white/[0.08] dark:bg-slate-900/40 border border-white/20 backdrop-blur-2xl shadow-xl overflow-hidden"
                    >
                        <div className="p-8 md:p-10 relative z-10">
                            {Array.isArray(children) ? children[1] : children}
                        </div>
                    </motion.div>
                </div>
            ) : (
                <div className="relative p-1 rounded-[4rem] bg-white/[0.08] dark:bg-slate-900/40 border border-white/20 backdrop-blur-2xl shadow-2xl overflow-hidden group hover:border-white/30 transition-all duration-500 mt-12">
                    <div className="p-8 md:p-14 relative z-10">
                        {children}
                    </div>
                </div>
            )}

            {/* Connection Node Lower */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-cyan-500/30 bg-cyan-500/20 backdrop-blur-sm z-20 hidden md:block shadow-[0_0_10px_rgba(6,182,212,0.3)]" />
        </motion.section>
    );
}

// --- Specific Visuals ---

function AboutMeVisual() {
    return (
        <div className="space-y-12">
            <div className="relative p-1 z-10">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] group-hover:bg-cyan-500/20 transition-colors" />

                <div className="relative z-10 space-y-6">
                    <h4 className="text-cyan-400 font-black text-sm uppercase tracking-[0.4em] mb-2">Introduction</h4>
                    <p className="text-2xl md:text-4xl font-black text-white leading-tight tracking-tighter">
                        Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">Kavyanjali Vashishtha.</span>
                    </p>

                    <div className="space-y-6 text-gray-300 font-medium text-lg md:text-xl leading-relaxed">
                        <p>
                            I am a Computer Science student with a deep-seated passion for architecting systems that are not just functional, but <span className="text-white font-bold italic">resilient by design</span>. My journey started with a simple question: "How does this break?" — which eventually led me into the fascinating world of cybersecurity and backend engineering.
                        </p>
                        <p>
                            Currently pursuing my B.Tech at Lovely Professional University, I specialize in bridging the gap between high-level software development and low-level system security. Whether it's automating firewall rules or developing secure API gateways, I focus on building tools that provide both utility and peace of mind.
                        </p>
                        <p>
                            When I'm not auditing code or experimenting with new network protocols, I'm likely participating in CTFs or exploring the latest advancements in AI-driven threat detection.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-6">
                        {["Secure Architect", "Developer", "Cybersecurity Enthusiast"].map(tag => (
                            <span key={tag} className="px-6 py-2 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-widest shadow-lg">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    { title: "Systems Thinking", icon: "🧠", desc: "I view software as a living organism. I analyze how components interact and identify potential failure points before they become vulnerabilities." },
                    { title: "Defensive Coding", icon: "🛡️", desc: "Security is not an afterthought for me. I implement RBAC, encryption, and input validation as the foundation of every project." }
                ].map((item, i) => (
                    <div key={i} className="p-10 rounded-[3rem] bg-slate-900/40 border border-white/20 backdrop-blur-3xl hover:bg-white/10 transition-all hover:scale-[1.03] shadow-xl group">
                        <div className="text-5xl mb-6 group-hover:rotate-12 transition-transform duration-500">{item.icon}</div>
                        <h5 className="text-white font-black text-2xl mb-3 uppercase tracking-tighter">{item.title}</h5>
                        <p className="text-gray-400 font-medium text-lg italic leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function TrainingsVisual() {
    return (
        <div className="relative pl-12 space-y-12">
            <div className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-cyan-500/20 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
            <div className="relative">
                <div className="absolute -left-[42px] top-2 w-10 h-10 rounded-xl bg-[#0f172a] border-4 border-cyan-500 flex items-center justify-center text-xl shadow-[0_0_30px_rgba(34,211,238,0.4)]">🔍</div>
                <div className="space-y-4">
                    <span className="px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-400 font-black text-[11px] uppercase tracking-[0.3em] border border-cyan-500/40">Immersive Training</span>
                    <h4 className="text-4xl font-black text-white tracking-tighter uppercase italic">Cybersecurity Summer Training</h4>
                    <p className="text-cyan-400 font-black tracking-widest uppercase text-sm">Lovely Professional University | Jun’ 25 – Jul’ 25</p>
                    <div className="p-12 rounded-[3.5rem] bg-slate-900/40 border border-white/10 backdrop-blur-3xl mt-8 group hover:bg-white/10 transition-all duration-500 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl group-hover:scale-125 transition-transform">🛰️</div>
                        <p className="text-gray-300 leading-relaxed font-medium md:text-xl relative z-10 italic">
                            An intensive, hands-on program focusing on the complete lifecycle of cyber defense. I gained deep experience in network security auditing, real-time packet analysis, and ethical exploitation. Mastering tools like <span className="text-cyan-400">Metasploit</span>, <span className="text-cyan-400">Wireshark</span>, and <span className="text-cyan-400">Nmap</span>, I learned to identify and mitigate critical infrastructure vulnerabilities before they can be leveraged.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CertificatesVisual() {
    const list = [
        { title: "Computer Communications Specialization", issuer: "Coursera (CU Boulder)", link: "https://www.coursera.org/account/accomplishments/specialization/AMBP42F53BNR", color: "cyan" },
        { title: "TCP/IP and Advanced Topics", issuer: "Coursera (Yonsei)", link: "https://www.coursera.org/account/accomplishments/records/GUZ0AQGWSOPO", color: "blue" },
        { title: "Packet Switching Networks & Algorithms", issuer: "Coursera (Yonsei)", link: "https://www.coursera.org/account/accomplishments/records/UMQHSKL3BH5H", color: "indigo" },
        { title: "Peer-to-Peer Protocols and LANs", issuer: "Coursera (Yonsei)", link: "https://www.coursera.org/account/accomplishments/records/OOKWFG99K0DX", color: "purple" },
        { title: "Digital Systems: Gates to Processors", issuer: "Coursera (UC Irvine)", link: "https://www.coursera.org/account/accomplishments/records/V6JYCFLI1X5S", color: "emerald" },
        { title: "Fundamentals of Network Communication", issuer: "Coursera (ULSA)", link: "https://www.coursera.org/account/accomplishments/records/XJFSCN1GSKS7", color: "cyan" },
        { title: "Intro to Hardware & Operating Systems", issuer: "Coursera (ULSA)", link: "https://www.coursera.org/account/accomplishments/records/IXR5HRL30JD2", color: "blue" },
        { title: "Responsive Web Design", issuer: "freeCodeCamp", link: "https://freecodecamp.org/certification/fccf055ba1a-f44f-4969-8472-125c9fa26961/responsive-web-design", color: "white" },
        { title: "Bits and Bytes of Computer Networking", issuer: "Google", link: "https://www.coursera.org/account/accomplishments/records/...", color: "amber" },
        { title: "Foundation of Cybersecurity", issuer: "Google", link: "https://www.coursera.org/account/accomplishments/records/...", color: "amber" }
    ];

    return (
        <div className="relative">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                {list.map((cert, i) => (
                    <motion.div
                        key={i}
                        className="group relative h-full"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                    >
                        <div className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/20 backdrop-blur-3xl hover:bg-white/10 hover:border-cyan-500/20 transition-all flex flex-col justify-between h-full shadow-lg">
                            <div className="space-y-3">
                                <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em] font-mono">[{cert.issuer}]</span>
                                <h5 className="text-white font-bold text-lg leading-snug group-hover:text-cyan-400 transition-colors uppercase tracking-tighter">{cert.title}</h5>
                            </div>
                            {cert.link && (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 flex items-center gap-2 text-[10px] font-black text-white/40 uppercase tracking-widest hover:text-white transition-colors group/link"
                                >
                                    Verify Credential
                                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function EducationVisual() {
    return (
        <div className="space-y-12">
            {[
                { title: "B.Tech in Computer Science", org: "Lovely Professional University", date: "2023 – Present", score: "CGPA: 7.40", color: "cyan", icon: "🎓" },
                { title: "Intermediate (PCM)", org: "Little Scholar’s Academy", date: "2021", score: "91%", color: "purple", icon: "🏫" },
                { title: "Matriculation", org: "Little Scholar’s Academy", date: "2019", score: "94%", color: "emerald", icon: "✏️" }
            ].map((edu, i) => (
                <div key={i} className="relative group">
                    <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                        <div className={`w-20 h-20 rounded-3xl bg-${edu.color}-500/10 border border-${edu.color}-500/20 flex items-center justify-center text-5xl group-hover:scale-110 group-hover:rotate-6 group-hover:bg-${edu.color}-500/20 transition-all duration-500 shadow-2xl`}>
                            {edu.icon}
                        </div>
                        <div className="space-y-2 flex-1 pt-2">
                            <div className="flex flex-wrap items-center gap-4 mb-1">
                                <h4 className="text-3xl font-black text-white tracking-tighter uppercase">{edu.title}</h4>
                                <span className="px-4 py-1 rounded-full bg-white/5 text-gray-400 font-bold text-xs uppercase border border-white/10">{edu.date}</span>
                            </div>
                            <p className={`text-${edu.color}-400 font-black uppercase tracking-[0.4em] text-xs mb-4 opacity-70`}>{edu.org}</p>
                            <div className={`inline-flex px-8 py-2 rounded-2xl bg-${edu.color}-500/10 border border-${edu.color}-500/20 text-${edu.color}-400 font-black text-xl group-hover:shadow-[0_0_30px_rgba(var(--${edu.color}-500),0.2)] transition-shadow`}>
                                {edu.score}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function AchievementsStatic() {
    return (
        <div className="space-y-12">
            <div className="relative group overflow-hidden p-14 rounded-[4rem] bg-slate-900/60 border border-white/20 backdrop-blur-3xl hover:border-cyan-400/30 transition-all duration-700 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
                <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="w-40 h-40 rounded-[2.5rem] bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center text-7xl shadow-[0_20px_60px_rgba(168,85,247,0.4)] relative overflow-hidden group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700">
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity" />
                        💠
                    </div>
                    <div className="text-center md:text-left space-y-6 flex-1">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-xs font-black uppercase tracking-[0.4em]">
                            Global Elite
                        </div>
                        <h4 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">
                            Hack The Box <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Rank 72.</span>
                        </h4>
                        <p className="text-gray-400 text-xl font-bold italic">Tinsel Trouble Global CTF.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    { title: "Project Publication", icon: "📑", desc: "Successfully published innovative technical projects demonstrating backend security, system-level architecture, and intelligent rule generation.", color: "cyan" },
                    { title: "Innovation Scout", icon: "📡", desc: "Recognized for building a dynamic firewall rule generator that automates threat response and significantly enhances network defense layers.", color: "purple" }
                ].map((item, i) => (
                    <div key={i} className="p-12 rounded-[3.5rem] bg-slate-900/40 border border-white/20 backdrop-blur-3xl hover:bg-white/10 transition-all hover:[transform:translateY(-12px)] shadow-2xl relative overflow-hidden group">
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}-500/5 rounded-full blur-3xl`} />
                        <div className={`w-16 h-16 rounded-2xl bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center justify-center text-4xl mb-8 group-hover:rotate-6 transition-transform shadow-inner`}>{item.icon}</div>
                        <h5 className="text-white font-black text-2xl mb-4 tracking-tight uppercase italic">{item.title}</h5>
                        <p className="text-gray-500 font-medium text-lg leading-relaxed italic">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function StandaloneSkills() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    const categories = [
        { title: "Security & Defense", color: "cyan", skills: ["Network Security", "Vulnerability Assessment", "Exploitation Techniques", "Packet Analysis", "Firewall Automation"] },
        { title: "Tools & Core Systems", color: "purple", skills: ["Linux (Kali/Ubuntu)", "Git", "GitHub", "Postman", "Bash Scripting", "Nmap", "Wireshark", "Metasploit", "nftables"] },
        { title: "Programming & Backend", color: "emerald", skills: ["Python", "C++", "Java", "Spring Boot", "REST APIs", "SQL", "JWT Auth", "2FA Integration"] },
        { title: "Soft Skills", color: "pink", skills: ["Problem Solving", "Analytical Thinking", "Adaptability", "Attention To Details"] }
    ];

    if (!mounted) return (
        <div className="flex flex-col gap-24 w-full h-[800px] bg-white/5 rounded-[4rem] animate-pulse items-center justify-center">
            <span className="text-white/20 font-black tracking-widest italic uppercase">Syncing Cyber-Matrix...</span>
        </div>
    );

    return (
        <motion.div 
            className="flex flex-col gap-24 w-full"
            variants={allVariants.scatterEffect}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
        >
            {categories.map((cat, i) => (
                <div key={i} className="space-y-12">
                    <motion.div 
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h4 className={`text-2xl md:text-3xl font-black uppercase tracking-[0.3em] text-${cat.color === 'pink' ? 'pink-400' : cat.color + '-400'}`}>
                            {cat.title}
                        </h4>
                        <div className={`h-[2px] flex-1 bg-gradient-to-r from-${cat.color === 'pink' ? 'pink-500' : cat.color + '-500'}/50 to-transparent`} />
                    </motion.div>
                    
                    <div className="flex flex-wrap gap-6 md:gap-8 justify-center md:justify-start">
                        {cat.skills.map((skill, j) => (
                            <motion.div
                                key={j}
                                custom={j + (i * 10)}
                                variants={scatterChildVariants}
                                whileHover={{ 
                                    scale: 1.1, 
                                    y: -10,
                                    boxShadow: `0 0 30px rgba(var(--${cat.color === 'pink' ? 'pink-500' : cat.color + '-500-rgb'}, 34, 211, 238), 0.4)`
                                }}
                                className={`px-8 py-4 md:px-10 md:py-5 rounded-3xl bg-white/10 border border-white/10 text-white font-black text-lg md:text-2xl backdrop-blur-xl hover:bg-white/20 hover:border-${cat.color === 'pink' ? 'pink-500' : cat.color + '-500'}/40 transition-all cursor-default shadow-2xl relative group overflow-hidden`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br from-${cat.color === 'pink' ? 'pink-500' : cat.color + '-500'}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                                <span className="relative z-10">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </motion.div>
    );
}

function StandaloneProjects() {
    const projects = [
        {
            title: "Dynamic Firewall Rule Generator",
            desc: "A high-performance Python-based tool that automates network defense by generating real-time nftables rules based on live traffic analysis. It implements intelligent threat mitigation to reduce response times to unauthorized access attempts significantly.",
            tech: ["Python", "nftables", "Security Auditing"],
            color: "cyan",
            github: "https://github.com/Kavyanjali07/Dynamic-Firewall-Rule-Generator"
        },
        {
            title: "Secure System Call Interface",
            desc: "An advanced security layer for Linux systems that intercepts and validates system calls using RBAC (Role-Based Access Control) and path-based filtering. Built with Python and C++, it prevents unauthorized execution of sensitive commands at the kernel level.",
            tech: ["C++", "Python", "Linux Kernel"],
            color: "purple",
            github: "https://github.com/Kavyanjali07/User-Friendly-System-Call-Interface-for-Enhanced-Security"
        },
        {
            title: "Smart Expense AI",
            desc: "A sophisticated financial management backend developed with Spring Boot. It features robust JWT-based authentication, 2FA integration, and an AI-driven categorization engine to provide secure, real-time spending insights with high-level data privacy.",
            tech: ["Spring Boot", "JWT", "AI Integration"],
            color: "emerald",
            github: "https://github.com/Kavyanjali07/SmartExpenseAI"
        }
    ];

    return (
        <div className="flex flex-col gap-10">
            {projects.map((p, i) => (
                <div key={i}>
                    <div className="relative group">
                        <div className={`absolute -inset-2 bg-gradient-to-br from-${p.color}-400 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
                        <div className="relative p-12 rounded-[3.5rem] bg-slate-900/40 border border-white/20 backdrop-blur-3xl hover:bg-white/10 transition-all h-full flex flex-col shadow-2xl">
                            <div className="flex justify-between items-start mb-6">
                                <h4 className="text-3xl font-black text-white tracking-tighter uppercase italic">{p.title}</h4>
                            </div>
                            <p className="text-gray-400 font-medium mb-10 flex-1 italic text-lg leading-relaxed">{p.desc}</p>
                            <div className="flex flex-wrap gap-2 mb-10">
                                {p.tech.map(t => (
                                    <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/40">{t}</span>
                                ))}
                            </div>
                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                                <span className="text-[10px] uppercase font-black tracking-[0.5em] text-cyan-400/40">Repository</span>
                                <a href={p.github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-cyan-500/20 hover:border-cyan-500 transition-all active:scale-90 shadow-2xl group/btn">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:scale-110 transition-transform">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    {i < projects.length - 1 && (
                        <motion.div
                            className="flex justify-center my-8"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <motion.svg
                                width="100"
                                height="50"
                                viewBox="0 0 100 50"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-cyan-400"
                                animate={{ pathLength: [0, 1] }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                            >
                                <motion.path
                                    d="M 10 40 Q 50 10 90 40"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                />
                                <motion.path
                                    d="M 85 35 L 90 40 L 95 35"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 1 }}
                                />
                            </motion.svg>
                        </motion.div>
                    )}
                </div>
            ))}
        </div>
    );
}

// --- Main Layout ---

export default function JourneySections() {
    return (
        <div className="w-full bg-transparent relative overflow-hidden transition-colors duration-500">
            {/* Animated Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-1/4 -left-[10%] w-[50%] h-[50%] bg-cyan-500/5 rounded-full blur-[160px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 15, repeat: Infinity }}
                />
                <motion.div
                    className="absolute top-3/4 -right-[10%] w-[50%] h-[50%] bg-purple-500/5 rounded-full blur-[160px]"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 18, repeat: Infinity }}
                />
            </div>

            <div className="relative z-10 space-y-0 py-20 pb-60">
                {/* Vertical Cyber-Connector Line (Enhanced Visibility) */}
                <div className="absolute left-1/2 -translate-x-1/2 top-40 bottom-60 w-[2px] bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent hidden md:block z-0 pointer-events-none shadow-[0_0_15px_rgba(6,182,212,0.4)]" />

                <SectionWrapper id="about-me" title="About Me" icon="👤" color="purple" variantType="tiltFlip">
                    <AboutMeVisual />
                </SectionWrapper>

                <motion.section 
                    id="skills"
                    className="w-full max-w-7xl mx-auto py-32 px-8 relative"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {/* Connection Node Upper and Lower for Skills */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-cyan-500/30 bg-cyan-500/20 backdrop-blur-sm z-20 hidden md:block shadow-[0_0_10px_rgba(6,182,212,0.3)]" />
                    
                    <SectionHeader title="Skills" icon="⚡" color="cyan" />
                    <div className="mt-16">
                        <StandaloneSkills />
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-cyan-500/30 bg-cyan-500/20 backdrop-blur-sm z-20 hidden md:block shadow-[0_0_10px_rgba(6,182,212,0.3)]" />
                </motion.section>

                <SectionWrapper id="projects" title="Projects" icon="🚀" color="emerald" variantType="stackSlide">
                    <StandaloneProjects />
                </SectionWrapper>

                <SectionWrapper id="trainings" title="Trainings" icon="📚" color="blue" variantType="unrollCascade">
                    <TrainingsVisual />
                </SectionWrapper>

                <SectionWrapper id="certificates" title="Certificates" icon="🏆" color="amber" variantType="unrollCascade">
                    <CertificatesVisual />
                </SectionWrapper>

                <SectionWrapper id="achievements" title="Achievements" icon="🌟" color="fuchsia" variantType="tiltFlip">
                    <AchievementsStatic />
                </SectionWrapper>

                <SectionWrapper id="education" title="Education" icon="🎓" color="indigo" variantType="unrollCascade">
                    <EducationVisual />
                </SectionWrapper>

                <SectionWrapper id="contact" title="Contact Me" icon="✉️" color="purple" variantType="spotlightZoom">
                    <div className="flex flex-col gap-12">
                        <p className="text-gray-400 text-xl font-bold italic text-center max-w-2xl mx-auto">
                            Whether you have a question, a project idea, or just want to say hi, feel free to reach out through any of the channels below.
                        </p>
                        <MagicBento 
                          textAutoHide={true}
                          enableStars
                          enableSpotlight
                          enableBorderGlow={true}
                          enableTilt={true}
                          enableMagnetism={true}
                          clickEffect
                          spotlightRadius={400}
                          particleCount={18}
                          glowColor="132, 0, 255"
                        />
                    </div>
                </SectionWrapper>
            </div>
        </div>
    );
}
