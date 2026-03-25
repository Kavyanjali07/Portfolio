"use client";

import { motion } from "framer-motion";
import DarkVeil from "./DarkVeil";

const orbs = [
    {
        size: "w-72 h-72",
        color: "bg-slate-500/15",
        blur: "blur-3xl",
        x: ["-10%", "15%", "-5%"],
        y: ["5%", "-10%", "5%"],
        duration: 18,
        initialX: "10%",
        initialY: "15%",
    },
    {
        size: "w-96 h-96",
        color: "bg-sky-600/10",
        blur: "blur-3xl",
        x: ["60%", "75%", "60%"],
        y: ["50%", "35%", "50%"],
        duration: 22,
        initialX: "60%",
        initialY: "50%",
    },
    {
        size: "w-80 h-80",
        color: "bg-cyan-500/10",
        blur: "blur-3xl",
        x: ["70%", "55%", "70%"],
        y: ["-5%", "10%", "-5%"],
        duration: 20,
        initialX: "70%",
        initialY: "-5%",
    },
    {
        size: "w-64 h-64",
        color: "bg-slate-400/15",
        blur: "blur-2xl",
        x: ["30%", "45%", "30%"],
        y: ["60%", "75%", "60%"],
        duration: 16,
        initialX: "30%",
        initialY: "60%",
    },
    {
        size: "w-56 h-56",
        color: "bg-sky-400/8",
        blur: "blur-3xl",
        x: ["45%", "30%", "45%"],
        y: ["20%", "30%", "20%"],
        duration: 24,
        initialX: "45%",
        initialY: "20%",
    },
];

const particles = [
    { left: 5, top: 12, duration: 5.2, delay: 0.3 },
    { left: 15, top: 68, duration: 6.8, delay: 1.1 },
    { left: 25, top: 35, duration: 4.5, delay: 2.4 },
    { left: 38, top: 82, duration: 7.1, delay: 0.7 },
    { left: 48, top: 18, duration: 5.9, delay: 3.2 },
    { left: 55, top: 55, duration: 6.3, delay: 1.8 },
    { left: 62, top: 90, duration: 4.8, delay: 4.0 },
    { left: 72, top: 28, duration: 7.5, delay: 0.5 },
    { left: 80, top: 72, duration: 5.6, delay: 2.9 },
    { left: 88, top: 45, duration: 6.1, delay: 1.5 },
    { left: 10, top: 50, duration: 7.8, delay: 3.7 },
    { left: 22, top: 8, duration: 4.3, delay: 0.9 },
    { left: 33, top: 62, duration: 5.5, delay: 4.5 },
    { left: 45, top: 40, duration: 6.7, delay: 2.1 },
    { left: 58, top: 15, duration: 7.2, delay: 1.3 },
    { left: 67, top: 78, duration: 4.9, delay: 3.5 },
    { left: 75, top: 5, duration: 6.4, delay: 0.1 },
    { left: 83, top: 58, duration: 5.1, delay: 2.6 },
    { left: 92, top: 30, duration: 7.6, delay: 4.2 },
    { left: 3, top: 88, duration: 5.8, delay: 1.6 },
];

export default function AnimatedBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Base Grid Layer */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]" 
                 style={{ 
                    backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                    backgroundSize: '40px 40px' 
                 }} 
            />
            
            {/* Cyber Scanning Line */}
            <motion.div 
                className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-[2px] w-full"
                animate={{
                    top: ["0%", "100%", "0%"]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Glowing Orbs - Reduced for mobile */}
            {orbs.slice(0, 3).map((orb, index) => (
                <motion.div
                    key={index}
                    className={`absolute rounded-full ${orb.size} ${orb.color} ${index === 0 ? 'block' : 'hidden sm:block'} sm:${orb.blur} opacity-20 dark:opacity-30`}
                    initial={{ left: orb.initialX, top: orb.initialY }}
                    animate={{
                        left: orb.x,
                        top: orb.y,
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: orb.duration,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Tech Hexagon Orbits (CSS only for perf) - Desktop only */}
            <div className="absolute inset-0 overflow-hidden hidden md:block">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] border border-cyan-500/10 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute top-[40%] right-[5%] w-[600px] h-[600px] border border-purple-500/5 rounded-full animate-[spin_80s_linear_infinite_reverse]" />
            </div>

            {/* Subtle floating particles - Greatly reduced for mobile */}
            {particles.slice(0, 8).map((p, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className={`absolute w-1 h-1 rounded-full bg-cyan-400/30 ${i > 4 ? 'hidden sm:block' : ''}`}
                    initial={{
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
