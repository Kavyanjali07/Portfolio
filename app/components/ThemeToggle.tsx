"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="fixed top-6 right-6 z-50 w-10 h-10" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-50 p-2.5 rounded-full border border-gray-200 dark:border-[#334155]/60 bg-white/80 dark:bg-[#1e293b]/80 backdrop-blur-md text-gray-700 dark:text-[#94a3b8] shadow-lg shadow-black/5 dark:shadow-black/30 hover:scale-110 transition-all duration-300 hover:border-gray-300 dark:hover:border-[#94a3b8]/50"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-amber-400 drop-shadow-md" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600 drop-shadow-md" />
      )}
    </button>
  );
}
