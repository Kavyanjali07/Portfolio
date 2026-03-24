"use client";

import { motion } from "framer-motion";

interface ProjectBackgroundProps {
    projectId: string;
    projectColor: string;
}

const backgroundAnimations = {
    firewall: {
        elements: [
            {
                type: "blob",
                color: "from-cyan-500 to-blue-500",
                opacity: 0.08,
                size: "w-[600px] h-[600px]",
                position: "top-1/4 -left-32",
                duration: 8,
                delay: 0,
            },
            {
                type: "blob",
                color: "from-blue-500 to-cyan-400",
                opacity: 0.06,
                size: "w-[500px] h-[500px]",
                position: "bottom-1/3 -right-24",
                duration: 10,
                delay: 2,
            },
            {
                type: "orb",
                color: "cyan-400",
                opacity: 0.04,
                size: "w-[400px] h-[400px]",
                position: "top-1/2 left-1/2",
                duration: 12,
                delay: 1,
            },
        ],
    },
    syscall: {
        elements: [
            {
                type: "blob",
                color: "from-purple-500 to-pink-500",
                opacity: 0.08,
                size: "w-[650px] h-[650px]",
                position: "top-1/3 left-1/4",
                duration: 9,
                delay: 0,
            },
            {
                type: "blob",
                color: "from-pink-500 to-purple-400",
                opacity: 0.06,
                size: "w-[550px] h-[550px]",
                position: "bottom-1/4 right-1/4",
                duration: 11,
                delay: 2.5,
            },
            {
                type: "orb",
                color: "purple-400",
                opacity: 0.05,
                size: "w-[450px] h-[450px]",
                position: "top-1/2 right-1/3",
                duration: 13,
                delay: 1.5,
            },
        ],
    },
    expense: {
        elements: [
            {
                type: "blob",
                color: "from-emerald-500 to-cyan-500",
                opacity: 0.08,
                size: "w-[600px] h-[600px]",
                position: "top-1/2 -left-40",
                duration: 8.5,
                delay: 0,
            },
            {
                type: "blob",
                color: "from-cyan-500 to-emerald-400",
                opacity: 0.06,
                size: "w-[550px] h-[550px]",
                position: "bottom-1/3 -right-32",
                duration: 10.5,
                delay: 3,
            },
            {
                type: "orb",
                color: "emerald-400",
                opacity: 0.04,
                size: "w-[420px] h-[420px]",
                position: "top-1/3 right-1/2",
                duration: 12,
                delay: 1.2,
            },
        ],
    },
};

function AnimatedBlob({
    color,
    opacity,
    size,
    position,
    duration,
    delay,
}: {
    color: string;
    opacity: number;
    size: string;
    position: string;
    duration: number;
    delay: number;
}) {
    return (
        <motion.div
            className={`absolute ${size} ${position} rounded-full blur-[100px] pointer-events-none`}
            animate={{
                x: [0, 50, -30, 20, 0],
                y: [0, -50, 40, -30, 0],
                scale: [1, 1.2, 0.95, 1.1, 1],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <div
                className={`w-full h-full bg-gradient-to-br ${color} opacity-${opacity === 0.08 ? 8 : opacity === 0.06 ? 6 : 4} blur-3xl`}
                style={{ opacity }}
            />
        </motion.div>
    );
}

function AnimatedOrb({
    color,
    opacity,
    size,
    position,
    duration,
    delay,
}: {
    color: string;
    opacity: number;
    size: string;
    position: string;
    duration: number;
    delay: number;
}) {
    return (
        <motion.div
            className={`absolute ${size} ${position} rounded-full pointer-events-none`}
            animate={{
                scale: [0.8, 1.1, 0.9, 1, 0.8],
                opacity: [opacity * 0.5, opacity, opacity * 0.6, opacity, opacity * 0.5],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <div
                className={`w-full h-full bg-${color}/20 rounded-full blur-2xl ring-1 ring-${color}/30`}
                style={{
                    backgroundColor: `rgba(${getColorRGB(color)}, ${opacity})`,
                    boxShadow: `0 0 40px rgba(${getColorRGB(color)}, ${opacity * 0.8})`,
                }}
            />
        </motion.div>
    );
}

// Helper function to convert color names to RGB (simplified)
function getColorRGB(color: string): string {
    const colorMap: Record<string, string> = {
        "cyan-400": "34, 211, 238",
        "cyan-500": "6, 182, 212",
        "blue-500": "59, 130, 246",
        "purple-400": "192, 132, 250",
        "purple-500": "168, 85, 247",
        "pink-500": "236, 72, 153",
        "emerald-400": "52, 211, 153",
        "emerald-500": "16, 185, 129",
    };
    return colorMap[color] || "100, 100, 100";
}

export default function ProjectBackground({
    projectId,
    projectColor,
}: ProjectBackgroundProps) {
    const animationConfig =
        backgroundAnimations[projectId as keyof typeof backgroundAnimations] ||
        backgroundAnimations.firewall;

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Static gradient base layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#0f1729] to-[#030712]" />

            {/* Animated elements */}
            {animationConfig.elements.map((element, idx) => (
                <div key={idx}>
                    {element.type === "blob" ? (
                        <AnimatedBlob
                            color={element.color}
                            opacity={element.opacity}
                            size={element.size}
                            position={element.position}
                            duration={element.duration}
                            delay={element.delay}
                        />
                    ) : (
                        <AnimatedOrb
                            color={element.color}
                            opacity={element.opacity}
                            size={element.size}
                            position={element.position}
                            duration={element.duration}
                            delay={element.delay}
                        />
                    )}
                </div>
            ))}

            {/* Mesh grid overlay (subtle) */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        <pattern
                            id="grid"
                            width="10"
                            height="10"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M 10 0 L 0 0 0 10"
                                fill="none"
                                stroke="white"
                                strokeWidth="0.1"
                            />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </div>

            {/* Vignette effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-40 pointer-events-none" />
        </div>
    );
}
