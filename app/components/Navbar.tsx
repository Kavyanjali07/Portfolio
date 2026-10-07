"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "ABOUT", num: "01", id: "about" },
  { label: "WORK", num: "02", id: "work" },
  { label: "ENGINEERING", num: "03", id: "engineering" },
  { label: "SECURITY", num: "04", id: "security" },
  { label: "CREDENTIALS", num: "05", id: "credentials" },
  { label: "CONTACT", num: "06", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Fixed Minimal Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#F5EEE9]/90 backdrop-blur-md border-b border-[#E3E1D4] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-left group cursor-pointer"
          >
            <span className="block font-editorial text-lg md:text-xl font-bold tracking-tight text-[#2C2D1F] group-hover:text-[#5C6E21] transition-colors">
              KAVYANJALI VASHISHTHA
            </span>
            <span className="block text-[10px] uppercase font-sans tracking-[0.25em] text-[#373F1D]/70 font-semibold">
              Software Engineering × Security
            </span>
          </button>

          {/* Right Controls */}
          <div className="flex items-center gap-6 md:gap-8">
            {/* Availability Indicator */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-[#E3E1D4] bg-[#E3E1D4]/40">
              <span className="w-2 h-2 rounded-full bg-[#5C6E21] animate-pulse" />
              <span className="text-[10px] font-sans uppercase font-medium tracking-widest text-[#373F1D]">
                Available
              </span>
            </div>

            {/* Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex items-center gap-3 cursor-pointer py-1 px-2 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <span className="text-xs font-sans uppercase tracking-[0.2em] font-semibold text-[#2C2D1F] group-hover:text-[#5C6E21] transition-colors">
                {isOpen ? "CLOSE" : "MENU"}
              </span>
              <div className="w-6 h-4 flex flex-col justify-between items-end">
                <span
                  className={`h-[1.5px] bg-[#2C2D1F] group-hover:bg-[#5C6E21] transition-all duration-300 ${
                    isOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
                  }`}
                />
                <span
                  className={`h-[1.5px] bg-[#2C2D1F] group-hover:bg-[#5C6E21] transition-all duration-300 ${
                    isOpen ? "opacity-0" : "w-4"
                  }`}
                />
                <span
                  className={`h-[1.5px] bg-[#2C2D1F] group-hover:bg-[#5C6E21] transition-all duration-300 ${
                    isOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Editorial Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-[#F5EEE9] text-[#2C2D1F] flex flex-col justify-between p-8 md:p-16 overflow-y-auto"
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between border-b border-[#E3E1D4] pb-6">
              <span className="font-editorial text-xl font-bold tracking-tight text-[#2C2D1F]">
                KAVYANJALI VASHISHTHA
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs uppercase font-sans tracking-[0.2em] font-semibold text-[#373F1D] hover:text-[#5C6E21] transition-colors cursor-pointer"
              >
                CLOSE [×]
              </button>
            </div>

            {/* Editorial Nav Items List */}
            <div className="my-auto py-8 max-w-4xl mx-auto w-full">
              <ul className="space-y-4 md:space-y-6">
                {NAV_ITEMS.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.06, duration: 0.4 }}
                    className="border-b border-[#E3E1D4]/60 pb-3"
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="w-full flex items-baseline justify-between text-left group cursor-pointer"
                    >
                      <div className="flex items-baseline gap-4 md:gap-8">
                        <span className="text-xs md:text-sm font-sans font-medium text-[#5C6E21]">
                          {item.num}
                        </span>
                        <span className="font-editorial text-3xl md:text-6xl font-normal tracking-tight text-[#2C2D1F] group-hover:text-[#5C6E21] group-hover:italic transition-all duration-300">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-xl md:text-3xl text-[#5C6E21] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                        →
                      </span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bottom Footer inside Overlay */}
            <div className="border-t border-[#E3E1D4] pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-[#373F1D]/80 gap-4">
              <div className="flex items-center gap-6 uppercase font-sans tracking-widest">
                <span>BASED IN INDIA</span>
                <span>•</span>
                <span>JAVA / PYTHON / SPRING BOOT</span>
              </div>
              <div className="flex items-center gap-6 font-sans font-medium uppercase tracking-widest">
                <a
                  href="https://github.com/Kavyanjali07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5C6E21] transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/kavyanjali07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5C6E21] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:kavyanjalivashishtha@gmail.com"
                  className="hover:text-[#5C6E21] transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
