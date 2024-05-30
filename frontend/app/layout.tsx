import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Soul Ceramics",
    template: "Soul Ceramics | %s",
  },
  description: "Soul Ceramics is a creative studio that specializes in creating high-quality, unique pieces of art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        <main className="layout min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
