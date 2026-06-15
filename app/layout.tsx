import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Bitcoin Web",
  description: "A reverse historical atlas of the ideas, technologies, institutions, and discoveries that made Bitcoin possible."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

