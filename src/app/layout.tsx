import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Google Next",
  description: "Google clone using Next.js and Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
