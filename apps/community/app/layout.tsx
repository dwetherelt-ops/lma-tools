import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Like Minds Community — Connect, Learn, Thrive",
  description:
    "The interactive community platform for neurodivergent adults. Forums, peer learning, neuro profiles, burnout tracking, and personalised guidance.",
  openGraph: {
    title: "Like Minds Community",
    description:
      "Interactive community for neurodivergent adults. Forums, peer learning, and personalised tools.",
    url: "https://likemindscommunity.org",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
