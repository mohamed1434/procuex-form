import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToasterProvider } from "@/providers/toast-provider";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProcueX Forms",
  description: "RFQ forms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <Navbar />
          <ToasterProvider />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
