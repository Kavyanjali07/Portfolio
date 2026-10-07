import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kavyanjali Vashishtha — Software Engineering × Cybersecurity",
  description:
    "Computer Science and Engineering student focused on building secure, reliable systems and understanding the ways they fail.",
  openGraph: {
    title: "Kavyanjali Vashishtha — Software Engineering × Cybersecurity",
    description:
      "Computer Science and Engineering student focused on building secure, reliable systems and understanding the ways they fail.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased text-[#2C2D1F] bg-[#F5EEE9] min-h-screen selection:bg-[#5C6E21] selection:text-[#F5EEE9]`}
      >
        <SmoothScroll />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

