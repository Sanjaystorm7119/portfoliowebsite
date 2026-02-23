import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sanjay B | Gen AI Developer",
  description: "Sanjay B – Gen AI Developer specialising in LangChain, LangGraph, RAG, Agentic AI, and MCP. Building production-ready AI systems.",
  keywords: ["Sanjay B", "Gen AI Developer", "LangChain", "LangGraph", "LangSmith", "RAG", "Agentic AI", "MCP", "Python", "Docker", "Portfolio"],
  openGraph: {
    title: "Sanjay B | Gen AI Developer",
    description: "Specialising in LangChain, LangGraph, RAG, Agentic AI, and MCP.",
    type: "website",
    url: "https://antigravity-portfolio.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjay B | Full Stack Developer",
    description: "Crafting exceptional digital experiences with modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider>
          {children}
          <Analytics/>
        </ThemeProvider>
      </body>
    </html>
  );
}
