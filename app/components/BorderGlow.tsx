"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BorderGlowProps {
  children: React.ReactNode;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: string[];
  className?: string;
}

export default function BorderGlow({
  children,
  edgeSensitivity = 30,
  glowColor = "40 80 80",
  backgroundColor = "#060010",
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1,
  coneSpread = 25,
  animated = false,
  colors = ['#c084fc', '#f472b6', '#38bdf8'],
  className = "",
}: BorderGlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    if (!animated) return;
    let animationFrameId: number;
    const updateRotation = () => {
      setRotation((prev) => (prev + 1) % 360);
      animationFrameId = requestAnimationFrame(updateRotation);
    };
    animationFrameId = requestAnimationFrame(updateRotation);
    return () => cancelAnimationFrame(animationFrameId);
  }, [animated]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Parse glowColor specifically if it's RGB components (e.g. "40 80 80")
  const parsedGlowColor = glowColor.split(' ').length === 3
    ? `rgb(${glowColor.replace(/ /g, ', ')})`
    : glowColor;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex overflow-hidden ${className}`}
      style={{
        borderRadius: `${borderRadius}px`,
        backgroundColor,
      }}
    >
      {/* Glow Layer */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? glowIntensity : 0,
          background: animated
            ? `conic-gradient(from ${rotation}deg at 50% 50%, ${colors.join(", ")}, ${colors[0]})`
            : `radial-gradient(
                circle ${glowRadius * 2}px at ${position.x}px ${position.y}px,
                ${parsedGlowColor},
                transparent
              )`,
        }}
      />
      {/* Optional fallback gradient if animated is true */}
      {animated && (
        <div 
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-50"
          style={{
             background: `radial-gradient(circle ${glowRadius * 2}px at ${position.x}px ${position.y}px, rgba(255,255,255,0.4), transparent)`
          }}
        />
      )}

      {/* Inner Mask Layer */}
      <div
        className="absolute z-1 pointer-events-none"
        style={{
          inset: "1.5px", // Width of the border
          backgroundColor,
          borderRadius: `${borderRadius - 1.5}px`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
