"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import SplitText from "./SplitText";
import TextType from "./TextType";

export default function Hero() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-transparent text-gray-900 dark:text-white overflow-hidden px-8 md:px-16 lg:px-24 transition-colors duration-300">
            <AnimatedBackground />

            <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 py-20">
                
                {/* 1. Left Column: Content */}
                <motion.div
                    className="flex-[1.2] flex flex-col items-start gap-8"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="space-y-4">
                        <motion.div
                            className="flex font-mono items-center gap-2 text-[#38bdf8] text-xs tracking-[0.4em] uppercase font-black"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <span className="w-8 h-[1px] bg-cyan-500/50" />
                            <TextType
                                text={["Security-Focused Engineer"]}
                                typingSpeed={65}
                                pauseDuration={1200}
                                showCursor
                                cursorCharacter="|"
                                deletingSpeed={30}
                                variableSpeedEnabled={false}
                                variableSpeedMin={60}
                                variableSpeedMax={80}
                                cursorBlinkDuration={0.5}
                            />
                        </motion.div>
                        <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-[#f1f5f9] leading-[0.9] transition-colors duration-300 tracking-tighter">
                            Kavyanjali
                            <br />
                            <span className="text-gray-400/50 dark:text-[#94a3b8]/40 transition-colors duration-300">Vashishtha</span>
                        </h1>
                    </div>

                    <div className="relative group max-w-2xl">
                        {/* Highlights Background */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        <div className="relative space-y-8 bg-white/5 dark:bg-[#0f172a]/40 border border-white/10 md:backdrop-blur-2xl p-10 rounded-[2.5rem] shadow-2xl transition-all duration-500 hover:border-cyan-500/30">
                            <p className="text-gray-900 dark:text-white font-black text-2xl md:text-3xl leading-tight tracking-tight">
                                <TextType
                                    text={["Secure by Design:", "Architecting Resilience"]}
                                    typingSpeed={75}
                                    pauseDuration={1500}
                                    showCursor
                                    cursorCharacter="_"
                                    deletingSpeed={50}
                                    variableSpeedEnabled={false}
                                    variableSpeedMin={60}
                                    variableSpeedMax={120}
                                    cursorBlinkDuration={0.5}
                                />
                            </p>
                            
                            <p className="text-gray-700 dark:text-[#cbd5e1] leading-relaxed text-lg font-bold">
                                Computer Science specialized in system security, network defense, and intelligent threat automation. I build code that survives the real world.
                            </p>

                        <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                            <div className="w-1.5 h-12 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full" />
                            <p className="text-gray-500 dark:text-[#94a3b8] leading-relaxed text-lg italic font-bold">
                                I don&apos;t just build applications; I build fortresses. Explore projects that bridge development and offensive security.
                            </p>
                        </div>
                        </div>
                    </div>
                </motion.div>

                {/* 2. Right Column (Sub-layout for QuickAccess + Photo + Buttons) */}
                <motion.div
                    className="flex-1 flex flex-col items-center gap-10"
                    initial={{ opacity: 0, scale: 0.8, x: 60 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                >
                    {/* Horizontal Quick Access - Cyber Edition */}
                    <div className="w-full flex flex-col items-center gap-6">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                            <span className="text-[10px] md:text-[11px] font-mono font-black text-cyan-400/60 uppercase tracking-[0.5em]">Active Journey Matrix v1.0</span>
                        </div>
                        
                        <div className="relative group px-4">
                            {/* Cyber Accents */}
                            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-lg group-hover:border-cyan-500 group-hover:scale-110 transition-all duration-500" />
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-purple-500/30 rounded-br-lg group-hover:border-purple-500 group-hover:scale-110 transition-all duration-500" />
                            
                            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 p-4 rounded-2xl bg-white/5 dark:bg-slate-900/40 border border-white/10 md:backdrop-blur-xl shadow-2xl group-hover:border-cyan-500/20 transition-all duration-500">
                                {[
                                    { label: "About Me", icon: "👤", id: "about-me" },
                                    { label: "Achievements", icon: "🌟", id: "achievements" },
                                    { label: "Mindset", icon: "🛡️", id: "mindset" },
                                    { label: "Skills", icon: "⚡", id: "skills" },
                                    { label: "Projects", icon: "🚀", id: "projects" },
                                    { label: "Trainings", icon: "📚", id: "trainings" },
                                    { label: "Certificates", icon: "🏆", id: "certificates" },
                                    { label: "Education", icon: "🎓", id: "education" },
                                    { label: "Contact", icon: "✉️", id: "contact" },
                                ].map((s, i) => (
                                    <button
                                        key={s.label}
                                        title={s.label}
                                        className="relative w-11 h-11 md:w-14 md:h-14 rounded-xl flex items-center justify-center bg-white/5 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30 transition-all duration-300 group/btn shadow-lg"
                                        onClick={() => {
                                            const el = document.getElementById(s.id);
                                            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                    >
                                        {/* Target Lock Effect */}
                                        <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity">
                                            <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-cyan-400" />
                                            <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-cyan-400" />
                                        </div>
                                        <span className="text-xl md:text-2xl group-hover/btn:scale-110 group-hover/btn:rotate-6 transition-transform">{s.icon}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="relative group p-4">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 6, repeat: Infinity }}
                        />
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-[8px] border-white/5 dark:border-[#1e293b] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] bg-[#0f172a] group-hover:border-cyan-500/30 transition-all duration-500">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/profile.jpg"
                                alt="Kavyanjali Vashishtha"
                                className="w-full h-full object-cover object-top scale-110 group-hover:scale-125 transition-transform duration-1000 ease-out"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-40" />
                        </div>
                    </div>

                    {/* Buttons under photo */}
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <a
                            href="https://drive.google.com/file/d/1KssYKRinThNHeGsjkHeCntxsP0p3hCrP/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative px-8 py-3.5 inline-flex items-center justify-center rounded-2xl bg-[#1e293b]/80 border border-purple-500/30 text-white font-bold text-sm tracking-wide shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300 md:backdrop-blur-md"
                        >
                            My CV
                        </a>

                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="relative px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold text-sm tracking-wide shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300 group"
                        >
                            Let&apos;s Connect
                            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                        </button>
                    </div>
                </motion.div>

                {/* 3. Far Right Column: Social Sidebar */}
                <motion.div 
                    className="hidden lg:flex flex-col items-center gap-8 ml-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-cyan-500/30 to-cyan-500/50" />
                    <div className="flex flex-col gap-6">
                        <a
                            href="https://github.com/Kavyanjali07"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 group shadow-lg"
                        >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kavyanjali07"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-300 group shadow-lg"
                        >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>
                    <div className="w-[1px] h-20 bg-gradient-to-t from-transparent via-purple-500/30 to-purple-500/50" />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="relative z-10 mb-12 cursor-pointer group flex flex-col items-center gap-3"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                onClick={() => {
                    const nextSection = document.querySelector('section')?.nextElementSibling;
                    if (nextSection) {
                        nextSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
            >
                <span className="text-[10px] uppercase font-black tracking-[0.4em] text-cyan-400/40 group-hover:text-cyan-400 transition-colors">Reveal Story</span>
                <div className="w-8 h-12 rounded-full border-2 border-cyan-400/20 flex justify-center p-1.5 group-hover:border-cyan-400 transition-all">
                    <motion.div 
                        className="w-1.5 h-2.5 bg-cyan-400 rounded-full"
                        animate={{ y: [0, 15, 0], opacity: [1, 0.4, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>

            {/* Contact Modal */}
            <AnimatePresence>
                {isContactOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsContactOpen(false)}
                    >
                        <motion.div
                            className="relative w-full max-w-md p-8 rounded-3xl border-2 border-cyan-400/50 bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-2xl shadow-[0_0_50px_rgba(34,211,238,0.3)] text-center transition-colors duration-300"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 p-2 text-cyan-600 dark:text-cyan-300 hover:text-gray-900 dark:hover:text-white transition-colors bg-cyan-100 dark:bg-cyan-500/10 rounded-full hover:bg-cyan-200 dark:hover:bg-cyan-500/30"
                                onClick={() => setIsContactOpen(false)}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>

                            <div className="mb-6 flex justify-center">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 dark:from-purple-500/20 dark:to-cyan-500/20 border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                                    <span className="text-3xl">👋</span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-wide transition-colors duration-300">Let&apos;s Connect</h3>
                            <p className="text-gray-600 dark:text-[#cbd5e1] mb-8 font-medium transition-colors duration-300">I&apos;d love to hear from you!</p>

                            <div className="space-y-3">
                                <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-4 flex items-center justify-center gap-3 group hover:border-cyan-400/50 transition-colors">
                                    <svg className="text-cyan-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    <a href="mailto:kavyanjalivashishtha@gmail.com" className="text-gray-900 dark:text-white font-semibold text-lg hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">
                                        kavyanjalivashishtha@gmail.com
                                    </a>
                                </div>

                                <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-4 flex items-center justify-center gap-3 group hover:border-purple-400/50 transition-colors">
                                    <svg className="text-purple-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 1 .7 2.81 2 2 0 0 1-.45 1.11L8.09 9.33a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 1.11-.45 12.84 12.84 0 0 1 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                    <a href="tel:+917417028100" className="text-gray-900 dark:text-white font-semibold text-lg hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
                                        +91 7417028100
                                    </a>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-4">
                                <a
                                    href="https://github.com/Kavyanjali07"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-cyan-500 hover:border-cyan-500/50 transition-all"
                                >
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/kavyanjali07"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-purple-500 hover:border-purple-500/50 transition-all"
                                >
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}