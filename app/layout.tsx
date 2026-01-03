import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anne-Nora Sabirin | Virtual Assistant & Research Professional",
  description:
    "Professional Virtual Assistant specializing in Medical VA, Social Media Management, Research & Data Analysis, and Executive Assistance. Based in the Philippines.",
  keywords: [
    "Virtual Assistant",
    "Medical VA",
    "Research Consultant",
    "Social Media Manager",
    "Executive Assistant",
    "Philippines",
    "Anne-Nora Sabirin",
  ],
  authors: [{ name: "Anne-Nora Sabirin" }],
  openGraph: {
    title: "Anne-Nora Sabirin | Virtual Assistant & Research Professional",
    description:
      "Professional Virtual Assistant specializing in Medical VA, Social Media Management, Research & Data Analysis, and Executive Assistance.",
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
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
