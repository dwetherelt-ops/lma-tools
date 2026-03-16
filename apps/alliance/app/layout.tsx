import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Like Minds Community — Neurodivergent Adult Community",
  description:
    "The world's most credible, compassionate, and empowering community for neurodivergent minds. Science-backed resources, genetics education, and peer support.",
  openGraph: {
    title: "Like Minds Community",
    description:
      "Science-backed community for neurodivergent adults. Genetics education, peer support, and burnout prevention.",
    url: "https://likemindsalliance.org",
    siteName: "Like Minds Community",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
