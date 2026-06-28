import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"], variable: "--font-cormorant",
  weight: ["300","400","500","600","700"], style: ["normal","italic"], display: "swap",
});
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", weight: ["400","500","600","700"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Nagelia Henry — Digital Strategist & Brand Storyteller", template: "%s | Nagelia Henry" },
  description: "Digital strategist, brand storyteller, and content creator focused on audience engagement, brand marketing, and meaningful digital experiences.",
  keywords: ["digital strategy","brand marketing","content creation","social media strategy","audience engagement","PR","influencer marketing","Nagelia Henry"],
  authors: [{ name: "Nagelia Henry" }],
  openGraph: {
    type: "website", title: "Nagelia Henry — Digital Strategist & Brand Storyteller",
    description: "Digital strategist, brand storyteller, and content creator focused on audience engagement, brand marketing, and meaningful digital experiences.",
    images: [{ url: "/images/headshot.jpg", width: 1200, height: 630, alt: "Nagelia Henry" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${caveat.variable}`}>
      <body className="min-h-screen" style={{ background: "#FAF8F4" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
